import Link from 'next/link';
import { CONTACT_DETAILS, APP_NAME } from '@/lib/constants';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label={`${APP_NAME} home page`}>
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl">{APP_NAME}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for automotive window tinting and paint protection film.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-primary transition-colors">
                  {CONTACT_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-primary transition-colors">
                  {CONTACT_DETAILS.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <a href={CONTACT_DETAILS.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {CONTACT_DETAILS.address}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Opening Hours</h3>
            <ul className="space-y-1 text-sm">
              {CONTACT_DETAILS.openingHours.map(item => (
                <li key={item.day} className="flex justify-between">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
