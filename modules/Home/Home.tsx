import BottomLine from "@/components/common/Section/BottomLine";
import { Section } from "@/components/common/Section/Section";

const Home = () => {
  return (
    <div className="min-h-screen">
      <BottomLine>
        <Section>
          <div className="flex flex-col justify-center items-center py-40">
            <h1 className="text-3xl md:text-8xl font-bold text-foreground">
              Ashutosh Tiwari
            </h1>
          </div>
        </Section>
      </BottomLine>
    </div>
  );
};

export default Home;
