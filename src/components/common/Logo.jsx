import React from 'react';
import { Link } from 'react-router-dom';
import keIconLight from '../../assets/ke-icon.png';
import keIconDark from '../../assets/ke-icon-dark.png';
import kailaashTextLight from '../../assets/kailaash-text.png';
import kailaashTextDark from '../../assets/kailaash-text-dark.png';

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
      {/* KE Royal Navy & Gold Monogram Emblem */}
      <img
        src={isDark ? keIconDark : keIconLight}
        alt="KE Monogram Emblem"
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

      {/* Exact Brand Typography Graphic (Original Serif Font & Gold Wings) */}
      <img
        src={isDark ? kailaashTextDark : kailaashTextLight}
        alt="Kailaash Enterprises"
        className={`object-contain transition-transform duration-300 group-hover:scale-[1.02] shrink-0 ${
          size === 'sm'
            ? 'h-7 sm:h-8 w-auto max-w-[120px]'
            : size === 'lg'
            ? 'h-10 sm:h-12 w-auto max-w-[200px]'
            : 'h-8 sm:h-9 md:h-10 w-auto max-w-[140px] sm:max-w-[165px] md:max-w-[185px]'
        }`}
      />
    </Link>
  );
}
