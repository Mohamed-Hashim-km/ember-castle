"use client";

import React from "react";

interface StarProps {
  fillPercentage: number;
}

const Star: React.FC<StarProps> = ({ fillPercentage }) => {
  const gradientId = React.useId();
  
  return (
    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={`${fillPercentage * 100}%`} stopColor="#E2BA86" />
          <stop offset={`${fillPercentage * 100}%`} stopColor="#E5E7EB" />
        </linearGradient>
      </defs>
      <path 
        d="M20.3333 24.0835L12.5833 18.4168L4.83333 24.0835L7.83333 14.9168L0 9.16683H9.58333L12.5833 0.000162125L15.5833 9.16683H25.1667L17.4167 14.9168L20.3333 24.0835Z" 
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: maxStars }).map((_, index) => {
        // Calculate how much of this star should be filled (between 0 and 1)
        const fillPercentage = Math.max(0, Math.min(1, rating - index));
        return <Star key={index} fillPercentage={fillPercentage} />;
      })}
    </div>
  );
};
