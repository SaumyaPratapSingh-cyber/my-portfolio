import "./app.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Make sure motion is imported
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Experience from "./pages/Experience.jsx";
import Resume from "./pages/Resume.jsx";
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground.jsx";

const App = () => {
  const location = useLocation();

  // Define variants for the social links
  const socialVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 1 } }
  };

  // THIS IS THE CRITICAL LOGIC: Check if the path is exactly '/'
  const isHomePage = location.pathname === '/';

  return (
    <>
      <ParticleBackground />
      <CustomCursor />

      {location.pathname !== '/resume' && location.pathname !== '/' && <Navbar />}

      {/* --- CONDITIONAL SOCIAL LINKS --- */}
      {/* The social bar will ONLY render when the URL is / */}
      {isHomePage && (
        <motion.div
          className="social-links-home"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
        >
          {/* PASTE YOUR SOCIAL LINKS CONTENT HERE */}
          <a href="https://www.linkedin.com/in/saumya-pratap-singh-a27890287" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src="/linkedin.png" alt="LinkedIn" /></a>
          <a href="mailto:saumyrajpoot666@gmail.com" title="Gmail"><img src="/gmail.png" alt="Gmail" /></a>
          <a href="https://developers.google.com/profile/u/117396655825602690739" target="_blank" rel="noopener noreferrer" title="Google"><img src="/google.png" alt="Google" /></a>
          <a href="https://github.com/SaumyaPratapSingh-cyber" target="_blank" rel="noopener noreferrer" title="GitHub"><img src="/github-icon.png" alt="GitHub" /></a>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;