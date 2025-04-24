type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  index: number;
};

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  // Add animation delay based on index
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <div 
      className="ai-card bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all dark:border dark:border-gray-700"
      style={{ animationDelay }}
    >
      <div className="flex items-start mb-5">
        <div className="rounded-full bg-indigo-100 dark:bg-indigo-900/30 p-3 w-12 h-12 flex items-center justify-center mr-4">
          <i className={`${icon} pi-spin text-indigo-600 dark:text-indigo-400`} style={{ fontSize: '1.5rem' }}></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      
      {/* Visual details */}
      {/* <div className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400">
        <i className="pi pi-plus-circle mr-1" style={{ fontSize: '1rem' }}></i>
        <span className="text-sm font-medium">Learn more</span>
      </div> */}
    </div>
  );
}

export default function Features() {
  const features = [
    {
      icon: 'pi pi-cog',
      title: 'AI Integration',
      description: 'Learn to integrate Claude, GPT, and Grok into your automation workflows for enhanced test generation and analysis.'
    },
    {
      icon: 'pi pi-briefcase',
      title: 'Real-world Projects',
      description: 'Apply your skills to actual enterprise applications and scenarios, building a portfolio that demonstrates your expertise.'
    },
    {
      icon: 'pi pi-verified',
      title: 'Certification',
      description: 'Receive an industry-recognized certification upon course completion, validated by our tech partners.'
    },
    {
      icon: 'pi pi-users',
      title: 'Expert Mentorship',
      description: 'Get guidance from industry veterans who have implemented test automation at scale in leading tech companies.'
    },
    {
      icon: 'pi pi-comments',
      title: 'Community Access',
      description: 'Join our vibrant community of testers and automation engineers for networking and continued learning.'
    },
    {
      icon: 'pi pi-sync',
      title: 'Lifetime Updates',
      description: 'Receive curriculum updates as testing technologies evolve, keeping your skills current with industry trends.'
    },
  ];

  return (
    <section className="py-20 pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Why Choose Our Course</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">Next-Gen Testing Skills</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Our comprehensive program combines the latest automation tools with practical skills that employers demand.
          </p>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
        
        {/* Feature callout */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 via-[#9C31FF] to-[#0AEFFF] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Background decoration with enhanced brightness */}
            <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white opacity-20"></div>
            <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white opacity-20"></div>
            <div className="absolute inset-0 bg-indigo-600/10 backdrop-blur-[1px] mix-blend-overlay"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 3 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-white/20 pulse-animation"
                  style={{
                    width: `${Math.random() * 5 + 3}rem`,
                    height: `${Math.random() * 5 + 3}rem`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.7}s`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="mb-8 md:mb-0 md:mr-8 flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 shadow-lg pulsing-glow">
                  <img 
                    src="/images/ai-logo.svg" 
                    alt="AI Testing Logo" 
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white drop-shadow-md">Accelerate Your Career With AI-Enhanced Testing Skills</h3>
                <p className="mb-4 text-white/90 drop-shadow">Our curriculum is continuously updated to incorporate the latest in AI-driven testing methodologies, ensuring you&apos;re always at the cutting edge.</p>
                <a href="/syllabus" className="inline-flex items-center justify-center bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-indigo-500/50 hover:-translate-y-1">
                  Explore Full Curriculum
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 