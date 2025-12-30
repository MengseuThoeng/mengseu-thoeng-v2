"use client";

import { motion } from "framer-motion";
import { Rocket, Zap, Code2, Cloud, Sparkles, Award } from "lucide-react";
import Image from "next/image";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { siteConfig } from "@/config/site";

export function AboutUnique() {
  const features = [
    {
      title: "Microservices Architecture",
      description: "Building scalable, resilient systems with Spring Boot, Apache Kafka, and event-driven patterns. Expertise in distributed systems and service orchestration.",
      icon: <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <Cloud className="w-6 h-6 text-white" />
      </div>,
    },
    {
      title: "Performance Engineering",
      description: "Optimizing applications for maximum speed and efficiency. Profiling, caching strategies, and database optimization for seamless user experiences.",
      icon: <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
        <Zap className="w-6 h-6 text-white" />
      </div>,
    },
    {
      title: "Full Stack Development",
      description: "Crafting beautiful, responsive web applications with React, Next.js, TypeScript, and modern UI libraries. From concept to deployment.",
      icon: <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
        <Code2 className="w-6 h-6 text-white" />
      </div>,
    },
    {
      title: "Cloud & DevOps",
      description: "Deploying containerized applications with Docker and Kubernetes. CI/CD pipelines, monitoring, and infrastructure as code.",
      icon: <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
        <Rocket className="w-6 h-6 text-white" />
      </div>,
    },
    {
      title: "System Design",
      description: "Architecting robust solutions with clean code principles, SOLID patterns, and scalable design. Focus on maintainability and extensibility.",
      icon: <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
        <Sparkles className="w-6 h-6 text-white" />
      </div>,
    },
    {
      title: "Problem Solving",
      description: "Tackling complex challenges with creative solutions. Algorithm optimization, debugging, and turning requirements into elegant code.",
      icon: <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
        <Award className="w-6 h-6 text-white" />
      </div>,
    },
  ];

  return (
    <section id="about" className="py-32 bg-gray-50 dark:bg-black relative overflow-hidden transition-colors">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            backgroundSize: "50% 50%",
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
            <Rocket className="w-4 h-4 text-purple-500 dark:text-purple-400" />
            <span className="text-sm text-purple-600 dark:text-purple-300 font-medium">Who I Am</span>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-48 h-48 mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 dark:border-white/10 shadow-2xl">
              <Image
                src={siteConfig.profile_image}
                alt={siteConfig.author}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <TextGenerateEffect
              words="I'm a Software Engineer and Microservices Architect from Phnom Penh, Cambodia. I specialize in building enterprise-grade systems that scale, with a focus on clean architecture, performance, and user experience. Every line of code I write is crafted with purpose and precision."
              className="text-lg md:text-xl text-gray-700 dark:text-gray-400 leading-relaxed"
            />
          </div>
        </motion.div>

        {/* Feature cards with hover effect */}
        <HoverEffect items={features} className="max-w-7xl mx-auto" />

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "3+", label: "Years Exp" },
            { value: "86+", label: "Projects" },
            { value: "15+", label: "Tech Stack" },
            { value: "100%", label: "Passion" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl" />
                <div className="relative bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-300 dark:border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-colors">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-500">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl opacity-50" />
            <div className="relative bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl px-8 md:px-12 py-8 backdrop-blur-xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  ISTAD Graduate 2024
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">
                📍 Phnom Penh, Cambodia 🇰🇭 | 💼 Open to opportunities | 🚀 Ready to build the future
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
