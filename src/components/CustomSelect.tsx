
import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CustomSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>(
  ({ options, placeholder = "Select option", className, ...props }, ref) => {
    return (
      <div className="dropdown-container stagger-item animate-fade-in">
        <select 
          ref={ref}
          className={cn("custom-select", className)}
          {...props}
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="dropdown-arrow" />
      </div>
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
