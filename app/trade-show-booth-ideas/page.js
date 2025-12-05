'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import TradeFaqtab from './tradefaq.js';

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
                Modern Trade Show Booth Ideas to Inspire Your Next Trade Fair Exhibit
              </h1>
              <p className="text-white  text-lg">
                Explore interactive trade show booth ideas designed to attract visitors, increase engagement, and transform your trade fair display into a crowd-pulling experience.
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
                          {item.boothsize}
                        </span>
                      </div>
                    </div>
                    <div className="card-info py-4 text-center border-b border-gray-300 rounded-xl">
                      <h4 className="text-gray-700 font-semibold text-2xl px-4 lg:px-12 block group-hover:text-[#9A3220] transition-colors">
                        {item.skucode}
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
      {/*<section>
    	<div className="servicebg bg-[#34343C] py-20">
    		<div className="container mx-auto px-4">
    			<div className="max-w-3xl mx-auto text-center">
					<h1 className="maintitle text-white mb-6">Innovative Trade Show Booth Ideas</h1>
					<p className="text-white text-lg">Looking for inspiration? Here are some of the top-performing trade show booth display ideas used by leading brands.</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4 mt-12 justify-items-center">
    				<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
    					<h3 className="title text-4xl font-semibold mb-6">Immersive Product Zones</h3>
    					<p className="text-lg mb-0 pt-6 border-t border-gray-200">Dedicated demo areas allow visitors to touch, explore, and interact with your products.</p>
    				</div>
    				<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
    					<h3 className="title text-4xl font-semibold mb-6">Double-Deck <br/>Booths</h3>
    					<p className="text-lg mb-0 pt-6 border-t border-gray-200">Perfect for maximizing space and hosting private meetings while showcasing products below.</p>
    				</div>
    				<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
    					<h3 className="title text-4xl font-semibold mb-6">LED Walls & Motion Graphics</h3>
    					<p className="text-lg mb-0 pt-6 border-t border-gray-200">Dynamic content instantly enhances visibility and improves brand recall.</p>
    				</div>
    				<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
    					<h3 className="title text-4xl font-semibold mb-6">Experience-Driven Concepts</h3>
    					<p className="text-lg mb-0 pt-6 border-t border-gray-200">Gamification, VR/AR, touchscreens, and sensory engagement create memorable experiences.</p>
    				</div>
    				<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
    					<h3 className="title text-4xl font-semibold mb-6">Minimalist & Premium Designs</h3>
    					<p className="text-lg mb-0 pt-6 border-t border-gray-200">Clean, modern layouts that highlight your brand without overwhelming visitors.</p>
    				</div>
    				<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
    					<h3 className="title text-4xl font-semibold mb-6">Experience-Driven Concepts</h3>
    					<p className="text-lg mb-0 pt-6 border-t border-gray-200">Gamification, VR/AR, touchscreens, and sensory engagement create memorable experiences.</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>*/}
    
    <section>
      <div className="contentseo py-20 bg-[#EAEEF7]">
        <div className="container mx-auto px-4">
          <div className="">
          <div className="max-w-6xl mx-auto ">
            <h2 className="text-6xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-4">A Trade Show Booth Design That Shows Compelling Brand Vision</h2>
            <p className="text-gray-700 text-lg mb-6">Selecting the right trade show booth is a big decision as it directly impacts your brand image. Explore our exceptional portfolio for your booth inspiration, which features thousands of options with different styles and sizes. Select a design that tells your brand story visually and powerfully.</p>
            <h3 className="text-4xl font-semibold text-gray-700 mb-6">Inspiration for Transformation</h3>
            <p className="text-gray-700 text-lg mb-4">The best thing about partnering with Triumfo is that you get the services from an organization with over 25  years of experience. We have curated an exceptional portfolio with design ideas created by our experts. The first step of your trade show planning is to take a look at our design and gain a better understanding of what we create, and you can find your next trade booth design.</p>
            <h2 className="text-6xl font-semibold text-gray-700 mb-6  border-b border-gray-300 pb-4">How Trade Show Booth Design Ideas Can Help You Stand Out?</h2>
            <p className="text-gray-700 text-lg mb-4">To attract a potential customer during a large show where hundreds of other businesses are competing to get the audience's attention is not an easy task. This is where an attractive trade show display design idea can make a difference. Triumfo provides a wide variety of exhibition booth designs that can help you stand out from the rest. All the designs are customizable according to your brand image.</p>
            <h3 className="text-4xl font-semibold text-gray-700 mb-6">Where Booth Designs Idea Meets Brand Storytelling</h3>
            <p className="text-gray-700 text-lg mb-4">The best expo booth design idea is one that communicates your brand story so perfectly visually that it doesn't require any human interruption. At Triumfo, we consider this our top priority, and we make sure that we have an understanding of your business and marketing goals. We apply your brand vision and provide you with a design that resonates with your message to the audience. From the initial design layout, lighting, displayed eye-catching graphics, furniture, and flooring, our design team holds experience and has creativity to transform your brand story into a compelling display, which will surely attract the attention of attendees.</p>
            <h3 className="text-4xl font-semibold text-gray-700 mb-6">Smart Trade Show Booth Designs for Any Budget</h3>
            <p className="text-gray-700 text-lg mb-4">Triumfo has one of the largest inventories of trade show display ideas in the industry, which makes it easy for you to rent a booth that fits perfectly in your budget and marketing goals. Whether you’re looking for a modular stand or a double-decker booth, our team makes sure to provide you with the best product according to your budget.</p>
          </div>
          </div>
        </div>
      </div>
    </section>
    <TradeFaqtab/>
    </>
  );
}
