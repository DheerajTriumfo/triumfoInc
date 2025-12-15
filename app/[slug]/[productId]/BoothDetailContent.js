// BoothDetailContent.jsx
"use client";  // <-- this makes it a client component

import { useState } from "react";
import QuoteForm from "./QuoteForm";

export default function BoothDetailContent({ defaultBoothSize }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`px-8 py-4 bg-[#A02C1C] text-xl rounded-xl border border-[#A02C1C] text-white hover:bg-gray-700 hover:text-white transition duration-300 text-center cursor-pointer ${
          isOpen ? "hidden" : ""
        }`}
      >
        Request Customization
      </div>

      <div
        className={`bg-[#E8EEF7] rounded-xl  px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[2000px] py-6 mt-8" : "max-h-0 py-0 mt-8"
        }`}
      >
        <QuoteForm defaultBoothSize={defaultBoothSize} defaultEventName="" />
      </div>
    </>
  );
}
