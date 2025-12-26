'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { Github, Linkedin, Twitter, Code2, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: `https://github.com/${siteConfig.social.github}`, icon: Github },
    { name: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
    { name: 'Twitter', href: siteConfig.social.twitter, icon: Twitter },
    { name: 'Medium', href: siteConfig.social.medium, icon: FileText },
    { name: 'Dev.to', href: siteConfig.social.dev, icon: Code2 },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-2">{siteConfig.author}</h3>
            <p className="text-muted-foreground text-sm">
              Software Engineer & Full Stack Developer
            </p>
          </motion.div>

          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                link.href && (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.name}
                    whileHover={{ scale: 1.2, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              );
            })}
          </motion.div>
        </div>

        <Separator className="my-8" />

        <motion.div 
          className="text-center text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            © {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
