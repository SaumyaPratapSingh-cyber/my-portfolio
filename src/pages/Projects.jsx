import { motion, useInView } from "framer-motion"; // 1. Import useInView
import { useState, useEffect, useRef, useCallback } from "react"; // 2. Import useCallback
import "./pages.scss";
import "./projects-scrollbar-fix.css";
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

    // Cleanup function to remove listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isInView, handleKeydown]); // Dependencies

  const getCardClass = (index) => {
    const diff = index - currentIndex;
    const totalCards = projects.length;

    // Normalize the difference to be within -totalCards/2 to +totalCards/2
    const normalizedDiff = ((diff + totalCards / 2) % totalCards) - totalCards / 2;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === 1 || normalizedDiff === -(totalCards - 1)) return "down-1";
    if (normalizedDiff === 2 || normalizedDiff === -(totalCards - 2)) return "down-2";
    if (normalizedDiff === -1 || normalizedDiff === totalCards - 1) return "up-1";
    if (normalizedDiff === -2 || normalizedDiff === totalCards - 2) return "up-2";
    return "hidden";
  };

  return (
    <section className="page projects-page" ref={pageRef}>
      <div className="main-container">
        <div className="carousel-section">
          <div className="carousel-container">
            <button
              className="nav-arrow up"
              onClick={() => updateCarousel(currentIndex - 1)}
              aria-label="Previous project"
            >
              <img src="/arrow.svg" alt="Up" />
            </button>

            <div className="carousel-track">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`card ${getCardClass(index)}`}
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Empty card, background is set via inline style */}
                </motion.div>
              ))}
            </div>

            <button
              className="nav-arrow down"
              onClick={() => updateCarousel(currentIndex + 1)}
              aria-label="Next project"
            >
              <img src="/arrow.svg" alt="Down" />
            </button>
          </div>
        </div>

        <div className="controls-section">
          <div className="project-info">
            <h2 className="project-name">{projects[currentIndex].name}</h2>
            <p className="project-desc">{projects[currentIndex].description}</p>
            <div className="tech-tags">
              {projects[currentIndex].tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={projects[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-link"
              >
                View Live
              </a>
              <a
                href={projects[currentIndex].github}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-link"
              >
                <img src="/github.svg" alt="GitHub" />
                GitHub
              </a>
            </div>
          </div>

          <div className="nav-controls">
            <button
              className="nav-arrow"
              onClick={() => updateCarousel(currentIndex - 1)}
              aria-label="Previous project"
            >
              <img src="/arrow.svg" alt="Previous" style={{ transform: "rotate(180deg)" }} />
            </button>
            <button
              className="nav-arrow"
              onClick={() => updateCarousel(currentIndex + 1)}
              aria-label="Next project"
            >
              <img src="/arrow.svg" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;