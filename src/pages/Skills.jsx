import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

const Skills = () => {
  // Flatten all skills into a single array
  const allSkills = useMemo(() => {
    return skills.flatMap(category => category.items);
  }, []);

  // Configuration
  const RADIUS = 800; // Large radius for the arc effect
  const DURATION = 60; // Slow rotation speed

  return (
    <section className="py-20 relative overflow-hidden h-[120vh] flex flex-col items-center justify-start bg-white" id="skills">
      <div className="container mx-auto relative z-10 text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-center mb-4 text-black"
        >
          My <span className="underline decoration-4 decoration-black underline-offset-4">Skills</span>
        </motion.h2>
        <p className="text-gray-500 font-medium">Packed with Innovation. Orbiting around excellence.</p>
      </div>

      {/* Orbit Container - Positioned to show only the top arc */}
      <div
        className="absolute top-[30%] lg:top-[40%] flex items-center justify-center pointer-events-none"
        style={{
          width: RADIUS * 2,
          height: RADIUS * 2,
        }}
      >
        {/* Rotating Ring */}
        <motion.div
          className="w-full h-full rounded-full border border-black/5 relative flex items-center justify-center pointer-events-auto hover:pause-animation"
          animate={{ rotate: 360 }}
          transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
          style={{
            boxShadow: "0 0 100px rgba(0,0,0,0.05)",
          }}
        >
          {/* Central "Core" (Optional visual anchor) */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-b from-black/5 to-transparent blur-3xl"></div>

          {allSkills.map((skill, index) => {
            const total = allSkills.length;
            const angle = (360 / total) * index;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translate(${RADIUS}px)`,
                }}
              >
                {/* Counter-Rotating Content (Keeps icon upright) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
                  className="group"
                >
                  <div className="relative flex flex-col items-center justify-center w-24 h-24 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-black/5 p-4 transition-all duration-300 hover:scale-125 hover:z-50 hover:shadow-2xl hover:border-black/20 group-hover:bg-white cursor-pointer -translate-x-1/2 -translate-y-1/2">
                    {/* Gloss Shine */}
                    <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/40 to-transparent rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    <div className="w-10 h-10 mb-2">
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain drop-shadow-sm" />
                    </div>
                    <span className="text-xs font-bold text-gray-800 text-center leading-tight group-hover:text-black">{skill.name}</span>

                    {/* Proficiency Badge on Hover */}
                    <div className="absolute -top-3 right-0 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                      {skill.proficiency || "100"}%
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;