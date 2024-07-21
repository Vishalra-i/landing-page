import DevelopmentCycle from "@/components/Section/DevelopmentCycle";
import HeroSection from "@/components/Section/HeroSection";
import Projects from "@/components/Section/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <HeroSection/>
      <DevelopmentCycle/>
      <Projects/>

    </main>
  );
}
