'use client';

import { useState } from 'react';
import BoothDesignCard from '../components/BoothDesignCard';

export default function BoothGrid({ booths, apiBase, parentSlug }) {
  const [visibleCount, setVisibleCount] = useState(15);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

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
              {visibleBooths.map((row, index) => (
                <BoothDesignCard
                  key={row.id || index}
                  row={row}
                  index={index}
                  apiBase={apiBase}
                  parentSlug={parentSlug}
                />
              ))}
            </div>

            {visibleCount < booths.length && (
              <div className="text-center mt-10">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-3 bg-custom text-white rounded-md text-lg hover:bg-red-600 transition"
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
