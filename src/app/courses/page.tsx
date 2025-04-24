import React from 'react';

export default function CoursesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Course Offerings</h1>
        
        <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-primary/20 glass-card">
          <div className="flex items-center mb-4">
            <div className="bg-primary/20 p-2 rounded-lg mr-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-primary"
              >
                <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                <path d="M12 13v8"></path>
                <path d="M5 13v6a2 2 0 0 0 2 2h8"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold">AI Integration Course - 25% OFF</h2>
          </div>
          
          <div className="mb-4">
            <div className="text-yellow-400 font-semibold mb-1">Course Highlights:</div>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Comprehensive Playwright testing framework mastery</li>
              <li>AI-powered test case generation and analysis</li>
              <li>Integration with Claude, GPT, and custom LLMs</li>
              <li>Advanced automation techniques for complex applications</li>
              <li>Real-world projects with industry mentorship</li>
            </ul>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div>
              <div className="text-yellow-400 font-semibold mb-1">Duration:</div>
              <p>12 weeks (part-time)</p>
            </div>
            <div>
              <div className="text-yellow-400 font-semibold mb-1">Format:</div>
              <p>Live online sessions + hands-on labs</p>
            </div>
            <div>
              <div className="text-yellow-400 font-semibold mb-1">Certification:</div>
              <p>Industry-recognized certificate upon completion</p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-md mb-6">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-400 line-through">₹25,000</span>
                <span className="text-white text-xl font-bold ml-2">₹18,750</span>
                <span className="ml-2 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">25% OFF</span>
              </div>
              <div className="text-gray-400 text-sm">
                Offer ends May 30, 2025
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/syllabus" 
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-center transition-colors"
            >
              View Detailed Syllabus
            </a>
            <a 
              href="/book-slot" 
              className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md text-center transition-colors"
            >
              Book Your Slot Now
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12 mb-6">
          <h3 className="text-xl font-semibold mb-4">Other Courses Coming Soon</h3>
          <p className="text-gray-400">
            We&apos;re expanding our curriculum! Stay tuned for more specialized courses in AI, 
            automation, and advanced testing methodologies.
          </p>
        </div>
      </div>
    </main>
  );
} 