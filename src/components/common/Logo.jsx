import React from 'react';
import { Link } from 'react-router-dom';
import keIconLight from '../../assets/ke-icon.png';
import keIconDark from '../../assets/ke-icon-dark.png';

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
      className={`inline-flex items-center gap-2 sm:gap-3 group select-none transition-transform duration-300 active:scale-95 shrink-0 ${className}`}
    >
      {/* KE Royal Navy & Gold Monogram Icon */}
      <img
        src={isDark ? keIconDark : keIconLight}
        alt="KE Emblem"
        className={`object-contain transition-transform duration-300 group-hover:scale-105 shrink-0 ${
          size === 'sm'
            ? 'h-8 sm:h-9 w-auto'
            : size === 'lg'
            ? 'h-12 sm:h-14 w-auto'
            : 'h-10 sm:h-11 md:h-12 w-auto'
        }`}
      />

      {/* Vertical Separator Divider */}
      <div className={`w-[1.5px] self-stretch rounded-full my-0.5 ${
        isDark ? 'bg-white/25' : 'bg-[#170A2C]/20'
      }`}></div>

      {/* Brand Typography: Crystal Clear & Big */}
      <div className="flex flex-col justify-center leading-none text-left">
        
        {/* KAILAASH Title */}
        <span className={`font-black tracking-tight ${
          isDark ? 'text-white' : 'text-[#170A2C]'
        } ${
          size === 'sm' 
            ? 'text-base sm:text-lg' 
            : size === 'lg' 
            ? 'text-2xl sm:text-3xl' 
            : 'text-lg sm:text-xl md:text-[22px]'
        }`}>
          KAILAASH
        </span>

        {/* ENTERPRISES with Gold Accent Lines */}
        <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
          <span className="w-2.5 sm:w-3.5 h-[1.5px] bg-[#D7A72E] rounded-full"></span>
          <span className={`font-extrabold uppercase text-[#D7A72E] ${
            size === 'sm'
              ? 'text-[7.5px] sm:text-[8.5px] tracking-[0.20em]'
              : 'text-[8.5px] sm:text-[9.5px] md:text-[10px] tracking-[0.22em]'
          }`}>
            ENTERPRISES
          </span>
          <span className="w-2.5 sm:w-3.5 h-[1.5px] bg-[#D7A72E] rounded-full"></span>
        </div>

      </div>
    </Link>
  );
}
