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
