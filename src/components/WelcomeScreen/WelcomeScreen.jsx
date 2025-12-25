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
            {/* Background Tech Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none"></div>

            {/* Animated Grid Lines */}
            <div className="absolute inset-0 w-full h-full opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

            <div className="relative z-10 flex flex-col items-center">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={textIndex}
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 text-center px-4"
                    >
                        {texts[textIndex]}
                    </motion.h1>
                </AnimatePresence>

                {/* Loading Bar */}
                <motion.div
                    className="mt-8 h-1 bg-gray-800 rounded-full overflow-hidden w-64 md:w-96"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
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
