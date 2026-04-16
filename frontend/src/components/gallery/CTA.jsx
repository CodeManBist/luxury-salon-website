import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-16">
      
      {/* 🔹 Container */}
      <div className="bg-[#f1ece6] rounded-3xl px-6 sm:px-10 md:px-16 py-10 sm:py-14 text-center">
        
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-4xl font-serif text-gray-800 mb-4">
          Ready to find your signature look?
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm sm:text-base mb-8">
          Consultations are complimentary. Excellence is guaranteed.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
          
          {/* Primary */}
          <button type="button" onClick={() => navigate("/contact")} className="w-full sm:w-auto bg-[#7c5c12] text-white px-6 sm:px-8 py-3 rounded-full text-sm font-medium">
            BOOK YOUR VISIT
          </button>

          {/* Secondary */}
          <button type="button" onClick={() => navigate("/about")} className="w-full sm:w-auto border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-full text-sm font-medium">
            MEET THE STYLISTS
          </button>

        </div>

      </div>

    </section>
  );
};

export default CTA;