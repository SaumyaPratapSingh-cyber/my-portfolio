import React, { useState, Suspense } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { AnimatePresence } from 'framer-motion';

// Eager Imports
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import { AuroraBackground } from './components/ui/AuroraBackground';
import HeroSection from './pages/HeroSection';

// Lazy Imports
const About = React.lazy(() => import('./pages/About'));
const Experience = React.lazy(() => import('./pages/Experience'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Certifications = React.lazy(() => import('./pages/Certifications'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Loading Fallback
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center my-8">
    <div className="w-8 h-8 border-4 border-hive-cyan border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root>
      <div className="bg-hive-black min-h-screen text-white font-mono selection:bg-hive-blue selection:text-white relative">
        <CustomCursor />

        <AnimatePresence mode="wait">
          {loading ? (
            <WelcomeScreen key="welcome" onComplete={() => setLoading(false)} />
          ) : (
            <AuroraBackground key="main">
              <Navbar />

              <main className="relative z-10 w-full">
                <HeroSection />
                
                <Suspense fallback={<SectionLoader />}>
                  <About />
                  <Experience />
                  <Skills />
                  <Projects />
                  <Certifications />
                  <Contact />
                </Suspense>
              </main>

              <Footer />
            </AuroraBackground>
          )}
        </AnimatePresence>
      </div>
    </ReactLenis>
  );
}

export default App;