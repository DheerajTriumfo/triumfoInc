'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import parse, { domToReact } from 'html-react-parser';
import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const fallbackBase = 'https://triumfous.mobel.us/api';
const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || fallbackBase;
const API_URL = "https://triumfous.mobel.us/api/allrentaldata";

export default function ViewTradeshowideaData() {
  const [shows, setShows] = useState([]);       // All loaded items
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  //const limit = 3;                             // Number of items per fetch
  const fetchInProgress = useRef(false);

  const pageSize = 21;
const fetchData = async () => {
  if (fetchInProgress.current || !hasMore) return;
  fetchInProgress.current = true;
  setLoading(true);

  try {
    const res = await fetch(API_URL);
    const result = await res.json();
    const allItems = result.data || [];

    // slice items for current page
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const pageItems = allItems.slice(start, end);

    setShows(prev => [...prev, ...pageItems]);
    setCurrentPage(prev => prev + 1);

    if (end >= allItems.length) setHasMore(false);

  } catch (err) {
    console.error(err);
  }

  setLoading(false);
  fetchInProgress.current = false;
};
  // Fetch first 20 items on page load
  useEffect(() => {
    fetchData();
  }, []);
	return(
		<>
			<section>
		    	<div className="bannerbg bg-[#34343C] py-16">
		    		<div className="container mx-auto px-4">
		    			<div className="max-w-3xl mx-auto">
		    				<div className="text-center">
		    					<h1 className="text-white font-semibold text-7xl mb-2">Trade Show Booth Design Portfolio</h1>
		    					<p className="text-white font-semibold text-2xl">Get exhibit ideas from this collection of actual booths from our clients.</p>
		    				</div>
		    			</div>
		    			<div className="max-w-xl mx-auto">
		    				<div className="border border-gray-600 rounded-xl p-3 mt-8">
								<form className="flex flex-col md:flex-row items-center gap-x-6">
									<select className="w-full px-3 py-4 bg-white bg-opacity-90 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-center">
								      <option>Choose Your Booth Size</option>
								    </select>
								</form>
							</div>
		    			</div>
		    		</div>
		    	</div>
		    </section>
		    <section>
		    	<div className="rentallistbg py-20">
		    		<div className="max-w-7xl mx-auto px-4">
		    			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		    				{shows.map(item => (
	            <div key={item.id} className="video-card rounded-xl">
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
	              <div className="card-info pt-4 pb-2 text-center border-b border-gray-300 rounded-xl">
	                <h4 className="text-gray-700 font-semibold text-2xl">{item.skucode}</h4>
	              </div>
	            </div>
	          ))}
		    			</div>
		    			<div className="text-center mt-10">
	          {hasMore ? (
	            <button
	              onClick={fetchData}
	              disabled={loading}
	              className="px-6 py-3 bg-[#943724] text-white text-lg rounded-md hover:bg-gray-700 hover:text-red border-2 border-[#943724] hover:border-gray-700 transition duration-300 cursor-pointer"
	            >
	              {loading ? 'Loading...' : 'Load More'}
	            </button>
	          ) : (
	            <p className="text-gray-500 mt-4">No more data available.</p>
	          )}
	        </div>
		    		</div>
    			</div>
    		</section>
    		<section>
		    	<div className="stepbg py-20 bg-[#E7EEF7]">
		    		<div className="container mx-auto px-4">
		    			<div className="max-w-3xl text-center mx-auto">
		    				<h2 className="maintitle text-gray-700">Elevate your Impact with Triumfo Inc.</h2>
		    				<p className="text-gray-500 text-lg mt-8">For 25 years, Triumfo Inc. is offering comprehensive solutions from creative booth designing and robust booth building to stress-free delivery, easy installation, and dismantling of trade show booths and rentals.</p>
		    			</div>
		    			<div className="max-w-4xl text-center mx-auto">
		    				
		    				<div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
		    					<div className="bg-[#fff] rounded-[14px] border border-gray-100 text-center">
		    						<h4 className="text-gray-700 font-semibold text-3xl px-[28px] py-24">Step1</h4>
		    					</div>
		    					<div className="bg-[#fff] rounded-[14px] border border-gray-100 text-center">
		    						<h4 className="text-gray-700 font-semibold text-3xl px-[28px] py-24">Step2</h4>
		    					</div>
		    					<div className="bg-[#fff] rounded-[14px] border border-gray-100 text-center">
		    						<h4 className="text-gray-700 font-semibold text-3xl px-[28px] py-24">Step3</h4>
		    					</div>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </section>
		</>
	);
}