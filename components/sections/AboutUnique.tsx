"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { User, ShieldCheck, MapPin, Building2, Server, Cpu, Code2, Rocket, ArrowRight } from "lucide-react";

export function AboutUnique() {
  const capabilities = [
    {
      title: "Microservices & Kafka",
      desc: "Architecting distributed backend services with Spring Boot, Apache Kafka event bus, and Micro Frontend web apps.",
      icon: Server,
    },
    {
      title: "Enterprise Banking Systems",
      desc: "Developing high-security database services and enterprise reporting for ACLEDA Bank Plc. using Oracle SQL.",
      icon: Building2,
    },
    {
      title: "Full-Stack Engineering",
      desc: "Building modern, high-performance web applications using Next.js, React, TypeScript, and Tailwind CSS.",
      icon: Code2,
    },
    {
      title: "DevOps & Cloud Containers",
      desc: "Deploying containerized microservices with Docker, Docker Compose, CI/CD automation, and Linux servers.",
      icon: Rocket,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Background Ripple & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px]" />
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
            <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">About Me</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Architecting High-Scale Systems
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Software Engineer specializing in backend microservices, enterprise reporting systems, and modern web architecture.
          </p>
        </motion.div>

        {/* 2-Column Executive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left 5 Cols: Executive Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="bg-white dark:bg-zinc-900/90 backdrop-blur-2xl border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xl relative overflow-hidden group hover:border-emerald-500/50 transition-all">
              {/* Top Tag Bar */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  VERIFIED ENGINEER
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-500 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Phnom Penh</span>
                </div>
              </div>

              {/* Photo Frame */}
              <div className="relative w-full h-118 aspect-[4/5] rounded-2xl overflow-hidden mb-5 border border-gray-200 dark:border-zinc-700 shadow-md">
                <Image
                  src={siteConfig.profile_image}
                  alt={siteConfig.author}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Title Info */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-0.5">
                {siteConfig.author}
              </h3>
              <p className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                Microservices Developer @ ACLEDA Bank Plc.
              </p>

            </div>
          </motion.div>

          {/* Right 7 Cols: Engineering Overview & Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                Engineered for High Availability, Security & Scalability.
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                I'm a Software Engineer based in Phnom Penh, Cambodia. Currently working at <strong className="text-emerald-600 dark:text-emerald-400">ACLEDA Bank Plc.</strong> as a Microservices Developer, specialized in building web applications with Micro Frontend architecture and dedicated microservices for enterprise financial report processing.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Graduate of the intensive 1,670-hour IT Expert program at ISTAD and candidate for Bachelor of MIS at SECTEC Institute.
              </p>
            </div>

            {/* 4 Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-gray-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500/50 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
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
