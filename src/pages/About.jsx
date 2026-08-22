import React from 'react';
import { COMPANY } from '../data/company';
import { getWhatsAppUrl } from '../utils/whatsapp';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';
import Process from '../components/home/Process';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FinalCTA from '../components/home/FinalCTA';

export default function About() {
  return (
    <div className="bg-[#FAF8F3]">
      {/* About Page Hero */}
      <section className="bg-[#170A2C] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden border-b border-[#32105F]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#32105F]/50 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <Container size="large" className="relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D7A72E] text-xs font-extrabold uppercase tracking-wider mb-3 border border-[#D7A72E]/30">
            <Icon name="Building" className="w-3.5 h-3.5" />
            <span>About Kailaash Enterprises</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Craftsmanship with Integrity. <br />
            <span className="text-[#D7A72E]">Built for Pune.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4B5D4] mt-3 leading-relaxed max-w-2xl mx-auto">
            Delivering bespoke woodwork, modular interiors, painting, and facility support with disciplined workmanship and transparent pricing.
          </p>
        </Container>
      </section>

      {/* Brand Story Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Story Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#32105F]/5 text-[#32105F] text-xs font-extrabold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7A72E]"></span>
                Our Identity & Roots
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#16131B] tracking-tight leading-tight">
                Transforming Spaces with <br />
                <span className="text-[#32105F]">Mastery and Care.</span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-[#68636F] leading-relaxed">
                Based out of Khardi, Pune, Kailaash Enterprises was built on the core belief that quality craftsmanship and honest service create lasting partnerships. Over the years, we have grown into a respected multi-service contractor, trusted by homeowners, interior designers, architects, and corporate enterprises across the city.
              </p>

              <p className="text-xs sm:text-sm md:text-base text-[#68636F] leading-relaxed">
                Whether you need a custom-built modular kitchen with precision joinery, full home painting with Royale finishes, or dedicated corporate office support personnel, our trained workforce delivers on time with guaranteed quality.
              </p>

              {/* Guiding Principle Card */}
              <div className="p-4 sm:p-5 rounded-3xl bg-[#FAF8F3] border border-[#E8E2EE]">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#D7A72E] mb-1">
                  Our Customer Promise
                </div>
                <div className="text-base font-bold text-[#16131B] italic">
                  "{COMPANY.philosophy}"
                </div>
                <p className="text-xs text-[#68636F] mt-1.5">
                  Every drawer track tested, every surface sanded smooth, and every project signed off only after complete customer satisfaction.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button 
                  href={getWhatsAppUrl("Hello Kailaash Enterprises, I would like to consult about a project in Pune.")} 
                  variant="whatsapp" 
                  size="md" 
                  icon="MessageSquare"
                >
                  WhatsApp Consultation
                </Button>
                <Button 
                  href={`tel:${COMPANY.phoneRaw}`} 
                  variant="secondary" 
                  size="md" 
                  icon="PhoneCall"
                >
                  Call {COMPANY.phoneDisplay}
                </Button>
              </div>
            </div>

            {/* Story Visual */}
            <div className="lg:col-span-5 mt-4 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF8F3] max-w-sm sm:max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1000&q=80"
                  alt="Kailaash master joinery"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#170A2C]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-[10px] font-bold text-[#D7A72E] uppercase">Founder & Operations</div>
                    <div className="text-lg font-black">{COMPANY.founder}</div>
                    <div className="text-xs text-[#C4B5D4] mt-0.5">{COMPANY.location.fullAddress}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Core Values 4-Block */}
      <section className="py-10 sm:py-16 md:py-20 bg-[#FAF8F3] border-t border-[#E8E2EE]">
        <Container size="large">
          <SectionHeading
            badge="Guiding Values"
            title="The Standards We Live By"
            subtitle="Four unwavering pillars that define how we work, communicate, and deliver every project."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E8E2EE] shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mb-4">
                <Icon name="Target" className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#16131B] mb-1.5">Millimeter Precision</h3>
              <p className="text-xs sm:text-sm text-[#68636F] leading-relaxed">
                Laser measurement and meticulous joinery ensure flawless alignment in all kitchens, wardrobes, and fixtures.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E8E2EE] shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mb-4">
                <Icon name="ShieldCheck" className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#16131B] mb-1.5">Genuine Materials</h3>
              <p className="text-xs sm:text-sm text-[#68636F] leading-relaxed">
                No compromise on raw materials. We use only branded BWP plywood, ISI fittings, and premium Asian Paints.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E8E2EE] shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mb-4">
                <Icon name="Clock" className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#16131B] mb-1.5">On-Time Delivery</h3>
              <p className="text-xs sm:text-sm text-[#68636F] leading-relaxed">
                Disciplined milestone management ensures your project completes exactly as scheduled.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E8E2EE] shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mb-4">
                <Icon name="CheckCircle" className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#16131B] mb-1.5">Transparent Pricing</h3>
              <p className="text-xs sm:text-sm text-[#68636F] leading-relaxed">
                Itemized quotes upfront with zero surprise billing, hidden labor charges, or inflated material estimates.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Execution Process Section */}
      <Process />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
