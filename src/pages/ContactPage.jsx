import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, ArrowRight, Camera, Send, Users } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-24 md:py-48 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Info Column */}
            <div className="space-y-16">
              <div>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-accent uppercase font-display block mb-8"
                >
                  Get in Touch
                </motion.span>
                <h1 className="h-xl tracking-tighter leading-none mb-12">
                  Let's <br /> <span className="text-white/30">Connect.</span>
                </h1>
                <p className="text-white/50 text-xl font-light leading-relaxed max-w-md">
                  Ready to architect your next digital foundation? We are available for global projects and collaborations.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <Mail />, label: 'Email', value: 'Contact@blazincode.co' },
                  { icon: <MessageSquare />, label: 'Inquiry', value: 'Start a project' },
                  { icon: <MapPin />, label: 'Location', value: 'Global / Remote' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      {React.cloneElement(item.icon, { size: 18, strokeWidth: 1.5 })}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase block mb-1">{item.label}</span>
                      <span className="text-lg font-bold uppercase tracking-tight group-hover:text-accent transition-colors">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 space-y-6">
                <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase block">Follow Us</span>
                <div className="flex gap-4">
                  {[<Camera />, <Send />, <Users />].map((icon, i) => (
                    <button onClick={() => window.open('https://linkedin.com', '_blank')} key={i} className="p-4 border border-white/5 rounded-full hover:bg-white/5 transition-colors">
                      {React.cloneElement(icon, { size: 18, strokeWidth: 1.5 })}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="glass-card p-8 md:p-16 rounded-[3rem] relative">
              <form onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully! We will get back to you shortly."); }} className="space-y-12">
                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-accent transition-colors">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-white/10"
                  />
                </div>
                
                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-accent transition-colors">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="hello@company.com" 
                    className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-white/10"
                  />
                </div>

                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-accent transition-colors">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Service Type</label>
                  <select className="w-full bg-transparent text-xl font-light focus:outline-none appearance-none cursor-pointer">
                    <option className="bg-black">Web Application</option>
                    <option className="bg-black">Mobile Engineering</option>
                    <option className="bg-black">UI/UX Design Lab</option>
                    <option className="bg-black">Full-Stack Solution</option>
                  </select>
                </div>

                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-accent transition-colors">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Project Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your vision..." 
                    className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-white/10 resize-none"
                  />
                </div>

                <button type="submit" className="w-full btn-blazincode group">
                  <span className="btn-bg bg-white" />
                  <span className="relative z-10 flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em]">
                    Send Transmission <ArrowRight size={16} />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
