import React from "react";

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
    <section className="bg-[#FBF9F5] py-14 sm:py-16 px-4 sm:px-6 md:px-10">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1B1C1A]">
          Inspiration Gallery
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[16px] group cursor-pointer shadow-sm hover:shadow-md transition"
          >
            <img
              src={src}
              alt="gallery"
              className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default Gallery;