import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { skills } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Skills = () => {
  // Flatten skills for the marquee
  const allSkills = skills.reduce((acc, category) => [...acc, ...category.items], []);

  return (
    <section id="skills" className="relative min-h-screen py-20 bg-hive-black overflow-hidden flex flex-col justify-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hive-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-hive-cyan/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-hive-cyan via-white to-hive-blue drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 font-mono text-sm md:text-base max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies.
          </p>
        </motion.div>

        {/* Categorized Grid Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto"
        >
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-hive-cyan/30 transition-colors duration-300 relative overflow-hidden group"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-hive-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl font-space font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-hive-cyan shadow-[0_0_8px_#00E5FF]"></span>
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.items.map((skill, skillIdx) => (
                  <div key={skillIdx} className="relative z-10">
                    <div className="flex justify-between items-center mb-1.5 font-mono text-sm">
                      <div className="flex items-center gap-2">
                        {/* Skill Logo */}
                        {skill.logo && (
                          <div className="w-5 h-5 flex items-center justify-center">
                            <img 
                              src={skill.logo} 
                              alt={skill.name} 
                              className="max-w-full max-h-full object-contain filter group-hover:brightness-125 transition-all"
                              onError={(e) => { e.target.style.display = 'none' }}
                            />
                          </div>
                        )}
                        <span className="text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-hive-cyan">{skill.proficiency}%</span>
                    </div>
                    {/* Proficiency Bar Background */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      {/* Animated Proficiency Bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (skillIdx * 0.1), ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-hive-blue to-hive-cyan shadow-[0_0_10px_rgba(0,229,255,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative py-10"
        >
          {/* Gradient masks for marquee edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-hive-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-hive-black to-transparent z-10 pointer-events-none" />
          
          <Marquee gradient={false} speed={40} pauseOnHover={true} className="overflow-hidden">
            <div className="flex gap-12 px-6 items-center">
              {allSkills.map((skill, idx) => (
                <div
                  key={`mq-${idx}`}
                  className="flex flex-col items-center justify-center gap-3 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:bg-white/10 group-hover:border-hive-cyan/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                    {skill.logo ? (
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="text-xl font-bold text-gray-500 group-hover:text-hive-cyan">{skill.name.charAt(0)}</span>
                    )}
                  </div>
                  <span className="font-mono text-xs text-gray-500 group-hover:text-hive-cyan transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;