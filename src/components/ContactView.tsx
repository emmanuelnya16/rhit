import React, { useState } from 'react';
import { Mail, Phone, MapPin, Inbox, HelpCircle, ChevronRight, ChevronDown, CheckCircle } from 'lucide-react';
import { Language, ContactMessage } from '../types';

interface ContactViewProps {
  currentLang: Language;
}

export default function ContactView({ currentLang }: ContactViewProps) {
  // Local Form state
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'admission', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subjects = [
    { id: 'admission', FR: 'Processus d’Admissions', EN: 'Admissions Guidelines' },
    { id: 'mobility', FR: 'Échanges & Mobilité Internationale', EN: 'International Study Exchanges' },
    { id: 'partnership', FR: 'Relations Entreprises et Partenariats', EN: 'Corporate & Business Covenants' },
    { id: 'general', FR: 'Prendre Rendez-vous / Autre', EN: 'Inquiry / General Questions' }
  ];

  const faqs = [
    {
      q: { FR: 'Quelles sont les conditions d\'admission en Bachelor d\'Ingénierie ?', EN: 'What are the main admissions criteria for Engineering Bachelors?' },
      a: { 
        FR: 'Pour accéder au cycle de Bachelor d\'Ingénierie, le candidat doit être titulaire d\'un Baccalauréat Scientifique (C, D, E, TI) ou d\'un GCE A-Level de série scientifique.', 
        EN: 'Admissions require a valid scientific Secondary Graduation Certificate (Baccalaureate C, D, E, TI or equivalent GCE A-Level in physics/maths).' 
      }
    },
    {
      q: { FR: 'Les formations de RHIT sont-elles dispensées en français ou en anglais ?', EN: 'Are courses taught in English or French?' },
      a: { 
        FR: 'RHIT est un établissement résolument bilingue. L\'Ingénierie est enseignée majoritairement en anglais, le Business & Droit est bilingue, et les Sciences de la Santé possèdent des filières bilingues et françaises.', 
        EN: 'RHIT operates bilingual loops. Engineering represents majority English instructions, Business tracks are bilingual, and Health cycles host French tracks.' 
      }
    },
    {
      q: { FR: 'Comment fonctionne l\'accréditation CPD Certification Service UK ?', EN: 'How does the London CPD Certified Service function?' },
      a: { 
        FR: 'La certification CPD UK atteste que nos programmes académiques intègrent les standards de formation continue reconnus au Royaume-Uni. Elle valide des crédits points utilisables pour la mobilité.', 
        EN: 'UK CPD validates that academic tracking conforms to advanced London continuing professional structures, helping transfer credits scores globally.' 
      }
    },
    {
      q: { FR: 'Y a-t-il des bourses d\'excellence disponibles pour les étudiants ?', EN: 'Are academic excellence scholarships sponsored?' },
      a: { 
        FR: 'Oui, RHIT octroie chaque année des bourses partielles de réduction des frais de scolarité aux meilleurs bacheliers (mention Bien ou Très Bien).', 
        EN: 'Yes! Fully structured partial scholarships reducing tuition fees are awarded to candidates sporting high graduation averages.' 
      }
    },
    {
      q: { FR: 'Comment soumettre mon dossier et sous quel délai aurai-je un retour ?', EN: 'How do I submit folders, and what is response timing?' },
      a: { 
        FR: 'La soumission se fait entièrement en ligne via notre portail de candidature. L\'analyse administrative et pédagogique prend au maximum 48h.', 
        EN: 'Simply compile and upload credentials inside our secure online candidate portal. The regulatory board provides replies within 48h.' 
      }
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(currentLang === 'FR' ? 'Veuillez remplir les champs obligatoires (*) !' : 'Kindly fill in mandatory (*) input fields!');
      return;
    }

    // Append to LocalStorage messages database
    const existing: ContactMessage[] = JSON.parse(localStorage.getItem('rhit_messages') || '[]');
    const newMessage: ContactMessage = {
      id: 'msg-' + Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      submittedAt: new Date().toISOString(),
      status: 'unread'
    };

    localStorage.setItem('rhit_messages', JSON.stringify([...existing, newMessage]));
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: 'admission', message: '' });
  };

  return (
    <div className="bg-[#F8F6F6] min-h-screen pt-28 pb-16">
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%]">
        
        {/* Title center banner */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-gothic text-xs text-[#631120] tracking-widest font-bold uppercase mb-2">RHIT REGISTRY</span>
          <h1 className="font-chelsea text-3xl md:text-[44px] text-gray-900 uppercase">
            {currentLang === 'FR' ? 'Contactez le secrétariat' : 'Institutional Contact Desk'}
          </h1>
          <div className="w-[60px] h-1 bg-[#B8860B] rounded-full my-3" />
          <p className="text-gray-500 text-sm md:text-base max-w-xl">
            {currentLang === 'FR'
              ? 'Besoin d\'assistance pour finaliser une inscription ? Notre service admissions est à votre entière écoute.'
              : 'Our counseling division provides responses to your admissions query.'}
          </p>
        </div>

        {/* 2 columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column Left (Contact Coordinates & Beautiful simulated Map of Douala) */}
          <div className="lg:col-span-5 col-span-1 space-y-8">
            
            {/* Quick coordinates cards */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              
              <h3 className="font-chelsea text-gray-900 text-lg border-b pb-2 uppercase">
                {currentLang === 'FR' ? 'Renseignements Généraux' : 'Coordinates & Secretariat'}
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F7EEEF] text-[#631120] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-gray-800 uppercase font-gothic tracking-wider">Douala Campus</h4>
                    <p className="text-xs text-gray-500 mt-1">Carrefour Bonamoussadi, face clinique de la Paix, Douala, Cameroun.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F7EEEF] text-[#631120] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-gray-800 uppercase font-gothic tracking-wider">Secrétariat Téléphone</h4>
                    <p className="text-xs text-mono text-gray-500 mt-1">+237 600 000 000 / +237 233 444 555</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F7EEEF] text-[#631120] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-gray-800 uppercase font-gothic tracking-wider">Emails Directs</h4>
                    <p className="text-xs text-mono text-gray-500 mt-1">info@rousseauhigherinstitute.org <br />admissions@rousseauhigherinstitute.org</p>
                  </div>
                </div>
              </div>

              {/* Time schedules note */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-[11px] text-gray-500 flex gap-3 items-center">
                <Inbox className="w-5 h-5 text-[#631120] shrink-0" />
                <span>
                  {currentLang === 'FR'
                    ? 'Le secrétariat vous accueille du Lundi au Vendredi de 08:00 à 17:00 sans interruption.'
                    : 'Registrar counter remains accessible Monday through Friday, from 08:00 am to 05:00 pm continuously.'}
                </span>
              </div>

            </div>

            {/* Custom interactive Vector map of Douala location - high fidelity & stable in iframe! */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h4 className="font-bold text-xs uppercase font-gothic tracking-wider text-gray-500">
                {currentLang === 'FR' ? 'CAMPUS PLANS DE LOCALISATION' : 'DOUALA CAMPUS LOCATION MAP'}
              </h4>
              
              {/* Custom SVG stylized map of Bonamoussadi area */}
              <div className="relative h-60 w-full bg-slate-950 rounded-xl overflow-hidden shadow-inner border border-slate-800 flex flex-col justify-between p-4 text-white">
                <div className="absolute inset-0 opacity-20 pointer-events-none dots-pattern bg-white" />
                
                {/* Simulated streets vector map */}
                <svg className="absolute inset-0 w-full h-full text-slate-800 pointer-events-none opacity-40" stroke="currentColor" strokeWidth="2">
                  <line x1="0" y1="50" x2="400" y2="50" />
                  <line x1="0" y1="180" x2="400" y2="180" />
                  <line x1="120" y1="0" x2="120" y2="300" strokeWidth="4" />
                  <line x1="280" y1="0" x2="280" y2="300" />
                  <circle cx="120" cy="110" r="12" fill="none" stroke="#B8860B" strokeWidth="3" />
                </svg>

                {/* Simulated markers */}
                <div className="absolute left-[30%] top-[40%] flex flex-col items-center">
                  <div className="w-6 h-6 bg-[#631120] hover:bg-[#7B0A1F] text-white rounded-full flex items-center justify-center font-chelsea text-xs font-bold shadow-xl border border-white animate-bounce cursor-pointer">
                    R
                  </div>
                  <span className="text-[10px] font-bold font-gothic bg-[#631120] px-2 py-0.5 rounded shadow mt-1">RHIT Douala</span>
                </div>

                <div className="absolute left-[70%] top-[25%] opacity-50">
                  <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">Clinique Paix</span>
                </div>

                <div className="absolute left-[5%] bottom-[5%] bg-slate-900/80 border border-slate-700 p-2.5 rounded text-[10px]">
                  <p className="font-bold font-gothic tracking-wider">CARREFOUR BONAMOUSSADI</p>
                  <p className="text-slate-400">Douala V, Cameroun</p>
                </div>
              </div>
            </div>

          </div>

          {/* Column Right (Contact message Form & FAQ accordions) */}
          <div className="lg:col-span-7 col-span-1 space-y-8">
            
            {/* Form */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-chelsea text-gray-900 text-lg border-b pb-3 uppercase mb-6">
                {currentLang === 'FR' ? 'Envoyez un message' : 'Admissions Inquiry Submission'}
              </h3>

              {isSubmitted ? (
                <div className="bg-[#FDF6E3] border border-[#B8860B]/20 p-6 rounded-2xl text-center space-y-4 animate-fade-in-up">
                  <CheckCircle className="w-12 h-12 text-[#B8860B] mx-auto" />
                  <h4 className="font-chelsea text-lg text-[#631120] uppercase font-bold">
                    {currentLang === 'FR' ? 'Message reçu avec succès !' : 'Message filed successfully!'}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {currentLang === 'FR'
                      ? 'Merci ! Notre équipe de secrétariat analysera votre demande administrative et vous répondra sous un délai de 24h.'
                      : 'Thank you! The academic desk coordinates responses within 24 hours of form filing.'}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-[#631120] text-white text-xs font-bold font-gothic uppercase tracking-wider rounded-full cursor-pointer hover:bg-[#7B0A1F]"
                  >
                    {currentLang === 'FR' ? 'Retourner au formulaire' : 'File another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Votre Nom complet *' : 'Your Complete Name *'}</label>
                      <input 
                        type="text" 
                        required
                        className="w-full text-sm border border-gray-200 rounded-lg p-3 outline-none focus:border-[#631120] focus:ring-1 focus:ring-[#631120]"
                        placeholder="e.g. Marc Owona"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Adresse Email *' : 'Your Email *'}</label>
                      <input 
                        type="email" 
                        required
                        className="w-full text-sm border border-gray-200 rounded-lg p-3 outline-none focus:border-[#631120] focus:ring-1 focus:ring-[#631120]"
                        placeholder="e.g. marc@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Numéro Téléphone' : 'Your Phone Number'}</label>
                      <input 
                        type="tel" 
                        className="w-full text-sm border border-gray-200 rounded-lg p-3 outline-none focus:border-[#631120] focus:ring-1 focus:ring-[#631120]"
                        placeholder="e.g. +237 600 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Objet de votre message *' : 'Inquiry Category *'}</label>
                      <select 
                        className="w-full text-sm border border-gray-200 rounded-lg p-3 bg-white outline-none focus:border-[#631120] cursor-pointer"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        {subjects.map((s) => (
                          <option key={s.id} value={s.id}>{s[currentLang]}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left font-inter">
                    <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Votre Message d’enquête *' : 'Explain Your Request *'}</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full text-sm border border-gray-200 rounded-lg p-3 outline-none focus:border-[#631120] focus:ring-1"
                      placeholder={currentLang === 'FR' ? 'Bonjour, j’aimerais poser ma candidature au...' : 'Hello, I would like to enquire about...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#631120] hover:bg-[#7B0A1F] text-white py-3.5 rounded-lg text-center font-bold font-gothic tracking-wider uppercase cursor-pointer transition shadow"
                  >
                    {currentLang === 'FR' ? 'Soumettre ma demande d’informations' : 'Send inquiry request'}
                  </button>
                </form>
              )}

            </div>

            {/* FAQs accordions */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-chelsea text-gray-900 text-lg border-b pb-3 uppercase mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#B8860B]" />
                <span>{currentLang === 'FR' ? 'Foire Aux Questions (FAQ)' : 'Frequently Asked Questions'}</span>
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 bg-gray-50/50 hover:bg-[#F7EEEF]/30 text-left flex justify-between items-center transition cursor-pointer"
                      >
                        <span className="font-bold text-xs md:text-sm text-gray-800 leading-snug">
                          {faq.q[currentLang]}
                        </span>
                        {isOpen ? <ChevronDown className="w-4 h-4 text-gray-400 rotate-180" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                      </button>
                      
                      {isOpen && (
                        <div className="p-4 bg-white border-t border-gray-100 text-xs text-gray-500 leading-relaxed font-light animate-fade-in-up">
                          <p>{faq.a[currentLang]}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
