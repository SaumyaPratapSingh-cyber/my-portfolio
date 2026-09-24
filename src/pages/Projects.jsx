import React from 'react';
import { projects } from '../constants';
import { motion } from 'framer-motion';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import { Tilt } from 'react-tilt';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Tilt
        options={{ max: 15, scale: 1.02, speed: 400 }}
        className="h-full bg-black/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-5 hover:border-hive-cyan hover:shadow-[0_0_35px_#00E5FF] transition-all duration-500 group flex flex-col relative overflow-hidden"
      >
        {/* Glow behind the card */}
        <div className="absolute inset-0 bg-gradient-to-br from-hive-cyan/5 to-hive-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none rounded-2xl"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Image Container */}
          <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 border border-white/10 group-hover:border-hive-cyan/50 transition-colors duration-500">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            {/* Floating Buttons on Hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-black/80 border border-white/30 flex items-center justify-center text-white hover:bg-hive-cyan hover:text-black hover:border-hive-cyan hover:shadow-[0_0_20px_#00E5FF] hover:scale-110 transition-all duration-300"
                title="GitHub Repository"
              >
                <BsGithub size={24} />
              </a>
              {project.prototypeLink && project.prototypeLink !== '#' && (
                <a 
                  href={project.prototypeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-black/80 border border-white/30 flex items-center justify-center text-white hover:bg-hive-cyan hover:text-black hover:border-hive-cyan hover:shadow-[0_0_20px_#00E5FF] hover:scale-110 transition-all duration-300"
                  title="Live Demo"
                >
                  <BsGlobe size={24} />
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-space font-bold text-white group-hover:text-hive-cyan group-hover:drop-shadow-[0_0_10px_#00E5FF] transition-all duration-300 mb-3">
              {project.title}
            </h3>
            <p className="text-white font-mono text-sm mb-5 flex-1 line-clamp-3 leading-relaxed drop-shadow-sm font-medium">
              {project.desc}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.split(',').slice(0, 3).map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black border border-white/20 text-white group-hover:border-hive-cyan group-hover:text-hive-cyan group-hover:shadow-[0_0_10px_rgba(0,229,255,0.4)] transition-all duration-300 cursor-default"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg border border-white/30 bg-black text-white font-mono font-bold text-center hover:bg-hive-cyan hover:text-black hover:border-hive-cyan hover:shadow-[0_0_20px_#00E5FF] hover:scale-[1.02] transition-all duration-300 inline-block uppercase tracking-wider"
            >
              View Project
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Featured <span className="text-hive-cyan border-b-4 border-hive-cyan pb-1 drop-shadow-[0_0_15px_#00E5FF]">Projects</span>
          </h2>
          <p className="mt-6 text-white font-mono font-bold tracking-wide max-w-2xl mx-auto drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
            Hover over the cards to reveal actions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;