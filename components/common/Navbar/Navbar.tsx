"use client";
import { useEffect, useState } from "react";
import { ThemeToggleButton } from "@/components/ui/theme-animations";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-2 sticky top-0 z-50">
      <nav
        className={`border-y border-edge transition-shadow duration-300 ${
          scrolled ? "shadow-[0_0_16px_0_black]/8" : ""
        }`}
      >
        <div className="flex items-center justify-end gap-4 border-x border-edge max-w-5xl mx-auto py-3 px-2">
          {["Elitefolio", "Blogs", "Components"].map((item) => (
            <h1 
            key={item}
            className="text-base font-normal text-primary cursor-pointer">
              {item}
            </h1>
          ))}
          <div className="flex space-x-6 ">
            <ThemeToggleButton
              variant="rectangle"
              start="right-left"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
