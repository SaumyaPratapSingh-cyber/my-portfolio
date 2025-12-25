import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Experience3D from "../components/Experience/Experience3D";
import { experience } from "../constants";
import "./pages.scss";

const Experience = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden py-20" id="experience">
      {/* 1. 3D Background Layer with HEAVY overlay for visibility */}
      <div className="fixed inset-0 z-0">
        <Experience3D />
        {/* Visual Fix: Dark overlay to ensure text is visible against the 3D background */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 2. Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32 relative"
        >
          <h2 className="text-sm font-bold tracking-[0.5em] text-cyan-400 uppercase mb-4 text-shadow-glow">The Path</h2>
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tight drop-shadow-lg">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Odyssey</span>
          </h1>
        </motion.div>

        {/* 3. Wavy Timeline Container */}
        <WavyTimeline data={experience} />
      </div>
    </section>
  );
};

const WavyTimeline = ({ data }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate height based on number of items
  const itemHeight = 400; // Height per card section
  const totalHeight = data.length * itemHeight;

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: totalHeight }}>
      {/* The Wavy Line SVG */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block">
        <svg className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="10%" stopColor="#22d3ee" />
              <stop offset="90%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* 
                        Draw a Sine Wave: 
                        We start at center top.
                        For each item, we curve out and back.
                        M center,0 
                        Q left,height/2 center,height 
                        Q right,height*1.5 center,height*2 ...
                    */}
          <path
            d={`M 50% 0 ${data.map((_, i) => {
              const yStart = i * itemHeight;
              const yMid = yStart + itemHeight / 2;
              const yEnd = yStart + itemHeight;
              const direction = i % 2 === 0 ? -1 : 1; // Left then Right
              const amplitude = 150; // How wide the wave is

              // Using cubic bezier for smoother sine wave
              // C cp1x cp1y, cp2x cp2y, endx endy
              return `C calc(50% + ${direction * amplitude}px) ${yMid}px, calc(50% + ${direction * amplitude}px) ${yMid}px, 50% ${yEnd}px`;
            }).join(" ")}`}
            fill="none"
            stroke="url(#line-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            className="opacity-50"
          />
          {/* Animated Path Overlay if needed, or just use the gradient */}
        </svg>
      </div>

      {/* Timeline Items */}
      {data.map((exp, index) => (
        <TimelineCard key={index} data={exp} index={index} itemHeight={itemHeight} />
      ))}
    </div>
  );
};

const TimelineCard = ({ data, index, itemHeight }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className="absolute w-full flex justify-center items-center"
      style={{ top: index * itemHeight, height: itemHeight }}
    >
      <motion.div
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className={`w-full md:w-[45%] flex ${isEven ? 'justify-end md:pr-16 translate-x-[-25%] md:translate-x-0' : 'justify-start md:pl-16 translate-x-[25%] md:translate-x-0'} relative`}
      >
        {/** Connector Dot on the wave (This needs to be absolutely positioned in the center) */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black border-4 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-20 hidden lg:block`} />

        {/** The Card */}
        <div className={`relative glass-card p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md w-full max-w-xl group hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] ${isEven ? 'text-right' : 'text-left'}`}>

          {/* Glowing corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-xl group-hover:border-cyan-400 transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-xl group-hover:border-cyan-400 transition-colors"></div>

          <div className="flex flex-col gap-2 relative z-10">
            <span className={`text-5xl font-black text-white/5 absolute -top-4 ${isEven ? '-left-4' : '-right-4'}`}>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>

            <div className={`flex items-center gap-3 mb-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
              <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                {data.duration}
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white leading-tight group-hover:text-cyan-200 transition-colors">{data.role}</h3>
            <h4 className="text-xl text-gray-400 font-medium tracking-wide flex items-center gap-2">
              {isEven && <span>{data.company}</span>}
              {!isEven && <span>{data.company}</span>}
            </h4>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"></div>

            <p className="text-gray-300 leading-relaxed text-sm font-light">
              {data.desc}
            </p>

            {data.certificateLink && (
              <a
                href={data.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-cyan-400 hover:text-white mt-4 font-bold text-sm tracking-wide transition-colors ${isEven ? 'self-end' : 'self-start'}`}
              >
                VIEW CERTIFICATE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;