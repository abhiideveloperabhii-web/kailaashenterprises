import React from 'react';
import { COMPANY } from '../data/company';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FAF8F3] py-16 md:py-24">
      <Container size="default">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E8E2EE] shadow-sm space-y-6 text-[#16131B]">
          <SectionHeading
            badge="Legal & Privacy"
            title="Privacy Policy"
            subtitle={`Last updated: ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`}
            centered={false}
          />

          <div className="space-y-4 text-sm sm:text-base text-[#68636F] leading-relaxed">
            <h3 className="text-lg font-bold text-[#16131B]">1. Information We Collect</h3>
            <p>
              At {COMPANY.name}, we collect personal information you explicitly provide to us when requesting a quotation, booking a site visit, or contacting us via phone or WhatsApp. This includes your name, phone number, email address, physical address/locality in Pune, and project requirements.
            </p>

            <h3 className="text-lg font-bold text-[#16131B]">2. How We Use Your Information</h3>
            <p>
              Your contact details are used strictly to communicate regarding your project inquiry, perform site visits, prepare itemized proposals, coordinate delivery, and provide ongoing maintenance support. We never sell, rent, or trade your contact details with unauthorized third-party advertisers.
            </p>

            <h3 className="text-lg font-bold text-[#16131B]">3. Communication via WhatsApp and Phone</h3>
            <p>
              By contacting {COMPANY.name}, you consent to receiving direct communications, quotation details, and project updates from our team via phone calls or WhatsApp messages.
            </p>

            <h3 className="text-lg font-bold text-[#16131B]">4. Data Security</h3>
            <p>
              We implement industry-standard administrative and electronic measures to safeguard your personal project specifications and contact details.
            </p>

            <h3 className="text-lg font-bold text-[#16131B]">5. Contact Us</h3>
            <p>
              If you have any questions regarding this Privacy Policy, please reach out to us at <a href={`mailto:${COMPANY.email}`} className="text-[#32105F] font-bold underline">{COMPANY.email}</a> or visit our Pune office at {COMPANY.location.fullAddress}.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
