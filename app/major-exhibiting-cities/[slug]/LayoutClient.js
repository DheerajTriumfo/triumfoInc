'use client';

import { useCallback, useEffect } from 'react';
import Script from 'next/script';

export default function MajorCityLayoutClient({ children }) {
  const initOwl = useCallback(() => {
    if (typeof window === 'undefined') return;
    const $ = window.$ || window.jQuery;
    if (!$ || !$.fn || !$.fn.owlCarousel) return;

    const carousels = [
      { selector: '#rental', options: { items: { 0: 1, 768: 2, 1200: 3 } } },
      { selector: '#topRow', options: { items: { 0: 2, 768: 4, 1200: 5 } } },
      { selector: '#bottomRow', options: { items: { 0: 2, 768: 4, 1200: 5 } } },
    ];

    carousels.forEach(({ selector, options }) => {
      if (document.querySelector(selector) && !$(selector).hasClass('owl-loaded')) {
        $(selector).owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 2500,
          smartSpeed: 1000,
          autoplayHoverPause: true,
          responsive: options.items,
        });
      }
    });
  }, []);

  useEffect(() => {
    initOwl();
  }, [initOwl]);

  return (
    <>
      {children}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.$ = window.jQuery = window.$ || window.jQuery;
          initOwl();
        }}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        strategy="afterInteractive"
        onLoad={initOwl}
      />
    </>
  );
}
