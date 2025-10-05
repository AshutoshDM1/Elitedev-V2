import BottomLine from "../Section/BottomLine";
import Section from "../Section/Section";

const LineBar = () => {
  return (
    <>
      <BottomLine className="relative">
        <Section>
          <div className="w-full h-8 "></div>
          <div className="absolute inset-0 z-0 bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56" />
        </Section>
      </BottomLine>
    </>
  );
};

export default LineBar;
