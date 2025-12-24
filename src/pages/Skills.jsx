import React, { useMemo, Suspense } from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

// Lazy load Spline to avoid blocking main thread
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Skills = () => {
  // Flatten all skills into a single array
  const allSkills = useMemo(() => {
    return skills.flatMap(category => category.items);
  }, []);

  // Configuration
  const RADIUS = 600;
  const DURATION = 60;

  return (
    <section className="py-20 relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-white z-20" id="skills">

      {/* Central Content: Title + 3D Object */}
      <div className="relative z-30 flex flex-col items-center justify-center -mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative"
        >
          {/* 3D Spline Object - "Tech Sphere/Cube" */}
          {/* Using a reliable public Spline Scene URL for a tech/abstract object */}
          <Suspense fallback={<div className="w-full h-full rounded-full bg-gray-100 animate-pulse"></div>}>
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </Suspense>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-center mt-[-50px] text-black relative z-40"
        >
          My <span className="underline decoration-4 decoration-black underline-offset-4">Skills</span>
        </motion.h2>
        <p className="text-gray-500 font-medium mt-4">Tech that drives innovation.</p>
      </div>

      {/* Orbit Container - Positioned LOWER to frame the content but NOT overlap the section above */}
      <div
        className="absolute bottom-[-550px] lg:bottom-[-500px] flex items-center justify-center pointer-events-none z-10"
        style={{
          width: RADIUS * 2,
          height: RADIUS * 2,
        }}
      >
        {/* Rotating Ring */}
        <motion.div
          className="w-full h-full rounded-full relative flex items-center justify-center pointer-events-auto hover:pause-animation"
          animate={{ rotate: 360 }}
          transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
          style={{
            background: `
                        radial-gradient(transparent 68%, white 69%),
                        conic-gradient(from 0deg, #000000 0deg 90deg, #e5e5e5 90deg 180deg, #000000 180deg 270deg, #e5e5e5 270deg 360deg)
                    `,
            border: "4px solid rgba(0,0,0,0.05)",
            boxShadow: "0 0 150px rgba(0,0,0,0.1)"
          }}
        >
          {/* Inner white circle */}
          <div className="absolute inset-4 rounded-full bg-white z-0"></div>

          {allSkills.map((skill, index) => {
            const total = allSkills.length;
            const angle = (360 / total) * index;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 z-10"
                style={{
                  transform: `rotate(${angle}deg) translate(${RADIUS}px)`,
                }}
              >
                <motion.div
                  initial={{ rotate: -angle }}
                  animate={{ rotate: -angle - 360 }}
                  transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
                  className="group relative"
                >
                  <div className="absolute top-1/2 left-1/2 w-[1px] h-[40px] bg-black/20 origin-top -translate-x-1/2 -z-10 mt-10"></div>
                  <div className="flex flex-col-reverse items-center gap-4 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-6">
                    <div className="relative flex items-center justify-center w-20 h-20 bg-black/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-4 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-white transition-all">
                      <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden pointer-events-none">
                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 opacity-100"></div>
                      </div>
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-lg" />
                    </div>
                    <span className="text-sm font-extrabold uppercase tracking-wider text-black bg-white/90 border border-black/10 px-3 py-1.5 rounded-lg shadow-md group-hover:bg-black group-hover:text-white transition-colors whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;