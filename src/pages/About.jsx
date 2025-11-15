import { motion } from "framer-motion";
import "./pages.scss";
import { summary, education } from "../constants"; // 'experience' is imported but not used, which is fine
import AboutImage from "../components/AboutImage/AboutImage.jsx"; // <-- 1. IMPORT THE NEW COMPONENT

const About = () => {
  // We don't need the signature variants anymore
  // const name = "Saumya Pratap Singh";
  // const letters = Array.from(name);
  // ... (signatureContainerVariants and letterVariants are removed) ...

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
        
        {/* 2. REPLACE your old image <motion.div> with this one */}
        <motion.div 
          className="about-image-container"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* 3. CALL THE NEW COMPONENT HERE */}
          <AboutImage />
          
        </motion.div>
        
        {/* --- This is your existing content --- */}
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