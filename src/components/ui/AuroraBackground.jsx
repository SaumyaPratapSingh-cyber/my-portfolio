import React from "react";
import { cn } from "../../lib/utils";

export const AuroraBackground = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(
                "relative w-full min-h-screen bg-hive-black text-slate-950 transition-bg",
                className
            )}
            {...props}
        >
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Performant GPU-accelerated gradient orbs */}
                <div className="absolute inset-0 opacity-40 mix-blend-screen">
                    <div 
                        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.25)_0%,transparent_60%)] animate-pulse will-change-transform"
                        style={{ animationDuration: '8s' }}
                    ></div>
                    <div 
                        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(84,51,255,0.25)_0%,transparent_60%)] animate-pulse will-change-transform"
                        style={{ animationDuration: '10s', animationDelay: '2s' }}
                    ></div>
                    <div 
                        className="absolute top-[20%] left-[30%] w-[35vw] h-[35vw] rounded-full bg-[radial-gradient(circle,rgba(165,254,203,0.15)_0%,transparent_60%)] animate-pulse will-change-transform"
                        style={{ animationDuration: '12s', animationDelay: '4s' }}
                    ></div>
                </div>
            </div>
            {children}
        </div>
    );
};
