"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faScrewdriverWrench,
  faCode,
  faGraduationCap,
  faImages,
  faEnvelope,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

export function HeaderNew() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <FontAwesomeIcon icon={faHouse} className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <FontAwesomeIcon icon={faUser} className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <FontAwesomeIcon icon={faBriefcase} className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <FontAwesomeIcon icon={faScrewdriverWrench} className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <FontAwesomeIcon icon={faCode} className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Education",
      link: "#education",
      icon: <FontAwesomeIcon icon={faGraduationCap} className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Anime",
      link: "#anime",
      icon: <FontAwesomeIcon icon={faHeart} className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Pre-Graduation",
      link: "#pre-graduation",
      icon: <FontAwesomeIcon icon={faImages} className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full z-50">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
