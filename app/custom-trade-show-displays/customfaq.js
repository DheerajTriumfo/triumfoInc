'use client';
import { useEffect } from 'react';
import $ from 'jquery';
import Image from "next/image";
import Link from "next/link";

export default function CustomFaqtab(){
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
      <div className="faqsbg py-20 bg-[#EAEEF7]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="maintitle text-gray-700 mb-6">Frequently Asked Questions</h1>
            <p className="text-gray-700 text-lg">Find answers to common questions about our custom trade show exhibits, custom exhibit booths, and custom trade show displays.</p>
          </div>
          <div className="faqbg mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="borbg mb-4 rounded-xl overflow-hidden bg-gray-100">
                <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg> What is a custom trade show exhibit?
                </div>
                <div className="tab-caption px-6 py-4 text-base text-gray-600">
                  <p>A custom exhibit is a booth designed specifically for your brand, products, and goals, ensuring a unique and memorable presence at trade shows.</p>
                </div>
              </div>
              <div className="borbg mb-4 rounded-xl overflow-hidden bg-gray-100">
                <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg> How much does a custom booth typically cost?
                </div>
                <div className="tab-caption px-6 py-4 text-base text-gray-600">
                  <p>Costs vary based on size, materials, design complexity, and features. We provide tailored quotes to match your budget and requirements for custom exhibit booths.</p>
                </div>
              </div>
              <div className="borbg mb-4 rounded-xl overflow-hidden bg-gray-100">
                <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>How long does it take to design and build a custom exhibit?
                </div>
                <div className="tab-caption px-6 py-4 text-base text-gray-600">
                  <p>Typical timelines range from 6–12 weeks, depending on project size and customization level. Rush options are available for tighter schedules.</p>
                </div>
              </div>
              <div className="borbg mb-4 rounded-xl overflow-hidden bg-gray-100">
                <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg> Can custom exhibits be reused for multiple shows?
                </div>
                <div className="tab-caption px-6 py-4 text-base text-gray-600">
                  <p>Yes. Custom trade show displays are designed for reusability and can be adapted for different venues, layouts, and events.</p>
                </div>
              </div>
              <div className="borbg mb-4 rounded-xl overflow-hidden bg-gray-100">
                <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg> What sizes and layouts are available for custom booths?
                </div>
                <div className="tab-caption px-6 py-4 text-base text-gray-600">
                  <p>We design custom exhibit booths in various sizes, including inline, corner, peninsula, and island layouts, tailored to your show space and objectives.</p>
                </div>
              </div>
              <div className="borbg mb-4 rounded-xl overflow-hidden bg-gray-100">
                <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg> Do you provide turnkey services for setup and dismantling?
                </div>
                <div className="tab-caption px-6 py-4 text-base text-gray-600">
                  <p>Absolutely. Our services cover design, fabrication, shipping, installation, on-site support, and dismantling for a hassle-free experience.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="borbg mb-4 rounded-xl overflow-hidden bg-gray-100">
                <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg> Can I incorporate technology and interactive elements in my booth?
                </div>
                <div className="tab-caption px-6 py-4 text-base text-gray-600">
                  <p>Yes. We integrate touchscreens, LED displays, AR/VR experiences, kiosks, and other interactive elements in custom trade show exhibits.</p>
                </div>
              </div>
              <div className="borbg mb-4 rounded-xl overflow-hidden bg-gray-100">
                <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg> How do you ensure my brand stands out with a custom exhibit?
                </div>
                <div className="tab-caption px-6 py-4 text-base text-gray-600">
                  <p>We use high-quality graphics, innovative layouts, lighting, and immersive experiences in custom exhibit booths to create a memorable impact.</p>
                </div>
              </div>
              <div className="borbg mb-4 rounded-xl overflow-hidden bg-gray-100">
                <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg> What materials and finishes are used in custom exhibits?
                </div>
                <div className="tab-caption px-6 py-4 text-base text-gray-600">
                  <p>We use premium materials like aluminum frames, SEG fabric walls, wood, acrylic, glass, and LED lighting to create durable and visually striking custom trade show displays.</p>
                </div>
              </div>
              <div className="borbg mb-4 rounded-xl overflow-hidden bg-gray-100">
                <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg> Do you handle shipping and logistics for custom booths?
                </div>
                <div className="tab-caption px-6 py-4 text-base text-gray-600">
                  <p>Yes. We manage all logistics, including packing, transportation, customs (if international), and on-site delivery for custom exhibit booths.</p>
                </div>
              </div>
              <div className="borbg mb-4 rounded-xl overflow-hidden bg-gray-100">
                <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg> Can a small business afford a custom trade show exhibit?
                </div>
                <div className="tab-caption px-6 py-4 text-base text-gray-600">
                  <p>Yes. We provide scalable solutions and budget-friendly options, ensuring even small businesses can showcase professionally with custom trade show exhibits.</p>
                </div>
              </div>
              <div className="borbg mb-4 rounded-xl overflow-hidden bg-gray-100">
                <div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg> How do I request a quote for a custom exhibit?
                </div>
                <div className="tab-caption px-6 py-4 text-base text-gray-600">
                  <p>Simply contact us with your booth size, event details, and design goals, and we’ll provide a tailored proposal and quote for custom exhibit booths or custom trade show displays.</p>
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