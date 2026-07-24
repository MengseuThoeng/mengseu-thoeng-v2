"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactElement;
  }[];
  className?: string;
}) => {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Track mouse position near top of screen
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Show navbar if cursor is within top 80px of viewport
      if (e.clientY <= 80) {
        setIsVisible(true);
      } else if (e.clientY > 120) {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.link.replace("#", ""));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, link: string) => {
    e.preventDefault();
    const targetId = link.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Invisible Hover Trigger Detector Zone at Top of Window */}
      <div
        onMouseEnter={() => setIsVisible(true)}
        className="fixed top-0 left-0 right-0 h-16 z-[4999] pointer-events-auto"
        aria-hidden="true"
      />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className={cn(
            "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-gray-200/80 dark:border-white/15 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl z-[5000] px-3 sm:px-6 py-2 items-center justify-center space-x-1 sm:space-x-3 transition-all duration-300 pointer-events-auto",
            className
          )}
        >
          {navItems.map((navItem, idx) => {
            const sectionId = navItem.link.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                onClick={(e) => handleScrollTo(e, navItem.link)}
                className={cn(
                  "relative px-2.5 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5",
                  isActive
                    ? "text-purple-600 dark:text-purple-300 font-semibold bg-purple-500/10 border border-purple-500/20 shadow-xs"
                    : "text-gray-600 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
              </a>
            );
          })}

          <button
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="border text-xs sm:text-sm font-medium relative border-purple-500/30 dark:border-white/20 text-gray-900 dark:text-white px-3.5 py-1.5 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
          >
            <span>Contact</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px" />
          </button>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
