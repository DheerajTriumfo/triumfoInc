import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: 'Upcoming Trade Show Archives - Triumfo Inc.',
    description: 'Triumfo Inc. is a leading trade show booth design display manufacturers companies in the USA. Offering complete exhibition booth service all around the world.',
    pathname: '/upcoming-trade-show/',
    openGraph: {
      type: 'website',
      locale: 'en_US',
    },
  });
}

export default function Layout({ children }) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" strategy="beforeInteractive" />
      <Script id="upcoming-tradeshows-tabs" strategy="afterInteractive">
        {`
          if (typeof window !== 'undefined') {
            const initTabs = () => {
              if (typeof $ === 'undefined') {
                setTimeout(initTabs, 200);
                return;
              }
              $('.tab-button').off('click').on('click', function () {
                $('.tab-button').removeClass('on');
                $('.tab-caption').slideUp('normal');
                if ($(this).next().is(':hidden')) {
                  $(this).addClass('on');
                  $(this).next().slideDown('normal');
                }
              });
              $('.tab-caption').hide();
              $('.tab-caption:first').show();
              $('.tab-button:first').addClass('on');
            };
            initTabs();
          }
        `}
      </Script>
      <Script id="upcoming-tradeshows-swiper" strategy="afterInteractive">
        {`
          if (typeof window !== 'undefined') {
            const initSwiper = () => {
              if (typeof Swiper === 'undefined') {
                setTimeout(initSwiper, 200);
                return;
              }
              new Swiper('.mySwiper2', {
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true,
                breakpoints: {
                  280: { slidesPerView: 1, spaceBetween: 20 },
                  320: { slidesPerView: 1, spaceBetween: 20 },
                  480: { slidesPerView: 1, spaceBetween: 30 },
                  640: { slidesPerView: 2, spaceBetween: 40 },
                  768: { slidesPerView: 3, spaceBetween: 40 },
                },
                autoplay: { delay: 2500, disableOnInteraction: false },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                pagination: { el: '.swiper-pagination2', clickable: true },
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
