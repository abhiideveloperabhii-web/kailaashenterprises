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
    <Link to="/" className={`inline-flex items-center group select-none ${className}`}>
      <img
        src={logoImg}
        alt="Kailaash Enterprises"
        className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
          isDark 
            ? 'bg-white p-1.5 rounded-xl shadow-xs' 
            : 'mix-blend-multiply'
        } ${
          size === 'sm'
            ? 'h-8 sm:h-9 w-auto max-w-[130px]'
            : size === 'lg'
            ? 'h-13 sm:h-16 w-auto max-w-[220px]'
            : 'h-10 sm:h-12 w-auto max-w-[160px] sm:max-w-[190px]'
        }`}
      />
    </Link>
  );
}
