import AppDev from "@/components/Section/AppDev";
import Contact from "@/components/Section/Contact";
import DevelopmentCycle from "@/components/Section/DevelopmentCycle";
import FAQ from "@/components/Section/FAQ";
import HeroSection from "@/components/Section/HeroSection";
import Projects from "@/components/Section/Projects";
import Team from "@/components/Section/Team";
import Image from "next/image";


export default function Home() {
  return (
    <main >
      <HeroSection/>
      <DevelopmentCycle/>
      <Projects/>
      <Contact/>
      <AppDev/>
      <Team/>
      <FAQ/>

    </main>
  );
}
