import React from "react";
import { Sparkles, Users, Scissors } from "lucide-react";
import SectionBlock from "../ui/SectionBlock";
import SectionHeader from "../ui/SectionHeader";
import FeatureCard from "../ui/FeatureCard";

const values = [
  {
    icon: Sparkles,
    title: "Obsessive Hygiene",
    description:
      "Safety is our silent promise. Every station is sanitized beyond industry standards between guests, ensuring a pristine environment for your peace of mind.",
  },
  {
    icon: Users,
    title: "Family Centric",
    description:
      "From a toddler's first haircut to a bride's transformative day, we are a home for every generation. Every age finds their voice in our chairs.",
  },
  {
    icon: Scissors,
    title: "Tailored Precision",
    description:
      "We don't follow trends; we study features. Every cut and color is engineered to complement your facial structure and personal lifestyle.",
  },
];

const Philosophy = () => {
  return (
    <SectionBlock className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-16 md:py-20 bg-[#f4f3ef]">

      {/* 🔹 Header */}
      <SectionHeader
        containerClassName="max-w-2xl mb-12 md:mb-16"
        title="Our Philosophy"
        titleClassName="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1B1C1A] mb-4"
        description="Founded on the principle of 'Sincere Artistry', our mission is to provide more than a service—we provide a sanctuary."
        descriptionClassName="text-[#4D4635] text-sm sm:text-base leading-relaxed"
      />

      {/* 🔹 Cards */}
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {values.map((value) => (
          <FeatureCard
            key={value.title}
            icon={value.icon}
            cardClassName="bg-[#fff] rounded-3xl p-6 md:p-8"
            iconClassName="w-5 h-5 text-[#7c5c12] mb-4"
            title={value.title}
            titleClassName="font-serif text-lg md:text-xl text-[#1B1C1A] mb-3"
            description={value.description}
            descriptionClassName="text-[#4D4635] text-sm leading-relaxed"
          />
        ))}

      </div>

    </SectionBlock>
  );
};

export default Philosophy;