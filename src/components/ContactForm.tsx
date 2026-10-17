import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, AlertCircle, Phone, Mail, Calendar, Users } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/site-data';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    selectedPackage: 'Executive Umrah Package (₹95,000)',
    travelMonth: 'Upcoming Month / Soonest Departure',
    numberOfPilgrims: '2 Pilgrims',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number for WhatsApp contact';
    }
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate saving enquiry into local state
    setSubmitted(true);
  };

  const getCustomWhatsAppText = () => {
    return `Assalamu Alaikum Imaad Tours team. I submitted an enquiry on your website:
- Name: ${formData.fullName}
- Phone: ${formData.phone}
- Email: ${formData.email || 'Not provided'}
- Package: ${formData.selectedPackage}
- Month: ${formData.travelMonth}
- Pilgrims: ${formData.numberOfPilgrims}
- Message: ${formData.message || 'Please send available dates and package brochure.'}`;
  };

  if (submitted) {
    return (
      <div className="bg-[#181818] border border-[#D4AF37] p-8 rounded-xl text-center space-y-4">
        <div className="w-14 h-14 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white font-serif">
          Enquiry Received with Thanks!
        </h3>
        <p className="text-sm text-[#BDBDBD] max-w-lg mx-auto">
          JazakAllah Khair <strong className="text-white">{formData.fullName}</strong>. Our Umrah pilgrimage desk in Hyderabad has recorded your details. For immediate assistance and real-time seat availability, connect with us on WhatsApp right away:
        </p>
        <div className="pt-2">
          <a
            href={getWhatsAppUrl(getCustomWhatsAppText())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span>Forward Enquiry to WhatsApp</span>
          </a>
        </div>
        <div className="pt-4">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-[#BDBDBD] hover:text-[#D4AF37] underline transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#181818] border border-[#303030] p-6 sm:p-8 rounded-xl space-y-5">
      <div>
        <h3 className="text-xl font-bold text-white font-serif">
          Request an Umrah Quotation
        </h3>
        <p className="text-xs text-[#BDBDBD] mt-1">
          Provide your travel details below and our team will get in touch with detailed pricing and itinerary options.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-white mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Mohammed Farhan"
            className={`w-full bg-[#111111] border ${
              errors.fullName ? 'border-red-500' : 'border-[#303030]'
            } rounded px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.fullName}
            </p>
          )}
        </div>

        {/* WhatsApp Mobile Number */}
        <div>
          <label className="block text-xs font-medium text-white mb-1.5">
            WhatsApp Mobile Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +91 98765 43210"
            className={`w-full bg-[#111111] border ${
              errors.phone ? 'border-red-500' : 'border-[#303030]'
            } rounded px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors`}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-white mb-1.5">
            Email Address (Optional)
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. pilgrim@example.com"
            className={`w-full bg-[#111111] border ${
              errors.email ? 'border-red-500' : 'border-[#303030]'
            } rounded px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Package Interest */}
        <div>
          <label className="block text-xs font-medium text-white mb-1.5">
            Package Category of Interest
          </label>
          <select
            value={formData.selectedPackage}
            onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
            className="w-full bg-[#111111] border border-[#303030] rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
          >
            <option value="Economy Umrah Package (₹79,000)">Economy Umrah Package (Draft ₹79,000)</option>
            <option value="Executive Umrah Package (₹95,000)">Executive Umrah Package (Draft ₹95,000)</option>
            <option value="Luxury VIP Umrah Package (₹1,10,000)">Luxury VIP Umrah Package (Draft ₹1,10,000)</option>
            <option value="Custom Family Package">Custom Family Package</option>
            <option value="Makkah & Madinah Ziyarat Only">Makkah & Madinah Ziyarat Excursion</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Travel Month */}
        <div>
          <label className="block text-xs font-medium text-white mb-1.5">
            Preferred Departure Month
          </label>
          <select
            value={formData.travelMonth}
            onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
            className="w-full bg-[#111111] border border-[#303030] rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
          >
            <option value="Upcoming Month / Soonest Departure">Upcoming Month / Soonest Departure</option>
            <option value="Next 30 - 60 Days">Next 30 - 60 Days</option>
            <option value="Rajab / Sha'ban">Rajab / Sha'ban (Pre-Ramadan)</option>
            <option value="Ramadan 2027 Season">Ramadan Season</option>
            <option value="Post-Hajj / Shawwal">Post-Hajj / Shawwal</option>
            <option value="Winter School Holidays (December / January)">Winter Holidays (Dec/Jan)</option>
          </select>
        </div>

        {/* Number of Pilgrims */}
        <div>
          <label className="block text-xs font-medium text-white mb-1.5">
            Number of Travelers
          </label>
          <select
            value={formData.numberOfPilgrims}
            onChange={(e) => setFormData({ ...formData, numberOfPilgrims: e.target.value })}
            className="w-full bg-[#111111] border border-[#303030] rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
          >
            <option value="1 Person (Individual)">1 Person (Individual)</option>
            <option value="2 Pilgrims (Couple / Family)">2 Pilgrims (Couple / Family)</option>
            <option value="3 Pilgrims (Triple Sharing)">3 Pilgrims (Triple Sharing)</option>
            <option value="4 Pilgrims (Family Quad Room)">4 Pilgrims (Family Quad Room)</option>
            <option value="5+ Pilgrims (Group Travel)">5+ Pilgrims (Group Travel)</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-white mb-1.5">
          Special Notes or Questions (Optional)
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Mention any requirements such as senior citizen wheelchair assistance, specific flight preferences, or hotel view..."
          className="w-full bg-[#111111] border border-[#303030] rounded px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#C5A253] text-black font-semibold px-6 py-3 rounded text-sm transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Submit Travel Enquiry</span>
        </button>

        <a
          href={getWhatsAppUrl(getCustomWhatsAppText())}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-5 py-3 rounded text-sm transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
          <span>Quick WhatsApp Connect</span>
        </a>
      </div>

      <p className="text-[11px] text-[#777] text-center sm:text-left">
        * We respect your privacy. Your contact details are strictly used to respond to your travel inquiry.
      </p>
    </form>
  );
};
