import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";
import HeroImage from "./Sections/HeroImage";
import ProfileImage from "./Sections/ProfileImage";

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
    </div>
  );
};

export default Home;
