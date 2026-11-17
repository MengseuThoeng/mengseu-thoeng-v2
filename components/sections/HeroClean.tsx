"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

// Framer motion variants for staggered profile info typing effect
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export function HeroClean() {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-screen relative overflow-hidden bg-white dark:bg-black flex items-center justify-center transition-colors pt-12 pb-16 font-sans"
    >
      {/* Background Grid - subtle and non-distracting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column (7 Cols): Bold, Clear, Human Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Eyebrow - Clean & Understated (Rule 1 & 2: No filler badges) */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>

              {/* Main Headline - Natural, Specific & Well-Wrapped (Rule 9 & 16) */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="text-emerald-500 dark:text-emerald-400">
                  {siteConfig.author}
                </span>
              </h1>

              {/* Specific Subtitle & Tagline (Rule 9: Specific, grounded headline) */}
              <p className="text-lg sm:text-xl font-medium text-zinc-800 dark:text-zinc-200">
                Software Engineer specializing in Microservices &amp; Full-Stack Systems
              </p>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                Building resilient backend architectures, high-throughput event pipelines with Apache Kafka, and modern, performant web applications with Spring Boot and Next.js.
              </p>

              {/* CTAs - Rule 10: Clear emphasis on primary action */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link href="#projects">
                  <button className="px-7 py-3.5 border-2 border-black dark:border-white bg-emerald-400 text-black font-semibold uppercase text-xs tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2">
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>

                <Link href="#contact">
                  <button className="px-7 py-3.5 border-2 border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-800 dark:text-zinc-200 font-semibold uppercase text-xs tracking-wider hover:border-black dark:hover:border-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Metrics cards - Rule 18: Tabular Nums & clean typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800"
            >
              <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)]">
                <div className="text-3xl font-extrabold text-black dark:text-white tabular-nums">3+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Years Experience</div>
              </div>
              <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)]">
                <div className="text-3xl font-extrabold text-black dark:text-white tabular-nums">86+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Projects Built</div>
              </div>
              <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)]">
                <div className="text-3xl font-extrabold text-black dark:text-white tabular-nums">15+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Technologies</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 Cols): Authentic Engineering Showcase (Rule 6: Show the actual product, Rule 13: Remove toy embellishments) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full mt-6 lg:mt-0"
          >
            <div className="border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
              
              {/* Window Header - Clean tab without fake traffic light dots */}
              <div className="flex items-center justify-between px-4 py-3 border-b-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-800">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    TransactionConsumer.java
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  pipeline: active
                </span>
              </div>

              {/* Code Content */}
              <div className="p-5 space-y-4">
                
                {/* Code Block - Mono only where needed */}
                <div className="bg-zinc-50 dark:bg-zinc-950 p-4 border border-zinc-200 dark:border-zinc-800 rounded font-mono text-xs leading-relaxed overflow-x-auto">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-1"
                  >
                    <motion.p variants={itemVariants} className="text-purple-600 dark:text-purple-400">
                      @Service
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-blue-600 dark:text-blue-400">
                      public class <span className="text-amber-600 dark:text-amber-400 font-semibold">TransactionConsumer</span> &#123;
                    </motion.p>
                    <motion.p variants={itemVariants} className="pl-4 text-purple-600 dark:text-purple-400">
                      @KafkaListener(topics = &quot;payment-tx-stream&quot;)
                    </motion.p>
                    <motion.p variants={itemVariants} className="pl-4 text-blue-600 dark:text-blue-400">
                      public void <span className="text-emerald-600 dark:text-emerald-400">process</span>(Transaction tx) &#123;
                    </motion.p>
                    <motion.p variants={itemVariants} className="pl-8 text-zinc-500 dark:text-zinc-400">
                      log.info(&quot;Authorized tx_id={}&quot;, tx.getId());
                    </motion.p>
                    <motion.p variants={itemVariants} className="pl-8 text-zinc-500 dark:text-zinc-400">
                      processor.execute(tx);
                    </motion.p>
                    <motion.p variants={itemVariants} className="pl-4 text-blue-600 dark:text-blue-400">
                      &#125;
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-blue-600 dark:text-blue-400">
                      &#125;
                    </motion.p>
                  </motion.div>
                </div>

                {/* Git Activity Grid */}
                <div className="p-3.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 block">Commit Activity</span>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono tabular-nums">1,408 commits this year</span>
                  </div>
                  
                  {/* Contribution squares */}
                  <div className="grid grid-cols-7 gap-1">
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-[2px]" />
                    <div className="w-2.5 h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-[2px]" />
                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-[2px]" />
                    <div className="w-2.5 h-2.5 bg-emerald-600 rounded-[2px]" />
                    <div className="w-2.5 h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-[2px]" />
                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-[2px]" />
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-[2px]" />
                    
                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-[2px]" />
                    <div className="w-2.5 h-2.5 bg-emerald-600 rounded-[2px]" />
                    <div className="w-2.5 h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-[2px]" />
                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-[2px]" />
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-[2px]" />
                    <div className="w-2.5 h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-[2px]" />
                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-[2px]" />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
