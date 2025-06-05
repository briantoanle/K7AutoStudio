
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES_OFFERED, PROJECTS_DATA, CONTACT_DETAILS, ABOUT_US_CONTENT, TESTIMONIALS, APP_NAME } from '@/lib/constants';
import type { Service, Project, Testimonial } from '@/types';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Sparkles, ShieldCheck, Quote, Star, MessageSquareText } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground animate-fade-in">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://placehold.co/1920x1080.png" 
            alt="Abstract background" 
            layout="fill" 
            objectFit="cover" 
            data-ai-hint="abstract texture"
            priority
          />
        </div>
        <div className="container relative text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headline">
            Protect & Personalize Your Ride with {APP_NAME}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Expert window tinting and paint protection film services to keep your vehicle looking its best.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 animate-fade-in animation-delay-200">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">Our Premier Services</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            High-quality solutions for automotive protection and aesthetics.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES_OFFERED.map((service: Service) => (
              <Card key={service.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Image 
                    src={service.image} 
                    alt={service.name} 
                    width={600} 
                    height={400} 
                    className="w-full h-64 object-cover"
                    data-ai-hint={service.imageHint} 
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <service.icon className="h-8 w-8 text-primary mr-3" />
                    <CardTitle className="text-2xl font-semibold">{service.name}</CardTitle>
                  </div>
                  <CardDescription className="mb-4 text-base">{service.description}</CardDescription>
                  <ul className="space-y-2 text-sm">
                    {service.features.slice(0,3).map(feature => (
                       <li key={feature} className="flex items-center">
                         <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                         {feature}
                       </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="text-primary p-0">
                    <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase Preview */}
      <section className="py-16 md:py-24 bg-muted/50 animate-fade-in animation-delay-400">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">See Our Work</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            A glimpse into the quality and precision we bring to every project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_DATA.slice(0, 3).map((project: Project) => (
              <Link href="/gallery" key={project.id} className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image 
                  src={project.imageUrl} 
                  alt={project.name} 
                  width={600} 
                  height={400} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.imageHint}
                />
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-lg truncate group-hover:text-primary">{project.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/gallery">View Full Gallery <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Us Summary */}
      <section className="py-16 md:py-24 animate-fade-in animation-delay-600">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">About {APP_NAME}</h2>
              <p className="text-lg text-muted-foreground mb-4">
                {ABOUT_US_CONTENT.mission.substring(0, 150)}...
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {ABOUT_US_CONTENT.teamIntro.substring(0,150)}...
              </p>
              <Button asChild>
                <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Our workshop" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-xl"
                data-ai-hint="workshop interior"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground animate-fade-in animation-delay-800">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial: Testimonial, index: number) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold text-right">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action / Contact Snippet */}
      <section className="py-16 md:py-24 animate-fade-in animation-delay-1000">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Ready to Upgrade Your Vehicle?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us today for a free quote or to schedule your appointment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5 text-primary" />
              <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-primary transition-colors">{CONTACT_DETAILS.phone}</a>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5 text-primary" />
               <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-primary transition-colors">{CONTACT_DETAILS.email}</a>
            </div>
          </div>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/book-appointment">Book Your Appointment Now</Link>
          </Button>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 md:py-24 bg-muted/30 animate-fade-in animation-delay-1200">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline">Share Your Experience with {APP_NAME}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Your feedback helps us grow and improve. Let us know how we did!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button asChild size="lg">
              <Link href={CONTACT_DETAILS.mapLink} target="_blank" rel="noopener noreferrer">
                <Star className="mr-2 h-5 w-5" />
                Leave a Positive Review
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                <MessageSquareText className="mr-2 h-5 w-5" />
                Provide Feedback
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
