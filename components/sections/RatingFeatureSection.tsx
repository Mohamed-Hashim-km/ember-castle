"use client";

import React from "react";
import Image from "next/image";
import { StarRating } from "../ui/StarRating";

const RatingFeatureSection = () => {
  return (
    <section className="bg-white pt- pb-16 md:py-24 lg:pb-28 lg:pt-10 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-stretch">
          
          {/* Content side */}
          <div className="flex flex-col justify-between py-6">
            <div className="flex flex-col items-start gap-8 lg:gap-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                Between the Canopy<br />
                and the Tide
              </h2>
              
              <p className="text-secondary text-base md:text-lg leading-relaxed font-light text-opacity-80 max-w-lg lg:pr-8">
                Nestled within Gokarna's serene coastal landscape, Eden Ember Castle
                offers a distinguished retreat just 2.6km from the shoreline. 
                Surrounded by landscaped greenery and the soft hum of the forest, 
                the estate delivers privacy, proximity, and comfort in equal 
                measure—a sanctuary designed for the intentional traveler
              </p>
            </div>

            {/* Rating block pushed towards the bottom */}
            <div className="md:mt-16 lg:mt-auto pt-8">
              <div className="flex flex-col items-start">
                <span className="text-xl md:text-2xl font-medium tracking-wide text-[#001446]">
                  4.3 Stars
                </span>
                <span className="text-sm md:text-base text-[#001446] font-medium opacity-80 mt-1 mb-4">
                  Average Rating by Past Guests
                </span>
                <StarRating rating={4.3} />
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden">
            <Image
              src="/1.png"
              alt="Terrace seating with forest and mountains in background at sunset"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default RatingFeatureSection;
