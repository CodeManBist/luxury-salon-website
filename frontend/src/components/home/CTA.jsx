import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#735C00] py-16 sm:py-20 px-4 sm:px-6 md:px-10 text-center">
      
      {/* Content */}
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-white mb-4 leading-snug">
          Ready for a Transformation?
        </h2>

        {/* Subtext */}
        <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8">
          Step into a world of comfort and style. Your chair is waiting <br className="hidden sm:block"/>
          at Honeycombs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">

          {/* Primary Button */}
          <button type="button" onClick={() => navigate("/contact")} className="bg-[#FBF9F5] text-[#735C00] px-6 sm:px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:opacity-90 transition">
            BOOK YOUR APPOINTMENT TODAY
          </button>

          {/* Secondary Button */}
          <button type="button" onClick={() => navigate("/services")} className="border border-[#D4AF37] text-[#ffffff] px-6 sm:px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-white hover:text-[#735C00] transition">
            VIEW PRICING
          </button>

        </div>

      </div>
    </section>
  );
};

export default CTA;