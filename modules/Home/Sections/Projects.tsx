"use client";

import { useState } from "react";
import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";
import { Link2, ChevronDown } from "lucide-react";
import Image from "next/image";
import { ChevronsUpDownIcon } from "@/components/chevrons-up-down-icon";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProjectItemType {
  id: string;
  name: string;
  period: string;
  link: string;
  image: string;
}

const PROJECT_DATA: ProjectItemType[] = [
  {
    id: "1",
    name: "Aset",
    period: "04.2026 — ∞",
    link: "https://aset.elitedev.space/",
    image: "https://aset.elitedev.space/favicon/favicon.ico",
  },
  {
    id: "2",
    name: "XContext",
    period: "11.2026 — ∞",
    link: "https://xcontext.elitedev.space/",
    image: "https://xcontext.elitedev.space/favicon.ico",
  },
  {
    id: "3",
    name: "Epicron",
    period: "09.2025 — 04.2026",
    link: "https://epicron.elitedev.space/",
    image: "https://epicron.elitedev.space/favicon/favicon.ico",
  },
  {
    id: "4",
    name: "Manga Heaven",
    period: "08.2024 — 09.2025",
    link: "https://mangaheaven.app",
    image: "https://mangaheaven.app/favicon.ico",
  },
  {
    id: "5",
    name: "Insight AI",
    period: "07.2024 — 09.2024",
    link: "https://insight-ai.elitedev.space/",
    image: "https://insight-ai.elitedev.space/InsightAI_favicon.png",
  },
  {
    id: "7",
    name: "Kiro",
    period: "05.2026 — ∞",
    link: "https://kiro.elitedev.space/",
    image: "https://kiro.elitedev.space/favicon.ico",
  },
  {
    id: "6",
    name: "CodeGen",
    period: "12.2024 — 01.2025",
    link: "https://codegen.elitedev.space/",
    image: "https://codegen.elitedev.space/codegen.png",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <BottomLine>
        <Section>
          <div className="p-2 px-4 ">
            <h2 className="text-2xl font-semibold relative w-fit">
              Selected Projects
              <span className="absolute -top-0 -right-8 text-xs">(06)</span>
            </h2>
          </div>
        </Section>
      </BottomLine>
      <BottomLine className="p-0">
        <Section className="border-b-0">
          <div className="flex flex-col">
            {PROJECT_DATA.map((project, index) => (
              <ProjectItem
                key={project.id}
                project={project}
                isLast={index === PROJECT_DATA.length - 1}
              />
            ))}
          </div>
          <div className="flex justify-center py-2 border-t border-edge">
            <Button size="sm">
              Show More <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </Section>
      </BottomLine>
    </>
  );
};

const ProjectItem = ({
  project,
  isLast,
}: {
  project: ProjectItemType;
  isLast: boolean;
}) => {
  return (
    <div
      className={cn(
        "group flex items-stretch border-t border-edge hover:bg-muted/50 transition-colors cursor-pointer first:border-t-0",
      )}
    >
      {/* Icon Section */}
      <div className="flex items-center justify-center w-24 py-2 border-r border-dashed border-edge shrink-0">
        <div className="relative size-10 rounded-full bg-dark flex items-center justify-center border border-edge overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            unoptimized
            className="object-contain p-2 z-10"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 items-center justify-between p-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-lg text-foreground leading-tight">
            {project.name}
          </h3>
          <p className="text-muted-foreground text-sm font-medium">
            {project.period}
          </p>
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-4 text-muted-foreground/60">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Link2 className="w-5 h-5" />
          </a>
          <div className="hover:text-foreground transition-colors cursor-pointer">
            <ChevronsUpDownIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
