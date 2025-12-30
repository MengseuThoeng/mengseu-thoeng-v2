'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">My Academic Journey</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-20" />

            {siteConfig.education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)] md:text-right'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ring-4 ring-white dark:ring-black"
                  />
                </div>

                <div className="group relative">
                  <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                    {/* Icon */}
                    <div className={`inline-flex p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mb-4 ${
                      index % 2 === 0 ? '' : 'md:float-right md:ml-4'
                    }`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>

                    {/* Date Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-4 ${
                      index % 2 === 0 ? '' : 'md:float-left md:mr-4'
                    }`}>
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>

                    <div className="clear-both">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3 text-purple-600 dark:text-purple-400">
                        <Award className="w-5 h-5" />
                        <p className="text-lg font-semibold">
                          {edu.institution}
                        </p>
                      </div>

                      {edu.field && (
                        <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400">
                          <BookOpen className="w-4 h-4" />
                          <p className="text-sm font-medium">{edu.field}</p>
                        </div>
                      )}

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    {/* Decorative gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
