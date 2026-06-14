import { NewsArticle } from '../types';

export const NEWS: NewsArticle[] = [
  {
    id: 'news-kribi-tour',
    slug: 'rhit-study-tour-kribi-2026',
    title: {
      FR: 'Study Tour à Kribi : Immersion industrielle au Port Autonome',
      EN: 'Kribi Study Tour: Industrial Immersion at the Deep Seaport'
    },
    category: 'life',
    categoryLabel: { FR: 'Vie Étudiante', EN: 'Student Life' },
    date: '2026-05-18',
    summary: {
      FR: 'Les étudiants en Ingénierie Civil & Logistique ont passé 3 jours d\'immersion intense au Port Autonome de Kribi.',
      EN: 'Civil Engineering & Logistics students spent 3 days of heavy immersion at the Kribi Deep Seaport.'
    },
    content: {
      FR: 'Dans le cadre de l\'approche par problème (PBL), nos étudiants de Bachelor et Master ont visité les installations logistiques et les plateformes de stockage du Port de Kribi. Ils ont pu analyser les flux de marchandises réels sous la direction des ingénieurs portuaires et relever un défi pratique lié aux temps d\'attente des navires.',
      EN: 'As part of our Problem-Based Learning (PBL) curriculum, our Bachelor and Master students visited the mechanical structures and logictic hubs of the Kribi Deep Seaport. Guided by structural and customs engineers, they solved an on-site simulation related to cargo clearing times.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'news-dibamba-visit',
    slug: 'visite-technique-centrale-dibamba',
    title: {
      FR: 'Visite guidée à la Centrale Thermique de Dibamba',
      EN: 'Guided Technical Tour at Dibamba Thermal Power Plant'
    },
    category: 'academic',
    categoryLabel: { FR: 'Académique', EN: 'Academic' },
    date: '2026-04-10',
    summary: {
      FR: 'Nos étudiants d\'Électricité ont analysé le dispatching et la régulation énergétique de la Dibamba.',
      EN: 'Our Electrical Engineering students analyzed power distribution grids at Dibamba.'
    },
    content: {
      FR: 'Une journée complète au cœur de la distribution électrique nationale ! Encadrés par l\'équipe d\'ingénieurs de la centrale de Dibamba, nos étudiants ont étudié le fonctionnement des alternateurs de puissance, les transformateurs HT, et le dispatching intelligent de l\'électricité.',
      EN: 'A complete day inside the national grid! Directed by the plant operations squad, our electrical students inspected large active alternators, high voltage transformers, and smart load-balancing strategies.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'news-parle-g-partnership',
    slug: 'masterclass-parle-g-marketing-cameroun',
    title: {
      FR: 'Masterclass Stratégique exclusive avec la direction de Parle-G',
      EN: 'Exclusive Strategy Masterclass with Parle-G Country Managers'
    },
    category: 'partnership',
    categoryLabel: { FR: 'Partenariats', EN: 'Partnerships' },
    date: '2026-03-24',
    summary: {
      FR: 'Immersion marketing de premier plan sur l\'implantation et la croissance de la marque leader Parle-G.',
      EN: 'High-level marketing insights around the expansion patterns of the iconic Parle-G brand.'
    },
    content: {
      FR: 'Les leaders africains de la distribution de Parle-G ont partagé avec nos étudiants de Business & Digital Marketing les clés de leur chaîne logistique robuste et de leur stratégie publicitaire mémorable pour conquérir le marché à grande échelle.',
      EN: 'Our Business & Marketing students welcomed the regional distribution directors of Parle-G. They shared critical case values from raw supply chain models to successful localized advertising systems.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800'
  }
];

export const PARTNERS = [
  { name: 'Sorbonne Paris Nord', logo: 'SPN' },
  { name: 'OMNES Education', logo: 'OMNES' },
  { name: 'IMT Albi-Carmaux', logo: 'IMT' },
  { name: 'ISEN', logo: 'ISEN' },
  { name: 'University of Buea', logo: 'UB' },
  { name: 'Université de Douala', logo: 'UD' },
  { name: 'CPD Certification Service', logo: 'CPD' }
];

export const PARTNER_UNIVERSITIES: PartnerUniversity[] = [
  {
    id: 'part-sorbonne',
    name: 'Sorbonne Paris Nord',
    country: { FR: 'France', EN: 'France' },
    city: { FR: 'Paris', EN: 'Paris' },
    domains: [
      { FR: 'Ingénierie', EN: 'Engineering' },
      { FR: 'Sciences de la Santé', EN: 'Health Sciences' }
    ],
    type: { FR: 'Double Diplôme & Semestre de Mobilité', EN: 'Double Degree & Study Abroad Semesters' },
    logoUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=300',
    campusImageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'part-omnes',
    name: 'OMNES Education Group',
    country: { FR: 'France & Monaco', EN: 'France & Monaco' },
    city: { FR: 'Paris, Lyon, Monaco', EN: 'Paris, Lyon, Monaco' },
    domains: [
      { FR: 'Business & Management', EN: 'Business & Management' },
      { FR: 'Droit des Affaires', EN: 'Legal Affairs' }
    ],
    type: { FR: 'Partenariat Académique & Transfert de Crédits', EN: 'Academic Partnerships & Credits Swap' },
    logoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=300',
    campusImageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'part-imt',
    name: 'IMT Albi-Carmaux',
    country: { FR: 'France', EN: 'France' },
    city: { FR: 'Albi', EN: 'Albi' },
    domains: [
      { FR: 'Génie Mécanique', EN: 'Mechanical Engineering' },
      { FR: 'Matériaux du Futur', EN: 'Advanced Materials' }
    ],
    type: { FR: 'Mobilité de recherche & Cycle Ingénieur', EN: 'Research Mobility & Engineering Degree track' },
    logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=300',
    campusImageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'part-isen',
    name: 'ISEN Yncréa Group',
    country: { FR: 'France', EN: 'France' },
    city: { FR: 'Lille, Toulon', EN: 'Lille, Toulon' },
    domains: [
      { FR: 'Informatique & Électronique', EN: 'Computer Science & Hardware' },
      { FR: 'Réseaux & Cybersécurité', EN: 'Networks & CyberSecurity' }
    ],
    type: { FR: 'Co-diplomation & Semestre d\'immersion', EN: 'Co-diplomancy & Study Exchange' },
    logoUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=300',
    campusImageUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Inès Fotso',
    avatarUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    quote: {
      FR: 'Grâce au partenariat OMNES, j\'ai pu effectuer mon Semestre 5 à Lyon. La formation pratique PBL de RHIT m\'a permis d\'avoir d\'excellentes notes d\'entrée !',
      EN: 'Thanks to the OMNES partnership, I spent my 5th Semester in Lyon. RHIT\'s core PBL courses gave me the absolute upper-hand on all advanced courses!'
    },
    programName: { FR: 'Bachelor in Digital Marketing', EN: 'Bachelor in Digital Marketing' },
    promotion: 'Promo 2024 (Actuellement Consultante à Paris)'
  },
  {
    id: 'test-2',
    name: 'Marc Owona',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    quote: {
      FR: 'L\'immersion en laboratoire et le matériel de radiographie de pointe à RHIT m\'ont tout de suite plongé dans la réalité hospitalière. Je recommande à 100%.',
      EN: 'The laboratory environment and heavy radiodiagnotic equipment at RHIT immediately plunged me into clinical workflow. 100% recommended.'
    },
    programName: { FR: 'Bachelor in Imaging and Radiation', EN: 'Bachelor in Imaging and Radiation' },
    promotion: 'Promo 2023 (Manipulateur Radio principal)'
  },
  {
    id: 'test-3',
    name: 'Audrey Nsame',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    quote: {
      FR: 'Le bilinguisme poussé et la préparation intensive au TOEFL m\'ont permis de m\'intégrer directement au cycle d\'ingénieur international sans aucune barrière.',
      EN: 'Strong bilingual focus and intensive TOEFL guidance at RHIT gave me seamless admission in the international engineering track without any friction!'
    },
    programName: { FR: 'Foundation Engineering Program', EN: 'Foundation Engineering Program' },
    promotion: 'Promo 2025 (Candidate Master double-diplôme)'
  }
];
import { PartnerUniversity, Testimonial } from '../types';
