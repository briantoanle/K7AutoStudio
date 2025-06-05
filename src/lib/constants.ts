import type { NavItem, Service, Project } from '@/types';
import { Car, ShieldCheck, Sparkles, Image as ImageIcon, Users, Phone, Mail, MapPin, CalendarDays, Menu, Layers } from 'lucide-react';

export const APP_NAME = 'ShieldPro';

export const NAV_LINKS: NavItem[] = [
  { href: '/', label: 'Home', icon: Car },
  { href: '/services', label: 'Services', icon: Layers },
  { href: '/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/about', label: 'About Us', icon: Users },
  { href: '/contact', label: 'Contact', icon: Mail },
  { href: '/book-appointment', label: 'Book Appointment', icon: CalendarDays, isButton: true },
];

export const CONTACT_DETAILS = {
  phone: '(555) 123-4567',
  email: 'contact@shieldpro.com',
  address: '123 Auto Care Street, Anytown, USA 12345',
  mapLink: 'https://maps.google.com/?q=123+Auto+Care+Street,+Anytown,+USA+12345',
  openingHours: [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],
};

export const SERVICES_OFFERED: Service[] = [
  {
    id: 'tinting',
    name: 'Window Tinting',
    description: 'Expert window tinting services for enhanced privacy, UV protection, and a sleek look. We use high-quality films for long-lasting results.',
    icon: Sparkles,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'car window',
    features: ['UV Ray Blockage', 'Heat Reduction', 'Glare Reduction', 'Enhanced Privacy', 'Variety of Shades'],
  },
  {
    id: 'ppf',
    name: 'Paint Protection Film (PPF)',
    description: 'Protect your vehicle\'s paint from scratches, chips, and environmental damage with our premium PPF solutions. Virtually invisible and self-healing.',
    icon: ShieldCheck,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'car paint',
    features: ['Scratch & Chip Resistance', 'Self-Healing Technology', 'UV Protection', 'Stain Resistance', 'Optical Clarity'],
  },
];

export const PROJECTS_DATA: Project[] = [
  { id: '1', name: 'Sedan Full Tint', imageUrl: 'https://placehold.co/600x400.png', imageHint: 'sedan tint', description: 'Completed a full window tinting for a luxury sedan, enhancing privacy and style.' },
  { id: '2', name: 'SUV PPF Application', imageUrl: 'https://placehold.co/600x400.png', imageHint: 'suv ppf', description: 'Applied premium paint protection film to the front end of an SUV for maximum durability.' },
  { id: '3', name: 'Sports Car Detail & Tint', imageUrl: 'https://placehold.co/600x400.png', imageHint: 'sports car', description: 'Full detail and dark tint for a high-performance sports car.' },
  { id: '4', name: 'Truck Chrome Delete & Tint', imageUrl: 'https://placehold.co/600x400.png', imageHint: 'truck customization', description: 'Custom chrome delete using vinyl wrap and full window tint on a pickup truck.' },
  { id: '5', name: 'Classic Car Restoration Tint', imageUrl: 'https://placehold.co/600x400.png', imageHint: 'classic car', description: 'Specialized tint application for a classic car, preserving its interior.' },
  { id: '6', name: 'Van Commercial Tinting', imageUrl: 'https://placehold.co/600x400.png', imageHint: 'van tint', description: 'Privacy tinting for a commercial van, securing tools and equipment.' },
];

export const ABOUT_US_CONTENT = {
  mission: "Our mission at ShieldPro is to provide top-tier automotive protection and enhancement services, utilizing the best materials and skilled technicians to ensure every vehicle leaves looking its best and fully protected.",
  values: ["Quality Craftsmanship", "Customer Satisfaction", "Integrity & Honesty", "Continuous Improvement", "Attention to Detail"],
  teamIntro: "Our team consists of certified professionals passionate about cars and dedicated to delivering exceptional results. With years of experience in tinting and PPF application, we treat every vehicle as if it were our own."
};

export const TESTIMONIALS = [
  { quote: "ShieldPro did an amazing job on my car's tint. Professional, quick, and flawless!", author: "Alex P." },
  { quote: "The PPF installation was perfect. You can't even tell it's there, and I feel much better knowing my paint is protected.", author: "Maria K." },
  { quote: "Excellent customer service and high-quality work. Highly recommend ShieldPro for any tinting needs.", author: "David R." },
];
