import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-5 lg:px-28" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left: Image with Glass border */}
        <motion.div
          className="lg:w-1/3 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10 border border-white/30 bg-white/10 backdrop-blur-sm p-2 rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            <img src="/profile.png" alt="Profile" className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-500" />
          </div>
        </motion.div>

        {/* Right: Text content */}
        <motion.div
          className="lg:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-6 flex items-center gap-3">
            About <span className="text-white bg-black/80 backdrop-blur-md px-2 -rotate-2 inline-block rounded-md">Me</span>
          </h2>

          <p className="text-gray-800 text-lg leading-relaxed mb-6 font-medium">
            I'm <span className="font-bold text-black border-b-2 border-black/20">Saumya Pratap Singh</span>, a passionate Full Stack Developer and AI Enthusiast based in India.
            My journey in tech is driven by a curiosity to understand how things work and a desire to build solutions that make a difference.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            I specialize in building robust web applications using the <span className="font-bold text-black border-b-2 border-black/20">MERN Stack</span> and creating cross-platform mobile experiences with <span className="font-bold text-black border-b-2 border-black/20">Flutter</span>.
            Beyond coding, I'm deeply interested in Artificial Intelligence and its potential to reshape the future.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Stat number="03+" label="Years Experience" />
            <Stat number="10+" label="Projects Completed" />
            <Stat number="05+" label="Tech Stack Mastered" />
            <Stat number="02+" label="Happy Clients" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const Stat = ({ number, label }) => (
  <div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-xl text-center hover:bg-white/40 transition-colors shadow-sm">
    <h4 className="text-3xl font-extrabold text-black">{number}</h4>
    <p className="text-xs text-gray-600 font-bold uppercase tracking-wider mt-1">{label}</p>
  </div>
)

export default About;