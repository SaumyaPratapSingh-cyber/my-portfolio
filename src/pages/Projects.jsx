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
        options={{
          max: 15,
          scale: 1,
          speed: 400,
        }}
        className="h-full bg-black border border-white/10 rounded-2xl p-5 hover:border-hive-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 group flex flex-col"
      >
        {/* Image Container */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-100" 
          />
          {/* Floating Buttons on Hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.source_code_link && (
              <a 
                href={project.source_code_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-hive-cyan hover:text-black hover:border-hive-cyan transition-colors"
                title="GitHub Repository"
              >
                <BsGithub size={20} />
              </a>
            )}
            {project.live_demo_link && (
              <a 
                href={project.live_demo_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-hive-cyan hover:text-black hover:border-hive-cyan transition-colors"
                title="Live Demo"
              >
                <BsGlobe size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-2xl font-space font-bold text-white group-hover:text-hive-cyan transition-colors mb-3">
            {project.name}
          </h3>
          <p className="text-gray-300 font-mono text-sm mb-5 flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(project.tags || []).map((tag, i) => (
              <span 
                key={i} 
                className="px-3 py-1 rounded-full text-xs font-mono bg-hive-cyan/20 text-hive-cyan border border-hive-cyan/30 hover:bg-hive-cyan hover:text-black transition-colors cursor-default"
              >
                {tag.name || tag}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <a
            href={project.live_demo_link || project.source_code_link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-lg border border-white/20 text-white font-mono text-center hover:bg-hive-cyan hover:text-black hover:border-hive-cyan hover:shadow-[0_0_15px_#00E5FF] transition-all duration-300 inline-block"
          >
            View Project
          </a>
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
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white">
            My <span className="text-hive-cyan border-b-4 border-hive-cyan pb-1">Projects</span>
          </h2>
          <p className="mt-6 text-gray-400 font-mono max-w-2xl mx-auto">
            Following projects showcase my skills and experience through real-world examples of my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;