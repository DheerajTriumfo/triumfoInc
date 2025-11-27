'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import CustomFaqtab from './customfaq.js';

export default function()
{
	const portfolioItems = [
		{ title: 'Invest Saudi', subtitle: 'Promat 2025 | Chicago | 20x20', image: '/images/pt8.webp' , alttag: '20x20 Trade Show Booth Rental for Tedial at Promat 2025 Designed and Built by Triumfo Inc. in Chicago, USA'},
		{ title: 'Auto Store', subtitle: 'Promat 2019 Custom Booth', image: '/images/pt2.webp', alttag: '10x20 Exhibit Booth Rental for PRECIMETER at Aluminum 2025 Designed and Built by Triumfo Inc. in Nashville'},
		{ title: 'CRYO Future', subtitle: 'ASRM 2025 | 20x20 | San Antonio', image: '/images/rpt3.webp', alttag: '20x20 Exhibition Booth Rental for CRYO Future at ASRM 2025 Designed and Built by Triumfo Inc. in San Antonio, Texas' },
		{ title: 'Alliance Plast', subtitle: 'Pack Expo 2025 | 30x40 | Las Vegas', image: '/images/rpt4.webp', alttag: '30x40 Trade Show Booth Rental for Alliance Plast at Pack Expo 2025 Designed and Built by Triumfo Inc. in Las Vegas' },
		{ title: 'Felix Schoeller', subtitle: 'Printing United 2025 | 10x30 | Orlando', image: '/images/rpt5.webp', alttag: '10x30 Custom Booth Rental for Felix Schoeller at Printing United 2025 Designed and Built by Triumfo Inc. in Orlando' },
		{ title: 'Business France', subtitle: 'Small Satellite Conference 2025 | 20x30 | Salt Lake City', image: '/images/rpt6.webp', alttag: '20x30 trade show booth rental for Business France at Small Satellite Conference 2025 Designed and Built by Triumfo Inc. in Salt Lake City, Utah' },
	];
	return(
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-4">Custom Trade Show Exhibits That Elevate Your Brand</h1>
								<p className="text-white text-xl mb-4">Triumfo Inc. designs and delivers custom trade show exhibits that captivate audiences, showcase your brand, and drive measurable results at every event.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*<section>
			<div className="designdeliver py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto">
						<div className="text-center mb-8">
							<h1 className="text-gray-700 maintitle mb-4">Our Custom Trade Show Booth Process</h1>
							<p className="text-gray-700 text-lg mb-4">From concept to show floor, our streamlined process ensures your custom booth is designed with creativity, built with precision, and delivered with complete reliability—giving you a stress-free exhibiting experience and a standout presence at every event.</p>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="group box bg-gray-50 border border-gray-300 overflow-hidden">
						  <div className="relative">
						    <Image src="/images/design.webp" width="400" height="435" alt="design" className="w-full h-auto" />
						    <div className="absolute inset-0  bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,#0f0f0f_85%)] z-20 p-6 flex items-end">
						      <div className="w-full text-center text-white">
						        <h3 className="text-4xl font-semibold mb-4 translate-y-16 group-hover:translate-y-0 transition-all duration-500 ease-out">DESIGN</h3>
						        <p className="text-base leading-relaxed opacity-0 translate-y-4  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">We translate your vision into a custom booth concept with strategic layouts and immersive brand elements.</p>
						      </div>
						    </div>
						  </div>
						</div>
						<div className="group box bg-gray-50 border border-gray-300 overflow-hidden">
						  <div className="relative">
						    <Image src="/images/build.webp" width="400" height="435" alt="build" className="w-full h-auto" />
						    <div className="absolute inset-0  bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,#0f0f0f_85%)] z-20 p-6 flex items-end">
						      <div className="w-full text-center text-white">
						        <h3 className="text-4xl font-semibold mb-4 translate-y-16 group-hover:translate-y-0 transition-all duration-500 ease-out">BUILD</h3>
						        <p className="text-base leading-relaxed opacity-0 translate-y-4  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">We fabricate your custom booth in-house with precision engineering and premium finishes.</p>
						      </div>
						    </div>
						  </div>
						</div>
						<div className="group box bg-gray-50 border border-gray-300 overflow-hidden">
						  <div className="relative">
						    <Image src="/images/design.webp" width="400" height="435" alt="deliver" className="w-full h-auto" />
						    <div className="absolute inset-0  bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,#0f0f0f_85%)] z-20 p-6 flex items-end">
						      <div className="w-full text-center text-white">
						        <h3 className="text-4xl font-semibold mb-4 translate-y-16 group-hover:translate-y-0 transition-all duration-500 ease-out">DELIVER</h3>
						        <p className="text-base leading-relaxed opacity-0 translate-y-4  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">We manage shipping, on-site installation, and dismantling to ensure a smooth, stress-free show experience.</p>
						      </div>
						    </div>
						  </div>
						</div>
					</div>
				</div>
			</div>
		</section>*/}
		<section>
			<div className="circlebg py-20 bg-white">
				<div className="container mx-auto px-4">
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="box bg-[#EAEEF7] py-8 px-4">
							<h2 className="text-4xl text-gray-700 font-semibold mb-4">Why Choose Custom Exhibits?</h2>
							{/*<p className="text-gray-600 text-lg">Custom exhibits are more than just a booth—they are a strategic marketing tool that builds brand visibility, engages visitors, and drives measurable results.</p>*/}
							<ul>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Unique Brand Experience – Custom exhibit booths that tell your brand story.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Maximum Flexibility – Designed to fit your goals & space.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Stronger Visitor Engagement – Interactive and immersive displays.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Long-Term ROI – Reusable custom trade show displays for multiple shows.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Reflects Brand Identity – Consistent colors and messaging.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base items-center"><i className="fa fa-angle-right"></i> Competitive Advantage – Stand out from standard booths.</li>
							</ul>
						</div>
						<div className="box bg-white hidden lg:block">
							<Image src="/images/customs-booth.webp" width={400} height={475} alt="" className="w-full h-auto"/>
						</div>
						<div className="box bg-[#EAEEF7] py-8 px-4">
							<h2 className="text-4xl text-gray-700 font-semibold mb-4">Why Choose Us for Custom Exhibit Solution</h2>
							<ul>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> 25+ Years of Expertise – Proven experience in custom exhibits.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> End-to-End Turnkey Services – Design to on-site support for custom exhibit booths.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Local Teams Nationwide – Faster response, lower costs.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> High-Quality Custom Designs – Custom trade show displays that impress visitors.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Flexible & Scalable Solutions – Booths built to grow.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base items-center"><i className="fa fa-angle-right"></i> Dedicated Project Manager – Personalized support.</li>
							</ul>
						</div>
					</div>
					<div className="mt-12 text-center"><Link href="/trade-show-booth-ideas/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Choose From 500+ Exhibit Booth Rental Options</Link></div>
				</div>
			</div>
		</section>
		<section>
			<div className="homeportfolio bg-[#34343C] py-20">
				<div className="container mx-auto px-4 text-center text-white pb-20">
					<div className="max-w-3xl mx-auto">
					<h2 className="maintitle">Our Custom Trade Show Displays Work</h2>
					<div className="mt-4">
						<p className="text-xl text-white leading-relaxed">Explore our custom trade show exhibits and custom trade show displays designed to captivate audiences, showcase your brand, and deliver measurable results at every event.</p>
					</div>
					</div>
				</div>
				<div className="px-4 sm:px-2 py-2">
					<div className="grid grid-cols-12 gap-2">
						{portfolioItems.map((item, idx) => (
							<div key={idx} className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
								<Image src={item.image} alt={item.alttag} width={768} height={531} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
								<div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
									<div className="flex items-center justify-center w-full h-full text-center">
										<div className="">
											<h2 className="text-white font-semibold text-4xl mb-4">{item.title}</h2>
											<p className="text-white text-base">{item.subtitle}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
						<Link href="/contact-us/" className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-custom rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:border-gray-500 hover:text-white transition duration-300">
							Get A Quote
						</Link>
						<Link href="/portfolio/" className="w-full sm:w-auto px-6 py-3 border-2 bg-white border-white rounded-xl text-black text-center hover:bg-custom hover:text-white hover:border-custom transition duration-300">
							View Recent Work
						</Link>
					</div>
				</div>
			</div>
		</section>
		<section>
	        <div className="contentbg py-20">
	          <div className="container mx-auto px-4">
	            <div className="max-w-3xl mx-auto mb-12">
					<div className="text-center mb-8">
						<h1 className="text-gray-700 maintitle mb-4">Featured Case Studies</h1>
						<p className="text-gray-700 text-lg mb-4">Explore real projects where our custom exhibit booths and custom trade show displays engaged audiences and boosted brand impact.</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<div className="video-card rounded-xl">
		                <div className="video-thumb shadow-lg bg-black rounded-xl relative">
		                    <div className="thumb-wrapper rounded-xl">
		                        <Image src="/images/pt2.webp" width="768" height="531" alt="" className="w-full h-auto rounded-xl" alt="IMAX" />
		                    </div>
		                    <div className="absolute bottom-4 left-4 z-20">
		                    	<span className="rounded-md font-semibold py-1 px-2 text-sm bg-[#9A3220] text-white px-4 py-2">40×40 ft</span>
		                    </div>
		                </div>
		                <div className="card-info pt-4 pb-2 text-center border-b border-gray-300 rounded-xl">
		                    <h4 className="text-gray-700 font-semibold text-3xl">Chemgm LLC</h4>
		                    <div className="flex items-center pt-2 justify-center">
		                        <span className="text-sm text-gray-500">IBS 2019 • Las Vegas</span>
		                    </div>
		                </div>
		            </div>{/* --1-- */}
		            <div className="video-card rounded-xl">
		                <div className="video-thumb shadow-lg bg-black rounded-xl relative">
		                    <div className="thumb-wrapper rounded-xl">
		                        <Image src="/images/pt8.webp" width="768" height="531" alt="" className="w-full h-auto rounded-xl" alt="IMAX" />
		                    </div>
		                    <div className="absolute bottom-4 left-4 z-20">
		                    	<span className="rounded-md font-semibold py-1 px-2 text-sm bg-[#9A3220] text-white px-4 py-2">40×40 ft</span>
		                    </div>
		                </div>
		                <div className="card-info pt-4 pb-2 text-center border-b border-gray-300 rounded-xl">
		                    <h4 className="text-gray-700 font-semibold text-3xl">Chemgm LLC</h4>
		                    <div className="flex items-center pt-2 justify-center">
		                        <span className="text-sm text-gray-500">IBS 2019 • Las Vegas</span>
		                    </div>
		                </div>
		            </div>{/* --1-- */}
		            <div className="video-card rounded-xl">
		                <div className="video-thumb shadow-lg bg-black rounded-xl relative">
		                    <div className="thumb-wrapper rounded-xl">
		                        <Image src="/images/pt11.webp" width="768" height="531" alt="" className="w-full h-auto rounded-xl" alt="IMAX" />
		                    </div>
		                    <div className="absolute bottom-4 left-4 z-20">
		                    	<span className="rounded-md font-semibold py-1 px-2 text-sm bg-[#9A3220] text-white px-4 py-2">40×40 ft</span>
		                    </div>
		                </div>
		                <div className="card-info pt-4 pb-2 text-center border-b border-gray-300 rounded-xl">
		                    <h4 className="text-gray-700 font-semibold text-3xl">Chemgm LLC</h4>
		                    <div className="flex items-center pt-2 justify-center">
		                        <span className="text-sm text-gray-500">IBS 2019 • Las Vegas</span>
		                    </div>
		                </div>
		            </div>{/* --1-- */}
				</div>
				<div className="mt-12 text-center"><Link href="/case-study/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">View All Case Studies</Link></div>
	          </div>
	        </div>
	    </section>
		{/*<section>
			<div className="circlebg py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto">
						<div className="text-center mb-8">
							<h1 className="text-gray-700 maintitle mb-4">Our Custom Trade Show Booth Process</h1>
							<p className="text-gray-700 text-lg mb-4">From concept to show floor, our streamlined process ensures your custom booth is designed with creativity, built with precision, and delivered with complete reliability—giving you a stress-free exhibiting experience and a standout presence at every event.</p>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="box bg-[#EAEEF7] py-12 px-6">
							<h2 className="text-4xl text-gray-700 font-semibold mb-4">Why Rent a Trade Show Booth Instead of Buying?</h2>
							<ul>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Reduced upfront investment and lower total exhibiting costs.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> No storage, maintenance, or warehousing needed.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Flexibility to change booth size, design, and message for each show.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Quick installation and dismantling with pre-fabricated components.</li>
							</ul>
						</div>
						<div className="box bg-white hidden lg:block">
							<Image src="/images/build.webp" width={400} height={475} alt="" className="w-full h-auto"/>
						</div>
						<div className="box bg-[#EAEEF7] py-12 px-6">
							<h2 className="text-4xl text-gray-700 font-semibold mb-4">Custom Trade Show Booth Rental Solutions</h2>
							<ul>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Inline and corner booth rentals.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Peninsula and island exhibit rentals.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Double-deck and large custom booth rentals.</li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Turnkey packages with design, fabrication, logistics, install, and dismantle.</li>
							</ul>
						</div>
					</div>
					<div className="mt-12 text-center"><Link href="/trade-show-booth-ideas/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Explore Trade Show Booth Rentals</Link></div>
				</div>
			</div>
		</section>
		<section>
	    	<div className="servicebg bg-[#34343C] py-20">
	    		<div className="container mx-auto px-4">
	    			<div className="max-w-3xl mx-auto text-center">
						<h1 className="maintitle text-white mb-6">Innovative Trade Show Booth Ideas</h1>
						<p className="text-white text-lg">Looking for inspiration? Here are some of the top-performing trade show booth display ideas used by leading brands.</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-8 mt-12 justify-items-center">
	    				<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
	    					<h3 className="title text-4xl font-semibold mb-6">Immersive Product Zones</h3>
	    					<p className="text-lg mb-0 pt-6 border-t border-gray-300">Dedicated demo areas allow visitors to touch, explore, and interact with your products.</p>
	    				</div>
	    				<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
	    					<h3 className="title text-4xl font-semibold mb-6">Double-Deck <br/>Booths</h3>
	    					<p className="text-lg mb-0 pt-6 border-t border-gray-300">Perfect for maximizing space and hosting private meetings while showcasing products below. </p>
	    				</div>
	    				<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
	    					<h3 className="title text-4xl font-semibold mb-6">LED Walls & Motion Graphics</h3>
	    					<p className="text-lg mb-0 pt-6 border-t border-gray-300">Dynamic content instantly enhances visibility and improves brand recall.</p>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	  	</section>*/}
	  	
	    <CustomFaqtab/>
		</>
	);
}