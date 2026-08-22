import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo1.jpeg';

export default function Logo({
  theme = 'light', // 'light' | 'dark'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = ''
}) {
  const isDark = theme === 'dark';

  return (
    <Link 
      to="/" 
      aria-label="Kailaash Enterprises Home" 
      className={`inline-flex items-center group select-none transition-transform duration-300 active:scale-95 ${className}`}
    >
      {isDark ? (
        /* Premium Soft Pill for Dark Backgrounds (Footer) */
        <div className="bg-white px-3.5 py-1.5 rounded-2xl shadow-sm border border-white/20 inline-flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.02]">
          <img
            src={logoImg}
            alt="Kailaash Enterprises Logo"
            className={`object-contain ${
              size === 'sm'
                ? 'h-8 sm:h-9 w-auto max-w-[130px]'
                : size === 'lg'
                ? 'h-13 sm:h-15 w-auto max-w-[210px]'
                : 'h-10 sm:h-12 w-auto max-w-[170px] sm:max-w-[190px]'
            }`}
          />
        </div>
      ) : (
        /* Seamless, No-Box Natural Blended Logo for Light Headers (Navbar) */
        <img
          src={logoImg}
          alt="Kailaash Enterprises Logo"
          className={`object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03] ${
            size === 'sm'
              ? 'h-9 sm:h-10 w-auto max-w-[140px]'
              : size === 'lg'
              ? 'h-14 sm:h-16 w-auto max-w-[240px]'
              : 'h-11 sm:h-13 md:h-14 w-auto max-w-[180px] sm:max-w-[210px]'
          }`}
        />
      )}
    </Link>
  );
}
