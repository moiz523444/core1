import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio.jsx';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = PORTFOLIO_DATA.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
        <h1 className="text-4xl font-display font-bold">PROJECT NOT FOUND</h1>
        <Link to="/portfolio" className="btn-core">
          <span className="btn-bg bg-white" />
          <span className="relative z-10 text-black">Back to Vault</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
        {/* Back Link */}
        <div className="container mx-auto px-6 py-8">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white hover:bg-white/10 hover:border-accent/30 transition-all group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            Back to Project Vault
          </Link>
        </div>

        {/* Hero Section */}
        <section className="pb-24 border-b border-white/5">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-end">
            <div className="space-y-12">
              <div className="space-y-4">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[10px] font-bold tracking-[0.5em] text-accent uppercase font-display block"
                >
                  {project.category}
                </motion.span>
                <h1 className="h-xl tracking-tighter leading-none mb-8">
                  {project.title.split(' ')[0]} <br /> 
                  <span className="text-white/30">{project.title.split(' ').slice(1).join(' ')}</span>
                </h1>
              </div>
              <p className="text-white/50 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0 md:pl-24">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase block mb-2">Client</span>
                <span className="text-lg font-bold uppercase tracking-tight">{project.client || "Confidential"}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase block mb-2">Year</span>
                <span className="text-lg font-bold uppercase tracking-tight">{project.year || "2024"}</span>
              </div>
              <div className="col-span-2">
                <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase block mb-2">Role</span>
                <span className="text-lg font-bold uppercase tracking-tight">{project.role || "Development"}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-video w-full rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
            </motion.div>
          </div>
        </section>

        {/* Details Grid */}
        <section className="py-24 bg-white/[0.01] border-y border-white/5">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24 md:gap-48">
            <div className="space-y-12">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">The <span className="text-accent">Challenge</span></h2>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                {project.problem || project.challenge}
              </p>
            </div>
            <div className="space-y-12">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">The <span className="text-white/30">Solution</span></h2>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack & Results */}
        <section className="py-32">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-24">
            <div className="space-y-16">
              <h3 className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Technical Stack</h3>
              <div className="flex flex-wrap gap-4">
                {(project.techStack || project.tech || []).map((t, i) => (
                  <span key={i} className="px-8 py-4 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-bold uppercase tracking-widest text-white/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-16">
              <h3 className="text-xs font-bold tracking-[0.5em] text-accent uppercase">Project Impact</h3>
              <div className="glass-card p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5">
                  <CheckCircle2 size={120} strokeWidth={0.5} />
                </div>
                <p className="text-2xl font-light leading-relaxed relative z-10 italic">
                  "{project.results || 'Delivered a high-performance, scalable solution that exceeded client expectations.'}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Link */}
        <section className="py-48 border-t border-white/5 text-center">
          <div className="container mx-auto px-6">
             <span className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase block mb-12">Next Project</span>
             <Link 
               to={`/portfolio/${PORTFOLIO_DATA[(PORTFOLIO_DATA.findIndex(p => p.id === id) + 1) % PORTFOLIO_DATA.length].id}`}
               className="group"
             >
               <h2 className="text-4xl md:text-9xl font-bold uppercase tracking-tighter mb-12 group-hover:text-accent transition-colors">
                  {PORTFOLIO_DATA[(PORTFOLIO_DATA.findIndex(p => p.id === id) + 1) % PORTFOLIO_DATA.length].title}
               </h2>
               <div className="inline-flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.4em] group-hover:gap-12 transition-all duration-700">
                  Dive Deeper <ArrowUpRight size={20} />
               </div>
             </Link>
          </div>
        </section>
    </div>
  );
}
