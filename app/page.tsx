import Hero from "./_component/Hero";
import { FloatingNav } from "./_component/UI/FloatingNav";
import Grid from "./_component/Grid";

import { navItems } from "@/data";
import MySkills from "./_component/MySkill";
import Expirence from "./_component/Experience";
import RecentProjects from "./_component/RecentProjects";
import { About } from "./_component/UI/About";
import Footer from "./_component/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Grid />
        <RecentProjects />
        <MySkills />
        <Expirence />
        <Footer />
      </div>
    </main>
  );
}
