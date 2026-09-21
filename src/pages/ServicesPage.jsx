import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/services.jsx';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full mesh-gradient opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-accent uppercase font-display block mb-8"
          >
            Our Capability
          </motion.span>
          <h1 className="h-xl tracking-tighter leading-none mb-12">
            Our <span className="text-white/30">Impact</span>
          </h1>
          <p className="text-white/50 text-xl md:text-3xl font-light leading-relaxed max-w-3xl">
            We architect high-performance digital foundations for global visionaries, blending technical mastery with aesthetic authority.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {SERVICES_DATA.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-black p-12 md:p-20 group relative overflow-hidden"
              >
                <Link to={`/services/${service.id}`} className="absolute inset-0 z-20" />

                <div className="absolute inset-0 bg-white/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-4xl font-display font-bold text-white/10 group-hover:text-accent/20 transition-colors">
                      {service.shortId}
                    </span>
                    <div className="text-accent/40 group-hover:text-accent transition-colors">
                      {React.cloneElement(service.icon, { size: 32, strokeWidth: 1 })}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-6 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-white/40 group-hover:text-white/60 transition-colors text-lg font-light leading-relaxed mb-12 max-w-sm">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    Explore Technical Domain <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-24">
            <h2 className="h-lg tracking-tighter mb-8">The <span className="text-white/30">Process</span></h2>
            <p className="text-white/40 max-w-xl text-lg font-light">How we take your vision from blueprint to reality with precision and speed.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive into your business logic and user needs.' },
              { step: '02', title: 'Architecture', desc: 'Designing the technical foundation and visual language.' },
              { step: '03', title: 'Engineering', desc: 'Clean, scalable code execution with rigorous testing.' },
              { step: '04', title: 'Deployment', desc: 'Strategic launch and performance optimization.' }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <span className="text-xs font-bold tracking-[0.4em] text-accent block">{item.step}</span>
                <h4 className="text-xl font-bold uppercase tracking-tight">{item.title}</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-12">
            Ready to <span className="text-accent">Scale?</span>
          </h2>
          <Link to="/contact" className="btn-core group">
            <span className="btn-bg bg-white" />
            <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.3em] text-white group-hover:text-black transition-colors duration-500">
              Launch Your Project
            </span>
          </Link>

        </div>
      </section>
    </div>
  );
}
