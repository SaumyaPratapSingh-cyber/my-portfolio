import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

const Skills = () => {
  // Flatten all skills into a single array
  const allSkills = useMemo(() => {
    return skills.flatMap(category => category.items);
  }, []);

  // Configuration
  const RADIUS = 800;
  const DURATION = 80;

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
        <p className="text-gray-500 font-medium">Tech that drives innovation.</p>
      </div>

      {/* Orbit Container - Positioned at BOTTOM to create a "Hill/Planet" arc */}
      <div
        className="absolute bottom-[-700px] flex items-center justify-center pointer-events-none"
        style={{
          width: RADIUS * 2,
          height: RADIUS * 2,
        }}
      >
        {/* Rotating Ring with Black/White Design */}
        <motion.div
          className="w-full h-full rounded-full relative flex items-center justify-center pointer-events-auto hover:pause-animation"
          animate={{ rotate: 360 }}
          transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
          style={{
            // Black and White Conic Design
            background: `
                        radial-gradient(transparent 65%, white 65.5%),
                        conic-gradient(from 0deg, #000000 0deg 180deg, #f0f0f0 180deg 360deg)
                    `,
            border: "2px solid rgba(0,0,0,0.1)",
            boxShadow: "0 0 100px rgba(0,0,0,0.05)"
          }}
        >
          {/* Inner white circle to create the "Ring" effect from the gradient */}
          <div className="absolute inset-2 rounded-full bg-white z-0"></div>

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
                {/* Counter-Rotating Content: "Tech Upwards" - Text Above Icon? User said "Tech upwards" */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
                  className="group relative"
                >
                  {/* Connector Line (Spoke) */}
                  <div className="absolute top-1/2 left-1/2 w-[1px] h-[50px] bg-black/10 origin-top -translate-x-1/2 -z-10 absolute-center"></div>

                  <div className="flex flex-col-reverse items-center gap-3 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-4">
                    {/* Card (Icon) */}
                    <div className="relative flex items-center justify-center w-20 h-20 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-black/5 p-4 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] group-hover:border-black transition-all">
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                    </div>

                    {/* Text Above (Upwards) */}
                    <span className="text-sm font-extrabold uppercase tracking-wider text-black bg-white px-2 py-1 rounded shadow-sm border border-black/5 group-hover:bg-black group-hover:text-white transition-colors">
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