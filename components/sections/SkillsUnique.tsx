"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Cpu, Server, Layout, Database, Wrench } from "lucide-react";

const techLogos: { [key: string]: string } = {
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "C/C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Apache Kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Hibernate/JPA": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
  "Microservices": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "Oracle": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Docker Compose": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
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
            <Cpu className="w-4 h-4 text-black" />
            <span>TECHNICAL MATRIX</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-black dark:text-white uppercase font-mono">
            Tech Arsenal & Core Skills
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-mono">
            Production technologies, databases, frameworks, and DevOps tools used in enterprise banking software.
          </p>

          {/* Neobrutalist Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-3xl mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-4 py-2 border-2 border-black font-mono text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-emerald-400 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-y-[-2px] translate-x-[-2px]"
                      : "bg-white text-black hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 4-Column Skill Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="group relative w-full h-56"
              >
                {/* Dashed shadow background */}
                <span className="absolute inset-0 border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-900" />

                {/* Main Card Content */}
                <div className="absolute inset-0 flex flex-col justify-between border-2 border-black bg-white p-5 text-black group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300 dark:border-white dark:bg-zinc-900 dark:text-white">
                  
                  {/* Top line: Logo & label */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center p-1.5">
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

                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 border border-black bg-emerald-400 text-black uppercase">
                      {getLevelLabel(skill.level)}
                    </span>
                  </div>

                  {/* Body Text */}
                  <div className="mt-2">
                    <h3 className="text-base font-bold uppercase font-mono tracking-tight line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[9px] font-mono uppercase text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {skill.category}
                    </p>
                  </div>

                  {/* Neobrutalist Progress Gauge */}
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                      <span>PROFICIENCY</span>
                      <span className="font-bold text-black dark:text-white">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-800 p-0.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.02 }}
                        className="h-full bg-emerald-400 border-r border-black dark:border-white shadow-sm"
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
