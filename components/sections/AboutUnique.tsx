"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MapPin, Building2, Server, Rocket, Code2 } from "lucide-react";

export function AboutUnique() {
  const capabilities = [
    {
      title: "Microservices & Kafka",
      desc: "Architecting distributed backend services with Spring Boot, Apache Kafka event bus, and Micro Frontend web apps.",
      icon: Server,
    },
    {
      title: "Enterprise Banking",
      desc: "Developing high-security database services and enterprise financial reporting using Oracle SQL.",
      icon: Building2,
    },
    {
      title: "Full-Stack Development",
      desc: "Building modern, high-performance web applications using Next.js, React, TypeScript, and Tailwind CSS.",
      icon: Code2,
    },
    {
      title: "DevOps & Cloud",
      desc: "Deploying containerized microservices with Docker, Docker Compose, CI/CD automation, and Linux environments.",
      icon: Rocket,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Background Grid - subtle and clean */}
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
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 block">
            About Me
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-zinc-950 dark:text-white">
            Architecting Reliable, Scalable Systems
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Software Engineer specializing in backend microservices, enterprise reporting, and modern full-stack web architecture.
          </p>
        </motion.div>

        {/* 2-Column Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait Card (Rule 13: Clean, crisp borders without dashed ghost layers) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 w-full"
          >
            <div className="border-2 border-black dark:border-white bg-white dark:bg-zinc-900 p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
              
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4 text-xs">
                <span className="font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 border border-emerald-200 dark:border-emerald-800 rounded">
                  Software Engineer
                </span>
                <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Phnom Penh, Cambodia</span>
                </div>
              </div>

              {/* Photo */}
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-4 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={siteConfig.profile_image}
                  alt={siteConfig.author}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Name Details */}
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                {siteConfig.author}
              </h3>
              <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                Microservices Developer
              </p>
            </div>
          </motion.div>

          {/* Right Column: Bio & Capability Cards (Rule 4: Clean typography hierarchy) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white leading-tight">
                Engineering for High Availability, Security &amp; Scalability
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
                I&apos;m a Software Engineer based in Phnom Penh, Cambodia. Currently working as a Microservices Developer, specialized in building web applications with Micro Frontend architecture and dedicated microservices for enterprise financial report processing.
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Graduate of the intensive 1,670-hour IT Expert program at ISTAD and candidate for Bachelor of MIS at SECTEC Institute.
              </p>
            </div>

            {/* Capability Cards Grid (Rule 14: Balanced inner layout, high contrast) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                  >
                    <div className="w-9 h-9 border-2 border-black dark:border-white bg-emerald-400 text-black flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-zinc-950 dark:text-white mb-1.5">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
