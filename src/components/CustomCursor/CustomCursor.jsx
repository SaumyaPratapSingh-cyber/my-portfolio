import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { cn } from '../../lib/utils';
import { useMouse } from '../../hooks/use-mouse';
import { useMediaQuery } from '../../hooks/use-media-query';
import './customCursor.scss';

const CustomCursor = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const trailsRef = useRef([]);
  
  // Track mouse coordinates directly in refs to avoid state re-renders
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef(Array(8).fill(null).map(() => ({ x: 0, y: 0 })));

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const onTick = () => {
      // Main cursor update
      if (cursorRef.current) {
        gsap.set(cursorRef.current, {
          x: mouse.current.x,
          y: mouse.current.y,
        });
      }

      // Trail update
      let prev = mouse.current;
      trailsRef.current.forEach((trail, index) => {
        if (!trail) return;
        
        // Easing factor creates the trail delay effect
        const easing = 0.35;
        const current = delayedMouse.current[index];
        
        current.x += (prev.x - current.x) * easing;
        current.y += (prev.y - current.y) * easing;
        
        gsap.set(trail, {
          x: current.x,
          y: current.y,
        });
        
        prev = current;
      });
    };

    gsap.ticker.add(onTick);

    return () => {
      gsap.ticker.remove(onTick);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Main Cursor (Arrow with cyan glow) */}
      <div
        ref={cursorRef}
        className={cn(
          "custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform flex items-center justify-center transition-transform duration-200",
          isHovering ? "scale-150" : "scale-100"
        )}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]"
        >
          <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          <path d="m13 13 6 6" />
        </svg>
      </div>

      {/* Trails (Reduced to 8) */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailsRef.current[i] = el)}
          className="custom-cursor-trail fixed top-0 left-0 w-2 h-2 rounded-full bg-hive-cyan pointer-events-none z-[9998] will-change-transform opacity-50"
          style={{
            transform: "translate(-50%, -50%)",
            opacity: 1 - i * 0.1,
            scale: 1 - i * 0.05,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
