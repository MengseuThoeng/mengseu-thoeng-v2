import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
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
        next: { revalidate: 3600 }, // Cache for 1 hour to prevent rate limit
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
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.warn(`GitHub API returned status ${response.status}. Using fallback projects.`);
      return returnFallbackProjects(page, perPage);
    }

    const repos = await response.json();

    if (!Array.isArray(repos)) {
      return returnFallbackProjects(page, perPage);
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
        totalPages: Math.max(1, totalPages),
        perPage,
        totalRepos: totalPublicRepos || formattedRepos.length,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      }
    });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return returnFallbackProjects(page, perPage);
  }
}

function returnFallbackProjects(page: number, perPage: number) {
  const formatted = siteConfig.projects.map((p) => ({
    id: p.id,
    name: p.title,
    description: p.description,
    language: p.technologies[0] || "TypeScript",
    stars: 5,
    forks: 2,
    topics: Array.from(p.technologies),
    githubUrl: p.github || siteConfig.social.github,
    homepage: p.demo || "",
  }));

  return NextResponse.json({
    repos: formatted,
    pagination: {
      currentPage: page,
      totalPages: 1,
      perPage,
      totalRepos: formatted.length,
      hasNext: false,
      hasPrev: false,
    }
  });
}
