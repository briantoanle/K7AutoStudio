import { ProjectUploadForm } from '@/components/forms/project-upload-form';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadCloud } from 'lucide-react';

// This is a simplified admin page. In a real application, this route would be protected.
export default function AdminUploadPage() {
  return (
    <>
      <PageHeader
        title="Upload New Project"
        description="Add a new completed project to the gallery. Fill in the details and upload an image."
        icon={UploadCloud}
      />
      <section className="py-12 md:py-20 animate-fade-in">
        <div className="container max-w-2xl">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-headline">New Project Details</CardTitle>
              <CardDescription>
                Showcase your latest work by adding it to the project gallery.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <ProjectUploadForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
