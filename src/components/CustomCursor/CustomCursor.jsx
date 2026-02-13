import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { cn } from "../../lib/utils";
import { useMouse } from "../../hooks/use-mouse";
import { useMediaQuery } from "../../hooks/use-media-query";
import { useLocation } from "react-router-dom";
import './customCursor.scss';

// Gsap Ticker Function
function useTicker(callback, paused) {
  useEffect(() => {
    if (!paused && callback) {
      gsap.ticker.add(callback);
    }
    return () => {
      gsap.ticker.remove(callback);
    };
  }, [callback, paused]);
}

const EMPTY = {};
function useInstance(value = {}) {
  const ref = useRef(EMPTY);
  if (ref.current === EMPTY) {
    ref.current = typeof value === "function" ? value() : value;
  }
  return ref.current;
}

// Function for Mouse Move Scale Change (Velocity Squeezing)
function getScale(diffX, diffY) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  return Math.min(distance / 735, 0.35);
}

// Function For Mouse Movement Angle in Degrees
function getAngle(diffX, diffY) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

const CURSOR_DIAMETER = 48;

export default function CustomCursor({ isHovering }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // React Refs
  const arrowRef = useRef(null);
  const trailRef = useRef([]);

  // Save pos and velocity Objects
  const pos = useInstance(() => ({ x: 0, y: 0 }));
  const vel = useInstance(() => ({ x: 0, y: 0 }));
  const set = useInstance();

  // Trail state
  const [trail, setTrail] = useState(Array(15).fill({ x: 0, y: 0 }));

  // Set GSAP quick setter Values
  useLayoutEffect(() => {
    set.x = gsap.quickSetter(arrowRef.current, "x", "px");
    set.y = gsap.quickSetter(arrowRef.current, "y", "px");
    set.r = gsap.quickSetter(arrowRef.current, "rotate", "deg");
    set.sx = gsap.quickSetter(arrowRef.current, "scaleX");
    set.sy = gsap.quickSetter(arrowRef.current, "scaleY");
  }, []);

  // Animation Loop
  const loop = useCallback(() => {
    if (!set.x || !set.y) return;

    // Calculate angle based on velocity
    var rotation = getAngle(+vel.x, +vel.y);
    var scale = getScale(+vel.x, +vel.y);

    // General movement updates
    set.x(pos.x);
    set.y(pos.y);

    // Smooth rotation for arrow
    // Arrow points RIGHT (0 deg) by default.
    // If velocity is low, keep previous rotation or default to -45 (top-left ish)
    if (Math.abs(vel.x) > 0.5 || Math.abs(vel.y) > 0.5) {
      set.r(rotation);
    }

    // Trail updates
    setTrail(prev => {
      const newTrail = [...prev];
      newTrail.pop();
      newTrail.unshift({ x: pos.x, y: pos.y });
      return newTrail;
    });

  }, []);

  const [cursorMoved, setCursorMoved] = useState(false);
  const [isHoveringLocal, setIsHoveringLocal] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    const onMouseMove = (e) => {
      if (!cursorMoved) setCursorMoved(true);

      const x = e.clientX;
      const y = e.clientY;

      // Animate Position (Always Smooth)
      gsap.to(pos, {
        x: x,
        y: y,
        duration: 0.15, // Slightly looser for "flying" feel
        ease: "power2.out",
        onUpdate: () => {
          vel.x = x - pos.x;
          vel.y = y - pos.y;
        },
      });

      loop();
    };

    const onMouseOver = (e) => {
      const el = e.target;
      const isInteractive =
        el.tagName.toLowerCase() === 'a' ||
        el.tagName.toLowerCase() === 'button' ||
        el.closest('a') ||
        el.closest('button') ||
        el.classList.contains('cursor-pointer') ||
        window.getComputedStyle(el).cursor === 'pointer';

      if (isInteractive) {
        setIsHoveringLocal(true);
        gsap.to(arrowRef.current, {
          scale: 1.2,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      }
    };

    const onMouseOut = (e) => {
      setIsHoveringLocal(false);
      gsap.to(arrowRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, [isMobile, cursorMoved, loop]);

  useTicker(loop, !cursorMoved || isMobile);
  if (isMobile) return null;

  return (
    <>
      {/* Techy Trail - Squares for "digital" feel */}
      {trail.map((point, i) => (
        <div
          key={i}
          className="fixed left-0 top-0 z-[9998] pointer-events-none bg-hive-cyan"
          style={{
            left: point.x,
            top: point.y,
            width: 10 - i, // Tapering size
            height: 10 - i,
            transform: 'translate(-50%, -50%)', // Center
            opacity: (0.5 - (i * 0.05)), // Fading opacity
            transition: 'none', // Direct mapping
            borderRadius: '2px', // Square-ish
            boxShadow: `0 0 ${10 - i}px rgba(0, 229, 255, 0.5)` // Glow
          }}
        />
      ))}

      {/* Main Arrow Cursor */}
      <div
        ref={arrowRef}
        className={cn(
          "fixed left-0 top-0 z-[9999] pointer-events-none will-change-transform flex items-center justify-center",
          "translate-x-[-50%] translate-y-[-50%]"
        )}
        style={{
          width: 32,
          height: 32,
        }}
      >
        {/* Arrow Pointing RIGHT (0 degrees) for easier rotation math */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-[0_0_12px_rgba(0,229,255,1)]"
          style={{ transform: 'rotate(-45deg)' }} // Visual adjustment if needed, but logic uses 0=Right. Actually wait.
        // If I simply draw an arrow pointing right:
        // M2 12 L22 12 (Line) - No, real arrow shape.
        // <path d="M5 12H19M19 12L12 5M19 12L12 19" ... > // Simple arrow
        // Let's use a "Space Fighter" triangle pointing RIGHT.
        >
          <path d="M22 12L2 2L5 12L2 22L22 12Z" fill="#00E5FF" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </>
  );
}

