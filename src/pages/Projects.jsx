import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { BsGithub, BsGlobe } from "react-icons/bs";
import Marquee from "react-fast-marquee";
import { Tilt } from 'react-tilt';

const Projects = () => {
  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 15,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.02,   // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,   // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <section className="py-20 bg-white overflow-hidden" id="projects">
      <div className="container mx-auto px-5 lg:px-28 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-center"
        >
          Featured <span className="underline decoration-4 decoration-black underline-offset-4">Projects</span>
        </motion.h2>
        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Interactive Infinite Gallery. Hover to pause & tilt.
        </p>
      </div>

      <div className="w-full">
        <Marquee gradient={false} speed={50} pauseOnHover={true} className="py-10">
          {projects.map((project, idx) => (
            <div key={project.id} className="mx-6 w-[400px]">
              <Tilt options={defaultOptions}>
                <div
                  className="bg-black text-white border-2 border-black rounded-xl overflow-hidden shadow-[10px_10px_0px_0px_rgba(100,100,100,0.5)] hover:shadow-[15px_15px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col h-[520px]"
                >
                  <div className="h-56 overflow-hidden border-b-2 border-white/10 relative group shrink-0">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a href={project.link} target="_blank" rel="noreferrer" className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform border-2 border-white"><BsGithub size={20} /></a>
                      {project.prototypeLink && <a href={project.prototypeLink} target="_blank" rel="noreferrer" className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform border-2 border-white"><BsGlobe size={20} /></a>}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow relative">
                    {/* Decorative corner */}
                    <div className="absolute top-4 right-4 text-xs font-mono text-gray-500">0{idx + 1}</div>

                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 text-ellipsis leading-relaxed font-medium">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.split(',').slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs font-bold border border-white/20 bg-white text-black px-3 py-1.5 rounded-full hover:bg-black hover:text-white hover:border-white transition-colors cursor-default">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>

                    <a href={project.link} target="_blank" rel="noreferrer" className="mt-8 block text-center font-bold border-2 border-white py-3 rounded-lg hover:bg-white hover:text-black transition-all text-white tracking-wide">
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