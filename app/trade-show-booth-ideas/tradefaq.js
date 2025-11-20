'use client';
import { useEffect } from 'react';
import $ from 'jquery';
import Image from "next/image";
import Link from "next/link";

export default function TradeFaqtab(){
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
							    	</svg> What makes Triumfo’s trade show booth designs unique?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Triumfo creates custom trade show booth designs tailored to your brand, audience, and event goals. Our designs blend creativity, smart layout planning, and high-quality fabrication to deliver booths that attract more visitors and enhance engagement.</p>
                  </div>
                </div>
                <div className="borbg mb-3 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> Can you help us with new trade show booth ideas for our event?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. We provide a wide range of creative trade show booth ideas and trade booth ideas based on your booth size, industry, and marketing objectives. From interactive setups to premium minimalist designs, we customize everything.</p>
                  </div>
                </div>
                <div className="borbg mb-3 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> Do you offer complete trade show display design and build services?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Absolutely. We handle the entire trade show display design process—including concept development, fabrication, printing, installation, dismantling, and logistics—so you get a full turnkey solution.</p>
                  </div>
                </div>
                <div className="borbg mb-3 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> What are some popular trade show booth display ideas right now?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Current trending trade show booth display ideas include LED video walls, immersive product demo zones, double-deck structures, digital interactions, and clean, open layouts that improve visitor flow.</p>
                  </div>
                </div>
                <div className="borbg mb-3 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> Can you provide trade show exhibit ideas for international events?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. Triumfo offers creative trade show exhibit ideas and trade fair display ideas for global exhibitions, ensuring consistent quality and on-time delivery across Europe, the USA, Middle East, and Asia.</p>
                  </div>
                </div>
                
              </div>
              <div className="self-center hidden lg:block"><Image src="/images/faq13.webp" width="602" height="650" alt="Trade Show Booth with large hanging & LED strip" className="w-full h-auto rounded-xl"/></div>
            </div>
          </div>
        </div>
      </section>
		</>
		);
}