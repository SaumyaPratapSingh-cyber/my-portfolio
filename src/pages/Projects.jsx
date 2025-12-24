import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { BsGithub, BsGlobe } from "react-icons/bs";
import Marquee from "react-fast-marquee";
import { Tilt } from 'react-tilt';

const Projects = () => {
  const defaultOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  }

  return (
    <section className="py-20 relative overflow-hidden bg-black text-white" id="projects">
      {/* Explicit Black Background for this section */}

      <div className="container mx-auto px-5 lg:px-28 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-center text-white"
        >
          Featured <span className="underline decoration-4 decoration-white underline-offset-4">Projects</span>
        </motion.h2>
        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto font-medium">
          Interactive Infinite Gallery. Hover to pause & tilt.
        </p>
      </div>

      <div className="w-full">
        <Marquee gradient={false} speed={50} pauseOnHover={true} className="py-10">
          {projects.map((project, idx) => (
            <div key={project.id} className="mx-6 w-[400px]">
              <Tilt options={defaultOptions}>
                <div
                  className="bg-neutral-900/80 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300 flex flex-col h-[520px] relative group"
                >
                  {/* Gloss Shine */}
                  <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-gradient-to-b from-white/10 to-transparent -rotate-45 translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:opacity-100 transition-opacity opacity-50"></div>

                  <div className="h-56 overflow-hidden border-b border-white/10 relative shrink-0">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                      <a href={project.link} target="_blank" rel="noreferrer" className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform border border-black"><BsGithub size={20} /></a>
                      {project.prototypeLink && <a href={project.prototypeLink} target="_blank" rel="noreferrer" className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform border border-black"><BsGlobe size={20} /></a>}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow relative z-10">
                    <div className="absolute top-4 right-4 text-xs font-mono text-gray-500">0{idx + 1}</div>

                    <h3 className="text-2xl font-bold mb-3 text-white tracking-tight group-hover:text-gray-200 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 text-ellipsis leading-relaxed font-medium">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.split(',').slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs font-bold border border-white/20 bg-white/5 text-gray-300 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors cursor-default">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>

                    <a href={project.link} target="_blank" rel="noreferrer" className="mt-8 block text-center font-bold border border-white/20 bg-white/5 py-3 rounded-lg hover:bg-white hover:text-black transition-all text-white tracking-wide uppercase text-sm">
                      View Project
                    </a>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Projects;