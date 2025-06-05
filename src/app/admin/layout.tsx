import Link from 'next/link';
import { Shield } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link href="/admin/upload" className="flex items-center gap-2" aria-label={`${APP_NAME} Admin`}>
            <Shield className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl">{APP_NAME} Admin</span>
          </Link>
          <Button variant="outline" asChild>
            <Link href="/">View Public Site</Link>
          </Button>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="border-t bg-background py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {APP_NAME} Admin Panel.</p>
        </div>
      </footer>
    </div>
  );
}
