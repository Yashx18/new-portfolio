import { cn } from '@/lib/utils';
import{ ReactNode, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
}

export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section className="w-full p-6" {...props}>
      <div className={cn('flex  flex-col items-start gap-4', className)}>{children}</div>
    </section>
  );
};
