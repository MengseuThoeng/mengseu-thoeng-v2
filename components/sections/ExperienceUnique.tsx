"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Building2, Calendar, CheckCircle2, ChevronRight } from "lucide-react";

export function ExperienceUnique() {
  const [activeExpIndex, setActiveExpIndex] = useState(0);
  const activeExp = siteConfig.experience[activeExpIndex];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Section Header - Rule 1 & 2: Eyebrow + Specific Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 block">
            Career
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-zinc-950 dark:text-white">
            Professional Work Experience
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Engineering robust backend services, managing enterprise databases, and contributing to high-availability production environments.
          </p>
        </motion.div>

        {/* 2-Column Experience layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Interactive Selector Tabs (Rule 4: Mono only where needed) */}
          <div className="md:col-span-4 space-y-3">
            {siteConfig.experience.map((exp, index) => {
              const isSelected = activeExpIndex === index;
              const isCurrent = exp.endDate.toLowerCase().includes('present');

              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpIndex(index)}
                  className={`w-full text-left p-4 sm:p-5 border-2 border-black dark:border-white transition-all flex items-center justify-between group ${
                    isSelected
                      ? "bg-emerald-400 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]"
                      : "bg-white text-black hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm sm:text-base">
                        {exp.company}
                      </span>
                      {isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                      )}
                    </div>
                    <p className={`text-xs font-medium ${isSelected ? 'text-zinc-900' : 'text-zinc-500 dark:text-zinc-400'}`}>
                      {exp.position}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isSelected ? 'text-black' : 'text-zinc-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Experience Card (Rule 13: Clean, crisp borders without dashed ghost underlay) */}
          <div className="md:col-span-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="border-2 border-black bg-white p-6 sm:p-8 dark:border-white dark:bg-zinc-900 text-black dark:text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]"
              >
                {/* Card Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                        {activeExp.position}
                      </h3>
                      {activeExp.endDate.toLowerCase().includes('present') && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 border border-black bg-emerald-400 text-black uppercase tracking-wider rounded">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                      <span>{activeExp.company}</span>
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium tabular-nums rounded">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeExp.startDate} — {activeExp.endDate}</span>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Key Accomplishments
                  </div>
                  <ul className="space-y-3">
                    {activeExp.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies tag panel */}
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                    Technologies Applied
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeExp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 border border-zinc-300 dark:border-zinc-700 text-xs font-mono font-medium bg-zinc-50 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
