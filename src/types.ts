export type Language = 'FR' | 'EN';

export interface MultiLangText {
  FR: string;
  EN: string;
}

export interface CourseYear {
  year: string;
  title: MultiLangText;
  semesters: {
    title: MultiLangText;
    courses: string[];
  }[];
}

export interface Program {
  id: string;
  slug: string;
  title: MultiLangText;
  domain: 'engineering' | 'business' | 'health';
  level: 'preparatory' | 'bachelor' | 'master';
  duration: MultiLangText;
  language: MultiLangText;
  entryLevel: MultiLangText;
  shortDescription: MultiLangText;
  fullDescription: MultiLangText;
  careerOpportunities: MultiLangText[];
  curriculum: CourseYear[];
  imageUrl: string;
}

export interface PartnerUniversity {
  id: string;
  name: string;
  country: MultiLangText;
  city: MultiLangText;
  domains: MultiLangText[];
  type: MultiLangText;
  logoUrl: string;
  campusImageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatarUrl: string;
  rating: number;
  quote: MultiLangText;
  programName: MultiLangText;
  promotion: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: MultiLangText;
  category: 'life' | 'partnership' | 'academic' | 'event';
  categoryLabel: MultiLangText;
  date: string;
  summary: MultiLangText;
  content: MultiLangText;
  imageUrl: string;
}

export interface Candidature {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  nationality: string;
  selectedProgramId: string;
  educationBackground: string;
  cvFileName?: string;
  notesFileName?: string;
  motivationFileName?: string;
  status: 'new' | 'reviewing' | 'accepted' | 'rejected';
  submittedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
  status: 'unread' | 'read' | 'replied';
}
