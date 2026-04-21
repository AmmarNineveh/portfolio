import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import { SectionScroll } from '@/components/ui/SectionScroll';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { CinematicFooter } from '@/components/ui/motion-footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F0F0EB] overflow-x-hidden">
        <Hero />
        <TechStack />
        <SectionScroll>
          <About />
        </SectionScroll>
        <SectionScroll>
          <Projects />
        </SectionScroll>
        <SectionScroll>
          <Contact />
        </SectionScroll>
      </main>
      <CinematicFooter />
    </>
  );
}
