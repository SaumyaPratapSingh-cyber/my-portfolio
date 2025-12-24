import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section className="bg-white text-black py-20 px-5 lg:px-28" id="skills">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16"
        >
          My <span className="underline decoration-4 decoration-black underline-offset-4">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-2 border-black p-6 rounded-2xl transition-all duration-300 hover:bg-black hover:text-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] hover:-translate-y-1 group"
            >
              <h3 className="text-xl font-bold mb-6 border-b-2 border-gray-200 pb-2 group-hover:border-gray-700">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-3 rounded-xl border border-gray-200 group-hover:border-gray-700 transition-colors bg-gray-50 group-hover:bg-neutral-900">
                    <div className="w-10 h-10 p-1 bg-white rounded-lg flex items-center justify-center border border-gray-100">
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-sm font-bold text-gray-600 group-hover:text-gray-300">{skill.name}</span>
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