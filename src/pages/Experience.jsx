import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import "./pages.scss";
import { experience } from "../constants";

// 1. THIS IS THE NEW, SIMPLER CARD COMPONENT
// It's a "dumb" component. It just receives styles.
const Card = ({ exp, i, style }) => {
  return (
    <div className="carousel-item-wrapper">
      <motion.div
        className="timeline-card"
        style={{
          ...style, // Pass the animated styles (rotateY, scale, opacity)
          backgroundImage: `url(${exp.img})`
        }}
      >
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

// 2. THIS IS THE NEW, SMARTER PARENT COMPONENT
const Experience = () => {
  const carouselRef = useRef(null);

  // 3. THIS IS THE FIX.
  // We track the scroll of the carousel-container itself.
  const { scrollXProgress } = useScroll({ 
    container: carouselRef,
    layoutEffect: false // This fixes the Vercel bug
  });

  // ... (Keyboard navigation code is unchanged and correct) ...
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      carouselRef.current.scrollBy({ left: -370, behavior: 'smooth' });
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      carouselRef.current.scrollBy({ left: 370, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;
    carouselElement.setAttribute('tabindex', '-1');
    const onFocus = () => document.addEventListener('keydown', handleKeyDown);
    const onBlur = () => document.removeEventListener('keydown', handleKeyDown);
    carouselElement.addEventListener('focus', onFocus);
    carouselElement.addEventListener('blur', onBlur);
    return () => {
      carouselElement.removeEventListener('focus', onFocus);
      carouselElement.removeEventListener('blur', onBlur);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
      
      <div 
        className="carousel-container" 
        ref={carouselRef}
        onClick={(e) => e.currentTarget.focus()}
      >
        <div className="carousel-spacer"></div>
        {experience.map((exp, i) => {
          // 4. We create the scroll range for each card
          const totalCards = experience.length;
          // Calculate the start and end point for each card's animation
          // e.g., Card 0: 0.0 to 0.2, Card 1: 0.2 to 0.4, etc.
          const start = i / totalCards;
          const end = (i + 1) / totalCards;
          const center = (start + end) / 2;

          // 5. We create the animations here, in the parent
          const scale = useTransform(scrollXProgress, [start, center, end], [0.7, 1, 0.7]);
          const rotateY = useTransform(scrollXProgress, [start, center, end], [45, 0, -45]);
          const opacity = useTransform(scrollXProgress, [start, center, end], [0.3, 1, 0.3]);

          return (
            <Card 
              exp={exp} 
              i={i} 
              key={i} 
              style={{ scale, rotateY, opacity }} // Pass the styles as a prop
            />
          );
        })}
        <div className="carousel-spacer"></div>
      </div>
    </motion.div>
  );
};

export default Experience;