'use client';

import { motion } from 'framer-motion';
import { Section, SectionTitle } from '@/components/Section';
import { siteConfig } from '@/config/site';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  return (
    <Section id="experience" className="bg-muted/30">
      <SectionTitle subtitle="My professional journey">
        Work Experience
      </SectionTitle>

      <div className="max-w-4xl mx-auto">
        {siteConfig.experience.map((job, index) => (
          <motion.div
            key={job.id}
            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <motion.div 
              className="absolute left-0 top-0 transform -translate-x-[9px] w-4 h-4 rounded-full bg-primary border-4 border-background"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            />

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    {job.position}
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    {job.company}
                  </p>
                </div>
                <Badge variant="secondary">
                  {job.startDate} - {job.endDate}
                </Badge>
              </div>

              <ul className="space-y-2 mb-4">
                {job.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-start"
                  >
                    <span className="text-primary mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>

              {job.technologies && (
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
