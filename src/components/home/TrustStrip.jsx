import React from 'react';
import { COMPANY } from '../../data/company';
import Icon from '../common/Icon';
import Container from '../common/Container';

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-[#E8E2EE] py-4 sm:py-6 shadow-xs">
      <Container size="large">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
          {COMPANY.trustPoints.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-[#FAF8F3]/70 hover:bg-[#FAF8F3] transition-colors border border-transparent hover:border-[#E8E2EE]"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#32105F]/10 text-[#32105F] flex items-center justify-center shrink-0">
                <Icon name={item.icon} className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-extrabold text-[#16131B] truncate">
                  {item.title}
                </h4>
                <p className="text-[10px] text-[#68636F] line-clamp-1">
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
