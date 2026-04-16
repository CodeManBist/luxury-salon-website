import React from "react";
import SectionBlock from "../ui/SectionBlock";
import SectionHeader from "../ui/SectionHeader";
import ImageCard from "../ui/ImageCard";

const stylists = [
  {
    name: "Sarah Jenkins",
    role: "Creative Director",
    desc: "Specialist in avant-garde coloring and precision bobs.",
    img: "/stylist1.jpg",
  },
  {
    name: "Marcus Thorne",
    role: "Senior Barber",
    desc: "The master of classic tapers and luxury hot towel shaves.",
    img: "/stylist2.jpg",
  },
  {
    name: "Elena Rossi",
    role: "Balayage Expert",
    desc: "Transforming locks with sun-kissed, natural dimensions.",
    img: "/stylist3.jpg",
  },
  {
    name: "Julian Brooks",
    role: "Stylist & Texturalist",
    desc: "Celebrating curls and natural textures with expert care.",
    img: "/stylist4.jpg",
  },
];

const Team = () => {
  return (
    <SectionBlock className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-16 md:py-20">

      {/* 🔹 Header */}
      <SectionHeader
        align="center"
        containerClassName="mb-12 md:mb-16"
        label="The Hands Behind The Art"
        labelClassName="text-[11px] tracking-[0.3em] text-[#7c5c12] uppercase mb-3"
        title="Meet Our Stylists"
        titleClassName="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-900"
      />

      {/* 🔹 Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {stylists.map((stylist, i) => (
          <div key={i} className="text-center">

            {/* Image */}
            <ImageCard
              src={stylist.img}
              alt={stylist.name}
              wrapperClassName="overflow-hidden rounded-3xl mb-4 group"
              imageClassName="w-full h-[260px] sm:h-[280px] object-cover object-top  transition duration-500 group-hover:scale-105"
            />

            {/* Name */}
            <h3 className="font-serif text-lg text-gray-900">
              {stylist.name}
            </h3>

            {/* Role */}
            <p className="text-[11px] tracking-widest text-[#7c5c12] uppercase mb-2">
              {stylist.role}
            </p>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] mx-auto">
              {stylist.desc}
            </p>

          </div>
        ))}

      </div>

    </SectionBlock>
  );
};

export default Team;