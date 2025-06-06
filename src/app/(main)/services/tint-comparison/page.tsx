
"use client";

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { TINT_LINES, NO_TINT_GLARE_REDUCTION } from '@/lib/constants';
import type { TintLine } from '@/types';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, SlidersHorizontal, Sun, Eye, Shield, Award, BarChartBig, Info } from 'lucide-react';
import { Slider } from "@/components/ui/slider";

const PerformanceStat = ({ label, value, icon: Icon, unit = "%" }: { label: string; value: number; icon: React.ElementType, unit?: string }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between text-sm font-medium">
      <span className="flex items-center"><Icon className="h-4 w-4 mr-2 text-primary" />{label}</span>
      <span>{value}{unit}</span>
    </div>
    <Progress value={value} aria-label={`${label}: ${value}${unit}`} className="h-2" />
  </div>
);

const getOpacityForVlt = (vlt: number | null): number => {
  if (vlt === null || vlt > 90) return 0.05; // Very light for clear or almost clear
  if (vlt >= 80) return 0.1; 
  if (vlt >= 70) return 0.25;
  if (vlt >= 50) return 0.45;
  if (vlt >= 35) return 0.60;
  if (vlt >= 30) return 0.65;
  if (vlt >= 20) return 0.75;
  if (vlt >= 15) return 0.82;
  if (vlt <= 5) return 0.90;   // Darkest
  return 0.1; // Default for anything else
};

export default function TintComparisonPage() {
  const [selectedTintId, setSelectedTintId] = useState<string>(TINT_LINES[0]?.id || ''); // Default to first option (Clear Glass)
  const [selectedVltIndex, setSelectedVltIndex] = useState<number>(0);

  const selectedTint = useMemo(() => {
    return TINT_LINES.find(tint => tint.id === selectedTintId) || TINT_LINES[0];
  }, [selectedTintId]);

  const availableVlts = useMemo(() => {
    if (!selectedTint) return [];
    return selectedTint.vltRange
      .split(',')
      .map(v => parseInt(v.replace('%', '').trim()))
      .sort((a, b) => a - b); // Sort from smallest (darkest) to largest (lightest) VLT
  }, [selectedTint]);

  const currentVlt = useMemo(() => {
    if (!availableVlts.length || selectedVltIndex >= availableVlts.length) return null;
    return availableVlts[selectedVltIndex];
  }, [availableVlts, selectedVltIndex]);

  const displayedGlareReduction = useMemo(() => {
    if (!selectedTint || currentVlt === null) return 0;
    if (selectedTint.id === 'clear-glass') {
      return selectedTint.glareReduction;
    }

    const darkestVltInLine = Math.min(...availableVlts);
    const lightestVltInLine = Math.max(...availableVlts);
    
    const maxGlareReductionForLine = selectedTint.glareReduction;
    // Ensure even the lightest tint offers some glare reduction, more than clear glass but not excessively low
    const minGlareReductionForThisTintSeries = Math.max(NO_TINT_GLARE_REDUCTION + 7, 15); 

    if (darkestVltInLine === lightestVltInLine || availableVlts.length === 1) { // Single VLT option for this tint line
      return maxGlareReductionForLine;
    }

    const vltSpan = lightestVltInLine - darkestVltInLine;
    if (vltSpan === 0) return maxGlareReductionForLine; // Avoid division by zero if min and max are same somehow

    // Percentage through the VLT range (0 for darkest, 1 for lightest)
    const percentageThroughRange = (currentVlt - darkestVltInLine) / vltSpan;
    
    let glare = maxGlareReductionForLine - (percentageThroughRange * (maxGlareReductionForLine - minGlareReductionForThisTintSeries));
    return Math.max(NO_TINT_GLARE_REDUCTION, Math.round(glare)); // Ensure it's at least clear glass level
  }, [selectedTint, currentVlt, availableVlts]);

  useEffect(() => {
    // When selectedTint changes, reset the slider to its first VLT option
    if (selectedTint) {
      setSelectedVltIndex(0); 
    }
  }, [selectedTint]);
  
  const showSlider = availableVlts.length > 1 && selectedTint.id !== 'clear-glass';

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
                <SelectValue placeholder="Select a Tint Series or Baseline" />
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
                  {selectedTint.id !== 'clear-glass' && (
                    <p className="text-sm text-muted-foreground text-center mb-1">Price Tier: <span className="font-semibold text-primary">{selectedTint.priceTier}</span></p>
                  )}
                  <p className="text-sm text-muted-foreground text-center mb-4">Available VLTs: {selectedTint.vltRange}</p>
                  
                  <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden shadow-lg mb-2 group">
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
                      style={{ opacity: getOpacityForVlt(currentVlt) }}
                      aria-hidden="true"
                    ></div>
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      Visual Representation
                    </div>
                  </div>

                  {showSlider && (
                    <div className="my-3 w-full max-w-xs mx-auto">
                      <div className="flex items-center justify-between mb-1">
                        <label htmlFor="vltSlider" className="block text-sm font-medium text-muted-foreground">
                          Adjust Visual Tint:
                        </label>
                        <span className="text-sm font-semibold text-primary">
                          {currentVlt !== null ? `${currentVlt}% VLT` : 'N/A'}
                        </span>
                      </div>
                      <Slider
                        id="vltSlider"
                        min={0}
                        max={availableVlts.length - 1}
                        step={1}
                        value={[selectedVltIndex]}
                        onValueChange={(value: number[]) => {
                            setSelectedVltIndex(value[0]);
                        }}
                        className="w-full"
                        aria-label="Adjust tint visual darkness"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1 px-1">
                        <span>Darkest</span>
                        <span>Lightest</span>
                      </div>
                    </div>
                  )}

                  <p className="text-muted-foreground text-center text-sm italic mt-2">
                    Visual opacity simulates selected VLT. Actual appearance may vary.
                  </p>
                </div>

                {/* Right Side: Details and Stats */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary flex items-center"><BarChartBig className="h-6 w-6 mr-2" />Performance & Features</h3>
                  <CardDescription className="text-base mb-6">{selectedTint.description}</CardDescription>
                  
                  <div className="space-y-4 mb-6">
                    <PerformanceStat label="Heat Rejection (TSER)" value={selectedTint.heatRejection} icon={Sun} />
                    <PerformanceStat label="UV Protection" value={selectedTint.uvProtection} icon={Shield} />
                    <PerformanceStat label="Glare Reduction" value={displayedGlareReduction} icon={Eye} />
                  </div>
                  
                  <div className="mb-1 text-xs text-muted-foreground flex items-start">
                    <Info size={14} className="mr-1.5 mt-0.5 shrink-0" />
                    <span>TSER and UV Protection values are characteristic of the selected tint series. Glare Reduction updates with VLT. 'Clear Un-tinted Glass' provides baseline factory values.</span>
                  </div>
                  
                  {selectedTint.id !== 'clear-glass' && (
                    <div className="my-6">
                      <h4 className="font-semibold mb-2 text-md flex items-center"><Award className="h-5 w-5 mr-2 text-primary" />Clarity: <span className="ml-1 font-normal text-foreground">{selectedTint.clarity}</span></h4>
                    </div>
                  )}

                  {selectedTint.features && selectedTint.features.length > 0 && (
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
                  )}
                  <CardFooter className="pt-8 px-0">
                    <Button asChild size="lg" className="w-full md:w-auto" disabled={selectedTint.id === 'clear-glass'}>
                      <Link href="/book-appointment">Get a Quote for {selectedTint.name.replace(' (Baseline)','')} </Link>
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
