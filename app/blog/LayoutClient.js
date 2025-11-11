'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function BlogLayoutClient({ children }) {
  useEffect(() => {
    let cancelled = false;
    function init() {
      if (typeof window === 'undefined' || !window.$ || !window.$.fn) {
        if (!cancelled) setTimeout(init, 200);
        return;
      }
      try {
        const $ = window.$;
        if ($('#boothdetailslider').length && $.fn.owlCarousel) {
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
        if ($('#client').length && $.fn.owlCarousel) {
          $('#client').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 2500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            responsive: { 0: { items: 2 }, 768: { items: 4 }, 1200: { items: 6 } },
          });
        }
      } catch (err) {
        console.error('Blog layout carousel init failed', err);
      }
    }
    init();
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
