import React from "react";
import { cn } from "../../lib/utils";

export const AuroraBackground = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(
                "relative w-full min-h-screen bg-black",
                className
            )}
            {...props}
        >
            {/* Subtle animated dot grid - very faint, does NOT obscure content */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle, #00E5FF 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />
            {children}
        </div>
    );
};
