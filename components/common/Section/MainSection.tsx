import { ISectionProps } from './Section.types';
import { cn } from '@/lib/utils';

export const SectionMain = ({ className, children }: ISectionProps) => {
  return (
    <div className={cn(className, 'max-w-screen overflow-x-hidden"')}>{children}</div>
  );
};
