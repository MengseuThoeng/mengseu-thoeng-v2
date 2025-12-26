'use client';

import { motion } from 'framer-motion';
import { Section, SectionTitle } from '@/components/Section';
import { siteConfig } from '@/config/site';
import { Card } from '@/components/ui/card';

export function Skills() {
  const skillCategories = [
    { title: 'Languages', skills: siteConfig.skills.languages, color: 'hsl(var(--primary))' },
    { title: 'Frontend', skills: siteConfig.skills.frontend, color: 'hsl(var(--chart-2))' },
    { title: 'Backend', skills: siteConfig.skills.backend, color: 'hsl(var(--chart-3))' },
    { title: 'Databases', skills: siteConfig.skills.databases, color: 'hsl(var(--chart-4))' },
    { title: 'Tools', skills: siteConfig.skills.tools, color: 'hsl(var(--chart-5))' },
  ];

  return (
    <Section id="skills">
      <SectionTitle subtitle="Technologies I work with">
        Skills & Technologies
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-xl transition-all duration-300 h-full">
              <h3 className="text-xl font-bold mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
