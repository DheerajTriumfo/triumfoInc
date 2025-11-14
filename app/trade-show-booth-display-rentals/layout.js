import Script from 'next/script';
import { buildMetadata } from '../../lib/seo';


export async function generateMetadata() {
  return await buildMetadata({
    title: "Rent Trade Show Booth Any Where in The USA",
    description:"Trade show booth rental services available in Las Vegas, Chicago, Orlando, Anaheim, San Diego, Los Angeles, Atlanta, New York, and throughout the USA.",
    alternates: {
      canonical: "/trade-show-booth-display-rentals/",
    },

    openGraph: {
      title: "Rent Trade Show Booth Any Where in The USA",
      description:"Trade show booth rental services available in Las Vegas, Chicago, Orlando, Anaheim, San Diego, Los Angeles, Atlanta, New York, and throughout the USA.",
      url: "/trade-show-booth-display-rentals/",
      siteName: "Triumfo Inc.",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://www.triumfo.us/images/build-rental-booth.webp",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@triumfoinc",
      creator: "@triumfoinc",
      title: "Rent Trade Show Booth Any Where in The USA",
      description:"Trade show booth rental services available in Las Vegas, Chicago, Orlando, Anaheim, San Diego, Los Angeles, Atlanta, New York, and throughout the USA.",
      images: [
        "https://www.triumfo.us/images/build-rental-booth.webp",
      ],
    },
  });
};


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

