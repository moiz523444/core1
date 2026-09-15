import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import Magnetic from '../ui/Magnetic';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Impact', href: '/services' },
    { name: 'Vault', href: '/portfolio' },
    { name: 'Estimator', href: '/pricing' },
  ];

  return (
    <nav className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-5xl ${scrolled ? 'top-2 md:top-6' : 'top-4 md:top-8'}`}>
      <div className="glass-dark rounded-full px-6 md:px-8 py-3 md:py-4 flex justify-between items-center relative overflow-hidden group">
        {/* Animated Accent Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <Logo size={scrolled ? 14 : 18} className="hover:scale-105 transition-transform duration-500" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.3em] text-white/70">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-accent transition-colors relative group/link">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover/link:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Magnetic>
            <Link to="/contact" className="hidden sm:block text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-secondary transition-all duration-500">
              Connect
            </Link>
          </Magnetic>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/60 hover:text-white transition-colors p-2">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-0 w-full glass-dark rounded-3xl p-6 flex flex-col gap-4 md:hidden z-50 overflow-hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors border-b border-white/5 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-5 bg-white text-black text-center font-bold uppercase tracking-widest text-xs rounded-2xl"
            >
              Connect Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

