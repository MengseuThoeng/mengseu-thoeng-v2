"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";

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
  const allSkills = [
    ...siteConfig.skills.languages.map(s => ({ ...s, category: "Language" })),
    ...siteConfig.skills.backend.map(s => ({ ...s, category: "Backend" })),
    ...siteConfig.skills.frontend.map(s => ({ ...s, category: "Frontend" })),
    ...siteConfig.skills.databases.map(s => ({ ...s, category: "Database" })),
    ...siteConfig.skills.tools.map(s => ({ ...s, category: "Tool" })),
  ].sort((a, b) => b.level - a.level);

  return (
    <section id="skills" className="py-32 bg-white dark:bg-black relative overflow-hidden transition-colors">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
              Tech
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I use to build exceptional software
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {allSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${skill.category}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-300 dark:border-gray-800 rounded-xl p-6 h-full group-hover:border-purple-500/50 transition-all">
                <div className="text-center space-y-3">
                  {/* Tech Logo */}
                  <div className="flex justify-center mb-3">
                    {techLogos[skill.name] ? (
                      <div className="w-12 h-12 relative">
                        <Image
                          src={techLogos[skill.name]}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                        <span className="text-white text-xl font-bold">{skill.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-gray-900 dark:text-white font-semibold text-sm">{skill.name}</div>
                  
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                    {skill.level}%
                  </div>
                  
                  <div className="text-xs text-gray-600 dark:text-gray-500">{skill.category}</div>
                </div>

                {/* Progress circle */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-full h-full -rotate-90">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="rgba(139, 92, 246, 0.2)"
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="2"
                      strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                      whileInView={{
                        strokeDashoffset: 2 * Math.PI * 45 * (1 - skill.level / 100),
                      }}
                      transition={{ duration: 1, delay: index * 0.02 }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
