import React from 'react'
import SectionBlock from '../ui/SectionBlock';
import SectionHeader from '../ui/SectionHeader';
import ImageCard from '../ui/ImageCard';

const services = [
  { title: "Hair Mastery", image: "/hair_mastery.png" },
  { title: "Skin Rituals", image: "/skin_rituals.png" },
  { title: "Grooming", image: "/grooming.png" },
  { title: "Spa Sanctuary", image: "/spa_sanctuary.png" },
];

const CuratedExperiences = () => {
  return (
    <SectionBlock className="w-full bg-[#faf9f5] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      
      {/* Top Content */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12">
        
        <SectionHeader
          title="Curated Experiences"
          titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif text-[#1B1C1A] mb-3"
          description="From precision cuts to revitalizing spa treatments, our services are designed to rejuvenate your spirit and enhance your natural beauty."
          descriptionClassName="text-xs sm:text-sm text-[#4D4635] max-w-sm sm:max-w-md leading-relaxed"
        />

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
          <ImageCard
            key={index}
            src={item.image}
            alt={item.title}
            wrapperClassName="relative rounded-[20px] sm:rounded-[24px] overflow-hidden group"
            imageClassName="
                w-full 
                h-[200px] 
                sm:h-[240px] 
                md:h-[260px] 
                lg:h-[300px] 
                object-cover 
                transition duration-500 
                group-hover:scale-105
              "
            overlayClassName="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"
            title={item.title}
            titleClassName="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white text-xs sm:text-sm md:text-base font-medium"
          />
        ))}
      </div>
    </SectionBlock>
  )
}

export default CuratedExperiences