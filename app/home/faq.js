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
                <h2 className="text-white text-6xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-white mb-6 text-base">Explore the following FAQs to get answers to your queries about our trade show services and approach.</p>
              </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12">
              <div className="">
                  <div className="borbg mb-6 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> 
                    <h3 className="text-xl font-medium">How long does it take to build a trade show booth?</h3>
                  </div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Typically, a custom trade show booth takes 6 to 12 weeks to build from concept approval to completion. This includes design, fabrication, graphics, and quality control. For rental booths, the timeline can be shorter, usually 2 to 4 weeks. We recommend starting the planning process 3 to 6 months before your event to ensure adequate time for revisions and logistics.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> 
                    <h3 className="text-xl font-medium">Do you offer turnkey services?</h3>
                  </div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. We offer complete turnkey services that handle everything from initial concept and design to fabrication, logistics, installation, on-site management, and dismantling. Our team manages the entire process, including coordination with show organizers, ensuring a seamless experience from start to finish.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> 
                    <h3 className="text-xl font-medium">Can I rent or buy custom booths?</h3>
                  </div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes, absolutely. We offer both custom-built booths for purchase and flexible rental options. Custom booths are ideal for companies that exhibit frequently, while rental booths provide a cost-effective solution for occasional exhibitors. Both options include full design, fabrication, and installation services.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> 
                    <h3 className="text-xl font-medium">How much does a trade show booth cost?</h3>
                  </div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Trade show booth pricing depends on factors such as size, materials, customization, and location. At Triumfo, typical pricing starts at:</p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                      <li>$10,000 for a 10x10 booth</li>
                      <li>$18,000 for a 10x20 booth</li>
                      <li>$25,000 for a 10x30 booth</li>
                      <li>Up to $55,000+ for a 30x40 custom exhibit</li>
                    </ul>
                    <p className="mt-3">We offer fully customized solutions tailored to your budget and design expectations.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> 
                    <h3 className="text-xl font-medium">What's included in your trade show booth services?</h3>
                  </div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>We provide complete end-to-end exhibit services, including:</p>
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
                <div className="borbg rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> 
                    <h3 className="text-xl font-medium">Can you support trade shows outside the U.S.?</h3>
                  </div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Absolutely. We manage global trade show projects through our international network of reliable partners. Our team ensures consistent quality, timely execution, and seamless coordination at exhibition venues across Europe, UAE, Asia, and other global destinations.</p>
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