import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

const Skills = () => {
  // Flatten skills for easier display if needed, or keep categories
  return (
    <section className="bg-black text-white py-20 px-5 lg:px-28" id="skills">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16"
        >
          My <span className="text-white" style={{ WebkitTextStroke: "1px white", color: "transparent" }}>Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-300 border-b border-gray-800 pb-2">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-3 bg-black rounded-xl border border-white/5 hover:bg-white/10 transition-colors group">
                    <div className="w-10 h-10 p-1 bg-white rounded-lg flex items-center justify-center">
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;