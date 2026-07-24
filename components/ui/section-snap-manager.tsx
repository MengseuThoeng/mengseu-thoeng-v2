"use client";

import { useEffect } from "react";

export function SectionSnapManager() {
  useEffect(() => {
    // Keyboard Arrow Up / Arrow Down / PageUp / PageDown smooth section navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input/textarea or if a modal is active
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (
        activeTag === "input" ||
        activeTag === "textarea" ||
        document.querySelector("[role='dialog']")
      ) {
        return;
      }

      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        (e.key === " " && !e.shiftKey)
      ) {
        const sections = Array.from(
          document.querySelectorAll("section[id]")
        ) as HTMLElement[];
        if (sections.length === 0) return;

        const scrollY = window.scrollY;
        let nextIndex = 0;

        for (let i = 0; i < sections.length; i++) {
          if (sections[i].offsetTop > scrollY + 50) {
            nextIndex = i;
            break;
          }
        }

        if (nextIndex > 0) {
          e.preventDefault();
          sections[nextIndex].scrollIntoView({ behavior: "smooth" });
        }
      } else if (
        e.key === "ArrowUp" ||
        e.key === "PageUp" ||
        (e.key === " " && e.shiftKey)
      ) {
        const sections = Array.from(
          document.querySelectorAll("section[id]")
        ) as HTMLElement[];
        if (sections.length === 0) return;

        const scrollY = window.scrollY;
        let prevIndex = 0;

        for (let i = sections.length - 1; i >= 0; i--) {
          if (sections[i].offsetTop < scrollY - 50) {
            prevIndex = i;
            break;
          }
        }

        e.preventDefault();
        sections[prevIndex].scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
