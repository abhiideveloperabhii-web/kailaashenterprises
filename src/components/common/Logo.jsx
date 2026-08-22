import React from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../../assets/logo-transparent.png';
import logoDark from '../../assets/logo-dark-theme.png';

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
      className={`inline-flex items-center select-none transition-transform duration-300 active:scale-95 group ${className}`}
    >
      <img
        src={isDark ? logoDark : logoLight}
        alt="Kailaash Enterprises"
        className={`object-contain transition-transform duration-300 group-hover:scale-[1.03] ${
          size === 'sm'
            ? 'h-9 sm:h-10 w-auto max-w-[140px]'
            : size === 'lg'
            ? 'h-14 sm:h-16 w-auto max-w-[240px]'
            : 'h-11 sm:h-13 md:h-14 w-auto max-w-[180px] sm:max-w-[210px]'
        }`}
      />
    </Link>
  );
}
