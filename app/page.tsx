import { HeaderNew } from '@/components/HeaderNew';
import { HeroClean } from '@/components/sections/HeroClean';
import { AboutUnique } from '@/components/sections/AboutUnique';
import { ExperienceUnique } from '@/components/sections/ExperienceUnique';
import { SkillsUnique } from '@/components/sections/SkillsUnique';
import { ProjectsUnique } from '@/components/sections/ProjectsUnique';
import { Education } from '@/components/sections/Education';
import { PreGraduationUnique } from '@/components/sections/PreGraduationUnique';
import { AnimeUnique } from '@/components/sections/AnimeUnique';
import { ContactUnique } from '@/components/sections/ContactUnique';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <HeaderNew />
      <HeroClean />
      <AboutUnique />
      <ExperienceUnique />
      <SkillsUnique />
      <ProjectsUnique />
      <Education />
      <PreGraduationUnique />
      <AnimeUnique />
      <ContactUnique />
      <Footer />
    </div>
  );
}
