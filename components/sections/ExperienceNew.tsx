"use client";

import { Timeline } from "@/components/ui/timeline";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export function ExperienceNew() {
  const data = siteConfig.experience.map((exp) => ({
    title: `${exp.startDate} - ${exp.endDate}`,
    content: (
      <div>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-bold mb-2">
              {exp.position}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base mb-4">
              {exp.company}
            </p>
          </div>
        </div>
        
        <div className="grid gap-4">
          <div>
            <h4 className="text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="py-20">
      <Timeline data={data} />
    </section>
  );
}
