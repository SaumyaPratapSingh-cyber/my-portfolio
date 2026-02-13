import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { experience } from "../constants";
import "./pages.scss";

const Experience = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden py-20 text-white" id="experience">

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 2. Section Header - Now Dark for Visibility */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-space font-bold tracking-widest text-hive-cyan uppercase mb-3">My Journey</h2>
          <h1 className="text-5xl md:text-6xl font-space font-black text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-hive-blue to-hive-cyan">Experience</span>
          </h1>
        </motion.div>

        {/* 3. Vertical Timeline */}
        <div className="relative flex flex-col gap-12 lg:gap-24">
          {/* The Central Line - Darker for Light Mode */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 hidden lg:block"></div>

          {/* The Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-white/10 lg:hidden"></div>

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

      {/* Dot & Connector - Dark Theme */}
      <div className={`absolute left-8 lg:left-1/2 w-5 h-5 bg-hive-black border-4 border-hive-cyan rounded-full shadow-[0_0_15px_rgba(0,229,255,0.5)] z-20 transform -translate-x-1/2 transition-transform duration-500 lg:group-hover:scale-125`}></div>



      {/* Content Card - Rectangular & Smaller */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 50 }}
        className={`w-full lg:w-5/12 pl-12 md:pl-20 lg:pl-0 ${!isEven ? 'lg:text-right' : 'lg:text-left'} relative z-10`}
      >
        {/* 
                    CARD DESIGN:
                    - Black Background (High Contrast)
                    - Rectangular (Max Width limited)
                    - White text
                */}
        {/* 
                    CARD DESIGN:
                    - Black Background (High Contrast)
                    - Rectangular (Max Width limited)
                    - White text
                    - Parallax Tilt Effect
                */}
        <Tilt options={{ max: 15, scale: 1.05, speed: 400, glitch: true }}>
          <div className={`relative p-6 bg-hive-black/80 backdrop-blur-md border border-white/10 text-white rounded-xl shadow-lg hover:shadow-[0_0_60px_rgba(0,229,255,0.6)] transition-all duration-300 mx-auto ${!isEven ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'}`}>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

            {/* Header Row */}
            <div className={`flex flex-col gap-4 mb-4 ${!isEven ? 'lg:flex-row-reverse lg:text-right' : 'md:flex-row md:items-start'}`}>

              {/* Logo Circle */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-zinc-900 ${!isEven ? 'lg:ml-auto' : ''}`}>
                {isGoogle ? (
                  <img src="/google.png" alt="G" className="w-5 h-5 object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = 'G' }} />
                ) : (
                  <span className="text-white font-bold text-sm">{logoLetter}</span>
                )}
              </div>

              {/* Title & Role */}
              <div className="flex-grow">
                <h3 className="text-lg font-space font-bold text-white leading-tight transform translate-z-10">{data.role}</h3>
                <h4 className="text-sm text-gray-400 font-mono font-medium mt-0.5">{data.company}</h4>
              </div>
            </div>

            {/* Date Tag - Moved below header for rectangular fit */}
            <div className={`mb-4 ${!isEven ? 'lg:text-right' : ''}`}>
              <span className="inline-block px-2 py-0.5 rounded border border-white/10 bg-hive-blue/10 text-[10px] font-mono text-hive-cyan uppercase tracking-wider shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                {data.duration}
              </span>
            </div>

            {/* Description */}
            <p className={`text-gray-400 leading-relaxed text-sm border-t border-white/10 pt-3 font-mono ${!isEven ? 'lg:text-right' : 'lg:text-left'}`}>
              {data.desc}
            </p>

            {/* Button */}
            {data.certificateLink && (
              <div className={`mt-4 flex ${!isEven ? 'lg:justify-end' : 'justify-start'}`}>
                <a
                  href={data.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-hive-cyan uppercase tracking-wider hover:text-white transition-all duration-300 border-b border-hive-cyan/30 hover:border-white pb-0.5 hover:pb-1"
                >
                  Certificate <span className="text-sm">↗</span>
                </a>
              </div>
            )}

          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default Experience;