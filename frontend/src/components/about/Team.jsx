import React from "react";

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
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-16 md:py-20">

      {/* 🔹 Header */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[11px] tracking-[0.3em] text-[#7c5c12] uppercase mb-3">
          The Hands Behind The Art
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-900">
          Meet Our Stylists
        </h2>
      </div>

      {/* 🔹 Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {stylists.map((stylist, i) => (
          <div key={i} className="text-center">

            {/* Image */}
            <div className="overflow-hidden rounded-3xl mb-4 group">
              <img
                src={stylist.img}
                alt={stylist.name}
                className="w-full h-[260px] sm:h-[280px] object-cover object-top  transition duration-500 group-hover:scale-105"
              />
            </div>

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

    </section>
  );
};

export default Team;