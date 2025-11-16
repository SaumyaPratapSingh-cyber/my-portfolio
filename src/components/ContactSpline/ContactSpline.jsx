import Spline from '@splinetool/react-spline'; // Correct import for React
import { Suspense } from 'react';
import './ContactSpline.scss';

export default function ContactSpline() {
  return (
    <div className="contact-spline-wrapper">
      <Suspense fallback={<div className="loader">Loading 3D...</div>}>
        <Spline
          scene="https://prod.spline.design/WoK20BPxo9UhQHHo/scene.splinecode" 
        />
      </Suspense>
    </div>
  );
}