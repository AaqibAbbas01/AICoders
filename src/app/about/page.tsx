export default function About() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-cyan-400">About Our Institute</h1>
          
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden mb-12 border border-cyan-500/30">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3 relative h-64 md:h-auto">
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  {/* Placeholder for instructor image with cyberpunk styling */}
                  <div className="relative p-2 border border-cyan-500/50 rounded-sm">
                    <div className="absolute inset-0 hex-grid-bg opacity-50"></div>
                    <svg className="w-24 h-24 text-cyan-400 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2 text-cyan-300 font-mono">Aaqib Abbas</h2>
                <p className="text-gray-300 mb-4">Lead Instructor & Test Automation Expert</p>
                <p className="text-gray-300 mb-4">
                  With over 6 years of experience in automation testing, Aaqib has helped companies like Shiprocket, Reddoorz, Fleetx and Highlevel optimize their testing processes. He specializes in Playwright automation, API testing, and AI-enhanced test solutions.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <div className="p-2 border border-cyan-500/30 rounded-sm hover:border-cyan-500/80 hover:bg-cyan-900/20">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <div className="p-2 border border-cyan-500/30 rounded-sm hover:border-cyan-500/80 hover:bg-cyan-900/20">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400 font-mono">&gt; Our Mission</h2>
            <div className="bg-gray-800 rounded-lg shadow-md p-8 border border-cyan-500/30">
              <p className="text-gray-300 mb-4">
                At AI Coders, our mission is to empower testers and developers with the latest automation tools and techniques. We believe that modern testing requires a combination of technical expertise, critical thinking, and AI-driven approaches.
              </p>
              <p className="text-gray-300">
                Through our comprehensive training programs, we aim to bridge the gap between traditional testing methodologies and next-generation AI-enhanced automation, preparing professionals for the evolving demands of the industry.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400 font-mono">&gt; Teaching Methodology</h2>
            <div className="bg-gray-800 rounded-lg shadow-md p-8 border border-cyan-500/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/50">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 text-purple-400">Learn by Doing</h3>
                  <p className="text-gray-300">Hands-on exercises and real-world projects</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/50">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 text-purple-400">Small Groups</h3>
                  <p className="text-gray-300">Personalized attention and feedback</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/50">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 text-purple-400">Industry Relevant</h3>
                  <p className="text-gray-300">Curriculum aligned with current industry practices</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div>
            <h2 className="text-2xl font-bold mb-6 text-cyan-400 font-mono">&gt; Our Credentials</h2>
            <div className="bg-gray-800 rounded-lg shadow-md p-8 border border-cyan-500/30">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Certified Microsoft Partner for Educational Solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Recognized by the International Software Testing Qualifications Board (ISTQB)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Playwright Official Training Partner</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Over 5,000 graduates working in leading tech companies</span>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
} 