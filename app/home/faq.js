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
			$this.find(".tab-caption:first").show();
			$this.find(".tab-button:first").addClass("on");
		});
	}, []);

	return(
		<>
		<section>
        <div className="faqbg bg-[#34343C] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mb-12 text-center mx-auto">
                <h2 className="text-white text-6xl font-bold mb-4">FAQs</h2>
                <p className="text-white mb-6 text-base">Explore the following FAQs to get answers to your queries about our trade show services and approach.</p>
              </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12">
              <div className="">
                  <div className="borbg mb-6 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> How early should I start planning my trade show booth?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>You start trade show booth planning 3 to 6 months before the event. This allows enough time for booth design, approval, fabrication, logistics, and any last-minute modifications. </p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> Do you manage everything on-site during the trade show?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. We provide on-site management, including supervision during installation, dismantling, and any technical adjustments during the event. </p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> What are the most common booth sizes at U.S. trade shows?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>The most common booth sizes are 10x10, 10x20, 20x20, and 30x30 ft. However, larger booths, i.e, 40x40 ft. and above, can be easily seen at major expos in the USA. </p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> How much does a trade show booth cost?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>The cost of a trade show booth varies based on size, materials, location, and level of customization. At Triumfo, pricing typically starts at $10,000 for a 10x10 booth, $18,000 for a 10x20, $25,000 for a 10x30, and can go up to $55,000 for a 30x40 exhibit.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> What’s included in your booth services?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>We provide complete end-to-end booth solutions. Our services include design, fabrication, printing, logistics, installation, dismantling, and storage. We have in-house teams of experts to deliver all these services.</p>
                  </div>
                </div>
                <div className="borbg rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> Can you support shows outside the U.S.?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Absolutely. We manage global trade show projects with reliable local partners. Our experts ensure timely delivery and seamless execution of your trade show projects at international venues.</p>
                  </div>
                </div>
                
              </div>
              <div className="self-center hidden lg:block"><Image src="/images/home-faq2.webp" width="602" height="650" alt="Trade Show Booth with large hanging & LED strip" className="w-full h-auto rounded-xl"/></div>
            </div>
          </div>
        </div>
      </section>
		</>
		);
}