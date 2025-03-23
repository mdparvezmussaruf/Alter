
import React from 'react';
import { cn } from '@/lib/utils';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, className }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn("social-icon", className)}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
