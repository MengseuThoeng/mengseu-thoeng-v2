import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN 
const GITHUB_USERNAME = 'MengseuThoeng';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('per_page') || '9');

  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'MengseuThoeng-Portfolio-App',
  };

  if (GITHUB_TOKEN) {
    headers['Authorization'] = GITHUB_TOKEN.startsWith('github_pat_')
      ? `Bearer ${GITHUB_TOKEN}`
      : `token ${GITHUB_TOKEN}`;
  }

  try {
    // 1. Get user details for public repo count
    const userResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers,
        cache: 'no-store',
      }
    );

    let totalPublicRepos = 0;
    if (userResponse.ok) {
      const userData = await userResponse.json();
      totalPublicRepos = userData.public_repos || 0;
    }

    const totalPages = Math.max(1, Math.ceil(totalPublicRepos / perPage));

    // 2. Fetch public repos
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?page=${page}&per_page=${perPage}&sort=updated&type=owner`,
      {
        headers,
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`GitHub API error ${response.status}:`, errorText);
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();

    if (!Array.isArray(repos)) {
      throw new Error('Invalid response from GitHub API');
    }

    // Filter out forks & format repos
    const formattedRepos = repos
      .filter((repo: any) => !repo.fork && !repo.private)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'GitHub project repository',
        language: repo.language || 'TypeScript',
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        topics: repo.topics || [],
        githubUrl: repo.html_url,
        homepage: repo.homepage || '',
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
