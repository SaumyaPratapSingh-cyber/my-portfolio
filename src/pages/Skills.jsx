import { motion } from "framer-motion";
import "./pages.scss";
import { skills as skillData } from "../constants";
import React, { useMemo, useState, useEffect } from "react";

// --- This is the new Skill Orbiter Component ---
const SkillOrbiter = () => {
  // 1. Flatten all your skills into one array
  const allSkills = useMemo(() => skillData.flatMap(category => category.items), []);
  const numSkills = allSkills.length;
  
  // 2. State to track the currently hovered/active skill
  const [activeSkill, setActiveSkill] = useState(null);
  
  // 3. State for the continuous rotation
  const [rotation, setRotation] = useState(0);

  // 4. This effect animates the rotation
  useEffect(() => {
    const animate = () => {
      // We check if a skill is hovered. If so, pause the rotation.
      if (activeSkill === null) {
        setRotation(r => r + 0.0003);
      }
      requestAnimationFrame(animate);
    };
    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [activeSkill]); // Re-run if activeSkill changes

  // 5. This calculates the (x, y) position for each skill
  const getPosition = (index) => {
    const angle = (index / numSkills) * 2 * Math.PI + rotation;
    const radius = 250; // The radius of the circle in pixels
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="skill-orbiter-container">
      {/* This is the center circle */}
      <div className="center-glow-ring"></div>
      <div className="center-logo">
        <span className="center-text">SKILLS</span>
      </div>

      {/* This is the container for all the orbiting icons */}
      <div className="orbiter">
        {allSkills.map((skill, index) => {
          const { x, y } = getPosition(index);
          const isActive = activeSkill ? activeSkill.name === skill.name : false;
          const isDimmed = activeSkill ? !isActive : false;

          return (
            <motion.div
              key={skill.name}
              className="skill-icon"
              onPointerOver={() => setActiveSkill(skill)}
              onPointerOut={() => setActiveSkill(null)}
              
              // Animate position, scale, and opacity
              animate={{
                x: x,
                y: y,
                scale: isActive ? 1.5 : (isDimmed ? 0.6 : 1),
                opacity: isDimmed ? 0.5 : 1,
                zIndex: isActive ? 100 : 1,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
            >
              <img src={skill.logo} alt={skill.name} />
              
              {/* Show name when hovered */}
              {isActive && (
                <motion.span 
                  className="skill-name-tooltip"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {skill.name}
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};


// --- This is your main Skills page component ---
const Skills = () => {
  return (
    <motion.div 
      className="page skills-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="wrapper">
        <h1>My Technical <span>Arsenal</span></h1>
        <p className="page-intro">
          A collection of the primary technologies and tools I utilize.
          Hover over any icon to see it in detail.
        </p>
        
        {/* We render the new Orbiter component */}
        <SkillOrbiter />

      </div>
    </motion.div>
  );
};

export default Skills;