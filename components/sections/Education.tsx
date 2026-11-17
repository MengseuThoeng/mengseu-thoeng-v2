"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Calendar } from "lucide-react";

export function Education() {
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Section Header - Rule 1 & 2: Eyebrow + Specific Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 block">
            Education
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-zinc-950 dark:text-white">
            Academic Background &amp; Certifications
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Educational milestones, formal IT qualifications, and specialized software engineering training.
          </p>
        </motion.div>

        {/* Roadmap Path Container */}
        <div className="relative">
          
          {/* Vertical Pipeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-12 relative">
            {roadmapSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-9 h-9 border-2 border-black dark:border-white bg-emerald-400 text-black font-mono font-bold text-xs flex items-center justify-center rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] tabular-nums">
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* Left / Right Card Positioning */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                      isEven ? "md:pr-10" : "md:ml-auto md:pl-10"
                    }`}
                  >
                    <div className="border-2 border-black dark:border-white bg-white dark:bg-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] text-zinc-950 dark:text-white">
                      
                      {/* Step Header */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded">
                          {step.status}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono tabular-nums text-zinc-500 dark:text-zinc-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{step.startDate} — {step.endDate}</span>
                        </div>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg font-bold tracking-tight mb-1">
                        {step.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                        {step.institution}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Skills tags */}
                      {step.skills && step.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                          {step.skills.map((skill: string) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded"
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
