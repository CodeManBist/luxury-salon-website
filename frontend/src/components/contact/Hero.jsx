import React from "react";
import SectionBlock from "../ui/SectionBlock";
import SectionHeader from "../ui/SectionHeader";

const Hero = () => {
  return (
    <SectionBlock className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-12">
      <SectionHeader
        containerClassName="max-w-4xl"
        label="Reserve Your Moment"
        labelClassName="text-[11px] tracking-[0.3em] text-[#735C00] font-semibold uppercase mb-6"
        title={
          <>
            <span className="block text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-medium italic">
              Elevated beauty,
            </span>
            <span className="block text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-medium italic">
              tailored specifically
            </span>
            <span className="block text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-medium italic">
              for you.
            </span>
          </>
        }
        titleClassName="font-serif text-[#1B1C1A] leading-[1.05]"
        description="Share your preferred service and time. Our concierge team will confirm your appointment quickly."
        descriptionClassName="mt-6 text-sm sm:text-base text-[#4D4635] leading-relaxed max-w-xl"
      />

      <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
        <span className="px-3 py-1.5 rounded-full bg-[#F3EEE2] text-[#6B5D2E] text-[11px] sm:text-xs tracking-wide">
          Quick Confirmation
        </span>
        <span className="px-3 py-1.5 rounded-full bg-[#F3EEE2] text-[#6B5D2E] text-[11px] sm:text-xs tracking-wide">
          Premium Hygiene
        </span>
        <span className="px-3 py-1.5 rounded-full bg-[#F3EEE2] text-[#6B5D2E] text-[11px] sm:text-xs tracking-wide">
          Personalized Care
        </span>
      </div>
    </SectionBlock>
  );
};

export default Hero;