import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";
import TechNucleus from "../components/TechNucleus/TechNucleus";
import Marquee from "react-fast-marquee";

const Skills = () => {
  // Flatten all skills into a single array
  const allSkills = useMemo(() => {
    return skills.flatMap(category => category.items);
  }, []);

  // Split skills into two rows for the "Stream" effect
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  return (
    <section className="py-20 relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-white z-20" id="skills">

      {/* 1. TITLE SECTION */}
      <div className="relative z-50 flex flex-col items-center justify-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-extrabold text-center mb-4 text-black tracking-tight"
        >
          My <span className="underline decoration-4 decoration-black underline-offset-8">Skills</span>
        </motion.h2>
        <p className="text-gray-500 font-medium text-lg">Tech that drives innovation.</p>
      </div>

      {/* 2. 3D TECH CORE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative z-40 mb-12"
      >
        <TechNucleus />
      </motion.div>

      {/* 3. INFINITE DATA STREAMS (Marquees) */}
      <div className="w-full flex flex-col gap-8 relative z-30">

        {/* Row 1: Sliding Left */}
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {row1.map((skill, index) => (
            <div key={index} className="mx-6 group relative cursor-pointer">
              <div className="flex flex-col items-center gap-3 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-black/95 rounded-2xl shadow-xl border border-white/10 p-4 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:border-white/50 transition-all">
                  {/* Glass Shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-lg transform group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-black transition-colors bg-white/50 px-2 py-1 rounded-md border border-transparent group-hover:border-black/10">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Row 2: Sliding Right */}
        <Marquee gradient={false} speed={50} direction="right" pauseOnHover={true}>
          {row2.map((skill, index) => (
            <div key={index} className="mx-6 group relative cursor-pointer">
              <div className="flex flex-col items-center gap-3 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-black/95 rounded-2xl shadow-xl border border-white/10 p-4 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:border-white/50 transition-all">
                  {/* Glass Shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-lg transform group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-black transition-colors bg-white/50 px-2 py-1 rounded-md border border-transparent group-hover:border-black/10">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
};

export default Skills;