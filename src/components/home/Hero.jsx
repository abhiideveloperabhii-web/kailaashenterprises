import React from 'react';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import Icon from '../common/Icon';
import Button from '../common/Button';
import Container from '../common/Container';

export default function Hero() {
  return (
    <section className="relative pt-3 pb-4 sm:pt-4 sm:pb-6 md:pt-6 md:pb-8 overflow-hidden bg-gradient-to-b from-[#FAF8F3] via-[#FAF8F3] to-[#F3EEF8]">
      {/* Subtle background ambient glow */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[550px] h-[240px] bg-[#32105F]/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <Container size="large" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & High-Conversion CTAs */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Top Micro Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E2EE] shadow-2xs text-[11px] sm:text-xs font-extrabold text-[#32105F] mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#D7A72E] animate-pulse"></span>
              <span>Pune's Trusted Craftsmanship & Facility Partner</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-black text-[#16131B] tracking-tight leading-[1.12]">
                Crafting Spaces. <br className="hidden sm:block" />
                <span className="text-[#32105F] relative inline-block">
                  Building Trust.
                  <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-[#D7A72E]/60 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none" fill="currentColor">
                    <path d="M0,8 Q50,0 100,8 L100,12 Q50,4 0,12 Z" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base text-[#68636F] leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Custom carpentry, modular kitchens, designer wardrobes, residential painting, and corporate support staffing in Pune.
              </p>
            </div>

            {/* Action Buttons: 2-Cols on Mobile, Flex on Desktop */}
            <div className="pt-1">
              <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                <Button
                  href={getWhatsAppUrl("Hello Kailaash Enterprises, I would like to consult about carpentry & interior services.")}
                  variant="whatsapp"
                  size="md"
                  icon="MessageSquare"
                  className="w-full sm:w-auto text-xs sm:text-sm py-2.5 sm:py-3 px-4 shadow-sm"
                >
                  WhatsApp
                </Button>

                <Button
                  href={`tel:${COMPANY.phoneRaw}`}
                  variant="primary"
                  size="md"
                  icon="PhoneCall"
                  className="w-full sm:w-auto text-xs sm:text-sm py-2.5 sm:py-3 px-4 shadow-sm"
                >
                  Call Now
                </Button>

                <Button
                  to="/services"
                  variant="secondary"
                  size="md"
                  iconRight="ArrowRight"
                  className="col-span-2 sm:col-auto w-full sm:w-auto text-xs sm:text-sm py-2.5 sm:py-3 px-5"
                >
                  Our Services
                </Button>
              </div>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-y-1.5 gap-x-4 sm:gap-x-5 text-[11px] sm:text-xs font-semibold text-[#68636F]">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="CheckCircle2" className="w-4 h-4 text-[#D7A72E]" />
                Free Site Visit
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="CheckCircle2" className="w-4 h-4 text-[#D7A72E]" />
                Master Tradesmen
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="CheckCircle2" className="w-4 h-4 text-[#D7A72E]" />
                Grade-A Materials
              </span>
            </div>

          </div>

          {/* Right Column: Generous, Prominent 2x2 All-Services Combo Collage Card */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0 flex justify-center lg:justify-end">
            <div className="bg-white p-3 sm:p-4 md:p-5 rounded-3xl border border-[#E8E2EE] shadow-xl w-full max-w-[340px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[500px] xl:max-w-[540px] space-y-3">
              
              {/* 2x2 Services Combo Collage Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                
                {/* Tile 1: Modular Kitchens */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
                    alt="Modular Kitchens in Pune"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <span className="absolute bottom-2 left-2.5 sm:left-3 text-[11px] sm:text-xs md:text-sm font-black text-white drop-shadow-xs">
                    Modular Kitchens
                  </span>
                </div>

                {/* Tile 2: Custom Woodwork */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80"
                    alt="Custom Woodwork & Fine Joinery in Pune"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <span className="absolute bottom-2 left-2.5 sm:left-3 text-[11px] sm:text-xs md:text-sm font-black text-white drop-shadow-xs">
                    Custom Woodwork
                  </span>
                </div>

                {/* Tile 3: Painting & Wall Finishes */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
                    alt="Interior & Exterior Painting in Pune"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <span className="absolute bottom-2 left-2.5 sm:left-3 text-[11px] sm:text-xs md:text-sm font-black text-white drop-shadow-xs">
                    Painting & Finishes
                  </span>
                </div>

                {/* Tile 4: Corporate Support Staff */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                    alt="Corporate Support Staff in Pune"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <span className="absolute bottom-2 left-2.5 sm:left-3 text-[11px] sm:text-xs md:text-sm font-black text-white drop-shadow-xs">
                    Corporate Staffing
                  </span>
                </div>

              </div>

              {/* Bottom Trust & Service Location Bar */}
              <div className="p-2.5 sm:p-3 rounded-2xl bg-[#170A2C] text-white flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#D7A72E]/20 text-[#D7A72E] flex items-center justify-center shrink-0">
                    <Icon name="ShieldCheck" className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-extrabold text-[#D7A72E] uppercase tracking-wider leading-none">
                      Complete Execution Team
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white/95 mt-0.5">
                      Khardi, Pune • Serving All Areas
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold bg-white/10 px-2.5 py-1 rounded-lg text-[#D7A72E] shrink-0 hidden sm:inline">
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
