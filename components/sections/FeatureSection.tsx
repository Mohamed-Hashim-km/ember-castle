"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { useBookNowModal } from "@/context/BookNowModalContext";

const FeatureSection = () => {
  const { openModal } = useBookNowModal();

  const handleButtonClick = (e: React.MouseEvent) => {
    openModal();
  };

  return (
    // 1. Removed "-mt-24". The section now flows naturally.
    <section className="bg-white pt-14 pb-8 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center relative">
          {/* Beige Background Box 
             (This is absolutely positioned to the center, so it stays fixed in the middle) 
          */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[550px] bg-[#E2BA86] z-0" />

          {/* Main Grid Content */}
          <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Image Section 
                2. Removed "mt-48". 
                Since the parent grid has 'items-center', the image will center itself vertically 
                against the text and the beige background automatically.
            */}
            <div className="lg:col-span-7 relative lg:top-20 h-[300px] md:h-[450px] lg:h-[600px] w-full">
              <Image src="/1.png" alt="Exclusive dinner setting" fill className="object-cover" />
            </div>

            {/* Content Section */}
            <div className="lg:col-span-5 md:bg-[#E5CAA4] lg:bg-transparent p-8 md:p-12 lg:pl-16 lg:pr-12 xl:pl-24">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl  text-primary lg:text-white mb-6">Explore Our Flavours</h2>

                {/* Divider */}
                <div className="w-40 h-[1.5px] mx-auto lg:mx-0 bg-white/80 hidden lg:block mb-8"></div>

                <p className="lg:text-white text-[#001446] text-lg leading-relaxed mb-10 font-light">
                  Elevate your evenings with exclusive dinner offerings, including curated set menus and dining credits redeemable across our
                  restaurants.
                </p>

                <Button variant="tertiary" onClick={handleButtonClick} aria-label="Explore the Dining" className="block lg:hidden w-full ">
                  Book Now
                </Button>

                {/* Desktop Button */}
                <button
                  onClick={handleButtonClick}
                  aria-label="Explore the Dining"
                  className="hidden px-6 py-2 transition-all duration-300 font-medium bg-[#001446] text-[#E2BA86] disabled:bg-[#001446]/50   disabled:cursor-not-allowed cursor-pointer lg:block "
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
