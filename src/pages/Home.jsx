import { motion } from "framer-motion";
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

  return (
    <div className="home-container">
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
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* --- SOCIAL LINKS ADDED BACK --- */}
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