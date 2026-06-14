import React from 'react';
import { Shield, Users, Target, BookOpen, GraduationCap, Globe, Award } from 'lucide-react';
import { Language } from '../types';
import director from "../../assets/directeur-768x697.png"

interface AproposViewProps {
  currentLang: Language;
}

export default function AproposView({ currentLang }: AproposViewProps) {
  return (
    <div className="pt-24 min-h-screen bg-white text-[#1C1C1C] animate-fade-in-up">
      {/* Editorial Header */}
      <div className="relative bg-[#3D0A12] text-white py-20 px-6 text-center overflow-hidden">
        {/* Crisp background image with optimal opacity handling */}
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200"
          alt="Apropos background"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05] z-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#631120]/80 to-[#3D0A12]/80 pointer-events-none" />
        <div className="absolute inset-0 z-10 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto relative z-20 flex flex-col items-center">
          <span className="font-gothic text-xs tracking-widest font-bold uppercase text-[#FFA2B2] mb-3">
            {currentLang === 'FR' ? 'NOTRE INSTITUTION d\'EXCELLENCE' : 'OUR ELITE INSTITUTION'}
          </span>
          <h1 className="font-chelsea text-3xl md:text-5xl uppercase tracking-tight max-w-3xl leading-tight">
            {currentLang === 'FR' 
              ? 'À Propos de RHIT (Rousseau Higher Institute of Technology)' 
              : 'About RHIT (Rousseau Higher Institute of Technology)'}
          </h1>
          <div className="w-[80px] h-1.5 bg-[#631120] rounded-full my-4" />
          <p className="text-white/80 text-sm md:text-lg max-w-2xl leading-relaxed">
            {currentLang === 'FR'
              ? 'Le temple de la formation bilingue d\'élite combinant compétences techniques avancées et préparation internationale.'
              : 'The temple of elite bilingual academic frameworks combining high technical proficiency and international preparation.'}
          </p>
        </div>
      </div>

      {/* Main Narrative Split Column */}
      <div className="max-w-[1150px] mx-auto px-6 md:px-[6%] py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-left">
          <h2 className="font-chelsea text-2xl md:text-3xl text-gray-950 uppercase">
            {currentLang === 'FR' ? 'Qui sommes-nous ?' : 'Who Are We?'}
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            {currentLang === 'FR' ? (
              <>
                Le <strong>Rousseau Higher Institute of Technology (RHIT)</strong> est un institut de formation universitaire de premier ordre situé à Douala, au Cameroun. Notre mission est de former la prochaine génération de leaders technologiques, d'entrepreneurs et de professionnels de la santé.
              </>
            ) : (
              <>
                The <strong>Rousseau Higher Institute of Technology (RHIT)</strong> is a premier university institution based in Douala, Cameroon, dedicated to polishing the next generation of engineers, technological pioneers, and medical service leaders.
              </>
            )}
          </p>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            {currentLang === 'FR' ? (
              <>
                Ancré dans un modèle pédagogique moderne et axé sur les projets (<strong>Problem-Based Learning - PBL</strong>), RHIT offre des cursus bilingues intégrés aux standards internationaux de développement. Grâce à notre agrément et nos certifications, nos étudiants acquièrent des accréditations qui leur ouvrent les portes des grandes universités et industries du monde entier.
              </>
            ) : (
              <>
                Rooted in active experiential frameworks (<strong>Problem-Based Learning - PBL</strong>), RHIT provides integrated bilingual degrees tailored to premium international standards. Thanks to sovereign accreditations, our school supplies student portfolios with highly esteemed certificates giving entrance to competitive global industries.
              </>
            )}
          </p>

          <div className="bg-[#F7EEEF] border-l-4 border-[#631120] p-5 rounded-r-xl">
            <h4 className="font-gothic font-bold text-xs text-[#631120] uppercase tracking-wider">
              {currentLang === 'FR' ? 'Le Sceau de la Qualité Internationale' : 'A Mark of International Distinction'}
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed mt-1">
              {currentLang === 'FR'
                ? 'Nos programmes répondent aux exigences d\'employabilité les plus élevées du marché mondial.'
                : 'All courses are customized to optimize structural employability across modern industries.'}
            </p>
          </div>
        </div>

        {/* Brand Image / Graphic */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#631120]/20 to-transparent rounded-[32px] transform rotate-2 pointer-events-none" />
          <img 
            src={director} 
            alt="RHIT Academic campus life" 
            className="rounded-[32px] shadow-2xl relative z-10 w-full object-cover h-[400px] hover:scale-[1.02] duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Structured Pillars of RHIT */}
      <div className="bg-[#F8F6F6] py-16">
        <div className="max-w-[1150px] mx-auto px-6 md:px-[6%]">
          <div className="text-center mb-12">
            <h2 className="font-chelsea text-2xl md:text-3xl text-gray-950 uppercase">
              {currentLang === 'FR' ? 'Nos Valeurs Fondamentales' : 'Our Fundamental Values'}
            </h2>
            <div className="w-[50px] h-1 bg-[#631120] mx-auto my-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-start text-left space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#F7EEEF] text-[#631120] flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold font-inter text-lg text-gray-950">
                {currentLang === 'FR' ? 'Excellence & Intégrité' : 'Excellence & Integrity'}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {currentLang === 'FR' 
                  ? 'Nous maintenons des normes académiques rigoureuses pour assurer que nos diplômés possèdent une éthique de travail irréprochable et un niveau technique de pointe.'
                  : 'We foster high standard ethics and deep industrial technical expertise, shaping leaders of uncompromised academic values.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-start text-left space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#F7EEEF] text-[#631120] flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-bold font-inter text-lg text-gray-950">
                {currentLang === 'FR' ? 'Ouverture Internationale' : 'International Perspective'}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {currentLang === 'FR' 
                  ? 'Le bilinguisme complet (Français / Anglais), l\'apprentissage optionnel du Chinois Mandarin, et nos accords de mobilité vous préparent directement à une carrière internationale.'
                  : 'Robust double-bilingual system, Mandarin options, and active international credit mobility prepare you directly for overseas employment.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-start text-left space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#F7EEEF] text-[#631120] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold font-inter text-lg text-gray-950">
                {currentLang === 'FR' ? 'Insertion Professionnelle' : 'Employability Trajectory'}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {currentLang === 'FR' 
                  ? '100% de nos étudiants obtiennent des stages en entreprise de grande envergure. Notre réseau industriel garantit une transition fluide vers le marché de l\'emploi.'
                  : '100% corporate stage insertion. Our premium business alliance network ensures dynamic entry routes into sovereign regional jobs.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
