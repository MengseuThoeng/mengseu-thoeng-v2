"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Camera, Sparkles, Maximize2, X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  src: string;
  description: string;
  location?: string;
  date?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Pre-Graduation Portrait",
    category: "Graduation Portrait",
    src: "/seu.jpg",
    description: "Official portrait of Thoeng Mengseu celebrating pre-graduation and software engineering milestones.",
    location: "Phnom Penh, Cambodia",
    date: "2025",
  },
  {
    id: 2,
    title: "Pre-Graduation Celebration",
    category: "Pre-Graduation",
    src: "/IMG_3521 2.jpg",
    description: "Memorable pre-graduation ceremony moments with peers and software engineering mentors.",
    location: "CSTAD / ISTAD Campus",
    date: "2024 - 2025",
  },
  {
    id: 3,
    title: "Pre-Graduation Memories",
    category: "Pre-Graduation",
    src: "/IMG_3522.jpg",
    description: "Cherishing the milestone of completing intensive 1,670-hour Software Expert Training.",
    location: "Phnom Penh",
    date: "2024 - 2025",
  },
  {
    id: 4,
    title: "Academic & Engineering Growth",
    category: "Pre-Graduation",
    src: "/IMG_3523.jpg",
    description: "Celebrating backend development, microservices projects, and academic excellence.",
    location: "CSTAD / ISTAD",
    date: "2024 - 2025",
  },
  {
    id: 5,
    title: "Pre-Graduation Ceremony Highlight",
    category: "Ceremony",
    src: "/IMG_3547.jpg",
    description: "Special highlights from the pre-graduation ceremony and milestone celebration.",
    location: "Phnom Penh",
    date: "2024 - 2025",
  },
];

const categories = ["All", "Pre-Graduation", "Ceremony", "Graduation Portrait"];

export function GalleryUnique() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev as number) - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev as number) + 1));
  };

  const activeItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <section id="gallery" className="py-32 bg-white dark:bg-black relative overflow-hidden transition-colors">
      {/* Background Glow & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
            <Camera className="w-4 h-4 text-purple-500 dark:text-purple-400" />
            <span className="text-sm text-purple-600 dark:text-purple-300 font-medium">Pre-Graduation Memories</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-purple-200 dark:to-blue-200 bg-clip-text text-transparent">
              Pre-Graduation
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Capturing the memorable moments, ceremony highlights, and milestones from my pre-graduation journey.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                    : "bg-gray-100 dark:bg-gray-900/80 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setActiveImageIndex(index)}
                className="group relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800/80 shadow-md hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/20 dark:bg-black/40 backdrop-blur-md text-white border border-white/20">
                      <Sparkles className="w-3 h-3 text-purple-300" />
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Icon Button */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/40 transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2 mb-3">
                      {item.description}
                    </p>
                    {(item.location || item.date) && (
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        {item.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-purple-400" />
                            {item.location}
                          </span>
                        )}
                        {item.date && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-blue-400" />
                            {item.date}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 md:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 md:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col md:flex-row"
            >
              {/* Image Frame */}
              <div className="relative w-full md:w-2/3 h-[50vh] md:h-[70vh] bg-black">
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Sidebar Info */}
              <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-gray-900/90 text-white">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {activeItem.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {activeImageIndex! + 1} of {filteredItems.length}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {activeItem.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {activeItem.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-800 space-y-3 text-sm text-gray-400">
                  {activeItem.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>{activeItem.location}</span>
                    </div>
                  )}
                  {activeItem.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>{activeItem.date}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
