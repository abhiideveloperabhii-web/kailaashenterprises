import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, SERVICE_CATEGORIES } from '../data/services';
import { getServiceInquiryUrl } from '../utils/whatsapp';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';
import FinalCTA from '../components/home/FinalCTA';

export default function Services() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const filteredServices = SERVICES.filter((s) => {
    const matchesCat = selectedCat === 'all' || s.category === selectedCat;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const faqs = [
    {
      q: "Do you offer free on-site measurements & consultations in Pune?",
      a: "Yes! We provide complimentary site visits across Pune. Our specialist takes precision laser measurements, understands your requirements, and presents an itemized estimate with zero commitment required."
    },
    {
      q: "What types of plywood and materials do you use for modular kitchens & wardrobes?",
      a: "We strictly use genuine Boiling-Water-Proof (BWP 710) Marine Plywood and High-Density Moisture-Resistant (HDHMR) core boards with branded hardware from Blum, Hettich, and Ebco."
    },
    {
      q: "How do your corporate support staffing contracts work?",
      a: "We deploy background-verified corporate assistants, junior accountants, data operators, janitors, and pantry staff on flexible monthly agreements with immediate replacement guarantees in case of absenteeism."
    },
    {
      q: "How soon can you start work on an interior or maintenance project?",
      a: "For carpentry and interior projects, 3D/CAD drawings and material prep take 2-4 days post-advance. For emergency plumbing, electrical, and repairs, we offer same-day or next-day on-call service in Pune."
    }
  ];

  return (
    <div className="bg-[#FAF8F3]">
      {/* Services Hero */}
      <section className="bg-[#170A2C] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden border-b border-[#32105F]">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#32105F]/50 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <Container size="large" className="relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D7A72E] text-xs font-extrabold uppercase tracking-wider mb-3 border border-[#D7A72E]/30">
            <Icon name="Wrench" className="w-3.5 h-3.5" />
            <span>Complete Service Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Comprehensive Services. <br />
          </h1>

        </Container>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="py-6 sm:py-8 bg-white border-b border-[#E8E2EE]">
        <Container size="large">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedCat === cat.id
                      ? 'bg-[#32105F] text-white shadow-sm'
                      : 'bg-[#FAF8F3] text-[#68636F] hover:text-[#32105F] border border-[#E8E2EE]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search services (e.g. kitchen)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-[#E8E2EE] focus:border-[#32105F] focus:ring-2 focus:ring-[#32105F]/20 text-xs sm:text-sm outline-none bg-[#FAF8F3]"
              />
              <Icon name="Search" className="w-4 h-4 text-[#68636F] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-16 md:py-20">
        <Container size="large">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-[#E8E2EE] p-6 max-w-md mx-auto">
              <Icon name="SearchX" className="w-10 h-10 text-[#68636F] mx-auto mb-2" />
              <h3 className="text-lg font-bold text-[#16131B]">No matching services found</h3>
              <p className="text-xs text-[#68636F] mt-1">Try another search keyword or switch category filters.</p>
              <button
                onClick={() => { setSelectedCat('all'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-[#32105F] underline cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E8E2EE] service-card-hover flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    {/* Service Image */}
                    <Link to={`/services/${service.slug}`} className="block aspect-[16/10] overflow-hidden relative bg-gray-100">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#32105F] px-2.5 py-0.5 rounded-full shadow-xs border border-white/40">
                        {service.categoryName}
                      </span>
                    </Link>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-8 h-8 rounded-xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center shrink-0">
                          <Icon name={service.icon} className="w-4 h-4" />
                        </div>
                        <h3 className="text-base sm:text-lg font-extrabold text-[#16131B] group-hover:text-[#32105F] transition-colors leading-snug">
                          <Link to={`/services/${service.slug}`}>
                            {service.title}
                          </Link>
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#68636F] leading-relaxed mb-3">
                        {service.shortDescription}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-1 text-xs text-[#16131B] font-medium border-t border-[#E8E2EE] pt-3">
                        {service.features.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D7A72E]"></span>
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-5 pt-0 flex items-center justify-between gap-2.5">
                    <Button
                      to={`/services/${service.slug}`}
                      variant="primary"
                      size="sm"
                      iconRight="ArrowRight"
                      fullWidth
                    >
                      View Details
                    </Button>
                    <a
                      href={getServiceInquiryUrl(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#25D366] hover:text-[#1EBE5D] bg-[#25D366]/10 hover:bg-[#25D366]/20 px-3 py-2 rounded-xl transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                    >
                      <Icon name="MessageSquare" className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Services FAQ Accordion */}
      <section className="py-10 sm:py-16 bg-white border-t border-[#E8E2EE]">
        <Container size="default">
          <SectionHeading
            badge="Frequently Asked"
            title="Service & Execution FAQs"
          />

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E8E2EE] overflow-hidden bg-[#FAF8F3] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#16131B] flex items-center justify-between gap-3 cursor-pointer hover:text-[#32105F]"
                  >
                    <span>{faq.q}</span>
                    <Icon
                      name="ChevronDown"
                      className={`w-4 h-4 text-[#32105F] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-[#68636F] leading-relaxed border-t border-[#E8E2EE]/60 pt-2.5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
