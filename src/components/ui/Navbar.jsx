import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Home, User, Briefcase, Mail, Cpu, Layers, Code } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-scroll';

// Magnetic Item Component
const MagneticItem = ({ children, className }) => {
    const ref = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 2; // Multiplier for stronger effect
        const y = (clientY - (top + height / 2)) * 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const x = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
    const y = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className={cn("relative", className)}
        >
            {children}
        </motion.div>
    );
};

const Navbar = () => {
    const navItems = [
        { name: 'Home', icon: <Home size={20} />, to: 'home' },
        { name: 'About', icon: <User size={20} />, to: 'about' },
        { name: 'Experience', icon: <Briefcase size={20} />, to: 'experience' },
        { name: 'Skills', icon: <Cpu size={20} />, to: 'skills' },
        { name: 'Projects', icon: <Code size={20} />, to: 'projects' },
        { name: 'Contact', icon: <Mail size={20} />, to: 'contact' }, // Note: Contact page doesn't have an ID yet in my previous step, but I'll add it.
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-center gap-2 px-4 py-3 bg-hive-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-hive-blue/10 max-w-[95vw] overflow-x-auto no-scrollbar"
            >
                {navItems.map((item, index) => (
                    <MagneticItem key={index} className="group">
                        <Link
                            to={item.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active-nav-item"
                            className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 cursor-pointer text-gray-400 hover:text-hive-cyan hover:bg-white/10 hover:scale-150 hover:-translate-y-2"
                        >
                            {item.icon}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-hive-black border border-white/10 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {item.name}
                            </span>
                            {/* Active Indicator (Dot) - handled by custom css or conditional rendering if we had state, but scroll spy adds class */}
                        </Link>
                    </MagneticItem>
                ))}
            </motion.div>
        </div>
    );
};

export default Navbar;
