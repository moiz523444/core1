import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PricingCalculator from '../components/ui/PricingCalculator';

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full mesh-gradient opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-accent uppercase font-display block mb-8"
          >
            The Estimator
          </motion.span>
          <h1 className="h-xl tracking-tighter leading-none mb-12">
            Investment <br /> <span className="text-white/30">Matrix.</span>
          </h1>
          <p className="text-white/50 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            Transparent, performance-based pricing models designed for elite-scale projects and high-growth ventures.
          </p>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
                Project <span className="text-accent">Estimator</span>
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                Use our interactive calculator to get a preliminary architectural estimate for your digital product.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-accent/40 border border-white/10 px-6 py-3 rounded-full">
              <Info size={14} /> Estimates are subject to technical audit
            </div>
          </div>
          
          <PricingCalculator />
        </div>
      </section>

      {/* Tiers / Packages */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { 
                  tier: 'MVP Lab', 
                  price: 'From $15k', 
                  desc: 'Perfect for startups looking to launch a high-end proof of concept.',
                  features: ['Technical Architecture', 'Core UI/UX Lab', 'Standard Engineering', 'Deployment Hub']
                },
                { 
                  tier: 'Scale Core', 
                  price: 'From $45k', 
                  desc: 'Full-scale engineering for established brands moving to the next level.',
                  features: ['Advanced Systems', 'Custom UI Language', 'Performance Audit', '24/7 Priority Ops', 'Neural Integration']
                },
                { 
                  tier: 'Enterprise', 
                  price: 'Custom', 
                  desc: 'Global-scale infrastructure for market leaders and visionaries.',
                  features: ['Multi-Region Deploy', 'Institutional Security', 'White-Glove Support', 'Dedicated Engineering', 'Unlimited Revisions']
                }
              ].map((pkg, i) => (
                <div key={i} className={`p-12 rounded-[3rem] border ${i === 1 ? 'border-accent bg-white text-black' : 'border-white/5 bg-black'} flex flex-col justify-between h-full`}>
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${i === 1 ? 'text-black/40' : 'text-white/20'}`}>{pkg.tier}</span>
                      <h3 className="text-4xl font-bold uppercase tracking-tighter">{pkg.price}</h3>
                    </div>
                    <p className={`text-sm font-light leading-relaxed ${i === 1 ? 'text-black/60' : 'text-white/40'}`}>{pkg.desc}</p>
                    <div className="space-y-4 pt-8 border-t border-current/10">
                      {pkg.features.map((feat, fi) => (
                        <div key={fi} className="flex items-center gap-4">
                          <Check size={14} className={i === 1 ? 'text-black' : 'text-accent'} />
                          <span className="text-xs font-medium uppercase tracking-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => navigate('/contact')} className={`mt-16 py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all duration-500 ${i === 1 ? 'bg-black text-white hover:bg-zinc-800' : 'bg-white text-black hover:bg-accent'}`}>
                    Select Path
                  </button>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-48 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-12">
            Have <span className="text-accent">Questions?</span>
          </h2>
          <button onClick={() => navigate('/contact')} className="btn-core">
            <span className="btn-bg bg-white" />
            <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.3em] flex items-center gap-4">
              View FAQ Matrix <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
