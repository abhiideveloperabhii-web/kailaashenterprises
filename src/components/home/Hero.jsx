import React from 'react';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import Icon from '../common/Icon';
import Button from '../common/Button';
import Container from '../common/Container';

export default function Hero() {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-14 md:pb-20 overflow-hidden bg-gradient-to-b from-[#FAF8F3] via-[#FAF8F3] to-[#F3EEF8]">
      {/* Subtle background ambient blur */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#32105F]/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <Container size="large" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & High-Conversion CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Top Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E2EE] shadow-xs text-xs font-extrabold text-[#32105F] mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#D7A72E] animate-pulse"></span>
              <span>Pune's Trusted Craftsmanship & Facility Partner</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#16131B] tracking-tight leading-[1.15]">
                Crafting Spaces. <br className="hidden sm:block" />
                <span className="text-[#32105F] relative inline-block">
                  Building Trust.
                  <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#D7A72E]/60 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none" fill="currentColor">
                    <path d="M0,8 Q50,0 100,8 L100,12 Q50,4 0,12 Z" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-[#68636F] leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-1">
                Custom carpentry, modular kitchens, designer wardrobes, residential painting, and commercial facility maintenance in Pune.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <Button
                href={getWhatsAppUrl("Hello Kailaash Enterprises, I would like to consult about carpentry & interior services.")}
                variant="whatsapp"
                size="lg"
                icon="MessageSquare"
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>

              <Button
                href={`tel:${COMPANY.phoneRaw}`}
                variant="primary"
                size="lg"
                icon="PhoneCall"
                className="w-full sm:w-auto"
              >
                Call: {COMPANY.phoneDisplay}
              </Button>

              <Button
                to="/services"
                variant="secondary"
                size="lg"
                iconRight="ArrowRight"
                className="w-full sm:w-auto"
              >
                Our Services
              </Button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs font-semibold text-[#68636F]">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="CheckCircle2" className="w-4 h-4 text-[#D7A72E]" />
                Free Site Visit in Pune
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="CheckCircle2" className="w-4 h-4 text-[#D7A72E]" />
                Master Tradesmen
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="CheckCircle2" className="w-4 h-4 text-[#D7A72E]" />
                Grade-A Quality Materials
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#FAF8F3] aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1000&q=80"
                  alt="Kailaash Enterprises master carpenter working on bespoke woodwork"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#170A2C]/70 via-transparent to-transparent"></div>
                
                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#D7A72E] mb-0.5">
                    Precision Craftsmanship
                  </div>
                  <div className="text-sm sm:text-base font-extrabold leading-snug">
                    Master Woodwork & Architectural Interiors
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Quality Guarantee */}
              <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-white p-3 rounded-2xl shadow-lg border border-[#E8E2EE] flex items-center gap-2.5 max-w-[200px]">
                <div className="w-9 h-9 rounded-xl bg-[#32105F] text-[#D7A72E] flex items-center justify-center shrink-0">
                  <Icon name="ShieldCheck" className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#16131B]">100% Quality</div>
                  <div className="text-[10px] text-[#68636F]">Verified Materials</div>
                </div>
              </div>

              {/* Floating Badge 2: Prompt Pune Service */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-white p-2.5 sm:p-3 rounded-2xl shadow-lg border border-[#E8E2EE] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#D7A72E]/15 text-[#32105F] flex items-center justify-center shrink-0">
                  <Icon name="MapPin" className="w-3.5 h-3.5 text-[#32105F]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#16131B]">Khardi, Pune</div>
                  <div className="text-[10px] text-[#68636F]">Doorstep Service</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
