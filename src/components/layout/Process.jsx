import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    id: '01',
    title: 'Discovery Call',
    desc: "We start with a free consultation to understand your business goals, target audience, and exactly what you need the software to achieve. We outline a clear strategy before writing a single line of code."
  },
  {
    id: '02',
    title: 'Strategy & Design',
    desc: "Our team creates wireframes, user flows, and high-fidelity designs. You'll get to see and approve the look and feel of your app to ensure it perfectly matches your brand identity and requirements."
  },
  {
    id: '03',
    title: 'Development & Launch',
    desc: "We build your product using modern, scalable tech stacks. Throughout the process, you get regular updates and demos. Once everything is thoroughly tested, we launch your product to the world."
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-24 md:mb-32">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-accent uppercase font-display block mb-6"
          >
            How It Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl tracking-tight leading-none"
          >
            Our Simple <br className="hidden md:block"/>
            <span className="text-white/30">3-Step Process.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/10 -z-10" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative group cursor-default"
            >
              <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:border-white/30 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)]">
                <span className="text-2xl font-black text-white/20 tracking-tighter group-hover:text-white transition-colors duration-500">{step.id}</span>
                {/* Glowing dot */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(var(--accent),0.5)] group-hover:scale-150 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{step.title}</h3>
              <p className="text-white/40 text-lg font-light leading-relaxed pr-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
