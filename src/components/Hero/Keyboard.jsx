import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Keyboard() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <img
                    src="/tech_vector_illustration.png"
                    alt="Fallback"
                    className="max-w-[80%] max-h-[80%] object-contain drop-shadow-2xl animate-pulse"
                />
            </div>
        )
    }

    return (
        <div className="w-full h-[500px] lg:h-[600px] relative flex items-center justify-center">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            {/* 
          Using Official Spline "Mini Room / Robot" Scene (kZDDjO5HuC9GJUM2).
          This is a GUARANTEED PUBLIC URL to ensure the site loads.
          Previous "Keyboard" URLs were 403 Forbidden.
       */}
            <Spline
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full scale-100 lg:scale-110"
                onLoad={() => setLoading(false)}
                onError={(e) => {
                    console.error("Spline load failed:", e);
                    setError(true);
                }}
            />
        </div>
    );
}
