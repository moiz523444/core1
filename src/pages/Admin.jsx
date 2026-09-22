import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Lock, Inbox, Calculator, LogOut, Shield, ShieldCheck, Mail, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';

export default function Admin() {
  const [token, setToken] = useState(sessionStorage.getItem('blazincode_admin_token') || null);
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle');
  const [leads, setLeads] = useState({ contacts: [], estimates: [] });
  const [activeTab, setActiveTab] = useState('contacts');

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem('blazincode_admin_token', data.token);
        setToken(data.token);
        setStatus('idle');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('blazincode_admin_token');
    setToken(null);
  };

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/admin/leads', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (data.success) {
          setLeads(data.data);
        } else if (res.status === 403) {
          handleLogout();
        }
      } catch {
        console.error('Failed to fetch leads');
      }
    };

    if (token) {
      fetchLeads();
    }
  }, [token]);

  if (!token) {
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden mesh-gradient">
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        
        <Link to="/" className="absolute top-12 left-12 text-white/20 hover:text-accent transition-all flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
          <ArrowLeft size={14} /> Escape to Site
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-12 glass rounded-[3rem] relative z-10 flex flex-col items-center"
        >
          <div className="p-6 rounded-full bg-white/5 border border-white/10 mb-8">
             {status === 'loading' ? <ShieldCheck size={32} className="text-accent animate-pulse" /> : <Shield size={32} className="text-white/40" />}
          </div>
          
          <Logo size={10} className="mb-8" />
          
          <div className="text-center mb-12">
            <h1 className="text-2xl font-bold uppercase tracking-[0.4em] mb-2 text-white">Vault Access</h1>
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Restricted Blazincode Interface</p>
          </div>
          
          <form onSubmit={handleLogin} className="w-full space-y-8">
            <div className="relative group">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Passkey"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-6 text-center text-2xl tracking-[0.5em] outline-none focus:border-accent/40 transition-all placeholder:tracking-normal placeholder:text-sm placeholder:text-white/10"
                />
            </div>

            <button 
              disabled={status === 'loading'}
              type="submit" 
              className="btn-blazincode w-full flex justify-center py-6 text-[10px] font-bold tracking-[0.3em] uppercase bg-white text-black hover:bg-accent transition-all disabled:opacity-50"
            >
              <span className="btn-bg bg-accent" />
              <span className="relative z-10">{status === 'loading' ? 'Deciphering...' : 'Authorize Entry'}</span>
            </button>
            
            <AnimatePresence>
                {status === 'error' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-[10px] text-center uppercase tracking-widest font-bold">
                        Authentication Failed. Terminating.
                    </motion.p>
                )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-accent selection:text-black">
      {/* Admin Navbar */}
      <nav className="h-24 border-b border-white/5 flex justify-between items-center px-8 md:px-12 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Logo size={8} />
          <div className="hidden md:flex items-center gap-4">
             <div className="w-[1px] h-4 bg-white/10" />
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent/60">Control Node Alpha</span>
          </div>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 hover:text-red-400 transition-all p-3 border border-white/5 rounded-full hover:border-red-400/20">
          <LogOut size={14} /> Disconnect
        </button>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 md:py-20">
        
        <header className="mb-16">
            <h1 className="h-md tracking-tighter mb-4">Command <span className="text-accent/40">Center</span></h1>
            <p className="text-white/20 text-xs font-bold uppercase tracking-widest">Active session since {new Date().toLocaleTimeString()}</p>
        </header>

        <div className="flex flex-wrap gap-4 mb-16">
          <button 
            onClick={() => setActiveTab('contacts')}
            className={`flex items-center gap-4 px-10 py-5 rounded-2xl border uppercase text-[10px] font-bold tracking-[0.2em] transition-all ${activeTab === 'contacts' ? 'bg-white text-black border-white' : 'border-white/5 text-white/40 hover:border-white/20 bg-white/[0.02]'}`}
          >
            <Inbox size={16} /> Inquiries <span className={`ml-2 px-2 py-1 rounded-md ${activeTab === 'contacts' ? 'bg-black/10' : 'bg-white/5'}`}>{leads.contacts?.length || 0}</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('estimates')}
            className={`flex items-center gap-4 px-10 py-5 rounded-2xl border uppercase text-[10px] font-bold tracking-[0.2em] transition-all ${activeTab === 'estimates' ? 'bg-white text-black border-white' : 'border-white/5 text-white/40 hover:border-white/20 bg-white/[0.02]'}`}
          >
            <Calculator size={16} /> Estimates <span className={`ml-2 px-2 py-1 rounded-md ${activeTab === 'estimates' ? 'bg-black/10' : 'bg-white/5'}`}>{leads.estimates?.length || 0}</span>
          </button>
        </div>

        <div className="glass rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
             <TrendingUp size={200} />
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'contacts' && (
              <motion.div 
                key="contacts"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {leads.contacts?.length === 0 ? (
                   <div className="py-24 text-center border-2 border-dashed border-white/5 rounded-3xl">
                      <p className="text-white/10 text-xs uppercase tracking-[0.4em] font-bold">No active inquiries found in buffer.</p>
                   </div>
                ) : (
                  leads.contacts.map((contact, i) => (
                    <div key={contact.id || i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all group">
                       <div className="flex flex-col md:flex-row justify-between gap-8">
                          <div className="flex-1">
                             <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-4">
                                   <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                                      <Mail size={20} />
                                   </div>
                                   <div>
                                      <h3 className="text-2xl font-bold uppercase tracking-tight text-white group-hover:text-accent transition-colors">{contact.name}</h3>
                                      <a href={`mailto:${contact.email}`} className="text-xs text-white/40 hover:text-white transition-colors">{contact.email}</a>
                                   </div>
                                </div>
                                <span className="text-[10px] text-white/10 font-bold tracking-widest uppercase flex items-center gap-2">
                                   <Calendar size={12} /> {new Date(contact.date).toLocaleDateString()}
                                </span>
                             </div>
                             <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                <p className="text-white/60 text-sm font-light leading-relaxed">{contact.message}</p>
                             </div>
                          </div>
                       </div>
                    </div>
                  )).reverse()
                )}
              </motion.div>
            )}

            {activeTab === 'estimates' && (
              <motion.div 
                key="estimates"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                 {leads.estimates?.length === 0 ? (
                   <div className="py-24 text-center border-2 border-dashed border-white/5 rounded-3xl">
                      <p className="text-white/10 text-xs uppercase tracking-[0.4em] font-bold">Zero financial projections locked.</p>
                   </div>
                 ) : (
                  leads.estimates.map((est, i) => (
                    <div key={est.id || i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all group">
                       <div className="flex justify-between items-center border-b border-white/5 pb-8 mb-8">
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-xl font-bold">
                                $
                             </div>
                             <div>
                                <a href={`mailto:${est.email}`} className="text-xl font-bold hover:text-accent tracking-tight transition-colors">{est.email}</a>
                                <p className="text-[10px] text-white/20 font-bold tracking-widest uppercase mt-1">Projection Alpha</p>
                             </div>
                          </div>
                          <span className="text-[10px] text-white/10 font-bold tracking-widest uppercase">{new Date(est.date).toLocaleString()}</span>
                       </div>
                       
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                          <div>
                             <span className="block text-[10px] text-white/20 uppercase tracking-widest mb-3">Scope Target</span>
                             <span className="font-bold text-sm uppercase tracking-wider text-white/80">{est.selections.type}</span>
                          </div>
                          <div>
                             <span className="block text-[10px] text-white/20 uppercase tracking-widest mb-3">Scale</span>
                             <span className="font-bold text-sm uppercase tracking-wider text-white/80">{est.selections.pages}</span>
                          </div>
                          <div className="col-span-2 md:col-span-1">
                             <span className="block text-[10px] text-accent/40 uppercase tracking-widest mb-3">Total Investment</span>
                             <span className="text-3xl font-black text-accent">${est.total}</span>
                          </div>
                       </div>
                       
                       {est.selections.features && est.selections.features.length > 0 && (
                         <div className="mt-8 pt-8 border-t border-white/5">
                           <span className="block text-[10px] text-white/20 uppercase tracking-widest mb-4">Addons Synchronized</span>
                           <div className="flex flex-wrap gap-2">
                              {est.selections.features.map(f => (
                                <span key={f} className="text-[10px] px-4 py-2 bg-white/5 rounded-full border border-white/10 uppercase tracking-widest text-white/60 font-bold">{f}</span>
                              ))}
                           </div>
                         </div>
                       )}
                    </div>
                  )).reverse()
                 )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </main>
    </div>
  );
}

