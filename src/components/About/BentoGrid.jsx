import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code2 } from 'lucide-react';
import { skills } from '../../constants'; // Assuming we can use this for the marquee

const BentoGrid = () => {
    // Flatten skills for the marquee
    const techStack = ["React", "Node.js", "C++", "Java", "Python", "Tailwind", "Framer Motion", "MongoDB", "Three.js", "Flutter", "Firebase"];

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                {/* Tile 1: The Bio (2x2) */}
                <motion.div
                    className="glass-panel col-span-1 md:col-span-2 row-span-2 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group"
                    whileHover={{ scale: 1.01 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-hologram-blue/5 to-transparent opacity-50"></div>

                    <div className="flex items-start gap-6 z-10">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-hologram-blue/30 shadow-[0_0_20px_rgba(46,185,223,0.3)] shrink-0">
                            <img src="/profile.png" alt="Profile" className="w-full h-full object-cover scale-110" loading="lazy" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-display font-bold text-white mb-2">Saumya Pratap Singh</h3>
                            <p className="text-hologram-blue font-mono text-sm">LEVEL 21 // FULL STACK DEV</p>
                        </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed font-light z-10 mt-6 text-lg">
                        Fueling the web with interactive, high-performance code. I specialize in building scalable applications with a focus on <span className="text-white font-bold">Cyber-Physical Systems</span> and engaging UI/UX.
                    </p>

                    {/* Decorative HUD Elements */}
                    <div className="absolute top-4 right-4 text-[10px] font-mono text-white/20">ID: 554-902</div>
                    <div className="absolute bottom-4 right-4 w-12 h-1 bg-hologram-blue/20"></div>
                </motion.div>

                {/* Tile 2: Tech Stack Marquee (2x1) */}
                <motion.div
                    className="glass-panel col-span-1 md:col-span-2 rounded-3xl p-0 flex items-center overflow-hidden relative"
                    whileHover={{ scale: 1.01 }}
                >
                    <div className="absolute left-0 w-20 h-full bg-gradient-to-r from-void-black to-transparent z-10"></div>
                    <div className="absolute right-0 w-20 h-full bg-gradient-to-l from-void-black to-transparent z-10"></div>

                    <motion.div
                        className="flex gap-8 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                        {[...techStack, ...techStack].map((tech, i) => (
                            <span key={i} className="text-2xl font-display font-bold text-white/20 uppercase tracking-widest hover:text-neon-purple transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Tile 3: Location Radar (1x1) */}
                <motion.div
                    className="glass-panel col-span-1 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]"
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Radar Animation */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <div className="w-[200px] h-[200px] border border-hologram-blue/20 rounded-full absolute animate-[spin_4s_linear_infinite]"></div>
                        <div className="w-[150px] h-[150px] border border-hologram-blue/20 rounded-full absolute"></div>
                        <div className="w-[100px] h-[100px] border border-hologram-blue/20 rounded-full absolute"></div>
                        <div className="absolute w-full h-1 bg-transparent border-b border-hologram-blue/20 top-1/2"></div>
                        <div className="absolute h-full w-1 bg-transparent border-r border-hologram-blue/20 left-1/2"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-ping mb-2"></div>
                        <MapPin className="text-red-500 mb-2" />
                        <span className="font-mono text-xs text-hologram-blue tracking-widest uppercase">Prayagraj, IN</span>
                        <span className="text-[10px] text-gray-500 mt-1">LAT: 25.43 N / LON: 81.84 E</span>
                    </div>
                </motion.div>

                {/* Tile 4: Education (1x1) */}
                <motion.div
                    className="glass-panel col-span-1 rounded-3xl p-5 flex flex-col justify-between group"
                    whileHover={{ scale: 1.02 }}
                >
                    <div>
                        <Code2 className="text-neon-purple mb-3" />
                        <h4 className="text-white font-bold font-display text-lg leading-tight">United College of Engineering</h4>
                        <p className="text-xs text-gray-400 mt-1">B.Tech - CSE</p>
                    </div>

                    <div>
                        <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                            <span>PROGRESS</span>
                            <span>60%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-neon-purple shadow-[0_0_10px_#9D00FF]"
                                initial={{ width: 0 }}
                                whileInView={{ width: "60%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                        </div>
                        <p className="text-[10px] text-right text-neon-purple mt-1 font-mono">GRAD: 2027</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default BentoGrid;
