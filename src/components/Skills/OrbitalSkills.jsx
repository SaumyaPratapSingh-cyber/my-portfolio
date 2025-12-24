import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { skills as skillData } from "../../constants";

const OrbitalSkills = () => {
    const allSkills = useMemo(() => skillData.flatMap(category => category.items), []);
    const numSkills = allSkills.length;
    const [activeSkill, setActiveSkill] = useState(null);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        let animId;
        const animate = () => {
            if (!activeSkill) {
                setRotation(r => r + 0.05); // Speed of rotation
            }
            animId = requestAnimationFrame(animate);
        };
        animId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animId);
    }, [activeSkill]);

    const getPosition = (index, total) => {
        const angle = (index / total) * 2 * Math.PI + (rotation * Math.PI / 180);
        const radius = 280; // Radius of orbit
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius
        };
    };

    return (
        <section className="min-h-screen py-20 flex flex-col items-center justify-center overflow-hidden relative">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 z-10">
                My <span className="text-neon-purple">Arsenal</span>
            </h2>

            <div className="relative w-[600px] h-[600px] flex items-center justify-center">
                {/* Core - The Sun/Center */}
                <div className="absolute w-32 h-32 rounded-full bg-neon-purple/20 blur-[50px] animate-pulse" />
                <div className="absolute w-24 h-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center z-10">
                    <span className="font-display font-bold text-xl tracking-wider">SKILLS</span>
                </div>

                {/* Orbit Rings */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow w-full h-full" style={{ animationDuration: '30s' }} />
                <div className="absolute inset-[100px] rounded-full border border-white/5 animate-spin-slow-reverse w-[400px] h-[400px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '20s' }} />

                {/* Orbiting Skills */}
                {allSkills.map((skill, index) => {
                    const { x, y } = getPosition(index, numSkills);
                    const isActive = activeSkill?.name === skill.name;
                    const isDimmed = activeSkill && !isActive;

                    return (
                        <motion.div
                            key={skill.name}
                            className={`absolute flex items-center justify-center p-3 rounded-full cursor-pointer transition-all duration-300
                ${isActive ? 'z-50 scale-125 bg-white/10 border-neon-cyan shadow-[0_0_30px_rgba(0,243,255,0.5)]' : 'z-10 bg-white/5 border-white/10'}
                border backdrop-blur-md group
              `}
                            style={{ x, y }}
                            initial={false}
                            animate={{ opacity: isDimmed ? 0.2 : 1, scale: isActive ? 1.5 : 1 }}
                            onMouseEnter={() => setActiveSkill(skill)}
                            onMouseLeave={() => setActiveSkill(null)}
                        >
                            <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain pointer-events-none" />

                            {/* Tooltip */}
                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 20 }}
                                    className="absolute top-full mt-2 px-3 py-1 rounded-lg bg-black/80 border border-white/10 text-xs whitespace-nowrap"
                                >
                                    {skill.name}
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default OrbitalSkills;
