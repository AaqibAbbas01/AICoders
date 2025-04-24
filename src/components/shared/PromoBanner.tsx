import React, { useState } from 'react';
import Link from 'next/link';

interface PromoBannerProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  bannerColor?: 'primary' | 'secondary' | 'accent' | 'dark';
  dismissable?: boolean;
  className?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  title,
  description,
  ctaText = 'Learn More',
  ctaLink = '#',
  bannerColor = 'primary',
  dismissable = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const colorClasses = {
    primary: 'bg-primary-600 text-white',
    secondary: 'bg-secondary-600 text-white',
    accent: 'bg-accent-600 text-white',
    dark: 'bg-gray-900 text-white',
  };

  return (
    <div 
      className={`py-3 px-4 md:px-6 ${colorClasses[bannerColor]} ${className} relative`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center">
          <h3 className="font-bold text-lg mr-2">{title}</h3>
          {description && <p className="text-sm md:ml-2">{description}</p>}
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          {ctaText && ctaLink && (
            <Link 
              href={ctaLink}
              className="text-sm font-semibold bg-white text-gray-900 hover:bg-gray-100 px-4 py-1.5 rounded-md transition duration-200"
            >
              {ctaText}
            </Link>
          )}
          {dismissable && (
            <button 
              onClick={() => setIsVisible(false)}
              className="ml-4 text-white opacity-70 hover:opacity-100"
              aria-label="Dismiss banner"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromoBanner; 