import React from 'react';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import Icon from '../common/Icon';
import Button from '../common/Button';
import Container from '../common/Container';

export default function Hero() {
  return (
    <section className="relative pt-6 pb-10 sm:pt-8 sm:pb-14 md:pt-12 md:pb-16 overflow-hidden bg-gradient-to-b from-[#FAF8F3] via-[#FAF8F3] to-[#F3EEF8]">
      {/* Subtle background ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#32105F]/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <Container size="large" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & High-Conversion CTAs (Span 7 on Desktop) */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            
            {/* Top Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E2EE] shadow-2xs text-[11px] sm:text-xs font-extrabold text-[#32105F] mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#D7A72E] animate-pulse"></span>
              <span>Pune's Trusted Craftsmanship & Facility Partner</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#16131B] tracking-tight leading-[1.18]">
                Crafting Spaces. <br className="hidden sm:block" />
                <span className="text-[#32105F] relative inline-block">
                  Building Trust.
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#D7A72E]/60 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none" fill="currentColor">
                    <path d="M0,8 Q50,0 100,8 L100,12 Q50,4 0,12 Z" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base text-[#68636F] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Custom carpentry, modular kitchens, designer wardrobes, residential painting, and commercial facility maintenance in Pune.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 pt-1">
              <Button
                href={getWhatsAppUrl("Hello Kailaash Enterprises, I would like to consult about carpentry & interior services.")}
                variant="whatsapp"
                size="md"
                icon="MessageSquare"
                className="w-full sm:w-auto shadow-xs"
              >
                Chat on WhatsApp
              </Button>

              <Button
                href={`tel:${COMPANY.phoneRaw}`}
                variant="primary"
                size="md"
                icon="PhoneCall"
                className="w-full sm:w-auto shadow-xs"
              >
                Call: {COMPANY.phoneDisplay}
              </Button>

              <Button
                to="/services"
                variant="secondary"
                size="md"
                iconRight="ArrowRight"
                className="w-full sm:w-auto"
              >
                Our Services
              </Button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-1.5 gap-x-4 text-[11px] sm:text-xs font-semibold text-[#68636F]">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="CheckCircle2" className="w-3.5 h-3.5 text-[#D7A72E]" />
                Free Site Visit in Pune
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="CheckCircle2" className="w-3.5 h-3.5 text-[#D7A72E]" />
                Master Tradesmen
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="CheckCircle2" className="w-3.5 h-3.5 text-[#D7A72E]" />
                Grade-A Materials
              </span>
            </div>

          </div>

          {/* Right Column: Compact, Proportionate Hero Visual (Span 5 on Desktop) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[360px] xl:max-w-[400px]">
              
              {/* Compact Visual Image Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 sm:border-4 border-white bg-[#FAF8F3] aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80"
                  alt="Kailaash Enterprises master carpentry & interior finishes in Pune"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#170A2C]/80 via-transparent to-transparent"></div>
                
                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#D7A72E]">
                    Precision Craftsmanship
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold leading-snug">
                    Master Woodwork & Interiors
                  </div>
                </div>
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -bottom-3 -left-2 sm:-left-4 bg-white px-2.5 py-1.5 rounded-xl shadow-md border border-[#E8E2EE] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#32105F] text-[#D7A72E] flex items-center justify-center shrink-0">
                  <Icon name="ShieldCheck" className="w-3.5 h-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-extrabold text-[#16131B]">100% Quality</div>
                  <div className="text-[9px] text-[#68636F]">Verified Materials</div>
                </div>
              </div>

              {/* Floating Location Badge */}
              <div className="absolute -top-2.5 -right-2 sm:-right-3 bg-white px-2.5 py-1.5 rounded-xl shadow-md border border-[#E8E2EE] flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md bg-[#D7A72E]/15 text-[#32105F] flex items-center justify-center shrink-0">
                  <Icon name="MapPin" className="w-3 h-3 text-[#32105F]" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-bold text-[#16131B]">Khardi, Pune</div>
                  <div className="text-[9px] text-[#68636F]">Doorstep Service</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
