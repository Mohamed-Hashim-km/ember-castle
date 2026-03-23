"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { CustomScrollbar } from "./SanctuariesSwiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// --- DUMMY DATA ---
const STATIC_TITLE = "About Location";
const STATIC_DESCRIPTION = "Explore the hidden gems, serene beaches, and lush green landscapes of the coastal paradise.";

const DUMMY_POSTS = [
  {
    id: 1,
    image: "/1.png",
    category: "2 KM AWAY",
    title: "Rabindranath Tagore Beach",
    description: "A beautiful stretch of sand perfect for evening strolls.",
  },
  {
    id: 2,
    image: "/1.png",
    category: "10 KM AWAY",
    title: "Devbagh Beach Resort",
    description: "A tranquil island getaway surrounded by casuarina groves.",
  },
  {
    id: 3,
    image: "/1.png",
    category: "6 KM AWAY",
    title: "Sadashivgad Fort",
    description: "Historic ruins offering panoramic views of the Kali River.",
  },
];

const AboutLocation = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollbarProgress = DUMMY_POSTS.length > 1 ? activeIndex / (DUMMY_POSTS.length - 1) : 0;

  return (
    <div className=" pb-5 md:pb-0 md:pt-32 bg-white">
      <div className="container mx-auto md:px-4">
        {/* Header Section */}
        <div className="flex justify-center text-center mb-8 md:mb-14">
          <div className="md:max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight  text-primary">
              {STATIC_TITLE}
            </h2>
          </div>
        </div>

        {/* Swiper Section Container */}
        <div className="w-full relative group/slider">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={false}
            navigation={{
              prevEl: prevEl,
              nextEl: nextEl,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1, loop: true, spaceBetween: 24, centeredSlides: false },
              768: { slidesPerView: 2, loop: true, spaceBetween: 24, centeredSlides: false },
              1024: { slidesPerView: 3, loop: true, spaceBetween: 24, centeredSlides: false },
            }}
            className="pb-4! md:pb-0!"
          >
            {DUMMY_POSTS.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="h-full">
                  <div className="block h-full">
                    <div className="group relative h-full min-h-[400px] overflow-hidden  p-8 flex flex-col justify-end items-center transition-all duration-500 ease-in-out cursor-pointer hover:z-10">
                      
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover pointer-events-none"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                      />

                      {/* Dark Gradient Overlay at Bottom */}
                      <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-0"></div>

                      <div className="relative z-10 text-center">
                        {/* Location / Distance Text */}
                        <p className="text-white/90 text-sm font-medium mb-2 uppercase tracking-wider">
                          {item.category}
                        </p>

                        {/* Title Text */}
                        <h3 className="text-white text-2xl font-semibold mb-0">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile-only CustomScrollbar */}
          <div className="md:hidden pb-4">
            <CustomScrollbar
              progress={scrollbarProgress}
              totalSlides={DUMMY_POSTS.length}
              onSeek={(targetIndex) => {
                swiperRef.current?.slideTo(targetIndex);
              }}
            />
          </div>

          {/* Previous Button - desktop only */}
          <button
            ref={(node) => setPrevEl(node)}
            className="hidden md:flex absolute top-1/2 -left-4 md:-left-6 z-20 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed opacity-0 group-hover/slider:opacity-100"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next Button - desktop only */}
          <button
            ref={(node) => setNextEl(node)}
            className="hidden md:flex absolute top-1/2 -right-4 md:-right-6 z-20 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed opacity-0 group-hover/slider:opacity-100"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutLocation;