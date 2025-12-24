import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, User, Code2, Briefcase, FolderGit2, Mail } from 'lucide-react';
import { Link } from 'react-scroll'; // Assuming react-scroll for single page smooth scroll, or simple routing

// Standard Navbar items
const navItems = [
    { name: 'Home', icon: Home, to: 'home' },
    { name: 'About', icon: User, to: 'about' },
    { name: 'Skills', icon: Code2, to: 'skills' },
    { name: 'Experience', icon: Briefcase, to: 'experience' },
    { name: 'Projects', icon: FolderGit2, to: 'projects' },
    { name: 'Contact', icon: Mail, to: 'contact' },
];

const DockNavbar = () => {
    let mouseX = useMotionValue(Infinity);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-end gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl shadow-2xl">
            {navItems.map((item) => (
                <DockItem mouseX={mouseX} key={item.name} item={item} />
            ))}
        </div>
    );
};

const DockItem = ({ mouseX, item }) => {
    let ref = useRef(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square w-10 flex items-center justify-center rounded-full bg-white/10 border border-white/5 hover:bg-white/20 transition-colors cursor-pointer"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            whileTap={{ scale: 0.9 }}
        >
            <Link to={item.to} smooth={true} duration={500} offset={-50} className="w-full h-full flex items-center justify-center">
                <item.icon className="text-white w-1/2 h-1/2" />
            </Link>
        </motion.div>
    );
};

export default DockNavbar;
