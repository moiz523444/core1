import React from "react";
import Logo from "../ui/Logo";
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, ExternalLink, ArrowUpRight } from "lucide-react";
import { GlobeCanvas } from "../ui/GlobeCanvas";

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      {/* 3D Globe Background */}
      <GlobeCanvas />
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24">
          <div className="md:col-span-2 space-y-12">
            <div className="space-y-8">
              <Logo size={16} className="opacity-100" />
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
                Build Your <br />{" "}
                <span className="text-white/20">Future.</span>
              </h2>
              <p className="text-white/40 max-w-sm text-lg font-light leading-relaxed">
                We help businesses grow their digital presence with custom software and scalable web solutions.
              </p>
            </div>

            <div className="flex gap-8">
              {[
                { name: "Instagram", link: "https://instagram.com", icon: <ExternalLink size={20} /> },
                { name: "Linkedin", link: "https://linkedin.com", icon: <ExternalLink size={20} /> },
                { name: "Twitter", link: "https://twitter.com", icon: <ExternalLink size={20} /> },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/30 hover:text-accent transition-all group"
                >
                  {social.icon}
                  <span className="hidden sm:inline">{social.name}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-accent">
              Navigation
            </h3>
            <ul className="space-y-6">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Pricing", href: "/pricing" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-base text-white/40 hover:text-white transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-0 h-[1px] bg-accent transition-all group-hover:w-6" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-accent">
              Contact Us
            </h3>
            <ul className="space-y-10">
              <li className="space-y-3">
                <span className="text-base font-bold uppercase tracking-widest text-white/30 block">
                  Email
                </span>
                <a
                  href="mailto:Contact@core1.co"
                  className="text-lg md:text-xl text-white/70 hover:text-accent transition-colors flex items-center gap-4 break-words"
                >
                  <Mail size={20} className="text-accent/40 flex-shrink-0" />{" "}
                  <span className="break-all">Contact@core1.co</span>
                </a>
              </li>
              <li className="space-y-3">
                <span className="text-base font-bold uppercase tracking-widest text-white/30 block">
                  Phone
                </span>
                <a
                  href="tel:+923001234567"
                  className="text-lg md:text-xl text-white/70 hover:text-accent transition-colors flex items-center gap-4"
                >
                  <Phone size={20} className="text-accent/40 flex-shrink-0" /> +92 300 1234567
                </a>
              </li>
              <li className="space-y-3">
                <span className="text-base font-bold uppercase tracking-widest text-white/30 block">
                  Location
                </span>
                <p className="text-lg md:text-xl text-white/70 flex items-center gap-4">
                  <Globe size={20} className="text-accent/40 flex-shrink-0" /> Worldwide /
                  Remote
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-white/30 text-center md:text-left">
          <p>© 2026 Core 1 Creative Studio. All Rights Reserved.</p>
          <div className="flex gap-12">
            <p className="hover:text-accent transition-colors cursor-pointer">
              Terms of Service
            </p>
            <p className="hover:text-accent transition-colors cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
