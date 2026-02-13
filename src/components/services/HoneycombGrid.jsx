import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Globe, Shield, Zap } from 'lucide-react';
import { cn } from '../../lib/utils'; // Correct path

const services = [
    { title: 'Web Development', icon: <Globe size={32} />, description: 'High-performance web applications.' },
    { title: 'Mobile Apps', icon: <Smartphone size={32} />, description: 'Native and cross-platform mobile solutions.' },
    { title: 'Backend Systems', icon: <Server size={32} />, description: 'Scalable and secure server architectures.' },
    { title: 'Cyber Security', icon: <Shield size={32} />, description: 'Protecting your digital assets.' },
    { title: 'UI/UX Design', icon: <Code size={32} />, description: 'Intuitive and engaging user interfaces.' },
    { title: 'Consulting', icon: <Zap size={32} />, description: 'Strategic technical guidance.' },
];

const HoneycombItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative w-64 h-72 flex items-center justify-center group"
        >
            <div className="absolute inset-0 bg-hive-black border border-hive-blue/30 hover:border-hive-cyan/80 transition-colors duration-300 clip-hexagon"></div>
            <div className="absolute inset-[2px] bg-hive-black/90 clip-hexagon flex flex-col items-center justify-center p-6 text-center z-10">
                <div className="text-hive-blue mb-4 group-hover:text-hive-cyan transition-colors duration-300 transform group-hover:scale-110">
                    {item.icon}
                </div>
                <h3 className="text-xl font-bold font-space text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm font-mono">{item.description}</p>
            </div>
        </motion.div>
    );
};

const HoneycombGrid = () => {
    return (
        <section className="py-20 bg-hive-black relative overflow-hidden">
            {/* Hexagon Clip Path Definition in global CSS (or inline here if we want to be self-contained but clean)
                We use a utility class 'clip-hexagon' defined in index.css (I'll need to add it)
             */}
            <style>{`
                .clip-hexagon {
                    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-4">Our <span className="text-hive-cyan">Arsenal</span></h2>
                    <p className="text-gray-400 font-mono">Precision-engineered solutions for complex challenges.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-4">
                    {services.map((service, index) => (
                        <div key={index} className={cn("mt-0", index % 2 !== 0 ? "md:mt-12" : "")}>
                            {/* Staggered grid logic: rudimentary manual staggering. A real honeycomb grid is harder with flexbox. 
                                We'll use a flex wrap with margins to simulate it or a CSS grid with specific placement.
                                For now, a flex row with offsets works okay for "honeycomb-like". 
                            */}
                            <HoneycombItem item={service} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HoneycombGrid;
