import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './customCursor.scss';
import { useLocation } from 'react-router-dom';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      // Follower with more delay/elasticity
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5, // Slower duration for trailing effect
        ease: 'back.out(1.2)'
      });
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    // Add listeners to interactive elements
    const addListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, .cursor-pointer');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    const removeListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, .cursor-pointer');
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };

    window.addEventListener('mousemove', moveCursor);
    addListeners();

    // Re-attach listeners on route change
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      removeListeners();
      observer.disconnect();
      document.body.style.cursor = 'auto'; // Restore cursor on cleanup
    };
  }, [location]);

  // Animation for hover state
  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (isHovering) {
      // Scale down dot
      gsap.to(cursor, { scale: 0.5, duration: 0.3 });
      // Scale up follower and make it opaque
      gsap.to(follower, {
        scale: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'transparent',
        mixBlendMode: 'difference',
        duration: 0.3
      });
    } else {
      // Reset
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'black',
        mixBlendMode: 'normal',
        duration: 0.3
      });
    }
  }, [isHovering]);

  return (
    <>
      <div ref={cursorRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
};

export default CustomCursor;