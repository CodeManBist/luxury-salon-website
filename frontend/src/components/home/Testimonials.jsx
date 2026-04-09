import React from "react";

const testimonials = [
  {
    name: "Ananya Priya",
    role: "Local Guide",
    initials: "AP",
    text: `"The most relaxing facial I’ve ever had. The staff is professional and the ambiance in Akshayanagar is unmatched."`,
  },
  {
    name: "Rohan Kapoor",
    role: "Tech Lead",
    initials: "RK",
    text: `"Finally a family salon that actually understands modern grooming. My son and I both left looking our best!"`,
  },
  {
    name: "Sonia Mehta",
    role: "Educator",
    initials: "SM",
    text: `"Excellent bridal services. They truly made me feel like royalty on my big day. Highly recommend the hair spa too."`,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F5F3EF] py-12 sm:py-16 px-4 sm:px-6 md:px-10">
      
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1B1C1A]">
          Client Stories
        </h2>
        <div className="w-14 h-[2px] bg-yellow-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-[28px] p-6 sm:p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition duration-300"
          >
            {/* Stars */}
            <div className="text-[#735C00] text-[25px] mb-4 tracking-[2px]">
              ★★★★★
            </div>

            {/* Text */}
            <p className="text-[#4D4635] italic text-sm sm:text-[16px] leading-relaxed mb-6">
              {item.text}
            </p>

            {/* User */}
            <div className="flex items-center gap-3">
              
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-[#E6E2D7] flex items-center justify-center text-xs font-semibold text-[#67645B]">
                {item.initials}
              </div>

              {/* Info */}
              <div>
                <p className="text-sm font-medium text-[#1B1C1A]">
                  {item.name}
                </p>
                <p className="text-xs text-[#7F7663]">
                  {item.role}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;