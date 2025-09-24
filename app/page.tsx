import { Suspense } from "react";
import Navbar from "@/components/common/Navbar/Navbar";
import Home from "@/modules/Home/Home";
import { SectionMain } from "@/components/common/Section/MainSection";

export default function HomePage() {
  return (
    <Suspense>
      <Navbar />
      <SectionMain>
        <Home />
      </SectionMain>
    </Suspense>
  );
}
