import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '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';
const GITHUB_USERNAME = 'MengseuThoeng';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('per_page') || '9');

  try {
    // First, get the total count of repos
    const userResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    const userData = await userResponse.json();
    const totalPublicRepos = userData.public_repos || 0;
    const totalPages = Math.ceil(totalPublicRepos / perPage);

    // Then fetch the repos for the current page
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?page=${page}&per_page=${perPage}&sort=updated&type=owner`,
      {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();

    // Filter and format repos
    const formattedRepos = repos
      .filter((repo: any) => !repo.fork && !repo.private)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics || [],
        githubUrl: repo.html_url,
        homepage: repo.homepage,
        updatedAt: repo.updated_at,
        createdAt: repo.created_at,
      }));

    return NextResponse.json({
      repos: formattedRepos,
      pagination: {
        currentPage: page,
        totalPages,
        perPage,
        totalRepos: totalPublicRepos,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      }
    });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}
