import { Dot } from "lucide-react";
import React from "react";

interface TextContentProps {
  text?: string;
  highlight?: string;
  underline?: string;
  icon?: React.ReactNode;
  textContent?: TextContentProps[];
}

interface AboutContentProps {
  id: number;
  textContent: TextContentProps[];
}

export const MoreAboutHeading = () => {
  return (
    <div className="px-4 ">
      <h2 className="text-2xl font-semibold ">About</h2>
    </div>
  );
};

const MoreAboutContent = () => {
  const aboutContent: AboutContentProps[] = [
    {
      id: 1,
      textContent: [
        { highlight: "Full Stack Developer" },
        {
          text: "with 2+ Years of experience in building web applications and backend",
        },
        { highlight: "1 Year of company experience" },
        { text: "Currently Working as a" },
        { highlight: "Frontend/Design Engg." },
      ],
    },
    {
      id: 2,
      textContent: [
        { text: "Skilled in" },
        { highlight: "Next.js, React, TypeScript" },
        { text: "and modern front-end technologies like" },
        { highlight: "Tailwind CSS, Framer Motion," },
        { text: "Also I have Good knowledge of Bankend Technologies like" },
        { highlight: "Node.js, Express.js, PostgreSQL and Prisma" },
        { text: "and more." },
      ],
    },
    {
      id: 3,
      textContent: [
        {
          text: "I love to build and manage projects from start to finish, from concept to deployment. I have deployed multiple projects on",
        },
        { highlight: "Vercel , AWS , Cloudflare and more" },
        { text: "using technologies like" },
        { highlight: "Git, Docker, EC2, Nginx and PM2" },
        {
          textContent: [
            {
              text: "I also enjoy iterating on deployments and monitoring pipelines.",
            },
            { text: "Creating AI Agents and AI Workflows with Gemini and Claude" },
            { text: "Exploring new technologies and frameworks and learning new things" },
            
          ],
        },
      ],
    },
  ];

  return (
    <div className="p-4 ">
      <div className="space-y-4 flex flex-col ">
        {aboutContent.map((item) => (
          <div key={item.id} className="flex gap-1.5 flex-wrap items-center">
            <Dot className="size-1 rounded-full border border-foreground bg-foreground" />
            {item.textContent.map((textContent, idx) => (
              <TextContent
                key={`${item.id}-${idx}-${
                  textContent.text ?? textContent.highlight ?? "nested"
                }`}
                text={textContent.text}
                highlight={textContent.highlight}
                underline={textContent.underline}
                icon={textContent.icon}
                textContent={textContent.textContent}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreAboutContent;

const TextContent = ({
  text,
  highlight,
  underline,
  icon,
  textContent,
}: TextContentProps) => {
  return (
    <>
      {text && <p key={text}>{text}</p>}
      {highlight && <strong>{highlight}</strong>}
      {underline && <span className="underline">{underline}</span>}
      {icon && icon}
      {textContent && (
        <div className="ml-5 space-y-1 flex flex-col ">
          {textContent &&
            textContent.map((textContent, idx) => (
              <div
                key={`${text ?? highlight ?? "nested"}-${idx}`}
                className="flex gap-1.5 flex-wrap items-center"
              >
            <Dot className="size-1 rounded-full border border-foreground bg-foreground" />
            <TextContent
                  text={textContent.text}
                  highlight={textContent.highlight}
                  underline={textContent.underline}
                  icon={textContent.icon}
                  textContent={textContent.textContent}
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};
