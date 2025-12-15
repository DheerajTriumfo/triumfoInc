import { useState } from "react";
import Image from "next/image";

export default function BoothGrid() {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      title: "Custom Exhibits",
      text: "Personalized exhibits that stand out",
      image: "/images/40x50-booth.webp",
      url : "/custom-exhibit-rental/",
    },
    {
      title: "Rental Exhibits",
      text: "Cost-effective rental exhibits solutions",
      image: "/images/40x40-booth.webp",
      url : "/trade-show-booth-display-rentals/",
    },
    {
      title: "Exhibit Services",
      text: "Complete exhibit services for events",
      image: "/images/30x40-booth.webp",
      url : "/services/",
    },
    {
      title: "Exhibit Designs",
      text: "Choose from 500+ exhibit designs",
      image: "/images/30x30-booth.webp",
      url : "/trade-show-booth-ideas/",
    },
    {
      title: "About Company",
      text: "Company overview and expertise",
      image: "/images/20x40-booth.webp",
      url : "/about-us/",
    },
    {
      title: "Exhibit Guide",
      text: "Smart guide for successful exhibits",
      image: "/images/20x30-booth.webp",
      url : "/blog/",
    },
    
    
  ];

  // Show only 3 cards unless "Show more" is clicked
  const visibleCards = showAll ? cards : cards.slice(0, 6);
  const handleShowLessClick = (e) => {
    setShowAll(false);
  };
  return (
    <>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {visibleCards.map((card, i) => (
          <BoothCard key={i} {...card} />
        ))}
      </div>
      
    </>
  );
}

function BoothCard({ number, title, text, image, url }) {
  const [show, setShow] = useState(false);

  return (
    <a href={url}>
    <div
      className="group relative w-full max-w-md overflow-hidden rounded-md cursor-pointer"
      onClick={() => setShow(!show)}
    >
      <Image
        src={image}
        width="767"
        height="530"
        alt={title}
        className="w-full h-auto rounded-md"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_40%,#0f0f0f_85%)] z-20 p-6 flex flex-col justify-end">
        
        

        {/* Title */}
        <h3 className="text-white text-3xl font-semibold mb-0 translate-y-0 lg:translate-y-6 transition-transform duration-500 ease-out group-hover:-translate-y-4">
          {title}
        </h3>

        {/* Text animation for mobile + desktop */}
        <div
          className="opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-24 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0"
        >
          <p className="text-white text-base leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
    </a>
  );
}
