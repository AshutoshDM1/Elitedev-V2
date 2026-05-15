import { ISectionProps } from './Section.types';
import { cn } from '@/lib/utils';

const Section = ({ className, children }: ISectionProps) => {
  return (
    <div className={cn("w-full md:max-w-[700px] mx-auto border-x border-edge ", className)}>{children}</div>
  );
};

export default Section;
