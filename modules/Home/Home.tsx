import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";
import HeroImage from "./Sections/HeroImage";
import ProfileImage from "./Sections/ProfileImage";
import About from "./Sections/About";
import LineBar from "@/components/common/LineBar/LineBar";

const Home = () => {
  return (
    <div className="min-h-screen">
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
        <Section>
          <About />
        </Section>
      </BottomLine>
      <LineBar />
    </div>
  );
};

export default Home;
