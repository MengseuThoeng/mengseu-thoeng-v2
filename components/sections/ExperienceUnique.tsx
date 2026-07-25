"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Briefcase, Building2, Calendar, CheckCircle2, ChevronRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export function ExperienceUnique() {
  const [activeExpIndex, setActiveExpIndex] = useState(0);
  const activeExp = siteConfig.experience[activeExpIndex];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Background Ripple & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px]" />
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
            <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">Career History</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Professional Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Engineering backend systems, managing enterprise data at ACLEDA Bank Plc., and digital community growth.
          </p>
        </motion.div>

        {/* 2026 Interactive Experience Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left 4 Cols: Company Selector List */}
          <div className="md:col-span-4 space-y-3">
            {siteConfig.experience.map((exp, index) => {
              const isSelected = activeExpIndex === index;
              const isCurrent = exp.endDate.toLowerCase().includes('present');

              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpIndex(index)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500 text-gray-900 dark:text-white shadow-lg shadow-emerald-500/10"
                      : "bg-white dark:bg-zinc-900/60 border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800/80"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm sm:text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {exp.company}
                      </span>
                      {isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      )}
                    </div>
                    <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
                      {exp.position}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-emerald-500 translate-x-1' : 'text-gray-400 group-hover:translate-x-1'}`} />
                </button>
              );
            })}
          </div>

          {/* Right 8 Cols: Detailed Active Role Stage */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-zinc-900/90 backdrop-blur-2xl border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl relative overflow-hidden"
              >
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-zinc-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {activeExp.position}
                      </h3>
                      {activeExp.endDate.toLowerCase().includes('present') && (
                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500 text-zinc-950 uppercase tracking-wider animate-pulse">
                          Current Role
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      <span>{activeExp.company}</span>
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeExp.startDate} — {activeExp.endDate}</span>
                  </div>
                </div>

                {/* Key Responsibilities / Accomplishments */}
                <div className="space-y-4 mb-8">
                  <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                    Key Responsibilities & Achievements
                  </div>
                  <ul className="space-y-3">
                    {activeExp.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Tag Bar */}
                <div className="pt-6 border-t border-gray-100 dark:border-zinc-800">
                  <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Technologies & Skills Applied
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeExp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold"
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
