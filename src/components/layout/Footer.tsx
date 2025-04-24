import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-cyan-500/20 relative">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full" 
             style={{ 
               backgroundImage: "url('/images/circuit-pattern.svg')", 
               backgroundSize: "cover",
               backgroundPosition: "center"
             }}>
        </div>
      </div>
      
      {/* Decorative tech elements */}
      <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
      <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-cyan-500 to-transparent"></div>
      <div className="absolute bottom-0 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>
            
            <h3 className="text-xl font-bold mb-4 font-mono">
              <span className="text-cyan-400">&lt;</span>
              Tech<span className="text-purple-400">Institute</span>
              <span className="text-cyan-400">/&gt;</span>
            </h3>
            <p className="text-gray-300 mb-4 font-light">
              Empowering the next generation of automation engineers with comprehensive training in Playwright, Manual Testing, and AI Integration.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40"></div>
            <h4 className="text-lg font-mono text-cyan-400 mb-4 font-semibold border-b border-cyan-900 pb-2">&gt; Quick_Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center">
                  <span className="text-cyan-500 mr-2 font-mono text-xs">&gt;</span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/syllabus" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center">
                  <span className="text-cyan-500 mr-2 font-mono text-xs">&gt;</span>
                  Course Syllabus
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center">
                  <span className="text-cyan-500 mr-2 font-mono text-xs">&gt;</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center">
                  <span className="text-cyan-500 mr-2 font-mono text-xs">&gt;</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-purple-500/40"></div>
            <h4 className="text-lg font-mono text-purple-400 mb-4 font-semibold border-b border-purple-900 pb-2">&gt; Contact_Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-purple-400 font-mono">[loc]</span>
                <span className="font-light">E-47 , Paryavaran Complex, Sainik Farms, New Delhi 110030</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-400 font-mono">[tel]</span>
                <span className="font-light">+918178199664</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-400 font-mono">[msg]</span>
                <span className="font-light">aaqib817819@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500/40"></div>
            <h4 className="text-lg font-mono text-blue-400 mb-4 font-semibold border-b border-blue-900 pb-2">&gt; Connect_Socials</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-all transform hover:scale-110">
                <div className="p-2 border border-blue-500/30 rounded-sm hover:border-blue-500/80 hover:bg-blue-500/10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-all transform hover:scale-110">
                <div className="p-2 border border-blue-500/30 rounded-sm hover:border-blue-500/80 hover:bg-blue-500/10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-all transform hover:scale-110">
                <div className="p-2 border border-blue-500/30 rounded-sm hover:border-blue-500/80 hover:bg-blue-500/10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <div className="text-sm text-gray-400 mt-8">
            © {new Date().getFullYear()}
            <span className="text-cyan-500"> AI Coders // </span>
            All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
} 