import React, { useState } from 'react';
import { NEWS } from '../data/news';
import { Calendar, ArrowLeft, ArrowRight, Share2, Tag } from 'lucide-react';
import { Language, NewsArticle } from '../types';

interface NewsArticlesViewProps {
  currentLang: Language;
}

export default function NewsArticlesView({ currentLang }: NewsArticlesViewProps) {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const handleShare = (articleTitle: string) => {
    alert(currentLang === 'FR' 
      ? `Lien de partage copié pour : ${articleTitle}` 
      : `Sharing link copied for : ${articleTitle}`
    );
  };

  if (selectedArticle) {
    // Rend full article details
    return (
      <div className="bg-[#F8F6F6] min-h-screen pt-28 pb-16 animate-fade-in-up">
        <div className="max-w-[800px] mx-auto px-6">
          
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-2 text-xs font-bold font-gothic tracking-wider text-[#631120] hover:text-[#7B0A1F] uppercase mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentLang === 'FR' ? 'Retour aux actualités' : 'Back to News Desk'}</span>
          </button>

          <article className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden p-6 md:p-10 space-y-6">
            
            {/* Header info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-gothic tracking-wider text-gray-400">
              <span className="bg-[#F7EEEF] text-[#631120] px-3 py-1 rounded font-bold uppercase">
                {selectedArticle.categoryLabel[currentLang]}
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <Calendar className="w-4 h-4 text-[#B8860B]" />
                {selectedArticle.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-chelsea text-2xl md:text-4xl text-[#1C1C1C] leading-tight uppercase">
              {selectedArticle.title[currentLang]}
            </h1>

            {/* Summary */}
            <p className="text-gray-500 font-medium italic border-l-4 border-[#B8860B] pl-4 py-1 text-sm md:text-base leading-relaxed">
              {selectedArticle.summary[currentLang]}
            </p>

            {/* Image */}
            <div className="h-96 w-full rounded-2xl overflow-hidden bg-gray-50 border">
              <img 
                src={selectedArticle.imageUrl} 
                alt={selectedArticle.title[currentLang]} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content paragraph */}
            <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-4 pt-4">
              <p>{selectedArticle.content[currentLang]}</p>
              <p>
                {currentLang === 'FR'
                  ? 'Pour en savoir plus sur l\'intégration de ces exercices pratiques ou planifier une future visite d\'études, vous pouvez vous rapprocher du secrétariat général de RHIT à Douala.'
                  : 'To inquire further concerning how these simulation labs assist students or block a study session, kindly schedule a consulting call with the administrative chair.'}
              </p>
            </div>

            {/* Share action */}
            <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-gothic tracking-wider">
                • ROUSSEAU HIGHER INSTITUTE OF TECHNOLOGY
              </span>
              <button
                onClick={() => handleShare(selectedArticle.title[currentLang])}
                className="flex items-center gap-2 text-xs font-bold font-gothic text-gray-500 hover:text-[#631120] uppercase transition cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>{currentLang === 'FR' ? 'Partager l’article' : 'Share article'}</span>
              </button>
            </div>

          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F6F6] min-h-screen pt-28 pb-16">
      
      {/* Title */}
      <div className="relative bg-[#3D0A12] text-white py-14 text-center overflow-hidden mb-12">
        {/* Crisp background image with optimal opacity handling */}
        <img 
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200"
          alt="News articles background"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05] z-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#631120]/80 to-[#3D0A12]/80 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 bottom-0 z-10 dots-pattern opacity-10 pointer-events-none" />
        <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="font-gothic text-xs text-[#B8860B] tracking-widest font-bold uppercase mb-2">CAMPUS CHRONICLES</span>
          <h1 className="font-chelsea text-3xl md:text-5xl uppercase tracking-wider mb-4 leading-none">
            {currentLang === 'FR' ? 'Dernières Nouvelles & Activités' : 'RHIT Newsroom & Events'}
          </h1>
          <div className="w-[60px] h-1 bg-[#B8860B] rounded-full my-2" />
          <p className="text-white/80 text-sm md:text-base max-w-2xl mt-1">
            {currentLang === 'FR'
              ? 'Découvrez les Study Tours nationaux, nos masterclasses exclusives et l\'actualité de l\'insertion professionnelle de RHIT.'
              : 'Keep abreast of upcoming masterclasses, professional site visits, and general institutional achievements.'}
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%]">
        
        {/* News Grid Column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((article) => (
            <div 
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white rounded-[20px] shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between cursor-pointer transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              
              <div className="relative h-48 overflow-hidden bg-gray-50 border-b">
                <img 
                  src={article.imageUrl} 
                  alt={article.title[currentLang]} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#631120] text-white text-[10px] font-gothic tracking-widest font-bold uppercase px-3 py-1 rounded">
                    {article.categoryLabel[currentLang]}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-6">
                  <span className="text-[11px] text-[#B8860B] font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  
                  <h3 className="font-chelsea text-lg text-gray-900 group-hover:text-[#631120] transition-colors leading-snug font-bold">
                    {article.title[currentLang]}
                  </h3>
                  
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {article.summary[currentLang]}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-bold font-gothic text-[#631120] uppercase border-t pt-4">
                  <span>{currentLang === 'FR' ? 'Lire l’article' : 'Read Article'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
