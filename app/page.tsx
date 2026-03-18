import AboutLocation from "@/components/sections/AboutLocation";
import { ContentCarousel } from "@/components/sections/ContentCarousel";
import Faq from "@/components/sections/Faq";
import FeatureSection from "@/components/sections/FeatureSection";
import { Hero } from "@/components/sections/Hero";
import { ImageCtaSection } from "@/components/sections/ImageCtaSection";
import RatingFeatureSection from "@/components/sections/RatingFeatureSection";
import { SanctuariesSwiper } from "@/components/sections/SanctuariesSwiper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero  videoSrc="https://palegreen-chough-359051.hostingersite.com/hotel-eden-videos/Website%20Video.mp4"
        title="The Epitome of Fine Living"
        description="A world where elegance is instinctive, comfort is elevated, and every stay is defined by thoughtful refinement."
        posterSrc="/1.png"/>
      <AboutLocation/>

      <SanctuariesSwiper />
      <RatingFeatureSection/>

      <ContentCarousel />
      <FeatureSection />


      <Faq />
      <ImageCtaSection
        backgroundImage="/1.png"
        title="Rooftop Dining Within a Nature-Inspired Ambience of Refined Elegance"
        buttonText="Book Now"
        buttonLink="/"
      />
    </div>
  );
}
