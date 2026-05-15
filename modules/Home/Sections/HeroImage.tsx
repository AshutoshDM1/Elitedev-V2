import Image from "next/image";
import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";

const HeroImage = () => {
  return (
    <BottomLine>
      <Section>
        <div className="flex flex-col justify-center items-center py-8 relative">
          <div className="absolute inset-0 z-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(102,102,102,0.15)_1px,transparent_0)] [background-size:12px_12px]" />
          <div className="z-10">
            <Image
              className="filter invert dark:filter-none"
              src="/logo.webp"
              alt="Home"
              width={200}
              height={200}
            />
          </div>
        </div>
      </Section>
    </BottomLine>
  );
};

export default HeroImage;
