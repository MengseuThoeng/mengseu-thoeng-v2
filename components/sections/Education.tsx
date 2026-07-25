'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export function Education() {
  // Read and sort education from siteConfig chronologically for the roadmap (High School -> SECTEC -> ISTAD)
  const roadmapSteps = [...siteConfig.education]
    .reverse()
    .map((item, index) => ({
      ...item,
      stepNumber: `0${index + 1}`,
      status: (item as any).status || 'Completed',
      skills: (item as any).skills || [],
    }));

  return (
    <section id="education" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Background Roadmap Grid Pattern */}
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">Education Roadmap</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Academic & Tech Learning Pathway
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            A step-by-step roadmap tracing my educational milestones from high school to advanced microservices engineering.
          </p>
        </motion.div>

        {/* Roadmap Path Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Central Vertical Roadmap Energy Pipeline */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-emerald-500/20 via-emerald-500 to-teal-500/20 rounded-full" />

          <div className="space-y-12 relative">
            {roadmapSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs flex items-center justify-center shadow-lg shadow-emerald-500/25">
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* Left / Right Card Positioning */}
                  <div
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="group relative bg-white dark:bg-zinc-900/80 backdrop-blur-xl border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all">
                      
                      {/* Step Header */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {step.status}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{step.startDate} — {step.endDate}</span>
                        </div>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {step.degree}
                      </h3>

                      {/* Institution */}
                      <div className={`text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{step.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Skill Tags */}
                      {step.skills.length > 0 && (
                        <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          {step.skills.map((skill: string) => (
                            <span
                              key={skill}
                              className="px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-zinc-800 text-[11px] font-mono text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
