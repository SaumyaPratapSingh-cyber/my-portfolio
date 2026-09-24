import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { cn } from '../../lib/utils';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <footer className="relative bg-hive-black/80 backdrop-blur-xl mt-auto overflow-hidden">
      {/* Animated Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-hive-blue via-hive-cyan to-hive-blue bg-[length:200%_auto] animate-pulse"></div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Copyright */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hive-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-hive-cyan"></span>
            </div>
            <p className="font-mono text-sm text-gray-400">
              © {new Date().getFullYear()} Saumya Pratap Singh. All rights reserved.
            </p>
          </motion.div>

          {/* Center: Nav Links */}
          <motion.nav 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                className="group relative font-mono text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-hive-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </motion.nav>

          {/* Right: Social & Back to Top */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-hive-cyan transition-colors hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-hive-blue transition-colors hover:drop-shadow-[0_0_8px_rgba(0,123,255,0.8)]"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>

            <div className="h-6 w-px bg-white/10 mx-2"></div>

            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-hive-cyan hover:border-hive-cyan hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all flex items-center justify-center group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
