import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/services';
import { getServiceInquiryUrl } from '../../utils/whatsapp';
import Icon from '../common/Icon';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';
import Button from '../common/Button';

export default function ServicesPreview() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-[#FAF8F3]" id="services">
      <Container size="large">
        <SectionHeading
          badge="End-to-End Capabilities"
          title="Everything You Need. One Trusted Team."
          subtitle="From custom woodwork to commercial facility management, we deliver dependable workmanship across Pune."
        />

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 overflow-x-auto pb-1">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#32105F] text-white shadow-sm'
                  : 'bg-white text-[#68636F] hover:text-[#32105F] hover:bg-white/80 border border-[#E8E2EE]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E8E2EE] service-card-hover flex flex-col justify-between group shadow-xs"
            >
              <div>
                {/* Top Card Icon & Category Label */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center group-hover:bg-[#32105F] group-hover:text-white transition-all duration-300">
                    <Icon name={service.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#68636F] bg-[#FAF8F3] px-2.5 py-0.5 rounded-lg border border-[#E8E2EE]">
                    {service.categoryName}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-extrabold text-[#16131B] group-hover:text-[#32105F] transition-colors mb-1.5">
                  <Link to={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>

                {/* Service Short Description */}
                <p className="text-xs sm:text-sm text-[#68636F] leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Features Bullets */}
                <ul className="space-y-1 mb-5 text-xs text-[#16131B] font-medium border-t border-[#E8E2EE] pt-3">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D7A72E]"></span>
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-3.5 border-t border-[#E8E2EE] flex items-center justify-between gap-2.5">
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

        {/* View All Services Footer Link */}
        <div className="mt-10 text-center">
          <Button
            to="/services"
            variant="secondary"
            size="md"
            iconRight="ArrowRight"
          >
            Explore Complete Service Catalog (All 11+ Services)
          </Button>
        </div>
      </Container>
    </section>
  );
}
