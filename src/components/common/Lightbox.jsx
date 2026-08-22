import React, { useEffect } from 'react';
import Icon from './Icon';

export default function Lightbox({ items = [], activeIndex = 0, isOpen = false, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items.length) return null;

  const currentItem = items[activeIndex] || items[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
        aria-label="Close image preview"
      >
        <Icon name="X" className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
        aria-label="Previous project image"
      >
        <Icon name="ChevronLeft" className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
        aria-label="Next project image"
      >
        <Icon name="ChevronRight" className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div 
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/40 border border-white/10 shadow-2xl">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-auto max-h-[70vh] object-contain rounded-2xl animate-fade-in"
          />
        </div>

        {/* Caption & Metadata */}
        <div className="mt-4 text-center text-white max-w-2xl px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#D7A72E]/20 text-[#D7A72E] border border-[#D7A72E]/40 mb-2">
            <span>{currentItem.categoryLabel}</span>
            <span>•</span>
            <span>{currentItem.location}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight">{currentItem.title}</h3>
          <p className="text-sm text-gray-300 mt-1">{currentItem.description}</p>
          <div className="text-xs text-gray-400 mt-2 font-mono">
            {activeIndex + 1} of {items.length}
          </div>
        </div>
      </div>
    </div>
  );
}
