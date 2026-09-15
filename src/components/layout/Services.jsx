import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import { SERVICES_DATA } from '../../data/services.jsx';

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 border-b border-white/5 pb-12">
           <div className="max-w-2xl">
             <h2 className="h-lg tracking-tighter leading-none mb-8">
               Our <span className="text-accent">Services</span>
             </h2>
           </div>
           <p className="text-white/40 max-w-sm text-lg font-light leading-relaxed mb-4">
             We deliver end-to-end digital services tailored to your business goals.
           </p>
        </div>

        <div className="flex flex-col">
          {SERVICES_DATA.map((service, i) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group border-b border-white/5 py-12 md:py-20 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24 cursor-pointer relative"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24 w-full"
              >
                {/* Background Glass Reveal */}
                <div className="absolute inset-0 bg-white/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] -z-10" />
                
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="text-xs font-bold tracking-[0.3em] text-accent/40 group-hover:text-accent transition-colors uppercase"
                >
                  {service.shortId}
                </motion.span>
                
                <div className="flex-1">
                  <h3 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter group-hover:pl-8 transition-all duration-500 group-hover:text-white">
                     {service.title}
                  </h3>
                  {/* Mobile Description */}
                  <p className="md:hidden mt-4 text-white/40 text-sm font-light leading-relaxed">
                     {service.desc}
                  </p>
                </div>

                {/* Desktop Description Hover */}
                <div className="hidden md:block max-w-md opacity-0 group-hover:opacity-100 translate-x-12 group-hover:translate-x-0 transition-all duration-700">
                   <p className="text-white/60 text-sm leading-relaxed font-light">
                      {service.desc}
                   </p>
                </div>

                <div className="p-4 md:p-6 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-45">
                   <ArrowUpRight size={20} className="md:w-6 md:h-6" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

