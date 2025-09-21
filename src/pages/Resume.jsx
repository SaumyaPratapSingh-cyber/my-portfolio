import { motion } from "framer-motion";
import "./pages.scss";

const Resume = () => {
  const resumeImagePath = "/SaumyratapSingh_resume.png";
  const resumePdfPath = "/SaumyratapSingh_resume.pdf";

  return (
    <motion.div 
      className="page resume-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="wrapper">
        <div className="resume-header">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My <span>Resume</span>
          </motion.h1>

          <motion.div 
            className="header-links"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="social-links">
              <a href="https://www.linkedin.com/in/saumya-pratap-singh-a27890287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" title="LinkedIn"><img src="/linkedin.png" alt="LinkedIn"/></a>
              <a href="https://github.com/SaumyaPratapSingh-cyber/SaumyaPratapSingh-cyber" title="GitHub"><img src="/github-icon.png" alt="GitHub"/></a>
              <a href="mailto:saumyrajpoot666@gmail.com" title="Email"><img src="/mail.png" alt="Email"/></a>
              <a href="https://developers.google.com/profile/u/117396655825602690739" title="Google"><img src="/google.png" alt="Google"/></a>
            </div>
            <a href={resumePdfPath} download="SaumyaPratapSingh-Resume.pdf" className="primary download-button">
              Download PDF
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="resume-image-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img src={resumeImagePath} alt="Saumya Pratap Singh Resume" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;