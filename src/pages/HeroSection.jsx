import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import Keyboard from "../components/Hero/Keyboard";

export default function HeroSection() {
    return (
        <div className="container mx-auto px-5 lg:px-28 min-h-[90vh] flex items-center relative overflow-hidden bg-hive-black text-hive-white" id="home">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-grid-network opacity-20 pointer-events-none"></div>

            <div className="flex justify-between items-center flex-col-reverse lg:flex-row w-full gap-12 relative z-10">

                <motion.div
                    className="lg:w-[50%]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >

                    <div className="text-3xl lg:text-6xl flex flex-col gap-3 font-extrabold text-white leading-tight">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                            className="text-lg lg:text-2xl font-mono font-semibold text-hive-cyan mb-2"
                        >
                            Hello, I am
                        </motion.span>

                        {/* 1. Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                            className="text-4xl lg:text-7xl font-space font-bold text-white mt-2 mb-4 leading-tight"
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
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                            className="text-xl lg:text-3xl mt-4 font-mono font-medium text-gray-400"
                        >
                            Based In <span className="text-hive-cyan font-bold">India.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-gray-400 text-sm lg:text-lg mt-8 leading-relaxed max-w-xl font-mono"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Aspiring Software Engineer with a background in creating end-to-end applications. Adept at leveraging <span className="text-white font-bold">C++</span>, <span className="text-white font-bold">Python</span>, and <span className="text-white font-bold">cloud-native architectures (BaaS)</span> to build scalable and efficient systems.
                    </motion.p>

                    <motion.div
                        className="flex flex-col lg:flex-row items-center gap-6 mt-10"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
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
                            className="px-8 py-3 bg-hive-cyan text-black font-space font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 rounded shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                        >
                            Resume
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="lg:w-[50%] w-full h-[500px] flex justify-center items-center"
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <Keyboard />
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
        className="bg-black/50 p-3 rounded-md border border-hive-cyan/30 text-hive-cyan text-xl lg:text-2xl hover:bg-hive-cyan hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.1)] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:-translate-y-1"
        whileTap={{ scale: 0.95 }}
    >
        <Icon />
    </motion.a>
)
