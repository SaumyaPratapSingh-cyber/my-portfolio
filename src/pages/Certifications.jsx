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
    <section id="certifications" className="py-20 bg-black min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            <span className="text-hive-cyan drop-shadow-[0_0_15px_#00E5FF]">&lt;</span> Certifications <span className="text-hive-cyan drop-shadow-[0_0_15px_#00E5FF]">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-hive-cyan mx-auto shadow-[0_0_20px_#00E5FF,0_0_40px_#00E5FF]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#050505] border border-zinc-800 rounded-xl overflow-hidden cursor-pointer group hover:border-hive-cyan hover:shadow-[0_0_30px_rgba(0,229,255,0.5),0_0_10px_rgba(0,229,255,0.2)_inset] transition-all duration-300 flex flex-col relative z-10"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-hive-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="h-[220px] w-full relative overflow-hidden bg-black">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-center bg-gradient-to-b from-[#0a0a0a] to-black z-10">
                <h3 className="text-white font-space font-bold text-xl leading-tight mb-2 group-hover:text-hive-cyan group-hover:drop-shadow-[0_0_10px_#00E5FF] transition-all">
                  {cert.title}
                </h3>
                <p className="text-hive-cyan font-mono text-sm font-semibold tracking-wide group-hover:drop-shadow-[0_0_5px_#00E5FF]">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 text-white hover:text-hive-cyan hover:drop-shadow-[0_0_10px_#00E5FF] transition-all z-50 text-5xl font-light"
            >
              &times;
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full bg-black p-2 rounded-2xl border border-hive-cyan shadow-[0_0_50px_rgba(0,229,255,0.4)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="w-full h-auto rounded-xl brightness-110"
              />
              <div className="mt-6 mb-4 text-center">
                <p className="text-white font-space font-bold text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] mb-2">{selectedCert.title}</p>
                <p className="text-hive-cyan font-mono text-lg drop-shadow-[0_0_8px_#00E5FF]">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
