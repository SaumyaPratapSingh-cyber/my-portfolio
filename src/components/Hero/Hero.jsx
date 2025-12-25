import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import "./hero.scss";

const Spline = lazy(() => import("@splinetool/react-spline"));

const ROLES = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Aspiring Software Engineer",
  "Flutter Developer",
  "Agentic AI Developer",
  "End-to-End Solutions (BaaS)"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500); // Change role every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="hero">
      {/* --- LAYER 2: TEXT (FOREGROUND) --- */}
      <div className="hero-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 max-w-2xl"
        >
          <motion.h2 variants={itemVariants} className="text-sm md:text-base tracking-[0.2em] text-gray-400 font-medium">
            HELLO, I AM
          </motion.h2>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Saumya Pratap Singh
          </motion.h1>

          {/* Rotating Text Component */}
          <motion.div variants={itemVariants} className="h-16 md:h-20 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 absolute top-0 left-0"
              >
                {ROLES[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 font-light mt-2">
            Based in <span className="font-bold text-white">India.</span>
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed text-sm md:text-base max-w-lg">
            Passionate about building scalable digital solutions. I specialize in the <span className="text-white font-bold">MERN Stack</span> and <span className="text-white font-bold">Flutter</span> development. Focused on creating intuitive experiences that solve real-world problems.
          </motion.p>

          <motion.div variants={itemVariants} className="buttons flex gap-4 mt-6">
            <Link to="/projects">
              <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">View My Work</button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors">Get In Touch</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* --- LAYER 1: 3D SCENE (BACKGROUND) --- */}
      <div className="spline-scene">
        <Suspense fallback={<LoadingSpinner message="Loading 3D Scene..." />}>
          <Spline scene="https://prod.spline.design/9A9d16rY7cJkg6ld/scene.splinecode" />
        </Suspense>
      </div>
    </div>
  );
};

export default Hero;