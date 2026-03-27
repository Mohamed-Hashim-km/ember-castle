

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
          <p className=" text-secondary">Hotel Éden, Karwar</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="mb-8">
          <p className="mb-4">
            <span className="font-medium">Last Updated:</span> January 17, 2026
          </p>
          <p className="leading-relaxed">
            Welcome to Hotel Éden, Karwar. By confirming a reservation or accessing our facilities, you enter into a binding agreement with us. These
            terms ensure the safety, comfort, and luxury experience of all our patrons.
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">1. Admission & Mandatory Identification</h2>
            <p className="mb-4">In compliance with Government of India security guidelines:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Valid ID Required:</span> All guests (including children) must present an original government-issued
                photo ID upon check-in.
              </li>
              <li>
                <span className="font-medium">Indian Nationals:</span> Aadhaar Card, Driving License, Passport, or Voter ID. (Note: PAN Cards are not
                accepted as per government norms).
              </li>
              <li>
                <span className="font-medium">Foreign Nationals:</span> Must present a valid Passport and Visa/e-Visa. A &quot;C-Form&quot; will be
                processed upon arrival.
              </li>
              <li>
                <span className="font-medium">Age Requirement:</span> The primary guest must be at least 18 years of age.
              </li>
              <li>
                <span className="font-medium">Right of Admission:</span> The Management reserves the absolute right of admission.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">2. Arrival & Departure</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Standard Timings:</span> Check-in: 13:00 (1:00 PM) | Check-out: 11:00 (11:00 AM).
              </li>
              <li>
                <span className="font-medium">Early Arrival:</span> Check-in before 09:00 AM incurs a 100% charge of the previous night’s rate.
              </li>
              <li>
                <span className="font-medium">Late Departure:</span>
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li>Until 14:00 (2:00 PM): 50% of the daily rate applies.</li>
                  <li>After 18:00 (6:00 PM): 100% of the daily rate applies.</li>
                  <li>(Both are subject to room availability).</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">3. Payment & Tax Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment is required at check-in.</li>
              <li>
                <span className="font-medium">Currency:</span> All rates are in Indian Rupees (INR).
              </li>
              <li>
                <span className="font-medium">Taxes:</span> All bookings are subject to GST as per prevailing government slabs. Any change in tax
                structure by the government will be billed additionally to the guest.
              </li>
              <li>
                <span className="font-medium">Settlement:</span> All outstanding balances (incidentals, room service, etc.) must be settled at the
                time of check-out.
              </li>
              <li>For stays exceeding 7 days, weekly settlement is mandatory.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">4. Cancellation & No-Show Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Standard Window:</span> Cancellations must be made at least 48 hours prior to arrival to avoid a 1-night
                retention charge.
              </li>
              <li>
                <span className="font-medium">Peak Season:</span> During festivals, long weekends, or &quot;Black-out&quot; dates, all bookings are
                non-cancellable and non-refundable.
              </li>
              <li>
                <span className="font-medium">No-Show:</span> In the event of a no-show or early departure, the hotel reserves the right to charge
                100% of the total confirmed booking amount.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">5. Hotel Rules & Guest Conduct</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Strict Non-Smoking Policy:</span> Smoking is strictly prohibited in all indoor guest rooms and public
                areas. A deep-cleaning fee of ₹3,000 + taxes will be levied for violations.
              </li>
              <li>
                <span className="font-medium">Visitors:</span> For security, visitors are not permitted in guest rooms after 20:00 (8:00 PM) and must
                register at the Front Desk with a valid ID.
              </li>
              <li>
                <span className="font-medium">Outside Food:</span> Consumption of outside food and beverages is not permitted within the hotel
                premises.
              </li>
              <li>
                <span className="font-medium">Damages:</span> Guests are financially liable for any damage to hotel property, furniture, or equipment
                caused by themselves or their invitees.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">6. Child & Extra Bed Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Children below 12 years stay complimentary using existing bedding.</li>
              <li>Children above 12 years are treated as adults and require an extra bed at the applicable rate.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">7. Liability & Safety</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Valuables:</span> Electronic safes are provided in rooms. The hotel is not responsible for the loss of
                cash, jewellery, or valuables left in rooms or public areas.
              </li>
              <li>
                <span className="font-medium">Force Majeure:</span> Hotel Éden is not liable for failures to perform obligations due to &quot;Acts of
                God&quot; (floods, earthquakes), power outages, or government-imposed restrictions.
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">8. Governing Law</h2>
            <p className="leading-relaxed">
              These terms are governed by Indian Law. Any disputes shall be subject to the exclusive jurisdiction of the courts in Karwar, Karnataka.
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">Contact Information</h2>
            <p className="mb-4">For any queries regarding these terms, please contact us:</p>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Address:</span> Hotel Éden, Near Mulla Stop, Kajubagh, Karwar, Karnataka 581301
              </li>
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:enquiry@hoteleden.in" className="text-blue-600 hover:underline">
                  enquiry@hoteleden.in
                </a>
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+919606948772" className="text-blue-600 hover:underline">
                  +91 9606948772
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;