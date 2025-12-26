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
        <div className="faqbg bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mb-12 text-center mx-auto">
                <h2 className="text-gray-700 text-6xl font-bold mb-4">What is included in a trade show booth rental package?</h2>
                <p className="text-gray-700 mb-2 text-base">Our trade show booth rental packages are designed to be fully turnkey, giving you everything you need for a professional and hassle-free exhibit.</p>
                <p className="text-gray-700 mb-6 text-base">Here’s what’s included in a typical rental package:</p>
              </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12">
              <div className="">
                  <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> <h3 className="text-3xl">Booth Structure</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Modular walls, sturdy frames, and custom layouts tailored to your space. We provide structures that are functional, safe, and visually appealing. </p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
							      	<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
							    	</svg> <h3 className="text-3xl">Custom Graphics & Branding</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>High-resolution backdrops, banners, signage, and branded panels to ensure your brand stands out. We can print your logos, messages, and imagery in vibrant colors that attract attention and create a professional impression.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Furniture & Fixtures</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Everything from counters and display tables to comfortable seating and demo stations. Need shelving, product racks, or podiums? We’ve got that covered too.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Lighting & Electrical</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Spotlights, LED fixtures, accent lighting, and full electrical installations to make your booth pop. Proper lighting isn’t just about visibility – it’s about creating an inviting, engaging space for your visitors.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Flooring Options</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>From plush carpets to modular flooring, we define your booth space while adding style and comfort.</p>
                  </div>
                </div>
                
                
              </div>
              <div className="">
                  <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Digital & Interactive Displays</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Engage your audience with LED screens, interactive touch panels, tablets, and video walls. From product demos to presentations, digital tools help you leave a lasting impression.</p>
                  </div>
                </div>
                  <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Audio & AV Equipment</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Microphones, speakers, and sound systems for presentations, demos, or announcements. Crystal-clear sound ensures your message is heard loud and clear.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Storage & Back-of-House Solutions</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>Hidden storage cabinets or secure areas for your inventory, marketing materials, and giveaways. Keep your booth organized and clutter-free.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Promotional Materials & Giveaways</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>We can provide racks, display stands, and even assist in planning branded giveaways to maximize visitor engagement.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Logistics & On-Site Support</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <p>From delivery and installation to dismantling and storage, our experienced team handles it all. We’re there on-site to make sure everything runs smoothly, so you can focus on networking, presenting, and growing your business.</p>
                  </div>
                </div>
                <div className="borbg mb-4 rounded-xl overflow-hidden">
                  <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg> <h3 className="text-3xl">Additional Services & Extras</h3></div>
                  <div className="tab-caption px-6 py-4 bg-white text-base text-gray-600">
                    <ul>
                        <li>- Furniture rental upgrades</li>
                        <li>- Custom signage or special lighting effects</li>
                        <li>- Lead retrieval systems</li>
                        <li>- Wi-Fi setup and connectivity support</li>
                        <li>- Booth cleaning and maintenance during the event</li>
                    </ul>
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