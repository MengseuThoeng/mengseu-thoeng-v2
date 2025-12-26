'use client';

import { motion } from 'framer-motion';
import { Section, SectionTitle } from '@/components/Section';
import { siteConfig } from '@/config/site';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <Section id="education">
      <SectionTitle subtitle="My academic background">
        Education
      </SectionTitle>

      <div className="max-w-4xl mx-auto">
        {siteConfig.education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary/60"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <motion.div 
              className="absolute left-0 top-0 transform -translate-x-[9px] w-4 h-4 rounded-full bg-primary/60 border-4 border-background"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            />

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
              <div className="flex gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {edu.institution}
                      </p>
                      {edu.field && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {edu.field}
                        </p>
                      )}
                    </div>
                    <Badge variant="secondary">
                      {edu.startDate} - {edu.endDate}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
