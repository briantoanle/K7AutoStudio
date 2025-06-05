
"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { TINT_LINES } from '@/lib/constants';
import type { TintLine } from '@/types';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, SlidersHorizontal, Sun, Wind, Eye, Shield, Award, BarChartBig } from 'lucide-react';

const PerformanceStat = ({ label, value, icon: Icon }: { label: string; value: number; icon: React.ElementType }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between text-sm font-medium">
      <span className="flex items-center"><Icon className="h-4 w-4 mr-2 text-primary" />{label}</span>
      <span>{value}%</span>
    </div>
    <Progress value={value} aria-label={`${label}: ${value}%`} className="h-2" />
  </div>
);

export default function TintComparisonPage() {
  const [selectedTintId, setSelectedTintId] = useState<string>(TINT_LINES[0]?.id || '');

  const selectedTint = useMemo(() => {
    return TINT_LINES.find(tint => tint.id === selectedTintId) || TINT_LINES[0];
  }, [selectedTintId]);

  const getVltOpacity = (vltRange: string) => {
    const vlts = vltRange.split(',').map(v => parseInt(v.replace('%', '').trim()));
    if (!vlts.length) return 1;
    // For visual, let's pick the darkest (lowest VLT) as it's most visually distinct for "tint"
    const darkestVlt = Math.min(...vlts); 
    if (darkestVlt <= 5) return 0.85; // Very dark
    if (darkestVlt <= 20) return 0.7;
    if (darkestVlt <= 35) return 0.55;
    if (darkestVlt <= 50) return 0.4;
    if (darkestVlt <= 70) return 0.25;
    return 0.1; // Almost clear
  };
  

  return (
    <>
      <PageHeader
        title="Interactive Tint Comparator"
        description="Compare our premium window tint lines to find the perfect match for your needs and style. Select a tint series to see its benefits."
        icon={SlidersHorizontal}
      />
      <section className="py-12 md:py-20 animate-fade-in">
        <div className="container">
          <div className="mb-10 max-w-xl mx-auto">
            <Select onValueChange={setSelectedTintId} defaultValue={selectedTintId}>
              <SelectTrigger className="text-lg py-6">
                <SelectValue placeholder="Select a Tint Series" />
              </SelectTrigger>
              <SelectContent>
                {TINT_LINES.map((tint: TintLine) => (
                  <SelectItem key={tint.id} value={tint.id} className="text-md py-2">
                    {tint.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedTint && (
            <Card className="shadow-xl overflow-hidden animate-fade-in animation-delay-200">
              <div className="grid md:grid-cols-2">
                {/* Left Side: Visuals and Key Info */}
                <div className="p-6 md:p-8 bg-muted/30 flex flex-col items-center justify-center">
                  <CardTitle className="text-3xl font-bold mb-2 text-center font-headline">{selectedTint.name}</CardTitle>
                  <p className="text-sm text-muted-foreground text-center mb-1">Price Tier: <span className="font-semibold text-primary">{selectedTint.priceTier}</span></p>
                  <p className="text-sm text-muted-foreground text-center mb-6">Available VLTs: {selectedTint.vltRange}</p>
                  
                  <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-lg mb-6 group">
                    <Image
                      src={selectedTint.sampleImage}
                      alt={`${selectedTint.name} sample`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={selectedTint.imageHint}
                    />
                    <div 
                      className="absolute inset-0 bg-black transition-opacity duration-300" 
                      style={{ opacity: getVltOpacity(selectedTint.vltRange) }}
                      aria-hidden="true"
                    ></div>
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      Visual Representation
                    </div>
                  </div>
                  <p className="text-muted-foreground text-center text-sm italic">
                    Visual opacity simulates the darkest VLT option available in this series.
                  </p>
                </div>

                {/* Right Side: Details and Stats */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary flex items-center"><BarChartBig className="h-6 w-6 mr-2" />Performance & Features</h3>
                  <CardDescription className="text-base mb-6">{selectedTint.description}</CardDescription>
                  
                  <div className="space-y-4 mb-6">
                    <PerformanceStat label="Heat Rejection (TSER)" value={selectedTint.heatRejection} icon={Sun} />
                    <PerformanceStat label="UV Protection" value={selectedTint.uvProtection} icon={Shield} />
                    <PerformanceStat label="Glare Reduction" value={selectedTint.glareReduction} icon={Eye} />
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-md flex items-center"><Award className="h-5 w-5 mr-2 text-primary" />Clarity: <span className="ml-1 font-normal text-foreground">{selectedTint.clarity}</span></h4>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-md flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-primary" />Key Benefits:</h4>
                    <ul className="space-y-1.5 text-sm list-inside">
                      {selectedTint.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <CardFooter className="pt-8 px-0">
                    <Button asChild size="lg" className="w-full md:w-auto">
                      <Link href="/book-appointment">Get a Quote for {selectedTint.name}</Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          )}
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4 font-headline">Need Help Choosing?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Our experts are here to guide you. Contact us for a personalized consultation or visit our shop to see samples.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
