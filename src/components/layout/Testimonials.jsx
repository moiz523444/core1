import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Founder, TechFlow",
    text: "Working with Core 1 was a game-changer for our startup. They took our messy requirements and delivered a flawless web app three weeks ahead of schedule. Highly recommended.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "CEO, GrowthEcom",
    text: "We were losing sales because our old site was too slow. Core 1 rebuilt our platform from scratch, and our conversion rate literally doubled within the first month.",
  },
  {
    id: 3,
    name: "Ahmed Raza",
    role: "Director, LocalServe",
    text: "The communication was incredible. I always knew exactly where the project stood. Zero headaches, transparent pricing, and the final mobile app is incredibly fast.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-accent uppercase font-display block mb-6"
          >
            Don't Just Take Our Word For It
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl tracking-tight leading-none"
          >
            Trusted by <br className="hidden md:block"/>
            <span className="text-white/30">Founders & CEOs.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group p-8 md:p-12 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] transition-all duration-500 rounded-lg flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex gap-1 mb-8 text-yellow-500 text-sm">
                  ★★★★★
                </div>
                <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 italic">
                  "{review.text}"
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">{review.name}</h4>
                <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
