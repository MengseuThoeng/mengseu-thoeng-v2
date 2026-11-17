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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Anime", href: "#anime" },
    { name: "Gallery", href: "#pre-graduation" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: faGithub, href: `https://github.com/${siteConfig.social.github}` },
    { name: "LinkedIn", icon: faLinkedin, href: siteConfig.social.linkedin },
    { name: "Facebook", icon: faFacebook, href: siteConfig.social.facebook },
    { name: "Instagram", icon: faInstagram, href: siteConfig.social.instagram },
    { name: "Telegram", icon: faTelegram, href: siteConfig.social.telegram },
  ];

  return (
    <footer className="bg-white dark:bg-black border-t-2 border-black dark:border-white transition-colors py-14 relative overflow-hidden font-sans">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-10 border-b border-zinc-200 dark:border-zinc-800">
          
          {/* Brand & Status Tag */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                {siteConfig.author}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-medium rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Hires
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Software Engineer specializing in Spring Boot, Microservices, Apache Kafka, and modern full-stack web architecture.
            </p>
          </div>

          {/* Quick Nav Links (Rule 4: Clean typography) */}
          <div className="md:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-x-6 gap-y-2 text-xs font-semibold">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Credits & Social Channel Tags */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.author}. Built with Next.js &amp; Tailwind CSS.
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-8 h-8 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 flex items-center justify-center hover:bg-emerald-400 hover:text-black hover:border-black transition-colors"
              >
                <FontAwesomeIcon icon={social.icon} className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
