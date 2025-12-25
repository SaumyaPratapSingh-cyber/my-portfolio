import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import Keyboard from "../components/Hero/Keyboard";

export default function HeroSection() {
    return (
        <div className="container mx-auto px-5 lg:px-28 min-h-[90vh] flex items-center relative overflow-hidden" id="home">
            <div className="flex justify-between items-center flex-col-reverse lg:flex-row w-full gap-12 relative z-10">

                <motion.div
                    className="lg:w-[50%]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >

                    <div className="text-3xl lg:text-6xl flex flex-col gap-3 font-extrabold text-black leading-tight">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                            className="text-lg lg:text-2xl font-semibold text-gray-500 mb-2"
                        >
                            Hello, I am
                        </motion.span>

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
                            style={{ display: 'inline-block', color: 'black' }}
                            repeat={Infinity}
                        />

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                            className="flex flex-col lg:flex-row gap-2 lg:gap-4 mt-2"
                        >
                            <span>Saumya Pratap</span>
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black"
                                style={{ WebkitTextStroke: "1px black" }}
                            >
                                Singh
                            </span>
                        </motion.h2>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                            className="text-xl lg:text-3xl mt-2 font-medium text-gray-600"
                        >
                            Based In <span className="text-black font-bold">India.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-gray-600 text-sm lg:text-lg mt-8 leading-relaxed max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Aspiring Software Engineer with a background in creating end-to-end applications. Adept at leveraging <span className="text-black font-bold">C++</span>, <span className="text-black font-bold">Python</span>, and <span className="text-black font-bold">cloud-native architectures (BaaS)</span> to build scalable and efficient systems.
                    </motion.p>

                    <motion.div
                        className="flex items-center gap-x-6 mt-10"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 150, delay: 0.8 }}
                    >
                        <SocialBtn href="mailto:saumyrajpoot666@gmail.com" icon={BiLogoGmail} />
                        <SocialBtn href="https://www.linkedin.com/in/saumya-pratap-singh-a27890287" icon={IoLogoLinkedin} />
                        <SocialBtn href="https://github.com/SaumyaPratapSingh-cyber" icon={BsGithub} />
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
        className="bg-white p-3 rounded-md border-2 border-black text-black text-xl lg:text-2xl hover:bg-black hover:text-white transition-all duration-300 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
        whileTap={{ scale: 0.95 }}
    >
        <Icon />
    </motion.a>
)
