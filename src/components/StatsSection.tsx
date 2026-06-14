import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';

interface StatsSectionProps {
  currentLang: Language;
}

export default function StatsSection({ currentLang }: StatsSectionProps) {
  const [counts, setCounts] = useState({ programs: 0, partners: 0, domains: 0, stages: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate counts
          const duration = 2000; // 2 seconds
          const steps = 50;
          const stepTime = duration / steps;
          
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            
            // Ease out mathematical curve
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              programs: Math.floor(easedProgress * 15),
              partners: Math.floor(easedProgress * 8),
              domains: Math.floor(easedProgress * 3),
              stages: Math.floor(easedProgress * 100)
            });

            if (step >= steps) {
              clearInterval(timer);
              setCounts({ programs: 17, partners: 8, domains: 3, stages: 100 });
            }
          }, stepTime);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const stats = [
    {
      id: 'programs',
      value: counts.programs + '+',
      label: {
        FR: 'Programmes certifiés Bachelor & Master',
        EN: 'Certified Degree Tracks (BSc & MSc)'
      },
      accent: 'text-[#631120]'
    },
    {
      id: 'partners',
      value: String(counts.partners),
      label: {
        FR: 'Prestigieuses universités partenaires',
        EN: 'Global partner academic alliances'
      },
      accent: 'text-[#631120]'
    },
    {
      id: 'domains',
      value: String(counts.domains),
      label: {
        FR: 'Grandes écoles de spécialisation',
        EN: 'Main core fields of excellence'
      },
      accent: 'text-[#B8860B]'
    },
    {
      id: 'stages',
      value: counts.stages + '%',
      label: {
        FR: 'Placement professionnel & stages garantis',
        EN: 'Direct business internship placement'
      },
      accent: 'text-[#B8860B]'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="metrics-analytics-section" 
      className="relative bg-[#F0ECEC] border-b border-[#D4D4D4] py-16 overflow-hidden"
    >
      {/* Dots grid pattern decoration from design manual */}
      <div className="absolute inset-0 dots-pattern pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-[6%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-gray-300">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center justify-center p-6 text-center"
            >
              {/* Stat numerical badge (Special Gothic) */}
              <span className={`font-gothic text-5xl md:text-6xl font-bold ${stat.accent} tracking-wider leading-none mb-3 block`}>
                {stat.value}
              </span>

              {/* Gold line decorator (40px) */}
              <div className="w-10 h-[3px] bg-[#B8860B] rounded-full my-3" />

              {/* Human literal readable description */}
              <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed max-w-[200px] mt-1">
                {stat.label[currentLang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
