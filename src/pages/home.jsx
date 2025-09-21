import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./pages.scss";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const socialVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 1 } }
  };

  return (
    <motion.div 
      className="page home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="wrapper">
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
            
            {/* --- THIS IS THE CORRECTED BUTTON --- */}
            <Link to="/resume" target="_blank" rel="noopener noreferrer">
              <button className="secondary">View Resume</button>
            </Link>

            <Link to="/contact">
              <button className="secondary">Get In Touch</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="social-links-home"
        variants={socialVariants}
        initial="hidden"
        animate="visible"
      >
        <a href="https://www.linkedin.com/in/saumya-pratap-singh-a27890287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src="/linkedin.png" alt="LinkedIn" /></a>
        <a href="mailto:saumyrajpoot666@gmail.com" title="Gmail"><img src="/gmail.png" alt="Gmail" /></a>
        <a href="https://developers.google.com/profile/u/117396655825602690739" target="_blank" rel="noopener noreferrer" title="Google"><img src="/google.png" alt="Google" /></a>
        <a href="https://github.com/SaumyaPratapSingh-cyber/SaumyaPratapSingh-cyber" target="_blank" rel="noopener noreferrer" title="GitHub"><img src="/github-icon.png" alt="GitHub" /></a>
      </motion.div>
    </motion.div>
  );
};

export default Home;