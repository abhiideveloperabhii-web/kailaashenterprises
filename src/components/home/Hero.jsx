import React from 'react';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import Icon from '../common/Icon';
import Button from '../common/Button';
import Container from '../common/Container';

export default function Hero() {
  return (
    <section className="relative pt-5 pb-8 sm:pt-8 sm:pb-12 md:pt-12 md:pb-16 overflow-hidden bg-gradient-to-b from-[#FAF8F3] via-[#FAF8F3] to-[#F3EEF8]">
      {/* Subtle background ambient glow */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[450px] h-[220px] bg-[#32105F]/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <Container size="large" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & High-Conversion CTAs */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-center lg:text-left">
            
            {/* Top Micro Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E2EE] shadow-2xs text-[11px] sm:text-xs font-extrabold text-[#32105F] mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#D7A72E] animate-pulse"></span>
              <span>Pune's Trusted Craftsmanship & Facility Partner</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#16131B] tracking-tight leading-[1.15]">
                Crafting Spaces. <br className="hidden sm:block" />
                <span className="text-[#32105F] relative inline-block">
                  Building Trust.
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#D7A72E]/60 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none" fill="currentColor">
                    <path d="M0,8 Q50,0 100,8 L100,12 Q50,4 0,12 Z" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base text-[#68636F] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Custom carpentry, modular kitchens, designer wardrobes, residential painting, and corporate support staffing in Pune.
              </p>
            </div>

            {/* Action Buttons: 2-Cols on Mobile, Flex on Desktop */}
            <div className="pt-1">
              <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
                <Button
                  href={getWhatsAppUrl("Hello Kailaash Enterprises, I would like to consult about carpentry & interior services.")}
                  variant="whatsapp"
                  size="md"
                  icon="MessageSquare"
                  className="w-full sm:w-auto text-xs sm:text-sm py-2.5 px-3 shadow-xs"
                >
                  WhatsApp
                </Button>

                <Button
                  href={`tel:${COMPANY.phoneRaw}`}
                  variant="primary"
                  size="md"
                  icon="PhoneCall"
                  className="w-full sm:w-auto text-xs sm:text-sm py-2.5 px-3 shadow-xs"
                >
                  Call Now
                </Button>

                <Button
                  to="/services"
                  variant="secondary"
                  size="md"
                  iconRight="ArrowRight"
                  className="col-span-2 sm:col-auto w-full sm:w-auto text-xs sm:text-sm py-2.5 px-4"
                >
                  Our Services
                </Button>
              </div>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-y-1 gap-x-3 sm:gap-x-4 text-[10px] sm:text-xs font-semibold text-[#68636F]">
              <span className="inline-flex items-center gap-1">
                <Icon name="CheckCircle2" className="w-3.5 h-3.5 text-[#D7A72E]" />
                Free Site Visit
              </span>
              <span className="inline-flex items-center gap-1">
                <Icon name="CheckCircle2" className="w-3.5 h-3.5 text-[#D7A72E]" />
                Master Tradesmen
              </span>
              <span className="inline-flex items-center gap-1">
                <Icon name="CheckCircle2" className="w-3.5 h-3.5 text-[#D7A72E]" />
                Grade-A Materials
              </span>
            </div>

          </div>

          {/* Right Column: 2x2 All-Services Combo Collage Card */}
          <div className="lg:col-span-5 relative mt-2 sm:mt-4 lg:mt-0 flex justify-center">
            <div className="bg-white p-2.5 sm:p-3.5 rounded-3xl border border-[#E8E2EE] shadow-lg w-full max-w-[300px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[360px] xl:max-w-[400px] space-y-2 sm:space-y-2.5">
              
              {/* 2x2 Services Combo Collage Grid */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                
                {/* Tile 1: Modular Kitchens */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80"
                    alt="Modular Kitchens in Pune"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                  <span className="absolute bottom-1.5 left-2 text-[9px] sm:text-[11px] font-extrabold text-white">
                    Modular Kitchens
                  </span>
                </div>

                {/* Tile 2: Custom Woodwork */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=500&q=80"
                    alt="Custom Woodwork & Fine Joinery in Pune"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                  <span className="absolute bottom-1.5 left-2 text-[9px] sm:text-[11px] font-extrabold text-white">
                    Custom Woodwork
                  </span>
                </div>

                {/* Tile 3: Painting & Wall Finishes */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80"
                    alt="Interior & Exterior Painting in Pune"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                  <span className="absolute bottom-1.5 left-2 text-[9px] sm:text-[11px] font-extrabold text-white">
                    Painting & Finishes
                  </span>
                </div>

                {/* Tile 4: Corporate Support Staff */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80"
                    alt="Corporate Support Staff in Pune"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                  <span className="absolute bottom-1.5 left-2 text-[9px] sm:text-[11px] font-extrabold text-white">
                    Corporate Staffing
                  </span>
                </div>

              </div>

              {/* Bottom Trust & Service Location Bar */}
              <div className="p-2 sm:p-2.5 rounded-2xl bg-[#170A2C] text-white flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#D7A72E]/20 text-[#D7A72E] flex items-center justify-center shrink-0">
                    <Icon name="ShieldCheck" className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[9px] font-extrabold text-[#D7A72E] uppercase leading-none">
                      Complete Execution Team
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-white/95 mt-0.5">
                      Khardi, Pune • Serving All Areas
                    </div>
                  </div>
                </div>

                <span className="text-[9px] font-bold bg-white/10 px-2 py-0.5 rounded-md text-[#D7A72E] shrink-0 hidden sm:inline">
                  100% Quality
                </span>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
