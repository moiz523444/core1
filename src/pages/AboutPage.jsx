import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full mesh-gradient opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-accent uppercase font-display block mb-8"
          >
            The Foundation
          </motion.span>
          <h1 className="h-xl tracking-tighter leading-none mb-12">
            Technical <br /> <span className="text-white/30">Authority.</span>
          </h1>
          <p className="text-white/50 text-xl md:text-3xl font-light leading-relaxed max-w-3xl">
            Core 1 is a design and engineering lab architecting high-performance digital foundations for global visionaries.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-tight">
              Built on <span className="text-accent">Radical</span> <br /> Simplification.
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
              We believe that the most powerful solutions are the most refined. Our process strips away the noise to reveal the core essence of your product.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-8">
              {[
                { icon: <Target />, title: 'Precision', desc: 'Every pixel and line of code has a purpose.' },
                { icon: <Shield />, title: 'Security', desc: 'Hardened systems built for global scale.' },
                { icon: <Zap />, title: 'Speed', desc: 'Optimized for zero-latency performance.' },
                { icon: <Award />, title: 'Quality', desc: 'Uncompromising standards in execution.' }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="text-accent/60">{React.cloneElement(item.icon, { size: 24, strokeWidth: 1.5 })}</div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em]">{item.title}</h4>
                  <p className="text-white/30 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/5 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-1/2 h-1/2 border border-white/10 rounded-full animate-pulse" />
                 <div className="absolute w-1/3 h-1/3 border border-white/20 rounded-full animate-ping" />
              </div>
              <div className="absolute bottom-12 left-12 right-12 text-center">
                  <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/20">Aesthetic Authority</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <h2 className="h-lg tracking-tighter leading-none">Global <span className="text-white/30">Network.</span></h2>
            <p className="text-white/40 max-w-sm text-sm font-light leading-relaxed mb-4">
              Operating from our hub in WorldWide, we collaborate with partners across every continent.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-3xl">
            {[
              { label: 'Founded', value: '2022' },
              { label: 'Projects', value: '150+' },
              { label: 'Regions', value: '24' },
              { label: 'Team', value: 'Elite' }
            ].map((stat, i) => (
              <div key={i} className="bg-black p-12 text-center group">
                <span className="text-[10px] font-bold tracking-widest text-accent/40 uppercase block mb-4 group-hover:text-accent transition-colors">
                  {stat.label}
                </span>
                <span className="text-4xl md:text-6xl font-bold font-display uppercase tracking-tighter group-hover:scale-110 transition-transform block">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-48 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-12">
            Driven by <span className="text-accent">Excellence.</span>
          </h2>
          <p className="text-white/40 text-xl font-light leading-relaxed max-w-2xl mx-auto mb-16">
            Our team consists of senior engineers and designers who have built products for the world's most ambitious companies.
          </p>
          <div className="flex justify-center">
             <button onClick={() => navigate('/contact')} className="btn-core">
                <span className="btn-bg bg-white" />
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.3em]">Join the Lab</span>
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
