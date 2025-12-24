import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, User, Code2, Briefcase, FolderGit2, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const DockNavbar = () => {
    let mouseX = useMotionValue(Infinity);

    const navItems = [
        { name: 'Home', icon: Home, to: 'home', type: 'scroll' },
        { name: 'About', icon: User, to: 'about', type: 'scroll' },
        { name: 'Skills', icon: Code2, to: 'skills', type: 'scroll' },
        { name: 'Work', icon: Briefcase, to: 'experience', type: 'scroll' },
        { name: 'Projects', icon: FolderGit2, to: 'projects', type: 'scroll' },
        { name: 'Contact', icon: Mail, to: 'contact', type: 'scroll' },
    ];

    const socialItems = [
        { name: 'LinkedIn', img: '/linkedin.png', href: 'https://www.linkedin.com/in/saumya-pratap-singh-a27890287' },
        { name: 'GitHub', img: '/github-icon.png', href: 'https://github.com/SaumyaPratapSingh-cyber' },
        { name: 'Gmail', img: '/gmail.png', href: 'mailto:saumyrajpoot666@gmail.com' },
        { name: 'Google', img: '/google.png', href: 'https://developers.google.com/profile/u/117396655825602690739' },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-4 w-full px-4 pointer-events-none">
            {/* Resume Button - Floating separately above or part of the layou? Let's put it top right normally, but user asked for "where is resume button". 
                 Let's make a clear, distinct button for it. */}

            {/* Main Dock */}
            <div className="flex items-end gap-3 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] pointer-events-auto ring-1 ring-white/5">
                {/* Navigation Links */}
                {navItems.map((item) => (
                    <DockItem mouseX={mouseX} key={item.name}>
                        <Link to={item.to} smooth={true} duration={700} offset={-50} className="w-full h-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                            <item.icon size={20} strokeWidth={1.5} />
                        </Link>
                    </DockItem>
                ))}

                {/* Divider */}
                <div className="w-[1px] h-8 bg-white/10 mx-2 self-center"></div>

                {/* Social Links using Images */}
                {socialItems.map((item) => (
                    <DockItem mouseX={mouseX} key={item.name}>
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center p-2">
                            <img src={item.img} alt={item.name} className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                        </a>
                    </DockItem>
                ))}
            </div>
        </div>
    );
};

// Separate Resume Button Component to place comfortably on screen (Top Right usually standard for Portfolios)
export const TopBar = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-[100] px-6 py-6 flex justify-between items-center pointer-events-none">
            <div className="pointer-events-auto">
                {/* Logo or Name */}
                <span className="font-display font-bold text-xl tracking-tighter mix-blend-difference text-white">
                    SAUMYA<span className="text-acid-green">.</span>DEV
                </span>
            </div>

            <a
                href="/SaumyratapSingh_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto group relative px-6 py-2.5 bg-white text-black rounded-full font-semibold font-display text-sm overflow-hidden flex items-center gap-2 hover:bg-acid-green transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
                <span className="relative z-10 flex items-center gap-2">
                    Resume <span className="text-xs opacity-60 group-hover:translate-x-1 transition-transform">↗</span>
                </span>
            </a>
        </div>
    )
}

const DockItem = ({ mouseX, children }) => {
    let ref = useRef(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [45, 85, 45]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer relative overflow-hidden group"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
        >
            {children}
            {/* Glossy reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
    );
};

export default DockNavbar;
