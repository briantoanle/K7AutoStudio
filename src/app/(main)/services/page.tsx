import Image from 'next/image';
import { SERVICES_OFFERED } from '@/lib/constants';
import type { Service } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/ui/page-header';
import { CheckCircle, Layers } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Expert Services"
        description="Discover the range of professional automotive protection and enhancement services we offer. Quality and precision in every job."
        icon={Layers}
      />
      <section className="py-12 md:py-20 animate-fade-in">
        <div className="container">
          <div className="grid gap-12 lg:gap-16">
            {SERVICES_OFFERED.map((service: Service, index: number) => (
              <Card key={service.id} className={`overflow-hidden shadow-lg w-full animate-fade-in animation-delay-${index * 200}`}>
                <div className={`grid md:grid-cols-2 items-center gap-8 ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`p-0 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={800}
                      height={600}
                      className="w-full h-auto max-h-[400px] object-cover md:rounded-lg"
                      data-ai-hint={service.imageHint}
                    />
                  </div>
                  <div className={`p-6 md:p-8 ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center mb-2">
                        <service.icon className="h-10 w-10 text-primary mr-3" />
                        <CardTitle className="text-3xl font-bold font-headline">{service.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <CardDescription className="text-lg mb-6">
                        {service.description}
                      </CardDescription>
                      <h4 className="font-semibold text-xl mb-3">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild size="lg">
                        <Link href="/book-appointment">Book This Service</Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
