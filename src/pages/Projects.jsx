import { motion, useInView } from "framer-motion"; // 1. Import useInView
import { useState, useEffect, useRef, useCallback } from "react"; // 2. Import useCallback
import "./pages.scss";
import { projects } from "../constants"; 

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // 3. This ref will be attached to the main project page
  const pageRef = useRef(null);
  
  // 4. This hook will be true when 50% of the page is visible
  const isInView = useInView(pageRef, { amount: 0.5 });
  
  // 5. We wrap our functions in useCallback for stability
  const updateCarousel = useCallback((newIndex) => {
    // Don't do anything if we are already animating
    if (isAnimating) return; 
    setIsAnimating(true);

    const nextIndex = (newIndex + projects.length) % projects.length;
    setCurrentIndex(nextIndex);

    // After 800ms (the CSS animation time), allow animating again
    setTimeout(() => {
      setIsAnimating(false);
    }, 800); 
  }, [isAnimating, projects.length]); // Dependencies

  const handleKeydown = useCallback((e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault(); // Stop the page from scrolling
      updateCarousel(currentIndex - 1);
    } else if (e.key === "ArrowDown") {
      e.preventDefault(); // Stop the page from scrolling
      updateCarousel(currentIndex + 1);
    }
  }, [currentIndex, updateCarousel]); // Dependencies

  // 6. This useEffect now adds/removes the listener based on isInView
  useEffect(() => {
    if (isInView) {
      // If the component is in view, add the key listener
      document.addEventListener("keydown", handleKeydown);
    } else {
      // If it's not in view, remove the listener
      document.removeEventListener("keydown", handleKeydown);
    }

    // Cleanup: always remove the listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isInView, handleKeydown]); // Run this logic whenever isInView or the function changes

  
  const getCardClass = (index) => {
    const offset = (index - currentIndex + projects.length) % projects.length;
    
    if (offset === 0) return "center";
    if (offset === 1) return "down-1";
    if (offset === 2) return "down-2";
    if (offset === projects.length - 1) return "up-1";
    if (offset === projects.length - 2) return "up-2";
    return "hidden";
  };
  
  const activeProject = projects[currentIndex] || {};

  return (
    <motion.div
      className="page projects-page"
      ref={pageRef} // 7. Attach the ref to the main element
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="main-container">
        
        {/* --- LEFT SIDE: CAROUSEL --- */}
        <div className="carousel-section">
          {/* ... (no changes to the carousel HTML) ... */}
          <div className="carousel-container">
            <button className="nav-arrow up" onClick={() => updateCarousel(currentIndex - 1)}>
              <img src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765" alt="Up" />
            </button>
            <div className="carousel-track">
              {projects.map((project, index) => (
                <div
                  className={`card ${getCardClass(index)}`}
                  key={project.id}
                  data-index={index}
                  onClick={() => updateCarousel(index)}
                >
                  <img src={project.img} alt={project.title} />
                </div>
              ))}
            </div>
            <button className="nav-arrow down" onClick={() => updateCarousel(currentIndex + 1)}>
              <img src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249" alt="Down" />
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: PROJECT INFO --- */}
        <div className="controls-section">
          {/* ... (no changes to the controls HTML) ... */}
          <div className="nav-controls">
            <button className="nav-arrow up" onClick={() => updateCarousel(currentIndex - 1)}>
              <img src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765" alt="Up" />
            </button>
            <button className="nav-arrow down" onClick={() => updateCarousel(currentIndex + 1)}>
              <img src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249" alt="Down" />
            </button>
          </div>
          <div className="project-info">
            <h2 className="project-name">{activeProject.title}</h2>
            <p className="project-desc">{activeProject.desc}</p>
            <div className="tech-tags">
              {activeProject.tech?.split(', ').map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="project-links">
              {activeProject.prototypeLink && (
                <a href={activeProject.prototypeLink} target="_blank" rel="noopener noreferrer" className="primary-link">
                  View Prototype
                </a>
              )}
              {activeProject.link && (
                <a href={activeProject.link} target="_blank" rel="noopener noreferrer" className="secondary-link">
                  <img src="/github-icon.png" alt="GitHub" />
                  View on GitHub
                </a>
              )}
            </div>
          </div>
          <div className="dots">
            {projects.map((project, index) => (
              <div
                className={`dot ${index === currentIndex ? "active" : ""}`}
                key={project.id}
                data-index={index}
                onClick={() => updateCarousel(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;