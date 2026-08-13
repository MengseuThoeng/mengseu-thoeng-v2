"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Cpu, Code2, Terminal } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

// Framer motion variants for staggered profile info typing effect
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.5,
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
      className="min-h-[85vh] lg:min-h-screen relative overflow-hidden bg-white dark:bg-black flex items-center justify-center transition-colors pt-10 pb-12"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div
        className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 lg:px-24 relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center w-full">
          
          {/* Left Column (7 Cols): Bold Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black bg-emerald-400 text-black font-mono font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-4 h-4 fill-black animate-pulse" />
                <span>MICROSERVICES ARCHITECT</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none uppercase font-mono text-black dark:text-white">
                HI, I'M <br />
                <span className="bg-emerald-400 text-black border-4 border-black px-5 py-2 inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-1.5deg] mt-2">
                  {siteConfig.author_surname.toUpperCase()}
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-400 font-mono leading-relaxed border-l-4 border-black dark:border-white pl-4 py-1">
                Decomposing monoliths, orchestrating event streams, and engineering high-availability banking architectures for enterprise systems.
              </p>

              {/* Neobrutalist CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="#projects">
                  <button className="px-8 py-4 border-2 border-black bg-emerald-400 text-black font-mono font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

                <Link href="#contact">
                  <button className="px-8 py-4 border-2 border-black bg-white text-black font-mono font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900 transition-all">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Metrics cards styled Neobrutalist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-dashed border-black dark:border-white"
            >
              <div className="border-2 border-black bg-white dark:bg-zinc-900 dark:border-white p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-mono">
                <div className="text-3xl font-extrabold text-black dark:text-white">3+</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-tight font-bold">Years Exp</div>
              </div>
              <div className="border-2 border-black bg-white dark:bg-zinc-900 dark:border-white p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-mono">
                <div className="text-3xl font-extrabold text-black dark:text-white">86+</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-tight font-bold">Projects</div>
              </div>
              <div className="border-2 border-black bg-white dark:bg-zinc-900 dark:border-white p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-mono">
                <div className="text-3xl font-extrabold text-black dark:text-white">15+</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-tight font-bold">Tech Stack</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 Cols): Premium Interactive Dashboard Board with Framer entry */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 group relative w-full mt-8 lg:mt-0"
          >
            {/* Dashed Shadow Underlay */}
            <span className="absolute inset-0 border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-900" />

            {/* Main Board Box */}
            <div className="relative border-2 border-black bg-white p-0 text-black group-hover:-translate-x-2.5 group-hover:-translate-y-2.5 transition-transform duration-300 dark:border-white dark:bg-zinc-900 dark:text-white">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3.5 h-3.5 border-2 border-black rounded-full bg-red-400"></div>
                  <div className="w-3.5 h-3.5 border-2 border-black rounded-full bg-yellow-400"></div>
                  <div className="w-3.5 h-3.5 border-2 border-black rounded-full bg-emerald-400"></div>
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-tight flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>TransactionConsumer.java</span>
                </span>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6 font-mono">
                
                {/* Online Status block */}
                <div className="border-2 border-black dark:border-white p-4 bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black dark:border-white animate-ping" />
                    <span className="text-xs font-bold uppercase">banking-tx-pipeline</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase bg-emerald-400 text-black border border-black px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    DEPLOYMENT: ACTIVE
                  </span>
                </div>

                {/* Simulated IDE / Spring Boot Java code listener with staggered line entry animations */}
                <div className="border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-800 p-4 text-xs space-y-2 overflow-x-auto">
                  <div className="flex items-center gap-2 border-b border-dashed border-zinc-300 dark:border-zinc-700 pb-2 mb-2">
                    <Terminal className="w-4 h-4 text-emerald-500" />
                    <span className="font-bold text-zinc-500">IDE Console</span>
                  </div>
                  
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-1 text-zinc-800 dark:text-zinc-200"
                  >
                    <motion.p variants={itemVariants} className="text-purple-600 dark:text-purple-400">
                      @Service
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-blue-600 dark:text-blue-400">
                      public class <span className="text-yellow-600 dark:text-yellow-500">TransactionConsumer</span> &#123;
                    </motion.p>
                    <motion.p variants={itemVariants} className="pl-4 text-purple-600 dark:text-purple-400">
                      @KafkaListener(topics = "payment-tx-stream")
                    </motion.p>
                    <motion.p variants={itemVariants} className="pl-4 text-blue-600 dark:text-blue-400">
                      public void <span className="text-emerald-600 dark:text-emerald-400">process</span>(Transaction tx) &#123;
                    </motion.p>
                    <motion.p variants={itemVariants} className="pl-8 text-zinc-500 dark:text-zinc-400">
                      log.info("Authorized: tx_id=" + tx.getId());
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

                {/* Git Contribution Grid Simulation */}
                <div className="border-2 border-black dark:border-white p-4 bg-white dark:bg-zinc-900 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold uppercase block">COMMIT ACTIVITY</span>
                    <span className="text-[10px] text-zinc-500 font-mono font-bold block">1,408 COMMITS THIS YEAR</span>
                  </div>
                  
                  {/* Grid layout */}
                  <div className="grid grid-cols-7 gap-1">
                    <div className="w-2.5 h-2.5 bg-emerald-500 border border-black dark:border-white" />
                    <div className="w-2.5 h-2.5 bg-zinc-100 dark:bg-zinc-800 border border-black dark:border-white" />
                    <div className="w-2.5 h-2.5 bg-emerald-300 border border-black dark:border-white" />
                    <div className="w-2.5 h-2.5 bg-emerald-500 border border-black dark:border-white" />
                    <div className="w-2.5 h-2.5 bg-zinc-100 dark:bg-zinc-800 border border-black dark:border-white" />
                    <div className="w-2.5 h-2.5 bg-emerald-400 border border-black dark:border-white" />
                    <div className="w-2.5 h-2.5 bg-emerald-500 border border-black dark:border-white" />
                    
                    <div className="w-2.5 h-2.5 bg-emerald-300 border border-black dark:border-white" />
                    <div className="w-2.5 h-2.5 bg-emerald-500 border border-black dark:border-white" />
                    <div className="w-2.5 h-2.5 bg-zinc-100 dark:bg-zinc-800 border border-black dark:border-white" />
                    <div className="w-2.5 h-2.5 bg-emerald-400 border border-black dark:border-white" />
                    <div className="w-2.5 h-2.5 bg-emerald-500 border border-black dark:border-white" />
                    <div className="w-2.5 h-2.5 bg-zinc-100 dark:bg-zinc-800 border border-black dark:border-white" />
                    <div className="w-2.5 h-2.5 bg-emerald-300 border border-black dark:border-white" />
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
