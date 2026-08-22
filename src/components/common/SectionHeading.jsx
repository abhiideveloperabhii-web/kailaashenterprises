import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  theme = 'light', // 'light' | 'dark'
  className = ''
}) {
  const isDark = theme === 'dark';

  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border shadow-xs"
             style={{
               backgroundColor: isDark ? 'rgba(215, 167, 46, 0.15)' : 'rgba(50, 16, 95, 0.06)',
               color: isDark ? '#D7A72E' : '#32105F',
               borderColor: isDark ? 'rgba(215, 167, 46, 0.3)' : 'rgba(50, 16, 95, 0.12)'
             }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D7A72E]"></span>
          {badge}
        </div>
      )}

      {title && (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-4 ${
          isDark ? 'text-white' : 'text-[#16131B]'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          isDark ? 'text-[#C4B5D4]' : 'text-[#68636F]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
