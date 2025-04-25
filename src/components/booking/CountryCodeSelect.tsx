'use client';

import { useState } from 'react';

type CountryCode = {
  code: string;
  flag: string;
  name: string;
};

const countryCodes: CountryCode[] = [
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
];

interface CountryCodeSelectProps {
  value: string;
  onChange: (code: string) => void;
}

export default function CountryCodeSelect({ value, onChange }: CountryCodeSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCountry = countryCodes.find(country => country.code === value) || countryCodes[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-md text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <span className="text-lg">{selectedCountry.flag}</span>
        <span>{selectedCountry.code}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {countryCodes.map((country) => (
            <button
              key={country.code}
              type="button"
              className="flex items-center space-x-2 w-full px-4 py-2 text-white hover:bg-gray-700 focus:outline-none"
              onClick={() => {
                onChange(country.code);
                setIsOpen(false);
              }}
            >
              <span className="text-lg">{country.flag}</span>
              <span>{country.code}</span>
              <span className="text-gray-400 text-sm">{country.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 