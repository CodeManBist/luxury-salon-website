import React from "react";
import { ShieldCheck, Scissors, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Pristine Hygiene",
    desc: "Medical-grade sterilization and single-use kits for every guest, ensuring your safety is never compromised.",
  },
  {
    icon: Scissors,
    title: "Artisan Stylists",
    desc: "Our team consists of internationally trained artists with over 10 years of experience in high-end grooming.",
  },
  {
    icon: BadgeDollarSign,
    title: "Honest Pricing",
    desc: "Luxury shouldn't be inaccessible. Enjoy premium products and services at transparent, competitive rates.",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-[#F5F3EF] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-[#FBF9F5] rounded-[24px] p-6 sm:p-8 text-center hover:shadow-md transition duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#E7D8A7] flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#6B5D2E]" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-serif text-[#2D2D2D] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;