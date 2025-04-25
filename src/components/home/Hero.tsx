import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-gradient text-white py-20 relative overflow-hidden">
      {/* Matrix-inspired background animation */}
      <div className="absolute inset-0 bg-gray-900 opacity-90 z-0"></div>
      <div className="absolute inset-0 pattern-bg opacity-15 z-0"></div>
      
      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: "url('/images/circuit-pattern.svg')", 
             backgroundSize: "cover",
             backgroundPosition: "center"
           }}>
      </div>
      
      {/* Tech-themed animated elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-500 opacity-10 blur-3xl float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500 opacity-15 blur-3xl float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-2/3 left-1/3 w-24 h-24 rounded-full bg-blue-500 opacity-10 blur-3xl float" style={{animationDelay: '2s'}}></div>
      
      {/* Binary falling animation (decorative) */}
      <div className="binary-rain absolute inset-0 z-0 opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left mb-12 lg:mb-0">
            {/* Terminal-style header */}
            <div className="mb-4 inline-block w-full max-w-xl bg-gray-900 rounded-lg border border-cyan-500 shadow-lg shadow-cyan-500/20">
              <div className="flex items-center bg-gray-800 rounded-t-lg p-2 border-b border-cyan-700">
                <div className="flex space-x-1 ml-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mx-auto text-xs text-gray-400 font-mono">AI-Coders_Hub@root:~</div>
              </div>
              <div className="p-4 font-mono">
                <p className="text-cyan-400 mb-1">$ <span className="typing-animation">initiating-course-module</span></p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                  <span className="block mb-2 text-cyan-400">&gt; Playwright</span>
                  <span className="block mb-2 text-purple-400">&gt; Automation</span>
                  <span className="block text-blue-400">&gt; AI Integration</span>
                </h1>
                <p className="text-sm text-gray-400">$ status: <span className="text-green-400">ready_for_enrollment</span></p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 text-cyan-100 font-light">
              Master next-gen testing with AI-powered automation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/book-slot">
                <Button variant="primary" size="lg" className="cyberpunk-button bg-gradient-to-r from-cyan-500 to-blue-600 border border-cyan-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300">
                  <i className="pi pi-calendar-plus mr-2 pi-spin" style={{ fontSize: '1rem' }}></i>
                  Book Your Slot
                </Button>
              </Link>
              <Link href="/syllabus">
                <Button variant="outline" size="lg" className="cyberpunk-button-alt bg-transparent border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/30 transition-all hover:border-cyan-400">
                  <i className="pi pi-list mr-2" style={{ fontSize: '1rem' }}></i>
                  View Syllabus
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Tech visualization panel */}
          <div className="w-full max-w-md lg:max-w-xl">
            <div className="relative">
              <div className="glass-card p-8 rounded-xl border border-cyan-500/30 bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
                <div className="relative h-64 w-full">
                  {/* Hexagon grid background */}
                  <div className="absolute inset-0 hex-grid-bg rounded-lg"></div>
                  
                  <div className="flex items-center justify-center h-full z-10 relative">
                    <div className="text-center">
                      <div className="mb-6 inline-block bg-cyan-500/20 p-4 rounded-full pulsing-glow">
                        <Image 
                          src="/images/ai-check-circle.svg" 
                          alt="AI-Enhanced Testing" 
                          width={64} 
                          height={64} 
                          className="animate-pulse"
                        />
                      </div>
                      <h3 className="text-xl font-mono font-semibold mb-1 text-cyan-300">AI-Enhanced Testing</h3>
                      <p className="text-cyan-100 mb-4 font-light">Next generation automation techniques</p>
                      <div className="flex justify-center space-x-2">
                        <span className="inline-block px-3 py-1 bg-cyan-900/50 border border-cyan-600/30 rounded-full text-sm text-cyan-300 font-mono">Playwright</span>
                        <span className="inline-block px-3 py-1 bg-purple-900/50 border border-purple-600/30 rounded-full text-sm text-purple-300 font-mono">AI</span>
                        <span className="inline-block px-3 py-1 bg-blue-900/50 border border-blue-600/30 rounded-full text-sm text-blue-300 font-mono">Testing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tech dots decoration */}
              <div className="absolute -bottom-4 -right-4 w-8 h-24 flex flex-col gap-2">
                <div className="w-4 h-4 rounded-full bg-cyan-500 pulse-animation"></div>
                <div className="w-4 h-4 rounded-full bg-purple-500 pulse-animation" style={{animationDelay: '0.5s'}}></div>
                <div className="w-4 h-4 rounded-full bg-blue-500 pulse-animation" style={{animationDelay: '1s'}}></div>
                <div className="w-4 h-4 rounded-full bg-green-500 pulse-animation" style={{animationDelay: '1.5s'}}></div>
              </div>
              
              {/* Tech circuitry lines */}
              <div className="absolute -bottom-2 -left-2 w-12 h-12">
                <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech stats display */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center border border-cyan-500/20 bg-gray-900/80 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-400/40 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <i className="pi pi-thumbs-up pi-spin text-cyan-400 mb-2" style={{ fontSize: '2rem' }}></i>
            <div className="text-3xl font-bold mb-2 font-mono relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100">98%</div>
            <p className="text-cyan-100 relative z-10 text-sm font-light">Student Satisfaction</p>
          </div>
          <div className="glass-card p-6 text-center border border-purple-500/20 bg-gray-900/80 backdrop-blur-xl relative overflow-hidden group hover:border-purple-400/40 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <i className="pi pi-book pi-spin text-purple-400 mb-2" style={{ fontSize: '2rem' }}></i>
            <div className="text-3xl font-bold mb-2 font-mono relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">200+</div>
            <p className="text-purple-100 relative z-10 text-sm font-light">Hours of Learning Content</p>
          </div>
          <div className="glass-card p-6 text-center border border-blue-500/20 bg-gray-900/80 backdrop-blur-xl relative overflow-hidden group hover:border-blue-400/40 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <i className="pi pi-cog pi-spin text-blue-400 mb-2" style={{ fontSize: '2rem' }}></i>
            <div className="text-3xl font-bold mb-2 font-mono relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">25+</div>
            <p className="text-blue-100 relative z-10 text-sm font-light">AI-powered Testing Tools</p>
          </div>
        </div>
      </div>
    </section>
  );
} 