'use client';
import { useEffect } from 'react';
import $ from 'jquery';
import Image from "next/image";
import Link from "next/link";

export default function Faqtab(){
	useEffect(() =>{
		if (typeof window === 'undefined') return;
		
		$(".faqbg").each(function () {
			var $this = $(this);

			$this.find(".tab-button").click(function () {
				$this.find(".tab-button").removeClass("on");
				$this.find(".tab-caption").slideUp("normal");

				if ($(this).next().is(":hidden") == true) {
					$(this).addClass("on");
					$(this).next().slideDown("normal");
				}
			});

			$this.find(".tab-caption").hide();
			//$this.find(".tab-caption:first").show();
			//$this.find(".tab-button:first").addClass("on");
		});
	}, []);

	return(
		<>
		<section>
        <div className="faqbg bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mb-12 text-center mx-auto">
                <h2 className="text-gray-700 text-6xl font-bold mb-4">FAQs</h2>
                <p className="text-gray-700 mb-6 text-base">Explore the following FAQs to get answers to your queries about our trade show services and approach.</p>
              </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12">
              <div className="">
                  <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> <h3 className="text-3xl">What is included in a trade show booth rental package?</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Our trade show booth rental packages are designed to be fully turnkey, giving you everything you need for a professional and hassle-free exhibit. </p>
                    <p>Our Each rental package typically includes:</p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                      <li><strong>Booth structure</strong>: Frames, panels, and modular walls tailored to your space.</li>
                      <li><strong>Custom-printed graphics</strong>: High-resolution backdrops, banners, and signage featuring your brand.</li>
                      <li><strong>Furniture</strong>: Counters, seating, display cases, and demo stations.</li>
                      <li><strong>Lighting</strong>: Spotlights, LED fixtures, and electrical installations.</li>
                      <li><strong>Flooring</strong>: Carpet or modular flooring to define your booth area.</li>
                      <li><strong>Logistics & labor</strong>: Delivery, installation, dismantling, storage, and on-site support.</li>
                    </ul>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> <h3 className="text-3xl">How much does a rental booth typically cost?</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Pricing depends on size, materials, customization, and location. Typical ranges are:</p>
                    <ul>
                      <li>• $10,000 for a 10x10 booth</li>
                      <li>• $18,000 for a 10x20 booth</li>
                      <li>• $25,000 for a 10x30 booth</li>
                      <li>• Up to $55,000+ for large custom exhibition booths</li>
                    </ul>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Are rental booths suitable for high-end or premium brands?</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes—today’s rental booths are an excellent choice for premium and high-end brands. At Triumfo, our rental exhibits are fully customizable, allowing us to tailor the design, materials, finishes, lighting, and graphics to reflect a luxury brand image.</p>
                  </div>
                </div>
                
                
              </div>
              <div className="">
                  <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Do you offer a nationwide rental inventory and services?</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. Triumfo offers a nationwide trade show booth rental inventory with 500+ exhibit designs available in multiple sizes and configurations. We support exhibitors across all major U.S. trade show cities, including Las Vegas, Orlando, Chicago, New York, Los Angeles, Atlanta, and more.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Are your rental booths compliant with show regulations?</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Absolutely. All Triumfo rental booths are designed and built to comply with U.S. trade show regulations and venue requirements. We use certified flame-retardant materials, adhere to height and layout restrictions, and follow electrical and safety guidelines set by show organizers and convention centers.</p>
                    <p>Our team reviews each exhibitor manual in advance and adjusts the booth design as needed to meet show-specific rules. From fire safety certificates to union labor coordination, we manage compliance proactively—helping you avoid last-minute issues, delays, or additional costs.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Can I fully customize a rental booth?</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. Our Modern booth rentals are highly modular—we can change finishes, lighting, signage, and layout to match your brand. If you need a unique structural concept, we’ll propose hybrid solutions that combine rental modules with a few custom elements to stay cost-effective.</p>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
		</>
		);
}