import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
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
      const closestElementWithText = target.closest('[data-cursor-text]');
      
      if (closestElementWithText) {
        setCursorText(closestElementWithText.getAttribute('data-cursor-text'));
        setIsPointer(true);
      } else {
        setCursorText("");
        setIsPointer(
          window.getComputedStyle(target).cursor === 'pointer' ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button')
        );
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999]"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: cursorText ? 0 : 1 }}
      />
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center border border-white/20 rounded-full pointer-events-none z-[9998]"
        animate={{
          width: cursorText ? 64 : 32,
          height: cursorText ? 64 : 32,
          backgroundColor: isPointer || cursorText ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0)',
          borderColor: isPointer || cursorText ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.2)',
          scale: isPointer && !cursorText ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.span 
          className="text-[10px] font-bold text-white uppercase tracking-widest whitespace-nowrap"
          animate={{ opacity: cursorText ? 1 : 0 }}
        >
          {cursorText}
        </motion.span>
      </motion.div>
    </>
  );
}
