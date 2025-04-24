import ModuleList from '@/components/syllabus/ModuleList';
import SidebarNav from '@/components/syllabus/SidebarNav';

export default function Syllabus() {
  const modules = [
    {
      id: 'module-1',
      title: 'Software Development Fundamentals',
      sections: [
        'Frontend Development (HTML5, CSS3, JavaScript)',
        'Backend Architecture and RESTful Services',
        'Database Design and Management',
        'API Design and Implementation',
        'Error Handling and Debugging Strategies',
        'Console Operations and Logging',
        'Network Architecture and Protocols'
      ],
      description: 'Master the core principles of modern software development, from frontend to backend. Learn to build responsive web applications, understand server-side architecture, and implement robust database solutions.'
    },
    {
      id: 'module-2',
      title: 'Software Testing Foundation',
      sections: [
        'SDLC (Software Development Life Cycle)',
        'STLC (Software Testing Life Cycle)',
        'Testing Principles and Methodologies',
        'Types of Testing (Unit, Integration, System, UAT)',
        'Test Case Design Techniques',
        'Risk-Based Testing Approaches',
        'Test Planning and Strategy'
      ],
      description: 'Develop a strong foundation in software testing methodologies. Understand the complete software development and testing life cycles, and learn industry-standard practices.'
    },
    {
      id: 'module-3',
      title: 'Advanced Debugging & Troubleshooting',
      sections: [
        'Browser Developer Tools Mastery',
        'Network Call Analysis and Debugging',
        'Console Error Investigation',
        'Performance Profiling',
        'Memory Leak Detection',
        'Cross-browser Compatibility Testing',
        'Security Testing Fundamentals'
      ],
      description: 'Gain expertise in advanced debugging techniques using modern tools and methodologies. Learn to investigate and resolve complex software issues.'
    },
    {
      id: 'module-4',
      title: 'API Testing & Automation',
      sections: [
        'Postman for Manual API Testing',
        'REST API Testing Fundamentals',
        'API Authentication Methods',
        'Playwright API Testing Framework',
        'API Mocking and Stubbing',
        'Performance Testing for APIs',
        'API Security Testing'
      ],
      description: 'Master comprehensive API testing strategies using both manual and automated approaches with Postman and Playwright.'
    },
    {
      id: 'module-5',
      title: 'UI Automation with Playwright',
      sections: [
        'Playwright Architecture and Setup',
        'Locator Strategies and Best Practices',
        'Page Object Model Implementation',
        'Test Data Management',
        'Visual Testing and Snapshots',
        'Cross-browser Testing',
        'Parallel Test Execution'
      ],
      description: 'Learn to create reliable, maintainable test suites that can run across multiple browsers using Playwright.'
    },
    {
      id: 'module-6',
      title: 'AI-Powered Testing',
      sections: [
        'MCP Server Integration',
        'AI-Assisted Test Case Generation',
        'Automated Test Script Writing',
        'Smart Test Maintenance',
        'AI-Based Test Analysis',
        'Failure Analysis and Reporting',
        'Continuous Learning and Optimization'
      ],
      description: 'Harness the power of AI to enhance your testing capabilities with MCP Server integration and intelligent test automation.'
    },
    {
      id: 'module-7',
      title: 'Version Control & CI/CD',
      sections: [
        'Git Fundamentals and Workflow',
        'GitHub Desktop Operations',
        'Branch Management Strategies',
        'Jenkins Pipeline Setup',
        'CI/CD Pipeline Configuration',
        'Automated Test Integration',
        'Deployment Strategies'
      ],
      description: 'Master version control with Git and GitHub Desktop, and implement continuous integration and deployment pipelines.'
    },
    {
      id: 'module-8',
      title: 'AI Integration & Future Skills',
      sections: [
        'AI Tools for Development',
        'Prompt Engineering',
        'Agent Mode Operations',
        'AI-Assisted Debugging',
        'Automated Code Review',
        'Future of AI in Testing',
        'Career Path and Growth'
      ],
      description: 'Prepare for the future with advanced AI integration skills, prompt engineering, and AI-assisted development practices.'
    }
  ];

  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400 font-mono">
          &gt; Comprehensive Course Syllabus
        </h1>
        
        <p className="text-xl text-center mb-12 text-cyan-300 font-mono max-w-3xl mx-auto">
          After this course, you&apos;ll master the art of creating and testing modern software applications, 
          leveraging AI to supercharge your development and testing capabilities. 
          From building robust applications to implementing cutting-edge automation - 
          embrace the future of tech with AI as your co-pilot.
        </p>

        {/* Career Opportunities Section */}
        <div className="mb-16 p-6 bg-cyan-900/30 rounded-lg border border-cyan-400 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300 text-center">Career Impact</h2>
          <p className="text-gray-200 text-center mb-6">
            Upon completion of this comprehensive course, you&apos;ll be equipped with cutting-edge skills in
            software development, testing, and AI integration. You&apos;ll be prepared to take on roles such as:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center p-3 bg-cyan-900/20 rounded border border-cyan-500/30">
              <span className="text-cyan-300">AI Automation Engineer</span>
            </div>
            <div className="text-center p-3 bg-cyan-900/20 rounded border border-cyan-500/30">
              <span className="text-cyan-300">Test Automation Engineer</span>
            </div>
            <div className="text-center p-3 bg-cyan-900/20 rounded border border-cyan-500/30">
              <span className="text-cyan-300">QA Automation Specialist</span>
            </div>
            <div className="text-center p-3 bg-cyan-900/20 rounded border border-cyan-500/30">
              <span className="text-cyan-300">AI Engineer</span>
            </div>
            <div className="text-center p-3 bg-cyan-900/20 rounded border border-cyan-500/30">
              <span className="text-cyan-300">AI Integration Specialist</span>
            </div>
            <div className="text-center p-3 bg-cyan-900/20 rounded border border-cyan-500/30">
              <span className="text-cyan-300">Technical Lead</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <div className="lg:sticky lg:top-24">
              <SidebarNav modules={modules} />
            </div>
          </aside>
          
          <main className="lg:w-3/4">
            <ModuleList modules={modules} />
          </main>
        </div>
      </div>
    </div>
  );
} 