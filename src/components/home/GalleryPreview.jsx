import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../../data/gallery';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Icon from '../common/Icon';
import Lightbox from '../common/Lightbox';

export default function GalleryPreview() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const displayedItems = selectedCategory === 'all'
    ? GALLERY_ITEMS.slice(0, 6)
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory).slice(0, 6);

  const handleOpenLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : displayedItems.length - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev < displayedItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-[#FAF8F3]" id="gallery">
      <Container size="large">
        <SectionHeading
          badge="Verified Portfolio"
          title="Work That Speaks for Itself."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 overflow-x-auto pb-1">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#32105F] text-white shadow-sm'
                  : 'bg-white text-[#68636F] hover:text-[#32105F] border border-[#E8E2EE]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md bg-white border border-[#E8E2EE] cursor-pointer service-card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#170A2C]/80 via-[#170A2C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#D7A72E] text-[#170A2C] mb-1">
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold leading-tight">{item.title}</h4>
                    <p className="text-xs text-gray-300 mt-1 flex items-center gap-1">
                      <Icon name="MapPin" className="w-3 h-3 text-[#D7A72E]" />
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Below image card content */}
              <div className="p-3.5 sm:p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#D7A72E] uppercase tracking-wider block">
                    {item.categoryLabel}
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#16131B] group-hover:text-[#32105F] transition-colors truncate max-w-[180px] sm:max-w-xs">
                    {item.title}
                  </h4>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#FAF8F3] group-hover:bg-[#32105F] group-hover:text-white text-[#32105F] flex items-center justify-center transition-colors">
                  <Icon name="Maximize2" className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="mt-10 text-center">
          <Button
            to="/gallery"
            variant="secondary"
            size="md"
            iconRight="ArrowRight"
          >
            View All Projects in Full Gallery
          </Button>
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          items={displayedItems}
          activeIndex={activeImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </Container>
    </section>
  );
}
