import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Timeline = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-20 text-center">
                Professional <span className="text-neon-pink">Journey</span>
            </h2>

            <div className="relative">
                {/* Vertical Glowing Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-neon-pink to-transparent opacity-30 shadow-[0_0_15px_rgba(255,0,153,0.5)] hidden md:block" />

                <div className="space-y-12 md:space-y-24">
                    {experience.map((job, index) => (
                        <div key={index} className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">

                            {/* Card - alternating grid placement */}
                            <motion.div
                                className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:order-last'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                            >
                                <div className="glass-panel p-8 rounded-2xl relative border-l-4 border-l-neon-pink hover:border-l-neon-cyan transition-colors group">
                                    <div className="absolute -left-[5px] top-0 h-full w-1 bg-neon-pink group-hover:bg-neon-cyan blur-md transition-all opacity-50"></div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">{job.role}</h3>
                                    <h4 className="text-lg text-gray-400 font-semibold mb-3 flex items-center gap-2">
                                        <Briefcase size={16} /> {job.company}
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-mono">
                                        <Calendar size={14} />
                                        {job.duration}
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                        {job.desc}
                                    </p>
                                    {job.certificateLink && (
                                        <a href={job.certificateLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-neon-pink text-sm border-b border-neon-pink/30 hover:text-neon-cyan hover:border-neon-cyan pb-0.5 transition-colors">
                                            View Certificate
                                        </a>
                                    )}
                                </div>
                            </motion.div>

                            {/* Node Connector */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                viewport={{ once: true }}
                                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-neon-pink rounded-full shadow-[0_0_10px_#ff0099] z-10 hidden md:block"
                            >
                                <div className="w-full h-full bg-neon-pink rounded-full animate-ping opacity-75"></div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
