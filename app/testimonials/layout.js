import Script from 'next/script';
import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Client Video Testimonials | Real Stories, Real Results",
    description:"Watch client video testimonials showcasing real stories and real results. See how Triumfo Inc. delivers exceptional trade show booth design and exhibit solutions.",
    alternates: {
      canonical: "/testimonials/",
    },

    openGraph: {
      title: "Client Video Testimonials | Real Stories, Real Results",
      description:"Watch client video testimonials showcasing real stories and real results. See how Triumfo Inc. delivers exceptional trade show booth design and exhibit solutions.",
      url: "/testimonials/",
      siteName: "Triumfo Inc.",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://triumfous.mobel.us/api/images/portfolio/1720080379.webp",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@triumfoinc",
      creator: "@triumfoinc",
      title: "Client Video Testimonials | Real Stories, Real Results",
      description:"Watch client video testimonials showcasing real stories and real results. See how Triumfo Inc. delivers exceptional trade show booth design and exhibit solutions.",
      images: [
        "https://triumfous.mobel.us/api/images/portfolio/1720080379.webp",
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
      <Script id="testimonials-swiper" strategy="afterInteractive">
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
                  768: { slidesPerView: 2, spaceBetween: 40 },
                },
                autoplay: { delay: 2500, disableOnInteraction: false },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                pagination: { el: '.swiper-pagination-testimonial', clickable: true },
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
