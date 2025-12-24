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

const CustomCursor = () => {
  const location = useLocation();
  const isLoading = false;
  const isMobile = useMediaQuery("(max-width: 768px)");

  // React Refs
  const jellyRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Save pos and velocity Objects
  const pos = useInstance(() => ({ x: 0, y: 0 }));
  const vel = useInstance(() => ({ x: 0, y: 0 }));
  const set = useInstance();

  // Set GSAP quick setter Values
  useLayoutEffect(() => {
    set.x = gsap.quickSetter(jellyRef.current, "x", "px");
    set.y = gsap.quickSetter(jellyRef.current, "y", "px");
    set.r = gsap.quickSetter(jellyRef.current, "rotate", "deg");
    // We will use CSS variable or direct scale for hover expansion to avoid conflict
    // But for the jelly effect, we typically set scaleX and scaleY
    set.sx = gsap.quickSetter(jellyRef.current, "scaleX");
    set.sy = gsap.quickSetter(jellyRef.current, "scaleY");
  }, []);

  // Animation Loop
  const loop = useCallback(() => {
    if (!set.sx || !set.sy || !set.r) return;

    // Calculate angle and scale based on velocity
    var rotation = getAngle(+vel.x, +vel.y);
    var scale = getScale(+vel.x, +vel.y);

    // General movement updates
    set.x(pos.x);
    set.y(pos.y);
    set.r(rotation);

    // If hovering, we set a Fixed Large Scale. 
    // If NOT hovering, we apply the "Jelly" squeeze based on velocity.
    if (isHovering) {
      // When hovering, we override the jelly effect with a fixed expansion
      // We do this via GSAP in the event listener, but we ensure the loop doesn't fight it
      // actually, simpler to let GSAP handle the 'scale' tween in the event listener
      // and only update X/Y/Rotation here.
    } else {
      // Normal Jelly Physics
      set.sx(1 + scale);
      set.sy(1 - scale * 2);
    }

  }, [isHovering]); // Re-run loop definition if hover state changes

  const [cursorMoved, setCursorMoved] = useState(false);

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
        duration: 0.6, // Slightly tighter follow
        ease: "power2.out",
        onUpdate: () => {
          vel.x = (x - pos.x) * 1.2;
          vel.y = (y - pos.y) * 1.2;
        },
      });

      loop();
    };

    const onMouseOver = (e) => {
      const el = e.target;
      // Robust check for interactive elements
      const isInteractive =
        el.tagName.toLowerCase() === 'a' ||
        el.tagName.toLowerCase() === 'button' ||
        el.closest('a') ||
        el.closest('button') ||
        el.classList.contains('cursor-pointer') ||
        window.getComputedStyle(el).cursor === 'pointer';

      if (isInteractive) {
        setIsHovering(true);
        // GPU Transform Scale instead of Width/Height
        gsap.to(jellyRef.current, {
          scale: 2.5, // Scale up
          duration: 0.3,
          ease: "back.out(1.7)", // Nice pop effect
          backgroundColor: "white",
          overwrite: "auto" // Ensure we override any existing tweens
        });
      }
    };

    const onMouseOut = (e) => {
      const el = e.target;
      const isInteractive =
        el.tagName.toLowerCase() === 'a' ||
        el.tagName.toLowerCase() === 'button' ||
        el.closest('a') ||
        el.closest('button') ||
        el.classList.contains('cursor-pointer') ||
        window.getComputedStyle(el).cursor === 'pointer';

      if (isInteractive) {
        setIsHovering(false);
        // Return to normal scale
        gsap.to(jellyRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          backgroundColor: "white",
          overwrite: "auto"
        });
      }
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
    <div
      ref={jellyRef}
      className={cn(
        "fixed left-0 top-0 rounded-full z-[9999] pointer-events-none will-change-transform flex items-center justify-center",
        "translate-x-[-50%] translate-y-[-50%]"
      )}
      style={{
        width: CURSOR_DIAMETER,
        height: CURSOR_DIAMETER,
        backgroundColor: "white",
        mixBlendMode: "difference",
      }}
    >
      {/* Explicitly hiding the inner dot on hover using opacity for performance */}
      <div className={`relative w-[30%] h-[15%] bg-black rounded-t-full rotate-180 transition-opacity duration-200 ${isHovering ? 'opacity-0' : 'opacity-100'}`}></div>
    </div>
  );
}

export default CustomCursor;