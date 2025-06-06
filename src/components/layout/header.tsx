import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield } from 'lucide-react';
import { NAV_LINKS, APP_NAME } from '@/lib/constants';
import type { NavItem } from '@/types';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label={`${APP_NAME} home page`}>
          <Shield className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl">{APP_NAME}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((item: NavItem) =>
            item.isButton ? (
              <Button
                key={item.label}
                asChild
                variant={item.label === 'Book Appointment' ? undefined : 'default'}
                className={item.label === 'Book Appointment' ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}
                size="sm"
              >
                <Link href={item.href}>
                  {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                  {item.label}
                </Link>
              </Button>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                {NAV_LINKS.map((item: NavItem) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 rounded-md p-3 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
