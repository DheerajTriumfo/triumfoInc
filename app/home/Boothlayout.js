import { useState } from "react";
import Image from "next/image";

export default function Boothlayout() {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    
    {
      number: "40x40",
      title: "40x40",
      text: "Explore 40x40 Island trade show booths",
      image: "/images/40x40nrental.webp",
      url : "/40x40-trade-show-booth/",
    },
    {
      number: "30x40",
      title: "30x40",
      text: "Explore 30x40 Island trade show booths",
      image: "/images/30x40nrental.jpg",
      url : "/30x40-trade-show-booth/",
    },
    {
      number: "30x30",
      title: "30x30",
      text: "Explore 30x30 Island trade show booths",
      image: "/images/30x30nrental.jpg",
      url : "/30x30-trade-show-booth/",
    },
    {
      number: "20x40",
      title: "20x40",
      text: "Explore 20x40 Island trade show booths",
      image: "/images/20x40nrental.jpg",
      url : "/20x40-trade-show-booth/",
    },
    {
      number: "20x30",
      title: "20x30",
      text: "Explore 20x30 Island trade show booths",
      image: "/images/20x30nrental.webp",
      url : "/20x30-trade-show-booth/",
    },
    {
      number: "20x20",
      title: "20x20",
      text: "Explore 20x20 Island trade show booths",
      image: "/images/20x20nrental.jpg",
      url : "/20x20-trade-show-booth/",
    },
    {
      number: "10x30",
      title: "10x30",
      text: "Explore 10x30 Inline trade show booths",
      image: "/images/10x30nrental.jpg",
      url : "/10x30-trade-show-booth/",
    },
    {
      number: "10x20",
      title: "10x20",
      text: "Explore 10x20 Inline trade show booths",
      image: "/images/10x20nrental.webp",
      url : "/10x20-trade-show-booth/",
    },
    {
      number: "10x10",
      title: "10x10",
      text: "Explore 10x10 Inline trade show booths",
      image: "/images/10x10nrental.webp",
      url : "/10x10-trade-show-booth/",
    },
    
    
  ];

  // Show only 3 cards unless "Show more" is clicked
  const visibleCards = showAll ? cards : cards.slice(0, 9);
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

      {/* Show more / Show less Button */}
      <div className="flex justify-center mt-8">
        <a
            href="/contact-us/"
            onClick={handleShowLessClick} 
            className="px-8 py-3 sm:py-4 bg-[#8E2614] text-xl text-white rounded-lg hover:bg-[#722011] transition cursor-pointer"
          >
            Receive Your Free Custom Booth Design Within 48 Hours.
          </a>
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
