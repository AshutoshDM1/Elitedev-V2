import Section from "@/components/common/Section/Section";
import BottomLine from "@/components/common/Section/BottomLine";
import { Github, Linkedin, Rss, Twitter, ShieldCheck } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <BottomLine>
      <Section className="py-6 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-muted-foreground text-base tracking-tight text-wrap">
            Inspired by{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              tailwindcss.com
            </a>
            /
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              ui.shadcn.com
            </a>
            /
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              vercel.com
            </a>
            /
            <a
              href="https://chanhdai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              chanhdai.com
            </a>
          </p>
          <p className="text-muted-foreground text-base tracking-tight">
            Built with care by{" "}
            <a
              href="https://github.com/ashutoshdm1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-semibold underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-all"
            >
              Ashutosh
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/ashutoshdm1/Elitedev-V2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-semibold underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-all"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </Section>
      <Section className="flex items-center justify-center border-t border-edge">
        <div className="flex flex-col md:flex-row divide-y divide-edge md:divide-y-0 md:divide-x border-x md:border-x-0 border-edge ">
          <Link
            href="/llms.txt"
            className="text-muted-foreground text-base tracking-tight flex items-center justify-center p-2 px-4"
          >
            llms.txt
          </Link>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center justify-center p-2 px-4"
          >
            <Twitter className="size-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors p-2 px-4 flex items-center justify-center"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors p-2 px-4 flex items-center justify-center"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="https://rss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors p-2 px-4 flex items-center justify-center"
          >
            <Rss className="size-4" />
          </a>
          <div className="p-2 px-4 flex items-center justify-center">
            <div className="flex items-center gap-1.5 p-2 rounded border border-edge bg-muted/30 text-muted-foreground/60">
              <ShieldCheck className="size-3.5 text-foreground/80" />
              <span className="text-[10px] font-bold tracking-tighter uppercase">
                DMCA
              </span>
              <span className="text-[10px] font-medium tracking-tighter uppercase opacity-70">
                Protected
              </span>
            </div>
          </div>
        </div>
      </Section>
    </BottomLine>
  );
};

export default Footer;
