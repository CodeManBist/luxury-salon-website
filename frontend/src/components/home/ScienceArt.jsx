import React from "react";
import { CheckCircle } from "lucide-react";
import SectionBlock from "../ui/SectionBlock";

const standards = [
  {
    title: "Advanced Scalp Diagnosis",
    description: "Using digital analysis to recommend the perfect ritual.",
    descriptionClassName: "mt-[3px] text-xs text-[#4D4635]",
  },
  {
    title: "Precision Color Chemistry",
    description: "Custom-mixed ammonia-free dyes for vibrant, lasting results.",
    descriptionClassName: "mt-[3px] text-xs text-[#4D4635]",
  },
];

const ScienceArt = () => {
  return (
    <SectionBlock className="w-full bg-[#FBF9F5] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          
          {/* Main Image */}
          <img
            src="/science_art.png"
            alt="Salon Products"
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover rounded-[28px]"
          />

          {/* Floating Card */}
          <div className="
            absolute 
            -bottom-10
            right-6 
            sm:right-10 
            lg:right-[-40px]
            bg-[#E3E2DE] 
            rounded-[20px] 
            shadow-lg 
            p-5 sm:p-6 
            w-[85%] sm:w-[320px]
          ">
            <h4 className="text-sm font-serif text-[#735C00] mb-2">
              Signature Care
            </h4>
            <p className="text-xs text-[#4D4635] leading-relaxed">
              We exclusively use biodegradable, cruelty-free premium products from leading international brands.
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="mt-10 lg:mt-0">
          
          {/* Small Label */}
          <p className="text-[12px] tracking-[0.25em] text-[#7F7663] mb-3 font-bold">
            THE HONEYCOMBS STANDARD
          </p>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif text-[#1B1C1A] leading-tight mb-4">
            Science Meets Art in <br className="hidden sm:block" />
            Every Stroke
          </h2>

          {/* Description */}
          <p className="text-sm text-[#4D4635] leading-relaxed mb-6 max-w-lg">
            We combine ancient wellness techniques with cutting-edge styling technology. From cold-pressed essential oils to ceramic heat tools, every element of your visit is optimized for hair health and skin radiance.
          </p>

          {/* Features */}
          <div className="space-y-4">

            {standards.map((standard) => (
              <div key={standard.title} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#735C00] mt-1" />
                <div>
                  <p className="text-sm font-bold text-[#1B1C1A]">
                    {standard.title}
                  </p>
                  <p className={standard.descriptionClassName}>
                    {standard.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </SectionBlock>
  );
};

export default ScienceArt;