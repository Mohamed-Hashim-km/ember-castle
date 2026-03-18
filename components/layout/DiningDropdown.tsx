import React from "react";
import Link from "next/link";
import Image from "next/image";

const diningItems = [
  {
    title: "Tulip",
    subtitle: "Fine Dine Multi-Cuisine",
    link: "/dining/tulip",
    image: "/images/navImages/tulip.webp",
  },
  {
    title: "Oyster Bay",
    subtitle: "Coastal Seafood Dining",
    link: "/dining/oyster-bay",
    image: "/images/home/gallery/gallery9.webp",
  },
  {
    title: "Food & Forest",
    subtitle: "Rooftop Casual Dining",
    link: "/dining/food-and-forest",
    image: "/images/home/gallery/gallery2.webp",
  },
];

const DiningDropdown = () => {
  return (
    <div className="w-[85vw] max-w-[1200px] bg-[#001446] border-t border-[FEFFFF] shadow-2xl px-8 pt-8 pb-20 ">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {diningItems.map((item, index) => (
          <Link href={item.link} key={index} className="group block relative">
            <div className={`flex flex-col items-center h-full px-8 ${index !== 0 ? "border-l  border-[FEFFFF]" : ""}`}>
              <div className="text-center mb-6">
                <h3 className="text-white text-xl md:text-lg font-normal mb-1">{item.title}</h3>
                <p className="text-white/80 text-xl md:text-lg font-light">{item.subtitle}</p>
              </div>
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DiningDropdown;
