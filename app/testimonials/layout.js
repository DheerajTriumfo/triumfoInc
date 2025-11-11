import Script from 'next/script';
import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Client Testimonials, What Clients Are Saying About Our Trade Show',
    description: 'Take a glance at our client testimonial section to know what our clients have to say about us. Triumfo Inc. is the world’s renowned trade show rental specialist in Las Vegas.',
    pathname: '/testimonials/',
  });
}

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
