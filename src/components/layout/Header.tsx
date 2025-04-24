'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Track if a nav item is active
  const isActive = (path: string) => pathname === path;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10' 
          : 'bg-gray-900 border-b border-gray-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <span className="absolute -inset-1 rounded-full bg-cyan-600/20 blur group-hover:bg-cyan-600/30 transition-all duration-300"></span>
              <div className="relative font-mono font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                <span className="text-cyan-500">&lt;</span>
                AI<span className="text-purple-500">Coders</span>
                <span className="text-cyan-500">/&gt;</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`relative text-gray-300 hover:text-cyan-400 transition-colors ${
                isActive('/') ? 'text-cyan-400' : ''
              } cyberpunk-link`}
            >
              {isActive('/') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500"></span>
              )}
              <span className="font-mono text-xs text-cyan-500 mr-1">01.</span>
              Home
            </Link>
            <Link 
              href="/syllabus" 
              className={`relative text-gray-300 hover:text-cyan-400 transition-colors ${
                isActive('/syllabus') ? 'text-cyan-400' : ''
              } cyberpunk-link`}
            >
              {isActive('/syllabus') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500"></span>
              )}
              <span className="font-mono text-xs text-cyan-500 mr-1">02.</span>
              Syllabus
            </Link>
            <Link 
              href="/about" 
              className={`relative text-gray-300 hover:text-cyan-400 transition-colors ${
                isActive('/about') ? 'text-cyan-400' : ''
              } cyberpunk-link`}
            >
              {isActive('/about') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500"></span>
              )}
              <span className="font-mono text-xs text-cyan-500 mr-1">03.</span>
              About
            </Link>
            <Link 
              href="/contact" 
              className={`relative text-gray-300 hover:text-cyan-400 transition-colors ${
                isActive('/contact') ? 'text-cyan-400' : ''
              } cyberpunk-link`}
            >
              {isActive('/contact') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500"></span>
              )}
              <span className="font-mono text-xs text-cyan-500 mr-1">04.</span>
              Contact
            </Link>
            <Link 
              href="/book-slot" 
              className="cyberpunk-button bg-transparent px-4 py-2 border border-cyan-500 text-cyan-400 rounded-sm hover:bg-cyan-500/10 transition-all flex items-center space-x-1"
            >
              <span className="font-mono">[ Book_a_Slot ]</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-cyan-400 hover:text-cyan-300 focus:outline-none border border-cyan-500/50 p-1 rounded-sm"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-cyan-900/50 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              <Link
                href="/"
                className={`text-lg py-2 font-mono ${
                  isActive('/') 
                    ? 'text-cyan-400 font-medium' 
                    : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xs text-cyan-500 mr-1">01.</span> Home
              </Link>
              <Link
                href="/syllabus"
                className={`text-lg py-2 font-mono ${
                  isActive('/syllabus') 
                    ? 'text-cyan-400 font-medium' 
                    : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xs text-cyan-500 mr-1">02.</span> Syllabus
              </Link>
              <Link
                href="/about"
                className={`text-lg py-2 font-mono ${
                  isActive('/about') 
                    ? 'text-cyan-400 font-medium' 
                    : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xs text-cyan-500 mr-1">03.</span> About
              </Link>
              <Link
                href="/contact"
                className={`text-lg py-2 font-mono ${
                  isActive('/contact') 
                    ? 'text-cyan-400 font-medium' 
                    : 'text-gray-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xs text-cyan-500 mr-1">04.</span> Contact
              </Link>
              <Link
                href="/book-slot"
                className="bg-transparent border border-cyan-500 text-cyan-400 py-3 px-4 rounded-sm text-center font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                [ Book_a_Slot ]
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 