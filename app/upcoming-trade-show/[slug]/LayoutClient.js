'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function UpcomingTradeShowDetailLayoutClient({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    function openModal(url) {
      setVideoUrl(url ? `${url}?autoplay=1` : '');
      setIsModalOpen(true);
    }

    function attachVideoHandlers() {
      const cards = document.querySelectorAll('[data-video-url]');
      cards.forEach((card) => {
        card.addEventListener('click', () => {
          const url = card.getAttribute('data-video-url');
          openModal(url);
        });
      });
    }

    attachVideoHandlers();

    let cancelled = false;
    function init() {
      if (typeof window === 'undefined' || !window.$ || !window.$.fn || !window.$.fn.owlCarousel) {
        if (!cancelled) setTimeout(init, 200);
        return;
      }
      try {
        const $ = window.$;
        if ($('#services').length) {
          $('#services').owlCarousel({
            loop: true,
            margin: 15,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 2500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 4 } },
          });
        }
        if ($('#client').length) {
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
        console.error('Failed to initialise carousels', err);
      }
    }
    init();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'videoModal') {
      setIsModalOpen(false);
      setVideoUrl('');
    }
  };

  return (
    <>
      {children}
      {isModalOpen && (
        <div
          id="videoModal"
          onClick={handleBackgroundClick}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
        >
          <div className="relative w-full max-w-6xl aspect-video mx-4">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setVideoUrl('');
              }}
              className="absolute cursor-pointer -top-4 -right-4 text-white text-2xl font-bold bg-black bg-opacity-60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80"
            >
              &times;
            </button>
            <iframe
              className="w-full h-full rounded-md"
              src={videoUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="afterInteractive" />
    </>
  );
}
