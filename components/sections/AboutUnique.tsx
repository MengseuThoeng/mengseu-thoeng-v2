"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { User, ShieldCheck, MapPin, Building2, Server, Rocket, Code2 } from "lucide-react";

export function AboutUnique() {
  const capabilities = [
    {
      title: "MICROSERVICES & KAFKA",
      desc: "Architecting distributed backend services with Spring Boot, Apache Kafka event bus, and Micro Frontend web apps.",
      icon: Server,
    },
    {
      title: "ENTERPRISE BANKING",
      desc: "Developing high-security database services and enterprise reporting using Oracle SQL.",
      icon: Building2,
    },
    {
      title: "FULL-STACK ENGINEERING",
      desc: "Building modern, high-performance web applications using Next.js, React, TypeScript, and Tailwind CSS.",
      icon: Code2,
    },
    {
      title: "DEVOPS & CLOUD DEV",
      desc: "Deploying containerized microservices with Docker, Docker Compose, CI/CD automation, and Linux servers.",
      icon: Rocket,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Neobrutalist Grid Background */}
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
            <User className="w-4 h-4 text-black" />
            <span>ABOUT ME</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-black dark:text-white uppercase font-mono">
            Architecting High-Scale Systems
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-mono">
            Software Engineer specializing in backend microservices, enterprise reporting systems, and modern web architecture.
          </p>
        </motion.div>

        {/* 2-Column Neobrutalist Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Portrait Card with Offset Shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 group relative"
          >
            {/* Dashed Underlay Shadow */}
            <span className="absolute inset-0 border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-900" />

            {/* Main Portrait Card */}
            <div className="relative border-2 border-black bg-white p-6 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 dark:border-white dark:bg-zinc-900">
              
              {/* Header Badge Row */}
              <div className="flex items-center justify-between mb-4 font-mono text-xs">
                <span className="font-bold uppercase px-3 py-1 border-2 border-black bg-emerald-400 text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  VERIFIED
                </span>
                <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Phnom Penh</span>
                </div>
              </div>

              {/* Photo Box */}
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-5 border-2 border-black dark:border-white">
                <Image
                  src={siteConfig.profile_image}
                  alt={siteConfig.author}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Name Details */}
              <h3 className="text-2xl font-black text-black dark:text-white uppercase font-mono mb-1">
                {siteConfig.author}
              </h3>
              <p className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                Microservices Developer
              </p>

            </div>
          </motion.div>

          {/* Right Column: Text & Capability Neobrutalist Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white uppercase font-mono leading-tight">
                Engineered for High Availability, Security & Scalability.
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-mono">
                I'm a Software Engineer based in Phnom Penh, Cambodia. Currently working as a Microservices Developer, specialized in building web applications with Micro Frontend architecture and dedicated microservices for enterprise financial report processing.
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-mono">
                Graduate of the intensive 1,670-hour IT Expert program at ISTAD and candidate for Bachelor of MIS at SECTEC Institute.
              </p>
            </div>

            {/* 4 Capability Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all group"
                  >
                    <div className="w-10 h-10 border-2 border-black dark:border-white bg-emerald-400 text-black flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-black text-black dark:text-white mb-1 uppercase font-mono tracking-tight">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-mono">
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
