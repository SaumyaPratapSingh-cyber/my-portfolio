import React, { useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import { AuroraBackground } from './components/ui/AuroraBackground';

// Pages
import HeroSection from './pages/HeroSection';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
            <AuroraBackground>
              <Navbar />

              <main className="relative z-10 w-full">
                <HeroSection />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
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