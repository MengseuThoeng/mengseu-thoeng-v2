"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork, Loader2, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

export function ProjectsUnique() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState<string>("all");
  const perPage = 9;

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
      Java: "from-orange-500 to-red-500",
      TypeScript: "from-blue-500 to-cyan-500",
      JavaScript: "from-yellow-500 to-orange-500",
      Python: "from-green-500 to-emerald-500",
      HTML: "from-red-500 to-pink-500",
      CSS: "from-purple-500 to-pink-500",
    };
    return colors[language] || "from-gray-500 to-gray-600";
  };

  const filteredRepos = filter === "all" ? repos : repos.filter(r => r.language === filter);
  const languages = ["all", ...Array.from(new Set(repos.map(r => r.language).filter(Boolean)))];

  if (loading && repos.length === 0) {
    return (
      <section id="projects" className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="w-12 h-12 animate-spin text-purple-500 mb-4" />
            <p className="text-gray-400">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-32 pb-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 relative overflow-hidden transition-colors">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-purple-500/10 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <Github className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-blue-600 dark:text-blue-300 font-medium">Live from GitHub</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Real-world applications and experiments. Each project tells a story of problem-solving and innovation.
          </p>

          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === lang
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {lang === "all" ? "All" : lang}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${getLanguageColor(repo.language)} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                <div className="relative bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-300 dark:border-gray-800 rounded-2xl p-6 h-full group-hover:border-gray-400 dark:group-hover:border-gray-700 transition-all">
                  {/* Language badge */}
                  {repo.language && (
                    <div className="absolute top-6 right-6">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getLanguageColor(repo.language)} text-white`}>
                        {repo.language}
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                      {repo.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400 text-sm line-clamp-2 min-h-[40px]">
                      {repo.description || "No description available"}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </div>
                  </div>

                  {/* Topics */}
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {repo.topics.slice(0, 3).map((topic, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-gray-400 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-3">
                    {repo.homepage ? (
                      <>
                        <Link href={repo.homepage} target="_blank" className="flex-1">
                          <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </Link>
                        <Link href={repo.githubUrl} target="_blank">
                          <Button variant="outline" size="icon" className="border-gray-700">
                            <Github className="w-4 h-4" />
                          </Button>
                        </Link>
                      </>
                    ) : (
                      <Link href={repo.githubUrl} target="_blank" className="flex-1">
                        <Button variant="outline" className="w-full border-gray-700">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16 pt-8 border-t border-gray-300 dark:border-gray-800">
            <Button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1 || loading}
              variant="outline"
              className="border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
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
                    className={currentPage === pageNum ? "bg-purple-500 text-white hover:bg-purple-600" : "border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"}
                    size="icon"
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
              className="border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
