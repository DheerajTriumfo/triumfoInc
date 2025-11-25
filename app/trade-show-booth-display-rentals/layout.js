import Script from 'next/script';
import { buildMetadata } from '../../lib/seo';


export async function generateMetadata() {
  return await buildMetadata({
    title: "Trade Show Booth Rentals In USA | Turnkey Exhibit Services",
    description:
      "We offer creative trade show booth rentals for every industry. Our exhibit rentals attract, engage, and convert at any event across the USA.",
    pathname: "/trade-show-booth-display-rentals/",
    image: "https://www.triumfo.us/images/build-rental-booth.webp",
    openGraph: {
      type: "website",
    },
  });
}


export default function Layout({ children }) {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" strategy="beforeInteractive" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
      <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" strategy="beforeInteractive" />
      <Script id="trade-show-rentals-swiper" strategy="afterInteractive">
        {`
          if (typeof window !== 'undefined') {
            const initSwiper = () => {
              if (typeof Swiper === 'undefined') {
                setTimeout(initSwiper, 200);
                return;
              }
              new Swiper('.mySwipertestimonial', {
                slidesPerView: 2,
                spaceBetween: 30,
                freeMode: true,
                breakpoints: {
                  280: { slidesPerView: 1, spaceBetween: 20 },
                  320: { slidesPerView: 1, spaceBetween: 20 },
                  480: { slidesPerView: 1, spaceBetween: 30 },
                  640: { slidesPerView: 2, spaceBetween: 40 },
                  768: { slidesPerView: 2, spaceBetween: 40 }
                },
                autoplay: { delay: 2500, disableOnInteraction: false },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                pagination: { el: '.swiper-pagination-testimonial', clickable: true }
              });
            };
            initSwiper();
          }
        `}
      </Script>
      {children}
    </>
  );
}

