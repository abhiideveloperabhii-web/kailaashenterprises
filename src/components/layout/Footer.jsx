import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl, getSiteVisitUrl } from '../../utils/whatsapp';
import Icon from '../common/Icon';
import Container from '../common/Container';
import Logo from '../common/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#170A2C] text-white pt-8 pb-20 md:pt-10 md:pb-8 border-t border-[#32105F] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#32105F]/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      
      <Container size="large" className="relative z-10 space-y-6">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          
          {/* Column 1: Brand & 5-Line Business Overview (Span 5 on Desktop) */}
          <div className="lg:col-span-5 space-y-3">
            <Logo theme="dark" showTagline={true} size="md" />

            {/* Business Commitment Overview */}
            <p className="text-xs sm:text-[13px] text-[#C4B5D4] leading-relaxed max-w-md">
              Kailaash Enterprises is committed to delivering quality products and reliable solutions with a strong focus on customer satisfaction. We believe in building long-term relationships through trust, quality, and professional service. With our dedication and expertise, we continue to serve our customers with excellence and consistency.
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#D7A72E] hover:text-[#170A2C] text-xs font-bold text-white border border-white/10 transition-colors"
              >
                <Icon name="Phone" className="w-3.5 h-3.5 text-[#D7A72E]" />
                <span>{COMPANY.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl("Hello Kailaash Enterprises, I would like to enquire about your services in Pune.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-xs font-bold text-[#25D366] hover:text-white border border-[#25D366]/30 transition-colors"
              >
                <Icon name="MessageSquare" className="w-3.5 h-3.5" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Column 2 & 3: Side-by-Side 2-Columns on Mobile / iOS / iPad (Span 4 on Desktop) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-6 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10">
            
            {/* Left: Services List */}
            <div className="space-y-2">
              <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#D7A72E] flex items-center gap-1.5 pb-1 border-b border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7A72E]"></span>
                <span>Services</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#C4B5D4]">
                <li>
                  <Link to="/services/modular-kitchen" className="hover:text-white transition-colors">Modular Kitchens</Link>
                </li>
                <li>
                  <Link to="/services/wardrobes-cupboards" className="hover:text-white transition-colors">Wardrobes & Units</Link>
                </li>
                <li>
                  <Link to="/services/custom-woodwork" className="hover:text-white transition-colors">Custom Woodwork</Link>
                </li>
                <li>
                  <Link to="/services/painting-services" className="hover:text-white transition-colors">Painting & Finishes</Link>
                </li>
                <li>
                  <Link to="/services/corporate-facility-support" className="hover:text-white transition-colors">Facility Staffing</Link>
                </li>
                <li>
                  <Link to="/services" className="text-[#D7A72E] font-bold inline-block hover:underline pt-0.5">
                    All 11+ Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right: Company Links */}
            <div className="space-y-2">
              <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#D7A72E] flex items-center gap-1.5 pb-1 border-b border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7A72E]"></span>
                <span>Company</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#C4B5D4]">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-white transition-colors">Work Gallery</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                </li>
                <li>
                  <a 
                    href={getSiteVisitUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#D7A72E] font-bold inline-block hover:underline pt-0.5"
                  >
                    Free Site Visit →
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Column 4: Pune Location Card (Span 3 on Desktop) */}
          <div className="lg:col-span-3 space-y-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10">
            <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#D7A72E] flex items-center gap-1.5 pb-1 border-b border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7A72E]"></span>
              <span>Pune Headquarters</span>
            </h4>
            <div className="text-xs text-[#C4B5D4] space-y-1 leading-relaxed">
              <p className="text-white font-bold">{COMPANY.founder} <span className="text-[10px] text-gray-400 font-normal">(Director)</span></p>
              <p className="text-[11px]">{COMPANY.location.fullAddress}</p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                <span className="text-white/80">Mon-Sat 9AM-8PM</span>
                <span>•</span>
                <a
                  href={COMPANY.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D7A72E] hover:underline font-bold inline-flex items-center gap-0.5"
                >
                  <span>Google Maps</span>
                  <Icon name="ExternalLink" className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#C4B5D4]">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </Container>
    </footer>
  );
}
