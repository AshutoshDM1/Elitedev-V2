import { Dot } from "lucide-react";
import React from "react";
import ReactMarkdown from "react-markdown";
import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";

const ABOUT_MARKDOWN = `
- **Full Stack Developer** with 2+ Years of experience in building web applications and backend.
- Skilled in **Next.js, React, TypeScript** and modern front-end technologies like **Tailwind CSS, Framer Motion**. Also I have Good knowledge of Backend Technologies like **Node.js, Express.js, PostgreSQL and Prisma** and more.
- I love to build and manage projects from start to finish, from concept to deployment. I have deployed multiple projects on **Vercel, AWS, Cloudflare and more** using technologies like **Git, Docker, EC2, Nginx and PM2**.
  - I also enjoy iterating on deployments and monitoring pipelines.
  - Creating AI Agents and AI Workflows with Gemini and Claude.
  - Exploring new technologies and frameworks and learning new things.
`;

export const MoreAboutHeading = () => {
  return (
    <BottomLine>
      <Section>
        <div className="px-4 ">
          <h2 className="text-2xl font-semibold ">About</h2>
        </div>
      </Section>
    </BottomLine>
  );
};

const MoreAboutContent = () => {
  return (
    <BottomLine>
      <Section>
        <div className="p-4 px-6">
          <ReactMarkdown
            components={{
              ul: ({ children }) => <ul className="space-y-1">{children}</ul>,
              li: ({ children }) => (
                <li className="flex gap-2 items-start mt-1">
                  <div className="mt-2.5">
                    <Dot className="size-1 rounded-full border border-foreground bg-foreground shrink-0" />
                  </div>
                  <div className="text-muted-foreground leading-relaxed">
                    {children}
                  </div>
                </li>
              ),
              p: ({ children }) => <span className="inline-block ">{children}</span>,
              strong: ({ children }) => (
                <strong className="font-semibold text-foreground mx-0.5">
                  {children}
                </strong>
              ),
            }}
          >
            {ABOUT_MARKDOWN}
          </ReactMarkdown>
        </div>
      </Section>
    </BottomLine>
  );
};

export default MoreAboutContent;
