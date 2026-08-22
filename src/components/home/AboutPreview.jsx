import React from 'react';
import { COMPANY } from '../../data/company';
import Container from '../common/Container';
import Button from '../common/Button';
import Icon from '../common/Icon';

export default function AboutPreview() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-[#FAF8F3]" id="about">
      <Container size="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80"
                  alt="Precision woodworking workshop"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>

              {/* Founder Quote Card Overlay */}
              <div className="absolute -bottom-5 -right-2 sm:-right-6 bg-[#170A2C] text-white p-4 sm:p-5 rounded-3xl shadow-xl border border-[#D7A72E]/30 max-w-[260px] sm:max-w-xs">
                <div className="text-[10px] text-[#D7A72E] font-bold uppercase tracking-wider mb-1">
                  Guiding Philosophy
                </div>
                <div className="text-xs sm:text-sm italic font-medium leading-snug">
                  "{COMPANY.philosophy}"
                </div>
                <div className="text-[11px] text-[#C4B5D4] mt-1.5 font-bold">
                  — {COMPANY.founder}
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#32105F]/5 text-[#32105F] text-xs font-extrabold uppercase tracking-wider border border-[#32105F]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7A72E]"></span>
              About Kailaash Enterprises
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16131B] tracking-tight leading-tight">
              Built on Quality. <br />
              <span className="text-[#32105F]">Driven by Trust.</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#68636F] leading-relaxed">
              Headquartered in Khardi, Pune, Kailaash Enterprises brings uncompromising craftsmanship, transparent communication, and dependable facility support to homeowners, designers, and commercial organizations.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#68636F] leading-relaxed">
              We eliminate the stress of coordinating with multiple fragmented subcontractors. From custom-built modular kitchens with precision joinery to complete interior wall painting and corporate office support, our workforce delivers on time with guaranteed quality.
            </p>

            {/* 3 Core Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2EE]">
                <div className="w-7 h-7 rounded-lg bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mb-1.5">
                  <Icon name="Compass" className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-[#16131B]">Pune-Wide</div>
                <div className="text-[11px] text-[#68636F] mt-0.5">Rapid on-site response across Pune.</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2EE]">
                <div className="w-7 h-7 rounded-lg bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mb-1.5">
                  <Icon name="Layers" className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-[#16131B]">One-Stop Hub</div>
                <div className="text-[11px] text-[#68636F] mt-0.5">Interiors, painting, & facility support.</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2EE]">
                <div className="w-7 h-7 rounded-lg bg-[#32105F]/10 text-[#32105F] flex items-center justify-center mb-1.5">
                  <Icon name="ShieldCheck" className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-[#16131B]">Certified Materials</div>
                <div className="text-[11px] text-[#68636F] mt-0.5">Grade-A plywood & branded fittings.</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Button
                to="/about"
                variant="primary"
                size="md"
                iconRight="ArrowRight"
              >
                Know More About Us
              </Button>

              <Button
                to="/contact"
                variant="secondary"
                size="md"
              >
                Contact Pune Office
              </Button>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
