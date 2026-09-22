import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logo({ className = "", size = 32 }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      onClick={handleLogoClick}
      className={`flex items-center gap-3 cursor-pointer group ${className}`}
    >
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <img src="/favicon.svg" alt="Blazincode Logo" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white">Blazin</span>
        <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-secondary">code</span>
      </div>
    </div>
  );
}
