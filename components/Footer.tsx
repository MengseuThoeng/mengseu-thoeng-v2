"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Pre-Graduation", href: "#pre-graduation" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800 transition-colors py-16 relative overflow-hidden font-sans">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-gray-100 dark:border-zinc-800/80">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {siteConfig.author}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Available for opportunities
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Microservices Developer at ACLEDA Bank Plc. Specializing in Spring Boot, Micro Frontend, Apache Kafka, and enterprise systems.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-x-6 gap-y-2 text-xs font-mono font-medium">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Credits & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} {siteConfig.author}. All rights reserved. Phnom Penh, Cambodia 🇰🇭</p>
          
          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
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
