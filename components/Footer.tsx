"use client";

import { siteConfig } from "@/config/site";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const quickLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EDUCATION", href: "#education" },
    { name: "PRE-GRADUATION", href: "#pre-graduation" },
    { name: "ANIME", href: "#anime" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <footer className="bg-white dark:bg-black border-t-2 border-black dark:border-white transition-colors py-16 relative overflow-hidden font-sans">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b-2 border-dashed border-black dark:border-white">
          
          {/* Brand & Status Tag */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-2xl font-black uppercase font-mono tracking-tight text-black dark:text-white">
                {siteConfig.author}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-black bg-emerald-400 text-black text-[9px] font-mono font-bold uppercase shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                ACTIVE FOR HIRES
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Microservices Developer specializing in Spring Boot, Micro Frontend, Apache Kafka, and enterprise systems.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-x-6 gap-y-3 text-[10px] font-mono font-bold">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors uppercase border-b-2 border-transparent hover:border-black dark:hover:border-white"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Credits & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} {siteConfig.author.toUpperCase()}. ALL RIGHTS RESERVED. PHNOM PENH, CAMBODIA 🇰🇭</p>
          
          <div className="flex items-center gap-3">
            <a
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-black dark:border-white bg-white hover:bg-emerald-400 text-black dark:bg-zinc-800 dark:text-white dark:hover:bg-emerald-600 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-black dark:border-white bg-white hover:bg-emerald-400 text-black dark:bg-zinc-800 dark:text-white dark:hover:bg-emerald-600 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-black dark:border-white bg-white hover:bg-emerald-400 text-black dark:bg-zinc-800 dark:text-white dark:hover:bg-emerald-600 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-black dark:border-white bg-white hover:bg-emerald-400 text-black dark:bg-zinc-800 dark:text-white dark:hover:bg-emerald-600 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-black dark:border-white bg-white hover:bg-emerald-400 text-black dark:bg-zinc-800 dark:text-white dark:hover:bg-emerald-600 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"
              aria-label="Telegram"
            >
              <FontAwesomeIcon icon={faTelegram} className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
