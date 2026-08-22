import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({
  theme = 'light', // 'light' | 'dark'
  showTagline = true,
  size = 'md', // 'sm' | 'md' | 'lg'
  className = ''
}) {
  const isDark = theme === 'dark';

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 sm:gap-3.5 group select-none ${className}`}>
      
      {/* 5-Person Swirl Collaboration Icon */}
      <div className={`shrink-0 transition-transform duration-300 group-hover:scale-105 ${
        size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-9 h-9 sm:w-10 sm:h-10'
      }`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs" fill="none">
          <g transform="translate(50, 50)">
            {/* Person 1: Top (Sky Blue) */}
            <g transform="rotate(0)">
              <circle cx="0" cy="-34" r="7.5" fill="#0099DA" />
              <path d="M-13 -22 C-13 -13 0 -13 0 0 C7 -6 16 -12 13 -22 C9 -26 -9 -26 -13 -22 Z" fill="#0099DA" />
            </g>
            {/* Person 2: Top-Right (Emerald Green) */}
            <g transform="rotate(72)">
              <circle cx="0" cy="-34" r="7.5" fill="#00A859" />
              <path d="M-13 -22 C-13 -13 0 -13 0 0 C7 -6 16 -12 13 -22 C9 -26 -9 -26 -13 -22 Z" fill="#00A859" />
            </g>
            {/* Person 3: Bottom-Right (Golden Orange) */}
            <g transform="rotate(144)">
              <circle cx="0" cy="-34" r="7.5" fill="#F7941D" />
              <path d="M-13 -22 C-13 -13 0 -13 0 0 C7 -6 16 -12 13 -22 C9 -26 -9 -26 -13 -22 Z" fill="#F7941D" />
            </g>
            {/* Person 4: Bottom-Left (Crimson Red) */}
            <g transform="rotate(216)">
              <circle cx="0" cy="-34" r="7.5" fill="#C1272D" />
              <path d="M-13 -22 C-13 -13 0 -13 0 0 C7 -6 16 -12 13 -22 C9 -26 -9 -26 -13 -22 Z" fill="#C1272D" />
            </g>
            {/* Person 5: Top-Left (Magenta Pink) */}
            <g transform="rotate(288)">
              <circle cx="0" cy="-34" r="7.5" fill="#E6007E" />
              <path d="M-13 -22 C-13 -13 0 -13 0 0 C7 -6 16 -12 13 -22 C9 -26 -9 -26 -13 -22 Z" fill="#E6007E" />
            </g>
          </g>
        </svg>
      </div>

      {/* Vertical Divider Line */}
      <div className={`w-[1.5px] self-stretch rounded-full my-0.5 ${
        isDark ? 'bg-white/25' : 'bg-[#170A2C]/25'
      }`}></div>

      {/* Symmetrical Centered Brand Typography */}
      <div className="flex flex-col items-center justify-center leading-none text-center pl-0.5">
        
        {/* KAILAASH Header centered over ENTERPRISES */}
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

        {/* Optional Tagline */}
        {showTagline && (
          <span className={`text-[6.5px] sm:text-[7.5px] font-bold tracking-[0.14em] uppercase mt-1 text-center hidden sm:block ${
            isDark ? 'text-[#C4B5D4]' : 'text-[#68636F]'
          }`}>
            QUALITY WORK. LASTING IMPRESSION.
          </span>
        )}

      </div>
    </Link>
  );
}
