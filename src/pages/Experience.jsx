import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import "./pages.scss";
import { experience } from "../constants";

// This is the new, separate Card component
// It tracks its own position in the scroll container
const Card = ({ exp, i, scrollContainerRef }) => {
  const cardRef = useRef(null);

  // Track scroll progress *of this card* relative to the carousel's viewport
  const { scrollXProgress } = useScroll({
    container: scrollContainerRef,
    target: cardRef,
    // Animate as it passes through the container
    offset: ['start end', 'end start'] 
  });

  // Map the scroll progress to the "stronger" effect you wanted
  const rotateY = useTransform(scrollXProgress, [0, 0.5, 1], [45, 0, -45]);
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    // This is the "snap-align" element
    <div className="carousel-item-wrapper" ref={cardRef}>
      <motion.div
        className="timeline-card" 
        style={{ 
          rotateY, 
          scale, 
          opacity,
          backgroundImage: `url(${exp.img})` // Set the image as the background
        }}
      >
        {/* This div is the dark overlay for text readability */}
        <div className="card-overlay">
          <h3>{exp.role}</h3>
          <p className="company">{exp.company}</p>
          <p className="duration">{exp.duration}</p>
          <p className="desc">{exp.desc}</p>
          {exp.certificateLink && (
            <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer" className="certificate-link">
              View Certificate →
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// This is your main page component
const Experience = () => {
  const carouselRef = useRef(null);

  // Add keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      // Scroll left by the width of one card + padding (350 + 20)
      carouselRef.current.scrollBy({ left: -370, behavior: 'smooth' });
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      // Scroll right by the width of one card + padding
      carouselRef.current.scrollBy({ left: 370, behavior: 'smooth' });
    }
  };

  // Add event listener when the component is in view
  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    // We add tabIndex to make it "focusable"
    carouselElement.setAttribute('tabindex', '-1');

    const onFocus = () => {
      document.addEventListener('keydown', handleKeyDown);
    };
    const onBlur = () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

    carouselElement.addEventListener('focus', onFocus);
    carouselElement.addEventListener('blur', onBlur);

    return () => {
      carouselElement.removeEventListener('focus', onFocus);
      carouselElement.removeEventListener('blur', onBlur);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Run once on mount

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
          <p className="page-intro">A timeline of my internships and professional roles. (Click to focus, then use arrow keys or scroll)</p>
        </div>
      </div>
      
      {/* --- NEW 3D PERSPECTIVE CAROUSEL --- */}
      <div 
        className="carousel-container" 
        ref={carouselRef}
        // This makes it focusable for keyboard events
        onClick={(e) => e.currentTarget.focus()}
      >
        {/* These spacers center the first and last cards */}
        <div className="carousel-spacer"></div>
        {experience.map((exp, i) => (
          <Card 
            exp={exp} 
            i={i} 
            key={i} 
            scrollContainerRef={carouselRef}
          />
        ))}
        <div className="carousel-spacer"></div>
      </div>
    </motion.div>
  );
};

export default Experience;