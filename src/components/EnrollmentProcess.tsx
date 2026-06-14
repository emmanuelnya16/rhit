import React, { useState } from 'react';
import { ArrowRight, FileCheck, HelpCircle, Download } from 'lucide-react';
import { Language } from '../types';

interface EnrollmentProcessProps {
  currentLang: Language;
  onNavigate: (view: string) => void;
}

export default function EnrollmentProcess({ currentLang, onNavigate }: EnrollmentProcessProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: { FR: 'Choisissez votre programme', EN: 'Choose Your Degree Track' },
      desc: {
        FR: 'Explorez nos 15+ filières d\'excellence. Filtrez par domaine — Ingénierie, Business ou Santé — et sélectionnez le diplômé en adéquation avec votre projet de carrière.',
        EN: 'Inspect our 15+ certified degree tracks. Filter by department — Engineering, Business, or Health Science — and locate the perfect match for your career.'
      }
    },
    {
      num: '02',
      title: { FR: 'Préparez votre dossier de candidature', EN: 'Assemble Your Core Documents' },
      desc: {
        FR: 'Réunissez les pièces complémentaires : CV détaillé, relevés de notes récents, et diplômes obtenus. La numérisation et la soumission se font entièrement en ligne.',
        EN: 'Gather necessary credentials: your detailed CV, recent report cards, and past awards. Processing is conducted 100% online without physical papers.'
      }
    },
    {
      num: '03',
      title: { FR: 'Soumettez votre candidature en ligne', EN: 'Submit Your Digital Dossier' },
      desc: {
        FR: 'Notre formulaire sécurisé en ligne prend environ 10 minutes à remplir. L\'équipe académique analyse votre profil et vous répond sous un délai garanti de 48h.',
        EN: 'Our secure application portal takes roughly 10 minutes to complete. The pedagogical board reviews your profile and replies back within a guaranteed 48 hours.'
      }
    },
    {
      num: '04',
      title: { FR: 'Démarrez votre parcours international', EN: 'Inaugurate Your Global Journey' },
      desc: {
        FR: 'Une fois validé, recevez votre lettre officielle d\'acceptation administrative à RHIT et votre kit d\'intégration. Bienvenue dans la communauté de l\'excellence !',
        EN: 'Once approved, obtain your final administrative admissions letter and digital integration handbook. Welcome to a community built to lead!'
      }
    }
  ];

  return (
    <section id="registration-pipeline-section" className="relative py-24 bg-white overflow-hidden">
      {/* Bordeaux micro-points background as described in Design manual section 9.1 */}
      <div className="absolute inset-0 dots-pattern pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-[6%]">
        
        {/* Full width title block */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="font-chelsea text-3xl md:text-[44px] uppercase tracking-tight leading-tight">
            <span className="text-[#1C1C1C] block md:inline mr-2">
              {currentLang === 'FR' ? 'Rejoindre RHIT' : 'Admissions to RHIT'}
            </span>
            <span className="text-[#631120] block md:inline font-bold">
              {currentLang === 'FR' ? "c'est simple." : 'made simple.'}
            </span>
          </h2>
          
          <div className="w-[60px] h-1 bg-[#B8860B] rounded-full my-3" />
          
          <p className="text-gray-500 text-sm md:text-base max-w-xl">
            {currentLang === 'FR'
              ? 'Un processus d\'admission fluide, transparent et bilingue pour vous accompagner de la découverte à l\'excellence.'
              : 'A transparent, digital, bilingual admissions process designed to guide your transition smoothly towards professional excellence.'}
          </p>
        </div>

        {/* 2 columns split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Vector Illustration representing document upload and growth (Fallback) */}
          <div className="lg:col-span-5 col-span-1 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-square rounded-2xl bg-[#F8F6F6] p-8 border border-gray-100 flex flex-col items-center justify-center shadow-lg overflow-hidden group">
              {/* Background accent ring */}
              <div className="absolute top-[10%] right-[10%] w-32 h-32 rounded-full border border-[#631120]/15 pointer-events-none" />
              <div className="absolute bottom-[5%] left-[5%] w-48 h-48 rounded-full bg-[#B8860B]/5 pointer-events-none" />
              
              {/* Interactive Vector Animation layer */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                {/* Simulated Lottie animation representing active step changes */}
                <div className="relative w-36 h-36 flex items-center justify-center">
                  {/* Outer spinning ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#631120]/30 animate-[spin_10s_linear_infinite]" />
                  
                  {/* Core icon background */}
                  <div className="w-24 h-24 rounded-full bg-[#631120] hover:bg-[#7B0A1F] transition-colors flex items-center justify-center text-white shadow-xl hover:scale-105 duration-300">
                    <FileCheck className="w-12 h-12 text-[#B8860B] animate-pulse" />
                  </div>
                </div>

                <div>
                  <span className="font-gothic text-xs text-[#631120] tracking-widest font-bold uppercase block mb-1">
                    {currentLang === 'FR' ? 'PROGRÈS DES ADMISSIONS' : 'ADMISSIONS TRACKER'}
                  </span>
                  
                  <h3 className="font-chelsea text-[#1C1C1C] text-xl mt-1">
                    {steps[activeStep].title[currentLang]}
                  </h3>
                  
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed max-w-xs mx-auto">
                    {currentLang === 'FR' 
                      ? 'Cliquez sur les étapes de droite pour voir le flux logique de notre portail d\'inscription.' 
                      : 'Click through the various milestones on the right to inspect our admissions model.'}
                  </p>
                </div>

                <div className="flex gap-2 justify-center">
                  {steps.map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-3.5 h-1.5 rounded-full transition-all duration-300 ${
                        activeStep === i ? 'bg-[#B8860B] w-6' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Steps listing */}
          <div className="lg:col-span-7 col-span-1">
            <div className="relative pl-6">
              
              {/* Vertical dotted progress path line */}
              <div className="absolute left-[24px] top-4 bottom-4 w-0.5 border-l-2 border-dashed border-[#631120]/30 pointer-events-none" />

              <div className="space-y-8">
                {steps.map((st, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div 
                      key={st.num}
                      onClick={() => setActiveStep(idx)}
                      className={`relative flex items-start gap-6 cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#F7EEEF]/40 border-l-4 border-[#B8860B] shadow-sm translate-x-1' 
                          : 'hover:bg-gray-50 border-l-4 border-transparent'
                      }`}
                    >
                      {/* Step Circle Code (design spec 9.5) */}
                      <div 
                        className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center font-gothic text-lg font-bold text-white transition-all shadow-md ${
                          isActive ? 'bg-[#B8860B] scale-110' : 'bg-[#631120] hover:bg-[#7B0A1F]'
                        }`}
                      >
                        {st.num}
                      </div>

                      <div className="space-y-1">
                        <h4 className={`font-semibold text-base transition-colors ${
                          isActive ? 'text-[#631120]' : 'text-[#1C1C1C]'
                        }`}>
                          {st.title[currentLang]}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                          {st.desc[currentLang]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Action panel underneath steps list */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6 justify-start">
              
              <button
                onClick={() => onNavigate('candidature')}
                className="px-8 py-4 bg-[#B8860B] hover:bg-[#1C1C1C] hover:text-white text-[#1C1C1C] font-semibold text-xs md:text-sm tracking-widest uppercase rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>{currentLang === 'FR' ? 'Candidater en ligne maintenant' : 'Apply Online Now'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => alert(currentLang === 'FR' ? 'La plaquette académique PDF sera téléchargée incessamment de votre profil.' : 'The academic PDF syllabus brochure will download shortly.')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#631120] hover:text-[#7B0A1F] transition-colors uppercase font-gothic cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{currentLang === 'FR' ? 'Télécharger la Plaquette PDF' : 'Download Brochure PDF'}</span>
              </button>

            </div>

            {/* Reassurance line under CTA (design manual 9.4) */}
            <p className="text-[11px] text-gray-400 font-gothic tracking-wider mt-4">
              {currentLang === 'FR'
                ? '⏳ RÉPONSE SOUS 48H  •  💻 100% EN LIGNE  •  🛡️ AUCUN FRAIS DE DOSSIER'
                : '⏳ REASSESSMENT IN 48H  •  💻 COMPLETED 100% ONLINE  •  🛡️ ZERO INTAKE CONTRACT FEES'}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
