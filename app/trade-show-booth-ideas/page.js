'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';
const API_URL = `${apiBase}/allrentaldata`;


export default function ViewTradeshowideaData() {
  const [allShows, setAllShows] = useState([]);     // ALL booths
  const [filteredShows, setFilteredShows] = useState([]); // Filtered booths
  const [allSizes, setAllSizes] = useState([]);     // Unique booth sizes
  const [selectedSize, setSelectedSize] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(21);

  // Fetch all booths once
  useEffect(() => {
    const fetchBooths = async () => {
      try {
        const res = await fetch(API_URL);
        const result = await res.json();
        const data = result.data || [];

        setAllShows(data);

        // Unique booth sizes
        const sizes = [...new Set(data.map(item => item.boothsize.trim()))].sort();
        setAllSizes(sizes);

        // Initially show first page
        setFilteredShows(data.slice(0, pageSize));
        setCurrentPage(1);

      } catch (err) {
        console.error("Error fetching booths:", err);
      }
    };

    fetchBooths();
  }, []);

  // Handle booth size change
  useEffect(() => {
    let filtered = allShows;
    if (selectedSize) {
      filtered = allShows.filter(item => item.boothsize.trim() === selectedSize.trim());
    }
    // Reset to first page
    setFilteredShows(filtered.slice(0, pageSize));
    setCurrentPage(1);
  }, [selectedSize, allShows, pageSize]);

  // Load more booths (pagination)
  const loadMore = () => {
    let filtered = allShows;
    if (selectedSize) {
      filtered = allShows.filter(item => item.boothsize.trim() === selectedSize.trim());
    }

    const nextPage = currentPage + 1;
    const start = currentPage * pageSize;
    const end = start + pageSize;
    const moreItems = filtered.slice(start, end);

    setFilteredShows(prev => [...prev, ...moreItems]);
    setCurrentPage(nextPage);
  };

  const hasMore = (() => {
    let filtered = allShows;
    if (selectedSize) filtered = allShows.filter(item => item.boothsize.trim() === selectedSize.trim());
    return filtered.length > filteredShows.length;
  })();

  return (
    <>
      {/* Banner */}
      <section>
        <div className="bannerbg bg-[#34343C] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white font-semibold text-7xl mb-2">
                Creative Trade Show Booth Designs & Display Ideas for Every Brand
              </h1>
              <p className="text-white  text-lg">
                Discover a collection of innovative trade show booth designs, trade show display design concepts, and inspiring trade show booth ideas to elevate your brand presence. From modern trade booth ideas to high-impact trade show exhibit ideas and trade fair display ideas, we help you create displays that stand out, attract visitors, and drive real engagement.
              </p>
            </div>

            {/* Booth size filter */}
            <div className="max-w-xl mx-auto mt-8">
              <div className="border border-gray-600 rounded-xl p-3">
                <select
                  className="w-full px-3 py-4 bg-white bg-opacity-90 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-center"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="">Select Booth Sizes</option>
                  {allSizes.map(size => (
                    <option key={size} value={size}>
                      {size} Tradeshow Booth
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booth grid */}
      <section>
        <div className="rentallistbg py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredShows.map(item => (
                <a
                  key={item.id}
                  href={`/${item.boothsize}-trade-show-booth/${item.skucode}`}
                  className="group block"
                >
                  <div className="video-card rounded-xl">
                    <div className="video-thumb shadow-lg bg-black rounded-xl relative">
                      <Image
                        src={`${apiBase}/images/uploads/rentalexhibition/${item.thumbnail}`}
                        width={350}
                        height={300}
                        alt={item.alttag || item.skucode}
                        className="rounded-xl"
                      />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-[#9A3220] text-white px-4 py-2 rounded-md text-sm">
                          {item.skucode}
                        </span>
                      </div>
                    </div>
                    <div className="card-info py-4 text-center border-b border-gray-300 rounded-xl">
                      <h4 className="text-gray-700 font-semibold text-2xl px-4 lg:px-12 block group-hover:text-[#9A3220] transition-colors">
                        {item.title || item.skucode}
                      </h4>
                      
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Load more */}
            {hasMore && (
              <div className="text-center mt-10">
                <button
                  onClick={loadMore}
                  className="px-6 py-3 bg-[#943724] text-white text-lg rounded-md hover:bg-gray-700 hover:text-red-500 border-2 border-[#943724] hover:border-gray-700 transition duration-300 cursor-pointer"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
