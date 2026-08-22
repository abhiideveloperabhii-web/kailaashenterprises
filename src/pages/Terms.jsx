import React from 'react';
import { COMPANY } from '../data/company';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';

export default function Terms() {
  return (
    <div className="bg-[#FAF8F3] py-16 md:py-24">
      <Container size="default">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E8E2EE] shadow-sm space-y-6 text-[#16131B]">
          <SectionHeading
            badge="Terms of Service"
            title="Terms & Conditions"
            subtitle={`Effective: ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`}
            centered={false}
          />

          <div className="space-y-4 text-sm sm:text-base text-[#68636F] leading-relaxed">
            <h3 className="text-lg font-bold text-[#16131B]">1. Quotations and Project Estimates</h3>
            <p>
              All online estimations and verbal ballpark numbers are subject to formal on-site laser measurements and finalized material specifications. A formal quotation signed by {COMPANY.name} and the client constitutes the binding scope of work.
            </p>

            <h3 className="text-lg font-bold text-[#16131B]">2. Payment Terms and Milestones</h3>
            <p>
              Custom carpentry, modular interior, and painting projects follow structured milestone payments: initial advance for raw material procurement, progress stage payments upon carcass/framework assembly, and final balance payment upon handover.
            </p>

            <h3 className="text-lg font-bold text-[#16131B]">3. Material Authenticity & Hardware Warranty</h3>
            <p>
              We guarantee genuine materials (BWP Marine Plywood, branded laminates, genuine Asian Paints / Berger products, and authentic hardware from Blum/Hettich/Ebco). Hardware manufacturer warranties apply directly as per brand guidelines.
            </p>

            <h3 className="text-lg font-bold text-[#16131B]">4. Facility Staffing Compliance</h3>
            <p>
              Corporate facility staff deployed by {COMPANY.name} are background-verified. Replacement of staff for absenteeism is facilitated promptly as per service level agreements.
            </p>

            <h3 className="text-lg font-bold text-[#16131B]">5. Jurisdiction</h3>
            <p>
              Any disputes arising from services rendered shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
