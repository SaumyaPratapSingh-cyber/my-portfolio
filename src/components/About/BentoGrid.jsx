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
                    className="glass-panel p-8 md:col-span-2 rounded-3xl relative overflow-hidden group border border-white/5 bg-gradient-to-br from-white/5 to-transparent"
                    whileHover={{ scale: 1.01 }}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-acid-green/10 blur-[60px] rounded-full group-hover:bg-acid-green/20 transition-all" />
                    <h3 className="text-3xl font-bold mb-4 font-display text-white">Who I Am</h3>
                    <p className="text-gray-400 leading-relaxed text-lg font-light">
                        I am a passionate <span className="text-soft-white font-medium">Full Stack Developer</span> dedicated to building immersive digital experiences.
                        With a strong foundation in modern web technologies, I love merging creativity with code to solve real-world problems.
                        My journey is defined by constant learning and a drive to <span className="text-acid-green">innovate</span>.
                    </p>
                </motion.div>

                {/* Box 2: Profile Image */}
                <motion.div
                    className="glass-panel p-0 md:col-span-1 rounded-3xl relative overflow-hidden h-full min-h-[250px] group"
                    whileHover={{ scale: 1.02 }}
                >
                    <img src="/profile.png" alt="Saumya" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                        <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full w-fit border border-white/10">
                            <MapPin size={14} className="text-acid-green" />
                            <span className="text-xs font-semibold text-white">Lucknow, India</span>
                        </div>
                    </div>
                </motion.div>

                {/* Box 3: Open to Work - Styled to match Hype4 */}
                <motion.div
                    className="glass-panel p-6 md:col-span-1 rounded-3xl flex flex-col items-center justify-center gap-4 group bg-[#111] border border-white/5 hover:border-acid-green/50 transition-colors cursor-default"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 bg-acid-green/20 blur-xl rounded-full animate-pulse"></div>
                        <div className="w-4 h-4 bg-acid-green rounded-full animate-ping absolute"></div>
                        <div className="w-6 h-6 bg-acid-green rounded-full border-4 border-[#0a0a0a] z-10"></div>
                    </div>
                    <h3 className="text-xl font-bold font-display tracking-tight text-white">Open to Work</h3>
                    <p className="text-xs text-center text-gray-500 uppercase tracking-widest font-mono">Available Now</p>
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
