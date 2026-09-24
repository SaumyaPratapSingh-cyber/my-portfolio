import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../constants';
import { Trophy, Star, Award, Zap } from 'lucide-react';

const iconMap = {
  Trophy: <Trophy size={32} className="text-hive-cyan" />,
  Star: <Star size={32} className="text-hive-cyan" />,
  Award: <Award size={32} className="text-hive-cyan" />,
  Zap: <Zap size={32} className="text-hive-cyan" />
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative z-10 w-full bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hive-cyan to-hive-blue">
              Achievements
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
            Milestones, awards, and recognitions that drive me forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent hover:from-hive-cyan/50 hover:to-hive-blue/50 transition-all duration-300"
            >
              {/* Inner content container */}
              <div className="relative h-full bg-hive-black rounded-2xl p-6 backdrop-blur-md border border-white/5 overflow-hidden z-10">
                {/* Glow effect behind */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-hive-cyan/20 blur-[50px] rounded-full group-hover:bg-hive-cyan/40 transition-colors duration-500 z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-hive-cyan/10 transition-colors duration-300">
                    {item.icon ? iconMap[item.icon] || <Trophy size={32} className="text-hive-cyan" /> : <Trophy size={32} className="text-hive-cyan" />}
                  </div>
                  
                  <h3 className="text-xl font-space font-bold text-white mb-2 group-hover:text-hive-cyan transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-hive-cyan text-sm font-mono mb-4">
                    {item.event}
                  </p>
                  
                  <p className="text-gray-400 text-sm font-mono leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
