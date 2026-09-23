import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logo({ className = "", imgClassName = "" }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      onClick={handleLogoClick}
      className={`flex items-center cursor-pointer group ${className}`}
    >
      <img 
        src="/logo1.png" 
        alt="Blazincode Logo" 
        className={`object-contain transition-transform duration-500 group-hover:scale-105 ${imgClassName || 'w-32 md:w-44 h-auto -my-12 md:-my-16 max-w-none'}`} 
      />
    </div>
  );
}
