'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '@/components/Section';
import { siteConfig } from '@/config/site';
import { Card } from '@/components/ui/card';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Section id="about">
      <SectionTitle subtitle="Get to know more about me">
        About Me
      </SectionTitle>

      <motion.div 
        className="flex flex-col md:flex-row gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="flex-1" variants={itemVariants}>
          <motion.div 
            className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={siteConfig.about.image}
              alt={siteConfig.author}
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div className="flex-1 space-y-6" variants={itemVariants}>
          {siteConfig.about.description.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-lg text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div className="grid grid-cols-2 gap-6 mt-8" variants={itemVariants}>
            <Card className="p-6 bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">
              <h3 className="text-3xl font-bold text-primary mb-2">
                {siteConfig.experience.length}+
              </h3>
              <p className="text-muted-foreground">
                Years Experience
              </p>
            </Card>
            <Card className="p-6 bg-secondary/50 hover:bg-secondary transition-colors">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                {siteConfig.projects.length}+
              </h3>
              <p className="text-muted-foreground">
                Projects Completed
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
