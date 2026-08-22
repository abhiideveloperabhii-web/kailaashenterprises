import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link 
      to="/" 
      onClick={handleLogoClick}
      aria-label="Kailaash Enterprises Home" 
      className={`inline-flex items-center gap-1.5 sm:gap-2.5 group select-none transition-transform duration-300 active:scale-95 shrink min-w-0 cursor-pointer ${className}`}
    >
      {/* KE Royal Navy & Gold Monogram Emblem */}
      <img
        src={isDark ? keIconDark : keIconLight}
        alt="KE Emblem"
        className={`object-contain transition-transform duration-300 group-hover:scale-105 shrink-0 ${
          size === 'sm'
            ? 'h-7 sm:h-8 w-auto'
            : size === 'lg'
            ? 'h-11 sm:h-13 w-auto'
            : 'h-8 sm:h-10 md:h-11 lg:h-12 w-auto'
        }`}
      />

      {/* Vertical Separator Divider */}
      <div className={`w-[1px] sm:w-[1.5px] self-stretch rounded-full my-0.5 shrink-0 ${
        isDark ? 'bg-white/25' : 'bg-[#170A2C]/20'
      }`}></div>

      {/* Exact Brand Typography Graphic */}
      <img
        src={isDark ? kailaashTextDark : kailaashTextLight}
        alt="Kailaash Enterprises"
        className={`object-contain transition-transform duration-300 group-hover:scale-[1.02] shrink min-w-0 ${
          size === 'sm'
            ? 'h-6 sm:h-7 w-auto max-w-[100px] xs:max-w-[120px]'
            : size === 'lg'
            ? 'h-9 sm:h-11 w-auto max-w-[180px] sm:max-w-[210px]'
            : 'h-6 sm:h-7 md:h-8.5 lg:h-9.5 w-auto max-w-[115px] xs:max-w-[140px] sm:max-w-[170px] md:max-w-[195px]'
        }`}
      />
    </Link>
  );
}
