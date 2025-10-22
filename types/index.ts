export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface News {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}