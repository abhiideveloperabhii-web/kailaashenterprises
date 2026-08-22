import React from 'react';

export default function Container({ children, className = "", size = "default" }) {
  const maxW = size === "small" ? "max-w-4xl" : size === "large" ? "max-w-7xl" : "max-w-6xl";
  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxW} ${className}`}>
      {children}
    </div>
  );
}
