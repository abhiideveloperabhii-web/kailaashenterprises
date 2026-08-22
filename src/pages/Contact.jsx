import React, { useState } from 'react';
import { COMPANY } from '../data/company';
import { getWhatsAppUrl, getServiceInquiryUrl, getSiteVisitUrl } from '../utils/whatsapp';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';

export default function Contact() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY.location.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const quickInquiries = [
    {
      title: "Modular Kitchen & Wardrobes",
      desc: "Custom kitchen layouts, acrylic finishes, sliding wardrobes & TV units.",
      icon: "Layers",
      url: getServiceInquiryUrl("Modular Kitchen & Wardrobes"),
    },
    {
      title: "Book Free Pune Site Visit",
      desc: "Laser measurement & feasibility inspection at your home or office.",
      icon: "Calendar",
      url: getSiteVisitUrl("Complete Interior"),
    },
    {
      title: "Painting & Wall Finishes",
      desc: "Interior/exterior Asian Paints Royale, texture & waterproof coatings.",
      icon: "Paintbrush",
      url: getServiceInquiryUrl("Painting & Wall Finishes"),
    },
    {
      title: "Corporate Support Staff Provide",
      desc: "Accountant, Data Entry Operators, Electrician, Plumbers, Janitors, Pantry Boys.",
      icon: "Building",
      url: getServiceInquiryUrl("Corporate Support Staff Provide - Accountant, Data Entry Operators, Electrician, Plumbers, Janitors, Pantry Boys"),
    },
    {
      title: "Carpentry Repairs & Joinery",
      desc: "Door/window fixes, hinge replacements, custom woodwork & restorations.",
      icon: "Wrench",
      url: getServiceInquiryUrl("Carpentry Repairs & Joinery"),
    },
    {
      title: "General Inquiries & Pricing",
      desc: "Speak with our team to discuss project requirements or get estimates.",
      icon: "MessageSquare",
      url: getWhatsAppUrl("Hello Kailaash Enterprises, I would like to get in touch regarding a new project in Pune."),
    },
  ];

  return (
    <div className="bg-[#FAF8F3]">
      {/* Contact Hero */}
      <section className="bg-[#170A2C] text-white py-6 sm:py-8 md:py-10 relative overflow-hidden border-b border-[#32105F]">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#32105F]/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <Container size="large" className="relative z-10 text-center max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#D7A72E] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-2 border border-[#D7A72E]/30">
            <Icon name="PhoneCall" className="w-3.5 h-3.5" />
            <span>Direct Reach • Pune</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Connect With Our Team
          </h1>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="py-10 sm:py-16 md:py-20">
        <Container size="large">
          
          {/* Top Primary Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 sm:mb-14">
            
            {/* Phone Call Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2EE] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center shrink-0">
                    <Icon name="Phone" className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#68636F] block">
                      Direct Phone Call
                    </span>
                    <a 
                      href={`tel:${COMPANY.phoneRaw}`} 
                      className="text-xl sm:text-2xl font-black text-[#16131B] hover:text-[#32105F] transition-colors"
                    >
                      {COMPANY.phoneDisplay}
                    </a>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#68636F] leading-relaxed">
                  Call for urgent bookings, project discussions, or site visit scheduling. Operating Monday to Saturday, 9:00 AM to 8:00 PM.
                </p>
              </div>

              <div className="pt-5">
                <Button
                  href={`tel:${COMPANY.phoneRaw}`}
                  variant="primary"
                  size="md"
                  icon="PhoneCall"
                  fullWidth
                >
                  Call Now: {COMPANY.phoneDisplay}
                </Button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#25D366]/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                    <Icon name="MessageSquare" className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#25D366] font-bold block">
                      Instant WhatsApp Chat
                    </span>
                    <a 
                      href={getWhatsAppUrl()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl sm:text-2xl font-black text-[#16131B] hover:text-[#25D366] transition-colors"
                    >
                      {COMPANY.phoneDisplay}
                    </a>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#68636F] leading-relaxed">
                  Send photos, floor plans, or requirements directly on WhatsApp. Our team responds promptly with estimates and advice.
                </p>
              </div>

              <div className="pt-5">
                <Button
                  href={getWhatsAppUrl("Hello Kailaash Enterprises, I would like to consult with your team on WhatsApp.")}
                  variant="whatsapp"
                  size="md"
                  icon="MessageSquare"
                  fullWidth
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

          </div>

          {/* 1-Tap WhatsApp Inquiries Section */}
          <div className="mb-12 sm:mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#32105F]/5 text-[#32105F] mb-2 border border-[#32105F]/10">
                <Icon name="Sparkles" className="w-3.5 h-3.5 text-[#D7A72E]" />
                <span>Quick WhatsApp Inquiries</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16131B] tracking-tight">
                Select Your Requirement
              </h2>
              <p className="text-xs sm:text-sm text-[#68636F] mt-1">
                Tap any category below to start a dedicated WhatsApp conversation with pre-configured project details.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {quickInquiries.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8E2EE] hover:border-[#25D366] hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] text-[#32105F] group-hover:bg-[#25D366] group-hover:text-white transition-colors flex items-center justify-center">
                        <Icon name={item.icon} className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-2.5 py-0.5 rounded-full">
                        WhatsApp
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-[#16131B] group-hover:text-[#32105F] transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#68636F] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-[#E8E2EE] flex items-center justify-between text-xs font-bold text-[#25D366] group-hover:translate-x-0.5 transition-transform">
                    <span>Enquire via WhatsApp</span>
                    <Icon name="ArrowRight" className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Office Location, Founder & Contact Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Info Column: Address & Details */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Pune Office Card */}
              <div className="bg-[#170A2C] text-white p-6 sm:p-8 rounded-3xl border border-[#32105F] shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#D7A72E] text-[#170A2C]">
                    Registered Office
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="text-xs text-[#D7A72E] hover:underline flex items-center gap-1 cursor-pointer font-bold"
                  >
                    <Icon name={copiedAddress ? "Check" : "Copy"} className="w-3.5 h-3.5" />
                    <span>{copiedAddress ? "Copied!" : "Copy Address"}</span>
                  </button>
                </div>

                <div className="space-y-1 text-sm text-[#C4B5D4]">
                  <div className="font-extrabold text-white text-base">{COMPANY.location.building}</div>
                  <div>{COMPANY.location.office}</div>
                  <div>{COMPANY.location.area}, Pune — {COMPANY.location.pincode}</div>
                  <div>{COMPANY.location.state}, {COMPANY.location.country}</div>
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#C4B5D4]">
                  <span className="flex items-center gap-1.5">
                    <Icon name="Clock" className="w-3.5 h-3.5 text-[#D7A72E]" />
                    Mon - Sat: 9:00 AM - 8:00 PM
                  </span>
                  <a
                    href={COMPANY.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D7A72E] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <Icon name="ExternalLink" className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Founder Contact & Official Email Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Founder Card */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8E2EE] shadow-xs space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#D7A72E]/15 text-[#32105F] flex items-center justify-center">
                    <Icon name="User" className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#68636F] block">
                      Founder & Director
                    </span>
                    <div className="text-base font-extrabold text-[#16131B]">
                      {COMPANY.founder}
                    </div>
                  </div>
                  <p className="text-[11px] text-[#68636F]">
                    Kailaash Enterprises Pune
                  </p>
                </div>

                {/* Email Card */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8E2EE] shadow-xs space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center">
                    <Icon name="Mail" className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#68636F] block">
                      Official Email
                    </span>
                    <a 
                      href={`mailto:${COMPANY.email}`} 
                      className="text-xs sm:text-sm font-bold text-[#16131B] hover:text-[#32105F] transition-colors break-all block"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                  <p className="text-[11px] text-[#68636F]">
                    For tenders & commercial RFPs
                  </p>
                </div>

              </div>

            </div>

            {/* Right Column: Google Maps Location Frame */}
            <div className="lg:col-span-6 bg-white p-4 sm:p-6 rounded-3xl border border-[#E8E2EE] shadow-sm">
              <div className="flex items-center justify-between mb-3 px-1">
                <div>
                  <h3 className="text-base font-extrabold text-[#16131B]">Pune Service Location</h3>
                  <p className="text-xs text-[#68636F]">Khardi / Kharadi, Pune — Serving all Pune areas</p>
                </div>
                <a
                  href={COMPANY.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#32105F] hover:underline inline-flex items-center gap-1"
                >
                  <span>Directions</span>
                  <Icon name="ArrowRight" className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Interactive Map */}
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-[#E8E2EE] bg-gray-100 relative">
                <iframe
                  title="Kailaash Enterprises Pune Location"
                  src="https://maps.google.com/maps?q=Khardi,Pune,Maharashtra,India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#68636F]">
                <span>✓ On-site visits available across Pune</span>
                <a
                  href={getSiteVisitUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#32105F] font-bold hover:underline"
                >
                  Schedule Site Visit →
                </a>
              </div>
            </div>

          </div>

        </Container>
      </section>
    </div>
  );
}
