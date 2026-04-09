import React from "react";
import { Image } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f4f2ee] pt-12 pb-6 px-4 sm:px-6 md:px-10 text-gray-700">

      {/* Top Grid */}
      <div className="grid gap-10 md:grid-cols-4 mb-10">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            Honeycombs
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            Redefining family salon experiences with premium care and ethical beauty
            practices in the heart of Akshayanagar.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-[#7a5c00] mb-4">
            QUICK LINKS
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms of Service</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-[#7a5c00] mb-4">
            OPENING HOURS
          </h4>
          <p className="text-sm text-gray-600">
            Mon - Sat: 10:00 AM – 9:00 PM
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Sunday: 10:00 AM – 7:00 PM
          </p>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-[#7a5c00] mb-4">
            LOCATION
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            123 DLF Road, Akshayanagar <br />
            Bangalore, Karnataka 560068
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[#7a5c00]">
            <FaInstagram className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
            <Image className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
           </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mb-6"></div>

      {/* Bottom */}
      <p className="text-center text-xs text-gray-500">
        © 2024 Honeycombs Family Salon. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;