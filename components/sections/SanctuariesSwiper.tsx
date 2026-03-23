"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "../ui/Button";

// ==========================================
// 1. REUSABLE CUSTOM SCROLLBAR COMPONENT
// ==========================================
interface CustomScrollbarProps {
  progress: number;
  totalSlides: number;
  onSeek: (targetIndex: number) => void;
  thumbColor?: string;
  trackColor?: string;
}

export const CustomScrollbar = ({
  progress,
  totalSlides,
  onSeek,
  thumbColor = "#E2BA86",
  trackColor = "#E5E5E5",
}: CustomScrollbarProps) => {
  const thumbWidthPercent = totalSlides > 0 ? 100 / totalSlides : 100;

  return (
    <div className="flex justify-center w-full max-w-[300px] mx-auto mt-10 md:mt-12 pb-8">
      <div
        className="relative w-full h-[4px] shrink-0 overflow-hidden cursor-pointer rounded-full"
        style={{ backgroundColor: trackColor }}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const clickPercent = clickX / rect.width;
          
          const targetSlide = Math.floor(clickPercent * totalSlides);
          onSeek(Math.min(Math.max(targetSlide, 0), totalSlides - 1));
        }}
      >
        <motion.div
          className="absolute top-0 bottom-0 rounded-full"
          style={{ 
            backgroundColor: thumbColor,
            width: `${thumbWidthPercent}%` 
          }}
          animate={{
            left: `${progress * (100 - thumbWidthPercent)}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      </div>
    </div>
  );
};

// ==========================================
// 2. MAIN SWIPER COMPONENT
// ==========================================

const LeftArrow = () => (
  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 17L1 9L9 0.999999" stroke="#001446" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RightArrow = () => (
  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L9 9L0.999999 17" stroke="#001446" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SanctuariesSwiper = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const rooms = [
    { title: "Two-Level\nLuxury Villa", price: "1,265", image: "/1.png" },
    { title: "1-Bedroom Pool\nView Villa", price: "1,265", image: "/1.png" },
    { title: "2-Bedroom\nFamily Villa", price: "1,265", image: "/1.png" },
    { title: "3-Bedroom\nFamily Villa", price: "1,265", image: "/1.png" }
  ];

  // Duplicate the array to ensure Swiper has enough slides to loop smoothly
  const displayRooms = [...rooms, ...rooms];

  // Calculate progress purely based on the original 4 items
  const scrollbarProgress = rooms.length > 1 ? activeIndex / (rooms.length - 1) : 0;

  return (
    <section className=" md:py-24 w-full relative overflow-hidden md:overflow-visible">
      <div className="container mx-auto  md:px-12 lg:px-28 relative">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-14 text-primary leading-tight">
          The Sanctuaries
        </h2>

        <div className="w-full">
          <Swiper
            modules={[Navigation,Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              // Modulo division ensures the index stays between 0 and 3
              setActiveIndex(swiper.realIndex % rooms.length);
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 30, loop: true, centeredSlides: false },
              1024: { slidesPerView: 3, spaceBetween: 50, loop: true, centeredSlides: false },
            }}
            className="pb-4! md:pb-0!"
          >
            {/* Map over the duplicated displayRooms array */}
            {displayRooms.map((room, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="flex flex-col h-full">
                  <div className="relative w-full aspect-4/5 lg:aspect-3/3 mb-6 overflow-hidden bg-gray-100">
                    <Image
                      src={room.image}
                      alt={room.title.replace("\n", " ")}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="flex flex-col grow">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-primary font-medium text-base md:text-xl md:mb-6 leading-[1.4] transition-colors duration-300 whitespace-pre-line mr-4">
                        {room.title}
                      </h3>
                      <div className="text-right flex flex-col items-end min-w-[60px]">
                        <span className="block text-sm text-secondary uppercase tracking-widest mb-1">INR</span>
                        <span className="block text-lg text-secondary font-light">{room.price}</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto items-start flex">
                      <Button variant="tertiary">Check Availability</Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile-only scrollbar */}
          <div className="md:hidden">
            <CustomScrollbar 
              progress={scrollbarProgress} 
              totalSlides={rooms.length} // Force the scrollbar to only see 4 slides
              onSeek={(targetIndex) => {
                swiperRef.current?.slideToLoop(targetIndex);
              }} 
            />
          </div>
        </div>

        {/* Custom Navigation Buttons (Desktop) - No background or borders */}
        <button 
          className="hidden md:flex absolute top-[60%] lg:top-[50%] left-0 md:left-4 z-20 -translate-x-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center cursor-pointer transition-opacity duration-300 hover:opacity-70"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
        >
          <LeftArrow />
        </button>

        <button 
          className="hidden md:flex absolute top-[60%] lg:top-[50%] right-0 md:right-4 z-20 translate-x-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center cursor-pointer transition-opacity duration-300 hover:opacity-70"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        >
          <RightArrow />
        </button>

      </div>
    </section>
  );
};