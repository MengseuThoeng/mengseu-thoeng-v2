"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork, Loader2, FolderGit2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

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
      if (Array.isArray(data.repos) && data.repos.length > 0) {
        setRepos(data.repos);
        setTotalPages(data.pagination.totalPages || 1);
      } else {
        useFallbackProjects();
      }
    } catch (err) {
      console.error('Error fetching repos:', err);
      useFallbackProjects();
    } finally {
      setLoading(false);
    }
  };

  const useFallbackProjects = () => {
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
    setRepos(formatted);
    setTotalPages(1);
  };

  const filteredRepos = filter === "all" ? repos : repos.filter(r => r.language === filter);
  const languages = ["all", ...Array.from(new Set(repos.map(r => r.language).filter(Boolean)))];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors">
      {/* Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <FolderGit2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">Portfolio Showcase</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Featured Projects & Repositories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Real-world backend microservices, full-stack applications, and open-source software codebases.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                  filter === lang
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25"
                    : "bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-800"
                }`}
              >
                {lang === "all" ? "All Languages" : lang}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <AnimatePresence mode="popLayout">
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col justify-between"
                >
                  {/* Emerald Minimalist Card */}
                  <div className="relative bg-white dark:bg-zinc-900/80 backdrop-blur-xl border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 h-full flex flex-col justify-between group-hover:border-emerald-500/50 transition-all shadow-sm hover:shadow-xl">
                    <div>
                      {/* Card Header: Language Tag + Stars/Forks */}
                      <div className="flex items-center justify-between mb-4">
                        {repo.language ? (
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            {repo.language}
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300">
                            Project
                          </span>
                        )}

                        <div className="flex items-center gap-3 text-xs font-mono text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-amber-500" />
                            <span>{repo.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-3.5 h-3.5 text-emerald-500" />
                            <span>{repo.forks}</span>
                          </div>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                        {repo.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3 min-h-[50px] mb-4">
                        {repo.description || "Production-ready enterprise software codebase."}
                      </p>

                      {/* Topics Badges */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {repo.topics.slice(0, 4).map((topic, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded-md bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/15 text-[11px] font-mono text-emerald-600 dark:text-emerald-300"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between gap-3">
                      <a
                        href={repo.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-bold text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Source</span>
                      </a>

                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-500/20 flex items-center gap-1 group/btn"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800">
            <Button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1 || loading}
              variant="outline"
              className="rounded-xl border-gray-300 dark:border-zinc-800 font-mono text-xs"
            >
              Previous
            </Button>

            <span className="text-xs font-mono text-gray-600 dark:text-gray-400 px-2">
              Page {currentPage} of {totalPages}
            </span>

            <Button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages || loading}
              variant="outline"
              className="rounded-xl border-gray-300 dark:border-zinc-800 font-mono text-xs"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
