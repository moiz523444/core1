import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const AnimatedNumber = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    const duration = 2000;
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [value]);

  return <>{count}{suffix}</>;
};

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      <SEO 
        title="About Us" 
        description="Learn about Blazincode's philosophy, global network, and elite team of software engineers and designers." 
        keywords="about blazincode, software team, tech agency" 
        url="https://blazincode.com/about"
      />
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
            Blazincode is a design and engineering lab architecting high-performance digital foundations for global visionaries.
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
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 relative group shadow-2xl">
              {/* 3D Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                style={{ backgroundImage: "url('/aesthetic_bg.jpg')" }}
              />
              
              {/* Overlay Gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
              
              {/* Floating Tech Elements Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-[120%] h-[120%] border border-white/10 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
              </div>

              {/* Enhanced Label */}
              <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                  <div className="px-6 py-2.5 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/80">Aesthetic Authority</span>
                  </div>
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
              { label: 'Founded', value: 2022, suffix: '' },
              { label: 'Projects', value: 150, suffix: '+' },
              { label: 'Regions', value: 24, suffix: '' },
              { label: 'Team', value: 'Elite', suffix: '' }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-black p-12 text-center group"
              >
                <span className="text-[10px] font-bold tracking-widest text-accent/40 uppercase block mb-4 group-hover:text-accent transition-colors">
                  {stat.label}
                </span>
                <span className="text-4xl md:text-6xl font-bold font-display uppercase tracking-tighter group-hover:scale-110 transition-transform block">
                  {typeof stat.value === 'number' ? <AnimatedNumber value={stat.value} suffix={stat.suffix} /> : stat.value}
                </span>
              </motion.div>
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
             <button onClick={() => navigate('/contact')} className="btn-blazincode">
                <span className="btn-bg bg-white" />
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.3em]">Join the Lab</span>
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
