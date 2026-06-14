import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Award, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import logo1 from "../../assets/cropped-rhit-logo1--150x150.png"

interface NavigationProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeView: string;
  onNavigate: (view: string) => void;
}

export default function Navigation({
  currentLang,
  onLanguageChange,
  activeView,
  onNavigate
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: { FR: 'Accueil', EN: 'Home' } },
    { id: 'apropos', label: { FR: 'À propos', EN: 'About' } },
    { id: 'programmes', label: { FR: 'Programmes', EN: 'Programs' } },
    { id: 'mobilite', label: { FR: 'Mobilité', EN: 'Mobility' } },
    { id: 'vie-etudiante', label: { FR: 'Vie Étudiante', EN: 'Student Life' } },
    { id: 'partenaires', label: { FR: 'Partenaires', EN: 'Partners' } },
    { id: 'actualites', label: { FR: 'Actualités', EN: 'News' } },
    { id: 'contact', label: { FR: 'Contact', EN: 'Contact' } }
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="rhit-main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || activeView !== 'home'
          ? 'bg-white shadow-[0_2px_20px_rgba(28,0,8,0.10)] py-3 text-[#1C1C1C]'
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-[6%] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-1 focus:outline-none cursor-pointer"
          >
            <img src={logo1} alt="logo" className="w-24 h-24" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium tracking-wide nav-link-underline transition-colors duration-200 cursor-pointer ${
                activeView === item.id
                  ? 'text-[#631120]'
                  : 'hover:text-[#631120]'
              }`}
            >
              {item.label[currentLang]}
            </button>
          ))}
        </div>

        {/* Right Controls: Switcher & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 border border-current/20 rounded-full px-3 py-1.5 text-xs font-semibold focus:outline-none cursor-pointer hover:bg-current/5 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 opacity-80" />
              <span>{currentLang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {langDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangDropdownOpen(false)} />
                <div className="absolute right-0 mt-2 w-28 bg-white text-[#1C1C1C] rounded-lg shadow-lg border border-gray-100 py-1.5 z-20 animate-fade-in-up">
                  <button
                    onClick={() => {
                      onLanguageChange('FR');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs hover:bg-[#F7EEEF] hover:text-[#631120] transition-colors flex justify-between items-center ${
                      currentLang === 'FR' ? 'font-bold text-[#631120]' : 'text-gray-700 font-normal'
                    }`}
                  >
                    <span>Français</span>
                    {currentLang === 'FR' && <span className="w-1.5 h-1.5 bg-[#631120] rounded-full" />}
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange('EN');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs hover:bg-[#F7EEEF] hover:text-[#631120] transition-colors flex justify-between items-center ${
                      currentLang === 'EN' ? 'font-bold text-[#631120]' : 'text-gray-700 font-normal'
                    }`}
                  >
                    <span>English</span>
                    {currentLang === 'EN' && <span className="w-1.5 h-1.5 bg-[#631120] rounded-full" />}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Action Button */}
          <button
            onClick={() => handleNavClick('candidature')}
            className={`cursor-pointer px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase shadowTransition transition-all duration-300 hover:scale-105 ${
              isScrolled || activeView !== 'home'
                ? 'bg-[#631120] hover:bg-[#7B0A1F] text-white shadow-[0_4px_12px_rgba(99,17,32,0.2)]'
                : 'bg-[#631120] hover:bg-white hover:text-[#631120] text-white shadow-[0_4px_12px_rgba(99,17,32,0.3)]'
            }`}
          >
            {currentLang === 'FR' ? 'Candidater' : 'Apply Now'}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Direct Language Switcher on mobile */}
          <button
            onClick={() => onLanguageChange(currentLang === 'FR' ? 'EN' : 'FR')}
            className="p-1 px-2 border border-current/20 rounded text-xs font-bold font-gothic"
          >
            {currentLang === 'FR' ? 'EN' : 'FR'}
          </button>

          {/* Hamburger trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white text-[#1C1C1C] z-40 flex flex-col p-6 animate-fade-in-up">
          <div className="flex flex-col gap-5 mt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-xl font-chelsea py-2 border-b border-gray-100 ${
                  activeView === item.id ? 'text-[#631120] pl-2 font-semibold' : 'text-gray-800'
                }`}
              >
                {item.label[currentLang]}
              </button>
            ))}
          </div>

          <div className="mt-auto pb-8 flex flex-col gap-4">
            <div className="bg-[#F7EEEF] p-4 rounded-xl border border-[#631120]/10 flex items-center gap-3 text-xs text-[#631120]">
              <Award className="w-5 h-5 text-[#631120] shrink-0" />
              <div>
                <p className="font-bold font-gothic tracking-wider">CPD CERTIFICATION SERVICE UK</p>
                <p className="opacity-80">Continuing Professional Development</p>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('candidature')}
              className="w-full bg-[#631120] hover:bg-[#7B0A1F] text-white py-4 rounded-full text-center font-bold tracking-wider uppercase text-sm cursor-pointer shadow-lg"
            >
              {currentLang === 'FR' ? 'Candidater en ligne' : 'Online Application'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
