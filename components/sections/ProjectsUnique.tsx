"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Star, GitFork, Loader2, ArrowUpRight } from "lucide-react";
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
    <section id="projects" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Header - Rule 1 & 2: Eyebrow + Specific Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 block">
            Portfolio
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-zinc-950 dark:text-white">
            Featured Projects &amp; Codebases
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Real-world backend microservices, full-stack web applications, and open-source software architectures.
          </p>

          {/* Language Filters (Rule 4: Clean typography) */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-2xl mx-auto">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`px-3.5 py-1.5 border-2 border-black dark:border-white text-xs font-semibold tracking-wider uppercase transition-all ${
                  filter === lang
                    ? "bg-emerald-400 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]"
                    : "bg-white text-zinc-800 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
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
            <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
          </div>
        ) : (
          /* Projects Grid (Rule 13: Clean, crisp borders without dashed ghost underlays) */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <AnimatePresence mode="popLayout">
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, delay: index * 0.02 }}
                  className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex flex-col justify-between h-72 group"
                >
                  {/* Top Bar: Language & Links */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                        {repo.language || "Code"}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        {repo.githubUrl && (
                          <a
                            href={repo.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                            aria-label="Live Demo"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Repo Title & Description */}
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1 mb-2">
                      {repo.name}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {repo.description || "Production-ready backend microservice repository and API documentation."}
                    </p>
                  </div>

                  {/* Bottom: Topics & Stats */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
                    <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-6">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 text-[10px] font-mono bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 font-mono tabular-nums">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border-2 border-black dark:border-white text-xs font-semibold uppercase disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Previous
            </button>
            <span className="text-xs font-mono tabular-nums px-3 text-zinc-600 dark:text-zinc-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border-2 border-black dark:border-white text-xs font-semibold uppercase disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
