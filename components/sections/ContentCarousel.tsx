"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { CustomScrollbar } from "./SanctuariesSwiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Hardcoded Dummy Data
const dummyItems = [
  {
    image: "/images/indulgeInDistinctive/1.webp", // Replace with your actual image paths
    title: "Tulip",
    description: "A refined selection of global flavours, thoughtfully prepared and served in an elegant, inviting setting.",
  },
  {
    image: "/images/indulgeInDistinctive/2.webp",
    title: "Golden Leaf Spa",
    description: "A private wellness haven offering skilled therapies and a serene atmosphere designed to restore balance and ease.",
  },
  {
    image: "/images/indulgeInDistinctive/3.webp",
    title: "Barbecue & Embers",
    description: "An atmospheric outdoor setting where live grills, glowing embers, and unhurried evenings come together beautifully.",
  },
  {
    image: "/images/indulgeInDistinctive/4.webp",
    title: "The Poolside Lounge",
    description: "A relaxed yet refined space to unwind, enjoy a refreshing dip, and soak in leisurely moments by the water.",
  },
  {
    image: "/images/indulgeInDistinctive/5.webp",
    title: "Movement & Leisure",
    description: "From relaxed corners to shared experiences, every detail is shaped to offer a seamless balance of comfort, leisure, and memorable time.",
  },
];

export const ContentCarousel = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollbarProgress = dummyItems.length > 1 ? activeIndex / (dummyItems.length - 1) : 0;

  return (
    <section className="pt-12 pb-2 md:py-16 lg:py-20  bg-[#FAF5EB] overflow-hidden">
      
      {/* Header Section */}
      <div className="container mx-auto md:px-4">
        <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">Indulge in Distinctive <br  className="hidden md:block"/> Experiences</h2>
        </div>
      </div>

      {/* --- Swiper & Buttons Wrapper --- */}
      <div className="container mx-auto md:px-4 relative group/slider">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.2}
          loop={true}
          navigation={{
            prevEl,
            nextEl,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-4! md:pb-0!"
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
              loop: true,
              centeredSlides: false,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 24,
              loop: true,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
              loop: true,
              centeredSlides: false,
            },
          }}
        >
          {dummyItems.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="block h-full group ">
                {/* Image Container */}
                <div className="relative overflow-hidden mb-4 md:mb-6 aspect-[3/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Text Container */}
                <h3 className="text-primary font-medium text-lg md:text-xl md:mb-4  tracking-wide leading-snug transition-colors duration-300 ">
                  {item.title}
                </h3>
                {item.description && <p className="text-secondary text-sm md:text-base leading-relaxed mb-6 flex-grow hidden md:block">{item.description}</p>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile-only CustomScrollbar */}
        <div className="md:hidden pb-4">
          <CustomScrollbar
            progress={scrollbarProgress}
            totalSlides={dummyItems.length}
            onSeek={(targetIndex) => {
              swiperRef.current?.slideTo(targetIndex);
            }}
          />
        </div>

        {/* --- Navigation Buttons (desktop only) --- */}
        <button
          ref={(node) => setPrevEl(node as any)}
          className="hidden md:flex absolute top-[40%] left-0 md:left-4 z-20 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-100 items-center justify-center transition-all duration-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17L1 9L9 0.999999" stroke="#001446" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          ref={(node) => setNextEl(node as any)}
          className="hidden md:flex absolute top-[40%] right-0 md:right-4 z-20 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-100 items-center justify-center transition-all duration-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9 9L0.999999 17" stroke="#001446" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </section>
  );
};