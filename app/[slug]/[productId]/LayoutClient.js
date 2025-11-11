'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function BoothProductLayoutClient({ children }) {
  useEffect(() => {
    let cancelled = false;
    function initSlider() {
      if (typeof window === 'undefined' || !window.$ || !window.$.fn || !window.$.fn.owlCarousel) {
        if (!cancelled) setTimeout(initSlider, 200);
        return;
      }
      try {
        const $ = window.$;
        if ($('#boothdetailslider').length) {
          $('#boothdetailslider').owlCarousel({
            loop: true,
            margin: 15,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 2500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            responsive: { 0: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 } },
          });
        }
      } catch (err) {
        console.error('Failed to initialise booth detail slider', err);
      }
    }
    initSlider();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {children}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="afterInteractive" />
    </>
  );
}
