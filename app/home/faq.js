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
                    <p>We recommend starting 3–6 months before your event. This allows time for booth design, approvals, fabrication, logistics, and any last-minute adjustments, ensuring a seamless experience.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> What size trade show booth should I choose?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Popular booth sizes include 10x10, 10x20, 20x20, 30x30, and larger island booths like 40x40 ft. The right size depends on your display needs, visitor engagement goals, and the type of event you’re attending.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> Can I customize my trade show booth?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. Triumfo specializes in custom exhibits, providing personalized booth designs, graphics, lighting, and interactive elements to reflect your brand and create a memorable visitor experience.</p>
                  </div>
                </div>
                
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> How long does it take to design and build a trade show exhibit?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Simple modular designs can take 2–3 weeks, while fully custom booths typically require 6–8 weeks. Triumfo manages the entire process, ensuring timely delivery and quality craftsmanship.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> What is included in Triumfo’s trade show booth services?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Our end-to-end services include concept and 3D booth design, custom fabrication, graphics and printing, logistics and transportation, on-site installation and dismantling, and storage services. All services are handled in-house for quality control.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> How much does a trade show booth cost?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Pricing depends on size, materials, customization, and location. Typical ranges are:</p>
                    <ul className="list-disc list-inside mt-3 space-y-1">
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
                    </svg> How long has Triumfo been in business, and why choose you?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>With over 25 years of expertise, Triumfo has delivered high-quality, creative trade show booths for global brands. Our end-to-end capabilities, attention to detail, and stress-free approach ensure your brand stands out at every event.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> Can I reuse my booth for multiple shows?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. Many of our modular and custom booths are designed for reuse. Durable materials and flexible layouts ensure your investment can be deployed across multiple events.</p>
                  </div>
                </div>
                
                
              </div>
              <div className="">
                  <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> Do you manage everything on-site during the trade show?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. We provide full on-site management, including supervision of installation, dismantling, technical adjustments, and coordination with show organizers, giving you a stress-free experience.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> Can you support trade shows outside the U.S.?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Absolutely. Triumfo manages global trade show projects, delivering consistent quality and timely execution across Europe, Asia, UAE, and other international locations.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> How can I make my booth more engaging for visitors?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Engagement comes from interactive displays, digital demos, lighting, and well-placed branded elements. Triumfo’s designs are crafted to attract attention, encourage interaction, and leave a lasting impression.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> How do I measure the ROI of a trade show booth?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>ROI is measured by tracking leads, conversions, visitor engagement, and overall brand exposure. Our booths are designed to maximize interaction and create measurable impact for your participation.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> Are eco-friendly or sustainable booth options available?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. Triumfo offers sustainable solutions using recycled materials and energy-efficient components, allowing you to reduce environmental impact while maintaining high-quality design and presentation.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> How do I transport my booth safely?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>We provide secure packaging, custom crates, and logistics coordination to ensure your booth and displays arrive intact and ready for setup.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> Can you store my booth for future shows?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. Triumfo provides secure storage services, keeping your booths protected between events and ready for reuse</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> Do you offer booth rental options?</div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Yes. Triumfo provides cost-effective rental exhibits, ideal for temporary needs or multiple events. Rentals include setup, dismantling, and storage, offering flexibility without compromising quality.</p>
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