"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Tv, Heart, Star, Calendar } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function AnimeUnique() {
  const animeList = siteConfig.favAnime;

  return (
    <section id="anime" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Background Grid - Neobrutalist friendly */}
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
            <Heart className="w-4 h-4 fill-black animate-pulse" />
            <span>MY FAVORITES</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-black dark:text-white uppercase font-mono">
            Top 10 Favorite Anime
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-mono">
            A curated list of series that left a lasting impression on me, showcasing exceptional storytelling, music, and animation.
          </p>
        </motion.div>

        {/* Anime Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {animeList.map((anime, index) => (
              <motion.div
                key={anime.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group/card relative w-full h-[470px]"
              >
                {/* Underlay Dashed Shadow */}
                <span className="absolute inset-0 border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-900" />

                {/* Main Card */}
                <div className="absolute inset-0 flex flex-col justify-between border-2 border-black bg-white p-4 text-black group-hover/card:-translate-x-2 group-hover/card:-translate-y-2 transition-transform duration-300 hover:bg-emerald-50 dark:border-white dark:bg-gray-900 dark:text-white dark:hover:bg-emerald-950/20">
                  
                  {/* Poster Container */}
                  <div className="relative w-full h-64 border-2 border-black dark:border-white overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    {anime.image ? (
                      <Image
                        src={anime.image}
                        alt={anime.title}
                        fill
                        className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Tv className="w-12 h-12 text-zinc-400" />
                      </div>
                    )}
                    
                    {/* Floating Rank Badge (Neobrutalist solid shadow in Emerald) */}
                    <div className="absolute top-2 left-2 bg-emerald-400 dark:bg-emerald-500 text-black border-2 border-black dark:border-white px-2 py-0.5 text-xs font-mono font-extrabold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      #{String(anime.rank).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="flex-1 flex flex-col justify-between pt-3">
                    <div>
                      {/* Meta stats */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase font-mono text-zinc-500 dark:text-zinc-400">
                        <Calendar className="w-3.5 h-3.5 text-black dark:text-white" />
                        <span>{anime.year}</span>
                        <span>•</span>
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>{anime.rating}</span>
                      </span>

                      {/* Title */}
                      <h3 className="mt-1 text-lg font-bold line-clamp-1 tracking-tight group-hover/card:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors uppercase font-mono">
                        {anime.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs sm:text-sm line-clamp-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {anime.description}
                      </p>
                    </div>

                    {/* Genres Tag list */}
                    <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-dashed border-black dark:border-white">
                      {anime.genres.map((genre) => (
                        <span
                          key={genre}
                          className="px-2 py-0.5 border border-black dark:border-white text-[9px] font-mono font-bold uppercase bg-white text-black dark:bg-zinc-800 dark:text-white"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
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
