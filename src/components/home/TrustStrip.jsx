import React from 'react';
import { COMPANY } from '../../data/company';
import Icon from '../common/Icon';
import Container from '../common/Container';

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-[#E8E2EE] py-3.5 sm:py-5 shadow-2xs">
      <Container size="large">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3.5 items-center">
          {COMPANY.trustPoints.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center gap-2 sm:gap-2.5 p-2 sm:p-3 rounded-2xl bg-[#FAF8F3]/80 hover:bg-[#FAF8F3] transition-colors border border-transparent hover:border-[#E8E2EE] ${
                index === COMPANY.trustPoints.length - 1 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center shrink-0">
                <Icon name={item.icon} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[11px] sm:text-xs font-extrabold text-[#16131B] truncate">
                  {item.title}
                </h4>
                <p className="text-[9px] sm:text-[10px] text-[#68636F] truncate">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
