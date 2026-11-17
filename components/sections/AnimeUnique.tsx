"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Calendar } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function AnimeUnique() {
  const animeList = siteConfig.favAnime;

  return (
    <section id="anime" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Background Grid */}
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
            Interests &amp; Inspiration
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-zinc-950 dark:text-white">
            Top 10 Favorite Anime
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Curated series celebrated for exceptional world-building, cinematography, storytelling, and direction.
          </p>
        </motion.div>

        {/* Anime Cards Grid (Rule 13: Clean, crisp borders without dashed ghost underlays) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {animeList.map((anime, index) => (
              <motion.div
                key={anime.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="border-2 border-black dark:border-white bg-white dark:bg-zinc-900 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex flex-col justify-between group"
              >
                {/* Poster Container */}
                <div>
                  <div className="relative w-full h-64 border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-4">
                    <Image
                      src={anime.image}
                      alt={anime.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Rank Badge - Rule 18: Tabular nums */}
                    <div className="absolute top-2.5 left-2.5 border border-black bg-emerald-400 text-black font-mono font-bold text-xs px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] tabular-nums">
                      #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>

                    {/* Score Tag */}
                    <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-sm text-white border border-white/20 text-xs font-mono font-semibold px-2 py-1 flex items-center gap-1 rounded tabular-nums">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span>{anime.rating}</span>
                    </div>
                  </div>

                  {/* Details Header */}
                  <div className="space-y-1 mb-2">
                    <h3 className="font-bold text-base text-zinc-950 dark:text-white line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {anime.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">
                      {anime.genres.slice(0, 2).join(" • ")}
                    </p>
                  </div>

                  {/* Synopsis */}
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                    {anime.description}
                  </p>
                </div>

                {/* Card Footer: Metadata */}
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 tabular-nums">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{anime.year}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    {anime.genres[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
