import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import Hexagon3D from './Hexagon3D';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-hive-black text-white">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-network opacity-30 pointer-events-none"></div>

            {/* 3D Scene */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#00E5FF" />
                    <Hexagon3D />
                    <Environment preset="city" />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center px-4 md:px-0 pointer-events-none">
                {/* Pointer events none on container to let clicks pass through to 3D if needed, but buttons need pointer-events-auto */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-hive-cyan font-mono text-sm tracking-widest mb-4 uppercase">
                        Architecting the Future
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-space font-bold leading-tight mb-8">
                        We Engineer <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-hive-blue to-hive-cyan">
                            Digital Dominance
                        </span>
                    </h1>
                    <p className="text-hive-grey max-w-2xl mx-auto mb-10 font-mono text-sm md:text-base">
                        Building immersive digital experiences with motion, 3D architecture, and precision code.
                    </p>

                    <div className="flex justify-center gap-6 pointer-events-auto">
                        <button className="px-8 py-3 bg-hive-blue text-white font-space font-bold rounded-none hover:bg-hive-cyan transition-colors duration-300 flex items-center gap-2 group">
                            Explore Services
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-3 border border-white/20 text-white font-space font-bold rounded-none hover:bg-white/10 transition-colors duration-300">
                            View Work
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
