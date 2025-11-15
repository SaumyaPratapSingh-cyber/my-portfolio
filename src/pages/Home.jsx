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
  const socialVariants = { /* ... */ };

  // 2. We need this ref to control the scroll
  const scrollContainerRef = useRef(null);

  // 3. THIS IS THE FIX FOR THE WRONG PAGE ORDER
  useEffect(() => {
    // When the component loads, force the scroll to the top (0, 0)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, []); // The empty array [] means this runs only once on load

  return (
    // 4. Attach the ref to your scrolling container
    <div className="home-container" ref={scrollContainerRef}>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        {/* 5. REMOVE the scrollContainerRef prop from here */}
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
        <a href="https.www.linkedin.com/in/saumya-pratap-singh-a27890287" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src="/linkedin.png" alt="LinkedIn" /></a>
        <a href="mailto:saumyrajpoot666@gmail.com" title="Gmail"><img src="/gmail.png" alt="Gmail" /></a>
        <a href="httpsS://developers.google.com/profile/u/117396655825602690739" target="_blank" rel="noopener noreferrer" title="Google"><img src="/google.png" alt="Google" /></a>
        <a href="httpss://github.com/SaumyaPratapSingh-cyber" target="_blank" rel="noopener noreferrer" title="GitHub"><img src="/github-icon.png" alt="GitHub" /></a>
      </motion.div>
    </div>
  );
};

export default Home;