import React, { useState } from 'react';
import { ALL_PROGRAMS } from '../data/programs';
import { Check, ClipboardList, Briefcase, FileText, CheckCircle2, CloudUpload, ArrowRight } from 'lucide-react';
import { Language, Candidature } from '../types';

interface CandidatureWizardViewProps {
  currentLang: Language;
  initialSelectedProgramId?: string;
  onNavigate: (view: string) => void;
}

export default function CandidatureWizardView({
  currentLang,
  initialSelectedProgramId,
  onNavigate
}: CandidatureWizardViewProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    nationality: '',
    selectedProgramId: initialSelectedProgramId || ALL_PROGRAMS[0].id,
    educationBackground: '',
    cvFile: null as File | null,
    cvFileName: '',
    gradesFile: null as File | null,
    gradesFileName: '',
    motFile: null as File | null,
    motFileName: ''
  });

  const [isCompleted, setIsCompleted] = useState(false);

  // File drag & hover state
  const [dragActive, setDragActive] = useState<{ [key: string]: boolean }>({});

  const handleDrag = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive((prev) => ({ ...prev, [id]: true }));
    } else if (e.type === 'dragleave') {
      setDragActive((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleDrop = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive((prev) => ({ ...prev, [id]: false }));
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData((prev) => ({
        ...prev,
        [`${id}File`]: file,
        [`${id}FileName`]: file.name
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        [`${id}File`]: file,
        [`${id}FileName`]: file.name
      }));
    }
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        alert(currentLang === 'FR' ? 'Veuillez remplir les informations obligatoires !' : 'Please provide mandatory info fields!');
        return;
      }
    } else if (step === 2) {
      if (!formData.educationBackground) {
        alert(currentLang === 'FR' ? 'Veuillez décrire brièvement votre parcours d’études !' : 'Please describe your past academic background!');
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.cvFileName || !formData.gradesFileName) {
      alert(currentLang === 'FR' 
        ? 'Le Curriculum Vitae et le Relevé de Notes obligatoires (*) doivent être téléchargés !' 
        : 'Your Curriculum Vitae and Grades transcript are mandatory (*) to submittals!'
      );
      return;
    }

    // Capture and save candidature to LocalStorage
    const existing: Candidature[] = JSON.parse(localStorage.getItem('rhit_candidatures') || '[]');
    const newCandidature: Candidature = {
      id: 'cand-' + Date.now(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      birthDate: formData.birthDate,
      nationality: formData.nationality,
      selectedProgramId: formData.selectedProgramId,
      educationBackground: formData.educationBackground,
      cvFileName: formData.cvFileName,
      notesFileName: formData.gradesFileName,
      motivationFileName: formData.motFileName || undefined,
      status: 'new',
      submittedAt: new Date().toISOString()
    };

    localStorage.setItem('rhit_candidatures', JSON.stringify([...existing, newCandidature]));
    setIsCompleted(true);
  };

  const stepsDetails = [
    { nr: 1, label: { FR: 'Profil Personnel', EN: 'Personal Details' }, icon: ClipboardList },
    { nr: 2, label: { FR: 'Projet Académique', EN: 'Study Program' }, icon: Briefcase },
    { nr: 3, label: { FR: 'Pièces Jointes', EN: 'Upload Folder' }, icon: FileText }
  ];

  if (isCompleted) {
    return (
      <div className="bg-[#F8F6F6] min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="max-w-[540px] w-full mx-6 bg-white border border-gray-100 rounded-3xl p-8 md:p-12 text-center shadow-lg space-y-6 animate-fade-in-up">
          <CheckCircle2 className="w-16 h-16 text-[#B8860B] mx-auto animate-bounce" />
          
          <h2 className="font-chelsea text-2xl text-[#631120] uppercase font-bold">
            {currentLang === 'FR' ? 'Dossier transmis avec succès !' : 'Application filed successfully!'}
          </h2>
          
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
            {currentLang === 'FR'
              ? `Félicitations M/Mme ${formData.firstName} ${formData.lastName} ! Votre candidature pour le programme choisi est officiellement enregistrée. Notre conseil pédagogique analysera vos pièces jointes sous un délai garanti de 48h.`
              : `Congratulations ${formData.firstName} ${formData.lastName}! Your digital dossier was uploaded without errors. The admissions board tracks and replies within 48h.`}
          </p>

          <div className="bg-gray-50 p-4 border border-dashed rounded-xl text-left text-xs text-gray-600 font-mono space-y-1.5">
            <p><strong>ID TRANSACTION:</strong> cand-{(Date.now() / 1000).toFixed(0)}</p>
            <p><strong>PROGRAMME:</strong> {ALL_PROGRAMS.find(p => p.id === formData.selectedProgramId)?.title[currentLang]}</p>
            <p><strong>STATUS:</strong> NEW / SOUMIS</p>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-[#631120] hover:bg-[#7B0A1F] text-white py-3.5 rounded-full font-gothic font-bold text-xs uppercase tracking-widest cursor-pointer shadow-md"
          >
            {currentLang === 'FR' ? 'Retourner à l’accueil' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F6F6] min-h-screen pt-28 pb-16">
      <div className="max-w-[760px] mx-auto px-6">
        
        {/* Progress wizard map */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-8">
          
          {/* Step circles progress row */}
          <div className="flex items-center justify-between relative px-4">
            {/* Background line slider */}
            <div className="absolute left-[30px] right-[30px] top-[24px] h-[3px] bg-gray-100 -z-10" />
            <div 
              className="absolute left-[30px] top-[24px] h-[3px] bg-[#631120] transition-all duration-300 -z-10" 
              style={{ width: `${((step - 1) / (stepsDetails.length - 1)) * 100}%` }}
            />

            {stepsDetails.map((s, index) => {
              const StateIcon = s.icon;
              const isPast = step > s.nr;
              const isCurrent = step === s.nr;
              return (
                <div key={s.nr} className="flex flex-col items-center space-y-2">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-md transition duration-300 ${
                      isPast 
                        ? 'bg-[#B8860B] text-black' 
                        : isCurrent 
                        ? 'bg-[#631120] text-white ring-4 ring-[#631120]/10' 
                        : 'bg-white border text-gray-400 border-gray-200'
                    }`}
                  >
                    {isPast ? <Check className="w-5 h-5 text-black" /> : <span>{s.nr}</span>}
                  </div>
                  <span className={`text-[10px] md:text-xs font-gothic font-bold uppercase ${
                    isCurrent ? 'text-[#631120]' : 'text-gray-400'
                  }`}>
                    {s.label[currentLang]}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Wizard Main content box */}
        <div className="bg-white p-6 md:p-10 rounded-2xl border border-[#D4D4D4] shadow-sm">
          
          <form onSubmit={handleSubmit} className="space-y-6 text-xs md:text-sm">
            
            {/* STEP 1: Personal profile */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in-up">
                <h3 className="font-chelsea text-gray-950 text-xl border-b pb-2 uppercase text-left">
                  {currentLang === 'FR' ? '1. Identité et Coordonnées' : '1. Profile and Coordinates'}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Prénom *' : 'First Name *'}</label>
                    <input 
                      type="text" 
                      required
                      className="w-full text-sm border p-3 rounded-lg outline-none focus:border-[#631120]"
                      placeholder="e.g. Jean"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Nom de famille *' : 'Last Name *'}</label>
                    <input 
                      type="text" 
                      required
                      className="w-full text-sm border p-3 rounded-lg outline-none focus:border-[#631120]"
                      placeholder="e.g. Nguemo"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-inter">
                  <div className="space-y-1.5 text-left">
                    <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Adresse Email *' : 'Email Address *'}</label>
                    <input 
                      type="email" 
                      required
                      className="w-full text-sm border p-3 rounded-lg outline-none focus:border-[#631120]"
                      placeholder="e.g. jean@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Numéro Téléphone *' : 'Phone Number *'}</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full text-sm border p-3 rounded-lg outline-none focus:border-[#631120]"
                      placeholder="e.g. +237 600 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Date de Naissance' : 'Date of Birth'}</label>
                    <input 
                      type="date" 
                      className="w-full text-sm border p-3 rounded-lg outline-none focus:border-[#631120]"
                      value={formData.birthDate}
                      onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Nationalité' : 'Nationality'}</label>
                    <input 
                      type="text" 
                      className="w-full text-sm border p-3 rounded-lg outline-none focus:border-[#631120]"
                      placeholder="e.g. Camerounaise"
                      value={formData.nationality}
                      onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Academic Program selection */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in-up">
                <h3 className="font-chelsea text-gray-950 text-xl border-b pb-2 uppercase text-left">
                  {currentLang === 'FR' ? '2. Projet Académique RHIT' : '2. Academic Choice at RHIT'}
                </h3>

                <div className="space-y-1.5 text-left">
                  <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Filière d’études choisie *' : 'Intended degree program in enrollment *'}</label>
                  <select 
                    className="w-full text-sm border p-3 rounded-lg outline-none bg-white focus:border-[#631120] cursor-pointer"
                    value={formData.selectedProgramId}
                    onChange={(e) => setFormData({ ...formData, selectedProgramId: e.target.value })}
                  >
                    {ALL_PROGRAMS.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.title[currentLang]} ({prog.domain === 'engineering' ? 'Engine' : prog.domain === 'business' ? 'Biz' : 'Health'})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="font-bold text-gray-700">
                    {currentLang === 'FR' 
                      ? 'Détails par rapport à votre dernier diplôme obtenu (Série, Année, Mention) *' 
                      : 'Past educational certificates (High School results, GPA grades status) *'}
                  </label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full text-sm border p-3 rounded-lg outline-none focus:border-[#631120]"
                    placeholder={currentLang === 'FR' ? 'e.g. Baccalauréat C en 2025, Mention Assez-Bien.' : 'e.g. Scientific GCE Advanced levels with 4 criteria passes, year 2025.'}
                    value={formData.educationBackground}
                    onChange={(e) => setFormData({ ...formData, educationBackground: e.target.value })}
                  />
                </div>
              </div>
            )}

            {/* STEP 3: Upload files (Drag-and-drop & Manual select) (Design manual 10) */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in-up text-left">
                <h3 className="font-chelsea text-gray-950 text-xl border-b pb-2 uppercase text-left">
                  {currentLang === 'FR' ? '3. Téléchargement des Documents obligatoires' : '3. Credentials folders uploading'}
                </h3>

                {/* CV Area */}
                <div className="space-y-2">
                  <label className="font-bold text-gray-700 block">
                    Curriculum Vitae (CV) * <span className="text-gray-400 font-light">(PDF maximum 5MB)</span>
                  </label>
                  <div 
                    onDragEnter={(e) => handleDrag(e, 'cv')}
                    onDragOver={(e) => handleDrag(e, 'cv')}
                    onDragLeave={(e) => handleDrag(e, 'cv')}
                    onDrop={(e) => handleDrop(e, 'cv')}
                    className={`border-2 border-dashed rounded-xl p-6 text-center transition flex flex-col items-center justify-center space-y-2 cursor-pointer ${
                      dragActive['cv'] ? 'border-[#631120] bg-[#F7EEEF]' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <CloudUpload className="w-8 h-8 text-gray-400" />
                    <p className="text-xs">
                      {formData.cvFileName ? (
                        <span className="text-green-600 font-bold">✓ {formData.cvFileName}</span>
                      ) : (
                        <span>{currentLang === 'FR' ? 'Faites glisser votre CV ici ou cliquez pour parcourir' : 'Drag & drop CV folder here, or select manually'}</span>
                      )}
                    </p>
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      className="hidden" 
                      id="cv-file-picker" 
                      onChange={(e) => handleFileChange(e, 'cv')}
                    />
                    <button 
                      type="button" 
                      onClick={() => document.getElementById('cv-file-picker')?.click()}
                      className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-[11px] font-bold font-gothic uppercase tracking-wide cursor-pointer"
                    >
                      {currentLang === 'FR' ? 'Sélectionner' : 'Browse File'}
                    </button>
                  </div>
                </div>

                {/* Transcripts Area */}
                <div className="space-y-2">
                  <label className="font-bold text-gray-700 block">
                    {currentLang === 'FR' ? 'Relevés de Notes récents *' : 'Your Grades Transcripts *'}{' '}
                    <span className="text-gray-400 font-light">(PDF/Scans maximum 5MB)</span>
                  </label>
                  <div 
                    onDragEnter={(e) => handleDrag(e, 'grades')}
                    onDragOver={(e) => handleDrag(e, 'grades')}
                    onDragLeave={(e) => handleDrag(e, 'grades')}
                    onDrop={(e) => handleDrop(e, 'grades')}
                    className={`border-2 border-dashed rounded-xl p-6 text-center transition flex flex-col items-center justify-center space-y-2 cursor-pointer ${
                      dragActive['grades'] ? 'border-[#631120] bg-[#F7EEEF]' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <CloudUpload className="w-8 h-8 text-gray-400" />
                    <p className="text-xs">
                      {formData.gradesFileName ? (
                        <span className="text-green-600 font-bold">✓ {formData.gradesFileName}</span>
                      ) : (
                        <span>{currentLang === 'FR' ? 'Glissez votre relevé de notes ou cliquez' : 'Drag & drop Grades transcript, or select manually'}</span>
                      )}
                    </p>
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      className="hidden" 
                      id="grades-file-picker" 
                      onChange={(e) => handleFileChange(e, 'grades')}
                    />
                    <button 
                      type="button" 
                      onClick={() => document.getElementById('grades-file-picker')?.click()}
                      className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-[11px] font-bold font-gothic uppercase tracking-wide cursor-pointer"
                    >
                      {currentLang === 'FR' ? 'Sélectionner' : 'Browse File'}
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* Navigation keys under wizard form */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-2.5 border border-gray-200 hover:bg-gray-50 rounded-xl font-bold font-gothic tracking-wider uppercase text-xs cursor-pointer"
                >
                  {currentLang === 'FR' ? 'Précédent' : 'Previous step'}
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2.5 bg-[#631120] hover:bg-[#7B0A1F] text-white rounded-xl font-bold font-gothic tracking-wider uppercase text-xs cursor-pointer flex items-center gap-1.5"
                >
                  <span>{currentLang === 'FR' ? 'Continuer' : 'Next milestone'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#B8860B] hover:bg-slate-900 hover:text-white rounded-xl font-bold font-gothic tracking-wider uppercase text-xs cursor-pointer shadow-lg"
                >
                  {currentLang === 'FR' ? 'Soumettre ma Candidature officielle' : 'Transmit Final Registration'}
                </button>
              )}
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}
