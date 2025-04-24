import React from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Calendar, Clock, Gift, Sparkles, Zap } from 'lucide-react';

const PromoBanner = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Overlay the hex grid pattern */}
      <div className="absolute inset-0 hex-grid-bg z-0"></div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/20 promo-pulse"
              style={{
                width: `${Math.random() * 10 + 5}rem`,
                height: `${Math.random() * 10 + 5}rem`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 3 + 3}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full mb-6 border border-white/20 glow">
            <span className="text-white font-semibold text-sm flex items-center">
              <Gift className="w-5 h-5 mr-2 text-tech-pink" />
              <span className="mr-2">Limited Time Offer</span>
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Get <span className="text-tech-pink">25% Off</span> Our AI Integration Course
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Elevate your testing skills with our comprehensive AI integration course. 
            Master the latest technologies and advance your career.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center text-white/90 bg-white/10 px-4 py-2 rounded-lg">
              <Calendar className="w-5 h-5 mr-2 text-tech-cyan" />
              <span>Offer ends May 30, 2025</span>
            </div>
            <div className="flex items-center text-white/90 bg-white/10 px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 mr-2 text-tech-cyan" />
              <span>Limited seats available</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/book">
              <Button className="bg-tech-pink hover:bg-tech-pink/90 text-white px-8 py-3 text-lg shadow-lg hover:shadow-tech-pink/30 hover:-translate-y-1 transition-all">
                <Zap className="w-5 h-5 mr-2" />
                Claim Discount Now
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" className="border-white border-2 text-white hover:bg-white/20 px-8 py-3 text-lg transition-all hover:-translate-y-1">
                View Course Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner; 