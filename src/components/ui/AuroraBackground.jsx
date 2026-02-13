import React from "react";
import { cn } from "../../lib/utils";

export const AuroraBackground = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(
                "relative w-full min-h-screen text-slate-950 transition-bg",
                className
            )}
            {...props}
        >
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className={cn(
                        `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#00E5FF_10%,#5433FF_20%,#00E5FF_30%,#A5FECB_40%,#5433FF_50%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            pointer-events-none
            absolute -inset-[10px] opacity-100 will-change-transform animate-breathe`
                    )}
                ></div>

                {/* Secondary subtle blurs for depth */}
                <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-hive-cyan/10 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-hive-blue/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
            </div>
            {children}
        </div>
    );
};
