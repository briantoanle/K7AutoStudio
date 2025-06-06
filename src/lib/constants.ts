
import type { NavItem, Service, Project, Testimonial, TintLine } from '@/types';
import { Car, ShieldCheck, Sparkles, Image as ImageIcon, Users, Phone, Mail, MapPin, CalendarDays, Menu, Layers, Star, MessageSquareText, SlidersHorizontal, SunMedium, BarChartBig, EyeOff } from 'lucide-react';

export const APP_NAME = 'K7 AutoStudio';

export const NAV_LINKS: NavItem[] = [
  { href: '/', label: 'Home', icon: Car },
  { href: '/services', label: 'Services', icon: Layers },
  { href: '/services/tint-comparison', label: 'Tint Comparison', icon: SlidersHorizontal },
  { href: '/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/about', label: 'About Us', icon: Users },
  { href: '/contact', label: 'Contact', icon: Mail },
  { href: '/book-appointment', label: 'Book Appointment', icon: CalendarDays, isButton: true },
];

export const CONTACT_DETAILS = {
  phone: '(555) 123-4567',
  email: 'contact@k7autostudio.com',
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
    icon: EyeOff, // Changed from Sparkles/EyeSlash, more specific to tint reducing visibility/glare
    image: 'https://placehold.co/600x400.png',
    imageHint: 'car window tint',
    features: ['UV Ray Blockage', 'Heat Reduction', 'Glare Reduction', 'Enhanced Privacy', 'Variety of Shades'],
  },
  {
    id: 'ppf',
    name: 'Paint Protection Film (PPF)',
    description: 'Protect your vehicle\'s paint from scratches, chips, and environmental damage with our premium PPF solutions. Virtually invisible and self-healing.',
    icon: ShieldCheck,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'car paint protection',
    features: ['Scratch & Chip Resistance', 'Self-Healing Technology', 'UV Protection', 'Stain Resistance', 'Optical Clarity'],
  },
];

export const NO_TINT_GLARE_REDUCTION = 8; // Baseline glare reduction for clear glass

export const TINT_LINES: TintLine[] = [
  {
    id: 'clear-glass',
    name: 'Clear Un-tinted Glass (Baseline)',
    description: 'Represents standard automotive factory glass with no aftermarket tint applied. Use this as a baseline to see the benefits of window tinting.',
    vltRange: '88%', // Typical VLT for clear automotive glass
    heatRejection: 20, // Typical TSER for clear glass
    uvProtection: 40, // Typical UV block for clear, non-laminated auto glass
    glareReduction: NO_TINT_GLARE_REDUCTION, // Minimal glare reduction
    clarity: 'Standard',
    priceTier: 'N/A',
    features: ['Baseline factory visibility', 'Minimal heat rejection compared to tinted films', 'Minimal UV protection compared to tinted films', 'Minimal glare reduction compared to tinted films'],
    sampleImage: 'https://placehold.co/500x300/f0f0f0/333333.png', 
    imageHint: 'clear car window untinted',
  },
  {
    id: 'carbon',
    name: 'Carbon Series',
    description: 'Offers good heat rejection and UV protection with a stylish, non-reflective finish. A popular choice for a balance of performance and value.',
    vltRange: '5%, 20%, 35%, 50%',
    heatRejection: 55, // Total Solar Energy Rejected (TSER)
    uvProtection: 99,
    glareReduction: 70, // Max glare reduction (e.g., with 5% VLT)
    clarity: 'Good',
    priceTier: 'Standard',
    features: ['Non-metal, non-fading carbon construction', 'Blocks 99% of harmful UV rays', 'Reduces heat and uncomfortable glare', 'Durable scratch-resistant coating'],
    sampleImage: 'https://placehold.co/500x300/333333/eeeeee.png', 
    imageHint: 'dark car window',
  },
  {
    id: 'ceramic',
    name: 'Ceramic IR Series',
    description: 'Advanced ceramic particle technology for superior infrared (IR) heat rejection without signal interference. Excellent clarity and durability.',
    vltRange: '5%, 15%, 30%, 50%, 70%',
    heatRejection: 75, // Higher TSER due to IR blocking
    uvProtection: 99.9,
    glareReduction: 80, // Max glare reduction (e.g., with 5% VLT)
    clarity: 'Better',
    priceTier: 'Premium',
    features: ['Exceptional IR heat rejection for cooler interiors', 'No electronic signal interference (GPS, phone)', 'Outstanding optical clarity', 'Long-lasting color stability'],
    sampleImage: 'https://placehold.co/500x300/555555/dddddd.png', 
    imageHint: 'medium car window',
  },
  {
    id: 'crystalline',
    name: 'Crystalline Pro Series',
    description: 'Top-of-the-line, multi-layer optical film that rejects more heat than many dark films, even in lighter shades. Maintains your car\'s original appearance while providing maximum comfort.',
    vltRange: '20%, 40%, 50%, 60%, 70%, 90%', // Note: 90% VLT is very light
    heatRejection: 90, // Very high TSER, especially strong IR rejection
    uvProtection: 99.9,
    glareReduction: 65, // Max glare reduction (likely for 20% VLT in this series, lighter VLTs will have less)
    clarity: 'Best',
    priceTier: 'Ultra-Premium',
    features: ['Proprietary multilayer optical film technology', 'Highest heat rejection available, even in light tints', 'Preserves original vehicle aesthetics', 'Non-metallized, zero signal interference', 'Superior UV protection (SPF 1000+)'],
    sampleImage: 'https://placehold.co/500x300/aaaaaa/333333.png', 
    imageHint: 'light car window',
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
  mission: `Our mission at ${APP_NAME} is to provide top-tier automotive protection and enhancement services, utilizing the best materials and skilled technicians to ensure every vehicle leaves looking its best and fully protected.`,
  values: ["Quality Craftsmanship", "Customer Satisfaction", "Integrity & Honesty", "Continuous Improvement", "Attention to Detail"],
  teamIntro: `Our team consists of certified professionals passionate about cars and dedicated to delivering exceptional results. With years of experience in tinting and PPF application, we treat every vehicle as if it were our own.`
};

export const TESTIMONIALS = [
  { quote: `${APP_NAME} did an amazing job on my car's tint. Professional, quick, and flawless!`, author: "Alex P." },
  { quote: "The PPF installation was perfect. You can't even tell it's there, and I feel much better knowing my paint is protected.", author: "Maria K." },
  { quote: `Excellent customer service and high-quality work. Highly recommend ${APP_NAME} for any tinting needs.`, author: "David R." },
];

// Using EyeOff from lucide-react for tinting service icon
// This ensures the icon is correctly assigned if it wasn't directly in the array definition.
const tintingService = SERVICES_OFFERED.find(s => s.id === 'tinting');
if (tintingService && tintingService.icon !== EyeOff) { // Check to avoid unnecessary assignment if already correct
  tintingService.icon = EyeOff;
}

// Also, ensure the BarChart icon is BarChartBig if that's what was intended in tint-comparison page
// (This is just a check; BarChart is a valid icon, but BarChartBig was used elsewhere - ensuring consistency if intended)
// However, the error was specifically about EyeSlash. Let's stick to the primary fix.
// The import was changed to BarChartBig for the tint comparison page usage.
// Other icons like SunMedium are valid.
