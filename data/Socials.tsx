import SocialsIcons from "@/assets/import";
import Image from "next/image";

export interface ISocial {
  name: string;
  short_link: string;
  icon: React.ReactNode;
  href: string;
}

export const socials_row_1: ISocial[] = [
  {
    name: "Discord",
    short_link: "download.sensei",
    icon: (
      <div className="min-w-12 h-12 bg-background rounded-xl border border-edge">
        <Image
          src={SocialsIcons.discordIcon}
          alt="Discord"
          title="Discord"
          className="w-full h-full p-1 object-contain"
        />
      </div>
    ),

    href: "https://discord.gg/dDFKkdXRxQ",
  },
  {
    name: "GitHub",
    short_link: "AshutoshDM1",
    icon: (
      <div className="min-w-12 h-12 bg-background rounded-xl border border-edge overflow-hidden">
        <Image
          src={SocialsIcons.githubIcon}
          alt="GitHub"
          title="GitHub"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    href: "https://github.com/AshutoshDM1",
  },
];
export const socials_row_2 = [
  {
    name: "Twitter",
    short_link: "AshutoshDM_1",
    icon: (
      <div className="min-w-12 h-12 bg-background rounded-xl border border-edge overflow-hidden">
        <Image
          src={SocialsIcons.twitterIcon}
          alt="Twitter"
          title="Twitter"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    href: "https://x.com/AshutoshDM_1",
  },
  {
    name: "LinkedIn",
    short_link: "Ashutosh_Tiwari",
    icon: (
      <div className="min-w-12 h-12 bg-background rounded-xl border border-edge overflow-hidden">
        <Image
          src={SocialsIcons.linkedInIcon}
          alt="LinkedIn"
          title="LinkedIn"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    href: "https://www.linkedin.com/in/ashutosh-tiwari-8931b82b8/",
  },
];
export const socials_row_3 = [
  {
    name: "Notion",
    short_link: "AshutoshTiwari",
    icon: (
      <div className="min-w-12 h-12 dark:bg-foreground rounded-xl border border-edge overflow-hidden">
        <Image
          src={SocialsIcons.notionIcon}
          alt="Notion"
          title="Notion"
          className="w-full h-full p-1 object-cover"
        />
      </div>
    ),
    href: "https://elitedev.notion.site/",
  },
  {
    name: "Fork You",
    short_link: "Ashutosh Tiwari",
    icon: (
      <div className="min-w-12 h-12 bg-foreground rounded-xl border border-edge overflow-hidden">
        <Image
          src={SocialsIcons.forkYouIcon}
          alt="Fork You"
          title="Fork You"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    href: "https://forkyou.dev/user/ashutoshdm_1",
  },
];
