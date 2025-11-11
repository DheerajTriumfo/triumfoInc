'use client';

import { useEffect } from 'react';

function initCarousel(selector, options) {
	if (!window || !window.$) return;
	const $ = window.$;
	const $el = $(selector);
	if ($el.length === 0) return;
	if (typeof $.fn.owlCarousel !== 'function') return;
	if ($el.hasClass('owl-loaded')) return; // already initialized
	$el.owlCarousel(options);
}

export default function OwlInit() {
	useEffect(() => {
		let attempts = 0;
		const timer = setInterval(() => {
			attempts += 1;
			if (window && window.$ && window.$.fn && typeof window.$.fn.owlCarousel === 'function') {
				initCarousel('#rental', {
					loop: true,
					margin: 20,
					nav: false,
					dots: true,
					autoplay: true,
					autoplayTimeout: 2500,
					smartSpeed: 1000,
					autoplayHoverPause: true,
					responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } },
				});
				initCarousel('#topRow', {
					loop: true,
					margin: 30,
					nav: false,
					dots: true,
					autoplay: true,
					autoplayTimeout: 2500,
					smartSpeed: 1000,
					autoplayHoverPause: true,
					responsive: { 0: { items: 2 }, 768: { items: 4 }, 1200: { items: 5 } },
				});
				initCarousel('#bottomRow', {
					loop: true,
					margin: 30,
					nav: false,
					dots: true,
					autoplay: true,
					autoplayTimeout: 2500,
					smartSpeed: 1000,
					autoplayHoverPause: true,
					responsive: { 0: { items: 2 }, 768: { items: 4 }, 1200: { items: 5 } },
				});
				clearInterval(timer);
			}
			if (attempts > 40) clearInterval(timer); // ~10s max
		}, 250);
		return () => clearInterval(timer);
	}, []);

	return null;
}


