const https = require('https');

const GITHUB_TOKEN = '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';
const GITHUB_USERNAME = 'MengseuThoeng';

function fetchGitHubRepos(page = 1, perPage = 100) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/users/${GITHUB_USERNAME}/repos?page=${page}&per_page=${perPage}&sort=updated`,
      method: 'GET',
      headers: {
        'User-Agent': 'Node.js',
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    https.get(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          const repos = JSON.parse(data);
          const linkHeader = res.headers.link;
          resolve({ repos, linkHeader });
        } else {
          reject(new Error(`GitHub API returned status ${res.statusCode}: ${data}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function getAllRepos() {
  let allRepos = [];
  let page = 1;
  let hasNextPage = true;

  console.log('🔍 Fetching repositories from GitHub...\n');

  while (hasNextPage) {
    try {
      const { repos, linkHeader } = await fetchGitHubRepos(page);
      
      console.log(`📦 Page ${page}: Found ${repos.length} repositories`);
      
      allRepos = allRepos.concat(repos);

      // Check if there's a next page
      hasNextPage = linkHeader && linkHeader.includes('rel="next"');
      page++;

      // Add a small delay to avoid rate limiting
      if (hasNextPage) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } catch (error) {
      console.error(`❌ Error fetching page ${page}:`, error.message);
      break;
    }
  }

  return allRepos;
}

function formatRepoForPortfolio(repo) {
  // Extract technologies from topics/languages
  const technologies = repo.topics || [];
  
  // Determine if it's featured based on stars, forks, or specific criteria
  const isFeatured = repo.stargazers_count > 0 || repo.forks_count > 0 || technologies.length > 0;

  return {
    id: repo.id,
    title: repo.name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: repo.description || 'A project built with modern technologies.',
    image: '/projects/default.jpg',
    technologies: technologies.slice(0, 5),
    github: repo.html_url,
    demo: repo.homepage || '',
    featured: isFeatured,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    updated: repo.updated_at,
  };
}

async function main() {
  try {
    const repos = await getAllRepos();
    
    console.log(`\n✅ Total repositories fetched: ${repos.length}\n`);
    console.log('📊 Repository Statistics:');
    console.log('─'.repeat(80));

    // Filter out forks if you want only original repos
    const originalRepos = repos.filter(repo => !repo.fork);
    console.log(`Original repos: ${originalRepos.length}`);
    console.log(`Forked repos: ${repos.length - originalRepos.length}`);

    // Group by language
    const languageStats = {};
    repos.forEach(repo => {
      if (repo.language) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
      }
    });

    console.log('\n🔤 Languages:');
    Object.entries(languageStats)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .forEach(([lang, count]) => {
        console.log(`   ${lang}: ${count} repos`);
      });

    // Sort by stars and last updated
    const topRepos = repos
      .filter(repo => !repo.fork) // Only original repos
      .sort((a, b) => {
        // Sort by stars first, then by update date
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at) - new Date(a.updated_at);
      })
      .slice(0, 20); // Get top 20 repos

    console.log('\n⭐ Top Repositories:');
    console.log('─'.repeat(80));
    
    topRepos.forEach((repo, index) => {
      console.log(`${index + 1}. ${repo.name}`);
      console.log(`   ⭐ ${repo.stargazers_count} | 🔱 ${repo.forks_count} | 📝 ${repo.language || 'N/A'}`);
      console.log(`   ${repo.description || 'No description'}`);
      console.log(`   ${repo.html_url}`);
      if (repo.homepage) console.log(`   🔗 ${repo.homepage}`);
      console.log('');
    });

    // Format for portfolio
    const portfolioProjects = topRepos.map(formatRepoForPortfolio);

    console.log('\n📝 Formatted Projects for Portfolio:');
    console.log('─'.repeat(80));
    console.log(JSON.stringify(portfolioProjects, null, 2));

    console.log('\n\n✨ Done! Copy the projects array above to your config/site.ts file.');
    console.log('💡 Remember to:');
    console.log('   - Update project descriptions to be more detailed');
    console.log('   - Add project images to /public/projects/');
    console.log('   - Add more technologies manually if needed');
    console.log('   - Set featured flag for your best projects');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
