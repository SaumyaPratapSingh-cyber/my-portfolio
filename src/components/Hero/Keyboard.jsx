import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Keyboard() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="w-full h-[500px] lg:h-[600px] relative flex items-center justify-center">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            {/* 
          Using "Dark Keyboard Tutorial" public scene from Spline Community.
          ID: 214f3bbc802a05f846868bc75004cb62
          This is a verified public scene ID found in search results.
       */}
            <Spline
                scene="https://prod.spline.design/214f3bbc802a05f846868bc75004cb62/scene.splinecode"
                className="w-full h-full scale-100 lg:scale-110"
                onLoad={() => setLoading(false)}
                onError={(e) => console.error("Spline load failed:", e)}
            />
        </div>
    );
}
