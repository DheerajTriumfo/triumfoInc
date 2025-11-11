'use client';
import Link from 'next/link';
import { useState } from 'react';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

export default function BoothDesignCard({ row, index, apiBase: apiBaseUrl, parentSlug }) {
	const [clicked, setClicked] = useState(false);
	const imgSrc = row.thumbnail ? `${apiBaseUrl}/images/uploads/rentalexhibition/${row.thumbnail}` : '/images/10x20-1.jpg';
	const slug = parentSlug || row.p_slug || '';
	const productHref = `/${slug}/${(row.url || '').toLowerCase()}/`;
	const contactHref = `${productHref}#quote-form`;

	// Track click function
	const handleDesignClick = async (e) => {
		if (clicked) return; // Prevent multiple clicks
		
		try {
			setClicked(true);
			await fetch(`${apiBase}/rental/track-click`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					product_id: row.url || row.skucode || row.id,
					booth_size: row.boothsize
				})
			});
		} catch (error) {
			console.error('Error tracking click:', error);
		} finally {
			// Reset after a delay to allow navigation
			setTimeout(() => setClicked(false), 1000);
		}
	};

	return (
		<div key={row.id || index} className="video-card rounded-xl">
			<div className="video-thumb shadow-lg bg-black rounded-xl">
				<div className="thumb-wrapper rounded-xl">
					<Link href={productHref} onClick={handleDesignClick}>
						<img 
							src={imgSrc} 
							width="768" 
							height="531" 
							alt={row.alttag || row.skucode || ''} 
							className="w-full h-auto rounded-xl" 
							loading="lazy"
						/>
					</Link>
				</div>
			</div>
			<div className="card-info py-4 px-2 pb-2 text-center border-b border-gray-300 rounded-xl">
				<h4 className="text-gray-700 font-semibold text-2xl">{row.skucode || 'Trade Show Title'}</h4>
				<span className="text-gray-700 font-normal text-sm">{row.boothsize || ''}</span>
				<div className="w-full pt-4">
					<Link href={contactHref} className="w-full block py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-gray-700 hover:border-2 hover:border-gray-700 hover:text-white transition duration-300 text-base">
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
}

