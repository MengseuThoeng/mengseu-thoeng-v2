'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '@/components/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, GitFork, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  githubUrl: string;
  homepage: string | null;
  updatedAt: string;
  createdAt: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  perPage: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 1,
    perPage: 9,
    hasNext: false,
    hasPrev: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = async (page: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/github/repos?page=${page}&per_page=9`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const data = await response.json();
      setRepos(data.repos);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching repos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos(1);
  }, []);

  const handlePageChange = (newPage: number) => {
    fetchRepos(newPage);
    // Scroll to projects section
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatRepoName = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      Java: 'bg-red-500',
      Python: 'bg-green-500',
      Dart: 'bg-cyan-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-purple-500',
      PHP: 'bg-indigo-500',
    };
    return colors[language || ''] || 'bg-gray-500';
  };

  return (
    <Section id="projects" className="bg-muted/30">
      <SectionTitle subtitle="Explore my latest work from GitHub">
        Projects
      </SectionTitle>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-destructive mb-4">{error}</p>
          <Button onClick={() => fetchRepos(pagination.currentPage)}>
            Try Again
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold line-clamp-1 flex-1">
                        {formatRepoName(repo.name)}
                      </h3>
                      {repo.language && (
                        <Badge variant="secondary" className="shrink-0">
                          <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)} mr-1.5`} />
                          {repo.language}
                        </Badge>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm line-clamp-3 min-h-[60px]">
                      {repo.description || 'No description available'}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between gap-4">
                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forks}</span>
                      </div>
                    </div>

                    {/* Topics */}
                    {repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                        {repo.topics.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{repo.topics.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      {repo.homepage ? (
                        <>
                          <Button asChild size="sm" className="flex-1">
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button asChild size="sm" variant="outline">
                            <a
                              href={repo.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        </>
                      ) : (
                        <Button asChild size="sm" variant="outline" className="flex-1">
                          <a
                            href={repo.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View on GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                disabled={!pagination.hasPrev || loading}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex items-center gap-2">
                {[...Array(pagination.totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  // Show first, last, current, and adjacent pages
                  if (
                    pageNum === 1 ||
                    pageNum === pagination.totalPages ||
                    Math.abs(pageNum - pagination.currentPage) <= 1
                  ) {
                    return (
                      <Button
                        key={pageNum}
                        variant={pageNum === pagination.currentPage ? 'default' : 'outline'}
                        size="icon"
                        onClick={() => handlePageChange(pageNum)}
                        disabled={loading}
                      >
                        {pageNum}
                      </Button>
                    );
                  } else if (
                    pageNum === pagination.currentPage - 2 ||
                    pageNum === pagination.currentPage + 2
                  ) {
                    return <span key={pageNum} className="px-2">...</span>;
                  }
                  return null;
                })}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                disabled={!pagination.hasNext || loading}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </Section>
  );
}
