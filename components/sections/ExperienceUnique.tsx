"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Briefcase, Building2, Calendar, CheckCircle2, ChevronRight } from "lucide-react";

export function ExperienceUnique() {
  const [activeExpIndex, setActiveExpIndex] = useState(0);
  const activeExp = siteConfig.experience[activeExpIndex];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
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
            <Briefcase className="w-4 h-4 text-black" />
            <span>CAREER HISTORY</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-black dark:text-white uppercase font-mono">
            Professional Work Experience
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-mono">
            Engineering backend systems, managing enterprise data, and digital community growth.
          </p>
        </motion.div>

        {/* 2-Column Experience layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Interactive Selector Tabs */}
          <div className="md:col-span-4 space-y-3">
            {siteConfig.experience.map((exp, index) => {
              const isSelected = activeExpIndex === index;
              const isCurrent = exp.endDate.toLowerCase().includes('present');

              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpIndex(index)}
                  className={`w-full text-left p-5 border-2 border-black dark:border-white transition-all font-mono shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] flex items-center justify-between group ${
                    isSelected
                      ? "bg-emerald-400 text-black translate-x-[2px] translate-y-[2px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-white text-black hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm sm:text-base">
                        {exp.company}
                      </span>
                      {isCurrent && (
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black animate-pulse" />
                      )}
                    </div>
                    <p className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400">
                      {exp.position}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isSelected ? 'text-black' : 'text-zinc-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Experience Card with Dashed Shadow */}
          <div className="md:col-span-8 group relative w-full">
            {/* Dashed Shadow underlay */}
            <span className="absolute inset-0 border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-900" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative border-2 border-black bg-white p-8 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 dark:border-white dark:bg-zinc-900 text-black dark:text-white"
              >
                {/* Card Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b-2 border-dashed border-black dark:border-white">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-black uppercase font-mono tracking-tight">
                        {activeExp.position}
                      </h3>
                      {activeExp.endDate.toLowerCase().includes('present') && (
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 border border-black bg-emerald-400 text-black uppercase tracking-wider">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-mono">
                      <Building2 className="w-4 h-4 text-black dark:text-white" />
                      <span>{activeExp.company}</span>
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-black bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white text-xs font-mono font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeExp.startDate} — {activeExp.endDate}</span>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-4 mb-8">
                  <div className="text-[10px] font-mono font-extrabold text-zinc-400 uppercase tracking-wider">
                    Key Accomplishments
                  </div>
                  <ul className="space-y-3 font-mono">
                    {activeExp.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies tag panel */}
                <div className="pt-6 border-t-2 border-dashed border-black dark:border-white">
                  <div className="text-[10px] font-mono font-extrabold text-zinc-400 uppercase tracking-wider mb-3">
                    Technologies Applied
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeExp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-black dark:border-white text-[10px] font-mono font-bold uppercase bg-white text-black dark:bg-zinc-800 dark:text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"
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
