import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Only enable the custom cursor on devices with a precise pointer (desktop).
const hasFinePointer = () =>
  typeof window !== 'undefined' &&
  !!window.matchMedia &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(hasFinePointer);
  const [isHovering, setIsHovering] = useState(false);

  // Motion values are updated outside React, so pointer movement causes no re-renders.
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const dotX = useSpring(mx, { stiffness: 500, damping: 28, mass: 0.5 });
  const dotY = useSpring(my, { stiffness: 500, damping: 28, mass: 0.5 });
  const ringX = useSpring(mx, { stiffness: 150, damping: 15, mass: 0.1 });
  const ringY = useSpring(my, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setIsHovering(
        t.tagName === 'A' || t.tagName === 'BUTTON' || !!t.closest('a') || !!t.closest('button')
      );
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [enabled, mx, my]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 bg-anthropic-coral rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: isHovering ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 border-2 border-anthropic-coral rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
