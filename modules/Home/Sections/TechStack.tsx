"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import stackImages, {
  stackImages as stackImagesTyped,
} from "@/assets/stack/import";
import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";

export const TeactStacKHeading = () => {
  return (
    <BottomLine>
      <Section>
        <div className="p-2 px-4">
          <h2 className="text-2xl font-semibold ">Stack</h2>
        </div>
      </Section>
    </BottomLine>
  );
};

type StackEntry = (typeof stackImagesTyped)[keyof typeof stackImagesTyped];

const TechStack = () => {
  const isInvert = (image: StackEntry) => {
    return (
      image === stackImagesTyped.gpt ||
      image === stackImagesTyped.myslq ||
      image === stackImagesTyped.radix
    );
  };

  const isNotInvert = (image: StackEntry) => {
    return image === stackImagesTyped.shadcn || image === stackImagesTyped.next || image === stackImagesTyped.aws;
  };

  return (
    <BottomLine>
      <Section>
        <div className="px-4 py-4">
          <div className="flex flex-wrap gap-4">
            {Object.values(stackImagesTyped).map((entry) => (
              <motion.div
                key={entry.title}
                className="relative flex items-center gap-2 cursor-pointer"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <Image
                  src={entry.image.src}
                  className={cn(
                    "w-10 h-10 object-contain ",
                    isNotInvert(entry) ? "invert dark:invert-0 " : "",
                    isInvert(entry) ? "invert-0 dark:invert " : "",
                  )}
                  alt={entry.title}
                  width={500}
                  height={500}
                />
                <motion.div
                  variants={{
                    rest: { opacity: 0, y: -4, scale: 0.95 },
                    hover: { opacity: 1, y: -10, scale: 1 },
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-black/80 dark:bg-white px-2 py-1 text-xs text-white dark:text-black shadow-sm text-nowrap"
                >
                  {entry.title}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </BottomLine>
  );
};

export default TechStack;
