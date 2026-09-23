import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

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
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <div className="space-y-12 max-w-xl">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
                Start Your <br className="hidden md:block"/><span className="text-white/40">Project</span>
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                Ready to bring your ideas to life? Let's discuss your next project. Send us a message and our team will get back to you with a free consultation and project plan.
              </p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-lg"
          >
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
                  <p className="text-red-500/70 text-sm">There was a problem sending your message. Please check the backend SMTP credentials in .env and try again.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl outline-none focus:border-white transition-colors"
                  placeholder="User"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl outline-none focus:border-white transition-colors"
                  placeholder="hello@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl outline-none focus:border-white transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full group py-6 px-8 bg-white text-black font-bold uppercase tracking-widest text-sm flex justify-between items-center hover:bg-white/90 disabled:opacity-50 transition-all rounded-sm"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              {status === 'success' && <p className="text-green-400 text-xs tracking-wider uppercase mt-4 text-center">Thanks! We will reach out shortly.</p>}
              {status === 'error' && <p className="text-red-400 text-xs tracking-wider uppercase mt-4 text-center">Failed to send message. Please try again.</p>}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
