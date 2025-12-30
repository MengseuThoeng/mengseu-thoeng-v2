"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Code2, Database, Server, Wrench } from "lucide-react";

export function SkillsNew() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: siteConfig.skills.languages,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: siteConfig.skills.backend,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      skills: siteConfig.skills.frontend,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: siteConfig.skills.databases,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: siteConfig.skills.tools,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Technologies</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />
              
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 h-full hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
                <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-neutral-600 dark:text-neutral-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full opacity-50 blur-sm`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
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
