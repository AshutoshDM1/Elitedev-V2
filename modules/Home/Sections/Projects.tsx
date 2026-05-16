"use client";

import { useState } from "react";
import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";
import { Link2, ChevronDown, Dot, Github } from "lucide-react";
import Image from "next/image";
import { ChevronsUpDownIcon } from "@/components/chevrons-up-down-icon";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

interface ProjectItemType {
  id: string;
  name: string;
  github?: string;
  period: string;
  link: string;
  image: string;
  description?: string;
  skills?: string[];
}

const PROJECT_DATA: ProjectItemType[] = [
  {
    id: "1",
    name: "Aset",
    period: "04.2026 — Present",
    link: "https://aset.elitedev.space/",
    github: "https://github.com/AshutoshDM1/Aset",
    image: "https://aset.elitedev.space/favicon/favicon.ico",
    description: `Modern cloud-native file storage and management platform inspired by Google Drive with end-to-end type safety.

- Secure authentication with Clerk
- File & folder management with nested structure support
- Cloudflare R2 object storage integration
- Smart views for recent, starred, shared, and trash
- Monorepo architecture with shared tRPC API types
- CI/CD ready with Docker, Jenkins, and Vercel deployment`,
    skills: [
      "React 19",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Cloudflare R2",
      "Tailwind CSS",
      "Shadcn UI",
      "Docker",
      "Jenkins",
      "pnpm",
    ],
  },

  {
    id: "2",
    name: "XContext",
    period: "11.2025 — Present",
    link: "https://xcontext.elitedev.space/",
    github: "https://github.com/AshutoshDM1/XContext",
    image: "https://xcontext.elitedev.space/favicon.ico",
    description: `AI-powered interview and codebase analysis platform designed for technical assessments and developer contests.

- AI-generated JavaScript and TypeScript interview questions
- Codebase upload and inspection system
- Contest and interview workflow support
- Google OAuth authentication with Better Auth
- Vercel AI Gateway integration for AI generation
- Full-stack architecture using Bun, Express, and Next.js`,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Bun",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
      "Vercel AI SDK",
      "Neon DB",
    ],
  },

  {
    id: "3",
    name: "Epicron",
    period: "09.2025 — 04.2026",
    link: "https://epicron.elitedev.space/",
    github: "https://github.com/AshutoshDM1/Epicron",
    image: "https://epicron.elitedev.space/favicon/favicon.ico",
    description: `Crypto portfolio and market intelligence platform focused on tracking, analytics, and AI-powered insights.

- Real-time crypto portfolio tracking
- Market analytics and asset monitoring
- AI-powered insights and summaries
- Modern responsive dashboard
- Built for performance and scalability`,
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "AI",
    ],
  },

  {
    id: "4",
    name: "Manga Heaven",
    period: "08.2024 — Present",
    link: "https://mangaheaven.app",
    github: "https://github.com/AshutoshDM1/MangaHaven",
    image: "https://mangaheaven.app/favicon.ico",
    description: `Modern manga reading platform with immersive UI, scalable architecture, and a powerful admin management system.

- Advanced manga search, filtering, and pagination
- Personalized reading progress and collections
- Full admin dashboard for manga/chapter management
- AWS EC2 + Docker deployment with CI/CD pipelines
- Zustand-powered modular frontend architecture
- Smooth responsive animations and optimized reading experience`,
    skills: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "AWS EC2",
      "Nginx",
      "GitHub Actions",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
    ],
  },

  {
    id: "5",
    name: "Insight AI",
    period: "07.2024 — 08.2024",
    link: "https://insight-ai.elitedev.space/",
    github: "https://github.com/AshutoshDM1/InsightAI",
    image: "https://insight-ai.elitedev.space/InsightAI_favicon.png",
    description: `AI chatbot platform inspired by modern conversational AI systems with real-time interactions and modern UI design.

- Real-time AI conversations
- Interactive chat interface
- Markdown rendering support
- Responsive UI experience
- Optimized AI response workflow`,
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI", "AI SDK"],
  },

  {
    id: "6",
    name: "CodeGen",
    period: "12.2024 — 04.2025",
    link: "https://codegen.elitedev.space/",
    github: "https://github.com/AshutoshDM1/CodeGen",
    image: "https://codegen.elitedev.space/codegen.png",
    description: `AI-assisted code generation platform built for developers to rapidly prototype and generate code using modern AI workflows.

- AI-powered code generation
- Fast developer workflow
- Interactive UI experience
- Backend API integration
- Optimized frontend architecture`,
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "AI",
      "Docker",
    ],
  },

  {
    id: "7",
    name: "Kiro",
    period: "2026 — Present",
    link: "https://kiro.elitedev.space",
    github: "https://github.com/AshutoshDM1/Kiro",
    image: "https://kiro.elitedev.space/favicon.ico",
    description: `AI-powered terminal-first Solana assistant built for secure wallet management and blockchain interactions using natural language.

- Gemini-powered AI agent with tool calling
- Secure encrypted local wallet keystore
- Real-time Solana portfolio tracking
- Rich interactive terminal UI experience
- Guardrailed transaction execution and simulation
- Monorepo architecture with CLI and Next.js dashboard`,
    skills: [
      "TypeScript",
      "Node.js",
      "Solana Web3.js",
      "Gemini AI",
      "Next.js",
      "pnpm Workspaces",
      "CLI Development",
      "Tailwind CSS",
      "TUI",
      "Web3",
    ],
  },

  {
    id: "8",
    name: "Web3Wallet",
    period: "08.2024 — 09.2025",
    link: "https://web3-wallet-v1-0-0.vercel.app",
    github: "https://github.com/AshutoshDM1/Web3Wallet",
    image: "https://web3-wallet-v1-0-0.vercel.app/Web3%20Wallet%20Favicon.png",
    description: `Solana wallet application with blockchain interaction, wallet management, and key generation support.

- Solana wallet integration
- Public/private key generation
- Wallet balance tracking
- Blockchain transaction interaction
- Lightweight responsive interface`,
    skills: ["React", "TypeScript", "Solana Web3.js", "Tailwind CSS", "Web3"],
  },

  {
    id: "9",
    name: "RPS",
    period: "08.2024 — 09.2025",
    link: "https://rps-web-sage.vercel.app",
    github: "https://github.com/AshutoshDM1/RPS",
    image:
      "https://static.vecteezy.com/system/resources/previews/047/825/978/non_2x/3d-cube-icon-against-transparent-background-free-png.png",
    description: `Real-time multiplayer Rock Paper Scissors game using socket-based communication and room matchmaking.

- Multiplayer room system
- Real-time gameplay synchronization
- Fast socket communication
- Interactive responsive UI
- Live game state updates`,
    skills: ["React", "Node.js", "Express", "Socket.io", "TypeScript"],
  },

  {
    id: "10",
    name: "Elite CLI",
    period: "2025 — Present",
    link: "https://elite-cli.vercel.app/",
    github: "https://github.com/AshutoshDM1/Elite-CLI",
    image: "https://elite-cli.vercel.app/favicon.ico",
    description: `Modern developer-focused CLI toolkit with beautiful terminal UX, animations, and productivity-first workflows.

- Interactive command-line interface
- Modern loaders and animations
- Fast developer utilities
- Lightweight CLI architecture
- Cross-platform support`,
    skills: [
      "Node.js",
      "TypeScript",
      "Commander.js",
      "Ora",
      "Chalk",
      "CLI Development",
    ],
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const totalProjects = PROJECT_DATA.length;

  const displayProjects = showAll ? PROJECT_DATA : PROJECT_DATA.slice(0, 4);

  return (
    <>
      <BottomLine>
        <Section>
          <div className="p-2 px-4 ">
            <h2 className="text-2xl font-semibold relative w-fit">
              Selected Projects
              <span className="absolute -top-0 -right-8 text-xs">
                ({totalProjects.toString().padStart(2, "0")})
              </span>
            </h2>
          </div>
        </Section>
      </BottomLine>
      <div className="px-2 border-x border-edge">
        <BottomLine className="p-0">
          <Section className="border-b-0">
            <div className="flex flex-col">
              {displayProjects.map((project, index) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  isLast={index === displayProjects.length - 1}
                />
              ))}
            </div>
            {totalProjects > 3 && (
              <div className="flex justify-center py-2 border-t border-edge">
                <Button size="sm" onClick={() => setShowAll(!showAll)}>
                  {showAll ? "Show Less" : "Show More"}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      showAll && "rotate-180",
                    )}
                  />
                </Button>
              </div>
            )}
          </Section>
        </BottomLine>
      </div>
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
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDescription = !!project.description;

  return (
    <div
      className={cn(
        "group flex flex-col border-t border-edge transition-colors cursor-pointer first:border-t-0",
      )}
    >
      <div
        className="flex items-stretch select-none"
        onClick={() => hasDescription && setIsExpanded(!isExpanded)}
      >
        {/* Icon Section */}
        <div className="flex items-center justify-center w-28 py-2 border-r border-dashed border-edge shrink-0">
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
        <div className="flex flex-1 flex-col p-3 gap-3 justify-center">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <h3 className="font-semibold text-lg text-foreground leading-tight">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-xs font-medium">
                {project.period}
              </p>
            </div>

            {/* Actions Section */}
            <div className="flex items-center gap-4 text-muted-foreground/60">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="size-4" />
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Link2 className="w-5 h-5" />
              </a>
              {hasDescription && (
                <div className="hover:text-foreground transition-colors cursor-pointer">
                  <ChevronsUpDownIcon
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isExpanded && "rotate-180",
                    )}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Skills Row (Visible in header) */}
          <div className="flex flex-wrap gap-1.5">
            {project.skills?.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded border border-edge bg-secondary/20 text-[10px] font-medium text-muted-foreground/70"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Collapsible Description */}
      {hasDescription && isExpanded && (
        <div className="px-4 pb-6 md:pl-24 border-t border-edge flex flex-col gap-6">
          <div className="prose prose-sm dark:prose-invert max-w-none pt-6 text-foreground/90">
            <ReactMarkdown
              components={{
                ul: ({ children }) => (
                  <ul className="space-y-2 mt-4">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="flex gap-2 items-start list-none">
                    <div className="mt-1.5">
                      <Dot className="size-1 rounded-full border border-muted-foreground bg-muted-foreground shrink-0" />
                    </div>
                    <div className="text-muted-foreground text-[15px] leading-relaxed">
                      {children}
                    </div>
                  </li>
                ),
                p: ({ children }) => (
                  <p className="mb-0 leading-relaxed text-[15px]">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground underline underline-offset-4 decoration-foreground/30">
                    {children}
                  </strong>
                ),
              }}
            >
              {project.description}
            </ReactMarkdown>
          </div>

          {/* Skills Section */}
          {project.skills && (
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md border border-edge bg-secondary/50 text-[11px] font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
