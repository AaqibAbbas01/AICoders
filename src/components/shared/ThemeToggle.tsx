'use client';

import { useEffect } from 'react';

export default function ThemeToggle() {
  useEffect(() => {
    // Always enforce dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  }, []);

  // No toggle function as we're always in dark mode
  // Return null as this component no longer renders a UI element
  return null;
} 