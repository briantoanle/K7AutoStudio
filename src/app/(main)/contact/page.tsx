import { CONTACT_DETAILS } from '@/lib/constants';
import { InquiryForm } from '@/components/forms/inquiry-form';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="Have questions or want to discuss your project? We're here to help. Reach out to us through any of the methods below."
        icon={Mail}
      />
      <section className="py-12 md:py-20 animate-fade-in">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info Section */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-headline">
                    <Phone className="h-6 w-6 mr-3 text-primary" /> Contact Directly
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-accent" />
                    <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-primary transition-colors">
                      {CONTACT_DETAILS.phone}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-accent" />
                    <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-primary transition-colors">
                      {CONTACT_DETAILS.email}
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-headline">
                    <MapPin className="h-6 w-6 mr-3 text-primary" /> Visit Our Shop
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-accent shrink-0 mt-1" />
                    <a href={CONTACT_DETAILS.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {CONTACT_DETAILS.address}
                    </a>
                  </p>
                  <div className="mt-4 pt-4 border-t">
                     <Image 
                        src="https://placehold.co/400x250.png" 
                        alt="Location Map Preview" 
                        width={400} 
                        height={250} 
                        className="rounded-md w-full object-cover"
                        data-ai-hint="map location"
                      />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-headline">
                    <Clock className="h-6 w-6 mr-3 text-primary" /> Opening Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {CONTACT_DETAILS.openingHours.map(item => (
                      <li key={item.day} className="flex justify-between">
                        <span>{item.day}:</span>
                        <span>{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Form Section */}
            <div className="lg:col-span-3">
              <Card className="p-6 md:p-8 shadow-xl">
                <CardHeader className="mb-4 p-0">
                  <CardTitle className="text-3xl font-bold font-headline">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
                </CardHeader>
                <CardContent className="p-0">
                  <InquiryForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
