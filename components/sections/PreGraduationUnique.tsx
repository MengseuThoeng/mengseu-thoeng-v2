"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faExpand, 
  faXmark, 
  faChevronLeft, 
  faChevronRight 
} from "@fortawesome/free-solid-svg-icons";

import { siteConfig } from "@/config/site";

const photos = siteConfig.preGraduationPhotos;

export function PreGraduationUnique() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev === 0 ? photos.length - 1 : (prev as number) - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev === photos.length - 1 ? 0 : (prev as number) + 1));
  };

  return (
    <section id="pre-graduation" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header - Rule 1 & 2: Eyebrow + Specific Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 block">
            Milestones
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-zinc-950 dark:text-white">
            Pre-Graduation Gallery
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Milestone moments and memories commemorating the completion of intensive software engineering training.
          </p>
        </motion.div>

        {/* 4 Photo Grid Layout (Rule 13: Clean borders without dashed ghost underlays) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActivePhotoIndex(index)}
              className="cursor-pointer border-2 border-black dark:border-white bg-white dark:bg-zinc-900 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white text-black border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <FontAwesomeIcon icon={faExpand} className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-zinc-900 dark:text-zinc-100 truncate pr-2">
                  {photo.alt}
                </span>
                <span className="text-zinc-400 font-mono text-[11px] tabular-nums shrink-0">
                  #{photo.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {activePhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhotoIndex(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActivePhotoIndex(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Close modal"
                >
                  <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
                </button>

                {/* Main Photo */}
                <div className="relative aspect-[4/5] sm:aspect-[16/10] w-full max-h-[75vh] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={photos[activePhotoIndex].src}
                    alt={photos[activePhotoIndex].alt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Footer Controls */}
                <div className="flex items-center justify-between pt-4 text-xs font-semibold">
                  <span className="text-zinc-900 dark:text-zinc-100">
                    {photos[activePhotoIndex].alt}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      aria-label="Previous photo"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono tabular-nums text-zinc-500 px-2">
                      {activePhotoIndex + 1} / {photos.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-2 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      aria-label="Next photo"
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
