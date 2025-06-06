import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
