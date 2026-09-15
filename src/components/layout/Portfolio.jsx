import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

import { PORTFOLIO_DATA } from '../../data/portfolio.jsx';

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="portfolio" ref={containerRef} className="py-32 bg-black border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
           <div className="max-w-2xl">
             <h2 className="h-lg tracking-tighter leading-none mb-8 text-white">
               Featured <span className="text-white/40">Projects</span>
             </h2>
           </div>
           <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent/40 mb-4 md:mb-12">
             [ Our Recent Work ]
           </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.slice(0, 3).map((project, i) => {
            const Wrapper = project.link ? 'a' : Link;
            const wrapperProps = project.link 
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : { to: `/portfolio/${project.id}` };

            return (
              <Wrapper
                key={project.id}
                {...wrapperProps}
                className="block h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card rounded-[2.5rem] overflow-hidden group cursor-pointer h-full"
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="p-6 bg-white text-black rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                            <ExternalLink size={24} />
                        </div>
                    </div>
                  </div>
                  
                  <div className="p-10 space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-[10px] font-bold tracking-widest text-accent uppercase mb-2 block">{project.category}</span>
                            <h3 className="text-3xl font-bold uppercase tracking-tighter text-white group-hover:text-accent transition-colors">{project.title}</h3>
                        </div>
                    </div>
                    <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors">
                        {project.description}
                    </p>
                  </div>
                </motion.div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
