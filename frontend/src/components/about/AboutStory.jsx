import React from "react";

const AboutStory = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-16 md:py-20">

      <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* 🔹 LEFT (IMAGE + CARD) */}
        <div className="flex justify-center lg:justify-start">
          
          <div className="relative">

            {/* Circle Image */}
            <div className="w-[260px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-full overflow-hidden border-[8px] border-[#eae6df] shadow-md">
              <img
                src="/man.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-0 right-[-10%] sm:right-[-5%] bg-[#f3efe9] rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg w-[220px] sm:w-[260px]">
              
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                "Beauty begins the moment you decide to be yourself. We are just here to help you shine."
              </p>

              <p className="text-[10px] tracking-widest text-[#7c5c12] uppercase">
                — Elena V., Founder
              </p>

            </div>

          </div>

        </div>

        {/* 🔹 RIGHT CONTENT */}
        <div className="max-w-xl">

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 leading-snug">
            A Decade of <br className="hidden sm:block"/> Warmth & Care
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
            Honeycombs was born in a small studio with three chairs and a big
            dream: to create a salon where the atmosphere was as nourishing as
            the treatments.
          </p>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
            Over the last ten years, we have grown into a multi-award-winning
            family salon, but our core remains unchanged. We treat every guest
            like family, and every strand with the respect it deserves.
          </p>

          {/* Stats */}
          <div className="flex gap-10 sm:gap-14">

            <div>
              <p className="text-2xl sm:text-3xl font-serif text-[#7c5c12]">
                15k+
              </p>
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                Happy Clients
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-serif text-[#7c5c12]">
                12
              </p>
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                Master Stylists
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutStory;