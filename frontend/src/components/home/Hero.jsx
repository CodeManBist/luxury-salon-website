import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/salon.jpg"
        alt="Salon"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.65)_30%,rgba(255,255,255,0.25)_55%,rgba(255,255,255,0)_75%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 w-full">

        {/* Tag */}
        <p className="text-[11px] sm:text-[13px] md:text-[14px] tracking-[3px] text-[#735C00] font-semibold mb-4 sm:mb-5">
          PREMIUM BOUTIQUE SALON
        </p>

        {/* Heading */}
        <h1 className="font-playfair 
          text-[34px] 
          sm:text-[44px] 
          md:text-[56px] 
          lg:text-[72px] 
          leading-[1.15] 
          text-[#1B1C1A] 
          max-w-[650px]"
        >
          Your Trusted <br />
          Family Salon in <br />
          <span className="text-[#735C00]">Akshayanagar</span>
        </h1>

        {/* Description */}
        <p
            className="
            font-light
            mt-4 sm:mt-5 md:mt-6
            text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px]
            max-w-[90%] sm:max-w-[420px]
            text-[#4D4635]
            leading-[1.7] sm:leading-[1.7] md:leading-[32px]
            "
        >
            Premium grooming experience in a welcoming environment, where every visit is tailored to your unique style.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 mt-6 sm:mt-8">

          {/* Main CTA */}
          <Button size="md" className="w-full sm:w-auto">
            BOOK APPOINTMENT
          </Button>

          {/* Call */}
          <Button
            variant="secondary"
            size="sm"
            className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start"
          >
            <Phone size={14} />
            Call Now
          </Button>

          {/* WhatsApp */}
          <Button
            variant="whatsapp"
            size="sm"
            className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start"
          >
            <MessageCircle size={14} />
            WhatsApp
          </Button>

        </div>
      </div>
    </section>
  );
};

export default Hero;