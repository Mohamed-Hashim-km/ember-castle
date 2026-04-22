import React from "react";

export const MapSection = () => {
  // The link that opens when the map pin is clicked
  const googleMapsLink = "https://www.google.com/maps/place/?q=place_id:ChIJJd0crvSDvjsRFpLuwjAeVlI";

  return (
    <section className="relative w-full h-[500px] md:h-[600px] bg-gray-100 overflow-hidden max-lg:flex max-lg:flex-col max-lg:h-auto">
      
      {/* Map Wrapper: Contains the iframe and the invisible pin hotspot */}
      <div className="absolute inset-0 w-full h-full max-lg:relative max-lg:h-[400px] md:max-lg:h-[500px]">
        
        {/* Invisible Clickable Hotspot JUST over the center pin */}
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-10 cursor-pointer"
          title="Open in Google Maps"
        ></a>

        {/* Google Maps iframe */}
        <iframe
          src="https://maps.google.com/maps?q=Èden%20Ember%20Castle,%20Gokarna&t=&z=17&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Floating Card */}
      <div className="bg-white px-8 hidden lg:block py-12 md:px-14 md:pt-10 md:pb-20 max-w-[340px] md:max-w-[420px] rounded-sm z-20  absolute lg:top-1/2 lg:left-20 lg:-translate-y-1/2 max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:transform-none max-lg:mx-auto max-lg:-mt-24 max-lg:w-[90%] max-lg:mb-12">
        <h2 className="text-xl font-semibold text-primary mb-6 leading-tight">
          Find Your Way to Ember Castle
        </h2>
        <p className="text-secondary text-[16px] md:text-[18px] leading-relaxed">
          Get directions instantly and plan your route with ease
        </p>
      </div>
    </section>
  );
};

export default MapSection;