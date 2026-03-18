"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// Hardcoded Dummy Data
const dummyItems = [
  {
    image: "/1.png", // Replace with your actual image paths
    title: "Premium Room",
    description: "Experience luxury and comfort in our spaciously designed premium rooms.",
  },
  {
    image: "/1.png",
    title: "Dormitories",
    description: "Perfect for group stays, offering comfortable bedding and shared premium amenities.",
  },
  {
    image: "/1.png",
    title: "Luxury Villas",
    description: "Exclusive private villas offering the ultimate serene getaway and privacy.",
  },
  {
    image: "/1.png",
    title: "Tulip Dining",
    description: "Savor exquisite culinary delights at our signature in-house restaurant.",
  },
  {
    image: "/1.png",
    title: "Event Spaces",
    description: "Versatile and elegant spaces tailored for your memorable celebrations.",
  },
];

export const ContentCarousel = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  // Hardcoded Title & Description
  const title = "Explore Our Spaces";
  const description = "Discover the perfect blend of luxury, comfort, and tranquility tailored for your ultimate getaway.";

  return (
    <section className="pt-12 pb-2 md:py-16 lg:py-20  bg-[#FAF5EB] overflow-hidden">
      
      {/* Header Section */}
      <div className="container mx-auto md:px-4">
        <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">Indulge in Distinctive <br  className="hidden md:block"/> Experiences</h2>
          {/* {description && <div className="max-w-lg md:max-w-sm text-secondary text-sm md:text-lg leading-relaxed ">{description}</div>} */}
        </div>
      </div>

      {/* --- Swiper & Buttons Wrapper --- */}
      <div className="container mx-auto md:px-4 relative group/slider">
        <Swiper
          modules={[Navigation, Autoplay, Scrollbar]}
          spaceBetween={16}
          slidesPerView={1.2}
          loop={false}
          navigation={{
            prevEl,
            nextEl,
          }}
          scrollbar={{
            draggable: true,
            hide: false,
            el: ".swiper-scrollbar",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-12! md:pb-0!"
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
              <div className="block h-full group cursor-pointer">
                {/* Image Container - CHANGED aspect-3/4 TO aspect-[4/3] */}
                <div className="relative overflow-hidden mb-4 md:mb-6 aspect-[3/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Text Container */}
                <h3 className="text-primary font-medium text-base md:text-xl md:mb-4  tracking-wide leading-snug transition-colors duration-300 ">
                  {item.title}
                </h3>
                {item.description && <p className="text-secondary text-sm md:text-base leading-relaxed mb-6 flex-grow hidden md:block">{item.description}</p>}
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-scrollbar mx-auto! w-[70%]! static! h-1! mt-12! bg-gray-200! md:hidden!">
            <div className="swiper-scrollbar-drag bg-primary!"></div>
          </div>
        </Swiper>

        {/* --- Navigation Buttons --- */}
        
        {/* Previous Button - Adjusted top-[35%] to top-[40%] to match new image height */}
        <button
          ref={(node) => setPrevEl(node as any)}
          className="hidden md:flex absolute top-[40%] left-0 md:left-4 z-20 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-100 items-center justify-center transition-all duration-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17L1 9L9 0.999999" stroke="#001446" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Next Button - Adjusted top-[35%] to top-[40%] to match new image height */}
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