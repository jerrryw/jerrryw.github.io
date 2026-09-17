import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/sections/Hero';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Skills } from '@/sections/Skills';
import { Education } from '@/sections/Education';
import { Contact } from '@/sections/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
