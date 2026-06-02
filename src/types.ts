export interface InvestmentProduct {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  suitability: string;
}

export interface FinancialService {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  longDesc: string;
  checklist: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'mutual_funds' | 'planning' | 'general';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}
