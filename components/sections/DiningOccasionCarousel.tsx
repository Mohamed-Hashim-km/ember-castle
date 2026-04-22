'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

// Mock data - replace with your actual images from Supabase/CMS
const carouselImages = [
  { id: 1, src: '/images/DiningCarousel/1.jpeg', alt: 'Dining interior' },
  { id: 2, src: '/images/DiningCarousel/2.jpeg', alt: 'Outdoor terrace dining' },
  { id: 3, src: '/images/DiningCarousel/3.jpeg', alt: 'Dining setup' },
  { id: 4, src: '/images/DiningCarousel/4.jpeg', alt: 'Terrace view' },
  { id: 5, src: '/images/DiningCarousel/5.jpeg', alt: 'Restaurant interior' },
  { id: 6, src: '/images/DiningCarousel/6.jpeg', alt: 'Dining interior' },
  { id: 7, src: '/images/DiningCarousel/7.jpeg', alt: 'Outdoor terrace dining' },
  { id: 8, src: '/images/DiningCarousel/8.webp', alt: 'Dining setup' },
  { id: 9, src: '/images/DiningCarousel/9.webp', alt: 'Dining setup' },
  { id: 10, src: '/images/DiningCarousel/10.webp', alt: 'Dining setup' },
  { id: 11, src: '/images/DiningCarousel/11.webp', alt: 'Dining setup' },



];

export default function DiningOccasionCarousel() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24 w-full overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl  mx-auto px-6 text-center mb-10 md:mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-primary mb-5 md:mb-10">
          Where Dining <br className="md:hidden" /> Becomes an Occasion
        </h2>
        <p className="text-secondary text-[16px] md:text-[18px] leading-relaxed max-w-[600px] mx-auto">
          Every setting is carefully shaped to balance intimacy and grandeur,
          <br className="hidden md:block" /> creating an atmosphere worthy of every course served.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full relative">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}
          spaceBetween={16}
          slidesPerView={1.15} // Mobile: 1 main slide + small peek on edges
          breakpoints={{
            // Tablet
            640: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
            // Desktop (Matches the design exactly)
            1024: {
              slidesPerView: 3.5, 
              spaceBetween: 32,
            },
            // Large Desktop
            1440: {
              slidesPerView: 4.2,
              spaceBetween: 32,
            }
          }}
          className="w-full !pb-8"
        >
          {carouselImages.map((image) => (
            <SwiperSlide key={image.id} className="transition-transform duration-300">
              {({ isActive }) => (
                <div 
                  className={`relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-gray-100 transition-all duration-500 ease-in-out
                    ${isActive ? 'opacity-100 scale-100' : 'opacity-70 scale-[0.98]'}`} // Optional: adds a slight focus effect to the center slide
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={image.id === 1}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}