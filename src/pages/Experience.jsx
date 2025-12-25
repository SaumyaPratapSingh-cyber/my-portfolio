import { motion } from "framer-motion";
import React from "react";
import Experience3D from "../components/Experience/Experience3D"; // Import the new 3D component
import { experience } from "../constants";
import "./pages.scss"; // Keeping basics, but overriding with Tailwind mostly

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

  return (
    <div className={`relative flex flex-col lg:flex-row items-center lg:justify-between w-full group ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

      {/* Dot & Connector */}
      <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] z-20 transform -translate-x-1/2 lg:group-hover:scale-150 transition-transform duration-500 border-2 border-black"></div>

      {/* Empty Spacer for alternating layout */}
      <div className="hidden lg:block lg:w-5/12"></div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }} // Slide in from sides
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 50 }}
        className={`w-full lg:w-5/12 pl-20 lg:pl-0 ${!isEven ? 'lg:text-right' : 'lg:text-left'}`}
      >
        <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">

          {/* Glossy Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-3">
            {/* Date Tag */}
            <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-wider bg-black/50 border border-white/10 w-fit text-gray-300 mb-2 ${!isEven ? 'lg:ml-auto lg:mr-0' : ''}`}>
              {data.duration}
            </div>

            <h3 className="text-2xl font-bold text-white">{data.role}</h3>
            <h4 className="text-xl text-gray-400 font-medium">{data.company}</h4>

            <p className="text-gray-400 leading-relaxed text-sm mt-2">
              {data.desc}
            </p>

            {/* Certificate Link Button */}
            {data.certificateLink && (
              <a
                href={data.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/50 text-white text-sm font-semibold transition-all duration-300 flex items-center gap-2 w-fit ${!isEven ? 'lg:ml-auto lg:mr-0' : ''}`}
              >
                <span>View Certificate</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 8v9M8.8 8h9.2" /></svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;