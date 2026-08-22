import React from 'react';
import { Link } from 'react-router-dom';
import keLogoImg from '../../assets/ke-logo.png';

export default function Logo({
  theme = 'light', // 'light' | 'dark'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = ''
}) {
  const isDark = theme === 'dark';

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 sm:gap-3.5 group select-none ${className}`}>
      
      {/* KE Royal Navy & Gold Monogram Emblem */}
      <div className={`shrink-0 overflow-hidden rounded-xl bg-white border shadow-xs transition-transform duration-300 group-hover:scale-105 flex items-center justify-center p-1 ${
        isDark ? 'border-white/20' : 'border-[#E8E2EE]'
      } ${
        size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-9 h-9 sm:w-11 sm:h-11'
      }`}>
        <img
          src={keLogoImg}
          alt="KE Monogram Emblem"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Vertical Divider Line */}
      <div className={`w-[1.5px] self-stretch rounded-full my-0.5 ${
        isDark ? 'bg-white/25' : 'bg-[#170A2C]/25'
      }`}></div>

      {/* Symmetrical Brand Typography */}
      <div className="flex flex-col items-center justify-center leading-none text-center pl-0.5">
        
        {/* KAILAASH Header */}
        <span className={`font-black tracking-[0.06em] text-center ${
          isDark ? 'text-white' : 'text-[#170A2C]'
        } ${
          size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg sm:text-xl'
        }`}>
          KAILAASH
        </span>

        {/* ENTERPRISES with Balanced Wing Lines */}
        <div className="flex items-center justify-center gap-1.5 mt-0.5 w-full">
          <span className="w-3 sm:w-4 h-[1.5px] bg-[#D7A72E] rounded-full"></span>
          <span className="text-[8px] sm:text-[9.5px] font-extrabold tracking-[0.24em] text-[#D7A72E] uppercase">
            ENTERPRISES
          </span>
          <span className="w-3 sm:w-4 h-[1.5px] bg-[#D7A72E] rounded-full"></span>
        </div>

      </div>
    </Link>
  );
}
