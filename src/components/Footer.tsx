import React from 'react';
import { Mail, Phone, MapPin, Award, ArrowUp } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
  onNavigate: (view: string) => void;
}

export default function Footer({ currentLang, onNavigate }: FooterProps) {
  
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (viewId: string) => {
    onNavigate(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="rhit-institutional-footer" 
      className="relative bg-[#1C1C1C] text-[#A8A8A8] pt-16 pb-8 border-t-[3px] border-[#631120] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%]">
        
        {/* Main 4 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-4">
            <button 
              onClick={() => handleLinkClick('home')}
              className="text-left flex flex-col items-start gap-1 text-white focus:outline-none cursor-pointer"
            >
              <span className="font-chelsea text-3xl font-bold tracking-wider">RHIT</span>
              <span className="text-[9px] font-gothic tracking-widest text-[#631120] block font-bold uppercase leading-none">
                HIGHER INSTITUTE OF TECHNOLOGY
              </span>
            </button>
            <p className="text-xs md:text-sm text-[#A8A8A8]/80 leading-relaxed font-light">
              {currentLang === 'FR'
                ? 'Établissement privé d\'enseignement supérieur camerounais d\'excellence préparant aux carrières d\'avenir sans frontières.'
                : 'Elite Cameroonian private higher education institution training the next generation of global technology and business leaders.'}
            </p>
            {/* Slogan */}
            <p className="text-xs font-chelsea text-[#631120] tracking-wide mt-2 block italic">
              Learn · Create · Innovate
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-gothic text-xs text-white font-bold tracking-wider uppercase mb-6 border-b border-white/10 pb-2">
              {currentLang === 'FR' ? 'LIENS RAPIDES' : 'ACADEMIC NAVIGATION'}
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <button onClick={() => handleLinkClick('programmes')} className="hover:text-white hover:underline transition cursor-pointer">
                  {currentLang === 'FR' ? 'Tous les Programmes' : 'Academic Programs'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('mobilite')} className="hover:text-white hover:underline transition cursor-pointer">
                  {currentLang === 'FR' ? 'Mobilité Internationale' : 'Study Abroad & Mobility'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('vie-etudiante')} className="hover:text-white hover:underline transition cursor-pointer">
                  {currentLang === 'FR' ? 'Vie au Campus' : 'Student Life & Trips'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('partenaires')} className="hover:text-white hover:underline transition cursor-pointer">
                  {currentLang === 'FR' ? 'Universités Partenaires' : 'Allied Universities'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-white hover:underline transition cursor-pointer">
                  {currentLang === 'FR' ? 'Nous Contacter' : 'Help Desk & Inquiry'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h4 className="font-gothic text-xs text-white font-bold tracking-wider uppercase mb-6 border-b border-white/10 pb-2">
              {currentLang === 'FR' ? 'CONTACT & SECRÉTARIAT' : 'GET IN TOUCH'}
            </h4>
            <ul className="space-y-4 text-xs md:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#631120] shrink-0 mt-0.5" />
                <span>
                  {currentLang === 'FR'
                    ? 'Campus de Douala, Cameroun (Secrétariat ouvert Lun-Ven 08h-17h)'
                    : 'Douala Campus, Cameroon (Registrar Desk Mon-Fri 08am-05pm)'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#631120] shrink-0" />
                <span className="font-mono">+237 600 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#631120] shrink-0" />
                <span className="font-mono">admissions@rhit-tech.org</span>
              </li>
            </ul>
          </div>

          {/* Column 4: CPD Certified badge & info */}
          <div className="space-y-4">
            <h4 className="font-gothic text-xs text-white font-bold tracking-wider uppercase mb-6 border-b border-white/10 pb-2">
              {currentLang === 'FR' ? 'CRÉDIBILITÉ & NORMES' : 'ACCREDITED COMPLIANCE'}
            </h4>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-3 flex flex-col items-start">
              <div className="flex items-center gap-2 text-white">
                <Award className="w-6 h-6 text-[#631120]" />
                <span className="font-gothic text-[11px] font-bold tracking-wider">CPD CERTIFICATION SERVICE</span>
              </div>
              <p className="text-[10px] text-[#A8A8A8]/80 leading-relaxed font-light">
                {currentLang === 'FR'
                  ? 'Nos programmes respectent pleinement les normes de développement professionnel continu (CPD) reconnues au Royaume-Uni et à l\'international.'
                  : 'Our academic curricula fully satisfy London CPD guidelines, granting recognized credits points.'}
              </p>
              <div className="inline-block text-[9px] font-gothic tracking-wider bg-[#631120]/30 text-[#631120] px-2 py-1 rounded">
                PROVIDER NUMBER: #783109
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-light">
          <div>
            <p>© {new Date().getFullYear()} Rousseau Higher Institute of Technology (RHIT). All Rights Reserved.</p>
            <p className="text-[#A8A8A8]/50 mt-1">
              {currentLang === 'FR'
                ? 'Conçu par Emma — Ingénieure Web & Mobile | Partenariat CPD UK'
                : 'Engineered by Emma — Soft Dev Expert | CPD UK Official Partnership'}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => handleLinkClick('home')}
              className="hover:text-white transition cursor-pointer"
            >
              {currentLang === 'FR' ? 'Mentions Légales' : 'Legal Notices'}
            </button>
            <button 
              onClick={handleBackToTop}
              className="bg-white/5 hover:bg-white/10 text-white p-2.5 rounded-full transition flex items-center justify-center cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
