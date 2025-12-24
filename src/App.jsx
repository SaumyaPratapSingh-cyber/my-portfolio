import React from 'react';
import "./index.css";
import CosmicBackground from "./components/CosmicBackground.jsx";
import DockNavbar from "./components/navbar/DockNavbar.jsx";
import HeroSection from "./pages/HeroSection.jsx";
import BentoGrid from "./components/About/BentoGrid.jsx";
import OrbitalSkills from "./components/Skills/OrbitalSkills.jsx";
import Timeline from "./components/Experience/Timeline.jsx";
import HolographicProjects from "./components/Projects/HolographicProjects.jsx";
import ContactVortex from "./components/Contact/ContactVortex.jsx";
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx"; // Keeping the custom cursor if it exists and is good, or I could use a simple one.
// Taking out existing Routes for the "One Page Immersive OS" feel requested.
import { Element } from 'react-scroll';

const App = () => {
  return (
    <>
      <CosmicBackground />
      <CustomCursor /> {/* Assuming this component handles the cursor logic */}

      <DockNavbar />

      <main className="relative z-10 w-full overflow-hidden">
        <Element name="home">
          <HeroSection />
        </Element>

        <Element name="about">
          <BentoGrid />
        </Element>

        <Element name="skills">
          <OrbitalSkills />
        </Element>

        <Element name="experience">
          <Timeline />
        </Element>

        <Element name="projects">
          <HolographicProjects />
        </Element>

        <Element name="contact">
          <ContactVortex />
        </Element>
      </main>

      {/* Footer or extra credits could go here */}
      <footer className="py-6 text-center text-gray-500 text-sm relative z-10 glass-panel border-t border-t-white/10 mt-20">
        <p>© 2024 Saumya Pratap Singh. Built with Cosmic Energy.</p>
      </footer>
    </>
  );
};

export default App;