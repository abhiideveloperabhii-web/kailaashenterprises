import React from 'react';
import { Link } from 'react-router-dom';
import { getServiceInquiryUrl } from '../../utils/whatsapp';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Icon from '../common/Icon';

export default function FeaturedServices() {
  const showcases = [
    {
      badge: "Signature Craftsmanship",
      title: "Modular Kitchens made for the way you live.",
      subtitle: "Functional layouts, 100% boiling-water-proof materials, soft-close hardware, and clean acrylic finishing designed seamlessly around your kitchen space.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "L-shaped, Parallel, and Island ergonomic configurations",
        "Anti-scratch matte & high-gloss acrylic shutters",
        "Lifetime smooth Blum / Hettich soft-close tandem boxes"
      ],
      link: "/services/modular-kitchen",
      serviceName: "Modular Kitchen",
      reversed: false,
    },
    {
      badge: "Living & Bedroom",
      title: "Wardrobes & Furniture crafted with purpose.",
      subtitle: "Floor-to-ceiling wardrobes with fluted glass, floating TV backdrops with ambient lighting, and bespoke beds engineered for lifetime durability.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Tinted profile sliding doors with top-hung silent tracks",
        "Concealed wire cable management for TV backdrops",
        "Internal LED sensor lighting and velvet jewelry organizers"
      ],
      link: "/services/wardrobes-cupboards",
      serviceName: "Wardrobes & Modular Cupboards",
      reversed: true,
    },
    {
      badge: "Commercial Solutions",
      title: "Corporate Support Staff Provide.",
      subtitle: "Corporate Support Staff Provide – Accountant, Data Entry Operators, Electrician, Plumbers, Janitors, Pantry Boys.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Accountant & Data Entry Operators for office operations",
        "Licensed Electricians & Master Plumbers for technical maintenance",
        "Police-verified Janitors, Housekeeping & Pantry Boys"
      ],
      link: "/services/corporate-facility-support",
      serviceName: "Corporate Support Staffing",
      reversed: false,
    }
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white border-y border-[#E8E2EE]">
      <Container size="large">
        <SectionHeading
          badge="Featured Excellence"
          title="Designed for Living. Engineered to Last."
          subtitle="A closer look at how Kailaash Enterprises blends artisanal woodworking discipline with modern commercial reliability."
        />

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {showcases.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center ${
                item.reversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${item.reversed ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-[#FAF8F3] group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#170A2C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* Text Content Column */}
              <div className={`lg:col-span-6 space-y-4 ${item.reversed ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#32105F]/5 text-[#32105F] text-xs font-extrabold uppercase tracking-wider border border-[#32105F]/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7A72E]"></span>
                  {item.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#16131B] tracking-tight leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#68636F] leading-relaxed">
                  {item.subtitle}
                </p>

                <ul className="space-y-2 pt-1 text-xs sm:text-sm font-semibold text-[#16131B]">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <div className="w-4.5 h-4.5 rounded-full bg-[#D7A72E]/20 text-[#32105F] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="Check" className="w-3 h-3 text-[#32105F]" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button
                    to={item.link}
                    variant="primary"
                    size="md"
                    iconRight="ArrowRight"
                  >
                    View Details
                  </Button>

                  <Button
                    href={getServiceInquiryUrl(item.serviceName)}
                    variant="whatsapp"
                    size="md"
                    icon="MessageSquare"
                  >
                    WhatsApp Inquiry
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
