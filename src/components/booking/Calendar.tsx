'use client';

import React, { useState } from 'react';

type CalendarProps = {
  onDateSelect: (date: string) => void;
  selectedDate?: string;
};

export default function Calendar({ onDateSelect, selectedDate }: CalendarProps) {
  const [visibleMonth, setVisibleMonth] = useState(new Date());

  // Format date as YYYY-MM-DD
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  // Check if a date is today
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  // Check if a date is selected
  const isSelected = (date: Date): boolean => {
    if (!selectedDate) return false;
    const formatted = formatDate(date);
    return formatted === selectedDate;
  };

  // Check if a date is in the past
  const isPast = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Get days in a month
  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get the day of the week for the first day of the month
  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
  };

  const nextMonth = (e: React.MouseEvent): void => {
    e.preventDefault(); // Prevent form submission
    const nextMonth = new Date(visibleMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setVisibleMonth(nextMonth);
  };

  const prevMonth = (e: React.MouseEvent): void => {
    e.preventDefault(); // Prevent form submission
    const prevMonth = new Date(visibleMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setVisibleMonth(prevMonth);
  };

  // Handle date click with explicit form prevention
  const handleDateClick = (e: React.MouseEvent, date: Date): void => {
    e.preventDefault(); // Prevent form submission
    if (!isPast(date)) {
      onDateSelect(formatDate(date));
    }
  };

  // Render the calendar
  const monthName = visibleMonth.toLocaleString('default', { month: 'long' });
  const year = visibleMonth.getFullYear();
  const daysInMonth = getDaysInMonth(year, visibleMonth.getMonth());
  const firstDayOfMonth = getFirstDayOfMonth(year, visibleMonth.getMonth());

  // Create an array of dates for the current month
  const dates: (Date | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    dates.push(null); // Empty cells for days before the 1st
  }
  
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(new Date(year, visibleMonth.getMonth(), i));
  }

  return (
    <div className="calendar bg-gray-800 rounded-lg p-4 select-none">
      <div className="calendar-header flex justify-between items-center mb-4">
        <button 
          type="button" // Explicitly set button type 
          onClick={prevMonth} 
          className="text-gray-300 hover:text-cyan-400"
          aria-label="Previous month"
        >
          &lt;
        </button>
        <h3 className="text-lg font-semibold text-white">{`${monthName} ${year}`}</h3>
        <button 
          type="button" // Explicitly set button type
          onClick={nextMonth} 
          className="text-gray-300 hover:text-cyan-400"
          aria-label="Next month"
        >
          &gt;
        </button>
      </div>

      <div className="calendar-grid grid grid-cols-7 gap-1">
        {/* Days of the week */}
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div key={day} className="calendar-day-name text-center text-xs text-gray-500 py-1">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {dates.map((date, index) => {
          if (!date) {
            return (
              <div key={`empty-${index}`} className="calendar-day-empty h-8" />
            );
          }

          const dayClasses = [
            'calendar-day flex items-center justify-center rounded-full w-8 h-8 text-sm cursor-pointer',
            isToday(date) ? 'bg-gray-700 text-cyan-400' : '',
            isSelected(date) ? 'bg-cyan-600 text-white' : '',
            isPast(date) ? 'text-gray-600 cursor-not-allowed' : 'hover:bg-gray-700'
          ].join(' ').trim();

          return (
            <button
              key={`day-${date.getDate()}`}
              type="button" // Explicitly set button type
              className={dayClasses}
              onClick={(e) => handleDateClick(e, date)}
              disabled={isPast(date)}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
} 