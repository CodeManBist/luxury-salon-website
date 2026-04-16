import React from "react";
import { Check } from "lucide-react";

const CTA = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-16 md:py-20">

      {/* 🔹 Container */}
      <div className="border-2 border-[#b8962e] rounded-[32px] px-6 sm:px-10 md:px-16 py-10 sm:py-12 md:py-14 text-center">

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1B1C1A]">
          Your Safety is Our Luxury
        </h2>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6  m-6">

          <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-widest text-[#1B1C1A] uppercase">
            <Check size={16} className="text-[#fff] bg-[#735C00] rounded-full" />
            Hospital Grade Sanitation
          </div>

          <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-widest text-[#1B1C1A] uppercase">
            <Check size={14} className="text-[#fff] bg-[#735C00] rounded-full" />
            Single-Use Kits
          </div>

          <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-widest text-[#1B1C1A] uppercase">
            <Check size={14} className="text-[#fff] bg-[#735C00] rounded-full" />
            Air Filtration Systems
          </div>

        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-[#4D4635] text-sm sm:text-base leading-relaxed">
          We invest in the highest levels of hygiene technology so you can close your eyes,
          breathe deep, and truly relax. At Honeycombs, excellence isn't just about the result—
          it's about the safety of the journey.
        </p>

      </div>

    </section>
  );
};

export default CTA;