import React from 'react';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import Icon from '../common/Icon';

export default function FloatingActions() {
  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <a
          href={getWhatsAppUrl("Hello Kailaash Enterprises, I would like to enquire about your services in Pune.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-105 border border-white/40 cursor-pointer group"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <Icon name="MessageSquare" className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xs tracking-tight">WhatsApp Us</span>
        </a>
      </div>

      {/* Mobile Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-[#E8E2EE] px-3 py-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 gap-2">
          
          {/* Direct Phone Call */}
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl bg-[#FAF8F3] active:bg-[#32105F]/10 border border-[#E8E2EE] text-[#16131B] transition-colors"
          >
            <Icon name="Phone" className="w-4 h-4 text-[#32105F]" />
            <span className="text-xs font-bold tracking-tight">Call Now</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={getWhatsAppUrl("Hello Kailaash Enterprises, I would like to enquire about your services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl bg-[#25D366] active:bg-[#1EBE5D] text-white shadow-xs"
          >
            <Icon name="MessageSquare" className="w-4 h-4 text-white" />
            <span className="text-xs font-bold tracking-tight">WhatsApp</span>
          </a>

        </div>
      </div>
    </>
  );
}
