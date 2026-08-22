import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { COMPANY } from '../data/company';
import { getServiceInquiryUrl, getSiteVisitUrl } from '../utils/whatsapp';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';
import FinalCTA from '../components/home/FinalCTA';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  ).slice(0, 3);

  return (
    <div className="bg-[#FAF8F3]">
      {/* Breadcrumb Header */}
      <div className="bg-[#170A2C] text-white pt-8 pb-12 sm:pt-10 sm:pb-16 relative overflow-hidden border-b border-[#32105F]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#32105F]/50 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <Container size="large" className="relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#C4B5D4] mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#D7A72E] font-semibold">{service.title}</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D7A72E] text-xs font-extrabold uppercase tracking-wider border border-[#D7A72E]/30">
              <Icon name={service.icon} className="w-3.5 h-3.5" />
              <span>{service.categoryName}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-xs sm:text-base text-[#C4B5D4] leading-relaxed">
              {service.tagline || service.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <Button
                href={getServiceInquiryUrl(service.title)}
                variant="whatsapp"
                size="md"
                icon="MessageSquare"
              >
                WhatsApp Inquiry
              </Button>
              <Button
                href={`tel:${COMPANY.phoneRaw}`}
                variant="secondary"
                size="md"
                icon="PhoneCall"
                className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#170A2C]"
              >
                Call Specialist
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content & Sidebar Layout */}
      <section className="py-10 sm:py-16 md:py-20">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Main Content Column */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-10">
              
              {/* Hero Image Showcase */}
              <div className="rounded-3xl overflow-hidden shadow-md border-4 border-white bg-gray-100 aspect-[16/9]">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Detailed Overview */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2EE] space-y-3">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#16131B]">
                  Overview & Craftsmanship
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#68636F] leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Key Features & Specifications */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2EE] space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#16131B] flex items-center gap-2">
                  <Icon name="CheckCircle" className="w-5 h-5 text-[#32105F]" />
                  Key Highlights & Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#FAF8F3] border border-[#E8E2EE]">
                      <div className="w-4.5 h-4.5 rounded-full bg-[#D7A72E]/20 text-[#32105F] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#16131B] leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included (Scope of Work) */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2EE] space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#16131B] flex items-center gap-2">
                  <Icon name="PackageCheck" className="w-5 h-5 text-[#32105F]" />
                  What's Included in This Service
                </h3>
                <div className="space-y-2.5">
                  {service.inclusions.map((inc, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F3]">
                      <Icon name="Check" className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-[#16131B]">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Image Strips */}
              {service.galleryImages && service.galleryImages.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#16131B]">
                    Project Work Snapshot
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.galleryImages.map((img, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden shadow-xs border border-[#E8E2EE] aspect-[4/3] bg-gray-100">
                        <img src={img} alt={`${service.title} project view ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-5 sticky top-24">
              
              {/* Quick Inquiry Card */}
              <div className="bg-[#32105F] text-white p-5 sm:p-7 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D7A72E]/15 rounded-full blur-2xl pointer-events-none"></div>
                
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#D7A72E] text-[#170A2C] mb-2.5">
                  Direct Estimation
                </span>

                <h3 className="text-lg sm:text-xl font-extrabold leading-tight">
                  Interested in {service.title}?
                </h3>
                <p className="text-xs text-[#C4B5D4] mt-1.5 leading-relaxed">
                  Get custom design recommendations, material samples, and a transparent quotation via WhatsApp or phone.
                </p>

                <div className="space-y-2.5 pt-5">
                  <Button
                    href={getServiceInquiryUrl(service.title)}
                    variant="whatsapp"
                    fullWidth
                    size="md"
                    icon="MessageSquare"
                  >
                    Quick WhatsApp Inquiry
                  </Button>

                  <Button
                    href={getSiteVisitUrl(service.title)}
                    variant="gold"
                    fullWidth
                    size="md"
                    icon="Calendar"
                  >
                    Book Free Site Visit
                  </Button>

                  <Button
                    href={`tel:${COMPANY.phoneRaw}`}
                    variant="secondary"
                    fullWidth
                    size="md"
                    icon="PhoneCall"
                    className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#170A2C]"
                  >
                    Call: {COMPANY.phoneDisplay}
                  </Button>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 text-center text-[11px] text-[#C4B5D4]">
                  ✓ Free Pune laser site measurement <br />
                  ✓ Certified materials & branded fittings
                </div>
              </div>

              {/* Related Services Links */}
              {relatedServices.length > 0 && (
                <div className="bg-white p-5 rounded-3xl border border-[#E8E2EE] space-y-3">
                  <h4 className="text-xs font-extrabold text-[#16131B] uppercase tracking-wider">
                    Related {service.categoryName}
                  </h4>
                  <div className="space-y-2">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/services/${rel.slug}`}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F3] hover:bg-[#32105F]/5 transition-colors group"
                      >
                        <span className="text-xs font-bold text-[#16131B] group-hover:text-[#32105F] truncate">{rel.title}</span>
                        <Icon name="ArrowRight" className="w-3 h-3 text-[#32105F] shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
