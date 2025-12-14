import aws from "./aws.png";
import radis from "./radis.png";
import tanstack from "./tanstack.png";
import shadcn from "./shadcn.png";
import gpt from "./gpt.png";
import figma from "./figma.png";
import mongo from "./mongo.png";
import myslq from "./myslq.png";
import docker from "./docker.png";
import git from "./git.png";
import reactRouter from "./react-router.png";
import ant from "./ant.png";
import redux from "./redux.png";
import motion from "./motion.png";
import radix from "./radix.png";
import tailwind from "./tailwind.png";
import next from "./next.png";
import react from "./react.png";
import bun from "./bun.png";
import node from "./node.png";
import py from "./py.png";
import js from "./js.png";
import ts from "./ts.png";
import nginx from "./nginx.png";
import { StaticImageData } from "next/image";

interface IStackImages {
  [key: string]: { image: StaticImageData; title: string };
}

export const stackImages: IStackImages = {
  ts: { image: ts, title: "TypeScript" },
  js: { image: js, title: "JavaScript" },
  py: { image: py, title: "Python" },
  next: { image: next, title: "Next.js" },
  react: { image: react, title: "React" },
  tanstack: { image: tanstack, title: "TanStack Query" },
  shadcn: { image: shadcn, title: "Shadcn/UI" },
  figma: { image: figma, title: "Figma" },
  mongo: { image: mongo, title: "MongoDB" },
  myslq: { image: myslq, title: "MySQL" },
  docker: { image: docker, title: "Docker" },
  git: { image: git, title: "Git" },
  reactRouter: { image: reactRouter, title: "React Router" },
  ant: { image: ant, title: "Ant Design" },
  redux: { image: redux, title: "Redux" },
  motion: { image: motion, title: "Framer Motion" },
  radix: { image: radix, title: "Radix UI" },
  tailwind: { image: tailwind, title: "Tailwind CSS" },
  node: { image: node, title: "Node.js" },
  bun: { image: bun, title: "Bun" },
  nginx: { image: nginx, title: "Nginx" },
  radis: { image: radis, title: "Redis" },
  aws: { image: aws, title: "AWS" },
  gpt: { image: gpt, title: "ChatGPT" },
};

export default stackImages;
