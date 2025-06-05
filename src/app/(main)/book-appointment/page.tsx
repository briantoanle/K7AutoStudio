import { AppointmentForm } from '@/components/forms/appointment-form';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

export default function BookAppointmentPage() {
  return (
    <>
      <PageHeader
        title="Book an Appointment"
        description="Schedule your service with us. Fill out the form below with your preferences, and we'll get back to you to confirm."
        icon={CalendarDays}
      />
      <section className="py-12 md:py-20 animate-fade-in">
        <div className="container max-w-3xl">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-headline">Appointment Request Form</CardTitle>
              <CardDescription>
                Please provide your details and preferred service time. We'll contact you to confirm your booking.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <AppointmentForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
