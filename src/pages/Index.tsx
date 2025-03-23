
import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import CustomSelect from '@/components/CustomSelect';
import InfoBox from '@/components/InfoBox';
import SocialIcon from '@/components/SocialIcon';
import productData from '@/data/productData';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [infoContent, setInfoContent] = useState<string>('Select a category to view details...');
  const [itemOptions, setItemOptions] = useState<{value: string; label: string}[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Categories for the first dropdown
  const categoryOptions = [
    { value: 'laptops', label: 'Laptops' },
    { value: 'phones', label: 'Phones' },
    { value: 'tablets', label: 'Tablets' }
  ];
  
  // Handle category selection
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedItem('');
    
    if (category && productData[category]) {
      setInfoContent(productData[category].info);
      setItemOptions(productData[category].items);
    } else {
      setInfoContent('Select a category to view details...');
      setItemOptions([]);
    }
  };
  
  // Handle item selection
  const handleItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(e.target.value);
  };
  
  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
      style={{
        backgroundImage: `url('/lovable-uploads/21a34fed-db35-4448-aa2a-9f6e16786692.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div 
        className={`w-full max-w-md mx-auto glass-panel p-8 md:p-10 rounded-xl animate-fade-in ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <h1 className="tech-heading text-center stagger-item animate-fade-in">
          Portal Tech Co.
        </h1>
        
        <CustomSelect
          options={categoryOptions}
          placeholder="Select items"
          onChange={handleCategoryChange}
          value={selectedCategory}
          disabled={!isLoaded}
        />
        
        <InfoBox 
          content={infoContent} 
          className={`animate-float ${selectedCategory ? 'opacity-100' : 'opacity-70'}`}
        />
        
        <CustomSelect
          options={itemOptions}
          placeholder="See available items"
          onChange={handleItemChange}
          value={selectedItem}
          disabled={!selectedCategory || !isLoaded}
        />
        
        <div className="social-container">
          <SocialIcon 
            href="https://instagram.com" 
            icon={<Instagram size={20} />} 
            className="stagger-item animate-fade-in"
          />
          <SocialIcon 
            href="https://facebook.com" 
            icon={<Facebook size={20} />} 
            className="stagger-item animate-fade-in"
          />
          <SocialIcon 
            href="https://twitter.com" 
            icon={<Twitter size={20} />} 
            className="stagger-item animate-fade-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
