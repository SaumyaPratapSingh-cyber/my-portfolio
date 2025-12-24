import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from 'react-scroll';

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 p-5 transition-all duration-300 ${hasShadow
        ? "bg-black/80 backdrop-blur-xl border-b border-white/20 shadow-lg py-4"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="h-9 cursor-pointer font-sora font-extrabold text-2xl flex items-center text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Saumya<span className="text-gray-500">.</span>
        </div>

        <ul className="hidden lg:flex items-center gap-x-7 font-bold text-sm tracking-wide text-white">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li
              key={section}
              className="group relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={section} smooth={true} duration={500} offset={-100}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-white"
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="/SaumyratapSingh_resume.pdf" target="_blank"
          className="hidden relative lg:inline-block px-5 py-2.5 font-bold group cursor-pointer"
          whileHover={{ y: -2 }}
        >
          {/* Offset Shadow Button Style - White on Black */}
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-black border-2 border-white group-hover:bg-white"></span>
          <span className="relative text-white group-hover:text-black flex items-center gap-x-3 text-sm">
            Resume <TbDownload size={18} />
          </span>
        </motion.a>

        <motion.button
          className="lg:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 left-0 h-screen w-full bg-black z-40 flex flex-col items-center justify-center gap-8 text-white"
          >
            <ul className="flex flex-col items-center gap-y-8 font-bold text-2xl">
              {["about", "skills", "projects", "contact"].map((section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="/SaumyratapSingh_resume.pdf" target="_blank"
              className="relative inline-block px-6 py-3 font-bold group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-black border-2 border-white group-hover:bg-white"></span>
              <span className="relative text-white group-hover:text-black flex items-center gap-x-3">
                Resume <TbDownload size={20} />
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}