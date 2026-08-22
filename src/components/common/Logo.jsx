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
      className={`inline-flex items-center select-none transition-transform duration-300 active:scale-95 group shrink-0 ${className}`}
    >
      <img
        src={isDark ? logoDark : logoLight}
        alt="Kailaash Enterprises Logo"
        className={`object-contain transition-transform duration-300 group-hover:scale-[1.03] ${
          size === 'sm'
            ? 'h-8 sm:h-9 w-auto max-w-[130px]'
            : size === 'lg'
            ? 'h-13 sm:h-16 w-auto max-w-[220px]'
            : 'h-10 sm:h-12 md:h-13 lg:h-14 w-auto max-w-[160px] sm:max-w-[190px] md:max-w-[220px]'
        }`}
      />
    </Link>
  );
}
