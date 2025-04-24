'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit contact form');
      }
      
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-cyan-900/50 border border-cyan-500/50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-cyan-300">Thank You!</h3>
        <p className="text-gray-300 mb-4">Your message has been sent successfully.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 px-4 py-2 rounded-sm hover:bg-cyan-900/20"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="p-3 bg-red-900/50 border border-red-500/50 rounded-md text-red-300 text-sm">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
          Subject *
        </label>
        <input
          id="subject"
          type="text"
          className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white ${errors.subject ? 'border-red-500' : 'border-gray-600'}`}
          {...register('subject', { required: 'Subject is required' })}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <div>
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          disabled={isSubmitting}
          className="w-full cyberpunk-button bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-900/30"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
} 