import React from 'react';
import { ToggleLeft, ToggleRight, Github, Twitter, Linkedin } from 'lucide-react';
import { cn } from '../../lib/utils'; // Corrected path relative to components/ui

const Footer = () => {
    return (
        <footer className="w-full py-8 px-4 bg-hive-black border-t border-white/5 relative z-40">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand / Copyright */}
                <p className="text-gray-500 text-sm font-mono">
                    @ 2026 Saumya Pratap Singh Portfolio All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    {[
                        { icon: <Github size={18} />, href: "https://github.com/SaumyaPratapSingh-cyber" },
                        { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/saumya-pratap-singh-a27890287" },
                    ].map((btn, i) => (
                        <a
                            key={i}
                            href={btn.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-hive-cyan transition-colors duration-300"
                        >
                            {btn.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
