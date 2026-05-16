import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";
import {
  ExperienceItem,
  ExperienceItemType,
} from "@/components/work-experience";
import { CodeXmlIcon, GraduationCap, LightbulbIcon } from "lucide-react";

const Experience = () => {
  const WORK_EXPERIENCE: ExperienceItemType[] = [
    {
      id: "edgenroots",
      companyName: "Edgenroots",
      // companyLogo: "./logo/image.png",
      companyWebsite: "https://www.edgenroots.com",
      positions: [
        {
          id: "2",
          title: "Frontend Developer",
          employmentPeriod: {
            start: "08.2025",
            end: "03.2026",
          },
          employmentType: "Full-time",
          icon: <CodeXmlIcon />,
          description: `
- Built **Production-ready Websites** , Prototypes using Next.js, React, TypeScript, and Tailwind CSS and work in more than **10+ projects**.
- Developed reusable UI components, dashboards, Integrated Redux, React Query, routing, authentication, and service-based API flows and handled **8+ modules** in **Rockworth ECommerce** and Other Projects.
- Improved **SEO**, responsiveness, static export, sitemap, and deployment workflows in multiple projects like **Kossmos**, **BanquetFirst** and many and increase the page speed by **55% upto 90+**.
- Handle development end to end and client changes in **Scribble India** Project and deployed projects on Cloudflare and Vercel.
- Implimented Nextjs **SSR**, **SSG**, **ISR** and **Caching** in different projects to reduce the load time and improve the performance **Up to 40%** and **Reduce** the **Vercel** Edge Function **Cost to 40%** .
`,

          skills: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Strapi CMS",
            "Framer Motion",
            "React Query",
            "SEO",
            "Redux Toolkit",
            "Github Action",
            "Cloudflare",
            "AWS S3",
            "Vercel",
          ],
        },
        {
          id: "1",
          title: "Frontend Intern",
          employmentPeriod: {
            start: "05.2025",
            end: "07.2025",
          },
          description: `
- Worked on **CRM modules** like Leads, **Subscription, Meta Template,** and Status Flow.
- Built Sign Up, Sign In, Welcome, and subscription flow pages.
- Integrated APIs, Redux, routes, tables, AutoSearch, pagination, and filters.
- Redesigned **OneOrderOffer** project pages including Landing, Dashboard, Payment, and Success.
- Fixed UI bugs, tested modules, and supported multiple internal projects.
`,
          employmentType: "Full-time",
          icon: <LightbulbIcon />,
          skills: [
            "React.js",
            "TypeScript",
            "React Router",
            "Material UI",
            "RBAC",
            "Redux Toolkit",
            "API Integration",
            "Pagination",
            "AutoSearch",
          ],
        },
      ],
      isCurrentEmployer: false,
    },
    {
      id: "education",
      companyName: "Education",
      positions: [
        {
          id: "1",
          title: "Bachelor of Computer Application",
          employmentPeriod: {
            start: "07.2022",
            end: "06.2025",
          },
          employmentType: "Full-time",
          icon: <GraduationCap />,
          description: `
- BCA in Computer Science and completed 3 year.
`,
          skills: ["Computer Science", "Maths", "Statistics", "DBMS", "OOPS" , "DSA", "AI"],
        },
      ],
      isCurrentEmployer: false,
    },
  ];

  return (
    <>
      <BottomLine>
        <Section>
          <div className="px-4">
            <h2 className="text-2xl font-semibold ">Work Experience</h2>
          </div>
        </Section>
      </BottomLine>
      <BottomLine>
        <Section>
          <div className="px-4">
            {WORK_EXPERIENCE.map((experience) => (
              <ExperienceItem key={experience.id} experience={experience} />
            ))}
          </div>
        </Section>
      </BottomLine>
    </>
  );
};

export default Experience;
