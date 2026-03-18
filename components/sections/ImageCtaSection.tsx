"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { useBookNowModal } from "@/context/BookNowModalContext";

interface ImageCtaSectionProps {
  backgroundImage: string;
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export const ImageCtaSection: React.FC<ImageCtaSectionProps> = ({
  backgroundImage,
  title = "Your perfect stay in Karwar is just a moment away.",
  buttonText = "Book Now",
  buttonLink = "/",
  className = "",
}) => {
  const { openModal } = useBookNowModal();

  const handleButtonClick = (e: React.MouseEvent) => {
    if (buttonText.toLowerCase() === "book now") {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <section className={`w-full ${className}`}>
      {/* Desktop Version */}
      <div className="hidden md:flex relative w-full h-[60vh] min-h-[500px] items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src={backgroundImage} alt={title} fill className="object-cover" priority />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 md:px-8">
          {/* Text and Button Container */}
          <div className="max-w-4xl flex flex-col items-start gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg font-serif tracking-wide">
             Reserve Your <br  className="hidden md:block"/>
Coastal Retreat
            </h2>

            {/* Button moved under the title */}
            <a onClick={handleButtonClick} className="cursor-pointer">
              <Button aria-label={buttonText} variant="primary" className="min-w-[150px] px-8 py-3 text-lg">
                {buttonText}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden flex flex-col w-full">
        <div className="relative w-full h-[300px]">
          <Image src={backgroundImage} alt={title} fill className="object-cover" priority />
        </div>
        <div className="px-6 py-12 flex flex-col items-start text-left">
          <h2 className="text-3xl text-primary mb-8 leading-tight font-serif">{title}</h2>
          
          <a onClick={handleButtonClick} className="cursor-pointer w-full">
            <Button aria-label={buttonText} variant="outline2" className="w-full">
              {buttonText}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};