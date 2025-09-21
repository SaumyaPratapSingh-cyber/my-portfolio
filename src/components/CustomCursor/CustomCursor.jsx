import React, { useEffect, useRef } from 'react';
import './customCursor.scss';

const CustomCursor = () => {
  const dotCount = 3; // The number of dots in the trail
  const dotRefs = useRef(Array.from({ length: dotCount }, () => React.createRef()));
  const dots = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    dots.current = dotRefs.current.map(() => ({ x: 0, y: 0, vx: 0, vy: 0 }));

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId;

    const animateDots = () => {
      let prevDot = { x: mouse.current.x, y: mouse.current.y };

      dots.current.forEach((dot, index) => {
        const currentDotRef = dotRefs.current[index].current;
        if (currentDotRef) {
          const dx = prevDot.x - dot.x;
          const dy = prevDot.y - dot.y;
          
          dot.vx += dx * 0.05; // Spring physics
          dot.vy += dy * 0.05;
          dot.vx *= 0.8;      // Damping
          dot.vy *= 0.8;
          dot.x += dot.vx;
          dot.y += dot.vy;

          currentDotRef.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
          prevDot = dot;
        }
      });

      animationFrameId = requestAnimationFrame(animateDots);
    };

    animationFrameId = requestAnimationFrame(animateDots);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="gooey-cursor-container">
      {dotRefs.current.map((ref, i) => (
        <div className="cursor-dot" key={i} ref={ref} />
      ))}
    </div>
  );
};

export default CustomCursor;