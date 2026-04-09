import React from 'react'

const services = [
  { title: "Hair Mastery", image: "/hair_mastery.png" },
  { title: "Skin Rituals", image: "/skin_rituals.png" },
  { title: "Grooming", image: "/grooming.png" },
  { title: "Spa Sanctuary", image: "/spa_sanctuary.png" },
];

const CuratedExperiences = () => {
  return (
    <section className="w-full bg-[#faf9f5] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      
      {/* Top Content */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12">
        
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif text-[#1B1C1A] mb-3">
            Curated Experiences
          </h2>

          <p className="text-xs sm:text-sm text-[#4D4635] max-w-sm sm:max-w-md leading-relaxed">
            From precision cuts to revitalizing spa treatments, our services are
            designed to rejuvenate your spirit and enhance your natural beauty.
          </p>
        </div>

        <button className="text-[10px] sm:text-xs tracking-[0.2em] text-[#735C00] border-b border-[#D4AF37] pb-1 w-fit font-bold">
          VIEW FULL MENU
        </button>
      </div>

      {/* Cards */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-4 
        gap-4 sm:gap-6
      ">
        {services.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[20px] sm:rounded-[24px] overflow-hidden group"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="
                w-full 
                h-[200px] 
                sm:h-[240px] 
                md:h-[260px] 
                lg:h-[300px] 
                object-cover 
                transition duration-500 
                group-hover:scale-105
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>

            {/* Title */}
            <p className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white text-xs sm:text-sm md:text-base font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CuratedExperiences