import { useState, useEffect } from "react";  // Import useEffect
import Image from "next/image";  // Import Image (for Next.js)

function HomeportFolio({ img, title, text }) {
  const [show, setShow] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Detect if device supports touch events
  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true); // Set flag for touch devices
    }
  }, []);

  const handleClick = () => {
    if (isTouch) {
      setShow(!show); // Toggle overlay on mobile (tap)
    }
  };

  return (
    <div
      className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden"
      onClick={handleClick} // Trigger on mobile tap
    >
      <Image
        src={img}
        width={767}
        height={530}
        alt={title}
        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div
        className={`
          absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)]
          transition-all duration-500

          /* Desktop hover effect */
          ${!isTouch ? "opacity-0 group-hover:opacity-100" : ""}

          /* Mobile tap effect */
          ${isTouch && show ? "opacity-100" : isTouch ? "opacity-0" : ""}
        `}
      >
        <div className="flex items-center justify-center w-full h-full text-center">
          <div>
            <h2 className="text-white font-semibold text-4xl mb-4">{title}</h2>
            <p className="text-white text-base">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  const cards = [
    {
      img: "images/home-portfolio6.webp",
      title: "Actus",
      text: "NAB Show 2025 Trade Show Booth",
    },
    {
      img: "images/pt2.webp",
      title: "Auto Store",
      text: "Promat 2019 Custom Booth",
    },
    {
      img: "images/home-portfolio2.webp",
      title: "Dexon System",
      text: "InfoComm 2018 Exhibit",
    },
    {
      img: "images/home-portfolio5.webp",
      title: "ION8",
      text: "IHS 2025 Booth Design",
    },
    {
      img: "images/home-portfolio3.webp",
      title: "ProtoChips",
      text: "M&M 2025 Exhibit",
    },
    {
      img: "images/home-portfolio4.webp",
      title: "FPC",
      text: "IFAI 2018 Island Booth",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-2">
      {cards.map((card, i) => (
        <HomeportFolio key={i} {...card} />
      ))}
    </div>
  );
}
