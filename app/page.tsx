import AboutLocation from "@/components/sections/AboutLocation";
import { ContentCarousel } from "@/components/sections/ContentCarousel";
import Faq from "@/components/sections/Faq";
import FeatureSection from "@/components/sections/FeatureSection";
import { Hero } from "@/components/sections/Hero";
import { ImageCtaSection } from "@/components/sections/ImageCtaSection";
import RatingFeatureSection from "@/components/sections/RatingFeatureSection";
import { SanctuariesSwiper } from "@/components/sections/SanctuariesSwiper";
import { MapSection } from "@/components/sections/MapSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import DiningOccasionCarousel from "@/components/sections/DiningOccasionCarousel";


export default function Home() {
  return (
    <div className="">
      <Hero
        videoSrc="https://palegreen-chough-359051.hostingersite.com/hotel-eden-videos/Home%20Page.mp4"
        title="The Epitome of Fine Living"
        description="A world where elegance is instinctive, comfort is elevated, and every stay is defined by thoughtful refinement."
        posterSrc="/images/cover.webp"
      />
      <AboutLocation />

      <SanctuariesSwiper />
      <RatingFeatureSection />

      <ContentCarousel />
      <ExperienceSection />
      <DiningOccasionCarousel/>
      <FeatureSection />
      

      <Faq />
      <MapSection />
      <ImageCtaSection
        backgroundImage="/images/footer.webp"
        title="Rooftop Dining Within a Nature-Inspired Ambience of Refined Elegance"
        buttonText="Book Now"
        buttonLink="/"
      />
    </div>
  );
}
