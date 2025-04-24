import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeading({ children, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('space-y-1.5 mb-6', className)}>
      <h2 className="text-2xl font-semibold tracking-tight">{children}</h2>
      {description && (
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}