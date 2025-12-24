import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

const Robot = () => {
    const { scene } = useGLTF('/robot.glb');
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <primitive object={scene} scale={2.5} position={[0, -2, 0]} rotation={[0, 0.5, 0]} />
        </Float>
    );
};

const GlitchText = ({ children }) => {
    return (
        <span className="relative inline-block text-neon-cyan">
            <span className="absolute top-0 left-0 -ml-[2px] text-neon-purple animate-pulse opacity-70 clip-text">
                {children}
            </span>
            <span className="relative z-10">{children}</span>
            <span className="absolute top-0 left-0 ml-[2px] text-neon-pink animate-pulse opacity-70 clip-text">
                {children}
            </span>
        </span>
    );
};

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                        Building the <br />
                        <GlitchText>Future</GlitchText> of Web
                    </h1>
                    <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-lg">
                        I create immersive digital experiences using cutting-edge technologies.
                        Welcome to my universe.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 px-8 py-4 bg-white/10 border border-white/20 rounded-full backdrop-blur-md text-white font-semibold hover:bg-neon-cyan/20 hover:border-neon-cyan/50 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                    >
                        Explore Work
                    </motion.button>
                </motion.div>

                {/* 3D Model */}
                <div className="h-[500px] w-full relative z-10">
                    <Canvas className="bg-transparent" camera={{ position: [0, 0, 8], fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00f3ff" />
                        <pointLight position={[-10, -10, -10]} color="#b026ff" intensity={1} />
                        <Suspense fallback={null}>
                            <Robot />
                            <Environment preset="city" />
                        </Suspense>
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
