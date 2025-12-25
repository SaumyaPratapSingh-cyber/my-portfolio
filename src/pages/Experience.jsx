import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import "./pages.scss";
import { experience } from "../constants";

// This is the new, separate Card component
const Card = ({ exp, i, scrollContainerRef }) => {
  const cardRef = useRef(null);

  // Track scroll progress of the card relative to the carousel
  const { scrollXProgress } = useScroll({
    container: scrollContainerRef,
    target: cardRef,
    offset: ['start end', 'end start'],
    layoutEffect: false // FIX 1: Ensures smooth rendering on deploy
  });

  // Map the scroll progress to the strong effect
  const rotateY = useTransform(scrollXProgress, [0, 0.5, 1], [45, 0, -45]);
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <div className="carousel-item-wrapper" ref={cardRef}>
      <motion.div
        className="timeline-card"
        style={{
          rotateY,
          scale,
          opacity,
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

// This is your main page component
const Experience = () => {
  const carouselRef = useRef(null);

  // This handles precise keyboard scrolling (350px card + 20px padding = 370px)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      carouselRef.current.scrollBy({ left: -370, behavior: 'smooth' }); // FIX 2: Precise scroll amount
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      carouselRef.current.scrollBy({ left: 370, behavior: 'smooth' }); // FIX 2: Precise scroll amount
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
      id="experience"
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