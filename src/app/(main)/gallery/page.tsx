import Image from 'next/image';
import { PROJECTS_DATA } from '@/lib/constants';
import type { Project } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/ui/page-header';
import { ImageIcon } from 'lucide-react';

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Project Gallery"
        description="Browse through a selection of our recently completed projects. See the ShieldPro difference for yourself."
        icon={ImageIcon}
      />
      <section className="py-12 md:py-20 animate-fade-in">
        <div className="container">
          {PROJECTS_DATA.length === 0 ? (
            <p className="text-center text-lg text-muted-foreground">
              Our gallery is currently being updated. Check back soon to see our latest work!
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {PROJECTS_DATA.map((project: Project, index: number) => (
                <Card key={project.id} className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in animation-delay-${index * 100}`}>
                  <CardHeader className="p-0">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                      data-ai-hint={project.imageHint}
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-semibold mb-2">{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
