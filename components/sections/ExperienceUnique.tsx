"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Briefcase, Calendar } from "lucide-react";

export function ExperienceUnique() {
  return (
    <section id="experience" className="py-32 bg-white dark:bg-black relative overflow-hidden transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
            <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm text-purple-600 dark:text-purple-300 font-medium">Journey</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
              Experience &
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {siteConfig.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-300 dark:border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all group">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-400 flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1.5">→</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
