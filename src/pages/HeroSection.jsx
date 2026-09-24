import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { IoLogoLinkedin } from 'react-icons/io5';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black z-10">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#00E5FF] bg-black"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></span>
            <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider">Based in India</span>
          </motion.div>

          <h1 className="font-space text-5xl md:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Saumya Pratap Singh
          </h1>

          <div className="h-12 md:h-16 flex items-center">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React Enthusiast',
                2000,
                'UI/UX Developer',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="font-mono text-2xl md:text-4xl font-semibold text-gradient"
            />
          </div>

          <p className="font-mono text-gray-300 max-w-xl text-sm md:text-base leading-relaxed">
            I craft scalable web applications with modern technologies. Passionate about beautiful interfaces and optimal user experiences.
          </p>

          <div className="flex items-center space-x-6 pt-4">
            <motion.a
              href="#resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#00E5FF] text-black font-space font-bold rounded-lg glow-cyan transition-shadow hover:shadow-[0_0_25px_rgba(0,229,255,0.6)]"
            >
              Resume
            </motion.a>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full border-2 border-[#00E5FF] flex items-center justify-center text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-colors"
              >
                <BsGithub size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full border-2 border-[#00E5FF] flex items-center justify-center text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-colors"
              >
                <IoLogoLinkedin size={22} />
              </motion.a>
              <motion.a
                href="mailto:example@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full border-2 border-[#00E5FF] flex items-center justify-center text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-colors"
              >
                <BiLogoGmail size={22} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Profile Image with Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          {/* Animated Border Ring */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#00E5FF] opacity-50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-[#007BFF] opacity-30"
            />
            
            {/* Profile Image */}
            <div className="absolute inset-8 rounded-full overflow-hidden bg-black border border-gray-800 glow-cyan">
              <img 
                src="/profile.png" 
                alt="Saumya Pratap Singh" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Floating Shapes */}
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-8 h-8 rounded-lg bg-[#00E5FF]/20 border border-[#00E5FF] backdrop-blur-sm"
            />
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 w-10 h-10 rounded-full bg-[#007BFF]/20 border border-[#007BFF] backdrop-blur-sm"
            />
            <motion.div
              animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -right-4 w-6 h-6 border-2 border-[#00E5FF]"
              style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
