import { HeroClean } from '@/components/sections/HeroClean';
import { AboutUnique } from '@/components/sections/AboutUnique';
import { Education } from '@/components/sections/Education';
import { ExperienceUnique } from '@/components/sections/ExperienceUnique';
import { ProjectsUnique } from '@/components/sections/ProjectsUnique';
import { SkillsUnique } from '@/components/sections/SkillsUnique';
import { ContactUnique } from '@/components/sections/ContactUnique';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <HeroClean />
      <AboutUnique />
      <Education />
      <ExperienceUnique />
      <ProjectsUnique />
      <SkillsUnique />
      <ContactUnique />
      
      {/* Simple footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-500 text-sm">
          <p>© 2025 Mengseu Thoeng. Built with Next.js & Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}
