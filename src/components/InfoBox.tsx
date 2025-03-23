
import React from 'react';
import { cn } from '@/lib/utils';

interface InfoBoxProps {
  content: string;
  className?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ content, className }) => {
  return (
    <div className={cn("info-box stagger-item animate-fade-in", className)}>
      <p className="text-base md:text-lg">{content}</p>
    </div>
  );
};

export default InfoBox;
