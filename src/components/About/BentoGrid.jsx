import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Github, ExternalLink } from 'lucide-react';

// A simple simulation of GitHub contribution graph
const GithubGraph = () => {
    // Generate random data for the graph
    const weeks = 52;
    const days = 7;
    const levels = ["bg-[#161b22]", "bg-[#0e4429]", "bg-[#006d32]", "bg-[#26a641]", "bg-[#39d353]"];

    return (
        <div className="flex gap-[3px] p-4 overflow-hidden mask-linear-fade">
            {Array.from({ length: weeks }).map((_, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-[3px]">
                    {Array.from({ length: days }).map((_, dIndex) => {
                        const randomLevel = levels[Math.floor(Math.random() * (levels.length === 5 ? 5 : 2) + (Math.random() > 0.7 ? 0 : 0))];
                        // skewed logic to make it look realistic (mostly empty or low activity, some high)
                        const level = Math.random() > 0.7 ? levels[Math.floor(Math.random() * levels.length)] : levels[0];
                        return (
                            <div
                                key={dIndex}
                                className={`w-3 h-3 rounded-[2px] ${level}`}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

const BentoGrid = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
                About <span className="text-neon-cyan">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                {/* Box 1: Large Bio - Spans 2 cols on md */}
                <motion.div
                    className="glass-panel p-8 md:col-span-2 rounded-3xl relative overflow-hidden group"
                    whileHover={{ scale: 1.01 }}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/20 blur-[60px] rounded-full group-hover:bg-neon-purple/30 transition-all" />
                    <h3 className="text-2xl font-bold mb-4 font-display">Who I Am</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        I am a passionate Full Stack Developer dedicated to building immersive digital experiences.
                        With a strong foundation in modern web technologies, I love merging creativity with code to solve real-world problems.
                        My journey is defined by constant learning and a drive to innovate.
                    </p>
                </motion.div>

                {/* Box 2: Location Map */}
                <motion.div
                    className="glass-panel p-0 md:col-span-1 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center min-h-[200px]"
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Simulated Map Background - Dark Mode Map Look */}
                    <div className="absolute inset-0 bg-[#1a1a1a] opacity-80">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30"
                            style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        {/* Abstract "Streets" */}
                        <div className="absolute top-0 left-1/3 w-1 h-full bg-gray-800 rotate-12"></div>
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 -rotate-6"></div>
                    </div>

                    <div className="z-10 flex flex-col items-center">
                        <div className="relative">
                            <div className="w-4 h-4 bg-neon-cyan rounded-full animate-ping absolute inset-0"></div>
                            <div className="w-4 h-4 bg-neon-cyan rounded-full relative z-10 border-2 border-white"></div>
                        </div>
                        <div className="mt-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                            <MapPin size={16} className="text-neon-cyan" />
                            <span className="text-sm font-semibold">Lucknow, India</span>
                        </div>
                    </div>
                </motion.div>

                {/* Box 3: Open to Work */}
                <motion.div
                    className="glass-panel p-6 md:col-span-1 rounded-3xl flex flex-col items-center justify-center gap-4 group"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute"></div>
                        <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-[#050505] z-10"></div>
                    </div>
                    <h3 className="text-xl font-bold">Open to Work</h3>
                    <p className="text-xs text-center text-gray-400 uppercase tracking-widest">Available for Freelance & Full-time</p>
                </motion.div>

                {/* Box 4: GitHub Activity */}
                <motion.div
                    className="glass-panel p-6 md:col-span-2 rounded-3xl flex flex-col justify-start overflow-hidden relative"
                    whileHover={{ scale: 1.01 }}
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Github className="text-white" />
                            <span className="font-bold">GitHub Activity</span>
                        </div>
                        <a href="https://github.com/SaumyaPratapSingh-cyber" target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
                            View Profile <ExternalLink size={12} />
                        </a>
                    </div>

                    <div className="w-full overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                        <GithubGraph />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default BentoGrid;
