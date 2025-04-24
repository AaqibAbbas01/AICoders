import React from 'react';

export default function CourseOverview() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-cyan-400 font-mono">
          &gt; Course Overview
        </h1>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-cyan-300 mb-12 text-center font-mono">
            Embark on a transformative journey into the world of modern software development and testing,
            where AI becomes your powerful ally in creating and validating exceptional software solutions.
          </p>

          <div className="space-y-12">
            {/* Module 1 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/30">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">1. Software Development Fundamentals</h2>
              <p className="text-gray-300 mb-4">
                Master the core principles of modern software development, from frontend to backend. You&apos;ll learn
                how to build responsive web applications using HTML5, CSS3, and JavaScript, understand server-side
                architecture, and implement robust database solutions. This module covers everything from basic syntax
                to advanced concepts in web development.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Build modern, responsive user interfaces with HTML5 and CSS3</li>
                <li>Implement interactive features using JavaScript and modern frameworks</li>
                <li>Design and develop RESTful services for seamless data flow</li>
                <li>Master database design patterns and management techniques</li>
                <li>Learn professional error handling and debugging approaches</li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/30">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">2. Software Testing Foundation</h2>
              <p className="text-gray-300 mb-4">
                Develop a strong foundation in software testing methodologies. Understand the complete software
                development and testing life cycles, various testing approaches, and how to design effective test
                cases. Learn industry-standard practices that ensure software quality and reliability.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Understand SDLC and STLC phases and their interconnection</li>
                <li>Master different testing types and their applications</li>
                <li>Learn test case design techniques for maximum coverage</li>
                <li>Implement risk-based testing strategies</li>
                <li>Create comprehensive test plans and strategies</li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/30">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">3. Advanced Debugging & Troubleshooting</h2>
              <p className="text-gray-300 mb-4">
                Gain expertise in advanced debugging techniques using modern tools and methodologies. Learn how to
                investigate and resolve complex software issues, analyze network calls, and ensure optimal
                performance across different browsers and platforms.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Master browser developer tools for efficient debugging</li>
                <li>Analyze and debug network calls and API interactions</li>
                <li>Investigate and resolve console errors effectively</li>
                <li>Conduct performance profiling and optimization</li>
                <li>Implement cross-browser compatibility testing</li>
              </ul>
            </div>

            {/* Module 4 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/30">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">4. API Testing & Automation</h2>
              <p className="text-gray-300 mb-4">
                Learn comprehensive API testing strategies using both manual and automated approaches. Master
                Postman for manual testing and leverage Playwright for automated API testing. Understand
                authentication, security, and performance aspects of API testing.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Execute manual API testing using Postman</li>
                <li>Implement automated API tests with Playwright</li>
                <li>Handle different authentication methods securely</li>
                <li>Create mock APIs and stub responses</li>
                <li>Perform API security and performance testing</li>
              </ul>
            </div>

            {/* Module 5 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/30">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">5. UI Automation with Playwright</h2>
              <p className="text-gray-300 mb-4">
                Master UI automation using Playwright, a powerful modern testing framework. Learn how to create
                reliable, maintainable test suites that can run across multiple browsers. Understand advanced
                concepts like Page Object Model and parallel test execution.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Set up and configure Playwright testing environment</li>
                <li>Implement effective locator strategies</li>
                <li>Design tests using Page Object Model pattern</li>
                <li>Manage test data efficiently</li>
                <li>Execute tests across multiple browsers in parallel</li>
              </ul>
            </div>

            {/* Module 6 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/30">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">6. AI-Powered Testing</h2>
              <p className="text-gray-300 mb-4">
                Harness the power of AI to enhance your testing capabilities. Learn how to integrate MCP Server
                for intelligent test automation, generate test cases using AI, and maintain tests efficiently
                with smart analysis tools.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Set up and utilize MCP Server for testing</li>
                <li>Generate test cases using AI assistance</li>
                <li>Implement smart test maintenance strategies</li>
                <li>Analyze test results with AI-powered tools</li>
                <li>Optimize testing processes continuously</li>
              </ul>
            </div>

            {/* Module 7 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/30">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">7. Version Control & CI/CD</h2>
              <p className="text-gray-300 mb-4">
                Master version control with Git and GitHub Desktop, and learn how to implement continuous
                integration and deployment pipelines. Understand how to automate test execution and manage
                deployments effectively.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Master Git workflow and GitHub Desktop operations</li>
                <li>Implement effective branch management strategies</li>
                <li>Set up and configure Jenkins pipelines</li>
                <li>Integrate automated tests in CI/CD pipeline</li>
                <li>Manage deployments across different environments</li>
              </ul>
            </div>

            {/* Module 8 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/30">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">8. AI Integration & Future Skills</h2>
              <p className="text-gray-300 mb-4">
                Prepare for the future of software development and testing with advanced AI integration skills.
                Learn prompt engineering, work with AI agents, and understand how to leverage AI for code
                review and debugging.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Utilize AI tools for development and testing</li>
                <li>Master prompt engineering techniques</li>
                <li>Work with AI agents for automated tasks</li>
                <li>Implement AI-assisted code review processes</li>
                <li>Stay ahead with emerging AI technologies</li>
              </ul>
            </div>

            {/* Career Impact */}
            <div className="mt-12 p-6 bg-cyan-900/30 rounded-lg border border-cyan-400">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300 text-center">Career Impact</h2>
              <p className="text-gray-200 text-center">
                Upon completion of this comprehensive course, you&apos;ll be equipped with cutting-edge skills in
                software development, testing, and AI integration. You&apos;ll be prepared to take on roles such as:
              </p>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <li className="text-cyan-300">Full Stack Developer</li>
                <li className="text-cyan-300">Test Automation Engineer</li>
                <li className="text-cyan-300">QA Automation Specialist</li>
                <li className="text-cyan-300">DevOps Engineer</li>
                <li className="text-cyan-300">AI Integration Specialist</li>
                <li className="text-cyan-300">Technical Lead</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 