'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'What are the prerequisites for this course?',
      answer: 'Basic programming knowledge is recommended. Familiarity with JavaScript will be helpful, but not required. We will cover all necessary concepts from the ground up.'
    },
    {
      question: 'How long does the course take to complete?',
      answer: 'The course is designed to be completed in 8 weeks with 10-15 hours of study per week. However, you can go at your own pace, and we provide lifetime access to the course materials.'
    },
    {
      question: 'Is there a certificate upon completion?',
      answer: 'Yes, after successfully completing the course and the final project, you will receive an industry-recognized certificate that you can add to your resume and LinkedIn profile.'
    },
    {
      question: 'Do you offer job placement assistance?',
      answer: 'We provide career guidance, resume review, and interview preparation. We also have partnerships with several companies that regularly hire our graduates.'
    },
    {
      question: 'Can I pay in installments?',
      answer: 'Yes, we offer flexible payment plans. You can split the cost into 3 or 6 monthly installments with no additional interest.'
    },
    {
      question: 'What if I need help during the course?',
      answer: 'You\'ll have access to our community forum where instructors and fellow students can help answer your questions. Additionally, we offer weekly office hours for more personalized assistance.'
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-cyan-500/30">
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium text-cyan-300">{item.question}</span>
            <svg
              className={`w-5 h-5 text-cyan-500 transform ${openItem === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`px-6 pb-4 ${openItem === index ? 'block' : 'hidden'}`}
          >
            <p className="text-gray-300">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 