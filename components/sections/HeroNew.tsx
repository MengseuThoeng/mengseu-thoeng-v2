"use client";

import { motion } from "framer-motion";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { siteConfig } from "@/config/site";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroNew() {
  return (
    <HeroHighlight containerClassName="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug mb-8"
        >
          Building Enterprise-Grade <br />
          <Highlight className="text-black dark:text-white">
            Microservices Architecture
          </Highlight>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8"
        >
          {siteConfig.author} | Software Engineer specializing in Spring Boot, Apache Kafka, and Event-Driven Architecture
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mb-12"
        >
          {siteConfig.metadata.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link href="#projects">
            <MovingBorderButton
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <span className="flex items-center gap-2">
                View Projects <ArrowRight className="w-4 h-4" />
              </span>
            </MovingBorderButton>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              className="p-3 rounded-full bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              className="p-3 rounded-full bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 hover:scale-110 transition-transform"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="p-3 rounded-full bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 hover:scale-110 transition-transform"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neutral-700 dark:text-white">3+</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neutral-700 dark:text-white">86+</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neutral-700 dark:text-white">15+</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neutral-700 dark:text-white">100%</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Dedication</div>
          </div>
        </motion.div>
      </motion.div>
    </HeroHighlight>
  );
}
