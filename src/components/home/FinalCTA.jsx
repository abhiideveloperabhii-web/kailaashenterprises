import React from 'react';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import Container from '../common/Container';
import Button from '../common/Button';
import Icon from '../common/Icon';

export default function FinalCTA() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-[#FAF8F3] relative overflow-hidden">
      <Container size="default">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-[#E8E2EE] shadow-lg relative overflow-hidden text-center space-y-5">
          
          {/* Subtle decorative background gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#32105F]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D7A72E]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Micro Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#32105F]/5 border border-[#32105F]/15 text-xs font-extrabold uppercase tracking-wider text-[#32105F]">
            <Icon name="Sparkles" className="w-3.5 h-3.5 text-[#D7A72E]" />
            <span>Start Your Project With Confidence</span>
          </div>

          {/* Heading */}
          <div className="space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#16131B] tracking-tight leading-tight">
              Let's Build Something <br className="hidden sm:block" />
              <span className="text-[#32105F]">Beautiful Together.</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#68636F] leading-relaxed">
              From custom modular interiors to commercial facility staffing in Pune, our expert team is ready to assist.
            </p>
          </div>

          {/* Direct CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              href={getWhatsAppUrl("Hello Kailaash Enterprises, I would like to consult about a new project in Pune.")}
              variant="whatsapp"
              size="md"
              icon="MessageSquare"
              className="w-full sm:w-auto shadow-sm"
            >
              WhatsApp Consultation
            </Button>

            <Button
              href={`tel:${COMPANY.phoneRaw}`}
              variant="primary"
              size="md"
              icon="PhoneCall"
              className="w-full sm:w-auto shadow-sm"
            >
              Call: {COMPANY.phoneDisplay}
            </Button>

            <Button
              to="/contact"
              variant="secondary"
              size="md"
              iconRight="ArrowRight"
              className="w-full sm:w-auto"
            >
              Pune Office Info
            </Button>
          </div>

          {/* Location Trust Line */}
          <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-[#68636F]">
            <Icon name="MapPin" className="w-3.5 h-3.5 text-[#D7A72E]" />
            <span>Khandoba Building, Khardi, Pune — Serving All Localities</span>
          </div>

        </div>
      </Container>
    </section>
  );
}
