import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

const Skills = () => {
  // Flatten all skills into a single array
  const allSkills = useMemo(() => {
    return skills.flatMap(category => category.items);
  }, []);

  // Configuration
  const RADIUS = 600; // Reduced radius to fit better
  const DURATION = 60; // Speed of rotation

  return (
    <section className="py-20 relative overflow-hidden min-h-screen flex flex-col items-center justify-start bg-white" id="skills">
      <div className="container mx-auto relative z-10 text-center mb-10 h-40">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-center mb-4 text-black"
        >
          My <span className="underline decoration-4 decoration-black underline-offset-4">Skills</span>
        </motion.h2>
        <p className="text-gray-500 font-medium">Tech that drives innovation.</p>
      </div>

      {/* Orbit Container - Positioned to show "Rising Planet" arc without overlapping content */}
      <div
        className="absolute bottom-[-450px] lg:bottom-[-400px] flex items-center justify-center pointer-events-none"
        style={{
          width: RADIUS * 2,
          height: RADIUS * 2,
        }}
      >
        {/* Rotating Ring with High-Contrast Black/White Design */}
        <motion.div
          className="w-full h-full rounded-full relative flex items-center justify-center pointer-events-auto hover:pause-animation"
          animate={{ rotate: 360 }}
          transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
          style={{
            // Stronger Black and White Conic Design
            background: `
                        radial-gradient(transparent 68%, white 69%),
                        conic-gradient(from 0deg, #000000 0deg 90deg, #e5e5e5 90deg 180deg, #000000 180deg 270deg, #e5e5e5 270deg 360deg)
                    `,
            border: "4px solid rgba(0,0,0,0.05)", // Subtle outer rim
            boxShadow: "0 0 150px rgba(0,0,0,0.1)"
          }}
        >
          {/* Inner white circle to create the "Ring" thickness */}
          <div className="absolute inset-4 rounded-full bg-white z-0"></div>

          {allSkills.map((skill, index) => {
            const total = allSkills.length;
            const angle = (360 / total) * index;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 z-10"
                style={{
                  transform: `rotate(${angle}deg) translate(${RADIUS}px)`,
                }}
              >
                {/* 
                                CRITICAL FIX: Counter-Rotation Logic
                                1. initial={{ rotate: -angle }}: Cancels out the placement rotation so item starts Upright (0deg).
                                2. animate={{ rotate: -angle - 360 }}: Rotates 360deg in reverse, maintaining the upright orientation relative to the viewport.
                            */}
                <motion.div
                  initial={{ rotate: -angle }}
                  animate={{ rotate: -angle - 360 }}
                  transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
                  className="group relative"
                >
                  {/* Spoke Line connecting to center */}
                  <div className="absolute top-1/2 left-1/2 w-[1px] h-[40px] bg-black/20 origin-top -translate-x-1/2 -z-10 mt-10"></div>

                  <div className="flex flex-col-reverse items-center gap-4 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-6">
                    {/* Card (Icon) - BLACK THEME */}
                    <div className="relative flex items-center justify-center w-20 h-20 bg-black/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-4 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-white transition-all">

                      {/* Gloss Shine on Card */}
                      <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden pointer-events-none">
                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 opacity-100"></div>
                      </div>

                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-lg" />
                    </div>

                    {/* Text Above (Upwards) - Black Text on White BG for contrast or White on Black? User asked for Black Hover Theme */}
                    {/* Keeping text Upright and legible */}
                    <span className="text-sm font-extrabold uppercase tracking-wider text-black bg-white/90 border border-black/10 px-3 py-1.5 rounded-lg shadow-md group-hover:bg-black group-hover:text-white transition-colors whitespace-nowrap">
                      {skill.name}
                    </span>
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