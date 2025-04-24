'use client';

import { useState, useEffect } from 'react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Himanshu',
      role: 'QA Engineer',
      company: 'Shiprocket',
      image: '/testimonials/person1.jpg',
      quote: 'This course transformed our testing approach. The Playwright automation skills combined with AI integration have increased our test coverage by 70% while reducing execution time.'
    },
    {
      id: 2,
      name: 'Rohit',
      role: 'QA Engineer',
      company: 'Shiprocket',
      image: '/testimonials/person2.jpg',
      quote: 'As a developer, I was skeptical about test automation, but this course changed my perspective. The real-world projects and hands-on approach made it immediately applicable to my work.'
    },
    {
      id: 3,
      name: 'Nawab',
      role: 'QA Engineer',
      company: 'Fleetx',
      image: '/testimonials/person3.jpg',
      quote: 'The AI integration section of this course was eye-opening. I&apos;ve been able to implement GPT-assisted test case generation that has saved our team countless hours of work.'
    }
  ];
  
  // Auto advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gray-900">
      {/* Circuit background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
             style={{ backgroundImage: "url('/images/circuit-pattern.svg')" }}
        ></div>
      </div>
      
      {/* Cyber graphics */}
      <div className="absolute top-0 left-0 w-36 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
      <div className="absolute top-0 right-0 w-36 h-1 bg-gradient-to-l from-cyan-500 to-transparent"></div>
      <div className="absolute bottom-16 left-0 w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
      <div className="absolute bottom-16 right-0 w-24 h-0.5 bg-gradient-to-l from-cyan-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-1 block">&gt; feedback.log</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">What Our Students Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Hear from our graduates who have transformed their testing careers with AI-enhanced automation skills
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="whitespace-nowrap transition-transform duration-500 ease-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="inline-block w-full whitespace-normal align-top p-4"
                  >
                    <div className="p-8 rounded-sm relative bg-gray-900 border border-cyan-500/30 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60">
                      {/* Terminal-like header */}
                      <div className="absolute -top-3 -right-3 text-xs font-mono text-cyan-500 bg-gray-900 px-2 py-1 border border-cyan-500/50">
                        {`ID://USR_${testimonial.id}${Math.floor(Math.random() * 1000)}`}
                      </div>
                      
                      {/* Avatar and info */}
                      <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                        <div className="w-20 h-20 rounded-sm relative overflow-hidden border-2 border-cyan-500/40">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                            {/* Tech avatar placeholder */}
                            <div className="w-full h-full relative">
                              <div className="absolute inset-0 hex-grid-bg opacity-50"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-10 h-10 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="bg-gray-800 border-l-2 border-cyan-500 pl-2 mb-1">
                            <h4 className="font-mono font-bold text-xl text-cyan-400">{testimonial.name}</h4>
                          </div>
                          <p className="text-purple-400 font-mono text-sm">&gt; {testimonial.role}</p>
                          <p className="text-gray-500 font-mono text-xs">&gt;&gt; {testimonial.company}</p>
                        </div>
                      </div>
                      
                      {/* Quote with terminal styling */}
                      <div className="relative mb-4 bg-gray-800/50 border-l-2 border-cyan-500/70 p-4">
                        <div className="absolute -top-3 -left-3 text-xs font-mono text-cyan-500 bg-gray-900 px-2 py-1">OUTPUT</div>
                        <blockquote className="text-gray-300 font-light leading-relaxed mb-2 font-mono text-sm">
                          <span className="text-cyan-500 mr-2">$</span>{testimonial.quote}
                        </blockquote>
                      </div>
                      
                      {/* Rating line */}
                      <div className="flex justify-end mt-4 items-center">
                        <div className="text-xs font-mono text-gray-500 mr-2">satisfaction_rate:</div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="w-4 h-1 bg-cyan-500 mx-0.5"></span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation controls */}
            <div className="mt-10 flex justify-center items-center gap-3">
              <button
                onClick={() => goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 flex items-center justify-center border border-cyan-500/50 text-cyan-400 hover:bg-cyan-900/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1 transition-all duration-300 ${
                      index === activeIndex 
                      ? 'bg-cyan-500 w-8' 
                      : 'bg-gray-600 w-4'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button
                onClick={() => goToSlide((activeIndex + 1) % testimonials.length)}
                className="w-10 h-10 flex items-center justify-center border border-cyan-500/50 text-cyan-400 hover:bg-cyan-900/30 transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 