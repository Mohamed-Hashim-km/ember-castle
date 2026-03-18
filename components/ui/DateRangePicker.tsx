"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";

interface DateRangePickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (start: Date | null, end: Date | null) => void;
  initialStart?: Date | null;
  initialEnd?: Date | null;
}

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

const CrossCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11.5" stroke="#E5E7EB" />
    <path d="M15 9L9 15M9 9L15 15" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DateRangePicker: React.FC<DateRangePickerProps> = ({ isOpen, onClose, onSelect, initialStart = null, initialEnd = null }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(initialStart);
  const [endDate, setEndDate] = useState<Date | null>(initialEnd);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  useEffect(() => {
    if (initialStart) setStartDate(initialStart);
    if (initialEnd) setEndDate(initialEnd);
  }, [initialStart, initialEnd]);

  if (!isOpen) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const prevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    if (newDate < new Date(today.getFullYear(), today.getMonth(), 1)) return;
    setCurrentDate(newDate);
  };

  const handleDateClick = (date: Date) => {
    if (date < today) return;
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) {
        setStartDate(date);
      } else {
        setEndDate(date);
        onSelect(startDate, date);
      }
    }
  };

  const renderCalendar = (year: number, month: number) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const blanks = Array(firstDay).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <div className="w-full">
        <div className="text-center font-medium text-primary mb-4 text-lg">
          {MONTH_NAMES[month]} {year}
        </div>
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map((d, i) => (
            <div key={i} className="text-center text-xs font-semibold text-primary">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {blanks.map((_, i) => (
            <div key={`blank-${i}`} />
          ))}
          {days.map((day) => {
            const date = new Date(year, month, day);
            const isSelectedStart = startDate?.getTime() === date.getTime();
            const isSelectedEnd = endDate?.getTime() === date.getTime();
            const isInRange = startDate && endDate && date > startDate && date < endDate;
            const isHovered = startDate && !endDate && hoverDate && date > startDate && date <= hoverDate;
            const isDisabled = date < today;

            let bgClass = "bg-white";
            let textClass = "text-[#001446]";

            if (isSelectedStart || isSelectedEnd) {
              bgClass = "bg-[#001446] text-white rounded-md";
              textClass = "text-white";
            } else if (isInRange || isHovered) {
              bgClass = "bg-[#E6F0FA]";
            }

            return (
              <div
                key={day}
                className={`relative flex flex-col items-center justify-center aspect-square cursor-pointer transition-colors ${bgClass} ${isDisabled ? "opacity-30 cursor-not-allowed" : ""}`}
                onClick={() => !isDisabled && handleDateClick(date)}
                onMouseEnter={() => !isDisabled && setHoverDate(date)}
                onMouseLeave={() => setHoverDate(null)}
              >
                <div className={`text-base font-medium ${textClass} mb-0.5`}>{day}</div>
                {/* {!isDisabled && (
                  <>
                    <div className={`text-[10px] font-medium uppercase leading-none ${textClass} opacity-70`}>INR</div>
                    <div className={`text-xs font-semibold leading-tight ${textClass}`}>1,265</div>
                  </>
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    /* CHANGE: Removed 'w-full'. 
       Using 'left-0 right-0' pins it to the BookingBar edges.
       'overflow-x-auto' ensures that if the BookingBar is too small for 2 calendars, 
       it scroll internally rather than pushing the BookingBar's width.
    */
    <div className="absolute top-full left-0 right-0  bg-white  rounded-sm  p-8 z-[60] flex flex-col animate-in fade-in zoom-in-95 duration-200 overflow-x-auto min-w-0">
      <div className="flex gap-4 mb-8 min-w-[600px]">
        <div className={`flex-1 border-2 py-2 text-center transition-colors ${!endDate ? "border-primary" : "border-secondary"}`}>
          <div className="text-gray-500 text-xs md:text-md mb-1">Check-In Date</div>
          <div className="text-lg font-medium text-[#001446]">{startDate ? startDate.toLocaleDateString() : "-"}</div>
        </div>
        <div className={`flex-1 border-2 py-2 text-center transition-colors ${startDate && !endDate ? "border-primary" : "border-secondary"}`}>
          <div className="text-gray-500 text-xs md:text-md mb-1">Check-Out Date</div>
          <div className="text-lg font-medium text-[#001446]">{endDate ? endDate.toLocaleDateString() : "-"}</div>
        </div>
      </div>

      <div className="flex relative min-w-[600px]">
        <button
          onClick={prevMonth}
          className="absolute left-0 top-2 p-2 hover:bg-gray-100 rounded-full z-10"
          disabled={currentDate <= new Date(today.getFullYear(), today.getMonth(), 1)}
          aria-label="Previous month"
        >
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="transform rotate-180">
            <path d="M1 9L5 5L1 1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="grid grid-cols-2 gap-12 w-full px-8">
          {renderCalendar(currentDate.getFullYear(), currentDate.getMonth())}
          {renderCalendar(
            currentDate.getMonth() === 11 ? currentDate.getFullYear() + 1 : currentDate.getFullYear(),
            currentDate.getMonth() === 11 ? 0 : currentDate.getMonth() + 1,
          )}
        </div>

        <button onClick={nextMonth} className="absolute right-0 top-2 p-2 hover:bg-gray-100 rounded-full z-10" aria-label="Next month">
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path d="M1 9L5 5L1 1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#001446]"></div>
            <span className="text-gray-600 text-xs font-medium">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-secondary bg-white"></div>
            <span className="text-gray-600 text-xs font-medium">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <CrossCircleIcon />
            <span className="text-gray-600 text-xs font-medium">Please Contact The Resort</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F2D2BD]"></div>
            <span className="text-gray-600 text-xs font-medium">Restrictions Apply</span>
          </div>
        </div>

        <Button variant="tertiary" className="text-xs py-2 px-4" onClick={onClose} aria-label="Close date picker">
          Close
        </Button>
      </div>
    </div>
  );
};
