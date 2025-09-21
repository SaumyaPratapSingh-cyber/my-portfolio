import { motion } from "framer-motion";
import "./pages.scss";
import { experience } from "../constants";

const Experience = () => {
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className="page experience-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="wrapper">
        <div className="header-section">
          <h1>Professional <span>Journey</span></h1>
          <p className="page-intro">A timeline of my internships and professional roles where I've applied and grown my skills.</p>
        </div>
        
        <motion.div 
          className="timeline"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experience.map((exp, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              variants={itemVariants}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <p className="desc">{exp.desc}</p>
                
                {/* CORRECTED LOGIC: This now shows the button as long as the link property exists */}
                {exp.certificateLink && (
                  <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer" className="certificate-link">
                    View Certificate →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;