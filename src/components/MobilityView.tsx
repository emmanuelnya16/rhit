import React from 'react';
import { PARTNER_UNIVERSITIES } from '../data/news';
import { Plane, Compass, Award, Map, RefreshCw, Languages, GraduationCap } from 'lucide-react';
import { Language } from '../types';

interface MobilityViewProps {
  currentLang: Language;
  onNavigate: (view: string) => void;
}

export default function MobilityView({ currentLang, onNavigate }: MobilityViewProps) {
  
  const mobilitySteps = [
    {
      num: '01',
      icon: Map,
      title: { FR: 'Sélectionnez votre destination', EN: 'Select Your Destination' },
      desc: { 
        FR: 'Choisissez parmi nos 8 partenaires universitaires en France, Monaco ou région transnationale.', 
        EN: 'Choose among our 8 partner academic campuses located in France, Monaco or regional centers.' 
      }
    },
    {
      num: '02',
      icon: Compass,
      title: { FR: 'Constituez votre dossier de mobilité', EN: 'Assemble Credit Records' },
      desc: { 
        FR: 'Restaurez vos relevés de notes de RHIT et préparez votre lettre de motivation académique.', 
        EN: 'Consolidate your academic reports from RHIT and write your study abroad motivation statement.' 
      }
    },
    {
      num: '03',
      icon: Award,
      title: { FR: 'Test linguistique & Entrevues', EN: 'Language Skills Assays' },
      desc: { 
        FR: 'Validez vos scores d\'anglais TOEFL/TOEIC ou de chinois mandarin pour répondre aux critères requis.', 
        EN: 'Fulfill appropriate and necessary margins for English TOEFL/TOEIC or Chinese Mandarin courses.' 
      }
    },
    {
      num: '04',
      icon: Plane,
      title: { FR: 'Obtention du visa & Départ', EN: 'Visa Granting & Transfer' },
      desc: { 
        FR: 'Notre service d\'accompagnement vous aide à finaliser les documents d\'immigration d\'étude.', 
        EN: 'Our administrative desk assists in filing student visas and physical travel insurance packets.' 
      }
    },
    {
      num: '05',
      icon: RefreshCw,
      title: { FR: 'Validation des crédits & Retour', EN: 'Credits Review & Graduation' },
      desc: { 
        FR: 'Réintégrez le campus de Douala muni de vos crédits validés pour obtenir votre double diplôme.', 
        EN: 'Re-integrate Douala campus equipped with approved EU/UK credits to crown your dual-degree.' 
      }
    }
  ];

  return (
    <div className="bg-[#F8F6F6] min-h-screen pt-28 pb-16">
      
      {/* Hero Page */}
      <div className="relative bg-[#3D0A12] text-white py-16 text-center overflow-hidden mb-12">
        {/* Crisp background image with optimal opacity handling */}
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
          alt="Mobility background"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05] z-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#631120]/75 to-[#3D0A12]/75 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 bottom-0 z-10 dots-pattern opacity-10 pointer-events-none" />
        {/* World map backdrop representation */}
        <div className="absolute right-[-20px] bottom-[-20px] z-10 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="font-gothic text-xs text-[#B8860B] tracking-widest font-bold uppercase mb-2">CPD CERTIFIED ACADEMICS</span>
          <h1 className="font-chelsea text-3xl md:text-5xl uppercase tracking-wider mb-4 leading-none">
            {currentLang === 'FR' ? 'Mobilité Internationale' : 'Global Student Mobility'}
          </h1>
          <div className="w-[60px] h-1 bg-[#B8860B] rounded-full my-2 animate-pulse" />
          <p className="text-white/80 text-sm md:text-base max-w-2xl mt-1 leading-relaxed">
            {currentLang === 'FR'
              ? 'Étudiez au-delà des frontières ! Grâce à nos 8 alliances stratégiques, ouvrez votre horizon professionnel sur l\'Europe, l\'Asie et l\'international.'
              : 'Cross administrative borders. Our active global alliances pave the way for elite study exchanges across Europe and international research loops.'}
          </p>

          {/* Rapid Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 w-full text-center max-w-2xl border-t border-white/10 pt-8">
            <div>
              <span className="font-gothic text-xl md:text-2xl font-bold text-[#B8860B]">8</span>
              <p className="text-[10px] text-white/50 tracking-wide uppercase mt-1">Partenaires Mondiaux</p>
            </div>
            <div>
              <span className="font-gothic text-xl md:text-2xl font-bold text-white">3</span>
              <p className="text-[10px] text-white/50 tracking-wide uppercase mt-1">Continents Accès</p>
            </div>
            <div>
              <span className="font-gothic text-xl md:text-2xl font-bold text-white">TOEFL</span>
              <p className="text-[10px] text-white/50 tracking-wide uppercase mt-1">Préparation Certifiée</p>
            </div>
            <div>
              <span className="font-gothic text-xl md:text-2xl font-bold text-[#B8860B]">Mandarin</span>
              <p className="text-[10px] text-white/50 tracking-wide uppercase mt-1">Cours hebdomadaires</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%] space-y-16">
        
        {/* Department Partnerships Section */}
        <div>
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="font-chelsea text-3xl text-[#1C1C1C] uppercase leading-none">
              {currentLang === 'FR' ? 'Nos Universités Partenaires' : 'Allied World-Class Campuses'}
            </h2>
            <div className="w-[60px] h-1 bg-[#B8860B] rounded-full my-3" />
            <p className="text-gray-500 text-sm max-w-xl">
              {currentLang === 'FR'
                ? 'Chaque partenariat ouvre droit à des transferts de crédits reconnus au niveau européen et international.'
                : 'Enjoy seamless credit transfer options complying with global credit system mechanisms.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNER_UNIVERSITIES.map((part) => (
              <div 
                key={part.id} 
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#631120]/30 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={part.campusImageUrl} 
                    alt={part.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-[#B8860B] text-black text-[10px] font-gothic tracking-widest font-bold uppercase px-3 py-1 rounded">
                    {part.city[currentLang]}, {part.country[currentLang]}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-chelsea text-lg text-gray-900 group-hover:text-[#631120] transition-colors">
                      {part.name}
                    </h3>
                    <p className="text-xs text-[#631120] font-gothic tracking-wider font-bold uppercase">
                      {part.type[currentLang]}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {part.domains.map((dom, dIdx) => (
                        <span key={dIdx} className="bg-[#F7EEEF] text-[#631120] text-[10px] px-2 py-0.5 rounded">
                          {dom[currentLang]}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => alert(`Informations d'admissions d'échanges pour ${part.name} disponibles au secrétariat de RHIT.`)}
                    className="w-full border border-gray-200 hover:bg-[#631120] hover:text-white py-2.5 rounded font-gothic font-bold text-xs uppercase tracking-wider text-gray-700 transition"
                  >
                    {currentLang === 'FR' ? 'Consulter les Critères' : 'Consult exchange criteria'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobility Steps process timeline */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="font-chelsea text-2xl md:text-3xl text-gray-900 uppercase">
              {currentLang === 'FR' ? 'Le Processus de Mobilité' : 'Outlining Academic Travel Milestones'}
            </h2>
            <div className="w-[60px] h-1 bg-[#B8860B] rounded-full my-3" />
            <p className="text-xs text-gray-400 uppercase font-gothic tracking-wider">
              {currentLang === 'FR' ? 'Suivez les 5 étapes vers l\'international' : 'The 5 structured checkpoints towards study abroad'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {mobilitySteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.num} className="p-4 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#F7EEEF] text-[#631120] flex items-center justify-center font-gothic text-lg font-bold">
                    <StepIcon className="w-5 h-5 text-[#B8860B]" />
                  </div>
                  <div>
                    <span className="font-gothic text-[11px] text-[#631120] font-bold block">STEP {step.num}</span>
                    <h4 className="font-bold text-xs text-gray-900 mt-1">{step.title[currentLang]}</h4>
                    <p className="text-[11px] text-gray-500 mt-1 lines-clamp-3 leading-relaxed">{step.desc[currentLang]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TOEFL & Mandarin Courses details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* TOEFL Module */}
          <div className="bg-[#631120] text-white p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute right-0 top-0 w-24 h-24 bg-white/5 rounded-full" />
            <div className="space-y-4">
              <Languages className="w-8 h-8 text-[#B8860B]" />
              <h3 className="font-chelsea text-xl uppercase tracking-wider text-white">
                {currentLang === 'FR' ? 'Préparation TOEFL / TOEIC Intensive' : 'Urgent English Training & TOEFL Prep'}
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                {currentLang === 'FR'
                  ? 'Pour intégrer l\'une des universités partenaires, un niveau de bilinguisme est attesté. Nos élèves bénéficient d\'un encadrement hebdomadaire complet avec laboratoires d\'expression orale.'
                  : 'Sufficient TOEFL margins are mandatory prior to exchanges. RHIT includes dedicated weekly simulation workshops led by corporate educators.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#B8860B] font-gothic font-bold">
              ★ {currentLang === 'FR' ? '90% DE RÉUSSITE GARANTIE AUX EXAMENS' : '90% PASS-SCORE REGISTRATION'}
            </div>
          </div>

          {/* Mandarin Module */}
          <div className="bg-[#1C1C1C] text-white p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between border-t-4 border-[#B8860B]">
            <div className="space-y-4">
              <GraduationCap className="w-8 h-8 text-[#B8860B]" />
              <h3 className="font-chelsea text-xl uppercase tracking-wider text-[#B8860B]">
                {currentLang === 'FR' ? 'Ateliers de Chinois Mandarin' : 'Mandarin Chinese Language Workshops'}
              </h3>
              <p className="text-xs text-[#A8A8A8] leading-relaxed font-light">
                {currentLang === 'FR'
                  ? 'Au croisement des innovations, maîtriser le mandarin constitue un avantage stratégique exceptionnel. Des cours d\'écriture, d\'expression et de communication d\'affaires sont dispensés.'
                  : 'Mastering Mandarin represents deep structural leverage across computing and logistics. General business writing and active speech simulations are provided.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#A8A8A8] font-gothic font-bold">
              ★ {currentLang === 'FR' ? 'OUVERT GRATUITEMENT DE LA PRÉPA AU MASTER' : 'AVAILABLE WITH ZERO ADDITIONAL ENROLLMENT FEES'}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
