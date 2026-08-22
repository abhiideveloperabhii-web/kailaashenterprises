import React, { useState } from 'react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import { getWhatsAppUrl } from '../utils/whatsapp';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';
import Lightbox from '../components/common/Lightbox';
import FinalCTA from '../components/home/FinalCTA';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="bg-[#FAF8F3]">
      {/* Gallery Hero */}
      <section className="bg-[#170A2C] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden border-b border-[#32105F]">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#32105F]/50 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <Container size="large" className="relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D7A72E] text-xs font-extrabold uppercase tracking-wider mb-3 border border-[#D7A72E]/30">
            <Icon name="Image" className="w-3.5 h-3.5" />
            <span>Craftsmanship Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Work That Speaks <br />
            <span className="text-[#D7A72E]">For Itself.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4B5D4] mt-3 leading-relaxed max-w-2xl mx-auto">
            Browse our completed modular kitchens, custom wardrobes, living furniture, painting projects, and facility solutions executed across Pune.
          </p>
        </Container>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 sm:py-6 bg-white border-b border-[#E8E2EE] sticky top-[52px] z-20 shadow-xs">
        <Container size="large">
          <div className="flex flex-wrap items-center justify-center gap-2 overflow-x-auto py-1">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#32105F] text-white shadow-sm'
                    : 'bg-[#FAF8F3] text-[#68636F] hover:text-[#32105F] border border-[#E8E2EE]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 sm:py-16 md:py-20">
        <Container size="large">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-[#E8E2EE] cursor-pointer service-card-hover flex flex-col justify-between"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#170A2C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
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

                <div className="p-4 flex items-center justify-between border-t border-[#E8E2EE]">
                  <div>
                    <span className="text-[10px] font-bold text-[#D7A72E] uppercase tracking-wider block">
                      {item.categoryLabel} • {item.location}
                    </span>
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#16131B] group-hover:text-[#32105F] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#FAF8F3] group-hover:bg-[#32105F] group-hover:text-white text-[#32105F] flex items-center justify-center transition-colors shrink-0">
                    <Icon name="Maximize2" className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Box */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl bg-white border border-[#E8E2EE] text-center space-y-4 max-w-2xl mx-auto shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mx-auto">
              <Icon name="Sparkles" className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#16131B]">
                Have a specific design or floor plan in mind?
              </h3>
              <p className="text-xs sm:text-sm text-[#68636F] max-w-lg mx-auto leading-relaxed">
                Send us your layout, Pinterest reference, or blueprint on WhatsApp. We'll share material options and transparent estimates.
              </p>
            </div>
            <div className="pt-2">
              <Button
                href={getWhatsAppUrl("Hello Kailaash Enterprises, I have a design / floor plan reference for a project in Pune. Please review and provide advice.")}
                variant="whatsapp"
                size="lg"
                icon="MessageSquare"
              >
                Send Reference via WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        activeIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
