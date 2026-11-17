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
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Header - Rule 1 & 2: Eyebrow + Specific Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 block">
            Skills &amp; Technologies
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-zinc-950 dark:text-white">
            Technical Stack &amp; Tools
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Technologies, frameworks, databases, and DevOps tools used in building enterprise banking systems and scalable web platforms.
          </p>

          {/* Category Filters (Rule 4: Clean typography, Rule 10: Clear active state) */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-2xl mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-4 py-2 border-2 border-black dark:border-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-emerald-400 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]"
                      : "bg-white text-zinc-800 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 4-Column Skill Card grid (Rule 13: Clean, crisp borders without dashed ghost underlays) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, delay: index * 0.015 }}
                className="p-4 sm:p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex flex-col justify-between h-48"
              >
                {/* Top line: Logo & label */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/80 rounded flex items-center justify-center p-2">
                    {techLogos[skill.name] ? (
                      <Image
                        src={techLogos[skill.name]}
                        alt={skill.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">{skill.name.charAt(0)}</span>
                    )}
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    {getLevelLabel(skill.level)}
                  </span>
                </div>

                {/* Middle: Skill Name & Category */}
                <div>
                  <h3 className="font-bold text-base text-zinc-950 dark:text-white leading-tight">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                    {skill.category}
                  </p>
                </div>

                {/* Bottom: Progress bar */}
                <div className="space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Proficiency</span>
                    <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100 tabular-nums">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
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
