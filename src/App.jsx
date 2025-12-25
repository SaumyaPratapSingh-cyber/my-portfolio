import React from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './pages/HeroSection';
import Skills from './pages/Skills';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor/CustomCursor';

export default function App() {
  return (
    <div className='font-sora text-black min-h-screen relative'>
      <CustomCursor />
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}