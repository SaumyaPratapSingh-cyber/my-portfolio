import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { BsGithub, BsGlobe } from "react-icons/bs";

const Projects = () => {
  return (
    <section className="py-20 px-5 lg:px-28 bg-gray-50" id="projects">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16"
        >
          Featured <span className="underline decoration-4 decoration-black underline-offset-4">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden border-b-2 border-black relative group">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} target="_blank" rel="noreferrer" className="bg-white p-3 rounded-full hover:scale-110 transition-transform border-2 border-black"><BsGithub size={20} /></a>
                  {project.prototypeLink && <a href={project.prototypeLink} target="_blank" rel="noreferrer" className="bg-white p-3 rounded-full hover:scale-110 transition-transform border-2 border-black"><BsGlobe size={20} /></a>}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.split(',').slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs font-bold border-2 border-black bg-white text-black px-2 py-1 rounded-md hover:bg-black hover:text-white transition-colors cursor-default">
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 block text-center font-bold border-2 border-black py-2 rounded-lg hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all bg-white text-black">
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;