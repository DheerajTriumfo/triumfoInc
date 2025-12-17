// BoothDetailContent.jsx
"use client";  // <-- this makes it a client component

import { useState } from "react";
import QuoteForm from "./QuoteForm";

export default function BoothDetailContent({ defaultBoothSize }) {
  //const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div className="bg-[#E8EEF7] rounded-xl  px-4 overflow-hidden transition-all duration-500 ease-in-out max-h-[2000px] py-6 mt-8">
        <QuoteForm defaultBoothSize={defaultBoothSize} defaultEventName="" />
      </div>
    </>
  );
}
