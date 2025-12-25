import { motion } from "framer-motion";
import React from "react";
import Experience3D from "../components/Experience/Experience3D";
import { experience } from "../constants";
import "./pages.scss";

const Experience = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden py-20" id="experience">
      {/* 1. 3D Background Layer */}
      <Experience3D />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 2. Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">My Journey</h2>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Experience</span>
          </h1>
        </motion.div>

        {/* 3. Vertical Timeline */}
        <div className="relative flex flex-col gap-12 lg:gap-20">
          {/* The Central Line (Visible on Desktop) */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

          {/* The Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent lg:hidden"></div>

          {experience.map((exp, index) => (
            <TimelineItem key={index} data={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0;

  // Generate a placeholder logo letter since we don't have all SVGs
  const logoLetter = data.company.charAt(0);
  const isGoogle = data.company.toLowerCase().includes("google") || data.company.toLowerCase().includes("gdg");

  return (
    <div className={`relative flex flex-col lg:flex-row items-center lg:justify-between w-full group ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

      {/* Dot & Connector */}
      <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-black border-2 border-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] z-20 transform -translate-x-1/2 lg:group-hover:scale-150 transition-transform duration-500"></div>

      {/* Empty Spacer */}
      <div className="hidden lg:block lg:w-5/12"></div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 50 }}
        className={`w-full lg:w-5/12 pl-20 lg:pl-0 ${!isEven ? 'lg:text-right' : 'lg:text-left'}`}
      >
        {/* 
                    NEW CARD DESIGN:
                    - Black Background
                    - White/Grey Border
                    - "Header Row": [Logo] [Title+Role] ... [Date]
                */}
        <div className="relative p-6 md:p-8 bg-black border border-white/20 rounded-xl hover:border-white/60 transition-colors duration-300">

          {/* Header Row */}
          <div className={`flex flex-col gap-4 mb-6 ${!isEven ? 'lg:flex-row-reverse lg:text-right' : 'md:flex-row md:items-start'}`}>

            {/* Logo Circle */}
            <div className={`flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-zinc-900 ${!isEven ? 'lg:ml-auto' : ''}`}>
              {isGoogle ? (
                <img src="/google.png" alt="G" className="w-6 h-6 object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = 'G' }} />
              ) : (
                <span className="text-white font-bold text-lg">{logoLetter}</span>
              )}
            </div>

            {/* Title & Role */}
            <div className="flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{data.role}</h3>
              <h4 className="text-lg text-gray-400 font-medium mt-1">{data.company}</h4>
            </div>

            {/* Date (Top Right on Desktop) */}
            <div className="flex-shrink-0 self-start">
              <span className="inline-block px-3 py-1 rounded border border-white/10 bg-white/5 text-xs font-mono text-gray-400">
                {data.duration}
              </span>
            </div>

          </div>

          {/* Description */}
          <p className={`text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/10 pt-4 ${!isEven ? 'lg:text-right' : 'lg:text-left'}`}>
            {data.desc}
          </p>

          {/* Button */}
          {data.certificateLink && (
            <div className={`mt-6 flex ${!isEven ? 'lg:justify-end' : 'justify-start'}`}>
              <a
                href={data.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                View Certificate <span className="text-lg">↗</span>
              </a>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};

export default Experience;