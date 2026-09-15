import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();

    const handleMouseMove = (e) => {
      if (isMobile) return;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999]"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isPointer ? 1.8 : 1,
          backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0)',
          borderColor: isPointer ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.2)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
}
