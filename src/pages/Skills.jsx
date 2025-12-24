import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";
import TechNucleus from "../components/TechNucleus/TechNucleus";

const Skills = () => {
  // Flatten all skills into a single array
  const allSkills = useMemo(() => {
    return skills.flatMap(category => category.items);
  }, []);

  // Configuration for "Rainbow Arc"
  // Huge radius creates a flatter curve at the top
  const RADIUS = 800;
  const DURATION = 90; // Slower rotation for the massive size

  return (
    <section className="relative overflow-hidden min-h-[140vh] flex flex-col items-center justify-start bg-white z-20 pt-32" id="skills">

      {/* 1. TITLE: Highest Z-Index, Fixed at Top */}
      <div className="relative z-50 flex flex-col items-center justify-center mb-10 pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl font-extrabold text-center mb-4 text-black tracking-tight"
        >
          My <span className="underline decoration-4 decoration-black underline-offset-8">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 font-medium text-lg"
        >
          Tech that drives innovation.
        </motion.p>
      </div>

      {/* 2. CORE: 3D Torus, Floating in the "Sky" of the Arc */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] relative z-40 mb-10"
      >
        <TechNucleus />
      </motion.div>

      {/* 3. RAINBOW ARC: Massive Ring, Positioned Low */}
      {/* bottom-[-650px] hides the bottom half, revealing only the top arc */}
      <div
        className="absolute bottom-[-650px] lg:bottom-[-650px] flex items-center justify-center pointer-events-none z-10"
        style={{
          width: RADIUS * 2,
          height: RADIUS * 2,
        }}
      >
        {/* Rotating Ring - Background Track */}
        <motion.div
          className="w-full h-full rounded-full relative flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
          style={{
            // Subtle track styling
            border: "2px dashed rgba(0,0,0,0.1)",
          }}
        >
          {/* Icons on the Track */}
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
                {/* Counter-Rotate to keep icons upright */}
                <motion.div
                  initial={{ rotate: -angle }}
                  animate={{ rotate: -angle - 360 }}
                  transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
                  className="group relative flex flex-col items-center justify-center"
                >
                  {/* Connector Line (Optional, makes it look like a planet system) */}
                  <div className="absolute top-1/2 left-1/2 w-[1px] h-[60px] bg-gradient-to-t from-transparent to-black/10 origin-top -translate-x-1/2 -z-10 mt-10"></div>

                  {/* Icon Card */}
                  <div className="flex flex-col-reverse items-center gap-3 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-8 cursor-pointer">
                    <div className="relative flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4 group-hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] group-hover:border-white transition-all">
                      <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden pointer-events-none">
                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 opacity-100"></div>
                      </div>
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-lg" />
                    </div>

                    {/* Tech Label */}
                    <span className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-black bg-white/90 border border-black/10 px-3 py-1.5 rounded-full shadow-lg group-hover:bg-black group-hover:text-white transition-colors whitespace-nowrap">
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