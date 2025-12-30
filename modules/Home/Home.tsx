import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";
import HeroImage from "./Sections/HeroImage";
import ProfileImage from "./Sections/ProfileImage";
import About from "./Sections/About";
import SocialLinks from "./Sections/SocialLinks";
import TechStack, { TeactStacKHeading } from "./Sections/TechStack";
import LineBar from "@/components/common/LineBar/LineBar";
import MoreAboutContent, { MoreAboutHeading } from "./Sections/MoreAbout";

const Home = () => {
  return (
    <div className=" pb-40">
      <BottomLine>
        <Section>
          <HeroImage />
        </Section>
      </BottomLine>

      <BottomLine>
        <Section>
          <ProfileImage />
        </Section>
      </BottomLine>

      <BottomLine>
        <LineBar />
        <Section>
          <About />
        </Section>
      </BottomLine>

      <SocialLinks />

      <BottomLine>
        <LineBar />
        <Section>
          <MoreAboutHeading />
        </Section>
      </BottomLine>
      <BottomLine>
        <Section>
          <MoreAboutContent />
        </Section>
      </BottomLine>

      <BottomLine>
        <LineBar />
        <Section>
          <TeactStacKHeading />
        </Section>
      </BottomLine>
      <BottomLine>
        <Section>
          <TechStack />
        </Section>
      </BottomLine>
      <BottomLine>
        <Section>
          
        </Section>
      </BottomLine>
    </div>
  );
};

export default Home;
