import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, ArrowRight, Camera, Send, Users, CheckCircle2, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Web Application', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    
    try {
      const res = await fetch('http://localhost:5000/api/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Service: ${formData.service}\n\n${formData.message}`
        })
      });
      
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Web Application', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Blazincode. We are ready to architect your next digital foundation. Available for global projects." 
        keywords="contact blazincode, hire software agency, project inquiry" 
        url="https://blazincode.com/contact"
      />
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
                  { icon: <Mail />, label: 'Email', value: 'support@blazincode.com' },
                  { icon: <MessageSquare />, label: 'Inquiry', value: 'Start a project' },
                  { icon: <MapPin />, label: 'Location', value: 'United States' }
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
                  {[
                    { icon: <Camera />, link: 'https://www.instagram.com/Blazincode/' },
                    { icon: <Users />, link: 'https://www.facebook.com/Blazincode/' },
                    { icon: <Send />, link: 'https://www.linkedin.com/company/blazincode' }
                  ].map((item, i) => (
                    <button onClick={() => window.open(item.link, '_blank')} key={i} className="p-4 border border-white/5 rounded-full hover:bg-white/5 transition-colors">
                      {React.cloneElement(item.icon, { size: 18, strokeWidth: 1.5 })}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="glass-card p-8 md:p-16 rounded-[3rem] relative">
              
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="mb-8 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-start gap-4"
                >
                  <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-green-500 font-bold text-sm uppercase tracking-widest mb-1">Transmission Successful</h4>
                    <p className="text-green-500/70 text-sm">We have received your message. Our team will contact you shortly.</p>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="mb-8 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-start gap-4"
                >
                  <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-red-500 font-bold text-sm uppercase tracking-widest mb-1">Transmission Failed</h4>
                    <p className="text-red-500/70 text-sm">There was a problem sending your message. Please try again.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-accent transition-colors">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-white/10"
                    required
                  />
                </div>
                
                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-accent transition-colors">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@company.com" 
                    className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-white/10"
                    required
                  />
                </div>

                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-accent transition-colors">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Service Type</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent text-xl font-light focus:outline-none appearance-none cursor-pointer"
                  >
                    <option className="bg-black">Web Application</option>
                    <option className="bg-black">Mobile Engineering</option>
                    <option className="bg-black">UI/UX Design Lab</option>
                    <option className="bg-black">Full-Stack Solution</option>
                  </select>
                </div>

                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-accent transition-colors">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Project Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    placeholder="Tell us about your vision..." 
                    className="w-full bg-transparent text-xl font-light focus:outline-none placeholder:text-white/10 resize-none"
                    required
                  />
                </div>

                <button type="submit" disabled={status === 'loading'} className="w-full btn-blazincode group disabled:opacity-50">
                  <span className="btn-bg bg-white" />
                  <span className="relative z-10 flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em]">
                    {status === 'loading' ? 'Sending...' : 'Send Transmission'} <ArrowRight size={16} />
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
