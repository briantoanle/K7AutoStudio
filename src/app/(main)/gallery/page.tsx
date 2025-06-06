import Image from 'next/image';
import { PROJECTS_DATA } from '@/lib/constants';
import type { Project } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';

export default function GalleryPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsModalOpen(false);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

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
                <Card key={project.id} className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in animation-delay-${index * 100} cursor-pointer`} onClick={() => openModal(project)}>
                  <CardHeader className="p-0">
                    <Image
                      src={project.images && project.images.length > 0 ? project.images[0] : project.imageUrl} // Use the first image from the array if available
                      alt={`${project.name} image 1`}
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

      {selectedProject && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] max-h-[90vh] overflow-hidden p-0">
            <div className="relative w-full h-full flex items-center justify-center">
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <>
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.name} image ${currentImageIndex + 1}`}
                    width={1000}
                    height={700}
                    className="object-contain max-h-[80vh] w-full"
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <Button className="absolute left-2 top-1/2 transform -translate-y-1/2" variant="ghost" size="icon" onClick={prevImage}>
                        <ChevronLeft className="h-6 w-6" />
                        <span className="sr-only">Previous image</span>
                      </Button>
                      <Button className="absolute right-2 top-1/2 transform -translate-y-1/2" variant="ghost" size="icon" onClick={nextImage}>
                        <ChevronRight className="h-6 w-6" />
                        <span className="sr-only">Next image</span>
                      </Button>
                    </>
                  )}
                </>
              ) : (
                <p className="text-center text-lg text-muted-foreground">No additional images available for this project.</p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
