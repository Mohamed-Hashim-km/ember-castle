"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/Button";
import { DateRangePicker } from "../ui/DateRangePicker";

// --- Icons ---
const MinusIcon = () => (
  <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1H1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 1V9M9 5H1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11.5" stroke="#E5E7EB" />
    <path d="M15 9L9 15M9 9L15 15" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusSmallIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 1V11M11 6H1" stroke="#001446" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MinusSmallIcon = () => (
  <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1H1" stroke="#001446" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 9L1 5L5 1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9L5 5L1 1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

// --- Counter Component ---
interface CounterProps {
  label: string;
  value: number;
  min?: number;
  onChange: (val: number) => void;
}

const Counter: React.FC<CounterProps> = ({ label, value, min = 0, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[#001446] mb-3 text-lg">{label}</span>
      <div className="flex items-center gap-4">
        <button
          onClick={() => Math.max(min, value - 1) !== value && onChange(Math.max(min, value - 1))}
          className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          disabled={value <= min}
          aria-label={`Decrease ${label}`}
        >
          <MinusIcon />
        </button>
        <span className="w-4 text-center text-[#001446] text-sm ">{value}</span>
        <button
          onClick={() => onChange(value + 1)}
          className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label={`Increase ${label}`}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

import { useBookNowModal } from "@/context/BookNowModalContext";

// --- Main BookingBar Component ---
interface BookingBarProps {
  locations?: string[];
  defaultLocation?: string;
  enableLocationSelection?: boolean;
}

export const BookingBar: React.FC<BookingBarProps> = ({
  locations = ["Karwar", "Gokarna"],
  defaultLocation = "Karwar",
  enableLocationSelection = true,
}) => {
  const { openModal } = useBookNowModal();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);
  const mobileLocationRef = useRef<HTMLDivElement>(null);

  // --- Date Picker State ---
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  // Mobile specific state
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [currentMobileDate, setCurrentMobileDate] = useState(new Date());

  // Init mobile date on open
  useEffect(() => {
    if (isMobileExpanded) {
      // If we have a start date, show that month, else show today
      if (dateRange.start) {
        setCurrentMobileDate(new Date(dateRange.start));
      } else {
        setCurrentMobileDate(new Date());
      }
    }
  }, [isMobileExpanded, dateRange.start]);

  const handleMobilePrevMonth = () => {
    const newDate = new Date(currentMobileDate.getFullYear(), currentMobileDate.getMonth() - 1, 1);
    const today = new Date();
    if (newDate.getMonth() < today.getMonth() && newDate.getFullYear() <= today.getFullYear()) return; // Prevent going before current month
    setCurrentMobileDate(newDate);
  };

  const handleMobileNextMonth = () => {
    setCurrentMobileDate(new Date(currentMobileDate.getFullYear(), currentMobileDate.getMonth() + 1, 1));
  };

  const handleMobileDateClick = (day: number) => {
    const selectedDate = new Date(currentMobileDate.getFullYear(), currentMobileDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) return;

    if (!dateRange.start || (dateRange.start && dateRange.end)) {
      setDateRange({ start: selectedDate, end: null });
    } else {
      if (selectedDate < dateRange.start) {
        setDateRange({ start: selectedDate, end: null });
      } else {
        setDateRange({ ...dateRange, end: selectedDate });
      }
    }
  };

  useEffect(() => {
    const handleFormSubmit = () => {
      setAdults(1);
      setChildren(0);
      setSelectedLocation(defaultLocation);
      setDateRange({ start: null, end: null });
      setIsMobileExpanded(false);
    };

    window.addEventListener("bookingFormSubmitted", handleFormSubmit);
    return () => window.removeEventListener("bookingFormSubmitted", handleFormSubmit);
  }, [defaultLocation]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      let inside = false;

      if (locationRef.current && locationRef.current.contains(target)) inside = true;
      if (mobileLocationRef.current && mobileLocationRef.current.contains(target)) inside = true;

      if (!inside) {
        setIsLocationOpen(false);
      }
    };

    if (isLocationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLocationOpen]);

  const toggleLocation = () => {
    if (enableLocationSelection) {
      setIsLocationOpen(!isLocationOpen);
    }
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setIsLocationOpen(false);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
  };

  const isFormValid = (!enableLocationSelection || (enableLocationSelection && selectedLocation)) && dateRange.start && dateRange.end && adults > 0;

  return (
    <>
      {/* =========================================
          DESKTOP VERSION (Hidden on Mobile)
          ========================================= */}
      {/* FIX: Changed 'space-x-16' to 'gap-16'. Gap handles absolute children correctly. */}
      <div className="hidden lg:flex relative w-auto mx-auto bg-[#FEFEFE] py-6 px-6 flex-row items-center gap-16 rounded-sm transition-all duration-300">
        {/* Location Section */}
        {enableLocationSelection && (
          <div className="relative flex flex-col gap-1 min-w-[180px] border-b border-gray-200 pb-2" ref={locationRef}>
            <span className="text-[#001446] mb-3 text-lg tracking-wide">Location</span>
            <div className="flex items-center justify-between group cursor-pointer" onClick={toggleLocation}>
              <span className="text-secondary text-sm transition-colors ">{selectedLocation}</span>
              <span className={`transform transition-transform duration-200 ${isLocationOpen ? "rotate-180" : ""}`}>
                <ChevronDownIcon />
              </span>
            </div>

            {/* Dropdown Menu */}
            {isLocationOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden z-[9999999999999]">
                {locations.map((loc) => (
                  <div
                    key={loc}
                    className="px-4 py-3 text-sm text-[#001446] hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => handleLocationSelect(loc)}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Check-In/Check-Out Section */}
        <div className="relative flex flex-col gap-1 min-w-[220px] border-b border-gray-200 pb-2">
          <span className="text-[#001446] mb-3 text-lg tracking-wide">Check-In/Check-Out</span>
          <div className="flex items-center justify-between cursor-pointer group" onClick={() => setIsDateOpen(!isDateOpen)}>
            <span className="text-secondary text-sm transition-colors ">
              {dateRange.start && dateRange.end ? `${formatDate(dateRange.start)} - ${formatDate(dateRange.end)}` : "Select Dates"}
            </span>
            <span className={`transform transition-transform duration-200 ${isDateOpen ? "rotate-180" : ""}`}>
              <ChevronDownIcon />
            </span>
          </div>
        </div>

        {/* Adults */}
        <div className=" border-gray-200 pb-0">
          <Counter label="Adults" value={adults} min={1} onChange={setAdults} />
        </div>

        {/* Children */}
        <div className=" border-gray-200 pb-0">
          <Counter label="Children" value={children} min={0} onChange={setChildren} />
        </div>

        {/* Book Now Button */}
        <div className="">
          <Button
            variant="tertiary"
            className=""
            disabled={!isFormValid}
            onClick={() => {
              openModal({
                location: selectedLocation,
                from: dateRange.start || undefined,
                to: dateRange.end || undefined,
                adults,
                children,
              });
            }}
            aria-label="Book your stay"
          >
            Book Now
          </Button>
        </div>

        {/* Date Picker Component (Desktop) */}
        <DateRangePicker
          isOpen={isDateOpen}
          onClose={() => setIsDateOpen(false)}
          onSelect={(start, end) => {
            setDateRange({ start, end });
            if (start && end) setIsDateOpen(false);
          }}
          initialStart={dateRange.start}
          initialEnd={dateRange.end}
        />
      </div>

      {/* =========================================
          MOBILE VERSION (Hidden on Desktop)
          ========================================= */}
      <div className="lg:hidden w-full px-0">
        {/* Initial Collapsed State (The Card) */}
        {!isMobileExpanded && (
          <div className="bg-white p-6  rounded-sm w-full mx-auto" onClick={() => setIsMobileExpanded(true)}>
            <h3 className="text-[#001446] font-medium text-xl mb-4 ">Check-In/Check-Out</h3>
            <div className="flex items-center justify-between border-b border-gray-200 pb-2 cursor-pointer">
              <span className="text-gray-500 text-sm">
                {dateRange.start && dateRange.end ? `${formatDate(dateRange.start)} - ${formatDate(dateRange.end)}` : "SelectDates"}
              </span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-50">
                <path d="M1 1L5 5L9 1" stroke="#001446" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        )}

        {/* Expanded State (The Full Form) */}
        {isMobileExpanded && (
          <div className="bg-[#f9f9f9] w-full flex flex-col gap-6 py-6 px-6 rounded-b-xl  animate-in slide-in-from-top-2 duration-300">
            <h3 className="text-[#001446] font-medium text-xl ">Check-In/Check-Out</h3>
            <div className="border-b border-gray-200 pb-2 flex justify-between items-center" onClick={() => setIsMobileExpanded(false)}>
              <span className="text-gray-500 text-base">
                {dateRange.start && dateRange.end ? `${formatDate(dateRange.start)} - ${formatDate(dateRange.end)}` : "SelectDates"}
              </span>
              <span className="transform rotate-180">
                <ChevronDownIcon />
              </span>
            </div>

            {enableLocationSelection && (
              <div className="flex flex-col gap-2 pt-2" ref={mobileLocationRef}>
                <h4 className="text-[#001446] text-xl ">Location</h4>
                <div className="border-b border-gray-200 pb-2 flex justify-between items-center" onClick={() => setIsLocationOpen(!isLocationOpen)}>
                  <span className="text-gray-500 text-base">{selectedLocation}</span>
                  <span className={`transform transition-transform ${isLocationOpen ? "rotate-180" : ""}`}>
                    <ChevronDownIcon />
                  </span>
                </div>
                {isLocationOpen && (
                  <div className="bg-white border border-gray-100 shadow-sm mt-1 rounded-sm">
                    {locations.map((loc) => (
                      <div
                        key={loc}
                        className="p-3 border-b border-gray-50 last:border-none text-sm text-[#001446]"
                        onClick={() => {
                          setSelectedLocation(loc);
                          setIsLocationOpen(false);
                        }}
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-4 pt-2">
              <div
                className={`flex-1 border rounded-sm p-4 flex flex-col items-center justify-center bg-white cursor-pointer ${!dateRange.end ? "border-[#E2BA86]" : "border-gray-200"}`}
                onClick={() => setDateRange({ ...dateRange, end: null })}
              >
                <span className="text-[#001446] text-base font-medium">Check-In Date</span>
              </div>
              <div
                className={`flex-1 border rounded-sm p-4 flex flex-col items-center justify-center bg-white cursor-pointer ${dateRange.end ? "border-[#E2BA86]" : "border-gray-200"}`}
              >
                <span className="text-[#001446] text-base font-medium">Check-Out Date</span>
              </div>
            </div>

            {/* Custom Mobile Calendar */}
            <div className="pt-2 px-1">
              <div className="flex items-center justify-between gap-4 mb-6 px-2">
                <button onClick={handleMobilePrevMonth} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Previous month">
                  <ChevronLeftIcon />
                </button>
                <span className="text-[#001446] text-lg  font-medium">
                  {currentMobileDate.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
                </span>
                <button onClick={handleMobileNextMonth} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Next month">
                  <ChevronRightIcon />
                </button>
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 mb-4">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <div key={i} className="text-center text-xs  font-bold text-[#001446] opacity-60">
                    {d}
                  </div>
                ))}
              </div>

              {/* Dates Grid */}
              <div className="grid grid-cols-7 gap-y-4 gap-x-1">
                {/* Blanks */}
                {[...Array(getFirstDayOfMonth(currentMobileDate.getFullYear(), currentMobileDate.getMonth()))].map((_, i) => (
                  <div key={`b-${i}`} />
                ))}

                {/* Days */}
                {[...Array(getDaysInMonth(currentMobileDate.getFullYear(), currentMobileDate.getMonth()))].map((_, i) => {
                  const day = i + 1;
                  const date = new Date(currentMobileDate.getFullYear(), currentMobileDate.getMonth(), day);
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const isDisabled = date < today;

                  const isStart = dateRange.start && date.toDateString() === dateRange.start.toDateString();
                  const isEnd = dateRange.end && date.toDateString() === dateRange.end.toDateString();
                  const isInRange = dateRange.start && dateRange.end && date > dateRange.start && date < dateRange.end;

                  let bgClass = "";
                  let textClass = "text-[#001446]";

                  if (isStart || isEnd) {
                    bgClass = "bg-[#001446] text-white rounded-full";
                    textClass = "text-white";
                  } else if (isInRange) {
                    bgClass = "bg-[#E6F0FA] rounded-sm";
                  }

                  return (
                    <div
                      key={day}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${isDisabled ? "opacity-30 pointer-events-none" : ""}`}
                      onClick={() => handleMobileDateClick(day)}
                    >
                      <div
                        className={`w-9 h-9 flex items-center justify-center text-sm  transition-all duration-200 ${bgClass} ${textClass} ${!isStart && !isEnd && !isInRange ? "hover:bg-gray-50 rounded-full" : ""}`}
                      >
                        {day}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend Section */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#001446]"></div>
                  <span className="text-[#001446] text-sm ">Selected</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border border-gray-200 bg-white"></div>
                  <span className="text-[#001446] text-sm ">Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CrossCircleIcon />
                  <span className="text-[#001446] text-sm ">Please contact the Hotel</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D2B48C]"></div>
                  <span className="text-[#001446] text-sm ">Restrictions Apply</span>
                </div>
              </div>
            </div>

            {/* Room Control */}
            <div className="pt-6 border-t border-gray-100 mt-4">
              <h4 className="text-[#001446] text-xl  mb-6">Room 1</h4>

              {/* Adults Mobile */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-[#001446] text-lg ">Adults</div>
                  <div className="text-gray-400 text-xs font-sans mt-1">(12 Years & above)</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Decrease adults"
                  >
                    <MinusSmallIcon />
                  </button>
                  <span className="text-[#001446] w-4 text-center font-lg font-medium">{adults}</span>
                  <button
                    onClick={() => setAdults(adults + 1)}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Increase adults"
                  >
                    <PlusSmallIcon />
                  </button>
                </div>
              </div>

              {/* Children Mobile */}
              <div className="flex justify-between items-center mb-0">
                <div>
                  <div className="text-[#001446] text-lg ">Children</div>
                  <div className="text-gray-400 text-xs font-sans mt-1">(0-11 years)</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Decrease children"
                  >
                    <MinusSmallIcon />
                  </button>
                  <span className="text-[#001446] w-4 text-center font-lg font-medium">{children}</span>
                  <button
                    onClick={() => setChildren(children + 1)}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Increase children"
                  >
                    <PlusSmallIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Add Another Room */}
            {/* <div className="border-t border-gray-100 mt-4 pt-6 pb-2">
              <button className="flex items-center justify-center gap-2 w-full text-[#001446]  text-lg py-2">
                Add Another Room
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1V13M13 7H1" stroke="#001446" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div> */}

            <div className="pt-2 mx-auto">
              <Button
                variant="tertiary"
                disabled={!isFormValid}
                onClick={() => {
                  openModal({
                    location: selectedLocation,
                    from: dateRange.start || undefined,
                    to: dateRange.end || undefined,
                    adults,
                    children,
                  });
                }}
                aria-label="Book your stay"
              >
                Book Now
              </Button>
            </div>

            <div className="text-center mt-2">
              <button onClick={() => setIsMobileExpanded(false)} className="text-sm text-gray-500 underline" aria-label="Close booking bar">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
