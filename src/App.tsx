import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import StatsSection from './components/StatsSection';
import ProgramHighlight from './components/ProgramHighlight';
import WhyRhit from './components/WhyRhit';
import StudentLife from './components/StudentLife';
import EnrollmentProcess from './components/EnrollmentProcess';
import Footer from './components/Footer';

// Inner sub views imports
import ProgramsListingView from './components/ProgramsListingView';
import ProgramDetailView from './components/ProgramDetailView';
import MobilityView from './components/MobilityView';
import StudentLifeView from './components/StudentLifeView';
import PartnersView from './components/PartnersView';
import NewsArticlesView from './components/NewsArticlesView';
import ContactView from './components/ContactView';
import CandidatureWizardView from './components/CandidatureWizardView';
import AdminDashboardView from './components/AdminDashboardView';
import AproposView from './components/AproposView';

import { Language } from './types';
import { Sparkles, Calendar, BookOpen, Quote } from 'lucide-react';
import { TESTIMONIALS, NEWS } from './data/news';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('FR');
  
  // Navigation Router states: 'home' | 'programmes' | 'program-detail' | 'mobilite' | 'vie-etudiante' | 'partenaires' | 'actualites' | 'contact' | 'candidature' | 'admin'
  const [activeView, setActiveView] = useState<string>('home');
  const [selectedProgramSlug, setSelectedProgramSlug] = useState<string>('');
  const [candidatureProgramId, setCandidatureProgramId] = useState<string>('');
  const [selectedHighlightDomain, setSelectedHighlightDomain] = useState<string>('all');

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  const handleNavigate = (viewId: string, extraParam?: string) => {
    if (viewId === 'candidature') {
      setCandidatureProgramId(extraParam || '');
      setActiveView('candidature');
    } else if (viewId === 'program-detail') {
      setSelectedProgramSlug(extraParam || '');
      setActiveView('program-detail');
    } else {
      setActiveView(viewId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDomainFromHighlight = (domainId: string) => {
    setSelectedHighlightDomain(domainId);
    setActiveView('programmes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="rhit-core-application" className="min-h-screen bg-white text-[#1C1C1C]">
      
      {/* Institutional Top Fixed Sticky Navigation Bar */}
      <Navigation
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        activeView={activeView}
        onNavigate={handleNavigate}
      />

      {/* Primary Structural View Router Switch */}
      <main id="rhit-primary-view-container">
        {activeView === 'home' && (
          <div className="relative animate-fade-in-up">
            {/* Landing hero banner */}
            <Hero currentLang={currentLang} onNavigate={handleNavigate} />
            
            {/* Horizontal grayscale to color partner logos */}
            <TrustBar currentLang={currentLang} />
            
            {/* Numerical metric counts */}
            <StatsSection currentLang={currentLang} />
            
            {/* 3 Department cards highlight */}
            <ProgramHighlight 
              currentLang={currentLang} 
              onSelectDomain={handleSelectDomainFromHighlight} 
            />
            
            {/* Educational core vision and criteria */}
            <WhyRhit currentLang={currentLang} />

            {/* Split screen student life block */}
            <StudentLife currentLang={currentLang} onNavigate={handleNavigate} />

            {/* Testimonials block in light gray background (design spec 5.7 / Section F) */}
            <section className="py-24 bg-[#F0ECEC]">
              <div className="max-w-[1280px] mx-auto px-6 md:px-[6%]">
                <div className="text-center mb-16 flex flex-col items-center">
                  <span className="font-gothic text-xs text-[#631120] tracking-widest font-bold uppercase mb-2">
                    {currentLang === 'FR' ? 'TEMOIGNAGES DE REUSSITE' : 'TESTIMONIALS OF EXCELLENCE'}
                  </span>
                  <h2 className="font-chelsea text-3xl md:text-[40px] text-gray-900 uppercase">
                    {currentLang === 'FR' ? 'Ce que disent nos diplômés' : 'What our grads tell about us'}
                  </h2>
                  <div className="w-[60px] h-1 bg-[#631120] rounded-full my-3" />
                  <p className="text-gray-500 text-sm max-w-xl">
                    {currentLang === 'FR'
                      ? 'Découvrez et inspirez-vous de l\'expérience de la réussite des diplômés formés à Douala'
                      : 'Explore historical testimonies from core computer and health program alumni'}
                  </p>
                </div>

                {/* Testimonial Cards Layout (Design Manual Section F) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TESTIMONIALS.map((test) => (
                    <div 
                      key={test.id}
                      className="bg-white p-6 rounded-[24px] shadow-[0_4px_24px_rgba(28,0,8,0.08)] border border-gray-100 flex flex-col justify-between items-start text-left hover:-translate-y-1.5 duration-300"
                    >
                      <div className="space-y-4 w-full">
                        {/* Rating stars & Quote symbol */}
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center text-[#631120]">
                            {[...Array(test.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <Quote className="w-8 h-8 text-[#631120] opacity-10" />
                        </div>

                        {/* Citation quote in italics Chelsea Market */}
                        <p className="font-chelsea text-sm font-normal text-gray-800 leading-relaxed italic">
                          "{test.quote[currentLang]}"
                        </p>
                      </div>

                      <div className="flex items-center gap-4 border-t border-gray-100 pt-4 mt-6 w-full">
                        <img 
                          src={test.avatarUrl} 
                          alt={test.name} 
                          className="w-12 h-12 rounded-full border-2 border-[#631120] object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="font-bold text-xs md:text-sm text-gray-900 leading-none">{test.name}</h4>
                          <span className="text-[10px] text-[#631120] font-gothic uppercase mt-1 block">
                            {test.programName[currentLang]}
                          </span>
                          <span className="text-[10px] text-gray-400 block">{test.promotion}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Registration simple milestones with countdown illustration */}
            <EnrollmentProcess currentLang={currentLang} onNavigate={handleNavigate} />

            {/* Recents news carousel row */}
            <section className="py-24 bg-white border-t border-gray-100">
              <div className="max-w-[1280px] mx-auto px-6 md:px-[6%]">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16">
                  <div className="text-left space-y-2">
                    <span className="font-gothic text-xs text-[#631120] tracking-widest font-bold uppercase block">
                      JOURNAL ET EVENEMENTS
                    </span>
                    <h2 className="font-chelsea text-2xl md:text-3xl text-gray-900 uppercase leading-none">
                      {currentLang === 'FR' ? 'Dernières nouvelles de RHIT' : 'RHIT Newsroom highlights'}
                    </h2>
                    <div className="w-[60px] h-1 bg-[#631120] rounded-full my-2" />
                  </div>
                  <button
                    onClick={() => handleNavigate('actualites')}
                    className="mt-4 sm:mt-0 px-6 py-2.5 border border-[#631120] text-[#631120] hover:bg-[#F7EEEF] text-xs font-bold font-gothic tracking-wider uppercase rounded-lg transition"
                  >
                    {currentLang === 'FR' ? 'Consulter toutes les actualités' : 'Browse Complete News'}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  {NEWS.map((art) => (
                    <div 
                      key={art.id}
                      onClick={() => handleNavigate('actualites')}
                      className="group bg-[#F8F6F6] rounded-2xl overflow-hidden border border-gray-200 hover:border-[#631120]/30 shadow-sm hover:shadow transition duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      <div className="h-44 bg-gray-50 overflow-hidden">
                        <img src={art.imageUrl} alt={art.title[currentLang]} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between text-[11px] text-[#631120] font-mono">
                          <span className="font-bold uppercase bg-[#631120]/10 text-[#631120] px-2.5 py-0.5 rounded">
                            {art.categoryLabel[currentLang]}
                          </span>
                          <span>{art.date}</span>
                        </div>
                        <h4 className="font-bold text-sm tracking-tight text-gray-900 group-hover:text-[#631120] transition duration-200">
                          {art.title[currentLang]}
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{art.summary[currentLang]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section H - Conversion CTA Final Band (Design Manual Section H / Seul usage fond bordeaux) */}
            <section className="bg-[#3D0A12] text-white py-16 text-center relative overflow-hidden border-t border-[#631120]/20">
              <div className="absolute inset-0 dots-pattern opacity-10 pointer-events-none" />
              <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">
                <h2 className="font-chelsea text-3xl md:text-[44px] uppercase tracking-tight leading-tight">
                  {currentLang === 'FR' ? 'Prêt à construire votre avenir ?' : 'Ready to build your global career?'}
                </h2>
                
                <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto">
                  {currentLang === 'FR'
                    ? 'Les candidatures en ligne pour l\'admission bilingue de la rentrée 2025-2026 sont officiellement en cours d\'analyse.'
                    : 'Online admissions credentials uploads for the bilingual academic batch are officially launched.'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <button
                    onClick={() => handleNavigate('candidature')}
                    className="px-8 py-4 bg-[#631120] hover:bg-white hover:text-[#631120] text-white font-semibold text-xs md:text-sm tracking-widest uppercase rounded-full shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    {currentLang === 'FR' ? 'Candidater en ligne maintenant' : 'Apply Online Now'}
                  </button>
                  <button
                    onClick={() => handleNavigate('contact')}
                    className="text-xs font-bold text-white uppercase tracking-wider font-gothic underline hover:text-[#631120] transition-colors"
                  >
                    {currentLang === 'FR' ? 'Des Questions ? Discutez avec nous' : 'Contact Support Desk'}
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* About US (A Propos) view */}
        {activeView === 'apropos' && (
          <AproposView currentLang={currentLang} />
        )}

        {/* View listing of programs with search/filters */}
        {activeView === 'programmes' && (
          <ProgramsListingView
            currentLang={currentLang}
            onSelectProgram={(slug) => handleNavigate('program-detail', slug)}
            filterDomain={selectedHighlightDomain}
          />
        )}

        {/* Program specific core details */}
        {activeView === 'program-detail' && (
          <ProgramDetailView
            currentLang={currentLang}
            programSlug={selectedProgramSlug}
            onNavigate={handleNavigate}
          />
        )}

        {/* International mobility guide cards */}
        {activeView === 'mobilite' && (
          <MobilityView currentLang={currentLang} onNavigate={handleNavigate} />
        )}

        {/* Dynamic student experiences view */}
        {activeView === 'vie-etudiante' && (
          <StudentLifeView currentLang={currentLang} />
        )}

        {/* Strategic alliances layout */}
        {activeView === 'partenaires' && (
          <PartnersView currentLang={currentLang} />
        )}

        {/* Newsroom listing & details dispatcher */}
        {activeView === 'actualites' && (
          <NewsArticlesView currentLang={currentLang} />
        )}

        {/* FAQ & Contact desk submission */}
        {activeView === 'contact' && (
          <ContactView currentLang={currentLang} />
        )}

        {/* 3 Step online admissions application wizard */}
        {activeView === 'candidature' && (
          <CandidatureWizardView
            currentLang={currentLang}
            initialSelectedProgramId={candidatureProgramId}
            onNavigate={handleNavigate}
          />
        )}

        {/* Administrative Back-office secure manager */}
        {activeView === 'admin' && (
          <AdminDashboardView currentLang={currentLang} />
        )}
      </main>

      {/* Institutional Bottom Footer */}
      <Footer currentLang={currentLang} onNavigate={handleNavigate} />

    </div>
  );
}
