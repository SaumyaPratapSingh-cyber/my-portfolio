import { motion } from "framer-motion";
// 1. Make sure you import useEffect and useRef
import { useRef, useEffect } from "react"; 
import Hero from "../components/Hero/Hero.jsx";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  const socialVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 1 } }
  };

  // 2. This ref is for your scrolling container
  const scrollContainerRef = useRef(null);

  // 3. THIS IS THE FIX
  // This hook runs once when the component mounts
  useEffect(() => {
    // Force the scroll container to the top
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, []); // The empty [] means it only runs on load

  return (
    // 4. Attach the ref to your container
    <div className="home-container" ref={scrollContainerRef}>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        {/* 5. We remove the prop, it's not needed for the simple timeline */}
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* --- SOCIAL LINKS --- */}
      <motion.div
        className="social-links-home"
        variants={socialVariants}
        initial="hidden"
        animate="visible"
      >
        <a href="https://www.linkedin.com/in/saumya-pratap-singh-a27890287" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src="/linkedin.png" alt="LinkedIn" /></a>
        <a href="mailto:saumyrajpoot666@gmail.com" title="Gmail"><img src="/gmail.png" alt="Gmail" /></a>
        <a href="https://developers.google.com/profile/u/117396655825602690739" target="_blank" rel="noopener noreferrer" title="Google"><img src="/google.png" alt="Google" /></a>
        <a href="https://github.com/SaumyaPratapSingh-cyber" target="_blank" rel="noopener noreferrer" title="GitHub"><img src="/github-icon.png" alt="GitHub" /></a>
      </motion.div>
    </div>
  );
};

export default Home;