import React from "react";
import SectionBlock from "../ui/SectionBlock";
import SectionHeader from "../ui/SectionHeader";

const mapQuery = encodeURIComponent("1224 Amber Grove, Suite 400, San Francisco, CA 94103");
const mapSrc = `https://www.google.com/maps?q=${mapQuery}&z=14&output=embed`;
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const phoneNumber = "+919876543210";
const whatsappMessage = encodeURIComponent("Hi, I want to book an appointment.");
const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}?text=${whatsappMessage}`;

const ContactSection = () => {
  return (
    <SectionBlock className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-10 md:py-14">

      <SectionHeader
        containerClassName="max-w-3xl mb-8 md:mb-10"
        title="Plan Your Visit"
        titleClassName="font-serif text-2xl sm:text-3xl text-gray-900"
        description="Book an appointment, connect with our team, or get directions to the atelier in seconds."
        descriptionClassName="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed"
      />

      <div className="grid lg:grid-cols-2 gap-10 items-start">

        {/* ================= LEFT: FORM ================= */}
        <div className="bg-[#f7f5f2] rounded-3xl p-6 md:p-10">

          <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-3">
            Request an Appointment
          </h2>

          <p className="text-sm text-gray-500 mb-8">
            Fill in the details below and our concierge team will confirm your session within 2 hours.
          </p>

          {/* FORM */}
          <div className="grid sm:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-200 rounded-full px-4 py-3 text-sm outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="bg-gray-200 rounded-full px-4 py-3 text-sm outline-none"
            />

            <select className="bg-gray-200 rounded-full px-4 py-3 text-sm outline-none">
              <option>Signature Haircut & Style</option>
              <option>Facial</option>
              <option>Bridal</option>
            </select>

            <input
              type="date"
              className="bg-gray-200 rounded-full px-4 py-3 text-sm outline-none"
            />

          </div>

          {/* BUTTON */}
          <a href="mailto:appointments@honeycombs.com?subject=Appointment%20Request" className="mt-8 w-full bg-[#7c5c12] text-white py-3 rounded-full text-sm tracking-wide hover:opacity-90 transition inline-flex items-center justify-center">
            CONFIRM APPOINTMENT REQUEST →
          </a>

        </div>

        {/* ================= RIGHT: INFO + MAP ================= */}
        <div className="space-y-6">

          {/* INFO CARD */}
          <div className="bg-[#f7f5f2] rounded-3xl p-6 md:p-8 space-y-6">

            {/* Location */}
            <div>
              <h3 className="font-medium text-gray-900 mb-1">
                The Atelier
              </h3>
              <p className="text-sm text-gray-500">
                1224 Amber Grove, Suite 400 <br />
                San Francisco, CA 94103
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Hours of Serenity
              </h3>

              <div className="text-sm text-gray-500 space-y-1">
                <div className="flex justify-between">
                  <span>Mon — Fri</span>
                  <span>9:00 AM — 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat</span>
                  <span>10:00 AM — 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sun</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2">

              <div className="flex gap-3">

                <a href={`tel:${phoneNumber}`} className="flex-1 border rounded-full py-2 text-sm inline-flex items-center justify-center">
                  Call Us
                </a>

                <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex-1 bg-green-500 text-white rounded-full py-2 text-sm inline-flex items-center justify-center">
                  WhatsApp
                </a>

              </div>

              <p className="text-xs text-gray-500 text-center">
                If calling does not open, dial {phoneNumber}.
              </p>

            </div>

          </div>

          {/* MAP */}
          <div className="rounded-3xl overflow-hidden border border-[#E6E2D7] bg-white">
            <div className="h-62.5 md:h-75 w-full">
              <iframe
                title="Honeycombs Location Map"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between bg-[#FBF9F5]">
              <p className="text-xs sm:text-sm text-gray-600">
                Need directions? Open map in a new tab.
              </p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-medium border border-[#7c5c12] text-[#7c5c12] hover:bg-[#7c5c12] hover:text-white transition"
              >
                OPEN IN MAPS
              </a>
            </div>
          </div>

        </div>

      </div>

    </SectionBlock>
  );
};

export default ContactSection;