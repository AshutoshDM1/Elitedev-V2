import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";
import { TextFlip } from "@/components/text-flip";
import Svg from "@/constants/svg";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <BottomLine>
      <Section>
        <div className="flex justify-center">
          <div className="w-fit border-r border-edge overflow-hidden">
            <Image
              className="rounded-full aspect-square object-cover object-left border border-edge p-1"
              src="/images/profile.png"
              alt="Home"
              width={200}
              height={200}
            />
          </div>
          <div className="max-h-full w-full flex flex-col">
            <div className="h-full w-full relative">
              <div className="absolute inset-0 z-0 bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56" />
            </div>
            <h2 className="w-full flex justify-start items-center gap-4 text-2xl font-semibold border-t border-edge tracking-wide p-2 z-10">
              Ashutosh Tiwari
              <span>{Svg.twitterSVG}</span>
            </h2>
            <TextFlip className="flex justify-start text-sm font-light text-foreground/60 border-t border-edge p-2 z-10">
              <span>Developer</span>
              <span>Designer</span>
              <span>Open Source Contributor</span>
            </TextFlip>
          </div>
        </div>
      </Section>
    </BottomLine>
  );
};

export default ProfileImage;
