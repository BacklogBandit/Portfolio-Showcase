import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WorkExperience from "@/components/sections/WorkExperience";
import PersonalProjects from "@/components/sections/PersonalProjects";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Portfolio() {
  return (
    <div className="relative w-full overflow-hidden bg-[#111216]">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col gap-24 pb-24">
        <About />
        <WorkExperience />
        <PersonalProjects />
        <Skills />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}