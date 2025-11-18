import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "", fullWidth = false }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${className}`}>
      <div className={`mx-auto px-6 md:px-12 ${fullWidth ? 'w-full' : 'max-w-7xl'}`}>
        {children}
      </div>
    </section>
  );
};
