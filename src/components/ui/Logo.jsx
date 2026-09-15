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
        {/* Abstract 'C' shape */}
        <div 
          className="absolute inset-0 border-2 border-white rounded-full transition-all duration-500 group-hover:rotate-180" 
          style={{ clipPath: 'polygon(100% 38%, 45% 38%, 45% 62%, 100% 62%, 100% 100%, 0% 100%, 0% 0%, 100% 0%)' }}
        />
        {/* The '1' indicator */}
        <div 
          className="w-[2px] h-3/5 bg-white rounded-full transition-all duration-500 group-hover:bg-secondary"
        />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white">Core</span>
        <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-secondary">1</span>
      </div>
    </div>
  );
}
