"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Cpu, Server, Database, Layout, Wrench, ShieldCheck, Sparkles } from "lucide-react";

const techLogos: { [key: string]: string } = {
  // Languages
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "C/C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  
  // Frontend
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Material UI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  "Bootstrap 5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  
  // Backend
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Apache Kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Hibernate/JPA": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
  "Microservices": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  
  // Databases
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "Oracle": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  
  // Tools
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Docker Compose": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "NGINX": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
};

export function SkillsUnique() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { name: "All", icon: Cpu },
    { name: "Backend", icon: Server },
    { name: "Frontend", icon: Layout },
    { name: "Database", icon: Database },
    { name: "Tools", icon: Wrench },
  ];

  const allSkills = [
    ...siteConfig.skills.languages.map(s => ({ ...s, category: "Languages" })),
    ...siteConfig.skills.backend.map(s => ({ ...s, category: "Backend" })),
    ...siteConfig.skills.frontend.map(s => ({ ...s, category: "Frontend" })),
    ...siteConfig.skills.databases.map(s => ({ ...s, category: "Database" })),
    ...siteConfig.skills.tools.map(s => ({ ...s, category: "Tools" })),
  ].sort((a, b) => b.level - a.level);

  const filteredSkills = activeCategory === "All"
    ? allSkills
    : allSkills.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    return "Proficient";
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Background Orbs */}
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
            <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">Technical Matrix</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Tech Arsenal & Core Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Production technologies, databases, frameworks, and DevOps tools used in enterprise banking software.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                      : "bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-800"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>



        {/* 2026 Redesigned Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-zinc-900/80 backdrop-blur-xl border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 h-full flex flex-col justify-between group-hover:border-emerald-500/50 transition-all shadow-sm hover:shadow-xl">
                  
                  {/* Top Row: Tech Logo + Level Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 relative flex items-center justify-center bg-gray-50 dark:bg-zinc-800/80 rounded-xl p-2 border border-gray-200 dark:border-zinc-700 group-hover:scale-110 transition-transform">
                      {techLogos[skill.name] ? (
                        <Image
                          src={techLogos[skill.name]}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-emerald-600 dark:text-emerald-400 font-black text-sm">{skill.name.charAt(0)}</span>
                      )}
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {getLevelLabel(skill.level)}
                    </span>
                  </div>

                  {/* Tech Name & Category */}
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-0.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mb-3">
                      {skill.category}
                    </p>
                  </div>

                  {/* Animated Progress Bar */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-gray-600 dark:text-gray-400 mb-1">
                      <span>Proficiency</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-zinc-800 overflow-hidden p-0.5 border border-gray-200 dark:border-zinc-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.02 }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-sm"
                      />
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
