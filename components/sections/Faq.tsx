"use client";

import React, { useState } from "react";
import { Dash, Plus02 } from "../utils/Icon";

const faqData = [
  {
    id: 1,
    question: "What kind of hotel is Hotel Éden?",
    answer: "A designer boutique hotel in Karwar offering stays, dining, wellness, and event spaces.",
  },
  {
    id: 2,
    question: "Who is Hotel Éden ideal for?",
    answer: "Perfect for families, couples, and business travellers.",
  },
  {
    id: 3,
    question: "What dining options are available?",
    answer: "Three in-house restaurants: Tulip, Food & Forest and Oyster Bay.",
  },
  {
    id: 4,
    question: "Do you have spa and wellness facilities?",
    answer: "Yes, we have The Golden Leaf Spa along with fitness and recreation facilities.",
  },
  {
    id: 5,
    question: "Can I host events at Hotel Éden?",
    answer: "Yes, we offer banquet and conference spaces for events and celebrations.",
  },
  {
    id: 6,
    question: "Are the hotels affordable?",
    answer: "Both properties offer a great balance of comfort, facilities, and value for money, ensuring a luxurious experience without compromise.",
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Added items-center here to vertically center the left and right columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Side: Title and Description */}
          <div className="w-full lg:w-5/12">
            <div className="mb- lg:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight capitalize">Frequently Asked Questions</h2>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="w-full lg:w-7/12">
            <div className="flex flex-col gap-4">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
                    activeId === item.id ? " " : "bg-white"
                  }`}
                >
                  {/* Header */}
                  <div className="p-5 flex justify-between items-center cursor-pointer select-none" onClick={() => toggleAccordion(item.id)}>
                    <p className="text-lg font-semibold text-primary mb-0 pr-4">{item.question}</p>
                    <span className="flex-shrink-0 text-primary">
                      {activeId === item.id ? (
                        /* Minus/Close Icon */
                        <Dash />
                      ) : (
                        /* Plus/Open Icon */
                        <Plus02 />
                      )}
                    </span>
                  </div>

                  {/* Body */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      activeId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-secondary text-base leading-relaxed mb-0">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
