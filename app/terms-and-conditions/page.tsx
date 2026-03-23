

import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Hotel Éden",
  description: "Read our Terms and Conditions for booking policies, guest conduct, and other important information at Hotel Éden.",
};

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-primary">
      {/* Header Section - Matching PrivacyPolicy Structure */}
      <div className="pb-10 pt-28 md:pt-54">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl   mb-4">Terms and Conditions</h1>
          {/* <p className=" text-secondary">Hotel Éden, Karwar</p> */}
        </div>
      </div>

      {/* Content Section */}
  
    </div>
  );
};

export default TermsAndConditions;
