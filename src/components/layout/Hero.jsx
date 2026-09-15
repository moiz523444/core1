import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function Hero() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  const titleReveal = {
    hidden: { y: "110%", opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.2 * i,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-[calc(100svh-8rem)] flex flex-col justify-center px-6 py-8 md:py-12 border-b border-white/5 overflow-hidden mesh-gradient">
      <div className="container mx-auto">
        <div className="flex flex-col gap-0 relative z-10 pt-4 md:pt-8">
          <div className="overflow-hidden">
            <motion.h1
              custom={1}
              initial="hidden"
              animate={active ? "visible" : "hidden"}
              variants={titleReveal}
              className="h-xl tracking-[-0.07em] leading-[0.85] md:leading-[0.8]"
            >
              Core 1<span className="text-[#808080]">.</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.div
              custom={2}
              initial="hidden"
              animate={active ? "visible" : "hidden"}
              variants={titleReveal}
              className="flex items-center gap-4"
            >
              <h1 className="h-xl tracking-[-0.07em] leading-[0.85] md:leading-[0.8]">Digital</h1>
              <div className="h-[2px] bg-white/10 flex-1 mt-[4vw] rounded-full hidden md:block" />
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              custom={3}
              initial="hidden"
              animate={active ? "visible" : "hidden"}
              variants={titleReveal}
              className="h-xl tracking-[-0.07em] text-white/30 leading-[0.85] md:leading-[0.8]"
            >
              Solutions
            </motion.h1>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 items-end gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base md:text-xl text-white/40 max-w-xl font-light leading-snug tracking-tight mb-6">
              Core 1 is a premium software development agency. We build scalable,
              high-performance digital products that help businesses succeed online.
            </p>
              <Link to="/services" className="btn-core group">
                <span className="btn-bg bg-white" />
                <span className="relative z-10 flex items-center gap-4 group-hover:text-black transition-colors duration-500">
                  View Our Services
                </span>
              </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-end md:justify-end"
          >
            <div className="flex flex-col items-end text-right">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-accent/40 mb-1">
                EST. 2026
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/20">
                (Scroll to Discover)
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Text Layer - Optimized for Performance */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 pointer-events-none opacity-[0.03]">
        <h2 className="text-[40vw] md:text-[35vw] font-black uppercase tracking-tighter whitespace-nowrap select-none">
          CORE 1
        </h2>
      </div>
    </section>
  );
}
