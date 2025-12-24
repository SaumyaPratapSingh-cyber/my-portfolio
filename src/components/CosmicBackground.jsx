import React, { useCallback, useEffect, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const CosmicBackground = () => {
    const [init, setInit] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Initialize particles
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });

        const handleMouseMove = (e) => {
            // Smoothly animate to new mouse position for the gradient
            animate(mouseX, e.clientX, { duration: 0.5, ease: "easeOut" });
            animate(mouseY, e.clientY, { duration: 0.5, ease: "easeOut" });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    // Nebula gradient style
    const backgroundStyle = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(176, 38, 255, 0.15), rgba(0, 243, 255, 0.15), transparent 80%)`;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-deep-space">
            {/* Nebula Gradient Layer */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ background: backgroundStyle }}
            />

            {/* Starfield Layer */}
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    className="absolute inset-0 z-0"
                    options={{
                        fullScreen: { enable: false }, // we want it contained in this div
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "bubble",
                                },
                            },
                            modes: {
                                bubble: {
                                    distance: 200,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 6,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: false, // Stars usually don't have links in a "deep space" look, but can enable if desired
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "out",
                                },
                                random: true,
                                speed: 0.5,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 100, // Star count
                            },
                            opacity: {
                                value: { min: 0.1, max: 0.8 },
                                animation: {
                                    enable: true,
                                    speed: 1,
                                    sync: false
                                }
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 0.5, max: 2 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </div>
    );
};

export default CosmicBackground;
