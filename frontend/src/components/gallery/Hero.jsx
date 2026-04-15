import React from "react";

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 pt-10 md:pt-14 lg:pt-16">
      
      {/* Label */}
      <p className="text-[10px] tracking-[0.3em] text-[#a38b5f] uppercase mb-4">
        Portfolio
      </p>

      {/* Heading */}
      <h1 className="font-serif leading-[0.95]">
        
        {/* Curated */}
        <span className="block text-[42px] sm:text-[56px] md:text-[72px] lg:text-[90px] font-semibold text-black">
          Curated
        </span>

        {/* Transformations */}
        <span className="block text-[42px] sm:text-[56px] md:text-[72px] lg:text-[90px] font-normal text-gray-500">
          Transformations.
        </span>

      </h1>

      {/* Description */}
      <p className="mt-5 max-w-[500px] text-[13px] sm:text-sm md:text-base text-gray-600 leading-relaxed">
        Step into our world of tactile beauty. A collection of our master stylists'
        precision work, from sun-kissed balayage to the architectural elegance
        of our studio.
      </p>

    </section>
  );
};

export default Hero;