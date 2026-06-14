import React from 'react';
import { ArrowRight, Hammer, Briefcase, HeartPulse } from 'lucide-react';
import { Language } from '../types';

interface ProgramHighlightProps {
  currentLang: Language;
  onSelectDomain: (domain: string) => void;
}

export default function ProgramHighlight({ currentLang, onSelectDomain }: ProgramHighlightProps) {
  const domains = [
    {
      id: 'engineering',
      title: { FR: 'Génie & Technologie', EN: 'Engineering & Tech' },
      tagline: { FR: 'Bachelors & Masters', EN: 'BSc & MSc programs' },
      icon: Hammer,
      bgImage: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800',
      description: {
        FR: 'Mécanique, Électricité, Informatique et BTP. Une pédagogie projet (PBL) pour exceller.',
        EN: 'Mechanical, Electrical, Software & Civil build loops. PBL approach to lead fields.'
      }
    },
    {
      id: 'business',
      title: { FR: 'Business & Droit', EN: 'Business & Law' },
      tagline: { FR: 'Bachelors Professionnels', EN: 'Professional Bachelors' },
      icon: Briefcase,
      bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      description: {
        FR: 'Comptabilité, Marketing Digital, Logistique Globale et Droit d\'Affaire à forte valeur ajoutée.',
        EN: 'Accountancy, Digital Growth, Global Logistics and international commerce.'
      }
    },
    {
      id: 'health',
      title: { FR: 'Sciences de la Santé', EN: 'Health Sciences' },
      tagline: { FR: 'Bachelors Cliniques', EN: 'Clinical Degrees' },
      icon: HeartPulse,
      bgImage: 'https://images.unsplash.com/photo-1579154204601-01588f35116f?auto=format&fit=crop&q=80&w=800',
      description: {
        FR: 'Imagerie médicale, Techniques de Laboratoire, Kinésithérapie et Soins infirmiers de pointe.',
        EN: 'X-Ray, Radioprotection, Medical Lab Assays, Physiotherapy and Staff Nursing.'
      }
    }
  ];

  return (
    <section id="academic-fields-highlight" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%]">
        
        {/* Header center alignment */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="font-chelsea text-3xl md:text-[40px] text-[#1C1C1C] leading-[1.2] mb-4 uppercase">
            {currentLang === 'FR' ? 'Trouvez votre voie d\'excellence' : 'Discover Your Professional Destiny'}
          </h2>
          
          <div className="w-[60px] h-1 bg-[#B8860B] rounded-full my-3" />
          
          <p className="text-gray-500 text-[15px] md:text-lg max-w-2xl mt-1">
            {currentLang === 'FR' 
              ? 'Sélectionnez l\'un de nos trois grands domaines académiques d\'enseignement supérieur et accédez à des programmes bilingues recherchés par les entreprises.'
              : 'Select one of our core academic departments representing world-class training programs, engineered for high-demand placements.'}
          </p>
        </div>

        {/* Domains Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domains.map((dom) => {
            const IconComponent = dom.icon;
            return (
              <div
                key={dom.id}
                onClick={() => onSelectDomain(dom.id)}
                className="group relative h-[420px] rounded-[20px] overflow-hidden cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-500 hover:border-[#631120] hover:scale-[1.02]"
              >
                {/* Background Image inside block */}
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${dom.bgImage})` }}
                />

                {/* Black Overlay Gradient (35% default, matches to 75% on hover) */}
                <div 
                  className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/30 transition-all duration-500"
                />

                {/* Custom watermark dome layout circular vector behind */}
                <div className="absolute right-[-40px] top-[-40px] w-48 h-48 bg-[#631120]/10 rounded-full z-10 transition-opacity opacity-0 group-hover:opacity-100 duration-500 pointer-events-none" />

                {/* Interactive Card Content */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between text-white">
                  
                  {/* Top: Domain Icon circle layout */}
                  <div className="self-start w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all group-hover:bg-[#631120] group-hover:border-transparent">
                    <IconComponent className="w-5 h-5 text-white transition-all group-hover:scale-110" />
                  </div>

                  {/* Bottom: Domain text information */}
                  <div className="space-y-3">
                    <span className="font-gothic text-xs text-[#B8860B] tracking-widest font-bold block uppercase">
                      {dom.tagline[currentLang]}
                    </span>
                    
                    <h3 className="font-chelsea text-2xl group-hover:text-[#B8860B] transition-colors leading-[1.3] truncate max-w-full">
                      {dom.title[currentLang]}
                    </h3>

                    {/* Description - expanded smoothly */}
                    <p className="text-xs text-white/70 leading-relaxed translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {dom.description[currentLang]}
                    </p>

                    {/* sliding "Voir les programmes" button */}
                    <div className="flex items-center gap-2 text-xs font-bold font-gothic tracking-wider border-t border-white/10 pt-4 mt-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-[#B8860B]">
                      <span className="uppercase">
                        {currentLang === 'FR' ? 'Consulter les filières' : 'View Core Programs'}
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
