import React, { useState } from 'react';
import { ALL_PROGRAMS } from '../data/programs';
import { BookOpen, Clock, Globe, HelpCircle } from 'lucide-react';
import { Language, Program } from '../types';

interface ProgramsListingViewProps {
  currentLang: Language;
  onSelectProgram: (slug: string) => void;
  filterDomain: string;
}

export default function ProgramsListingView({
  currentLang,
  onSelectProgram,
  filterDomain
}: ProgramsListingViewProps) {
  const [selectedDomain, setSelectedDomain] = useState<string>(filterDomain || 'all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const domainFilters = [
    { id: 'all', label: { FR: 'Tous les domaines', EN: 'All Fields' } },
    { id: 'engineering', label: { FR: 'Ingénierie', EN: 'Engineering' } },
    { id: 'business', label: { FR: 'Business & Droit', EN: 'Business & Law' } },
    { id: 'health', label: { FR: 'Sciences de la Santé', EN: 'Health Sciences' } }
  ];

  const levelFilters = [
    { id: 'all', label: { FR: 'Tous les niveaux', EN: 'All Levels' } },
    { id: 'preparatory', label: { FR: 'Préparatoire', EN: 'Foundation' } },
    { id: 'bachelor', label: { FR: 'Bachelor (Bac+3)', EN: 'Bachelor (BSc)' } },
    { id: 'master', label: { FR: 'Master (Bac+5)', EN: 'Master (MSc)' } }
  ];

  // Filtering Logic
  const filteredPrograms = ALL_PROGRAMS.filter((prog) => {
    const matchDomain = selectedDomain === 'all' || prog.domain === selectedDomain;
    const matchLevel = selectedLevel === 'all' || prog.level === selectedLevel;
    return matchDomain && matchLevel;
  });

  return (
    <div className="bg-[#F8F6F6] min-h-screen pt-28 pb-16">
      
      {/* Hero Secondary Page Title Bar */}
      <div className="bg-[#631120] text-white py-16 text-center relative overflow-hidden mb-12">
        <div className="absolute inset-0 dots-pattern opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <h1 className="font-chelsea text-3xl md:text-5xl uppercase tracking-wider mb-4 leading-none">
            {currentLang === 'FR' ? 'Nos Programmes Universitaires' : 'Academic Degree Curriculums'}
          </h1>
          <div className="w-[60px] h-1 bg-[#B8860B] rounded-full my-2 animate-pulse" />
          <p className="text-white/80 text-sm md:text-base max-w-2xl mt-1">
            {currentLang === 'FR'
              ? 'Sélectionnez parmi nos filières certifiées du Bachelor au Master et préparez-vous au bilinguisme professionnel.'
              : 'Discover certified curricular degrees and explore study options tailored to fit high employer expectations.'}
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%]">
        
        {/* Filters Panel Box */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6 mb-12 animate-fade-in-up">
          
          {/* Main Domain Filters */}
          <div>
            <span className="font-gothic text-xs text-[#631120] tracking-wider font-bold uppercase block mb-3">
              {currentLang === 'FR' ? 'FILTRER PAR FILIÈRE' : 'DEPARTMENTS FILTER'}
            </span>
            <div className="flex flex-wrap gap-2.5">
              {domainFilters.map((df) => (
                <button
                  key={df.id}
                  onClick={() => setSelectedDomain(df.id)}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full duration-200 transition-all cursor-pointer ${
                    selectedDomain === df.id
                      ? 'bg-[#631120] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-[#F7EEEF] hover:text-[#631120]'
                  }`}
                >
                  {df.label[currentLang]}
                </button>
              ))}
            </div>
          </div>

          {/* Level Filters */}
          <div>
            <span className="font-gothic text-xs text-gray-500 tracking-wider font-bold uppercase block mb-3">
              {currentLang === 'FR' ? 'FILTRER PAR ACCRÉDITATION' : 'DEGREE CYCLE FILTER'}
            </span>
            <div className="flex flex-wrap gap-2.5">
              {levelFilters.map((lf) => (
                <button
                  key={lf.id}
                  onClick={() => setSelectedLevel(lf.id)}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg duration-200 transition-all cursor-pointer ${
                    selectedLevel === lf.id
                      ? 'bg-[#B8860B] text-black shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-[#FDF6E3] hover:text-[#B8860B]'
                  }`}
                >
                  {lf.label[currentLang]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400 font-gothic tracking-wider border-t border-gray-100 pt-4">
            <span>
              {filteredPrograms.length} {currentLang === 'FR' ? 'PROGRAMMES DISPONIBLES' : 'PROGRAMS ACCESSIBLE'}
            </span>
            <span>
              {currentLang === 'FR' ? '• ACCRÉDITÉ CPD LONDON' : '• UK CPD CERTIFIED'}
            </span>
          </div>

        </div>

        {/* Dynamic Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                onClick={() => onSelectProgram(prog.slug)}
                className="group bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-200 overflow-hidden cursor-pointer flex flex-col justify-between transform hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-[#631120]/35 transition-all duration-300"
              >
                
                {/* Image Cover */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={prog.imageUrl}
                    alt={prog.title[currentLang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Department Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#631120] text-white text-[10px] font-gothic tracking-wider font-bold uppercase px-3 py-1 rounded">
                      {prog.domain === 'engineering' ? 'INGÉNIERIE' : prog.domain === 'business' ? 'BUSINESS & LAW' : 'SANTE'}
                    </span>
                  </div>
                  {/* Level Badge */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="bg-[#B8860B] text-black text-[10px] font-gothic tracking-wider font-bold uppercase px-3 py-1 rounded">
                      {prog.level === 'preparatory' ? 'FOUNDATION' : prog.level === 'bachelor' ? 'BACHELOR' : 'MASTER'}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3 mb-6">
                    <h3 className="font-chelsea text-[#1C1C1C] text-lg font-bold group-hover:text-[#631120] transition-colors leading-snug">
                      {prog.title[currentLang]}
                    </h3>

                    {/* Meta quick chips */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-medium">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
                        <span>{prog.duration[currentLang]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-[#631120]" />
                        <span>{prog.language[currentLang]}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed font-light line-clamp-3">
                      {prog.shortDescription[currentLang]}
                    </p>
                  </div>

                  {/* Call to action button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProgram(prog.slug);
                    }}
                    className="w-full bg-gray-50 border border-gray-200 py-3 rounded-lg text-center font-gothic font-bold text-xs text-gray-800 tracking-wider group-hover:bg-[#631120] group-hover:text-white group-hover:border-transparent transition-all duration-300 uppercase cursor-pointer"
                  >
                    {currentLang === 'FR' ? 'Découvrir ce programme' : 'Discover Track Details'}
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl text-center border mr-auto max-w-xl mx-auto shadow-sm">
            <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="font-bold text-lg text-gray-700">
              {currentLang === 'FR' ? 'Aucun programme disponible' : 'No matching programs found'}
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              {currentLang === 'FR'
                ? 'Essayez de réinitialiser vos paramètres de filtrage pour explorer nos autres spécialités.'
                : 'Modify your filter presets above to explore other departments.'}
            </p>
            <button
              onClick={() => {
                setSelectedDomain('all');
                setSelectedLevel('all');
              }}
              className="mt-6 px-6 py-2 bg-[#631120] text-white text-xs font-bold font-gothic tracking-wider uppercase rounded-full cursor-pointer"
            >
              {currentLang === 'FR' ? 'Recommencer' : 'Reset filters'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
