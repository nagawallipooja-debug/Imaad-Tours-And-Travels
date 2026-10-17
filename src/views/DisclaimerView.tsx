import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import { BUSINESS_INFO } from '../lib/site-data';

interface DisclaimerViewProps {
  onNavigateHome: () => void;
}

export const DisclaimerView: React.FC<DisclaimerViewProps> = ({ onNavigateHome }) => {
  return (
    <LegalPageLayout
      title="Website Disclaimer"
      subtitle="Important legal clarifications regarding website imagery, package quotations, religious site access, airline schedules, and sovereign entry regulations."
      lastUpdated="October 2026"
      onNavigateHome={onNavigateHome}
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">1. Illustrative Photography vs. Contracted Facilities</h2>
        <p>
          Photographs, architectural renders, and video presentations displayed on this website are provided to convey the general aesthetic, ambiance, and standard of destinations, hotels, and pilgrimage services. While we strive to show authentic images of hotels and religious sites, specific room layouts, furnishings, window vistas (e.g. Kaaba view vs. city view), and decor may vary depending on the exact room allocated by hotel front desks upon arrival.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">2. Changes in Flight Schedules & Airline Operations</h2>
        <p>
          Flight departure and arrival timings are determined and operated by scheduled commercial airlines. Flight schedules, terminal gates, transit durations, and baggage allowances remain subject to change at the sole discretion of civil aviation authorities and carrier management. Imaad International Tours & Travels is not liable for indirect costs or schedule inconveniences resulting from airline-initiated alterations or mechanical cancellations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">3. Availability of Flights & Hotel Inventory</h2>
        <p>
          Package prices and draft quotations (such as ₹79,000, ₹95,000, and ₹1,10,000) are indicative starting rates subject to real-time seat inventory on flights departing from Hyderabad (HYD) and room blocks in Makkah and Madinah. All bookings are subject to final confirmation at the time of written reservation and deposit receipt.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">4. Sovereign Visa & Entry Prerequisites</h2>
        <p>
          Entry requirements, health guidelines, electronic visa approvals, and border regulations are governed exclusively by the government authorities of the Kingdom of Saudi Arabia. We assist with application submissions, but the ultimate authority to issue or deny an Umrah visa rests with Saudi consular and immigration officials. Pilgrims must ensure their passports meet all regulatory criteria.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">5. Religious Site Access & Local Crowd Regulations</h2>
        <p>
          Access to sacred locations—including the Rawdah Mubarak in Masjid an-Nabawi, the Cave of Hira on Jabal al-Nour, or historical mosques—is subject to Saudi municipal crowd control guidelines, official Nusuk application appointment availability, and security measures. When authorities enforce temporary closures for maintenance, prayer crowd management, or safety, our tour guides will adjust itineraries to ensure pilgrim welfare.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">6. Accuracy of Destination Information</h2>
        <p>
          Information regarding historical landmarks, walking distances, and religious significance has been prepared with great care and reverence based on established historical traditions. However, municipal route alterations, pedestrian street remodeling around the Holy Harams, and urban developments in Makkah and Madinah may occasionally modify pedestrian walking distances.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">7. Third-Party Supplier Disclaimers</h2>
        <p>
          Our travel agency contracts with licensed third-party service providers (including airlines, coach operators, and hotel properties). While we exercise strict diligence in selecting high-caliber partners, we do not control their independent operations and cannot accept liability for disruptions caused by factors beyond our reasonable organizational control.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">8. Contact for Disclaimers & Clarifications</h2>
        <p>
          For any questions concerning website contents or travel terms:
        </p>
        <div className="p-4 bg-[#141414] border border-[#262626] rounded text-sm text-[#BDBDBD] space-y-1">
          <p><strong className="text-white">Compliance Desk:</strong> {BUSINESS_INFO.name}</p>
          <p><strong>Address:</strong> {BUSINESS_INFO.address}</p>
          <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
          <p><strong>Phone:</strong> {BUSINESS_INFO.phone}</p>
        </div>
      </section>
    </LegalPageLayout>
  );
};
