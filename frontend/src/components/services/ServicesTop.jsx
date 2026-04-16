import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionBlock from "../ui/SectionBlock";
import SectionHeader from "../ui/SectionHeader";

const categories = ["Hair", "Skin", "Nails", "Bridal"];

const servicesData = {
  Hair: [
    { title: "Signature Contour Cut", desc: "Precision haircut.", price: "$120+" },
    { title: "Balayage Soleil", desc: "Sun-kissed highlights.", price: "$280+" },
    { title: "Honey Silk Treatment", desc: "Frizz control.", price: "$95" },
    { title: "Luxury Blow Dry", desc: "Volume styling.", price: "$45" },
  ],
  Skin: [
    { title: "Gold Facial", desc: "Radiance boost.", price: "$165" },
    { title: "Oxygen Therapy", desc: "Deep hydration.", price: "$140" },
    { title: "Glow Peel", desc: "Skin renewal.", price: "$90" },
    { title: "Acne Therapy", desc: "Clarifying facial.", price: "$110" },
  ],
  Nails: [
    { title: "Gel Manicure", desc: "Long-lasting finish.", price: "$45" },
    { title: "Spa Pedicure", desc: "Relaxing care.", price: "$70" },
    { title: "Nail Art", desc: "Custom design.", price: "$25" },
    { title: "French Tips", desc: "Classic look.", price: "$30" },
  ],
  Bridal: [
    { title: "Bridal Makeup", desc: "Complete look.", price: "$350" },
    { title: "Pre-Bridal Package", desc: "Skin prep.", price: "$500" },
    { title: "Engagement Look", desc: "Elegant styling.", price: "$200" },
    { title: "Trial Session", desc: "Test styling.", price: "$80" },
  ],
};

const categoryMeta = {
  Hair: {
    image: "/hair.jpg",
    summary:
      "Our hair services are designed to enhance your natural beauty with precision cuts, expert coloring, and luxurious treatments tailored to your personal style.",
    ctaLabel: "BOOK CONSULTATION",
  },
  Skin: {
    image: "/skin.jpg",
    summary:
      "Targeted skin rituals combine hydration science and glow-focused therapies to restore balance, clarity, and luminosity.",
    ctaLabel: "BOOK SESSION",
  },
  Nails: {
    image: "/nails.jpg",
    summary:
      "Experience expert nail care with precision shaping, long-lasting finishes, and creative artistry designed to complement your style.",
    ctaLabel: "BOOK SESSION",
  },
  Bridal: {
    image: "/bridal.jpg",
    summary:
      "A personalized beauty experience crafted for your most special day, from trials to final look execution.",
    ctaLabel: "ENQUIRE TODAY",
  },
};

const ServicesTop = () => {
  const [active, setActive] = useState("Hair");
  const navigate = useNavigate();

  const activeServices = useMemo(() => servicesData[active] ?? [], [active]);
  const activeMeta = categoryMeta[active];

  return (
    <SectionBlock className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-10 sm:py-12 md:py-14 bg-[#FBF9F5]">
      <SectionHeader
        containerClassName="mb-8 md:mb-10"
        label="Curated Offerings"
        labelClassName="text-[11px] sm:text-xs tracking-[0.26em] text-[#7F7663] uppercase mb-2"
        title="Our Services"
        titleClassName="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1B1C1A]"
        description="Explore category-wise pricing and signature treatments tailored for your goals."
        descriptionClassName="mt-3 text-sm sm:text-base text-[#4D4635] max-w-xl leading-relaxed"
      />

      <div className="grid gap-8 lg:gap-10 lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr]">
        <aside>
          <div className="lg:sticky lg:top-24">
            <div className="mb-2 lg:hidden absolute right-0 top-0 h-full w-8 bg-linear-to-l from-[#FBF9F5] to-transparent pointer-events-none" />
            <div className="flex gap-3 overflow-x-auto no-scrollbar pr-6 lg:pr-0 lg:block lg:space-y-3 lg:overflow-visible">
              {categories.map((item) => {
                const isActive = active === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActive(item)}
                    className={`shrink-0 lg:w-full text-left px-4 py-2.5 rounded-full text-sm transition border ${
                      isActive
                        ? "bg-[#E6E2D7] text-[#1B1C1A] border-[#E6E2D7]"
                        : "text-[#57534E] border-transparent hover:bg-[#F1EEE7]"
                    }`}
                    aria-pressed={isActive}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div>
          <h2 className="font-serif text-2xl sm:text-3xl mb-6 sm:mb-8 text-[#1B1C1A]">{active}</h2>

          <div className="space-y-8 sm:space-y-10">
            <div className="rounded-3xl border border-[#E8E2D5] bg-white/60 p-4 sm:p-6 md:p-8">
              <div className="space-y-5 sm:space-y-6">
                {activeServices.map((item, i) => (
                  <div
                    key={`${item.title}-${i}`}
                    className="flex items-start justify-between border-b border-[#E6E2D7] pb-4 gap-4 sm:gap-6"
                  >
                    <div>
                      <h3 className="font-medium text-[#1B1C1A] text-sm sm:text-base">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#6B6659] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <p className="text-[#7c5c12] whitespace-nowrap font-medium text-sm sm:text-base">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f7f5f2] rounded-3xl p-5 sm:p-6 md:p-10">
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 items-center">
                <div className="flex justify-center md:justify-start">
                  <img
                    src={activeMeta.image}
                    alt={`${active} services`}
                    className="w-full max-w-[320px] h-55 sm:h-65 md:h-75 object-cover rounded-2xl"
                  />
                </div>

                <div className="max-w-md">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1B1C1A] mb-3">{active} Signature</h3>
                  <p className="text-sm sm:text-base text-[#4D4635] leading-relaxed">{activeMeta.summary}</p>
                  <button
                    type="button"
                    onClick={() => navigate("/contact")}
                    className="mt-5 text-xs sm:text-sm tracking-wide underline underline-offset-4 text-[#7c5c12]"
                  >
                    {activeMeta.ctaLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
};

export default ServicesTop;
