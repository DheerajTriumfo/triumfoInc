'use client';
import { useEffect } from 'react';
import $ from 'jquery';
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function GetImageCarousel() {
  
  // helper: safely init OwlCarousel
  const initCarousel = () => {
    if (typeof window !== "undefined" && window.$ && window.$.fn && window.$.fn.owlCarousel) {
      if (!$('#tradeshwoslider').hasClass('owl-loaded')) {
        console.log('Initializing Owl Carousel...');
        window.$('#tradeshwoslider').owlCarousel({
          lazyLoad: true,
          loop: true,
          margin: 0,
          autoplay: true,
          autoplayTimeout: 2000,
          smartSpeed: 1000,
          dots: true,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 },
          },
        });
      }
    } else {
      // plugin not ready yet — retry in 300ms
      setTimeout(initCarousel, 300);
    }
  };

  useEffect(() => {
    initCarousel();
  }, []);

  return (
    <>
      {/* ✅ Load OwlCarousel script globally once */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Owl Carousel script loaded ✅");
          initCarousel();
        }}
      />
      {/* ✅ Load required CSS globally */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
      />

      <section>
        <div className="carouselbg pt-8">
          <div className="container mx-auto px-4">
            <div className="relative mb-12">
              <div className="owl-carousel owl-theme" id="tradeshwoslider">
                <div className="item">
                  <Image src="/images/tradeshow-detail1.webp" width="1366" height="886" alt="" className="w-full h-auto"/>
                </div>
                <div className="item">
                  <Image src="/images/tradeshow-detail3.webp" width="1366" height="886" alt="" className="w-full h-auto"/>
                </div>
                <div className="item">
                  <Image src="/images/tradeshow-detail2.webp" width="1366" height="886" alt="" className="w-full h-auto"/>
                </div>
              </div>
            </div>

            <div className="flex-col md:flex-row flex items-center justify-center gap-6 px-4">
              <Link className="w-full sm:w-auto px-6 py-4 border-2 bg-white border-[#943724] rounded-xl text-black text-center hover:bg-custom hover:text-white hover:border-custom transition duration-300" href="/">Custom Trade Show Booth</Link>
              <Link className="w-full sm:w-auto px-6 py-4 border-2 bg-[#943724] border-[#943724] rounded-xl text-white text-center hover:bg-custom hover:text-white hover:border-custom transition duration-300" href="/trade-show-booth-display-rentals/">Rental Trade Show Booth</Link>
              <Link className="w-full sm:w-auto px-6 py-4 border-2 bg-white border-[#943724] rounded-xl text-black text-center hover:bg-custom hover:text-white hover:border-custom transition duration-300" href="/services/">Turnkey Booth Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
