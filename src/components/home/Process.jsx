import React from 'react';
import { COMPANY } from '../../data/company';
import { getSiteVisitUrl } from '../../utils/whatsapp';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function Process() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white border-b border-[#E8E2EE]" id="process">
      <Container size="large">
        <SectionHeading
          badge="Disciplined Execution"
          title="From Requirement to Reality."
          subtitle="Our proven 4-step workflow ensures absolute clarity, zero hidden surprises, and flawless craftsmanship from day one."
        />

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {COMPANY.processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#FAF8F3] rounded-3xl p-5 sm:p-6 border border-[#E8E2EE] relative group hover:border-[#32105F]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#32105F]/20 group-hover:text-[#32105F] transition-colors font-mono">
                    {step.step}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#32105F]/10 text-[#32105F] text-xs font-black flex items-center justify-center">
                    ✓
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#16131B] group-hover:text-[#32105F] transition-colors mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#68636F] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E2EE]/60 mt-4 flex items-center text-[10px] font-bold text-[#D7A72E]">
                <span>Phase {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Bottom CTA Banner */}
        <div className="mt-10 p-5 sm:p-7 rounded-3xl bg-[#FAF8F3] border border-[#E8E2EE] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-extrabold text-[#16131B]">Ready to start Phase 01?</h4>
            <p className="text-xs sm:text-sm text-[#68636F] mt-0.5">Book your free site visit in Pune. No obligations, zero consultation fees.</p>
          </div>
          <Button
            href={getSiteVisitUrl("General Interior / Project")}
            variant="whatsapp"
            size="md"
            icon="MessageSquare"
            className="shrink-0"
          >
            WhatsApp for Free Site Visit
          </Button>
        </div>
      </Container>
    </section>
  );
}
