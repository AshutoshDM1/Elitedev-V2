import SocialsIcons from "@/assets/import";
import LineBar from "@/components/common/LineBar/LineBar";
import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { ISocial, socials_row_1, socials_row_2, socials_row_3 } from "@/data/Socials";

export const SocialLinks = () => {

  return (
    <>
      <LineBar />
      {/* This the Line Layout that cant make in the Section component */}
      <div className="grid grid-rows-3 gap-4 relative">
        <div className="absolute inset-0 grid grid-cols-2 gap-4 select-none z-0">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>
        <Section className="absolute inset-0"></Section>

        {/* This the Main Section that will be used to display the social links */}
        <SocialLinksSection socials={socials_row_1} index={1} />
        <SocialLinksSection socials={socials_row_2} index={2} />
        <SocialLinksSection socials={socials_row_3} index={3} /> 
      </div>
    </>
  );
};

export default SocialLinks;

const SocialLinksSection = ({
  socials,
  index,
}: {
  socials: ISocial[];
  index: number;
}) => {
  return (
    <BottomLine className={cn((index === 2 || index === 3) && "border-t")}>
      <Section className="relative border-none">
        <div className="grid grid-cols-2 gap-4 z-10 relative  border-edge">
          {socials.map((social) => (
            <div className="flex items-center gap-2 p-2 ">
              <Link target="_blank" href={social.href}>{social.icon}</Link>
              <div className="w-full flex items-center justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-medium">{social.name}</h3>
                  <p className="text-sm text-muted-foreground/60 hover:underline cursor-pointer">
                    {social.short_link}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link target="_blank" href={social.href}>
                    <MoveUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </BottomLine>
  );
};
