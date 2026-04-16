import React from "react";

const Hero = () => {
  return (
    <section className="mt-0 md:mt-6 lg:mt-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-12 md:py-16">
      
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

        {/* 🔹 LEFT CONTENT */}
        <div className="max-w-xl">

          {/* Label */}
          <p className="text-[11px] tracking-[0.25em] text-gray-400 uppercase mb-6">
            Established 2012
          </p>

          {/* Heading */}
          <h1 className="font-serif leading-[1.05] text-gray-900">

            <span className="block text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-medium">
              Crafting Beauty,
            </span>

            <span className="block text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-medium text-[#7c5c12]">
              One Soul
            </span>

            <span className="block text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-medium">
              at a Time.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
            At eoneycombs, we believe your hair is a canvas of your narrative.
            We don’t just style; we curate an experience that celebrates your
            unique identity in a space of warmth and precision.
          </p>

        </div>

        {/* 🔹 RIGHT IMAGE COMPOSITION */}
        <div className="mt-10 md:mt-12 lg:mt-0 flex justify-center lg:justify-end">
          
          <div className="relative">

            {/* BIG IMAGE */}
            <img
              src="/Luxury salon interior.png"
              alt=""
              className="
                w-[280px] sm:w-[340px] md:w-[420px] lg:w-[460px]
                h-[360px] sm:h-[420px] md:h-[520px] lg:h-[580px]
                object-cover
                rounded-[28px]
                shadow-lg
              "
            />

            {/* SMALL IMAGE (FIXED RESPONSIVE BEHAVIOR) */}
            <img
                src="/Stylist working.png"
                alt=""
                className="
                absolute
                -top-10 sm:-top-12 md:-top-20
                left-1/2 -translate-x-1/2

                w-[100px] h-[130px]
                sm:w-[130px] sm:h-[160px]
                md:w-[160px] md:h-[200px]

                object-cover
                rounded-[20px]
                shadow-md
                "
                />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;