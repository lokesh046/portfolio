import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProblemSolving from './components/ProblemSolving';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative z-0 w-full min-h-screen text-white selection:bg-cyan selection:text-navy flex flex-col bg-navy">
      <ParticleBackground />
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <ProblemSolving />
        <Resume />
        <Contact />
      </main>

      <footer className="py-8 bg-navy/90 backdrop-blur-sm border-t border-white/10 text-center text-gray-400 text-sm z-10 relative mt-auto">
        <p>© {new Date().getFullYear()} Lokesh. Built with React, Tailwind CSS & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;



