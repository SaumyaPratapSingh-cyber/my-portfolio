import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeScreen = ({ onComplete }) => {
    const [textIndex, setTextIndex] = useState(0);
    const texts = [
        "INITIALIZING SYSTEM...",
        "SAUMYA PRATAP SINGH",
        "WELCOME"
    ];

    useEffect(() => {
        // Sequence timing
        const timeouts = [
            setTimeout(() => setTextIndex(1), 1200), // Show Name after 1.2s
            setTimeout(() => setTextIndex(2), 2500), // Show Welcome after 2.5s
            setTimeout(() => onComplete(), 3500),    // End animation after 3.5s
        ];

        return () => timeouts.forEach((t) => clearTimeout(t));
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden"
            exit={{ opacity: 0, y: -50 }} // Slide up and fade out
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Background Tech Effects - Monochrome */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-black to-black pointer-events-none"></div>

            {/* Animated Grid Lines */}
            <div className="absolute inset-0 w-full h-full opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

            <div className="relative z-10 flex flex-col items-center">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={textIndex}
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-black tracking-widest text-white text-center px-4"
                    >
                        {texts[textIndex]}
                    </motion.h1>
                </AnimatePresence>

                {/* Loading Bar - Black & White */}
                <motion.div
                    className="mt-8 h-1 bg-gray-900 rounded-full overflow-hidden w-64 md:w-96 border border-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.div
                        className="h-full bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.2, ease: "easeInOut" }}
                    />
                </motion.div>

                {/* Terminal Text subtle */}
                <motion.div
                    className="mt-4 font-mono text-xs text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    _
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WelcomeScreen;
