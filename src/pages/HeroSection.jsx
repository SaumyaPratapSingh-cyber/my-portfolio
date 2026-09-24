import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
    return (
        <div className="container mx-auto px-5 lg:px-28 min-h-[90vh] flex items-center relative overflow-hidden text-hive-white" id="home">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-grid-network opacity-20 pointer-events-none"></div>

            {/* Glowing Orbs for background */}
            <motion.div 
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-hive-cyan/20 rounded-full blur-[100px] -z-10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-hive-blue/20 rounded-full blur-[100px] -z-10"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="flex justify-between items-center flex-col-reverse lg:flex-row w-full gap-12 relative z-10">

                <motion.div
                    className="lg:w-[50%]"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="text-3xl lg:text-6xl flex flex-col gap-3 font-extrabold text-white leading-tight">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                            className="text-lg lg:text-2xl font-mono font-semibold text-hive-cyan mb-2"
                        >
                            Hello, I am
                        </motion.span>

                        {/* 1. Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                            className="text-4xl lg:text-7xl font-space font-bold text-white mt-2 mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                        >
                            Saumya Pratap Singh
                        </motion.h1>

                        {/* 2. Rotating Roles */}
                        <div className="text-2xl lg:text-4xl font-space font-semibold text-transparent bg-clip-text bg-gradient-to-r from-hive-blue to-hive-cyan h-[50px] lg:h-[60px] flex items-center">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    1000,
                                    'UI/UX Designer',
                                    1000,
                                    'Aspiring Software Engineer',
                                    1000,
                                    'Flutter Developer',
                                    1000,
                                    'Agentic AI Developer',
                                    1000,
                                    'End-to-End Solutions (BaaS)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>

                        {/* 3. Based In */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                            className="text-xl lg:text-3xl mt-4 font-mono font-medium text-gray-400"
                        >
                            Based In <span className="text-hive-cyan font-bold drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]">India.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-gray-400 text-sm lg:text-lg mt-8 leading-relaxed max-w-xl font-mono"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Aspiring Software Engineer with a background in creating end-to-end applications. Adept at leveraging <span className="text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">C++</span>, <span className="text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">Python</span>, and <span className="text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">cloud-native architectures (BaaS)</span> to build scalable and efficient systems.
                    </motion.p>

                    <motion.div
                        className="flex flex-col lg:flex-row items-center gap-6 mt-10"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 150, delay: 0.8 }}
                    >
                        <div className="flex items-center gap-x-6">
                            <SocialBtn href="mailto:saumyrajpoot666@gmail.com" icon={BiLogoGmail} />
                            <SocialBtn href="https://www.linkedin.com/in/saumya-pratap-singh-a27890287" icon={IoLogoLinkedin} />
                            <SocialBtn href="https://github.com/SaumyaPratapSingh-cyber" icon={BsGithub} />
                        </div>

                        <a
                            href="/SaumyaPratapSinghResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-hive-cyan/90 backdrop-blur-md text-black font-space font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(0,229,255,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] border border-hive-cyan/50"
                        >
                            Resume
                        </a>
                    </motion.div>
                </motion.div>

                {/* Animated Code Mockup / Visualizer */}
                <motion.div
                    className="lg:w-[50%] w-full h-[400px] lg:h-[500px] flex justify-center items-center relative perspective-[1000px]"
                    initial={{ opacity: 0, x: 50, rotateY: -20, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <motion.div 
                        className="w-full max-w-lg h-full max-h-[400px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,123,255,0.15)] flex flex-col overflow-hidden relative z-10"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        {/* Terminal Header */}
                        <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                            <div className="ml-auto text-xs font-mono text-gray-400">dev.jsx</div>
                        </div>
                        
                        {/* Terminal Content */}
                        <div className="p-5 font-mono text-sm lg:text-base flex flex-col gap-3 relative h-full">
                            {/* Animated Code Lines */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="flex gap-2 text-hive-cyan"
                            >
                                <span className="text-hive-blue">const</span> 
                                <span className="text-white">developer</span> 
                                <span className="text-hive-blue">=</span> 
                                <span className="text-yellow-400">{"{"}</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                                className="pl-6 flex gap-2 flex-wrap"
                            >
                                <span className="text-hive-cyan">name:</span> 
                                <span className="text-green-400">"Saumya Pratap Singh"</span><span className="text-white">,</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.4, duration: 0.5 }}
                                className="pl-6 flex gap-2 flex-wrap"
                            >
                                <span className="text-hive-cyan">skills:</span> 
                                <span className="text-purple-400">["React", "Node.js", "C++", "Python"]</span><span className="text-white">,</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.6, duration: 0.5 }}
                                className="pl-6 flex gap-2"
                            >
                                <span className="text-hive-cyan">passionate:</span> 
                                <span className="text-orange-400">true</span><span className="text-white">,</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.8, duration: 0.5 }}
                                className="flex gap-2"
                            >
                                <span className="text-yellow-400">{"}"}</span><span className="text-white">;</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 2.2, duration: 0.5 }}
                                className="mt-4 flex gap-2"
                            >
                                <span className="text-gray-500">{">"}</span>
                                <motion.span 
                                    className="text-white"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                >_</motion.span>
                            </motion.div>

                            {/* Floating decorative elements */}
                            <motion.div 
                                className="absolute -right-4 bottom-10 w-20 h-20 bg-hive-cyan/20 rounded-full blur-xl"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.div 
                                className="absolute -left-4 top-10 w-24 h-24 bg-hive-blue/20 rounded-full blur-xl"
                                animate={{ scale: [1.5, 1, 1.5], opacity: [0.8, 0.5, 0.8] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

const SocialBtn = ({ href, icon: Icon }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="relative group bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10 text-hive-white text-xl lg:text-2xl hover:bg-hive-cyan hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] hover:-translate-y-1"
        whileTap={{ scale: 0.95 }}
    >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-hive-cyan/20 to-hive-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Icon className="relative z-10" />
    </motion.a>
)
