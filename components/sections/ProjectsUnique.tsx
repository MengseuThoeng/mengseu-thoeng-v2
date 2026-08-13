"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Star, GitFork, Loader2, FolderGit2, ArrowUpRight } from "lucide-react";
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
      {/* Background Grid - Neobrutalist style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400 text-black border-2 border-black font-mono font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            <FolderGit2 className="w-4 h-4 text-black" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-black dark:text-white uppercase font-mono">
            Featured Projects & Codebases
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-mono">
            Real-world backend microservices, full-stack applications, and open-source software architectures.
          </p>

          {/* Neobrutalist Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-3xl mx-auto">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`px-4 py-2 border-2 border-black font-mono text-xs font-bold transition-all ${
                  filter === lang
                    ? "bg-emerald-400 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-y-[-2px] translate-x-[-2px]"
                    : "bg-white text-black hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                }`}
              >
                {lang === "all" ? "ALL LANGUAGES" : lang.toUpperCase()}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <AnimatePresence mode="popLayout">
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group relative w-full h-80"
                >
                  {/* Dashed shadow underlay */}
                  <span className="absolute inset-0 border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-900" />

                  {/* Neobrutalist Project Card */}
                  <div className="absolute inset-0 flex flex-col justify-between border-2 border-black bg-white p-6 text-black group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300 dark:border-white dark:bg-zinc-900 dark:text-white">
                    <div>
                      {/* Card Header: Language Tag + Stars/Forks */}
                      <div className="flex items-center justify-between mb-4">
                        {repo.language ? (
                          <span className="px-3 py-1 border border-black bg-emerald-400 text-black font-mono font-bold text-[10px] uppercase">
                            {repo.language}
                          </span>
                        ) : (
                          <span className="px-3 py-1 border border-black bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white font-mono font-bold text-[10px] uppercase">
                            PROJECT
                          </span>
                        )}

                        <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                            <span>{repo.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-3.5 h-3.5 text-emerald-500" />
                            <span>{repo.forks}</span>
                          </div>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold uppercase font-mono tracking-tight mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                        {repo.name}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3 min-h-[50px] mb-4">
                        {repo.description || "Production-ready enterprise software codebase."}
                      </p>

                      {/* Topics Badges */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {repo.topics.slice(0, 4).map((topic, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 border border-black dark:border-white text-[9px] font-mono font-bold uppercase bg-white text-black dark:bg-zinc-800 dark:text-white"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-dashed border-black dark:border-white flex items-center justify-between gap-3">
                      <a
                        href={repo.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
                      >
                        <Github className="w-4 h-4 text-black dark:text-white" />
                        <span>VIEW SOURCE</span>
                      </a>

                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border-2 border-black bg-emerald-400 text-black font-bold text-xs font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1"
                        >
                          <span>LIVE DEMO</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Neobrutalist Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12 pt-8 border-t border-dashed border-black dark:border-white">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1 || loading}
              className="px-4 py-2 border-2 border-black bg-white dark:bg-zinc-900 text-black dark:text-white font-mono text-xs font-bold transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:pointer-events-none"
            >
              PREVIOUS
            </button>

            <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 px-2 font-bold">
              PAGE {currentPage} OF {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages || loading}
              className="px-4 py-2 border-2 border-black bg-white dark:bg-zinc-900 text-black dark:text-white font-mono text-xs font-bold transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:pointer-events-none"
            >
              NEXT
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
