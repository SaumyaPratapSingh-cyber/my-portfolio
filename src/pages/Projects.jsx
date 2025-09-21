import { motion } from "framer-motion";
import "./pages.scss";
import { projects } from "../constants";

const Projects = () => {
  return (
    <motion.div 
      className="page projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="wrapper">
        <h1>My Creative <span>Endeavors</span></h1>
        <p className="page-intro">
          A collection of my recent projects. Each project was an opportunity to solve problems, learn new technologies, and create a meaningful impact.
        </p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card" 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-image-container">
                 <img src={project.img} alt={project.title} />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p className="desc">{project.desc}</p>
                
                <h4>Impact</h4>
                <p className="impact">{project.impact}</p>

                <div className="tech-tags">
                  {project.tech.split(', ').map(t => <span key={t}>{t}</span>)}
                </div>
                
                <div className="project-links">
                  {/* CORRECTED LOGIC: Now shows the button as long as the link property exists */}
                  {project.prototypeLink && (
                    <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="primary-link">
                      View Prototype
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="secondary-link">
                      <img src="/github-icon.png" alt="GitHub" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;