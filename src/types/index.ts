import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon?: LucideIcon;
  isButton?: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageHint: string;
  features: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface TintLine {
  id: string;
  name: string;
  description: string;
  vltRange: string; // e.g., "5%, 20%, 35%, 50%"
  heatRejection: number; // Percentage
  uvProtection: number; // Percentage
  glareReduction: number; // Percentage
  clarity: 'Good' | 'Better' | 'Best';
  priceTier: 'Standard' | 'Premium' | 'Ultra-Premium';
  features: string[];
  sampleImage: string; 
  imageHint: string;
}
