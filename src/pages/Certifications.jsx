import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../constants';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="certifications" className="min-h-screen py-20 px-6 bg-hive-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-hive-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hive-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold text-hive-white mb-4">
            <span className="text-hive-cyan">{"< "}</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-hive-white via-gray-300 to-gray-500">
              Certifications
            </span>
            <span className="text-hive-cyan">{" />"}</span>
          </h2>
          {/* Animated gradient line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-transparent via-hive-cyan to-transparent mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setSelectedCert(cert)}
              className="relative group cursor-pointer h-72 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10"
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              <motion.div
                variants={{
                  hover: { scale: 1.08 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full"
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              
              {/* Overlay */}
              <motion.div 
                variants={{
                  hover: { opacity: 0.2 }
                }}
                initial={{ opacity: 0.7 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
              />

              {/* Glowing Border on Hover */}
              <motion.div 
                variants={{
                  hover: { opacity: 1 }
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 border-2 border-hive-cyan/50 rounded-2xl pointer-events-none"
              />

              {/* Text Content */}
              <motion.div
                variants={{
                  hover: { y: 0, opacity: 1 }
                }}
                initial={{ y: 20, opacity: 0.8 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end z-10"
              >
                <h3 className="font-space font-bold text-lg text-white mb-1 drop-shadow-md">
                  {cert.title}
                </h3>
                <p className="font-mono text-sm text-hive-cyan drop-shadow-md">
                  {cert.issuer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,229,255,0.2)]"
            >
              <img 
                src={selectedCert.img} 
                alt={selectedCert.title}
                className="w-full h-full object-contain bg-black/50"
              />
              
              <div className="absolute top-4 right-4">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="bg-black/50 hover:bg-hive-cyan/20 border border-white/20 hover:border-hive-cyan backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="font-space text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="font-mono text-hive-cyan">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
