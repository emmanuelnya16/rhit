import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Award } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  currentLang: Language;
  onNavigate: (view: string) => void;
}

export default function Hero({ currentLang, onNavigate }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Carousel slide data representing 5 levels of slides
  const slides = [
    {
      bg: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920',
      badge: {
        FR: 'CPD Certifié • Mobilité Internationale • Inscriptions Ouvertes',
        EN: 'CPD Certified • International Mobility • Admissions Open'
      },
      title: {
        FR: (
          <>
            <span className="block">Formez-vous</span>
            <span className="block pl-6 text-[#FFFFFF]/90 my-1 font-light italic">pour un avenir</span>
            <span className="block text-[#631120]">sans frontières.</span>
          </>
        ),
        EN: (
          <>
            <span className="block">Empower your</span>
            <span className="block pl-6 text-[#FFFFFF]/90 my-1 font-light italic">future with a</span>
            <span className="block text-[#631120]">global vision.</span>
          </>
        )
      },
      subtitle: {
        FR: "Ingénierie, Business, Sciences de la Santé. Une formation d'excellence, ancrée dans la réalité professionnelle et ouverte sur le monde avec la certification britannique CPD.",
        EN: "Engineering, Business, Health Sciences. Elite academic tracks, deeply rooted in hands-on industry practices, globally recognized with British CPD Certification."
      }
    },
    {
      bg: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920',
      badge: {
        FR: 'Génie Logiciel • Cybersécurité • Intelligence Artificielle',
        EN: 'Software Engineering • Cybersecurity • Artificial Intelligence'
      },
      title: {
        FR: (
          <>
            <span className="block">Dominez la</span>
            <span className="block pl-6 text-[#FFFFFF]/90 my-1 font-light italic">révolution numérique</span>
            <span className="block text-[#631120]">et de l'IA.</span>
          </>
        ),
        EN: (
          <>
            <span className="block">Pioneer the</span>
            <span className="block pl-6 text-[#FFFFFF]/90 my-1 font-light italic">digital transformation</span>
            <span className="block text-[#631120]">and global AI.</span>
          </>
        )
      },
      subtitle: {
        FR: "Maîtrisez les technologies de pointe dans nos laboratoires modernes hautement équipés à Douala. Préparez-vous pour des carrières technologiques d'élite.",
        EN: "Master cutting-edge computing stacks inside our modern Douala labs. Secure elite skills customized for competitive software engineering markets."
      }
    },
    {
      bg: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920',
      badge: {
        FR: '100% de Stages Garantis • Réseau Professionnel',
        EN: '100% Placements • Elite Corporate Network'
      },
      title: {
        FR: (
          <>
            <span className="block">Votre carrière</span>
            <span className="block pl-6 text-[#FFFFFF]/90 my-1 font-light italic">commence dès le premier jour</span>
            <span className="block text-[#631120]">grâce à RHIT.</span>
          </>
        ),
        EN: (
          <>
            <span className="block">Your professional</span>
            <span className="block pl-6 text-[#FFFFFF]/90 my-1 font-light italic">leadership starts day one</span>
            <span className="block text-[#631120]">at our campus.</span>
          </>
        )
      },
      subtitle: {
        FR: "Bénéficiez d'une orientation stratégique personnalisée. Nous connectons 100% de nos étudiants aux grandes entreprises locales et mondiales.",
        EN: "Benefit from structured high-impact academic guidance. We connect 100% of our student community straight to active domestic and global companies."
      }
    },
    {
      bg: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920',
      badge: {
        FR: 'Accords de Mobilité • Doubles Diplômes à l\'Étranger',
        EN: 'Global Mobilily • Double Diplomas Overseas'
      },
      title: {
        FR: (
          <>
            <span className="block">Étudiez d'abord</span>
            <span className="block pl-6 text-[#FFFFFF]/90 my-1 font-light italic">au Cameroun puis continuez</span>
            <span className="block text-[#631120]">dans le monde.</span>
          </>
        ),
        EN: (
          <>
            <span className="block">Seamless global</span>
            <span className="block pl-6 text-[#FFFFFF]/90 my-1 font-light italic">mobility pathways to</span>
            <span className="block text-[#631120]">prestige universities.</span>
          </>
        )
      },
      subtitle: {
        FR: "Grâce à notre solide réseau académique, bénéficiez de transferts de crédits fluides vers d'excellentes universités partenaires d'Europe et d'Amérique.",
        EN: "Unlock international transfer programs of credits to leading co-affiliated institutions in France, USA, UK and across active global centers."
      }
    },
    {
      bg: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1920',
      badge: {
        FR: 'Biotechnologie • Smart Business Management',
        EN: 'Biomedical Innovation • Executive Leadership'
      },
      title: {
        FR: (
          <>
            <span className="block">Devenez un</span>
            <span className="block pl-6 text-[#FFFFFF]/90 my-1 font-light italic">leader technologique d'impact</span>
            <span className="block text-[#631120]">dans votre domaine.</span>
          </>
        ),
        EN: (
          <>
            <span className="block">Shaping elite</span>
            <span className="block pl-6 text-[#FFFFFF]/90 my-1 font-light italic">pioneering tech operators</span>
            <span className="block text-[#631120]">for this generation.</span>
          </>
        )
      },
      subtitle: {
        FR: "Que ce soit en sciences infirmières ou en haute administration d'entreprise, apprenez des meilleurs experts et dominez votre secteur d'activité.",
        EN: "Earn highly regarded knowledge across management frameworks or biomedical innovations. Acquire direct mentorship from renowned world experts."
      }
    }
  ];

  // Preload all slides on component mount to avoid any latency or lag
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.bg;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[activeSlide];

  return (
    <section id="hero-section" className="relative w-full h-[100vh] min-h-[650px] overflow-hidden bg-[#0A0607]">
      {/* Background Images Layer with fast, responsive crisp transitions */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-300 ease-in-out"
            style={{
              opacity: idx === activeSlide ? 0.8 : 0,
              backgroundImage: `url(${slide.bg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transform: idx === activeSlide ? 'scale(1.02)' : 'scale(1.0)',
              transitionProperty: 'opacity, transform',
              transitionDuration: '500ms, 6000ms',
              transitionTimingFunction: 'ease-in-out, linear'
            }}
          />
        ))}
      </div>

      {/* Cinematic Dark Neutral Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/40 to-black/10 md:block hidden pointer-events-none"
      />
      {/* Mobile Dark Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-black/55 md:hidden block pointer-events-none"
      />

      {/* Main Structural Layout */}
      <div className="relative z-20 max-w-[1280px] h-full mx-auto grid md:grid-cols-12 grid-cols-1 items-center px-4 md:px-[6%]">
        {/* Left Side Glass Panel Content with slide key reset to trigger transition animation on change */}
        <div 
          key={activeSlide} 
          className="md:col-span-7 col-span-1 glass-panel text-white p-6 md:p-12 xl:p-16 rounded-2xl md:rounded-r-none md:rounded-l-2xl border-l border-y border-white/20 shadow-2xl flex flex-col items-start translate-y-4 md:translate-y-0 animate-fade-in-up"
        >
          
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-[#631120]/15 border border-[#631120]/40 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-gothic tracking-widest text-[#631120] mb-6 uppercase">
            <Sparkles className="w-3 md:w-3.5 h-3 md:h-3.5" />
            <span>
              {currentSlideData.badge[currentLang]}
            </span>
          </div>

          {/* Majestic Title in Chelsea Market font */}
          <h1 className="font-chelsea text-3xl sm:text-4xl md:text-5xl xl:text-[44px] text-white leading-[1.15] mb-6 uppercase tracking-tight">
            {currentSlideData.title[currentLang]}
          </h1>

          {/* Subtitle */}
          <p className="text-[#FFFFFF]/75 text-sm md:text-base leading-relaxed max-w-xl mb-8 font-inter">
            {currentSlideData.subtitle[currentLang]}
          </p>

          {/* Action Call to Buttons Component */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('programmes')}
              className="px-6 py-3.5 bg-[#631120] hover:bg-white hover:text-[#631120] text-white font-semibold text-xs md:text-sm tracking-widest uppercase rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>{currentLang === 'FR' ? 'Découvrir nos programmes' : 'Explore Programs'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-transparent border-2 border-white/50 hover:bg-white/10 text-white font-semibold text-xs md:text-sm tracking-widest uppercase rounded-full transition-all duration-200 cursor-pointer"
            >
              {currentLang === 'FR' ? 'Nous contacter' : 'Contact Us'}
            </button>
          </div>
        </div>

        {/* Right side empty placeholder spacing on desktop to let background show beautifully */}
        <div className="md:col-span-5 hidden md:block" />
      </div>

      {/* Interactive Slide indicators */}
      <div className="absolute bottom-20 sm:bottom-28 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeSlide 
                ? 'bg-[#631120] w-8 shadow-md border border-[#631120]/30' 
                : 'bg-white/40 hover:bg-white/70 w-2.5'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Floating Statistics bar (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full bg-[#1C0C10]/80 backdrop-blur-md border-t border-white/10 z-20 py-4 hidden sm:block">
        <div className="max-w-[1280px] mx-auto px-6 md:px-[6%] grid grid-cols-4 gap-4 text-center divide-x divide-white/10 text-white">
          <div className="flex flex-col items-center">
            <span className="font-gothic text-2xl md:text-3xl font-bold text-[#FFFFFF]">15+</span>
            <span className="text-[10px] md:text-xs text-[#FFFFFF]/60 mt-1 uppercase tracking-wider">
              {currentLang === 'FR' ? 'Programmes d\'Excellence' : 'Elite Degree Tracks'}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-gothic text-2xl md:text-3xl font-bold text-[#631120]">8</span>
            <span className="text-[10px] md:text-xs text-[#FFFFFF]/60 mt-1 uppercase tracking-wider">
              {currentLang === 'FR' ? 'Universités Partenaires' : 'Global University Alliances'}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-gothic text-2xl md:text-3xl font-bold text-[#FFFFFF]">100%</span>
            <span className="text-[10px] md:text-xs text-[#FFFFFF]/60 mt-1 uppercase tracking-wider">
              {currentLang === 'FR' ? 'Stages garantis' : 'Guaranteed Internships'}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-gothic text-2xl md:text-3xl font-bold text-[#631120]">CPD</span>
            <span className="text-[10px] md:text-xs text-[#FFFFFF]/60 mt-1 uppercase tracking-wider">
              {currentLang === 'FR' ? 'UK Certified Service' : 'UK CPD Certified'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
