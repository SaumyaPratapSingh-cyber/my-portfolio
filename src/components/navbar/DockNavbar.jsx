import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, User, Code2, Briefcase, FolderGit2, Mail, FileText } from 'lucide-react';
import { Link } from 'react-scroll';

const DockNavbar = () => {
    let mouseX = useMotionValue(Infinity);

    const navItems = [
        { name: 'Home', icon: Home, to: 'home' },
        { name: 'About', icon: User, to: 'about' },
        { name: 'Projects', icon: FolderGit2, to: 'projects' },

        { name: 'Contact', icon: Mail, to: 'contact' },
    ];

    const socialItems = [
        { name: 'LinkedIn', img: '/linkedin.png', href: 'https://www.linkedin.com/in/saumya-pratap-singh-a27890287' },
        { name: 'GitHub', img: '/github-icon.png', href: 'https://github.com/SaumyaPratapSingh-cyber' },
        { name: 'Gmail', img: '/gmail.png', href: 'mailto:saumyrajpoot666@gmail.com' },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-end gap-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-xxl px-4 py-3 shadow-[0_0_30px_rgba(46,185,223,0.1)]">
            {/* Primary Nav */}
            {navItems.map((item) => (
                <DockItem mouseX={mouseX} key={item.name}>
                    <Link to={item.to} smooth={true} duration={500} offset={-50} className="w-full h-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                        <item.icon size={22} strokeWidth={1.5} />
                    </Link>
                </DockItem>
            ))}

            {/* Resume Button - Red Highlight as requested */}
            <DockItem mouseX={mouseX}>
                <a href="/SaumyaPratapSinghResume.pdf" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center text-white bg-red-500/20 rounded-full border border-red-500/50 hover:bg-red-500 hover:border-red-500 transition-all">
                    <FileText size={22} strokeWidth={1.5} />
                </a>
            </DockItem>

            {/* Separator */}
            <div className="w-[1px] h-8 bg-white/10 mx-1 self-center"></div>

            {/* Socials */}
            {socialItems.map((item) => (
                <DockItem mouseX={mouseX} key={item.name}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors">
                        <img src={item.img} alt={item.name} className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all" />
                    </a>
                </DockItem>
            ))}
        </div>
    );
};

const DockItem = ({ mouseX, children }) => {
    let ref = useRef(null);
    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [50, 90, 50]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square flex items-center justify-center rounded-full bg-white/5 border border-white/5 cursor-pointer relative"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
        >
            {children}
        </motion.div>
    );
};

export default DockNavbar;
