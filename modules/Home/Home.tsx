import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";
import HeroImage from "./Sections/HeroImage";
import ProfileImage from "./Sections/ProfileImage";
import About from "./Sections/About";
import SocialLinks from "./Sections/SocialLinks";
import TechStack, { TeactStacKHeading } from "./Sections/TechStack";
import LineBar from "@/components/common/LineBar/LineBar";
import MoreAboutContent, { MoreAboutHeading } from "./Sections/MoreAbout";
import Experience from "./Sections/Experience";
import GitHubGraph from "./Sections/Github";
import Projects from "./Sections/Projects";

const Home = () => {
  return (
    <div className=" pb-40">
      <HeroImage />
      <ProfileImage />
      <LineBar />
      <About />
      <SocialLinks />
      <LineBar />
      <MoreAboutHeading />
      <MoreAboutContent />
      <LineBar />
      <TeactStacKHeading />
      <TechStack />
      <LineBar />
      <Experience />
      <LineBar />  
      <GitHubGraph />
      <LineBar />
      <Projects />
    </div>
  );
};

export default Home;
