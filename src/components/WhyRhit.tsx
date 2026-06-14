import React from 'react';
import { Globe, GraduationCap, Lightbulb, Compass } from 'lucide-react';
import { Language } from '../types';

interface WhyRhitProps {
  currentLang: Language;
}

export default function WhyRhit({ currentLang }: WhyRhitProps) {
  const pillars = [
    {
      id: 'mobility',
      icon: Globe,
      title: { FR: 'Mobilité Internationale', EN: 'International Mobility' },
      text: {
        FR: 'Partez étudier en France, en Europe ou en Asie grâce à nos 8 universités prestigieuses partenaires d\'excellence. Préparation intensive au TOEFL/TOEIC et cours hebdomadaires de chinois mandarin inclus.',
        EN: 'Travel and study in Europe, France or Asia through our 8 elite university alliances. Receive intensive TOEFL preparation and weekly Chinese Mandarin language workshops included.'
      }
    },
    {
      id: 'immersion',
      icon: GraduationCap,
      title: { FR: 'Professionnalisation', EN: 'Corporate Professionalization' },
      text: {
        FR: 'Placements de stages de qualité garantis, visites techniques de chantiers et d\'industries, alternance, et projets réels reliés aux enjeux des entreprises locales partenaires dès la première année.',
        EN: 'Guaranteed quality internship placements, on-site industrial visits, vocational alternate schedules, and business integration consultancies right from your first Academic Year.'
      }
    },
    {
      id: 'pbl',
      icon: Lightbulb,
      title: { FR: 'Pédagogie Active PBL', EN: 'Active PBL Methodology' },
      text: {
        FR: 'Notre approche Problem-Based Learning (apprentissage par résolution de problèmes) vous forme à faire face à de vrais défis de développement industriel. Pas seulement de la théorie, de la pratique concrète.',
        EN: 'Our state-of-the-art Problem-Based Learning framework trains you to inspect and solve actual complex engineering and financial challenges. Moving beyond dry lectures into practical engineering.'
      }
    }
  ];

  return (
    <section id="why-choose-rhit" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%]">
        
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="font-gothic text-xs text-[#631120] tracking-widest font-bold uppercase mb-2">
            {currentLang === 'FR' ? 'NOTRE VISION ACADÉMIQUE' : 'OUR ACADEMIC VALUES'}
          </span>
          
          <h2 className="font-chelsea text-3xl md:text-[40px] text-[#1C1C1C] leading-[1.2] uppercase mt-1">
            {currentLang === 'FR' ? 'Pourquoi choisir RHIT ?' : 'Why select RHIT?'}
          </h2>
          
          <div className="w-[60px] h-1 bg-[#631120] rounded-full my-3" />
          
          <p className="text-gray-500 text-[15px] md:text-lg max-w-2xl mt-1">
            {currentLang === 'FR'
              ? 'Nous offrons un environnement d\'enseignement international combinant rigueur académique britannique, bilinguisme et intégration en entreprise.'
              : 'Providing an elite international environment merging rigorous British quality frameworks, deep bilingualism, and immediate corporate immersion.'}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="group flex flex-col items-center p-6 text-center bg-gray-50/50 hover:bg-[#FAF0F2]/20 border border-transparent hover:border-[#631120]/20 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-default"
              >
                {/* 68px circle, transition background to Bordeaux, icon to white */}
                <div className="w-[68px] h-[68px] rounded-full bg-[#F0ECEC] text-[#631120] flex items-center justify-center transition-all duration-300 group-hover:bg-[#631120] group-hover:text-white mb-6 shadow-sm">
                  <IconComponent className="w-[26px] h-[26px] transition-transform duration-500 group-hover:rotate-[360deg]" />
                </div>

                {/* Pillar Title */}
                <h3 className="font-inter text-xl font-bold text-[#1C1C1C] mb-3 group-hover:text-[#631120] transition-colors">
                  {pillar.title[currentLang]}
                </h3>

                {/* Pillar Text */}
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {pillar.text[currentLang]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Accidental watermark layout under criteria */}
        <div className="mt-16 bg-[#F7EEEF] border-l-4 border-[#631120] p-6 rounded-r-xl max-w-3xl mx-auto flex items-start gap-4 shadow-sm animate-fade-in-up">
          <Compass className="w-6 h-6 text-[#631120] shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-sm text-[#631120] uppercase font-gothic tracking-wider">
              {currentLang === 'FR' ? 'Accréditation & Double Diplomation' : 'Accreditation & International Degree Recognition'}
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed mt-1">
              {currentLang === 'FR'
                ? 'Tous nos cursus préparent aux qualifications de pointe certifiées par nos partenaires nationaux et par la CPD Certification Service à Londres, garantissant l\'insertion professionnelle de haut niveau.'
                : 'All curricula prepare you for elite qualifications validated by our sovereign entities and the CPD Certification Service in London, granting high global employability and prestige.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
