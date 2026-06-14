import React from 'react';
import { Award, Compass, Heart, Users, Activity, Flame } from 'lucide-react';
import { Language } from '../types';

interface StudentLifeViewProps {
  currentLang: Language;
}

export default function StudentLifeView({ currentLang }: StudentLifeViewProps) {
  
  const studentPillars = [
    {
      id: 'clubs',
      icon: Users,
      title: { FR: 'Clubs & Associations Actives', EN: 'Active Student Unions & Clubs' },
      desc: {
        FR: 'Club Robotique, Club d\'Éloquence Oratoire, Association Sportive Football et Basketball, Groupe Théâtre et Musique traditionnelle.',
        EN: 'Robotics Club, Public Rhetoric forum, Football & basketball leagues, creative theater and local acoustic instrumental groups.'
      },
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 'hackathons',
      icon: Flame,
      title: { FR: 'Compétitions & Hackathons', EN: 'Engineering Design Hackathons' },
      desc: {
        FR: 'Des défis nationaux de conception d\'applications informatiques innovantes ou de dimensionnement de structures d\'ingénieurs durables.',
        EN: 'National code challenges and hardware structural modeling cups designed to pit concepts against real operational realities.'
      },
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 'seminars',
      icon: Award,
      title: { FR: 'Séminaires & Masterclasses', EN: 'Masterclasses & Elite Colloquiums' },
      desc: {
        FR: 'Des interventions régulières de hauts cadres, de chefs de projets nationaux et d\'experts internationaux pour décoder le business.',
        EN: 'Interactive masterclasses directed by global managers, software creators, and financial leaders to detail modern tactics.'
      },
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 'tours',
      icon: Compass,
      title: { FR: 'Study Tours & Immersions', EN: 'Strategic Study Tours' },
      desc: {
        FR: 'Voyages d\'études et visites de terrain (Port de Kribi, Barrages, Centrales de la Dibamba) pour comprendre en situation réelle.',
        EN: 'Visitations to deep ports, power networks, and medical centers to trace the impact of structural formulas in real scale.'
      },
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=400'
    }
  ];

  // Gallery images list for masonry layout (design spec 6.4)
  const galleryImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400'
  ];

  return (
    <div className="bg-[#F8F6F6] min-h-screen pt-28 pb-16">
      
      {/* Page Title Hero Banner */}
      <div className="relative bg-[#3D0A12] text-white py-16 text-center overflow-hidden mb-12">
        {/* Crisp background image with optimal opacity handling */}
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200"
          alt="Student life background"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05] z-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#631120]/75 to-[#3D0A12]/75 pointer-events-none" />
        <div className="absolute inset-0 z-10 dots-pattern opacity-10 pointer-events-none" />
        <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="font-gothic text-xs text-[#B8860B] tracking-widest font-bold uppercase mb-2">CAMPUS EXPERIENCES</span>
          <h1 className="font-chelsea text-3xl md:text-5xl uppercase tracking-wider mb-4 leading-none">
            {currentLang === 'FR' ? 'Vie Étudiante & Pédagogie active' : 'Fulfilling Campus Environment'}
          </h1>
          <div className="w-[60px] h-1 bg-[#B8860B] rounded-full my-2" />
          <p className="text-white/80 text-sm md:text-base max-w-2xl mt-1 leading-relaxed">
            {currentLang === 'FR'
              ? 'Le campus de RHIT constitue un cadre de développement intellectuel, de camaraderie constructive, et d\'innovations collectives.'
              : 'Our Douala campus coordinates high intellectual growth alongside sports, tech, and cultural communities to form well-rounded champions.'}
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%] space-y-16">
        
        {/* 2x2 Pillars with detailed visuals */}
        <div>
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="font-chelsea text-3xl text-gray-900 uppercase">
              {currentLang === 'FR' ? 'Les 4 Piliers de l’Épanouissement' : 'The 4 Milestones of Real Growth'}
            </h2>
            <div className="w-[60px] h-1 bg-[#B8860B] rounded-full my-3" />
            <p className="text-gray-500 text-sm max-w-xl">
              {currentLang === 'FR'
                ? 'Une animation éducative coordonnée par les élèves et par la direction académique.'
                : 'Fostering communities modeled around continuous improvement and self-governance.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentPillars.map((pil) => {
              const PilIcon = pil.icon;
              return (
                <div 
                  key={pil.id} 
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition duration-300"
                >
                  <div className="md:w-1/3 h-48 md:h-auto bg-gray-100">
                    <img 
                      src={pil.image} 
                      alt={pil.title[currentLang]} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2.5 text-[#631120]">
                        <PilIcon className="w-5 h-5 text-[#B8860B]" />
                        <h3 className="font-chelsea text-base md:text-lg">
                          {pil.title[currentLang]}
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                        {pil.desc[currentLang]}
                      </p>
                    </div>

                    <span className="text-[10px] text-gray-400 font-gothic tracking-wider font-bold mt-4 uppercase">
                      • {currentLang === 'FR' ? 'Accompagnement de RHIT' : 'Sponsered by RHIT Admissions'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Entrepreneurship section - Split text + picture on gray */}
        <div className="bg-[#F0ECEC] rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-gray-200">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-gothic text-xs text-[#631120] tracking-widest font-bold uppercase block">
              {currentLang === 'FR' ? 'HUB D\'INNOVATION ET PROJETS' : 'INNOVATION INCUBATOR'}
            </span>
            <h3 className="font-chelsea text-2xl md:text-3xl text-gray-900 uppercase">
              {currentLang === 'FR' ? "L'Incubateur Etudiant de RHIT" : 'RHIT Student Ideas Incubator'}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
              {currentLang === 'FR'
                ? 'Donnez vie à vos projets ! Nous accompagnons les esprits audacieux dans le prototypage d\'applications, la rédaction de plans comptables de startups et l\'accès aux réseaux d\'investisseurs privés et d\'entreprises partenaires de Douala.'
                : 'Turn theory into enterprise. Our incubation division gives creators access to specialized workshops, hardware prototypings, and business angel groups within CEMAC boundaries.'}
            </p>
            <div className="flex gap-4">
              <div className="bg-white/80 p-4 rounded-xl border border-gray-100 flex-1">
                <span className="font-gothic text-[#B8860B] font-bold text-lg block">Agile</span>
                <span className="text-xs text-gray-500">{currentLang === 'FR' ? 'Méthodes de gestion moderne' : 'Agile operational tools'}</span>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-gray-100 flex-1">
                <span className="font-gothic text-[#631120] font-bold text-lg block">Mentor</span>
                <span className="text-xs text-gray-500">{currentLang === 'FR' ? 'Ingénieurs & Directeurs chevronnés' : 'Corporate director mentorships'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-72 rounded-2xl overflow-hidden bg-white shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
              alt="Incubator representation" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Gallery mosaics */}
        <div>
          <div className="text-center mb-8">
            <h3 className="font-chelsea text-xl text-gray-800 uppercase">
              {currentLang === 'FR' ? 'Galerie Photos du Campus' : 'Douala Campus Mosaic Gallery'}
            </h3>
            <p className="text-xs text-gray-400 mt-1 uppercase font-gothic tracking-wider">
              {currentLang === 'FR' ? 'Instantanés authentiques de nos activités' : 'Raw captures from active study cycles'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative h-28 hover:scale-105 duration-300 rounded-lg overflow-hidden border cursor-pointer border-gray-200">
                <img 
                  src={img} 
                  alt="Campus moments" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
