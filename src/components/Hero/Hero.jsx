import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { Suspense } from "react"; // <-- Keep this
import "./hero.scss";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="hero"> 

      

      {/* --- LAYER 2: TEXT (FOREGROUND) --- */}
      <div className="hero-content">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants}>SAUMYA PRATAP SINGH</motion.h2>
          <motion.h1 variants={itemVariants}>
            <span>Aspiring Software Engineer</span> &<br />
            <span>AI Enthusiast</span>
          </motion.h1>
          <motion.div variants={itemVariants} className="buttons">
            <Link to="/projects">
              <button className="primary">View My Work</button>
            </Link>
            <Link to="/resume" target="SaumyratapSingh_resume.pdf" rel="noopener noreferrer">
              <button className="secondary">View Resume</button>
            </Link>
            <Link to="/contact">
              <button className="secondary">Get In Touch</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      {/* --- LAYER 1: 3D SCENE (BACKGROUND) --- */}
      <div className="spline-scene">
        <Suspense fallback={<div>Loading 3D...</div>}>
          <Spline scene="https://prod.spline.design/CU-WYIwDRIS7inhm/scene.splinecode" />
        </Suspense>
      </div>
      
    </div>
  );
};

export default Hero;