import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'gold' | 'whatsapp' | 'ghost' | 'dark' | 'outline-white'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon,
  iconRight,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight rounded-xl transition-all duration-300 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";
  
  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5 min-h-[36px]",
    md: "text-sm px-5 py-2.5 gap-2 min-h-[44px]",
    lg: "text-base px-7 py-3.5 gap-2.5 min-h-[52px]",
  }[size];

  const variantStyles = {
    primary: "bg-[#32105F] text-white hover:bg-[#240A44] hover:text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-[#32105F]",
    secondary: "bg-white text-[#32105F] border-2 border-[#32105F] hover:bg-[#32105F] hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
    gold: "bg-[#D7A72E] text-[#170A2C] hover:bg-[#E5B53C] hover:text-[#170A2C] shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-[#D7A72E]",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1EBE5D] hover:text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-[#25D366]",
    dark: "bg-[#170A2C] text-white hover:bg-[#261048] hover:text-white border border-[#32105F] shadow-lg hover:-translate-y-0.5",
    ghost: "bg-transparent text-[#32105F] hover:bg-[#E8E2EE]/40 border border-transparent",
    'outline-white': "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-[#170A2C] shadow-sm hover:shadow-md hover:-translate-y-0.5",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {icon && <Icon name={icon} className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
