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
							    	</svg> How early should I start planning my trade show booth?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Start 3–6 months before the event to allow enough time for booth design, fabrication, logistics, approvals, and last-minute adjustments.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> Do you manage everything on-site during the trade show?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. We provide full on-site management, including supervision during installation and dismantling, technical adjustments, and coordination with show organizers.</p>
                  </div>
                </div>
                <div className="borbg rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> Can you support trade shows outside the U.S.?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. Triumfo manages global trade show projects, ensuring consistent quality and timely execution across Europe, UAE, Asia, and other destinations.</p>
                  </div>
                </div>
                
                
              </div>
              <div className="">
                  <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> How much does a trade show booth cost?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Trade show booth pricing depends on factors such as size, materials, customization, and location. At Triumfo, typical pricing starts at:</p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                      <li>• $10,000 for a 10x10 trade show booth</li>
                      <li>• $18,000 for a 10x20 expo booth</li>
                      <li>• $25,000 for a 10x30 exhibit booth</li>
                      <li>• Up to $55,000+ for a 30x40 custom exhibition stand</li>
                    </ul>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> What's included in your trade show booth services?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Full end-to-end services:</p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                      <li>Concept & 3D booth design</li>
                      <li>Custom fabrication</li>
                      <li>Graphic design & printing</li>
                      <li>Logistics & transportation</li>
                      <li>Installation & dismantling (I&D)</li>
                      <li>Storage services</li>
                    </ul>
                    <p className="mt-3">All services are handled in-house by our expert teams for full quality control.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> What are the most common booth sizes at U.S. trade shows?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Popular sizes include 10x10, 10x20, 20x20, 30x30 ft, and larger island booths like 40x40 ft at major expos.</p>
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