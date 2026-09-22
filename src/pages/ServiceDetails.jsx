import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/services.jsx';

export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES_DATA.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
        <h1 className="text-4xl font-display font-bold">SERVICE NOT FOUND</h1>
        <Link to="/services" className="btn-blazincode">
          <span className="btn-bg bg-white" />
          <span className="relative z-10 text-black">Back to Impact</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
        {/* Back Link */}
        <div className="container mx-auto px-6 py-8">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white hover:bg-white/10 hover:border-accent/30 transition-all group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            Back to Digital Impact
          </Link>
        </div>

        {/* Hero Section */}
        <section className="pb-24 border-b border-white/5">
          <div className="container mx-auto px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-24 text-white/[0.02] -z-10">
              {React.cloneElement(service.icon, { size: 400, strokeWidth: 0.5 })}
            </div>
            
            <div className="max-w-4xl space-y-12">
              <div className="space-y-4">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[10px] font-bold tracking-[0.5em] text-accent uppercase font-display block"
                >
                  {service.shortId} / Technical Domain
                </motion.span>
                <h1 className="h-xl tracking-tighter leading-none mb-8 uppercase">
                  {service.title.split(' ')[0]} <br /> 
                  <span className="text-white/30">{service.title.split(' ').slice(1).join(' ')}</span>
                </h1>
              </div>
              <p className="text-white/50 text-xl md:text-3xl font-light leading-relaxed">
                {service.fullDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Features & Deliverables */}
        <section className="py-24 bg-white/[0.01] border-y border-white/5">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24">
            <div className="space-y-12">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Core <span className="text-accent">Features</span></h2>
              <div className="grid gap-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-6 p-8 bg-black border border-white/5 rounded-3xl group hover:border-accent/20 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                      <Check size={16} />
                    </div>
                    <span className="text-lg font-bold uppercase tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Our <span className="text-white/30">Approach</span></h2>
              <div className="glass-card p-12 rounded-[3.5rem] border border-white/10 relative overflow-hidden">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-white/60">
                  {service.process}
                </p>
                <div className="mt-12 pt-12 border-t border-white/5">
                   <button onClick={() => navigate('/contact')} className="btn-blazincode w-full">
                      <span className="btn-bg bg-white" />
                      <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4">
                         Request Technical Brief <ArrowUpRight size={16} />
                      </span>
                   </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-48 text-center">
          <div className="container mx-auto px-6">
             <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter mb-12">
                Let's Build <br /> <span className="text-accent">The Future.</span>
             </h2>
             <Link to="/contact" className="btn-blazincode group">
                <span className="btn-bg bg-white" />
                <span className="relative z-10 text-[12px] font-bold uppercase tracking-[0.4em] flex items-center gap-6">
                   Initiate Project <ArrowUpRight size={20} />
                </span>
             </Link>
          </div>
        </section>
    </div>
  );
}
