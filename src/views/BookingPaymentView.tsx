import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import { BUSINESS_INFO } from '../lib/site-data';

interface BookingPaymentViewProps {
  onNavigateHome: () => void;
}

export const BookingPaymentView: React.FC<BookingPaymentViewProps> = ({ onNavigateHome }) => {
  return (
    <LegalPageLayout
      title="Booking & Payment Policy"
      subtitle="Comprehensive guidelines on quotation generation, accepted payment methods, deposit schedules, invoice issuance, and fraud prevention."
      lastUpdated="October 2026"
      onNavigateHome={onNavigateHome}
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">1. Enquiry & Quotation Process</h2>
        <p>
          Prospective pilgrims may request package quotations through our website enquiry form, WhatsApp dialogue, or in-person consultation at our Hyderabad office. Every quotation outlines:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-[#BDBDBD]">
          <li>Specific travel dates and duration (e.g. 15-day itinerary).</li>
          <li>Departure airport (Hyderabad Rajiv Gandhi International Airport HYD).</li>
          <li>Hotel names and verified distances from Masjid al-Haram and Masjid an-Nabawi.</li>
          <li>Room configuration (Quad, Triple, or Double sharing).</li>
          <li>Catering arrangements (daily Indian buffet breakfast, lunch, and dinner).</li>
          <li>Exact price per person in Indian Rupees (INR).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">2. Booking Confirmation & Reservation Process</h2>
        <p>
          A reservation is confirmed only after:
        </p>
        <ol className="list-decimal list-inside space-y-1 pl-2 text-sm text-[#BDBDBD]">
          <li>Submission of clear passport bio-page copies (valid for at least 6 months).</li>
          <li>Receipt of the designated advance booking deposit.</li>
          <li>Issuance of an official stamped Booking Confirmation Voucher and serial-numbered payment receipt from our office.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">3. Accepted Payment Channels</h2>
        <p>
          To ensure security and accounting transparency, payments should only be made through verified official channels:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-[#BDBDBD]">
          <li><strong>Bank Wire / Online Transfer:</strong> Direct NEFT, RTGS, or IMPS into the designated corporate current bank account of <em>Imaad International Tours & Travels</em>.</li>
          <li><strong>Office In-Person Payments:</strong> Cheques or authorized electronic transfers executed at our registered office in Bandlaguda, Hyderabad.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">4. Fraud Prevention & Security Safeguard</h2>
        <div className="p-4 bg-[#1b1510] border border-[#D4AF37]/40 rounded-lg text-sm text-[#E0E0E0] space-y-2">
          <strong className="text-[#D4AF37] block">Critical Security Notice:</strong>
          <p>
            Imaad International Tours & Travels will <strong>NEVER</strong> ask you to disclose personal debit/credit card CVV numbers, net banking passwords, or OTP codes over WhatsApp, SMS, or telephone calls. Only remit funds to the officially communicated bank account in the name of our business entity.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">5. Advance Payments & Balance Deadlines</h2>
        <p>
          Standard advance payment schedules:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-[#BDBDBD]">
          <li><strong>Initial Booking Deposit:</strong> ₹25,000 to ₹40,000 per person (depending on Economy, Executive, or Luxury tier) to secure flight seats and hotel rooms.</li>
          <li><strong>Final Balance Settlement:</strong> Due 15 to 20 days prior to the departure date. For peak seasons such as Ramadan, final balance deadlines may be 30 days prior in accordance with hotel supplier rules.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">6. Invoices, Receipts & Taxes</h2>
        <p>
          For every payment received, an official itemized GST invoice and receipt voucher are issued. Prices quoted include applicable statutory taxes as outlined in your quotation. Any subsequent government tax revisions or mandatory foreign travel remittance requirements will be communicated transparently.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">7. Currency Fluctuations</h2>
        <p>
          Because international travel services are settled in foreign exchange (Saudi Riyals - SAR and US Dollars - USD), quotations are based on prevailing exchange rates at the time of quotation. In the rare event of severe currency devaluation exceeding 5% prior to final ticketing, adjustments will be reflected with supporting documentation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">8. Contact for Payment Inquiries</h2>
        <p>
          For payment verification, bank transfer details, or billing receipts:
        </p>
        <div className="p-4 bg-[#141414] border border-[#262626] rounded text-sm text-[#BDBDBD] space-y-1">
          <p><strong className="text-white">Accounts Department:</strong> {BUSINESS_INFO.name}</p>
          <p><strong>Address:</strong> {BUSINESS_INFO.address}</p>
          <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
          <p><strong>Phone:</strong> {BUSINESS_INFO.phone}</p>
        </div>
      </section>
    </LegalPageLayout>
  );
};
