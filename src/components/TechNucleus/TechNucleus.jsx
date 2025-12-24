import React, { Suspense } from 'react';

// Lazy load Spline to avoid blocking main thread
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const TechNucleus = () => {
    return (
        <div className="w-full h-full relative z-10">
            <Suspense
                fallback={
                    <div className="w-full h-full flex items-center justify-center">
                        {/* Simple pulsing loader for the 3D element */}
                        <div className="w-16 h-16 rounded-full border-4 border-black/10 border-t-black animate-spin"></div>
                    </div>
                }
            >
                {/* User's Specific Spline Scene */}
                <Spline scene="https://prod.spline.design/cac7c362-6848-43f5-a163-b13c189a0c39/scene.splinecode" />
            </Suspense>
        </div>
    );
};

export default TechNucleus;
