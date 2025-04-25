'use client';

import { useState } from 'react';

type Module = {
  id: string;
  title: string;
  sections: string[];
  description: string;
};

type ModuleListProps = {
  modules: Module[];
};

export default function ModuleList({ modules }: ModuleListProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>([modules[0].id]);
  
  const toggleModule = (moduleId: string) => {
    setExpandedModules(prevExpanded => 
      prevExpanded.includes(moduleId)
        ? prevExpanded.filter(id => id !== moduleId)
        : [...prevExpanded, moduleId]
    );
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20 mb-8 overflow-hidden">
        <div className="flex items-center space-x-4 animate-marquee whitespace-nowrap">
          <span className="text-cyan-400 font-semibold">Prerequisites:</span>
          <span className="text-gray-300">Bachelor of Technology (B.Tech)</span>
          <span className="text-cyan-500">•</span>
          <span className="text-gray-300">Bachelor of Engineering (BE)</span>
          <span className="text-cyan-500">•</span>
          <span className="text-gray-300">Bachelor of Computer Applications (BCA)</span>
          <span className="text-cyan-500">•</span>
          <span className="text-gray-300">Master of Computer Applications (MCA)</span>
          <span className="text-cyan-500">•</span>
          <span className="text-gray-300">Bachelor of Science (B.Sc) in Computer Science</span>
          <span className="text-cyan-500">•</span>
          <span className="text-gray-300">Or equivalent technical degree</span>
        </div>
      </div>

      <div className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20 mb-8 overflow-hidden">
        <div className="flex items-center space-x-4 animate-marquee whitespace-nowrap">
          <span className="text-cyan-400 font-semibold">Career Impact:</span>
          <span className="text-gray-300">AI/ML Engineer</span>
          <span className="text-cyan-500">•</span>
          <span className="text-gray-300">Data Scientist</span>
          <span className="text-cyan-500">•</span>
          <span className="text-gray-300">Machine Learning Specialist</span>
          <span className="text-cyan-500">•</span>
          <span className="text-gray-300">Research Scientist</span>
          <span className="text-cyan-500">•</span>
          <span className="text-gray-300">AI Product Manager</span>
          <span className="text-cyan-500">•</span>
          <span className="text-gray-300">Deep Learning Engineer</span>
          <span className="text-cyan-500">•</span>
          <span className="text-gray-300">Computer Vision Engineer</span>
          <span className="text-cyan-500">•</span>
          <span className="text-gray-300">NLP Engineer</span>
        </div>
      </div>

      {modules.map((module) => (
        <div 
          key={module.id} 
          id={module.id}
          className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-cyan-500/30 hover:border-cyan-500/50 transition-colors"
        >
          <button
            onClick={() => toggleModule(module.id)}
            className="w-full flex justify-between items-center p-5 bg-gray-900 hover:bg-gray-800 transition-colors border-b border-cyan-500/20"
          >
            <h3 className="text-xl font-semibold text-left text-cyan-300 font-mono">{module.title}</h3>
            <span className="text-xl text-cyan-400">
              {expandedModules.includes(module.id) ? '−' : '+'}
            </span>
          </button>
          
          {expandedModules.includes(module.id) && (
            <div className="p-5 space-y-4">
              <p className="text-gray-300 mb-6 border-b border-gray-700 pb-4">
                {module.description}
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/10">
                <h4 className="text-lg font-semibold mb-3 text-cyan-400">What You&apos;ll Learn:</h4>
                <ul className="space-y-2">
                  {module.sections.map((section, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span className="text-gray-300">{section}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  This module provides hands-on experience with real-world scenarios and practical examples
                  that you can apply immediately to your projects.
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 