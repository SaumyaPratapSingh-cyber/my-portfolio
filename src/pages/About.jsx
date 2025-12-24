import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-5 lg:px-28" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left: Image with offset border */}
        <motion.div
          className="lg:w-1/3 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10 border-2 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img src="/profile.png" alt="Profile" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          {/* Decorative elements behind could go here */}
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
            About <span className="text-white bg-black px-2 -rotate-2 inline-block">Me</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
            I'm <span className="font-bold text-black">Saumya Pratap Singh</span>, a passionate Full Stack Developer and AI Enthusiast based in India.
            My journey in tech is driven by a curiosity to understand how things work and a desire to build solutions that make a difference.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            I specialize in building robust web applications using the <span className="font-bold text-black">MERN Stack</span> and creating cross-platform mobile experiences with <span className="font-bold text-black">Flutter</span>.
            Beyond coding, I'm deeply interested in Artificial Intelligence and its potential to reshape the future.
            When I'm not pushing pixels or writing logic, you can find me exploring new technologies or contributing to the tech community.
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
  <div className="border-l-4 border-black pl-4">
    <h4 className="text-3xl font-extrabold">{number}</h4>
    <p className="text-sm text-gray-500 font-semibold">{label}</p>
  </div>
)

export default About;