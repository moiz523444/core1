import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    id: 'type',
    question: 'What are we building?',
    options: [
      { name: 'Standard Website', price: 1500, desc: 'Corporate / Showcase Site' },
      { name: 'E-Commerce Store', price: 3500, desc: 'Full Retail Infrastructure' },
      { name: 'Custom Web App', price: 5000, desc: 'Bespoke Software Solution' },
    ]
  },
  {
    id: 'pages',
    question: 'Scale of the project?',
    options: [
      { name: 'Micro (1-5)', price: 0, desc: 'Single Page / Small Landing' },
      { name: 'Standard (5-15)', price: 800, desc: 'Full Business Website' },
      { name: 'Enterprise (15+)', price: 2000, desc: 'Complex Multi-page System' },
    ]
  },
  {
    id: 'features',
    question: 'Digital growth add-ons?',
    multi: true,
    options: [
      { name: 'SEO Strategy', price: 800, desc: 'Dominate Organic Search' },
      { name: 'Brand Identity', price: 1500, desc: 'Logo, Colors, & Voice' },
      { name: '3D Interactions', price: 1200, desc: 'Immersive Animations' },
      { name: 'CMS Support', price: 600, desc: 'Manage your own content' },
    ]
  }
];

export default function PricingCalculator() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({
    type: 'Standard Website',
    pages: 'Micro (1-5)',
    features: [],
  });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const total = (() => {
    let t = 0;
    const type = steps[0].options.find(o => o.name === selections.type);
    const pages = steps[1].options.find(o => o.name === selections.pages);
    t += (type?.price || 0) + (pages?.price || 0);
    
    selections.features.forEach(fName => {
      const f = steps[2].options.find(o => o.name === fName);
      t += f?.price || 0;
    });
    return t;
  })();

  const handleSelect = (option) => {
    if (steps[currentStep].multi) {
      setSelections(prev => ({
        ...prev,
        features: prev.features.includes(option)
          ? prev.features.filter(f => f !== option)
          : [...prev.features, option]
      }));
    } else {
      setSelections({ ...selections, [steps[currentStep].id]: option });
      if (currentStep < steps.length - 1) setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    }
  };

  const handleEstimateSubmit = async () => {
    if (!email) return;
    setStatus('loading');
    
    // Simulate processing
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Redirect to contact page after a short delay
      setTimeout(() => {
        navigate('/contact');
      }, 1500);
    }, 1000);
  };

  return (
    <section id="pricing" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <div className="space-y-12 min-h-[500px] flex flex-col justify-center items-start">
            <div className="space-y-4 text-left w-full">
                <span className="text-xs font-bold tracking-[0.3em] text-accent/60 uppercase">
                    Protocol Phase {currentStep + 1} / {steps.length}
                </span>
                <h2 className="h-md tracking-tighter leading-none mb-12 text-left">
                   {steps[currentStep].question}
                </h2>
            </div>

            <div className="grid gap-4 w-full">
               <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-4"
                  >
                     {steps[currentStep].options.map((option) => (
                        <button
                          key={option.name}
                          onClick={() => handleSelect(option.name)}
                          className={`p-6 md:p-8 rounded-3xl border transition-all duration-500 text-left flex justify-between items-center group ${
                            (steps[currentStep].multi ? selections.features.includes(option.name) : selections[steps[currentStep].id] === option.name)
                              ? 'border-accent bg-accent/10'
                              : 'border-white/5 hover:border-white/20 bg-white/[0.02]'
                          }`}
                        >
                          <div className="pr-4">
                            <span className="block text-xl md:text-2xl font-bold uppercase tracking-tighter mb-1">{option.name}</span>
                            <span className="block text-xs text-white/40 group-hover:text-white/60">{option.desc}</span>
                          </div>
                          <div className="text-right flex flex-col items-end min-w-fit">
                             <span className="block font-bold text-lg text-accent">${option.price}</span>
                             <AnimatePresence>
                               {(steps[currentStep].multi ? selections.features.includes(option.name) : selections[steps[currentStep].id] === option.name) && (
                                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-2">
                                    <Check size={18} className="text-accent" />
                                 </motion.div>
                               )}
                             </AnimatePresence>
                          </div>
                        </button>
                     ))}
                  </motion.div>
               </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-4 pt-12 w-full justify-start">
                {/* <button 
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="p-5 border border-white/10 rounded-full hover:bg-white/5 disabled:opacity-10 transition-all"
                >
                    <ChevronLeft size={24} />
                </button> */}
                {currentStep < steps.length - 1 && (
                  <button 
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="btn-core group"
                  >
                    <span className="btn-bg bg-white" />
                    <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                      Next Step
                    </span>
                  </button>
                )}
            </div>
          </div>

          {/* Result Panel */}
          <div className="glass rounded-[3rem] p-8 md:p-16 flex flex-col justify-between items-start text-left sticky top-32">
             <div className="space-y-6 w-full">
                <span className="text-xs font-bold tracking-[0.4em] text-white/20 uppercase">Estimated Project Cost</span>
                <motion.div 
                    key={total}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none text-white flex items-start justify-start"
                >
                    <span className="text-4xl md:text-6xl text-accent mt-4 mr-2">$</span>
                    {total / 1000}<span className="text-white/10">k</span>
                </motion.div>
             </div>
             
             <div className="w-full mt-16 space-y-6">
                 <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                    <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed">
                      This is a rough estimate based on industry standards. Enter your email to receive a detailed, customized project proposal.
                    </p>
                 </div>
                 
                 <div className="relative group">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email to receive quote"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-6 text-sm outline-none focus:border-accent/40 transition-all"
                    />
                    <div className="absolute inset-0 rounded-2xl border border-accent/20 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity" />
                 </div>
                 
                 <button 
                  onClick={handleEstimateSubmit}
                  disabled={status === 'loading'}
                  className="btn-core w-full flex justify-center items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase disabled:opacity-50 h-20"
                 >
                    <span className="btn-bg bg-accent" />
                    <span className="relative z-10 flex items-center gap-4">
                      {status === 'loading' ? 'Processing...' : status === 'success' ? 'Quote Requested' : 'Get Detailed Proposal'} 
                      <ArrowRight size={18} />
                    </span>
                 </button>
                 
                 <AnimatePresence>
                    {status === 'success' && (
                      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-accent text-[10px] tracking-widest uppercase mt-4 text-center">
                        Request Sent. We'll be in touch soon.
                      </motion.p>
                    )}
                    {status === 'error' && (
                      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-[10px] tracking-widest uppercase mt-4 text-center">
                        Something went wrong. Please try again.
                      </motion.p>
                    )}
                 </AnimatePresence>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

