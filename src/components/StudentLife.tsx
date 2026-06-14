import React from 'react';
import { ArrowRight, Plane, Coffee, Award, CalendarDays } from 'lucide-react';
import { Language } from '../types';

interface StudentLifeProps {
  currentLang: Language;
  onNavigate: (view: string) => void;
}

export default function StudentLife({ currentLang, onNavigate }: StudentLifeProps) {
  const activityItems = [
    {
      icon: Plane,
      title: { FR: 'Study Tours & Immersions Industrielles', EN: 'Study Tours & Industrial Site Immersion' },
      desc: { FR: 'Séjours pédagogiques d\'envergure nationale (Kribi Deep Seaport, Dibamba Power, etc.).', EN: 'Core educational journeys (Port of Kribi, Dibamba hydroelectric station etc.).' }
    },
    {
      icon: Coffee,
      title: { FR: 'Associations & Clubs Étudiants', EN: 'Active Student Unions & Clubs' },
      desc: { FR: 'Hackathons technologiques, compétitions, clubs sportifs, art et musique.', EN: 'Tech hackathons, design cups, athletics, creative music, and theater.' }
    },
    {
      icon: Award,
      title: { FR: 'Développement Leadership & Soft Skills', EN: 'Leadership Growth & Soft Skills' },
      desc: { FR: 'Activités parascolaires d\'éloquence, séminaires de management et d\'entrepreneuriat.', EN: 'Public speaking forums, senior masterclasses from industry experts, startup incubations.' }
    },
    {
      icon: CalendarDays,
      title: { FR: 'Rendez-vous et Séminaires d\'Experts', EN: 'Masterclasses & Technical Conferences' },
      desc: { FR: 'Rencontres de hauts cadres africains (e.g. équipe dirigeante de Parle-G).', EN: 'Corporate roundtables with leaders (e.g. Parle-G regional directors).' }
    }
  ];

  return (
    <section id="student-life-split-layout" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (55% space mapped as 6/12 or 7/12 layout) */}
          <div className="lg:col-span-7 col-span-1 relative">
            <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-xl">
              {/* Image with decorative border clipping as specified in design manual */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[4000ms] ease-out hover:scale-105"
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200")',
                  clipPath: 'polygon(0 0, 97% 0, 100% 100%, 0 100%)' // Dynamic斜切 lines
                }}
              />
              
              <div className="absolute bottom-6 left-6 z-10 bg-[#3D0A12]/90 backdrop-blur border border-white/10 p-5 rounded-lg text-white max-w-xs">
                <span className="font-gothic text-[10px] text-[#B8860B] tracking-wider block font-bold mb-1">RHIT EXPERIENCES</span>
                <p className="text-sm font-chelsea leading-snug">
                  {currentLang === 'FR' 
                    ? 'Study Tour au Port Autonome de Kribi' 
                    : 'Interactive Study Tour at Kribi Deep Seaport'}
                </p>
              </div>
            </div>
            
            {/* Elegant Background Gold Accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#B8860B]/10 rounded-full blur-xl -z-10" />
          </div>

          {/* Right Column (45% space layout mapped as 5/12) */}
          <div className="lg:col-span-5 col-span-1 flex flex-col items-start">
            
            {/* Special Gothic gray capslock badge */}
            <span className="font-gothic text-xs text-gray-500 tracking-wider font-bold uppercase mb-2">
              {currentLang === 'FR' ? 'CAMPUS LIFE ET INTEGRATION' : 'STUDENT EMPOWERMENT & TRIPS'}
            </span>

            {/* Title in Chelsea Market */}
            <h2 className="font-chelsea text-3xl md:text-4xl text-[#1C1C1C] leading-tight mb-6 uppercase">
              {currentLang === 'FR' ? 'Une vie étudiante épanouissante' : 'A fulfilling campus experience'}
            </h2>

            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-8">
              {currentLang === 'FR'
                ? 'Parce que l\'excellence professionnelle se forge aussi hors de la salle de cours, RHIT propose des séjours éducatifs, des clubs autogérés, et des hackathons de premier plan.'
                : 'Because career excellence is forged beyond classrooms, RHIT sponsors active business tours, self-governed forums, and technical hackathons.'}
            </p>

            {/* List of 4 points */}
            <div className="space-y-6 w-full mb-8">
              {activityItems.map((act, index) => {
                const ActIcon = act.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    {/* Circle icon frame */}
                    <div className="w-9 h-9 rounded-full bg-[#F0ECEC] text-[#631120] flex items-center justify-center shrink-0">
                      <ActIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 leading-snug">
                        {act.title[currentLang]}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        {act.desc[currentLang]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Gold Action Button */}
            <button
              onClick={() => onNavigate('vie-etudiante')}
              className="px-6 py-3.5 bg-[#B8860B] hover:bg-white border hover:border-[#631120] hover:text-[#631120] text-[#1C1C1C] font-semibold text-xs tracking-widest uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>{currentLang === 'FR' ? 'Découvrir la vie au campus' : 'Discover Campus Life'}</span>
              <ArrowRight className="w-4 h-4 font-bold" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
