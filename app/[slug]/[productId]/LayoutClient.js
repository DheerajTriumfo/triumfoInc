'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import '../../styles/owl-nav.css';
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
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 2500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            responsive: { 
              0: { items: 1, dots:true, nav: false }, 
              768: { items: 1 }, 
              1200: { items: 1 } },
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          strategy="afterInteractive"
        />
      {children}
    </>
  );
}
