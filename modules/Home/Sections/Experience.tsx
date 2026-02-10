"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  type: string;
  period: string;
  description: string[];
  technologies: string[];
  isActive?: boolean;
}

export const ExperienceHeading = () => {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-semibold">Experience</h2>
    </div>
  );
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Shadcraft",
      role: "Design Engineer",
      type: "Part-time",
      period: "01.2026 - ∞",
      description: [
        "Work on the registry and React component library.",
        "Design and build Pro application components and blocks, from Figma to production-ready React.",
      ],
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "shaden/registry", "Figma"],
      isActive: true,
    },
  ];

  return (
    <div className="px-4 py-4">
      <div className="space-y-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div
        className="flex items-start justify-between p-4 cursor-pointer transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              {experience.company}
              {experience.isActive && (
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              )}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">{experience.role}</p>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <span>{experience.type}</span>
            <span>•</span>
            <span>{experience.period}</span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-4 space-y-4 border-t border-border pt-4">
          {/* Description */}
          <ul className="space-y-2">
            {experience.description.map((item, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-foreground">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-md bg-muted/40 text-secondary-foreground border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;