import React from "react";
import { Sparkles, Users, Scissors } from "lucide-react";

const Philosophy = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-16 md:py-20 bg-[#f4f3ef]">

      {/* 🔹 Header */}
      <div className="max-w-2xl mb-12 md:mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1B1C1A] mb-4">
          Our Philosophy
        </h2>

        <p className="text-[#4D4635] text-sm sm:text-base leading-relaxed">
          Founded on the principle of 'Sincere Artistry', our mission is to provide more
          than a service—we provide a sanctuary.
        </p>
      </div>

      {/* 🔹 Cards */}
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {/* Card 1 */}
        <div className="bg-[#fff] rounded-3xl p-6 md:p-8">
          <Sparkles className="text-[#7c5c12] mb-4" size={20} />

          <h3 className="font-serif text-lg md:text-xl text-[#1B1C1A] mb-3">
            Obsessive Hygiene
          </h3>

          <p className="text-[#4D4635] text-sm leading-relaxed">
            Safety is our silent promise. Every station is sanitized beyond industry
            standards between guests, ensuring a pristine environment for your peace of mind.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#fff] rounded-3xl p-6 md:p-8">
          <Users className="text-[#7c5c12] mb-4" size={20} />

          <h3 className="font-serif text-lg md:text-xl text-[#1B1C1A] mb-3">
            Family Centric
          </h3>

          <p className="text-[#4D4635] text-sm leading-relaxed">
            From a toddler's first haircut to a bride's transformative day, we are a
            home for every generation. Every age finds their voice in our chairs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#fff] rounded-3xl p-6 md:p-8">
          <Scissors className="text-[#7c5c12] mb-4" size={20} />

          <h3 className="font-serif text-lg md:text-xl text-[#1B1C1A] mb-3">
            Tailored Precision
          </h3>

          <p className="text-[#4D4635] text-sm leading-relaxed">
            We don't follow trends; we study features. Every cut and color is engineered
            to complement your facial structure and personal lifestyle.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Philosophy;