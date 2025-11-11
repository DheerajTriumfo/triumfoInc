'use client';

import { useEffect, useCallback } from 'react';
import Script from 'next/script';

export default function BoothSegmentLayoutClient({ children }) {
  const initFancybox = useCallback(() => {
    if (typeof window === 'undefined') return false;
    const $ = window.$ || window.jQuery;
    if (!$ || !$.fancybox) return false;
    try {
      const items = $('[data-fancybox="portfolio"]');
      if (items.length > 0) {
        items.fancybox({
          buttons: ['slideShow', 'thumbs', 'close'],
          loop: true,
        });
      }
      return true;
    } catch (err) {
      console.error('Fancybox init failed', err);
      return false;
    }
  }, []);

  useEffect(() => {
    if (initFancybox()) {
      return;
    }
    const timer = setInterval(() => {
      if (initFancybox()) {
        clearInterval(timer);
      }
    }, 200);
    return () => clearInterval(timer);
  }, [initFancybox]);

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
      <Script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js" strategy="afterInteractive" />
      {children}
    </>
  );
}
