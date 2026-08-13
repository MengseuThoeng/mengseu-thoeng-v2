"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGraduationCap, 
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
            <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4 text-black" />
            <span>PRE-GRADUATION</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-black dark:text-white uppercase font-mono">
            Pre-Graduation Photos
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-mono">
            Capturing milestones and memories of my software engineering study completion.
          </p>
        </motion.div>

        {/* 4 Photo Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative h-96 cursor-pointer"
            >
              {/* Dashed Shadow Underlay */}
              <span className="absolute inset-0 border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-900" />

              {/* Main Photo Card */}
              <div className="absolute inset-0 border-2 border-black dark:border-white overflow-hidden bg-zinc-100 dark:bg-zinc-800 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Hover Overlay with FontAwesome Expand Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 border-2 border-black bg-emerald-400 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <FontAwesomeIcon icon={faExpand} className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhotoIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 border-2 border-black bg-emerald-400 text-black hover:bg-emerald-300 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-50 p-3 border-2 border-black bg-emerald-400 text-black hover:bg-emerald-300 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              aria-label="Previous"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-50 p-3 border-2 border-black bg-emerald-400 text-black hover:bg-emerald-300 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              aria-label="Next"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
            </button>

            {/* Image Preview Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full h-[80vh]"
            >
              <Image
                src={photos[activePhotoIndex].src}
                alt={photos[activePhotoIndex].alt}
                fill
                className="object-contain border-4 border-black dark:border-white bg-black"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
