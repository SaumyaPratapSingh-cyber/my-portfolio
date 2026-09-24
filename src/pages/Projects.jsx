import React from 'react';
import { projects } from '../constants';
import { motion } from 'framer-motion';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import { Tilt } from 'react-tilt';

const waterEffectStyles = `
  @keyframes fluidAura {
    0% { filter: hue-rotate(0deg) drop-shadow(0 0 10px #00E5FF); transform: scale(1.0); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
    50% { filter: hue-rotate(180deg) drop-shadow(0 0 20px #FF00FF); transform: scale(1.02); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    100% { filter: hue-rotate(360deg) drop-shadow(0 0 10px #00E5FF); transform: scale(1.0); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
  }
  @keyframes textGlow {
    0% { text-shadow: 0 0 5px #00E5FF, 0 0 10px #00E5FF; }
    50% { text-shadow: 0 0 10px #FF00FF, 0 0 20px #FF00FF; }
    100% { text-shadow: 0 0 5px #00E5FF, 0 0 10px #00E5FF; }
  }
  .hover-water-effect:hover img {
    animation: fluidAura 3s ease-in-out infinite alternate;
  }
  .hover-water-aura {
    background: linear-gradient(45deg, #00E5FF, #FF00FF, #FFFF00, #00FF00);
    background-size: 400% 400%;
    animation: gradientFlow 5s ease infinite;
  }
  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

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
        options={{ max: 15, scale: 1.05, speed: 400 }}
        className="h-full bg-black backdrop-blur-2xl border-2 border-[#00E5FF]/40 rounded-2xl p-5 hover:border-[#FF00FF] hover:shadow-[0_0_40px_#FF00FF] transition-all duration-500 group flex flex-col relative overflow-hidden"
      >
        <div className="absolute inset-0 hover-water-aura opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 pointer-events-none rounded-2xl"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Image Container with Water Effect */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6 border-2 border-white/20 group-hover:border-[#00FF00] transition-colors duration-500 hover-water-effect">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00E5FF] via-[#FF00FF] to-[#FFFF00] opacity-0 group-hover:opacity-30 blur-xl animate-pulse rounded-full z-0 transition-opacity duration-500"></div>
            <img 
              src={project.img} 
              alt={project.title} 
              className="relative z-10 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
            />
            {/* Floating Buttons on Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm z-20">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black border-2 border-[#FFFF00] flex items-center justify-center text-[#FFFF00] hover:bg-[#FFFF00] hover:text-black hover:shadow-[0_0_25px_#FFFF00] hover:scale-110 transition-all duration-300"
                title="GitHub Repository"
              >
                <BsGithub size={28} />
              </a>
              {project.prototypeLink && project.prototypeLink !== '#' && (
                <a 
                  href={project.prototypeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-black border-2 border-[#00FF00] flex items-center justify-center text-[#00FF00] hover:bg-[#00FF00] hover:text-black hover:shadow-[0_0_25px_#00FF00] hover:scale-110 transition-all duration-300"
                  title="Live Demo"
                >
                  <BsGlobe size={28} />
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-3xl font-space font-extrabold text-white group-hover:text-[#FFFF00] group-hover:drop-shadow-[0_0_15px_#FFFF00] transition-all duration-300 mb-4 tracking-wider">
              {project.title}
            </h3>
            <p className="text-white font-mono text-base mb-6 flex-1 leading-relaxed drop-shadow-[0_0_5px_#fff] font-bold">
              {project.desc}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.split(',').slice(0, 4).map((tag, i) => {
                const colors = ['#00E5FF', '#FF00FF', '#FFFF00', '#00FF00'];
                const color = colors[i % colors.length];
                return (
                  <span 
                    key={i} 
                    style={{ borderColor: color, color: '#fff' }}
                    className="px-4 py-1.5 rounded-full text-sm font-mono font-extrabold bg-black border-2 transition-all duration-300 hover:scale-110 hover:!text-black"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = color; e.currentTarget.style.boxShadow = `0 0 15px ${color}`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'black'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    {tag.trim()}
                  </span>
                );
              })}
            </div>

            {/* Action Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl border-2 border-[#00E5FF] bg-black text-[#00E5FF] font-mono font-extrabold text-lg text-center hover:bg-[#00E5FF] hover:text-black hover:shadow-[0_0_30px_#00E5FF] hover:-translate-y-1 transition-all duration-300 inline-block uppercase tracking-widest"
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
    <section id="projects" className="py-24 bg-black min-h-screen relative overflow-hidden">
      <style>{waterEffectStyles}</style>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-space font-extrabold text-white drop-shadow-[0_0_20px_#fff] mb-6">
            Featured <span className="text-[#FF00FF] border-b-4 border-[#FF00FF] pb-2 drop-shadow-[0_0_25px_#FF00FF]" style={{ animation: 'textGlow 3s infinite' }}>Projects</span>
          </h2>
          <p className="mt-8 text-white font-mono text-lg font-bold tracking-widest max-w-2xl mx-auto drop-shadow-[0_0_8px_#fff]">
            HOVER TO REVEAL HYPER-NEON FLUIDITY.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;