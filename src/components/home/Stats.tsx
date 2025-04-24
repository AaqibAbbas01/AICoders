import React from 'react';

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-12">
      <div className="bg-gray-800/50 rounded-lg p-8 border border-cyan-500/30 flex flex-col items-center justify-center text-center">
        <div className="text-5xl font-bold text-cyan-400 mb-2">98%</div>
        <div className="text-gray-300">Student Satisfaction</div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-8 border border-cyan-500/30 flex flex-col items-center justify-center text-center">
        <div className="text-5xl font-bold text-cyan-400 mb-2">200+</div>
        <div className="text-gray-300">Hours of Learning Content</div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-8 border border-cyan-500/30 flex flex-col items-center justify-center text-center">
        <div className="text-5xl font-bold text-cyan-400 mb-2">25+</div>
        <div className="text-gray-300">AI-powered Testing Tools</div>
      </div>
    </div>
  );
} 