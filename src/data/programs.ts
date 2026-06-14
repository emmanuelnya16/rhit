import { Program } from '../types';

export const DOMAINS = {
  engineering: {
    id: 'engineering',
    title: { FR: 'Ingénierie', EN: 'Engineering' },
    badgeColor: 'bg-[#631120] text-white',
    description: {
      FR: 'Formations techniques d\'excellence préparant aux défis technologiques de demain.',
      EN: 'Technical excellence programs preparing you for tomorrow\'s technological challenges.'
    }
  },
  business: {
    id: 'business',
    title: { FR: 'Business & Droit', EN: 'Business & Law' },
    badgeColor: 'bg-emerald-950 text-emerald-100',
    description: {
      FR: 'Programmes de management, d\'économie et d\'affaires juridiques axés sur la pratique globale.',
      EN: 'Management, economics and legal affairs programs focused on global practice.'
    }
  },
  health: {
    id: 'health',
    title: { FR: 'Sciences de la Santé', EN: 'Health Sciences' },
    badgeColor: 'bg-amber-950 text-amber-100',
    description: {
      FR: 'Formations médicales et paramédicales d\'excellence pour soigner avec expertise et dévouement.',
      EN: 'Elite medical and paramedical training to care with expertise and dedication.'
    }
  }
};

const createMockCurriculum = (domain: string, titleFR: string, titleEN: string) => {
  return [
    {
      year: 'Year 1',
      title: { FR: '1ère Année - Fondations', EN: '1st Year - Foundations' },
      semesters: [
        {
          title: { FR: 'Semestre 1', EN: 'Semester 1' },
          courses: [
            domain === 'engineering' ? 'Mathématiques pour l\'Ingénieur 1' : domain === 'health' ? 'Anatomie Générale' : 'Introduction au Management',
            domain === 'engineering' ? 'Physique Fondamentale' : domain === 'health' ? 'Physiologie Humaine' : 'Microéconomie',
            domain === 'engineering' ? 'Introduction à l\'Algorithmique' : domain === 'health' ? 'Microbiologie de Base' : 'Droit des Affaires',
            'Anglais Académique & Communication I',
            'Introduction aux Outils Professionnels'
          ]
        },
        {
          title: { FR: 'Semestre 2', EN: 'Semester 2' },
          courses: [
            domain === 'engineering' ? 'Mathématiques pour l\'Ingénieur 2' : domain === 'health' ? 'Biochimie Médicale' : 'Comptabilité Générale',
            domain === 'engineering' ? 'Thermodynamique & Électricité' : domain === 'health' ? 'Pathologie Générale' : 'Comportement Organisationnel',
            domain === 'engineering' ? 'Programmation Informatique Avancée' : domain === 'health' ? 'Santé Publique et Éthique' : 'Statistiques Appliquées',
            'Anglais de Spécialité II',
            'Stage d\'Observation & Projet d\'Équipe'
          ]
        }
      ]
    },
    {
      year: 'Year 2',
      title: { FR: '2ème Année - Spécialisation', EN: '2nd Year - Specialization' },
      semesters: [
        {
          title: { FR: 'Semestre 3', EN: 'Semester 3' },
          courses: [
            domain === 'engineering' ? 'Analyse Numérique' : domain === 'health' ? 'Sémiologie Médicale' : 'Marketing Fondamental',
            domain === 'engineering' ? 'Mécanique des Fluides' : domain === 'health' ? 'Techniques de Laboratoire' : 'Gestion Financière',
            'Pédagogie Active : Problem-Based Learning (PBL)',
            domain === 'engineering' ? 'Systèmes de Mesures & Capteurs' : domain === 'health' ? 'Pharmacologie Générale' : 'Droit du Travail',
            'Préparation intensive au TOEFL/TOEIC'
          ]
        },
        {
          title: { FR: 'Semestre 4', EN: 'Semester 4' },
          courses: [
            'Projet Industriel Interdisciplinaire (PBL)',
            domain === 'engineering' ? 'Sciences des Matériaux' : domain === 'health' ? 'Épidémiologie & Biostatistiques' : 'Négociation Commerciale',
            'Chinois Mandarin Débutant',
            'Stage d\'Immersion Professionnelle (8 semaines)'
          ]
        }
      ]
    },
    {
      year: 'Year 3',
      title: { FR: '3ème Année - Professionnalisation & Mobilité', EN: '3rd Year - Professionalization & Mobility' },
      semesters: [
        {
          title: { FR: 'Semestre 5', EN: 'Semester 5' },
          courses: [
            'Séminaire d\'Expression de Projet',
            'Mobilité Académique Internationale (Sorbonne / OMNES / IMT / ISEN)',
            'Management de Projet & Entrepreneuriat',
            'Cours de Spécialité Avancée'
          ]
        },
        {
          title: { FR: 'Semestre 6', EN: 'Semester 6' },
          courses: [
            'Soutenance de Projet de Fin d\'Études (PFE)',
            'Stage de Fin d\'Études Garanti (16 semaines)',
            'Insertion Professionnelle & Techniques de Recrutement'
          ]
        }
      ]
    }
  ];
};

export const PROGRAMS: Program[] = [
  {
    id: 'foundation-engineering',
    slug: 'foundation-engineering-program',
    title: { FR: 'Foundation Engineering Program', EN: 'Foundation Engineering Program' },
    domain: 'engineering',
    level: 'preparatory',
    duration: { FR: '1 An', EN: '1 Year' },
    language: { FR: 'Bilingue (Français/Anglais)', EN: 'Bilingual (French/English)' },
    entryLevel: { FR: 'Baccalauréat Scientifique / GCE A-Level', EN: 'Scientific Baccalaureate / GCE A-Level' },
    shortDescription: {
      FR: 'Année préparatoire intensive pour consolider les bases en sciences, mathématiques et langues pour entrer en cycle d\'ingénieur.',
      EN: 'Intensive preparatory year to consolidate scientific, mathematical, and language baselines for entering engineering cycle.'
    },
    fullDescription: {
      FR: 'Le Programme Préparatoire Intégré (Foundation Engineering Program) est conçu pour combler l\'écart entre l\'enseignement secondaire et les exigences rigoureuses du cycle d\'ingénieur. Il met l\'accent sur les mathématiques supérieures, la physique moderne, le développement de projets d\'ingénierie par problème (PBL) et un perfectionnement en anglais technique et initiation au chinois.',
      EN: 'The Integrated Preparatory Program (Foundation Engineering Program) is designed to bridge the gap between secondary school levels and the rigorous requirements of an engineering degree. It focuses on senior mathematics, modern physics, problem-based engineering design (PBL), and advanced technical English and introductory Chinese.'
    },
    careerOpportunities: [
      { FR: 'Accès direct au cycle Bachelor d\'Ingénierie de RHIT', EN: 'Direct access to RHIT Engineering Bachelor cycle' },
      { FR: 'Admission en écoles d\'ingénieurs partenaires en France et à l\'international', EN: 'Admission to partner engineering schools in France and internationally' },
      { FR: 'Technicien de laboratoire de recherche et d\'essais', EN: 'Research and assay laboratory technician' }
    ],
    curriculum: createMockCurriculum('engineering', 'Foundation Engineering', 'Foundation Engineering').slice(0, 1),
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-mechanical',
    slug: 'bachelor-mechanical-engineering',
    title: { FR: 'Bachelor in Mechanical Engineering', EN: 'Bachelor in Mechanical Engineering' },
    domain: 'engineering',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Anglais principal', EN: 'English main' },
    entryLevel: { FR: 'Baccalauréat C, D, E, TI / GCE A-Level', EN: 'Baccalaureate C, D, E, TI / GCE A-Level' },
    shortDescription: {
      FR: 'Conception, fabrication et maintenance des systèmes mécaniques modernes, incluant l\'automatisation industrielle.',
      EN: 'Design, manufacturing and maintenance of modern mechanical systems, including industrial automation.'
    },
    fullDescription: {
      FR: 'Le programme de Bachelor en Génie Mécanique forme des professionnels capables d\'intervenir dans la conception CAO, le calcul de structures, la thermodynamique industrielle et la commande numérique. Grâce à des ateliers pratiques équipés et la pédagogie par projet (PBL), les diplômés conçoivent de vrais systèmes physiques.',
      EN: 'The Mechanical Engineering Bachelor trains professionals capable of working in CAD design, structural analysis, industrial thermodynamics, and CNC. Guided by practical workshops and Project-Based Learning (PBL), graduates build real physical mechanisms.'
    },
    careerOpportunities: [
      { FR: 'Concepteur CAO / Dessinateur Projeteur', EN: 'CAD Designer / Design Draftsman' },
      { FR: 'Responsable Maintenance Industrielle', EN: 'Industrial Maintenance Manager' },
      { FR: 'Chef de Projet en Robotique et Automatisation', EN: 'Robotics and Automation Project Manager' },
      { FR: 'Poursuite d\'études en Master Spécialisé', EN: 'Continuing studies in a Specialized Master\'s degree' }
    ],
    curriculum: createMockCurriculum('engineering', 'Mechanical Engineering', 'Mechanical Engineering'),
    imageUrl: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-electrical',
    slug: 'bachelor-electrical-engineering',
    title: { FR: 'Bachelor in Electrical Engineering', EN: 'Bachelor in Electrical Engineering' },
    domain: 'engineering',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Anglais principal', EN: 'English main' },
    entryLevel: { FR: 'Baccalauréat C, D, E, TI, F3 / GCE A-Level', EN: 'Scientific Baccalaureate / GCE A-Level' },
    shortDescription: {
      FR: 'Maîtrisez les énergies renouvelables, les circuits électriques de puissance et l\'automatisation industrielle.',
      EN: 'Master renewable energies, power electrical circuits and industrial automation.'
    },
    fullDescription: {
      FR: 'Ce Bachelor permet de piloter des systèmes électriques de génération, de stockage et de distribution d\'énergie. Des cours théoriques associés à d\'ambitieux projets de groupe forment nos ingénieurs aux technologies solaires, éoliennes, ainsi qu\'au câblage de réseaux industriels complexes.',
      EN: 'This Bachelor teaches how to pilot electrical systems of generation, storage, and distribution. Combined theoretical classes and group projects build core capacities in smart-grid design, photovoltaic integration, and complex industrial wiring.'
    },
    careerOpportunities: [
      { FR: 'Chargé d\'Affaires en Électricité / Réseaux Civils', EN: 'Electrical Projects Manager' },
      { FR: 'Technicien Supérieur en Systèmes Solaires', EN: 'Solar Photovoltaic Systems Engineer' },
      { FR: 'Responsable Automatisme & Régulation industrielle', EN: 'Industrial Controls & Automation Engineer' }
    ],
    curriculum: createMockCurriculum('engineering', 'Electrical Engineering', 'Electrical Engineering'),
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-computer',
    slug: 'bachelor-computer-electronics-engineering',
    title: { FR: 'Bachelor in Computer and Electronics Engineering', EN: 'Bachelor in Computer & Electronics Engineering' },
    domain: 'engineering',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Anglais', EN: 'English' },
    entryLevel: { FR: 'Baccalauréat Scientifique / GCE A-Level', EN: 'Scientific Baccalaureate / GCE A-Level' },
    shortDescription: {
      FR: 'Développement logiciel avancé, systèmes embarqués, cybersécurité, intelligence artificielle et traitement du signal.',
      EN: 'Advanced software development, embedded systems, cybersecurity, artificial intelligence and signal processing.'
    },
    fullDescription: {
      FR: 'Au carrefour du matériel et du logiciel, ce programme forme des experts du code et de l\'électronique embarquée (IoT, microcontrôleurs). Vous découvrirez les technologies Web, Mobiles, l\'administration Système & Réseau, ainsi que les algorithmes de décision intelligents.',
      EN: 'At the convergence of hardware and software, this program molds embedded systems developers and hardware engineers (IoT, microarchitectures). You will learn modern Web, Mobile development, network routing, and AI models.'
    },
    careerOpportunities: [
      { FR: 'Ingénieur Logiciel Full Stack', EN: 'Full Stack Software Engineer' },
      { FR: 'Développeur IoT & Systèmes Embarqués', EN: 'IoT & Embedded Systems Developer' },
      { FR: 'Administrateur Systèmes, Réseaux & Secops', EN: 'Network Systems and Security Administrator' }
    ],
    curriculum: createMockCurriculum('engineering', 'Computer & Electronics', 'Computer & Electronics'),
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-civil',
    slug: 'bachelor-civil-engineering',
    title: { FR: 'Bachelor in Civil Engineering', EN: 'Bachelor in Civil Engineering' },
    domain: 'engineering',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Bilingue', EN: 'Bilingual' },
    entryLevel: { FR: 'Bac Scientifique / GCE A-Level', EN: 'Scientific Baccalaureate / GCE A-Level' },
    shortDescription: {
      FR: 'Conception d\'infrastructures durables, routes, ponts, bâtiments résidentiels et industriels.',
      EN: 'Design of sustainable infrastructures, roads, bridges, and housing/industrial buildings.'
    },
    fullDescription: {
      FR: 'Le Bachelor en Génie Civil prépare aux métiers classiques et d\'avenir du BTP. Du calcul mécanique des bétons armés au dessin 3D BIM, de l\'assainissement urbain à la gestion éco-responsable des chantiers.',
      EN: 'The Civil Engineering Bachelor prepares you for classic and future construction jobs. From concrete structural mechanics to 3D BIM drafting, municipal sewer flows, and eco-friendly site management.'
    },
    careerOpportunities: [
      { FR: 'Conducteur de Travaux BTP', EN: 'Construction Site Manager' },
      { FR: 'Dessinateur Métreur CAD/BIM', EN: 'BIM/CAD Quantity Surveyor' },
      { FR: 'Enquêteur / Analyste en Bureau d\'Études structures', EN: 'Structural Engineering Bureau Analyst' }
    ],
    curriculum: createMockCurriculum('engineering', 'Civil Engineering', 'Civil Engineering'),
    imageUrl: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'master-civil',
    slug: 'master-civil-engineering',
    title: { FR: 'Master in Civil Engineering', EN: 'Master in Civil Engineering' },
    domain: 'engineering',
    level: 'master',
    duration: { FR: '2 Ans', EN: '2 Years' },
    language: { FR: 'Bilingue / Anglais', EN: 'Bilingual / English' },
    entryLevel: { FR: 'Bachelor en Génie Civil ou équivalent (Bac+3)', EN: 'Bachelor in Civil Engineering or equivalent (3 Years degree)' },
    shortDescription: {
      FR: 'Expertise avancée en modélisation structurelle, géotechnique, infrastructures majeures et transition écologique.',
      EN: 'Advanced expertise in structural modeling, geotechnics, mega-infrastructures, and ecological transition.'
    },
    fullDescription: {
      FR: 'Cycle de Master formant les futurs chefs de projets et directeurs techniques. Au programme : modélisations non-linéaires par éléments finis, calculs sismiques, économie circulaire du bâtiment et gestion globale de projets multipartites.',
      EN: 'Master level molding future engineering project leads and technical directors. Inside: structural finite elements modeling, seismic calculations, building green economy and complete multi-contract project advisory.'
    },
    careerOpportunities: [
      { FR: 'Ingénieur Calculateur de Structures Principal', EN: 'Senior Structural Analysis Engineer' },
      { FR: 'Directeur de Chantier Bâtiment et Génie Civil', EN: 'Civil and Structural Site Director' },
      { FR: 'Ingénieur Géotechnicien Conseil', EN: 'Consultant Geotechnical Engineer' }
    ],
    curriculum: createMockCurriculum('engineering', 'Advanced Civil Engineering', 'Advanced Civil Engineering').slice(1, 3),
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
  }
];

// Let's create an array of remaining placeholder programs to fulfill the structural table requirements of the 17 programs perfectly.
export const ADD_PROGRAMS: Program[] = [
  {
    id: 'master-mechanical',
    slug: 'master-mechanical-engineering',
    title: { FR: 'Master in Mechanical Engineering', EN: 'Master in Mechanical Engineering' },
    domain: 'engineering',
    level: 'master',
    duration: { FR: '2 Ans', EN: '2 Years' },
    language: { FR: 'Anglais', EN: 'English' },
    entryLevel: { FR: 'Bachelor Génie Mécanique ou équivalent (Bac+3)', EN: 'Mechanical Engineering Bachelor or equivalent' },
    shortDescription: {
      FR: 'Conception avancée, énergétique d\'avenir et gestion cyber-physique des industries modernes.',
      EN: 'Advanced industrial design, future energetics and cyber-physical monitoring of modern industries.'
    },
    fullDescription: {
      FR: 'Ce Master approfondit la thermodynamique thermique avancée, la rhéologie et les fluides, ainsi que la commande numérique avancée et l\'intégration de jumeaux numériques d\'usine.',
      EN: 'This Master focuses on advanced thermodynamics, microfluidics, advanced CNC tooling and factory digital twins coordination.'
    },
    careerOpportunities: [
      { FR: 'Ingénieur R&D en Aéronautique ou Énergie', EN: 'R&D Engineer in Aeronautics or Energy' },
      { FR: 'Consultant Méthodes et Automatisation Industrielle', EN: 'Industrial Robotics & Operational Excellence Advisor' }
    ],
    curriculum: [],
    imageUrl: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'master-computer',
    slug: 'master-computer-electronics-engineering',
    title: { FR: 'Master in Computer and Electronics Engineering', EN: 'Master in Computer and Electronics Engineering' },
    domain: 'engineering',
    level: 'master',
    duration: { FR: '2 Ans', EN: '2 Years' },
    language: { FR: 'Anglais', EN: 'English' },
    entryLevel: { FR: 'Bachelor Informatique / Électronique (Bac+3)', EN: 'Computer / Electronics Bachelor or equivalent' },
    shortDescription: {
      FR: 'Intelligence Artificielle de pointe, Big Data, Cloud Computing, et robotique mobile autonome.',
      EN: 'Cutting-edge Artificial Intelligence, Big Data, Cloud Computing, and mobile autonomous robotics.'
    },
    fullDescription: {
      FR: 'Destiné à l\'élite digitale, ce Master aborde l\'architecture micro-services hautement disponible, le Deep Learning de pointe, la vision par ordinateur et les standards modernes de sécurité de l\'information.',
      EN: 'Designed for the digital elite, this Master treats highly-available micro-services architecture, deep neural networks, computer vision, and safety compliance.'
    },
    careerOpportunities: [
      { FR: 'Machine Learning Architect', EN: 'Machine Learning Architect' },
      { FR: 'Chef de la Sécurité des Systèmes d\'Information', EN: 'Chief Information Security Officer (CISO)' },
      { FR: 'Directeur Technique (CTO)', EN: 'Chief Technical Officer (CTO)' }
    ],
    curriculum: [],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-accountancy',
    slug: 'bachelor-accountancy',
    title: { FR: 'Bachelor in Accountancy', EN: 'Bachelor in Accountancy' },
    domain: 'business',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Anglais principal', EN: 'English main' },
    entryLevel: { FR: 'Baccalauréat G, CG, C, D / GCE A-Level', EN: 'Senior School Leaving Certificate' },
    shortDescription: {
      FR: 'Comptabilité certifiée, fiscalité des entreprises, audit et contrôle de gestion approfondi.',
      EN: 'Certified accountancy, corporate taxation, auditing, and financial controllership.'
    },
    fullDescription: {
      FR: 'Le Bachelor in Accountancy forme l\'élite comptable capable de piloter les bilans comptables, l\'audit financier interne et l\'analyse fiscale conformément aux standards de l\'OHADA et aux régulations britanniques.',
      EN: 'The Accountancy Bachelor builds accounting experts capable of pilot tax sheets, audited statements, and control standards conform with OHADA and British frameworks.'
    },
    careerOpportunities: [
      { FR: 'Contrôleur de Gestion Junior', EN: 'Junior Corporate Controller' },
      { FR: 'Auditeur Financier Indépendant', EN: 'Independent Financial Auditor' },
      { FR: 'Comptable d\'Entreprise senior', EN: 'Senior Corporate Accountant' }
    ],
    curriculum: [],
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-marketing',
    slug: 'bachelor-digital-marketing',
    title: { FR: 'Bachelor in Digital Marketing', EN: 'Bachelor in Digital Marketing' },
    domain: 'business',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Anglais / Bilingue', EN: 'English / Bilingual' },
    entryLevel: { FR: 'Baccalauréat toutes séries / GCE A-Level', EN: 'Regular Baccalaureate / GCE A-Level' },
    shortDescription: {
      FR: 'Stratégie de marque, e-commerce, réseaux sociaux, analyse de données et campagnes digitales.',
      EN: 'Brand strategy, e-commerce, social media optimization, data analytics, and digital ads.'
    },
    fullDescription: {
      FR: 'Faites le pont entre créativité et technologie. Ce programme explore le SEO/SEA, le growth hacking, l\'UX design, et la conduite de plans de marketing globaux sur les principaux supports et canaux d\'affichage.',
      EN: 'Connect trade flows with web growth. This program teaches search engine growth, creative ad deployment, brand conversion, and e-com operations.'
    },
    careerOpportunities: [
      { FR: 'Growth Hacker & Designer Web', EN: 'Growth Hacker & Web Designer' },
      { FR: 'Digital Brand Manager', EN: 'Digital Brand Manager' },
      { FR: 'Consultant SEO & Content Strategy', EN: 'SEO Consultant & Content Director' }
    ],
    curriculum: [],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-legal',
    slug: 'bachelor-legal-affairs',
    title: { FR: 'Bachelor in Legal Affairs', EN: 'Bachelor in Legal Affairs' },
    domain: 'business',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Bilingue (Français/Anglais)', EN: 'Bilingual (French/English)' },
    entryLevel: { FR: 'Baccalauréat A, ABI / GCE A-Level', EN: 'Classic Baccalaureate / GCE A-Level' },
    shortDescription: {
      FR: 'Droit commercial international, rédaction de contrats complexes et conformité des affaires.',
      EN: 'International business law, complex contract parsing, and corporate compliance.'
    },
    fullDescription: {
      FR: 'Préparez-vous à sécuriser l\'activité juridique des entreprises. Ce programme étudie le droit des sociétés de l\'OHADA, le droit du travail, les fusions-acquisitions, la RGPD et le droit commercial anglo-saxon.',
      EN: 'Prepare to protect high-stakes business deals. Courses cover OHADA business law, common law contracts, trade agreements, and data privacy regulations.'
    },
    careerOpportunities: [
      { FR: 'Juriste d\'Entreprise Junior', EN: 'Junior Corporate Jurist' },
      { FR: 'Collaborateur de Cabinet d\'Avocat / Notaire', EN: 'Law Firm or Notary Assistant' },
      { FR: 'Chargé de Conformité réglementaire', EN: 'Compliance & Legal Officer' }
    ],
    curriculum: [],
    imageUrl: 'https://images.unsplash.com/photo-1505664194779-8bebcb95c539?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-project-management',
    slug: 'bachelor-project-management',
    title: { FR: 'Bachelor in Project Management', EN: 'Bachelor in Project Management' },
    domain: 'business',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Anglais', EN: 'English' },
    entryLevel: { FR: 'Baccalauréat Scientifique ou Tertiaire / GCE', EN: 'Scientific or Commercial Baccalaureate' },
    shortDescription: {
      FR: 'Planification stratégique, méthodologies agiles, budgétisation et gouvernance de projets complexes.',
      EN: 'Strategic alignment, agile frameworks, financial planning, and large-scale project governance.'
    },
    fullDescription: {
      FR: 'Maîtrisez les outils leaders du marché (Asana, MS Project, Jira) ainsi que les référentiels mondiaux PMI et Scrum de pilotage d\'équipes pluridisciplinaires.',
      EN: 'Master standard tracking apps (Project, Asana, Jira) alongside PMI and Scrum frameworks to coordinate high-performing cross-functional squads.'
    },
    careerOpportunities: [
      { FR: 'Coordonnateur de Projet Agile / Scrum Master', EN: 'Agile Project Coordinator / Scrum Master' },
      { FR: 'Analyste Opérationnel et Planification', EN: 'Operations & Tracking Specialist' }
    ],
    curriculum: [],
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-supply-chain',
    slug: 'bachelor-supply-chain-management',
    title: { FR: 'Bachelor in Supply Chain Management', EN: 'Bachelor in Supply Chain Management' },
    domain: 'business',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Anglais principal', EN: 'English main' },
    entryLevel: { FR: 'Baccalauréat Scientifique ou Économique / GCE', EN: 'Scientific or Trade Class Baccalaureate' },
    shortDescription: {
      FR: 'Gestion de la logistique globale, optimisation des flux, douanes internationales et transport multimodal.',
      EN: 'Global logistics control, routing optimizations, international customs clearance, and modal shipping.'
    },
    fullDescription: {
      FR: 'Un cursus d\'excellence pour gérer les flux physiques et d\'information de la production au client final. Couvre la douane CEMAC, le transport maritime et l\'intelligence logistique.',
      EN: 'Study the flow of materials, goods, and digital assets from raw sources to the customer. Covers CEMAC sea borders, customs laws, and smart tracking.'
    },
    careerOpportunities: [
      { FR: 'Responsable Douane & Transit Logistique', EN: 'Transit & Customs Broker Manager' },
      { FR: 'Gestionnaire de Base Logistique / Entrepôts', EN: 'Warehouse Distribution Hub Director' }
    ],
    curriculum: [],
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-imaging',
    slug: 'bachelor-imaging-radiation',
    title: { FR: 'Bachelor in Imaging and Radiation', EN: 'Bachelor in Imaging and Radiation' },
    domain: 'health',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Français / Anglais', EN: 'French / English' },
    entryLevel: { FR: 'Baccalauréat Scientifique D / GCE A-Level Sciences', EN: 'Scientific GCE A-Level Sciences' },
    shortDescription: {
      FR: 'Imagerie médicale, radiographie numérique, scanner, résonance magnétique (IRM) et radioprotection.',
      EN: 'Medical radiodiagnostics, computed radiography, CT Scans, magnetic resonance (MRI), and radioprotection.'
    },
    fullDescription: {
      FR: 'Formez-vous à la manipulation des technologies radiologiques les plus modernes pour le diagnostic clinique. Ce cursus met l\'accent sur l\'anatomie radiologique, la physique des rayonnements et l\'éthique de soin.',
      EN: 'Learn how to pilot imaging machines for diagnosis. This program emphasizes clinical anatomy, dosimetry, medical safety, and patient care.'
    },
    careerOpportunities: [
      { FR: 'Manipulateur d\'Équipements d\'Imagerie Médicale', EN: 'X-Ray / MRI Imaging Operator' },
      { FR: 'Technicien de Radioprotection clinique', EN: 'Radiation Safety Officer' }
    ],
    curriculum: [],
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-laboratory',
    slug: 'bachelor-medical-laboratory-science',
    title: { FR: 'Bachelor in Medical Laboratory Science', EN: 'Bachelor in Medical Laboratory Science' },
    domain: 'health',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Bilingue', EN: 'Bilingual' },
    entryLevel: { FR: 'Baccalauréat Scientifique D / GCE A-Level', EN: 'Scientific GCE A-Level' },
    shortDescription: {
      FR: 'Analyses biologiques, hématologie, biochimie clinique, parasitologie et contrôle qualité hospitalier.',
      EN: 'Biological testing, hematology, clinical biochemistry, medical assays, and hospital QA.'
    },
    fullDescription: {
      FR: 'Devenez le pivot des diagnostics médicaux en apprenant à isoler les agents infectieux, étudier le sang, cultiver les bactéries et valider les rapports d\'analyses sous haute sécurité biologique.',
      EN: 'Become a critical link in hospital diagnosis. Run diagnostic work checking blood, pathogen samples, and chemical properties with biosafety level protocol.'
    },
    careerOpportunities: [
      { FR: 'Analyste de Laboratoire Hospitalier', EN: 'Clinical Medical Lab Analyst' },
      { FR: 'Chercheur en Industries Pharmaceutiques', EN: 'Pharmaceutical Laboratory Assayer' }
    ],
    curriculum: [],
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f35116f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-physiotherapy',
    slug: 'bachelor-physiotherapy',
    title: { FR: 'Bachelor in Physiotherapy', EN: 'Bachelor in Physiotherapy' },
    domain: 'health',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Français / Anglais', EN: 'French / English' },
    entryLevel: { FR: 'Baccalauréat D / GCE A-Level Sciences', EN: 'Scientific GCE A-Level Sciences' },
    shortDescription: {
      FR: 'Kinesithérapie, rééducation fonctionnelle, thérapie manuelle et traitement des traumatismes sportifs.',
      EN: 'Physical therapy, body biomechanics rebuilding, manual therapy, and athletic rehabilitation.'
    },
    fullDescription: {
      FR: 'Apprenez à restaurer les capacités fonctionnelles motrices de patients souffrant de traumas ou de douleurs neurologiques chroniques. Un cursus de stage intensif en centres spécialisés de santé.',
      EN: 'Learn how to rebuild kinetic patterns and muscles of orthopedic or neural patients. Supported by rich mandatory internships inside clinical institutions.'
    },
    careerOpportunities: [
      { FR: 'Kinésithérapeute en Cabinet Privé ou Hôpital', EN: 'Physiotherapist in clinic or private center' },
      { FR: 'Préparateur de Rééducation Sportive professionnelle', EN: 'Sports Rehabilitation Specialist' }
    ],
    curriculum: [],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bachelor-nursing',
    slug: 'bachelor-nursing',
    title: { FR: 'Bachelor in Nursing', EN: 'Bachelor in Nursing' },
    domain: 'health',
    level: 'bachelor',
    duration: { FR: '3 Ans', EN: '3 Years' },
    language: { FR: 'Bilingue', EN: 'Bilingual' },
    entryLevel: { FR: 'Baccalauréat Scientifique D / GCE A-Level', EN: 'Scientific GCE A-Level' },
    shortDescription: {
      FR: 'Soins infirmiers cliniques, médecine d\'urgence, pédiatrie, déontologie et pharmacovigilance.',
      EN: 'Clinical nurse training, emergency state medicine, pediatric care, ethics, and pharmacovigilance.'
    },
    fullDescription: {
      FR: 'Le Bachelor in Nursing de RHIT offre des compétences pratiques exhaustives pour administrer les soins et piloter la logistique clinique d\'un service, en accord avec les normes éthiques mondiales.',
      EN: 'RHIT\'s nursing Bachelor delivers high practical skills to perform clinical treatment, manage emergency floors, and drive health safety under global guidelines.'
    },
    careerOpportunities: [
      { FR: 'Infirmier Clinicien Gradué', EN: 'Staff / Clinical Registered Nurse' },
      { FR: 'Superviseur de Service Hospitalier Urgentiste', EN: 'Emergency Ward Lead Coordinator' }
    ],
    curriculum: [],
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800'
  }
];

export const ALL_PROGRAMS = [...PROGRAMS, ...ADD_PROGRAMS];
