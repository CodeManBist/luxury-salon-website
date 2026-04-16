import React, { useState } from "react";
import SectionBlock from "../ui/SectionBlock";
import ImageCard from "../ui/ImageCard";

const categories = [
  "All Works",
  "Hair Styling",
  "Color Artistry",
  "Interiors",
  "Nail Spa",
];

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    category: "Interiors",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    category: "Color Artistry",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
    category: "Interiors",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
    category: "Hair Styling",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4",
    category: "Hair Styling",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    category: "Hair Styling",
  },
];

const GallerySection = () => {
  const [active, setActive] = useState("All Works");

  const filtered =
    active === "All Works"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <SectionBlock className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 mt-10">

      {/* 🔹 Filters */}
      <div className="relative mb-8">
        
        {/* 👉 Right fade (scroll hint) */}
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />

        <div className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar pr-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition ${
                active === cat
                  ? "bg-[#7c5c12] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Image Grid */}
      <div
        className="
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {filtered.map((img) => (
          <ImageCard
            key={img.id}
            src={img.src}
            alt=""
            wrapperClassName="overflow-hidden rounded-2xl group"
            imageClassName="w-full h-[260px] sm:h-[220px] md:h-[240px] lg:h-[260px] object-cover transition duration-500 group-hover:scale-105"
          />
        ))}
      </div>

    </SectionBlock>
  );
};

export default GallerySection;