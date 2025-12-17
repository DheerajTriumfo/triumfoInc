'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function OwlInit() {

  useEffect(() => {
    if (typeof window !== 'undefined' && window.$) {
      const interval = setInterval(() => {
        if (window.$('#rental').length) {
          window.$('#rental').owlCarousel({
            loop: true,
            margin: 15,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 2500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              1200: { items: 3 },
            },
          });
          clearInterval(interval);
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      {/* jQuery */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />

      {/* Owl Carousel */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
