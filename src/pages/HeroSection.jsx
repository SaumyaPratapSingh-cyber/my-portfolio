import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-40">
                {/* We use the video as a texture or background element. Assuming resume-loop.mp4 is good for this. */}
                {/* Fallback to simple gradient if video is heavy, but user asked for "best". */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-acid-green/10 blur-[120px] animate-pulse-glow"></div>
            </div>

            <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left: Typography (Massive, Editorial) */}
                <motion.div
                    className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 w-fit mx-auto lg:mx-0 bg-white/5 backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-acid-green animate-pulse"></span>
                        <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">Available for hire</span>
                    </div>

                    <h1 className="text-7xl md:text-[9rem] leading-[0.9] font-display font-bold tracking-tighter mb-8 group cursor-default">
                        CREATIVE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600 group-hover:text-stroke transition-all duration-500">DEVELOPER</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                        I craft high-performance digital experiences with a focus on motion, aesthetics, and interaction.
                        Turning complex problems into simple, beautiful solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-acid-green text-black px-8 py-4 rounded-full font-bold font-display text-lg tracking-wide hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-shadow"
                        >
                            Start Project
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold font-display text-lg tracking-wide hover:bg-white/5 transition-colors"
                        >
                            View Work
                        </motion.button>
                    </div>
                </motion.div>

                {/* Right: Visual (Video/Asset) */}
                <motion.div
                    className="lg:col-span-5 relative h-[500px] lg:h-[700px] flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                >
                    {/* 
                        User Mentioned "ribok.mp4" and "resume-loop.mp4". 
                        Ribok seems like a good fit for a dynamic card or hero bg. 
                        Let's try to put the Ribok video inside a sleek frame.
                     */}

                    <div className="relative w-full max-w-md aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out-expo group">
                        <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors"></div>
                        <video
                            src="/ribok.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                        />

                        {/* Overlay Content on Video (Like a TikTok/Reel UI or just clean) */}
                        <div className="absolute bottom-6 left-6 z-20">
                            <h3 className="text-white font-display font-bold text-2xl">Building <br /> The Future</h3>
                        </div>
                    </div>

                    {/* Floating decorations */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-10 top-1/4 w-24 h-24 bg-acid-green/20 backdrop-blur-md rounded-2xl border border-white/10 rotate-12 z-0"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
