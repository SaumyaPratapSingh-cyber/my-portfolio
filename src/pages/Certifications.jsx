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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="certifications" className="py-20 bg-black min-h-screen relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-4">
            <span className="text-[#00E5FF]">&lt;</span> Certifications <span className="text-[#00E5FF]">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-[#00E5FF] mx-auto shadow-[0_0_10px_#00E5FF]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id || index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-black border border-white/10 rounded-xl overflow-hidden cursor-pointer group hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-300 flex flex-col"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="h-[220px] w-full relative overflow-hidden bg-white/5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow justify-center">
                <h3 className="text-white font-space font-bold text-lg leading-tight mb-2 group-hover:text-[#00E5FF] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[#00E5FF] font-mono text-sm">
                  {cert.issuer}
                </p>
                {cert.date && <p className="text-gray-500 font-mono text-xs mt-1">{cert.date}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 text-white hover:text-[#00E5FF] transition-colors z-50 text-4xl"
            >
              &times;
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.2)] border border-white/20"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="text-white font-space font-bold text-xl">{selectedCert.title}</p>
                <p className="text-[#00E5FF] font-mono">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
