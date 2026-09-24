import React, { useMemo } from 'react';
import { skills } from '../constants';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const neonColors = [
  '#00E5FF', // Neon Cyan
  '#FFFF00', // Neon Yellow
  '#FF00FF', // Neon Pink
  '#00FF00', // Neon Green
  '#FF3300', // Neon Orange
  '#9D00FF'  // Neon Purple
];

const Skills = () => {
  const allSkills = useMemo(() => {
    return skills.flatMap(cat => cat.items);
  }, []);

  return (
    <section id="skills" className="py-24 bg-black min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-space font-extrabold text-white drop-shadow-[0_0_20px_#fff]">
            My <span className="text-[#00FF00] border-b-4 border-[#00FF00] pb-2 drop-shadow-[0_0_25px_#00FF00]">Skills</span>
          </h2>
          <p className="text-white font-mono mt-8 text-lg font-bold tracking-widest drop-shadow-[0_0_8px_#fff]">
            TECHNOLOGY THAT DRIVES HYPER INNOVATION.
          </p>
        </motion.div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {skills.map((category, idx) => {
            const catColor = neonColors[idx % neonColors.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-black backdrop-blur-md border-2 p-8 rounded-2xl transition-all duration-500 group"
                style={{ borderColor: `${catColor}40` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = catColor;
                  e.currentTarget.style.boxShadow = `0 0 40px ${catColor}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${catColor}40`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 
                  className="text-3xl font-space font-extrabold mb-8 transition-all tracking-widest"
                  style={{ color: catColor, textShadow: `0 0 15px ${catColor}` }}
                >
                  {category.title}
                </h3>
                <div className="space-y-8">
                  {category.items.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-6 group/skill cursor-default">
                      <div 
                        className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-black border-2 rounded-xl p-2 transition-all duration-500 group-hover/skill:scale-125"
                        style={{ borderColor: `${catColor}40` }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = catColor;
                          e.currentTarget.style.boxShadow = `0 0 25px ${catColor}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${catColor}40`;
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-md group-hover/skill:drop-shadow-[0_0_10px_white]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-mono text-white text-lg font-extrabold transition-colors group-hover/skill:drop-shadow-[0_0_10px_white]">
                            {skill.name}
                          </span>
                          <span 
                            className="font-mono text-xl font-extrabold"
                            style={{ color: catColor, textShadow: `0 0 10px ${catColor}` }}
                          >
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden border border-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.2, type: 'spring' }}
                            className="h-full rounded-full transition-shadow duration-300"
                            style={{ 
                              background: `linear-gradient(90deg, ${catColor}40, ${catColor})`,
                              boxShadow: `0 0 20px ${catColor}`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee Section */}
        <div className="mt-24">
          <Marquee gradient={false} speed={60} pauseOnHover>
            {allSkills.map((skill, idx) => {
              const itemColor = neonColors[idx % neonColors.length];
              return (
                <div key={idx} className="mx-6 group cursor-pointer py-6">
                  <div 
                    className="bg-black backdrop-blur-xl border-2 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 min-w-[140px] transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-4"
                    style={{ borderColor: `${itemColor}40` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = itemColor;
                      e.currentTarget.style.boxShadow = `0 0 30px ${itemColor}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${itemColor}40`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain transition-all duration-300" style={{ filter: 'drop-shadow(0 0 5px white)' }} />
                    <span 
                      className="font-mono text-white font-extrabold text-base transition-colors tracking-wider"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = itemColor;
                        e.currentTarget.style.textShadow = `0 0 10px ${itemColor}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.textShadow = 'none';
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;