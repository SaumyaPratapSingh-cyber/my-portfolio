import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { projects } from '../../constants';
import { Github, ExternalLink } from 'lucide-react';

const defaultTiltOptions = {
    reverse: false,  // reverse the tilt direction
    max: 15,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
};

const HolographicProjects = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">
                My <span className="text-neon-cyan">Creations</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Tilt key={project.id} options={defaultTiltOptions} className="h-full">
                        <motion.div
                            className="glass-panel p-6 h-full rounded-3xl relative overflow-hidden group flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Holographic Sheer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 mixing-blend-overlay"></div>

                            {/* Image Area */}
                            <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col z-20">
                                <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.split(',').map((tech, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>

                                {/* Slide-up Actions */}
                                <div className="mt-auto flex gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 btn-primary text-center flex items-center justify-center gap-2 py-2 rounded-lg bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan hover:text-black transition-all">
                                        <Github size={18} /> Source
                                    </a>
                                    {project.prototypeLink !== "#" && (
                                        <a href={project.prototypeLink} target="_blank" rel="noreferrer" className="flex-1 text-center flex items-center justify-center gap-2 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all">
                                            <ExternalLink size={18} /> Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default HolographicProjects;
