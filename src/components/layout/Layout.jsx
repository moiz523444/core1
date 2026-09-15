import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden cursor-none">
      <CustomCursor />
      
      {/* Global Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Global Background Effects */}
      <div className="fixed inset-0 mesh-gradient opacity-30 pointer-events-none z-0" />
      
      <Navbar />
      
      <main className="relative z-10 pt-32">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
