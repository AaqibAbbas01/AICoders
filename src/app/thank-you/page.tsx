import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="py-16 bg-[#0e1525]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto bg-[#1a2234] rounded-lg shadow-xl p-8 border border-gray-800">
          <div className="w-20 h-20 bg-[#dcffef] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#00c853]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-white">Booking Confirmed!</h1>
          <p className="text-xl text-gray-300 mb-10">
            Thank you for booking your slot. We&apos;ll contact you shortly with more details.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/downloads/course-brochure.pdf" 
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-900/30 rounded-md font-medium transition-colors focus:outline-none"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Course Brochure
            </a>
            
            <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5D4FFF] hover:bg-[#4A3AFF] text-white rounded-md font-medium transition-colors focus:outline-none">
              Return to Home
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 