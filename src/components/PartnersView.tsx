import React from 'react';
import { PARTNER_UNIVERSITIES } from '../data/news';
import { Award, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';

interface PartnersViewProps {
  currentLang: Language;
}

export default function PartnersView({ currentLang }: PartnersViewProps) {
  return (
    <div className="bg-[#F8F6F6] min-h-screen pt-28 pb-16">
      
      {/* Page Title */}
      <div className="relative bg-[#3D0A12] text-white py-16 text-center overflow-hidden mb-12">
        {/* Crisp background image with optimal opacity handling */}
        <img 
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200"
          alt="Partners background"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05] z-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#631120]/80 to-[#3D0A12]/80 pointer-events-none" />
        <div className="absolute inset-0 z-10 dots-pattern opacity-10 pointer-events-none" />
        <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="font-gothic text-xs text-[#B8860B] tracking-widest font-bold uppercase mb-2">CREDIBILITY & REPUTATION</span>
          <h1 className="font-chelsea text-3xl md:text-5xl uppercase tracking-wider mb-4 leading-none">
            {currentLang === 'FR' ? 'Partenariats Stratégiques' : 'Academic & Industry Allies'}
          </h1>
          <div className="w-[60px] h-1 bg-[#B8860B] rounded-full my-2" />
          <p className="text-white/80 text-sm md:text-base max-w-2xl mt-1 leading-relaxed">
            {currentLang === 'FR'
              ? 'L’ouverture internationale est inscrite au cœur du modèle de RHIT. Nos conventions avec d\'excellentes universités garantissent la double-diplomation de nos élèves.'
              : 'Global integration is fundamental to RHIT\'s academic design. Our validated covenants with elite European of technology certify student graduation paths.'}
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%] space-y-16">
        
        {/* Core European Partner Universities */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="font-chelsea text-2xl md:text-3xl text-gray-900 uppercase">
              {currentLang === 'FR' ? 'Universités Françaises et Monégasques Co-diplômantes' : 'Co-Diplomancy European Universities'}
            </h2>
            <p className="text-sm text-gray-400 mt-2 font-gothic tracking-wider">
              {currentLang === 'FR' ? 'DOUBLE DIPLÔME & TRANSFERT DES CRÉDITS SEMESTRES' : 'APPROVED TRANSFER PROTOCOLS FOR DEGREE PATHS'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNER_UNIVERSITIES.map((part) => (
              <div key={part.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between items-start hover:shadow-md duration-300">
                <div className="w-full h-36 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
                  <img src={part.logoUrl} alt={part.name} className="max-h-24 max-w-full object-contain filter grayscale hover:grayscale-0 transition duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-gray-900 leading-snug">{part.name}</h3>
                  <span className="text-[10px] bg-[#F7EEEF] text-[#631120] px-2 py-0.5 rounded font-gothic uppercase tracking-wide inline-block">
                    {part.city[currentLang]}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed font-light pt-2">
                    {part.type[currentLang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CPD UK Section detail */}
        <div className="bg-[#1C1C1C] text-white rounded-3xl p-8 md:p-12 border border-[#B8860B]/30 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-3/4 space-y-6">
            <div className="flex items-center gap-3">
              <Award className="w-10 h-10 text-[#B8860B]" />
              <div>
                <span className="font-gothic text-xs text-[#B8860B] tracking-widest font-bold block uppercase">
                  UNITED KINGDOM ACCREDITATION
                </span>
                <h3 className="font-chelsea text-xl md:text-2xl text-white uppercase">
                  CPD Certification Service — London, UK
                </h3>
              </div>
            </div>

            <p className="text-xs md:text-sm text-[#A8A8A8] leading-relaxed font-light">
              {currentLang === 'FR'
                ? "La certification CPD (Continuing Professional Development) est un gage de rigueur et d'adéquation avec les besoins des entreprises britanniques. Elle garantit que la formation de l\'élève comprend des méthodologies actives révisées régulièrement."
                : "The CPD (Continuing Professional Development) Certification guarantees that curriculum paths follow extreme and modern educational rigors approved in the UK and internationally, ensuring instant employability."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-gothic tracking-wider font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B]" />
                <span>MEMBERSHIP #783109</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B]" />
                <span>UK CPD COMPLIANT</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B]" />
                <span>EUROPEAN RECOGNITION</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/4 shrink-0 p-4 border border-[#B8860B]/20 rounded-2xl bg-white/5 text-center space-y-2">
            <ShieldCheck className="w-12 h-12 text-[#B8860B] mx-auto" />
            <h4 className="font-bold text-xs">CPD REGISTER</h4>
            <p className="text-[10px] text-gray-400">Continuing Professional Dev. London</p>
          </div>
        </div>

      </div>
    </div>
  );
}
