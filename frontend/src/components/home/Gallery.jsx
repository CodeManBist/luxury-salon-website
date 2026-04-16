import React from "react";
import SectionBlock from "../ui/SectionBlock";
import SectionHeader from "../ui/SectionHeader";
import ImageCard from "../ui/ImageCard";

const images = [
  "/gallary1.png",
  "/gallary2.png",
  "/gallary3.png",
  "/gallary4.png",
  "/gallary5.png",
  "/gallary6.png",
];

const Gallery = () => {
  return (
    <SectionBlock className="bg-[#FBF9F5] py-14 sm:py-16 px-4 sm:px-6 md:px-10">

      {/* Heading */}
      <SectionHeader
        align="center"
        containerClassName="mb-12"
        title="Inspiration Gallery"
        titleClassName="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1B1C1A]"
      />

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        
        {images.map((src, index) => (
          <ImageCard
            key={index}
            src={src}
            alt="gallery"
            wrapperClassName="overflow-hidden rounded-[16px] group cursor-pointer shadow-sm hover:shadow-md transition"
            imageClassName="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover transition duration-300 group-hover:scale-105"
          />
        ))}

      </div>
    </SectionBlock>
  );
};

export default Gallery;