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
    <section className="py-20 relative overflow-hidden min-h-screen flex flex-col items-center justify-center z-20 text-white" id="skills">

      {/* 1. TITLE SECTION */}
      <div className="relative z-50 flex flex-col items-center justify-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-space font-extrabold text-center mb-4 text-white tracking-tight"
        >
          My <span className="underline decoration-4 decoration-hive-cyan underline-offset-8">Skills</span>
        </motion.h2>
        <p className="text-gray-400 font-mono font-medium text-lg">Tech that drives innovation.</p>
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
              <div className="flex flex-col items-center gap-3 transition-transform duration-300 group-hover:-translate-y-4">
                <div className="w-20 h-20 bg-hive-black/95 rounded-2xl shadow-xl border border-white/10 p-4 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] group-hover:border-hive-cyan transition-all duration-300 group-hover:scale-110">
                  {/* Glass Shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-hive-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-lg transform group-hover:scale-125 transition-transform duration-300" />
                </div>
                <span className="text-sm font-bold font-mono uppercase tracking-wider text-gray-400 group-hover:text-hive-cyan transition-colors bg-white/5 px-3 py-1 rounded-md border border-transparent group-hover:border-hive-cyan/30 shadow-lg group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
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
                <div className="w-20 h-20 bg-hive-black/95 rounded-2xl shadow-xl border border-white/10 p-4 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(0,123,255,0.3)] group-hover:border-hive-blue/50 transition-all">
                  {/* Glass Shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-hive-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-lg transform group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-gray-400 group-hover:text-hive-blue transition-colors bg-white/5 px-2 py-1 rounded-md border border-transparent group-hover:border-hive-blue/10">
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