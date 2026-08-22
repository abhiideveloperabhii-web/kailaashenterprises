import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Icon from '../common/Icon';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Master Craftsmanship",
      desc: "Our carpenters, painters, and technicians bring disciplined workmanship, precise laser alignment, and zero-compromise joinery.",
      icon: "Award"
    },
    {
      title: "Certified Genuine Materials",
      desc: "We use only authentic boiling-water-proof (BWP) plywood, ISI-marked hardware, and genuine Asian Paints / Berger coatings.",
      icon: "ShieldCheck"
    },
    {
      title: "Strict Timeline Adherence",
      desc: "We respect your schedule. Milestones are agreed in writing before kickoff, ensuring punctual project handover.",
      icon: "Clock"
    },
    {
      title: "Customer-First Philosophy",
      desc: "'Customer's Satisfaction Is Our Profit'. We complete rigorous final inspections with you before sign-off.",
      icon: "Smile"
    },
    {
      title: "Transparent, Fair Pricing",
      desc: "Clear itemized quotations with zero hidden surprises, inflated margins, or sudden change-order penalties.",
      icon: "BadgeIndianRupee"
    },
    {
      title: "Free On-Site Pune Consultation",
      desc: "Book a complimentary visit anywhere in Pune for laser measurements, space planning, and feasibility assessment.",
      icon: "MapPin"
    }
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white border-y border-[#E8E2EE]" id="why-us">
      <Container size="large">
        <SectionHeading
          badge="The Kailaash Advantage"
          title="Why Customers Choose Kailaash"
          subtitle="We combine the accountability of an established corporate organization with the personalized care of dedicated master craftsmen."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, index) => (
            <div
              key={index}
              className="bg-[#FAF8F3] p-5 sm:p-6 rounded-3xl border border-[#E8E2EE] hover:border-[#32105F]/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#32105F] text-[#D7A72E] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Icon name={b.icon} className="w-5 h-5" />
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-[#16131B] group-hover:text-[#32105F] transition-colors mb-1.5">
                {b.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#68636F] leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
