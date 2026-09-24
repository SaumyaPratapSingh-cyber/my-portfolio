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

        {/* Vertical Timeline */}
        <div className="relative flex flex-col gap-12 lg:gap-24">
          {/* The Central Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-hive-cyan shadow-[0_0_15px_rgba(0,229,255,1)] hidden lg:block"></div>

          {/* The Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-hive-cyan shadow-[0_0_15px_rgba(0,229,255,1)] lg:hidden"></div>

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
      {/* Dot */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="absolute left-8 lg:left-1/2 w-6 h-6 bg-hive-cyan rounded-full shadow-[0_0_20px_rgba(0,229,255,1)] z-20 transform -translate-x-1/2 lg:group-hover:scale-125 transition-transform duration-300"
      ></motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 50 }}
        className={`w-full lg:w-5/12 pl-12 md:pl-20 lg:pl-0 ${!isEven ? 'lg:text-right' : 'lg:text-left'} relative z-10`}
      >
        <Tilt options={{ max: 15, scale: 1.05, speed: 400 }}>
          <div className={`relative p-6 bg-black border border-hive-cyan/30 text-white rounded-xl shadow-lg hover:border-hive-cyan hover:shadow-[0_0_30px_rgba(0,229,255,0.8)] transition-all duration-300 mx-auto ${!isEven ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'}`}>
            
            {/* Header Row */}
            <div className={`flex flex-col gap-2 mb-3`}>
              <h3 className="text-2xl font-space font-bold text-white leading-tight">{data.role}</h3>
              <h4 className="text-lg text-hive-cyan font-mono font-bold drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]">{data.company}</h4>
            </div>

            {/* Date Tag */}
            <div className={`mb-4`}>
              <span className="inline-block px-3 py-1 rounded bg-hive-cyan/10 text-xs font-mono font-bold text-hive-cyan uppercase tracking-wider border border-hive-cyan/20">
                {data.duration}
              </span>
            </div>

            {/* Description */}
            <p className={`text-gray-300 leading-relaxed text-sm font-mono mt-4`}>
              {data.desc}
            </p>

            {/* Certificate Button */}
            {data.certificateLink && (
              <div className={`mt-6 flex ${!isEven ? 'lg:justify-end' : 'justify-start'}`}>
                <a
                  href={data.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-hive-cyan uppercase tracking-wider hover:text-white transition-all duration-300 group/link"
                >
                  <span className="group-hover/link:underline">Certificate</span> <span className="text-lg transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
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