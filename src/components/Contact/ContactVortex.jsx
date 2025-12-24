import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Send } from 'lucide-react';

const MagneticButton = ({ children, className }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 }); // Magnetic strength
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const springConfig = { type: "spring", stiffness: 150, damping: 15, mass: 0.1 };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={position}
            transition={springConfig}
            className={className}
        >
            {children}
        </motion.button>
    );
};

const ContactVortex = () => {
    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden py-20">
            {/* Vortex Animation Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[800px] h-[800px] bg-gradient-to-r from-neon-purple/20 via-neon-cyan/20 to-neon-pink/20 rounded-full blur-[100px] animate-spin-slow opacity-50" style={{ animationDuration: '20s' }}></div>
                <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-reverse-slow opacity-30"></div>
                <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-spin-slow opacity-40"></div>
            </div>

            <div className="relative z-10 glass-panel p-10 rounded-3xl w-full max-w-lg mx-4 text-center border-t border-t-white/20">
                <h2 className="text-4xl font-display font-bold mb-2">Let's <span className="text-neon-cyan">Connect</span></h2>
                <p className="text-gray-400 mb-8">Have a project in mind? Warp into my inbox.</p>

                <form className="space-y-6 text-left">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300 ml-1">Name</label>
                        <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan focus:bg-black/60 transition-colors text-white" placeholder="John Doe" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300 ml-1">Email</label>
                        <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan focus:bg-black/60 transition-colors text-white" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300 ml-1">Message</label>
                        <textarea rows="4" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan focus:bg-black/60 transition-colors text-white resize-none" placeholder="Your message..."></textarea>
                    </div>

                    <MagneticButton className="w-full py-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-xl font-bold text-white shadow-lg hover:shadow-neon-cyan/50 transition-shadow flex items-center justify-center gap-2">
                        Send Message <Send size={18} />
                    </MagneticButton>
                </form>
            </div>
        </section>
    );
};

export default ContactVortex;
