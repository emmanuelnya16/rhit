import React, { useState } from 'react';
import { ALL_PROGRAMS } from '../data/programs';
import { Clock, Globe, Award, ClipboardCheck, ArrowRight, BookOpen, UserCheck, ChevronDown, Download, Heart } from 'lucide-react';
import { Language } from '../types';

interface ProgramDetailViewProps {
  currentLang: Language;
  programSlug: string;
  onNavigate: (view: string, extraParam?: string) => void;
}

export default function ProgramDetailView({ currentLang, programSlug, onNavigate }: ProgramDetailViewProps) {
  const [activeYears, setActiveYears] = useState<{ [key: string]: boolean }>({ 'Year 1': true });

  const program = ALL_PROGRAMS.find((p) => p.slug === programSlug) || ALL_PROGRAMS[0];

  const toggleAccordion = (year: string) => {
    setActiveYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  const domainLabels = {
    engineering: { FR: 'Génie & Technologie', EN: 'Engineering & Tech' },
    business: { FR: 'Business & Droit', EN: 'Business & Law' },
    health: { FR: 'Sciences de la Santé', EN: 'Health Sciences' }
  };

  // Safe Curriculum Fallbacks for placeholder programs
  const curriculumYears = program.curriculum && program.curriculum.length > 0 ? program.curriculum : [
    {
      year: 'Year 1',
      title: { FR: 'Syllabus Fondamental d\'Intégration', EN: 'Syllabus Integration Foundations' },
      semesters: [
        {
          title: { FR: 'Semestre Général 1', EN: 'Core Theory Semester 1' },
          courses: [
            currentLang === 'FR' ? 'Introduction aux Méthodologies Actives' : 'Introduction to Agile active frameworks',
            'Bilingual writing systems & Advanced English I',
            currentLang === 'FR' ? 'Pédagogie Projet Industrielle' : 'Corporate PBL Projects',
            'Data Analysis baselines'
          ]
        },
        {
          title: { FR: 'Semestre Général 2', EN: 'Core Theory Semester 2' },
          courses: [
            currentLang === 'FR' ? 'Éthique Professionnelle & Stage' : 'Industry Ethics & Placement',
            'Business Communication models',
            'Technology and society paradigms'
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-[#F8F6F6] min-h-screen pt-24 pb-16">
      
      {/* 1. Hero Program Section */}
      <div className="relative bg-[#3D0A12] text-white overflow-hidden py-20 border-b border-[#B8860B]/20">
        {/* Background Image layer with subtle pattern overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${program.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D0A12] via-[#3D0A12]/90 to-[#3D0A12]/40" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-[6%] grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Content text */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Horizontal badges */}
            <div className="flex flex-wrap gap-2.5">
              <span className="bg-[#631120] border border-[#631120]/10 text-white text-[10px] font-gothic tracking-widest font-bold uppercase px-3 py-1 rounded">
                {domainLabels[program.domain][currentLang]}
              </span>
              <span className="bg-[#FDF6E3] text-[#B8860B] text-[10px] font-gothic tracking-widest font-bold uppercase px-3 py-1 rounded inline-flex items-center gap-1">
                <Award className="w-3 h-3 text-[#B8860B]" />
                CPD CERTIFIED UK
              </span>
              <span className="bg-white/10 text-white text-[10px] font-gothic tracking-widest font-bold uppercase px-3 py-1 rounded">
                {currentLang === 'FR' ? 'Mobilité possible S5' : 'International Exchange S5'}
              </span>
            </div>

            {/* Program Giant Title */}
            <h1 className="font-chelsea text-3xl sm:text-4xl md:text-5xl text-white uppercase leading-[1.1] tracking-tight">
              {program.title[currentLang]}
            </h1>

            <p className="text-[#A8A8A8] text-sm md:text-base leading-relaxed max-w-3xl font-light">
              {program.shortDescription[currentLang]}
            </p>

            {/* Quick stats buttons */}
            <div className="flex flex-wrap gap-6 text-xs text-white/80 font-gothic tracking-wide border-t border-white/10 pt-4 max-w-xl">
              <div>
                <span className="block opacity-50 uppercase">{currentLang === 'FR' ? 'ENTRÉE EXIGÉE' : 'ENTRY REQUIREMENTS'}</span>
                <span className="font-bold text-white mt-1 block">{program.entryLevel[currentLang]}</span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="block opacity-50 uppercase">{currentLang === 'FR' ? 'DURÉE STANDARD' : 'TIME DURATION'}</span>
                <span className="font-bold text-[#B8860B] mt-1 block">{program.duration[currentLang]}</span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="block opacity-50 uppercase">{currentLang === 'FR' ? 'ENSEIGNEMENT' : 'LANGUAGE TRACK'}</span>
                <span className="font-bold text-white mt-1 block">{program.language[currentLang]}</span>
              </div>
            </div>

          </div>

          {/* Golden Apply CTA block inside Hero */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md flex flex-col justify-between items-start text-left">
            <span className="font-gothic text-[10px] text-[#B8860B] tracking-widest font-bold uppercase mb-2">CAMPUS DE DOUALA</span>
            <h3 className="font-chelsea text-white text-lg mb-2">{currentLang === 'FR' ? 'Inscriptions 2025 Ouvertes' : 'Enrollment active'}</h3>
            <p className="text-xs text-[#A8A8A8] leading-relaxed mb-6">
              {currentLang === 'FR' 
                ? 'Analyse confidentielle des dossiers en 48 heures. Soumission gratuite, aucun frais de dépôt initial.' 
                : 'Dossier reviews are completed in 48h. Zero initial payment or administrative fees for submittals.'}
            </p>
            <button
              onClick={() => onNavigate('candidature', program.id)}
              className="w-full bg-[#B8860B] hover:bg-[#1C1C1C] hover:text-white text-[#1C1C1C] text-xs font-bold font-gothic tracking-wider uppercase py-3.5 rounded-full text-center shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{currentLang === 'FR' ? 'Poser ma candidature' : 'Apply for this program'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* 2. Page Content - Grid (70% main, 30% sticky side) */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%] mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Column (70% space) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Full description */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <h2 className="font-chelsea text-[#631120] text-xl md:text-2xl border-b border-gray-100 pb-3">
                {currentLang === 'FR' ? 'Présentation de la Formation' : 'Detailed Curriculum Framework'}
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed antialiased">
                {program.fullDescription[currentLang]}
              </p>
              
              {/* Highlight Note */}
              <div className="bg-[#F7EEEF] border-l-4 border-[#631120] p-4 rounded-r-lg mt-6">
                <p className="text-xs text-[#631120] font-semibold uppercase font-gothic tracking-wider">
                  {currentLang === 'FR' ? 'ORIENTATION INDUSTRIELLE & ENTREPRENDRE' : 'INDUSTRIAL DEPLOYMENT FOCUS'}
                </p>
                <p className="text-xs md:text-sm text-gray-700 mt-1 leading-relaxed">
                  {currentLang === 'FR'
                    ? 'Cette filière intègre 40% d\'heures consacrées à la résolution de cas industriels. Nos séminaires mensuels connectent directement l\'élève aux recruteurs africains.'
                    : 'This academic degree dedicates nearly 45% of teaching timelines to direct Problem-Solving labs guided by international business advisers.'}
                </p>
              </div>
            </div>

            {/* Curriculum Accordion Plan */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="font-chelsea text-[#631120] text-xl md:text-2xl border-b border-gray-100 pb-3 mb-6">
                {currentLang === 'FR' ? 'Plan d\'études détaillé du Cursus' : 'Structure of Academic Years & Courses'}
              </h2>

              <div className="space-y-4">
                {curriculumYears.map((yearObj, i) => {
                  const isOpen = !!activeYears[yearObj.year];
                  return (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      {/* Accordion header */}
                      <button
                        onClick={() => toggleAccordion(yearObj.year)}
                        className="w-full bg-gray-50/80 hover:bg-[#F7EEEF]/30 p-5 flex items-center justify-between text-left transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-5 h-5 text-[#B8860B]" />
                          <div>
                            <span className="font-gothic text-xs text-[#631120] tracking-wider font-bold block">
                              {yearObj.year.toUpperCase()}
                            </span>
                            <span className="font-semibold text-sm md:text-base text-gray-800">
                              {yearObj.title[currentLang]}
                            </span>
                          </div>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Accordion body panels */}
                      {isOpen && (
                        <div className="p-6 bg-white border-t border-gray-100 divide-y divide-gray-100 animate-fade-in-up">
                          {yearObj.semesters.map((sem, sIdx) => (
                            <div key={sIdx} className={`py-4 ${sIdx === 0 ? 'pt-0' : 'pb-0'}`}>
                              <h4 className="font-gothic text-xs text-[#B8860B] tracking-wider font-bold uppercase mb-3">
                                {sem.title[currentLang]}
                              </h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                {sem.courses.map((course, cIdx) => (
                                  <li key={cIdx} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#631120] mt-2 shrink-0" />
                                    <span>{course}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Career Opportunities visual cards */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#D4D4D4] shadow-sm">
              <h2 className="font-chelsea text-[#631120] text-xl md:text-2xl border-b border-gray-100 pb-3 mb-6">
                {currentLang === 'FR' ? 'Débouchés professionnels & Métiers' : 'Career Opportunities & Placements'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.careerOpportunities.map((opportunity, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex gap-3.5 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#F7EEEF] text-[#631120] flex items-center justify-center shrink-0">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-800">
                        {opportunity[currentLang]}
                      </h4>
                      <p className="text-[11px] text-[#A8A8A8] mt-0.5">
                        {currentLang === 'FR' ? 'Secteur public, privé ou entrepreneuriat' : 'Active globally across corporate boundaries'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column (30% space) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick brochure panel card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6 text-left sticky top-24">
              
              <div className="border-b border-gray-100 pb-4">
                <span className="text-[10px] text-gray-400 font-gothic tracking-wider font-bold block uppercase">PROCHAINE ADMISSION</span>
                <p className="text-sm font-bold text-[#631120] mt-1">Rentrée Académique Septembre 2026</p>
              </div>

              <div>
                <span className="text-[10px] text-gray-400 font-gothic tracking-wider font-bold block uppercase">MODALITÉ COURS</span>
                <p className="text-sm font-bold text-gray-800 mt-1">
                  {currentLang === 'FR' ? 'Présentiel & Projets terrain' : 'Full-Time Campus Attendance'}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onNavigate('candidature', program.id)}
                  className="w-full bg-[#631120] hover:bg-[#7B0A1F] text-white py-3.5 rounded-full text-center text-xs font-bold font-gothic tracking-wider uppercase shadow-md transition-all cursor-pointer"
                >
                  {currentLang === 'FR' ? 'Déposer mon dossier' : 'Submit Admission Folder'}
                </button>

                <button
                  onClick={() => alert('Une plaquette d\'inscription administrative sera partagée avec vous.')}
                  className="w-full border border-[#631120] text-[#631120] hover:bg-[#F7EEEF] py-3.5 rounded-full text-center text-xs font-bold font-gothic tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{currentLang === 'FR' ? 'Brochure Complète PDF' : 'Download Syllabus PDF'}</span>
                </button>
              </div>

              <div className="bg-[#FDF6E3] border border-[#B8860B]/10 p-4 rounded-xl text-xs space-y-1.5 mt-4">
                <p className="font-bold text-gray-800 uppercase font-gothic tracking-wide">
                  {currentLang === 'FR' ? 'Besoin d\'assistance ?' : 'Assistance Desk'}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {currentLang === 'FR'
                    ? 'Notre équipe pédagogique est disponible pour vous conseiller sur le choix de votre option bilingue.'
                    : 'Our registry division is ready to offer recommendations regarding your language track choice.'}
                </p>
                <button
                  className="text-[#631120] font-bold underline text-[11px] mt-1 block cursor-pointer"
                  onClick={() => onNavigate('contact')}
                >
                  {currentLang === 'FR' ? 'Prendre Rendez-vous' : 'Book a Call'}
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
