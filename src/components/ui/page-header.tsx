import type { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export function PageHeader({ title, description, icon: Icon }: PageHeaderProps) {
  return (
    <section className="py-12 md:py-16 bg-muted/30 border-b animate-fade-in">
      <div className="container text-center">
        {Icon && <Icon className="h-12 w-12 text-primary mx-auto mb-4" />}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-headline">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
