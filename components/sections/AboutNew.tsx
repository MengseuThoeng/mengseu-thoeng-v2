"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Code2, Server, Database, Cloud, GitBranch, Workflow, Rocket, Trophy } from "lucide-react";
import { siteConfig } from "@/config/site";

export function AboutNew() {
  const items = [
    {
      title: "Backend Architecture",
      description: "Expert in designing scalable microservices with Spring Boot, implementing event-driven architecture using Apache Kafka, and building RESTful APIs.",
      header: <SkeletonOne />,
      icon: <Server className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
    },
    {
      title: "Database Design",
      description: "Proficient in PostgreSQL, MongoDB, and Redis. Experience with data modeling, optimization, and distributed database systems.",
      header: <SkeletonTwo />,
      icon: <Database className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Cloud & DevOps",
      description: "Deploy and manage applications on cloud platforms using Docker, Kubernetes, and CI/CD pipelines for automated deployment.",
      header: <SkeletonThree />,
      icon: <Cloud className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Frontend Development",
      description: "Building modern, responsive web applications with React, Next.js, TypeScript, and Tailwind CSS for seamless user experiences.",
      header: <SkeletonFour />,
      icon: <Code2 className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Me</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Phnom Penh based Software Engineer with a passion for building robust and scalable systems
          </p>
        </div>
        
        <BentoGrid className="max-w-6xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>

        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all group">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-purple-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-2">Education</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Institute of Science and Technology Advanced Development (ISTAD)
            </p>
          </div>

          <div className="text-center p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group">
            <Rocket className="w-12 h-12 mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-2">Focus</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Microservices, Event-Driven Architecture, Full Stack Development
            </p>
          </div>

          <div className="text-center p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-green-500 dark:hover:border-green-500 transition-all group">
            <GitBranch className="w-12 h-12 mx-auto mb-4 text-green-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-2">Open Source</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              86+ repositories on GitHub, contributing to the developer community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <div className="flex items-center justify-center w-full h-full">
        <Server className="w-16 h-16 text-neutral-400" />
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-100 dark:from-blue-900 dark:to-neutral-800 to-neutral-100">
      <div className="flex items-center justify-center w-full h-full">
        <Database className="w-16 h-16 text-blue-400" />
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-100 dark:from-purple-900 dark:to-neutral-800 to-neutral-100">
      <div className="flex items-center justify-center w-full h-full">
        <Cloud className="w-16 h-16 text-purple-400" />
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-100 dark:from-green-900 dark:to-neutral-800 to-neutral-100">
      <div className="flex items-center justify-center w-full h-full">
        <Code2 className="w-16 h-16 text-green-400" />
      </div>
    </div>
  );
};
