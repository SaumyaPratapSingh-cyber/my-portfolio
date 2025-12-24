import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Float, Environment, Sparkles } from '@react-three/drei';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Robot = (props) => {
    const { scene } = useGLTF('/robot.glb');
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <primitive object={scene} {...props} />
        </Float>
    );
};

const MagneticButton = ({ children, className }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const ySpring = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.3);
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: xSpring, y: ySpring }}
            className={className}
        >
            {children}
        </motion.button>
    );
};

const HeroSection = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX / window.innerWidth - 0.5);
        mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 20 });
    const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 20 });

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void-black"
            onMouseMove={handleMouseMove}
        >
            {/* Parallax Background Grid */}
            <motion.div
                style={{ x: useTransform(x, (val) => val * 0.5), y: useTransform(y, (val) => val * 0.5) }}
                className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-20 pointer-events-none"
            />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full h-full">

                {/* Left: Typography */}
                <div className="flex flex-col items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-hologram-blue font-mono tracking-widest text-sm mb-4 border border-hologram-blue/20 bg-hologram-blue/5 px-3 py-1 rounded-sm w-fit">
                             // SYSTEM: ONLINE
                        </h2>

                        <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6 text-white">
                            Building Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hologram-blue to-neon-purple relative inline-block">
                                Realities
                                <span className="absolute -inset-1 bg-hologram-blue/20 blur-xl"></span>
                            </span>
                        </h1>

                        <p className="text-gray-400 text-xl font-light max-w-lg mb-10 font-sans">
                            <span className="text-white font-bold">Saumya Pratap Singh.</span> Full Stack Engineer.
                            <br /> Architecting the future of the web with 3D depth and fluid motion.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <MagneticButton className="relative group px-8 py-4 bg-hologram-blue/10 border border-hologram-blue/50 text-hologram-blue font-bold rounded-lg overflow-hidden flex items-center gap-3 hover:bg-hologram-blue hover:text-black transition-all duration-300">
                                <a href="/SaumyratapSingh_resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <Download size={20} /> Download Resume
                                </a>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                            </MagneticButton>

                            <MagneticButton className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-3">
                                My Work <ArrowRight size={20} />
                            </MagneticButton>
                        </div>
                    </motion.div>
                </div>

                {/* Right: 3D Robot in Canvas */}
                <div className="h-[600px] w-full relative">
                    <motion.div
                        className="w-full h-full"
                        style={{ x, y }}
                    >
                        <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#2EB9DF" />
                            <pointLight position={[-10, -10, -10]} color="#9D00FF" intensity={2} />

                            <Suspense fallback={null}>
                                <Environment preset="city" />
                                <Robot scale={2.8} position={[0, -1.5, 0]} rotation={[0, -0.2, 0]} />
                                <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#2EB9DF" />
                            </Suspense>

                            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                        </Canvas>
                    </motion.div>

                    {/* Glowing Orb Behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-purple/20 blur-[100px] rounded-full -z-10 animate-pulse-fast"></div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
