'use client';

import { useState, useEffect } from 'react';

type Module = {
  id: string;
  title: string;
  sections: string[];
};

type SidebarNavProps = {
  modules: Module[];
};

export default function SidebarNav({ modules }: SidebarNavProps) {
  const [activeModule, setActiveModule] = useState<string>(modules[0].id);
  
  // Update active module based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      for (const courseModule of modules) {
        const element = document.getElementById(courseModule.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveModule(courseModule.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [modules]);
  
  const scrollToModule = (moduleId: string) => {
    const element = document.getElementById(moduleId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveModule(moduleId);
    }
  };
  
  return (
    <nav className="bg-gray-800 rounded-lg shadow-md p-4 border border-cyan-500/30">
      <h4 className="font-mono text-lg mb-4 text-cyan-400 border-b border-cyan-500/20 pb-2">&gt; Course Modules</h4>
      <ul className="space-y-2">
        {modules.map((courseModule) => (
          <li key={courseModule.id}>
            <button
              onClick={() => scrollToModule(courseModule.id)}
              className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                activeModule === courseModule.id 
                  ? 'bg-cyan-900/30 text-cyan-300 font-medium border-l-2 border-cyan-500' 
                  : 'text-gray-300 hover:bg-gray-700/50 hover:text-cyan-300'
              }`}
            >
              {courseModule.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 