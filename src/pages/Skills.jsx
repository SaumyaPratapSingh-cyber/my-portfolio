import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section className="py-20 px-5 lg:px-28 relative" id="skills">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-black"
        >
          My <span className="underline decoration-4 decoration-black underline-offset-4">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: idx * 0.1
              }}
              className="h-full"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.5
                }}
                className="bg-white/60 backdrop-blur-xl border border-neutral-200 p-6 rounded-2xl h-full transition-all duration-300 hover:bg-black hover:border-black hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] group cursor-pointer relative overflow-hidden"
              >
                {/* Shiny gloss effect on top */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:opacity-20"></div>

                <h3 className="text-xl font-bold mb-6 border-b border-black/10 pb-2 text-black group-hover:border-white/30 group-hover:text-white transition-colors">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((skill, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 p-3 rounded-xl border border-black/5 bg-transparent group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                      <div className="w-10 h-10 p-1 bg-white rounded-lg flex items-center justify-center border border-neutral-200 group-hover:scale-110 transition-transform">
                        <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-sm font-bold text-gray-700 group-hover:text-white transition-colors">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;