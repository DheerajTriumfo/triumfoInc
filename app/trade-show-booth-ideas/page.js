'use client';
import Image from 'next/image';
import Link from 'next/link';
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-4">What are the Popular Trends for Trade Fair Booth Ideas?</h2>
            <p className="text-gray-700 text-lg mb-6">The trade show colour palette is progressing, and to stand out from the rest, your booth needs to be visually stunning, interactive, and creatively designed. Here are the key trends everyone is following:</p>
            <ul className="text-gray-700 text-lg mb-8 space-y-3">
              <li>• <strong>Interactive Technology:</strong> AR, VR, and LED displays to keep visitors engaged.</li>
              <li>• <strong>Green structure:</strong> Using eco-friendly materials with a modern setup and recycled waste.</li>
              <li>• <strong>Open Layouts:</strong> Open spaces that encourage free movement and open conversations.</li>
              <li>• <strong>Demonstration Areas:</strong> Areas for demo, lounging, and storytelling</li>
              <li>• <strong>Modern Branding:</strong> Use of LED panels and creative graphics.</li>
            </ul>
            <p className="text-gray-700 text-lg mb-8">Following these trends can make your booth functional, memorable, and visually appealing.</p>

            <h2 className="text-6xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-4 mt-12">What are the New Booth Layout Concepts that are Trending in 2026?</h2>
            <p className="text-gray-700 text-lg mb-8">Here are the top 10 interactive trade show booth ideas to consider for your next event:</p>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Double-Deck Booths</h3>
                <p className="text-gray-700 text-lg">This booth can help you make a bold statement on the exhibition floor and maximize floor space.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Captivating LED Walls</h3>
                <p className="text-gray-700 text-lg">With LED walls, you can showcase your products and messaging dynamically on digital displays.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Product Zones</h3>
                <p className="text-gray-700 text-lg">You can provide firsthand experience to your visitors. Let them touch and feel the products.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Modular Booth Layouts</h3>
                <p className="text-gray-700 text-lg">An adaptive booth with you can attend multiple events while saving cost and time.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Interactive Themes</h3>
                <p className="text-gray-700 text-lg">Increase the visitors' engagement by telling your brand story creatively.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Eco-friendly Exhibits</h3>
                <p className="text-gray-700 text-lg">Use eco-conscious materials and lighting to show your business values.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Minimalist Design</h3>
                <p className="text-gray-700 text-lg">Keeping design sleek and functional while keeping focus on key brand elements.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Tech-Engagement</h3>
                <p className="text-gray-700 text-lg">Inculcate AR/VR, touchscreens, and smart technology to get your audience's attention.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Productive Lounges</h3>
                <p className="text-gray-700 text-lg">Accessible lounge area for meetings, networking, and lead conversions.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Lighting and Spacing</h3>
                <p className="text-gray-700 text-lg">Create a bright space with elegance using new lighting and fabric panels</p>
              </div>
            </div>

            <h2 className="text-6xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-4 mt-12">Smart Booth Sizes in 2026</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Small Booths (10x10, 10x20)</h3>
                <p className="text-gray-700 text-lg">These are creative small trade show booth ideas that leave a high impact. It is ideal for high-traffic exhibitions.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Medium Booths (20x20)</h3>
                <p className="text-gray-700 text-lg">This is a balanced layout that provides a space for communication, product presentations, and graphics.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Large Booths (30x30+)</h3>
                <p className="text-gray-700 text-lg">These are premium booth layouts that provide multiple zones, double decks, and captivating experiences.</p>
              </div>
            </div>

            <h2 className="text-6xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-4 mt-12">Sector-Specific Trade Show Booth Display Ideas for 2026</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Technology & Electronics</h3>
                <p className="text-gray-700 text-lg">Use of high-tech equipment that highlights innovation</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Healthcare & Pharma</h3>
                <p className="text-gray-700 text-lg">A professional, clean, and highly functional structure.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">FMCG & Lifestyle</h3>
                <p className="text-gray-700 text-lg">Product-centric exhibit with high visitor engagement.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Industrial & Manufacturing</h3>
                <p className="text-gray-700 text-lg">The layout should be practical to showcase heavy machinery and equipment.</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold text-gray-700 mb-3">Automotive & EV</h3>
                <p className="text-gray-700 text-lg">Trade show booth ideas that attract visitors should be bold to showcase vehicles and brand technology.</p>
              </div>
            </div>

            <h2 className="text-6xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-4 mt-12">How can Triumfo help you bring your imagination to life?</h2>
            <p className="text-gray-700 text-lg mb-6">At Triumfo, our process involves creativity and expertise in bringing trade show display ideas to life:</p>
            <ul className="text-gray-700 text-lg mb-8 space-y-3">
              <li>• <strong>Concept Development:</strong> We customize the idea according to your brand vision.</li>
              <li>• <strong>3D Booth Design:</strong> A 3D strategy for the visualization of every detail before production.</li>
              <li>• <strong>Custom Fabrication:</strong> An in-house manufacturing unit to ensure quality and consistency.</li>
              <li>• <strong>Graphics & Printing:</strong> Adding stunning visuals and printing.</li>
              <li>• <strong>Shipping & Installation:</strong> On-time delivery and setting up without any stress.</li>
              <li>• <strong>On-Site Support:</strong> Supervised exhibition for flawless execution.</li>
            </ul>

            <h2 className="text-6xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-4 mt-12">Why choose Triumfo as your 2026 Trade Show partner?</h2>
            <ul className="text-gray-700 text-lg mb-8 space-y-3">
              <li>• We have over 25 years of experience in booth setup and fabrication</li>
              <li>• We have delivered more than 5,000 booths worldwide</li>
              <li>• An expert in-house team for designing, building, and installing</li>
              <li>• 500+ extensive portfolio for trade show exhibit ideas</li>
              <li>• Local presence in Las Vegas, Chicago, and Orlando</li>
            </ul>

            <h2 className="text-6xl font-semibold text-gray-700 mb-6 border-b border-gray-300 pb-4 mt-12">Customise Trade Show Booth Ideas with Us</h2>
            <p className="text-gray-700 text-lg mb-8">Take your trade show to the next level. Request a free 3D design concept today or download our 500+ trade fair display ideas catalog to explore more ideas.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link
                href="#"
                className="px-8 py-4 bg-[#9A3220] border-2 border-[#9A3220] rounded-xl text-xl text-white hover:bg-gray-700 hover:border-gray-700 hover:text-white transition duration-300 text-center"
              >
                Request a Free Booth Concept
              </Link>
           
          </div>
          </div>
        </div>
      </div>
    </section>
    <TradeFaqtab/>
    </>
  );
}
