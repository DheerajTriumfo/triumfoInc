'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function BoothGrid({ booths, apiBase, parentSlug }) {
  const [visibleCount, setVisibleCount] = useState(15);

  const handleLoadMore = () => setVisibleCount(prev => prev + 15);
  const visibleBooths = booths.slice(0, visibleCount);

  return (
    <div className="videosection bg-white py-20">
      <div className="container mx-auto px-4">
        {visibleBooths.length === 0 ? (
          <div className="text-center text-gray-500">
            No booths found for this size. Please check back later.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleBooths.map((booth, index) => {
                const imgUrl = booth.thumbnail
                  ? `${apiBase}/images/uploads/rentalexhibition/${booth.thumbnail}`
                  : '/placeholder.png'; // fallback if missing

                return (
                  <div key={booth.id || index} className="booth-card border rounded-md overflow-hidden">
                    <Image
                      src={imgUrl}
                      alt={booth.alttag || booth.skucode || 'Trade Show Booth'}
                      width={400}
                      height={300}
                      className="object-cover w-full h-64"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{booth.skucode}</h3>
                      <p className="text-gray-500">{booth.boothsize}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {visibleCount < booths.length && (
              <div className="text-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-3 bg-[#943724] text-white text-lg rounded-md hover:bg-gray-700 transition duration-300"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
