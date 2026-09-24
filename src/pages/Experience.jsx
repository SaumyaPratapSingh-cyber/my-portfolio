import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { experience } from "../constants";
import "./pages.scss";

const Experience = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden py-20 text-white bg-transparent" id="experience">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-space font-bold tracking-widest text-hive-cyan uppercase mb-3 drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">My Journey</h2>
          <h1 className="text-5xl md:text-6xl font-space font-black text-white tracking-tight">
            Professional <span className="text-hive-cyan drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]">Experience</span>
          </h1>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experience.map((exp, index) => (
            <BentoCard key={index} data={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 60 }}
      className="w-full h-full"
    >
      <Tilt options={{ max: 10, scale: 1.02, speed: 400 }} className="h-full">
        <div className="flex flex-col h-full p-6 sm:p-8 bg-black border border-hive-cyan/30 rounded-2xl shadow-lg hover:border-hive-cyan hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all duration-300 relative group overflow-hidden">
          
          {/* Subtle gradient background effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-hive-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          {/* Header */}
          <div className="flex flex-col mb-4 relative z-10">
            <h3 className="text-2xl font-space font-bold text-white leading-tight mb-1 group-hover:text-hive-cyan transition-colors duration-300">
              {data.role}
            </h3>
            <h4 className="text-lg text-hive-cyan font-mono font-bold drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]">
              {data.company}
            </h4>
          </div>

          {/* Date Tag */}
          <div className="mb-5 relative z-10">
            <span className="inline-block px-3 py-1 rounded bg-hive-cyan/10 text-xs font-mono font-bold text-hive-cyan uppercase tracking-wider border border-hive-cyan/20">
              {data.duration}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-sm font-mono flex-grow relative z-10">
            {data.desc}
          </p>

          {/* Certificate Button */}
          {data.certificateLink && (
            <div className="mt-6 relative z-10">
              <a
                href={data.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-hive-cyan uppercase tracking-wider hover:text-white transition-all duration-300 group/link"
              >
                <span className="group-hover/link:underline">Certificate</span> 
                <span className="text-lg transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
              </a>
            </div>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default Experience;