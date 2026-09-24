import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUp, Heart } from 'lucide-react';
import { Link } from 'react-scroll';
import { cn } from '../../lib/utils';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-black border-t border-[#00E5FF]/20 py-8 relative font-mono"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Left: Copyright */}
          <div className="flex flex-col md:items-start items-center text-center md:text-left">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} My Portfolio.
            </p>
            <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-[#00E5FF]" /> & React
            </p>
          </div>

          {/* Center: Nav Links */}
          <div className="flex justify-center gap-6">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="text-gray-400 hover:text-[#00E5FF] hover:shadow-[0_0_10px_rgba(0,229,255,0.5)] transition-colors cursor-pointer capitalize text-sm"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right: Socials & Back to Top */}
          <div className="flex justify-center md:justify-end items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#00E5FF] hover:drop-shadow-[0_0_8px_#00E5FF] transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#00E5FF] hover:drop-shadow-[0_0_8px_#00E5FF] transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="ml-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all cursor-pointer group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
