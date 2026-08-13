"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export function Education() {
  // Read and sort education from siteConfig chronologically for the roadmap
  const roadmapSteps = [...siteConfig.education]
    .reverse()
    .map((item, index) => ({
      ...item,
      stepNumber: `0${index + 1}`,
      status: (item as any).status || "Completed",
      skills: (item as any).skills || [],
    }));

  return (
    <section id="education" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Background Grid */}
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400 text-black border-2 border-black font-mono font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            <GraduationCap className="w-4 h-4 text-black" />
            <span>EDUCATION ROADMAP</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-black dark:text-white uppercase font-mono">
            Academic & Learning Pathway
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-mono">
            A step-by-step roadmap tracing my educational milestones from high school to advanced microservices engineering.
          </p>
        </motion.div>

        {/* Roadmap Path Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Pipeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 border-l-2 border-black dark:border-white" />

          <div className="space-y-16 relative">
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
                    <div className="w-10 h-10 border-2 border-black dark:border-white bg-emerald-400 text-black font-mono font-bold text-xs flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)]">
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* Left / Right Card Positioning */}
                  <div
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                      isEven ? "md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    {/* Neobrutalist Step Card Wrapper */}
                    <div className="group relative w-full">
                      {/* Dashed Shadow Underlay */}
                      <span className="absolute inset-0 border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-900" />

                      {/* Main Card */}
                      <div className="relative border-2 border-black bg-white p-6 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300 dark:border-white dark:bg-zinc-900 text-black dark:text-white">
                        
                        {/* Step Header */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border border-black bg-emerald-400 text-black">
                            {step.status}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 font-bold">
                            <Calendar className="w-3.5 h-3.5 text-black dark:text-white" />
                            <span>{step.startDate} — {step.endDate}</span>
                          </div>
                        </div>

                        {/* Degree Title */}
                        <h3 className="text-xl font-bold uppercase font-mono tracking-tight mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {step.degree}
                        </h3>

                        {/* Institution */}
                        <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5 font-mono">
                          <BookOpen className="w-3.5 h-3.5 text-black dark:text-white" />
                          <span>{step.institution}</span>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Skill Tags */}
                        {step.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dashed border-black dark:border-white">
                            {step.skills.map((skill: string) => (
                              <span
                                key={skill}
                                className="px-2 py-0.5 border border-black dark:border-white text-[9px] font-mono font-bold uppercase bg-white text-black dark:bg-zinc-800 dark:text-white"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}

                      </div>
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
