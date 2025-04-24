'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Calendar from '@/components/booking/Calendar';

type FormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  preferredDate: string;
  message: string;
};

export default function BookingForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormValues>({
    mode: 'onSubmit' // Ensure validation only happens on submit
  });
  
  const selectedDate = watch('preferredDate');

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Here we'll connect to our database
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }
      
      // For testing purposes, log the form data
      console.log('Form submitted:', data);
      
      // Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Safely handle date selection without form submission
  const handleDateSelect = (date: string) => {
    setValue('preferredDate', date, { shouldValidate: false }); // Set value without triggering validation
  };

  // Handle the form submission event
  const formSubmit = handleSubmit(onSubmit);

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault(); // Explicitly prevent default form submission
        formSubmit(e); // Then manually submit via react-hook-form
      }} 
      className="space-y-6"
    >
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
          Full Name *
        </label>
        <input
          id="fullName"
          type="text"
          className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white ${errors.fullName ? 'border-red-500' : 'border-gray-600'}`}
          {...register('fullName', { required: 'Name is required' })}
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
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
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-1">
          Phone Number *
        </label>
        <input
          id="phoneNumber"
          type="tel"
          className={`w-full px-4 py-2 bg-gray-700 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white ${errors.phoneNumber ? 'border-red-500' : 'border-gray-600'}`}
          {...register('phoneNumber', { 
            required: 'Phone number is required',
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
              message: 'Invalid phone number format'
            }
          })}
          placeholder="e.g. +1 (123) 456-7890"
        />
        {errors.phoneNumber && (
          <p className="mt-1 text-sm text-red-400">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Preferred Start Date *
        </label>
        <div className="calendar-container">
          <Calendar onDateSelect={handleDateSelect} selectedDate={selectedDate} />
        </div>
        <input
          type="hidden"
          {...register('preferredDate', { required: 'Please select a date' })}
        />
        {errors.preferredDate && (
          <p className="mt-1 text-sm text-red-400">{errors.preferredDate.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Special Requirements (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-white"
          {...register('message')}
        ></textarea>
      </div>

      <div>
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          disabled={isSubmitting}
          className="w-full cyberpunk-button bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-900/30"
        >
          {isSubmitting ? 'Submitting...' : 'Book Your Slot'}
        </Button>
      </div>
    </form>
  );
} 