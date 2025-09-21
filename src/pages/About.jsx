import { motion } from "framer-motion";
import "./pages.scss";
import { summary, education, experience } from "../constants";

const About = () => {
  const name = "Saumya Pratap Singh";
  const letters = Array.from(name);

  const signatureContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.8 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0, scale: 0.8 },
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const contentVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  return (
    <motion.div 
      className="page about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="wrapper">
        <motion.div 
          className="about-image-container"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="/profile.png" alt="Saumya Pratap Singh" className="profile-image" />
          <motion.h2
            className="signature"
            variants={signatureContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {letters.map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="about-content"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1>About <span>Me</span></h1>
          <p className="summary-text">{summary}</p>
          <h2 className="timeline-title">Academic Background</h2>
          <div className="timeline">
            {education.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{item.degree}</h3>
                  <p className="institution">{item.institution}</p>
                  <p className="duration">{item.duration}</p>
                  {item.courses && <p className="desc">{item.courses}</p>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;