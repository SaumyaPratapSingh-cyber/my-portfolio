import React, { useMemo } from 'react';
import { skills } from '../constants';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const Skills = () => {
  const allSkills = useMemo(() => {
    return skills.flatMap(cat => cat.items);
  }, []);

  return (
    <section id="skills" className="py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            My <span className="text-hive-cyan border-b-4 border-hive-cyan pb-1 drop-shadow-[0_0_15px_#00E5FF]">Skills</span>
          </h2>
          <p className="text-white font-mono mt-4 font-bold tracking-wide drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">Tech that drives innovation.</p>
        </motion.div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black/80 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:border-hive-cyan hover:shadow-[0_0_30px_#00E5FF] transition-all duration-500 group"
            >
              <h3 className="text-2xl font-space font-bold text-hive-cyan mb-6 group-hover:drop-shadow-[0_0_15px_#00E5FF] transition-all">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-4 group/skill cursor-default">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-black border border-white/20 rounded-lg p-1.5 transition-all duration-300 group-hover/skill:border-hive-cyan group-hover/skill:scale-125 group-hover/skill:shadow-[0_0_20px_#00E5FF]">
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-white font-bold group-hover/skill:text-hive-cyan transition-colors group-hover/skill:drop-shadow-[0_0_8px_#00E5FF]">{skill.name}</span>
                        <span className="font-mono text-hive-cyan text-sm font-bold group-hover/skill:drop-shadow-[0_0_8px_#00E5FF]">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-hive-cyan to-hive-blue rounded-full group-hover/skill:shadow-[0_0_15px_#00E5FF] transition-shadow duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Section */}
        <div className="mt-20">
          <Marquee gradient={false} speed={50} pauseOnHover>
            {allSkills.map((skill, idx) => (
              <div key={idx} className="mx-4 group cursor-pointer py-4">
                <div className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex flex-col items-center justify-center gap-3 min-w-[120px] transition-all duration-300 group-hover:border-hive-cyan group-hover:scale-125 group-hover:shadow-[0_0_25px_#00E5FF] group-hover:-translate-y-2">
                  <img src={skill.logo} alt={skill.name} className="w-12 h-12 object-contain group-hover:drop-shadow-[0_0_15px_#00E5FF] transition-all" />
                  <span className="font-mono text-white font-bold text-sm group-hover:text-hive-cyan group-hover:drop-shadow-[0_0_10px_#00E5FF] transition-colors">{skill.name}</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;