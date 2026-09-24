import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../constants';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-5 lg:px-28 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl lg:text-5xl font-space font-bold text-white mb-4">
                        <span className="text-hive-cyan">{"<"}</span> Certifications <span className="text-hive-cyan">{"/>"}</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-hive-blue to-hive-cyan rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.15, zIndex: 50 }}
                            className="relative group rounded-xl overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-hive-black via-hive-black/60 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-300 z-10"></div>
                            
                            {/* The Certificate Image */}
                            <img 
                                src={cert.img} 
                                alt={cert.title} 
                                className="w-full h-[250px] object-cover transition-transform duration-500"
                            />

                            {/* Content overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-4 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-lg font-space font-bold text-white mb-1 group-hover:text-hive-cyan transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-sm font-mono text-gray-400">
                                    {cert.issuer}
                                </p>
                            </div>
                            
                            {/* Glass border effect */}
                            <div className="absolute inset-0 border-2 border-white/10 rounded-xl group-hover:border-hive-cyan/50 transition-colors duration-300 z-30 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
