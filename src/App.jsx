import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './pages/HeroSection';
import Skills from './pages/Skills';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor/CustomCursor';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className='font-sora text-black min-h-screen relative'>
      <CustomCursor />

      <AnimatePresence mode='wait'>
        {loading ? (
          <WelcomeScreen key="welcome" onComplete={() => setLoading(false)} />
        ) : (
          <>
            <Navbar />
            <main className="pt-20">
              <HeroSection />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}