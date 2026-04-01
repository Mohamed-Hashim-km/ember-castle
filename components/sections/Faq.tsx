"use client";

import React, { useState } from "react";
import { Dash, Plus02 } from "../utils/Icon";

const faqData = [
  {
    id: 1,
    question: "How far is Ember Castle by Hotel Éden from Gokarna Main Beach?",
    answer: "It’s approximately 2.6 km, making beach visits quick and easy.",
  },
  {
    id: 2,
    question: "Is parking available?",
    answer: "Yes, the property offers free private parking on site.",
  },
  {
    id: 3,
    question: "Does the property have dining options?",
    answer: "Yes, an on-site restaurant serves meals including buffet breakfast with local specialties. ",
  },
  {
    id: 4,
    question: "Are there activities onsite?",
    answer:
      "Guests can enjoy the pool, garden areas, spa facilities, and fitness centre, making this a great pick for both relaxation and adventure.",
  },
  {
    id: 5,
    question: "Do guests receive any complimentary benefits with their stay?",
    answer: "Yes, guests are welcomed with a complimentary welcome drink and can enjoy free breakfast during their stay.",
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="md:py-28 pb-14 bg-white">
      <div className="container mx-auto px-4">
        {/* Added items-center here to vertically center the left and right columns */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-center">
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
