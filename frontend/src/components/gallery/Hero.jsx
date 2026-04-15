import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#f7f5f2] px-4 md:px-8 lg:px-16 pt-12 pb-6">
      
      {/* Label */}
      <p className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 uppercase mb-3">
        Portfolio
      </p>

      {/* Heading */}
      <h1 className="font-serif leading-tight">
        <span className="block text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900">
          Curated
        </span>
        <span className="block text-3xl md:text-5xl lg:text-6xl text-gray-400 font-medium">
          Transformations.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-4 max-w-xl text-gray-600 text-sm md:text-base leading-relaxed">
        Step into our world of tactile beauty. A collection of our most stylists'
        precision work, from sun-kissed balayage to the architectural elegance of our studio.
      </p>

    </section>
  );
};

export default Hero;