"use client";

import React, { useState } from "react";

const ExperienceSection = () => {
  const [activeView, setActiveView] = useState<"street" | "360">("street");

  const streetViewUrl = "https://www.google.com/maps/embed?pb=!4v1774872506899!6m8!1m7!1sCAoSHENJQUJJaERaLXNVSmFfa0IwNnoxaFZia251a0Y.!2m2!1d14.57147478637181!2d74.31959001792978!3f303.96206793962546!4f-0.7216628388501647!5f0.7820865974627469";
  const threeSixtyUrl = "https://tours.360tourshoots.in/tours/WlY3s_kai";

  return (
    <section className="pt-10 pb-4 md:pt-24 md:pb-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-primary mb-5 md:mb-10">
              Step Into the Experience
            </h2>
            <p className="text-secondary text-[16px] md:text-[18px] leading-relaxed">
              Step into a realistic view of your destination before you arrive.
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-white py-2 px-4 md:mt-5 rounded-[3px]  border border-[#C4C4C4] ">
            <button
              onClick={() => setActiveView("street")}
              className={`px-6 py-2 transition-all duration-300 font-medium  disabled:cursor-not-allowed cursor-pointer ${
                activeView === "street"
                  ? "bg-[#6B3520] text-[#FEFEFE]"
                  : "text-primary hover:bg-gray-50"
              }`}
            >
              Google Street View
            </button>
            <button
              onClick={() => setActiveView("360")}
              className={`px-6 py-2 transition-all duration-300 font-medium  disabled:cursor-not-allowed cursor-pointer ${
                activeView === "360"
                  ? "bg-[#6B3520] text-[#FEFEFE]"
                  : "text-primary hover:bg-gray-50"
              }`}
            >
              360 View
            </button>
          </div>
        </div>

        {/* View Content */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9]  rounded-sm overflow-hidden  ">
          {activeView === "street" ? (
            <iframe
              src={streetViewUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Google Street View"
            ></iframe>
          ) : (
            <iframe
              src={threeSixtyUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="w-full h-full"
              title="360 Tour"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
