import React, { useState, useEffect } from 'react';
import { ALL_PROGRAMS } from '../data/programs';
import { ShieldCheck, Users, Briefcase, MessagesSquare, BarChart, Plus, Trash2, Edit3, Settings, ShieldAlert, FileText, Download } from 'lucide-react';
import { Language, Candidature, ContactMessage, Program } from '../types';

interface AdminDashboardViewProps {
  currentLang: Language;
}

export default function AdminDashboardView({ currentLang }: AdminDashboardViewProps) {
  // Authentication State
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Active sub-tab state
  const [activeTab, setActiveTab] = useState<'submissions' | 'programs' | 'messages' | 'metrics'>('submissions');
  
  // Data management states loaded from LocalStorage
  const [candidatures, setCandidatures] = useState<Candidature[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [programsList, setProgramsList] = useState<Program[]>(ALL_PROGRAMS);

  // Program form states
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [newProgName, setNewProgName] = useState('');
  const [newProgDomain, setNewProgDomain] = useState<'engineering' | 'business' | 'health'>('engineering');
  const [newProgLevel, setNewProgLevel] = useState<'preparatory' | 'bachelor' | 'master'>('bachelor');
  const [newProgDuration, setNewProgDuration] = useState('3 Years');
  const [newProgDesc, setNewProgDesc] = useState('');

  // Metrics configurations edited online
  const [statPrograms, setStatPrograms] = useState('17');
  const [statPartners, setStatPartners] = useState('8');
  const [statPlacement, setStatPlacement] = useState('100%');

  useEffect(() => {
    // Load submitted candidates
    const storedCand = JSON.parse(localStorage.getItem('rhit_candidatures') || '[]');
    setCandidatures(storedCand);

    // Load contact messages
    const storedMsg = JSON.parse(localStorage.getItem('rhit_messages') || '[]');
    setContacts(storedMsg);

    // Load any administrative dynamic configs
    const storedPrograms = JSON.parse(localStorage.getItem('rhit_programs_custom') || 'null');
    if (storedPrograms) {
      setProgramsList(storedPrograms);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === 'rhit_admin' || adminPassword === 'admin') {
      setIsAdminAuth(true);
      setAuthError('');
    } else {
      setAuthError(currentLang === 'FR' ? 'Mot de passe administrateur incorrect ! (Astuce: Entrez "admin")' : 'Invalid admin passphrase! (Tip: Enter "admin")');
    }
  };

  const handleUpdateStatus = (id: string, newStatus: 'new' | 'reviewing' | 'accepted' | 'rejected') => {
    const updated = candidatures.map((c) => {
      if (c.id === id) return { ...c, status: newStatus };
      return c;
    });
    setCandidatures(updated);
    localStorage.setItem('rhit_candidatures', JSON.stringify(updated));
    alert(currentLang === 'FR' ? 'Statut du dossier mis à jour !' : 'Application dossier status refreshed!');
  };

  const handleDeleteCandidature = (id: string) => {
    if (confirm(currentLang === 'FR' ? 'Supprimer définitivement ce dossier ?' : 'Archive and drop this folder?')) {
      const filtered = candidatures.filter((c) => c.id !== id);
      setCandidatures(filtered);
      localStorage.setItem('rhit_candidatures', JSON.stringify(filtered));
    }
  };

  const handleToggleMessageState = (id: string) => {
    const updated = contacts.map((c) => {
      if (c.id === id) return { ...c, status: c.status === 'read' ? 'unread' : 'read' as const };
      return c;
    });
    setContacts(updated);
    localStorage.setItem('rhit_messages', JSON.stringify(updated));
  };

  const createOrUpdateProgram = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProgName || !newProgDesc) {
      alert(currentLang === 'FR' ? 'Tous les champs obligatoires sont requis !' : 'All standard values are required!');
      return;
    }

    let updatedList: Program[] = [];

    if (editingProgram) {
      updatedList = programsList.map((p) => {
        if (p.id === editingProgram.id) {
          return {
            ...p,
            title: { FR: newProgName, EN: newProgName },
            domain: newProgDomain,
            level: newProgLevel,
            duration: { FR: newProgDuration, EN: newProgDuration },
            shortDescription: { FR: newProgDesc, EN: newProgDesc }
          };
        }
        return p;
      });
      alert(currentLang === 'FR' ? 'Filière modifiée !' : 'Track updated!');
    } else {
      const newP: Program = {
        id: 'p-' + Date.now(),
        slug: 'custom-' + newProgName.toLowerCase().replace(/ /g, '-'),
        title: { FR: newProgName, EN: newProgName },
        domain: newProgDomain,
        level: newProgLevel,
        duration: { FR: newProgDuration, EN: newProgDuration },
        language: { FR: 'Bilingue', EN: 'Bilingual' },
        entryLevel: { FR: 'Baccalauréat', EN: 'GCE Advanced Levels' },
        shortDescription: { FR: newProgDesc, EN: newProgDesc },
        fullDescription: { FR: newProgDesc, EN: newProgDesc },
        careerOpportunities: [],
        curriculum: [],
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=300'
      };
      updatedList = [newP, ...programsList];
      alert(currentLang === 'FR' ? 'Nouvelle Filière ajoutée !' : 'New curriculum engineered!');
    }

    setProgramsList(updatedList);
    localStorage.setItem('rhit_programs_custom', JSON.stringify(updatedList));

    // Reset Form
    setNewProgName('');
    setNewProgDesc('');
    setEditingProgram(null);
  };

  const deleteProgram = (id: string) => {
    if (confirm(currentLang === 'FR' ? 'Supprimer ce cursus académique ?' : 'Drop curricula?')) {
      const filtered = programsList.filter((p) => p.id !== id);
      setProgramsList(filtered);
      localStorage.setItem('rhit_programs_custom', JSON.stringify(filtered));
    }
  };

  const handleExportCSV = () => {
    // Generate CSV mockup download
    const headers = 'ID,Nom,Prenom,Email,Filière ID,Statut\n';
    const rows = candidatures.map(c => `${c.id},${c.lastName},${c.firstName},${c.email},${c.selectedProgramId},${c.status}`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `rhit_admissions_${Date.now()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // 1. Lock screen Login form
  if (!isAdminAuth) {
    return (
      <div className="bg-[#631120] min-h-[90vh] flex items-center justify-center pt-24 px-4">
        <div className="absolute inset-x-0 top-0 bottom-0 dots-pattern opacity-10 pointer-events-none" />
        <div className="bg-white border rounded-3xl p-8 max-w-sm w-full shadow-2xl space-y-6 text-center z-10">
          <ShieldAlert className="w-12 h-12 text-[#B8860B] mx-auto animate-pulse" />
          <div>
            <h2 className="font-chelsea text-xl text-[#631120] uppercase font-bold">Portail Administrateur</h2>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              {currentLang === 'FR' 
                ? 'Accès sécurisé réservé au personnel pédagogique de Rousseau Higher Institute of Technology.' 
                : 'Authorized administrative credential lock verification.'}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5 text-left text-xs">
              <label className="font-bold text-gray-700">{currentLang === 'FR' ? 'Clé Secrète / Mot de passe' : 'Admin Passphrase'}</label>
              <input 
                type="password" 
                required
                className="w-full border p-3 rounded-lg text-sm outline-none focus:border-[#631120]"
                placeholder={currentLang === 'FR' ? 'Astuce: admin' : 'Tip: enter "admin"'}
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
            </div>
            {authError && <p className="text-xs text-red-600 font-bold">{authError}</p>}
            <button
              type="submit"
              className="w-full bg-[#631120] hover:bg-[#7B0A1F] text-white py-3 rounded-lg text-xs font-bold font-gothic tracking-wider uppercase cursor-pointer transition shadow"
            >
              Déverrouiller le Tableau
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F6F6] min-h-screen pt-28 pb-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[6%]">
        
        {/* Dashboard Header Panel */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-8 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#F7EEEF] text-[#631120] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#B8860B]" />
            </div>
            <div>
              <h1 className="font-chelsea text-xl text-[#631120] uppercase font-bold leading-none">RHIT Control Center</h1>
              <p className="text-xs text-gray-400 font-gothic tracking-wider mt-1">SUPER AUTONOMOUS ADMINISTRATION BACK-OFFICE</p>
            </div>
          </div>

          {/* Quick Metrics tab triggers */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'submissions', label: { FR: 'Candidatures Reçues', EN: 'Submission Folders' }, icon: Users, qty: candidatures.length },
              { id: 'programs', label: { FR: 'Filières Académiques', EN: 'Degree Tracks' }, icon: Briefcase, qty: programsList.length },
              { id: 'messages', label: { FR: 'Doléance / Contacts', EN: 'Contact Feed' }, icon: MessagesSquare, qty: contacts.length },
              { id: 'metrics', label: { FR: 'Métriques d\'Accueil', EN: 'Home Analytics' }, icon: BarChart }
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setEditingProgram(null);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-bold font-gothic uppercase tracking-wider flex items-center gap-2 transition duration-200 cursor-pointer ${
                    isActive ? 'bg-[#631120] text-white shadow' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label[currentLang]}</span>
                  {tab.qty !== undefined && <span className="bg-black/10 px-1.5 py-0.5 rounded text-[10px]">{tab.qty}</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB Panel: Candidates dossiers management */}
        {activeTab === 'submissions' && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
              <h2 className="font-chelsea text-gray-900 text-lg uppercase font-bold">
                {currentLang === 'FR' ? 'Candidatures enregistrées' : 'Submitted admissions records'}
              </h2>
              {candidatures.length > 0 && (
                <button
                  onClick={handleExportCSV}
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded font-gothic font-bold text-xs uppercase flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{currentLang === 'FR' ? 'Exporter au format CSV' : 'Export candidate data XLS/CSV'}</span>
                </button>
              )}
            </div>

            {candidatures.length > 0 ? (
              <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-[#631120] text-white font-gothic uppercase tracking-wider">
                    <tr>
                      <th className="p-4">Candidat</th>
                      <th className="p-4">Email & Téléphone</th>
                      <th className="p-4">Filière / Diplôme</th>
                      <th className="p-4">Pièces Jointes</th>
                      <th className="p-4">Statut de Suivi</th>
                      <th className="p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {candidatures.map((c) => (
                      <tr key={c.id} className="hover:bg-gray-50/50">
                        <td className="p-4">
                          <p className="font-bold text-gray-900">{c.lastName} {c.firstName}</p>
                          <p className="text-[10px] text-gray-400">Soumis le: {c.submittedAt?.split('T')[0]}</p>
                        </td>
                        <td className="p-4 font-mono">
                          <p className="font-semibold">{c.email}</p>
                          <p className="text-gray-400">{c.phone}</p>
                        </td>
                        <td className="p-4 font-light">
                          <p className="font-semibold text-gray-700">
                            {programsList.find(p => p.id === c.selectedProgramId)?.title[currentLang] || c.selectedProgramId}
                          </p>
                          <p className="text-[10px] text-gray-400">{c.educationBackground}</p>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-col gap-1 text-[10px] text-gray-500 font-mono">
                            <span className="text-gray-700">📄 CV: {c.cvFileName}</span>
                            <span className="text-gray-700">📊 Grades: {c.notesFileName}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <select
                            className={`border rounded p-1 text-xs font-bold font-gothic tracking-wider cursor-pointer uppercase ${
                              c.status === 'accepted' ? 'text-green-600 bg-green-50' : c.status === 'rejected' ? 'text-red-500 bg-red-50' : 'text-amber-500 bg-amber-50'
                            }`}
                            value={c.status}
                            onChange={(e) => handleUpdateStatus(c.id, e.target.value as any)}
                          >
                            <option value="new">NOUVEAU</option>
                            <option value="reviewing">EN COURS</option>
                            <option value="accepted">ACCEPTÉ / ADMIS</option>
                            <option value="rejected">REFUSÉ</option>
                          </select>
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => handleDeleteCandidature(c.id)}
                            className="bg-red-50 hover:bg-red-100 text-red-600 rounded p-1.5 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-white p-12 rounded-2xl text-center border">
                <p className="text-gray-400">Aucune soumission en ligne à ce jour.</p>
              </div>
            )}
          </div>
        )}

        {/* TAB Panel: Academic programs list and edit form */}
        {activeTab === 'programs' && (
          <div className="grid lg:grid-cols-12 gap-8 items-start animate-fade-in-up text-left">
            
            {/* Left side Create/Edit Form */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="font-chelsea text-[#631120] text-base md:text-lg uppercase">
                {editingProgram ? 'Modifier le Cursus' : 'Créer / Ajouter un Cursus'}
              </h3>

              <form onSubmit={createOrUpdateProgram} className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label className="font-bold text-gray-700">Nom Complet du Programme *</label>
                  <input 
                    type="text"
                    required
                    className="w-full text-sm border p-3 rounded-lg outline-none"
                    placeholder="e.g. Master in Artificial Intelligence"
                    value={newProgName}
                    onChange={(e) => setNewProgName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-700">Département académique</label>
                    <select 
                      className="w-full text-sm border p-3 rounded-lg bg-white outline-none cursor-pointer"
                      value={newProgDomain}
                      onChange={(e) => setNewProgDomain(e.target.value as any)}
                    >
                      <option value="engineering">Ingénierie</option>
                      <option value="business">Business & Droit</option>
                      <option value="health">Sciences de la Santé</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-700">Niveau et Cycle d\'études</label>
                    <select 
                      className="w-full text-sm border p-3 rounded-lg bg-white outline-none cursor-pointer"
                      value={newProgLevel}
                      onChange={(e) => setNewProgLevel(e.target.value as any)}
                    >
                      <option value="preparatory">Foundation / Prépa</option>
                      <option value="bachelor">Bachelor (Bac+3)</option>
                      <option value="master">Master (Bac+5)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-gray-700">Durée standard (e.g. 3 Ans)</label>
                  <input 
                    type="text"
                    required
                    className="w-full text-sm border p-3 rounded-lg outline-none"
                    placeholder="e.g. 3 Ans / 3 Years"
                    value={newProgDuration}
                    onChange={(e) => setNewProgDuration(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5 font-inter">
                  <label className="font-bold text-gray-700">Brève Description *</label>
                  <textarea 
                    required
                    rows={3}
                    className="w-full text-sm border p-3 rounded-lg outline-none"
                    placeholder="Description du programme..."
                    value={newProgDesc}
                    onChange={(e) => setNewProgDesc(e.target.value)}
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#631120] hover:bg-[#7B0A1F] text-white py-3 rounded-lg text-xs font-bold font-gothic tracking-wider uppercase cursor-pointer"
                  >
                    {editingProgram ? 'Enregistrer les modifications' : 'Ajouter le Cursus'}
                  </button>
                  {editingProgram && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingProgram(null);
                        setNewProgName('');
                        setNewProgDesc('');
                      }}
                      className="border border-gray-300 py-3 px-4 rounded-lg text-xs"
                    >
                      Annuler
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Right side List of 17 programs */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-chelsea text-gray-950 text-base uppercase font-bold">Liste des filières existantes ({programsList.length})</h3>
              
              <div className="bg-white rounded-2xl border overflow-hidden p-2 space-y-2">
                {programsList.map((prog) => (
                  <div key={prog.id} className="p-4 border-b last:border-0 hover:bg-gray-50 flex items-center justify-between gap-4">
                    <div className="text-left">
                      <p className="font-bold text-sm text-gray-900">{prog.title[currentLang]}</p>
                      <div className="flex gap-2 text-[10px] text-gray-400 mt-1 uppercase font-semibold">
                        <span>{prog.domain}</span>
                        <span>•</span>
                        <span>{prog.level}</span>
                        <span>•</span>
                        <span>{prog.duration[currentLang]}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          setEditingProgram(prog);
                          setNewProgName(prog.title[currentLang]);
                          setNewProgDomain(prog.domain);
                          setNewProgLevel(prog.level);
                          setNewProgDuration(prog.duration[currentLang]);
                          setNewProgDesc(prog.shortDescription[currentLang]);
                        }}
                        className="bg-gray-100 hover:bg-[#FDF6E3] hover:text-[#B8860B] text-gray-600 rounded p-1.5 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteProgram(prog.id)}
                        className="bg-red-50 hover:bg-red-100 text-red-600 rounded p-1.5 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB Panel: Users Inquiry Contacts list */}
        {activeTab === 'messages' && (
          <div className="space-y-6 animate-fade-in-up text-left">
            <h2 className="font-chelsea text-gray-900 text-lg uppercase font-bold">Doléances et Messages du public</h2>
            
            {contacts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contacts.map((c) => (
                  <div 
                    key={c.id} 
                    className={`bg-white p-6 rounded-2xl border shadow-sm flex flex-col justify-between space-y-4 ${
                      c.status === 'unread' ? 'border-l-4 border-l-[#631120]' : 'opacity-80'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="bg-[#F7EEEF] text-[#631120] text-[10px] font-gothic tracking-widest px-2.5 py-0.5 rounded uppercase">
                          {c.subject}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">
                          {c.submittedAt?.split('T')[0]}
                        </span>
                      </div>
                      
                      <h4 className="font-bold text-gray-950 text-sm">{c.name}</h4>
                      <p className="text-xs text-gray-500 font-mono">{c.email} | {c.phone}</p>
                      
                      <div className="font-inter text-xs text-gray-700 bg-gray-50 p-3 rounded-lg border leading-relaxed">
                        {c.message}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs font-gothic font-bold">
                      <button
                        onClick={() => handleToggleMessageState(c.id)}
                        className="text-[#631120] hover:underline cursor-pointer uppercase"
                      >
                        {c.status === 'read' ? 'Marquer comme Non-lu' : 'Marquer comme Lu'}
                      </button>

                      <button
                        onClick={() => alert(`Envoi direct d'une réponse par e-mail en cours d'écriture : admissions@rousseauhigherinstitute.org → ${c.email}`)}
                        className="px-3 py-1 bg-gray-100 hover:bg-[#631120] hover:text-white rounded uppercase transition"
                      >
                        Répondre par Email
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-2xl text-center border mr-auto max-w-xl mx-auto shadow-sm">
                <p className="text-gray-400">Aucun message de contact d’auditeurs reçu jusqu’à présent.</p>
              </div>
            )}
          </div>
        )}

        {/* TAB Panel: Landing page metrics configuration */}
        {activeTab === 'metrics' && (
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm max-w-xl mx-auto text-left space-y-6 animate-fade-in-up">
            <h2 className="font-chelsea text-[#631120] text-lg uppercase border-b pb-2">Modifier les Statistiques de l’Accueil</h2>
            <p className="text-xs text-gray-500 leading-relaxed font-light">
              Modifiez directement ces chiffres clés. Les compteurs animés de la page d’accueil utiliseront instantanément ces valeurs lors du défilement !
            </p>

            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-gray-700">Nombre de Programmes existants (par défaut: 17)</label>
                <input 
                  type="text" 
                  className="w-full text-sm border p-3 rounded-lg bg-gray-50 outline-none"
                  value={statPrograms}
                  onChange={(e) => setStatPrograms(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-gray-700">Nombre d\'Universités Partenaires (par défaut: 8)</label>
                <input 
                  type="text" 
                  className="w-full text-sm border p-3 rounded-lg bg-gray-50 outline-none"
                  value={statPartners}
                  onChange={(e) => setStatPartners(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-gray-700">Taux officiel de stages garantis (par défaut: 100%)</label>
                <input 
                  type="text" 
                  className="w-full text-sm border p-3 rounded-lg bg-gray-50 outline-none"
                  value={statPlacement}
                  onChange={(e) => setStatPlacement(e.target.value)}
                />
              </div>

              <button
                onClick={() => {
                  localStorage.setItem('rhit_programs_stat', statPrograms);
                  localStorage.setItem('rhit_partners_stat', statPartners);
                  localStorage.setItem('rhit_placement_stat', statPlacement);
                  alert(currentLang === 'FR' ? 'Paramètres d\'accueil sauvegardés de votre profil !' : 'Metrics set successfully!');
                }}
                className="w-full bg-[#B8860B] text-black text-xs font-bold font-gothic tracking-wider uppercase py-3.5 rounded-lg text-center cursor-pointer shadow"
              >
                Enregistrer les paramètres metrics
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
