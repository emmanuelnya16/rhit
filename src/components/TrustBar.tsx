import React from 'react';
import { PARTNERS } from '../data/news';
import { Language } from '../types';

interface TrustBarProps {
  currentLang: Language;
}

export default function TrustBar({ currentLang }: TrustBarProps) {
  return (
    <section 
      id="partners-trust-bar" 
      className="bg-white border-b border-[#D4D4D4] py-8 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%] flex md:flex-row flex-col items-center justify-between gap-6">
        {/* Label on the left */}
        <div className="shrink-0 flex items-center">
          <div className="w-1.5 h-6 bg-[#631120] mr-3 rounded-full hidden md:block"></div>
          <span className="font-gothic text-xs tracking-wider font-bold text-gray-500 uppercase">
            {currentLang === 'FR' ? 'NOS PARTENAIRES ACADÉMIQUES' : 'OUR ACADEMIC UNIVERSITY ALLIANCES'}
          </span>
        </div>

        {/* Gray to color logos */}
        <div className="w-full overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center justify-between md:justify-end gap-8 md:gap-10 min-w-max px-2">
            {PARTNERS.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center bg-gray-50 hover:bg-[#F7EEEF]/30 px-4 py-2 border border-gray-100 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-[#631120]/30 hover:shadow-sm cursor-help group"
                title={partner.name}
              >
                <span className="font-chelsea text-sm text-[11px] uppercase tracking-widest text-gray-400 group-hover:text-[#631120] font-bold transition-colors">
                  {partner.name === 'CPD Certification Service' ? 'CPD Certified UK' : partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
