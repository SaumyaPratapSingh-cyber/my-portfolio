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

// Function for Mouse Move Scale Change
function getScale(diffX, diffY) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  return Math.min(distance / 735, 0.35);
}

// Function For Mouse Movement Angle in Degrees
function getAngle(diffX, diffY) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

const CURSOR_DIAMETER = 48; // Bigger size as requested

const CustomCursor = () => {
  const location = useLocation();
  const isLoading = false;

  const isMobile = useMediaQuery("(max-width: 768px)");

  // React Refs for Jelly Blob and Text
  const jellyRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const { x, y } = useMouse();

  // Save pos and velocity Objects
  const pos = useInstance(() => ({ x: 0, y: 0 }));
  const vel = useInstance(() => ({ x: 0, y: 0 }));
  const set = useInstance();

  // Set GSAP quick setter Values on useLayoutEffect Update
  useLayoutEffect(() => {
    set.x = gsap.quickSetter(jellyRef.current, "x", "px");
    set.y = gsap.quickSetter(jellyRef.current, "y", "px");
    set.r = gsap.quickSetter(jellyRef.current, "rotate", "deg");
    set.sx = gsap.quickSetter(jellyRef.current, "scaleX");
    set.sy = gsap.quickSetter(jellyRef.current, "scaleY");
    set.width = gsap.quickSetter(jellyRef.current, "width", "px");
  }, []);

  // Start Animation loop
  const loop = useCallback(() => {
    if (!set.width || !set.sx || !set.sy || !set.r) return;
    // Calculate angle and scale based on velocity
    var rotation = getAngle(+vel.x, +vel.y); // Mouse Move Angle
    var scale = getScale(+vel.x, +vel.y); // Blob Squeeze Amount

    // Set GSAP quick setter Values on Loop Function
    if (!isHovering && !isLoading) {
      set.x(pos.x);
      set.y(pos.y);
      set.width(CURSOR_DIAMETER + scale * 200);
      set.r(rotation);
      set.sx(1 + scale);
      set.sy(1 - scale * 2);
    }
  }, [isHovering, isLoading]);

  const [cursorMoved, setCursorMoved] = useState(false);

  // Run on Mouse Move
  useLayoutEffect(() => {
    if (isMobile) return;

    const setFromEvent = (e) => {
      if (!jellyRef.current) return;
      if (!cursorMoved) {
        setCursorMoved(true);
      }

      const el = e.target;

      const isInteractive =
        el.tagName.toLowerCase() === 'a' ||
        el.tagName.toLowerCase() === 'button' ||
        el.closest('a') ||
        el.closest('button') ||
        el.classList.contains('cursor-pointer') ||
        window.getComputedStyle(el).cursor === 'pointer';

      if (isInteractive) {
        setIsHovering(true);
        gsap.to(jellyRef.current, {
          width: CURSOR_DIAMETER * 2,
          height: CURSOR_DIAMETER * 2,
          duration: 0.4,
          ease: "elastic.out(1, 0.3)",
          backgroundColor: "rgba(0, 0, 0, 0.1)", // Semi-transparent when expanded
          mixBlendMode: "normal"
        });
      } else {
        if (isHovering) {
          setIsHovering(false);
          gsap.to(jellyRef.current, {
            width: CURSOR_DIAMETER,
            height: CURSOR_DIAMETER,
            backgroundColor: "black", // Return to solid black
            mixBlendMode: "normal",
            duration: 0.4
          });
        }
      }

      // Mouse X and Y
      const x = e.clientX;
      const y = e.clientY;

      // Animate Position and calculate Velocity with GSAP
      gsap.to(pos, {
        x: x,
        y: y,
        duration: 0.8,
        ease: "power3.out",
        onUpdate: () => {
          vel.x = (x - pos.x) * 1.2;
          vel.y = (y - pos.y) * 1.2;
        },
      });

      loop();
    };

    if (!isLoading) window.addEventListener("mousemove", setFromEvent);
    return () => {
      if (!isLoading) window.removeEventListener("mousemove", setFromEvent);
    };
  }, [isLoading, isMobile, isHovering]);

  useTicker(loop, isLoading || !cursorMoved || isMobile);
  if (isMobile) return null;

  // Return UI
  return (
    <>
      <div
        ref={jellyRef}
        className={cn(
          "fixed left-0 top-0 rounded-full z-[999] pointer-events-none will-change-transform flex items-center justify-center",
          "translate-x-[-50%] translate-y-[-50%]"
        )}
        style={{
          width: CURSOR_DIAMETER,
          height: CURSOR_DIAMETER,
          backgroundColor: "black", // Base color: Black Circle
          zIndex: 9999,
        }}
      >
        {/* Inner White Semi-Circle Graphic */}
        {!isHovering && (
          <div className="relative w-[30%] h-[15%] bg-white rounded-t-full rotate-180"></div>
        )}
      </div>
    </>
  );
}

export default CustomCursor;