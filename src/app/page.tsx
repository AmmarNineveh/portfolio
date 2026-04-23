import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Scene3D from '@/components/Scene3D';
import { SectionScroll } from '@/components/ui/SectionScroll';
import About from '@/components/About';
import Projects from '@/components/Projects';
import { CinematicFooter } from '@/components/ui/motion-footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F0F0EB] overflow-x-hidden">
        <Hero />
        <TechStack />
        <Scene3D />
        <SectionScroll>
          <About />
        </SectionScroll>
        <SectionScroll>
          <Projects />
        </SectionScroll>
      </main>
      <CinematicFooter />
    </>
  );
}
