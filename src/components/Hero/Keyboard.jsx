import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Keyboard() {
    return (
        <div className="w-full h-[500px] lg:h-[600px] relative flex items-center justify-center">
            {/* Loading overlay or placeholder could go here */}
            <Spline
                scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                className="w-full h-full scale-100 lg:scale-110"
            />
        </div>
    );
}
