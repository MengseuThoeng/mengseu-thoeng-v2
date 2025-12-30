"use client";

import { useState, useEffect } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork, Loader2 } from "lucide-react";
import Link from "next/link";

interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  topics: string[];
  githubUrl: string;
  homepage: string;
}

export function ProjectsNew() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 6; // Show 6 cards for better 3D card display

  useEffect(() => {
    fetchRepos(currentPage);
  }, [currentPage]);

  const fetchRepos = async (page: number) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/github/repos?page=${page}&per_page=${perPage}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const data = await response.json();
      setRepos(data.repos);
      setTotalPages(data.pagination.totalPages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      Java: "bg-orange-500",
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      Python: "bg-green-500",
      HTML: "bg-red-500",
      CSS: "bg-purple-500",
    };
    return colors[language] || "bg-gray-500";
  };

  if (loading && repos.length === 0) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin mx-auto text-purple-500" />
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={() => fetchRepos(currentPage)}>Retry</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Projects</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Real-time projects from GitHub. Hover over the cards for a 3D effect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {repos.map((repo) => (
            <CardContainer key={repo.id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {repo.name}
                </CardItem>
                
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2 min-h-[40px]"
                >
                  {repo.description || "No description available"}
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="flex flex-wrap gap-2">
                    {repo.language && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                        {repo.language}
                      </Badge>
                    )}
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stars}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks}
                    </Badge>
                  </div>

                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {repo.topics.slice(0, 3).map((topic, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardItem>

                <div className="flex justify-between items-center mt-6">
                  {repo.homepage ? (
                    <>
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={repo.homepage}
                        target="_blank"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Live Demo
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={repo.githubUrl}
                        target="_blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        <Github className="w-4 h-4" />
                      </CardItem>
                    </>
                  ) : (
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={repo.githubUrl}
                      target="_blank"
                      className="px-4 py-2 rounded-xl border border-black dark:border-white text-xs font-normal dark:text-white flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </CardItem>
                  )}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1 || loading}
              variant="outline"
            >
              Previous
            </Button>

            <div className="flex gap-2">
              {[...Array(Math.min(5, totalPages))].map((_, idx) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = idx + 1;
                } else if (currentPage <= 3) {
                  pageNum = idx + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + idx;
                } else {
                  pageNum = currentPage - 2 + idx;
                }

                return (
                  <Button
                    key={idx}
                    onClick={() => setCurrentPage(pageNum)}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    className="w-10 h-10 p-0"
                    disabled={loading}
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>

            <Button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages || loading}
              variant="outline"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
