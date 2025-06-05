import Image from 'next/image';
import { ABOUT_US_CONTENT, APP_NAME, TESTIMONIALS } from '@/lib/constants';
import type { Testimonial } from '@/types';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Users2, Quote, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`About ${APP_NAME}`}
        description="Learn more about our commitment to quality, our values, and the passionate team behind our services."
        icon={Users}
      />
      <section className="py-12 md:py-20 animate-fade-in">
        <div className="container">
          {/* Mission and Values Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 font-headline flex items-center">
                <Target className="h-8 w-8 mr-3 text-primary" /> Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {ABOUT_US_CONTENT.mission}
              </p>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Team working on a car"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="team workshop"
              />
            </div>
          </div>

          <div className="mb-16 animate-fade-in animation-delay-400">
            <h2 className="text-3xl font-bold mb-8 text-center font-headline flex items-center justify-center">
              <Award className="h-8 w-8 mr-3 text-primary" /> Our Core Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ABOUT_US_CONTENT.values.map((value, index) => (
                <Card key={index} className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
                  <Shield className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-primary">{value}</h3>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16 text-center animate-fade-in animation-delay-600">
            <h2 className="text-3xl font-bold mb-6 font-headline flex items-center justify-center">
              <Users2 className="h-8 w-8 mr-3 text-primary" /> Meet Our Team (Intro)
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {ABOUT_US_CONTENT.teamIntro} While we don't showcase individual profiles here, rest assured our team is composed of dedicated experts committed to excellence.
            </p>
            {/* Placeholder for future team member cards if needed */}
          </div>
          
          {/* Testimonials Section */}
          <section className="py-16 animate-fade-in animation-delay-800">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Client Testimonials</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial: Testimonial, index: number) => (
                  <Card key={index} className="bg-muted/50">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-primary mb-4" />
                      <p className="mb-4 italic text-foreground/90">"{testimonial.quote}"</p>
                      <p className="font-semibold text-right text-primary">- {testimonial.author}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

        </div>
      </section>
    </>
  );
}
