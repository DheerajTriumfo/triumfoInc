'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import CustomFaqtab from './customfaq.js';
import { useHomeQuery } from '../../hooks/useHomeQuery';

export default function()
{
	const portfolioItems = [
		
		{ title: 'Auto Store', subtitle: 'Promat 2019 Custom Booth', image: '/images/pt2.webp', alttag: '10x20 Exhibit Booth Rental for PRECIMETER at Aluminum 2025 Designed and Built by Triumfo Inc. in Nashville'},
		{ title: 'Invest Saudi', subtitle: 'Promat 2025 | Chicago | 20x20', image: '/images/pt8.webp' , alttag: '20x20 Trade Show Booth Rental for Tedial at Promat 2025 Designed and Built by Triumfo Inc. in Chicago, USA'},
		{ title: 'SAIER', subtitle: 'ISSA Show 2025 | 30x40 | Las Vegas', image: '/images/pt11.webp', alttag: '20x20 Trade Show Booth Rental for SAIR Plast at ISSA Show 2025 Designed and Built by Triumfo Inc. in Las Vegas' },
		{ title: 'Shot Show', subtitle: 'ASRM 2025 | 20x20 | San Antonio', image: '/images/pt3.webp', alttag: '20x20 Exhibition Booth Rental for SHOT Show at ASRM 2025 Designed and Built by Triumfo Inc. in San Antonio, Texas' },
		
		{ title: 'VIVA', subtitle: 'Global Gaming Expo (G2E) | 10x30 | Las Vegas', image: '/images/pt4.webp', alttag: 'LED walls, interactive experiences, and premium gaming showcases.' },
		{ title: 'TemperPack', subtitle: 'Pack Expo 2025 | 20x30 | Salt Lake City', image: '/images/pt6.webp', alttag: '20x30 trade show booth rental for TemperPack at Pack Expo 2025 Designed and Built by Triumfo Inc. in Las Vegas' },
	];
	const { data, isLoading } = useHomeQuery();
	const [isModalOpen, setIsModalOpen] = useState(false);
  	const [videoUrl, setVideoUrl] = useState("");
  	const openModal = (url) => {
	    setVideoUrl(url ? `${url}?autoplay=1` : "");
	    setIsModalOpen(true);
	  };

	  const closeModal = () => {
	    setIsModalOpen(false);
	    setVideoUrl("");
	  };

	  const handleBackgroundClick = (e) => {
	    if (e.target.id === 'videoModal') closeModal();
	  };
	return(
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-5xl md:text-7xl mb-4">Custom Trade Show Exhibit Designer & Builder</h1>
								<p className="text-white text-xl mb-4">We design, build, and manage custom trade show exhibits tailored to your brand, goals, and budget. </p>
								<div className="mt-8"><Link href="/contact-us/" className="inline-block px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Get a Free Custom-Designed Concept in Just 48 Hours</Link></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
		<section>
			<div className="circlebg py-20 bg-white">
				<div className="container mx-auto px-4">
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="box bg-[#EAEEF7] py-8 px-4 rounded-md">
							<h2 className="text-4xl text-gray-700 font-semibold mb-4">Why Choose Custom Exhibits?</h2>
							{/*<p className="text-gray-600 text-lg">Custom exhibits are more than just a booth—they are a strategic marketing tool that builds brand visibility, engages visitors, and drives measurable results.</p>*/}
							<ul>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> <div><span className="text-red-700">Unique Brand Experience</span> – Custom exhibit booths that tell your brand story.</div></li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> <div><span className="text-red-700">Maximum Flexibility</span> – Designed to fit your goals & space.</div></li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> <div><span className="text-red-700">Stronger Visitor Engagement</span> – Interactive and immersive displays.</div></li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> <div><span className="text-red-700">Long-Term ROI</span> – Reusable custom trade show displays for multiple shows.</div></li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> <div><span className="text-red-700">Reflects Brand Identity</span> – Consistent colors and messaging.</div></li>
								<li className="flex  gap-x-2 text-gray-700 text-base items-center"><i className="fa fa-angle-right"></i>  <div><span className="text-red-700">Competitive Advantage</span> – Stand out from standard booths.</div></li>
							</ul>
						</div>
						<div className="box bg-white hidden lg:block">
							<Image src="/images/new-custom-booth.webp" width={400} height={475} alt="" className="w-full h-auto  rounded-md"/>
						</div>
						<div className="box bg-[#EAEEF7] py-8 px-4 rounded-md">
							<h2 className="text-4xl text-gray-700 font-semibold mb-4">Why Choose Us for Custom Exhibit Solution</h2>
							<ul>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> <div><span className="text-red-700">25+ Years of Expertise</span> – Proven experience in custom exhibits.</div></li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> <div><span className="text-red-700">End-to-End Turnkey Services</span> – Design to on-site support for custom exhibit booths.</div></li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> <div><span className="text-red-700">Local Teams Nationwide</span> – Faster response, lower costs.</div></li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> <div><span className="text-red-700">High-Quality Custom Designs</span> – Custom trade show displays that impress visitors.</div></li>
								<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> <div><span className="text-red-700">Flexible & Scalable Solutions</span> – Booths built to grow.</div></li>
								<li className="flex  gap-x-2 text-gray-700 text-base items-center"><i className="fa fa-angle-right"></i> <div><span className="text-red-700">Dedicated Project Manager</span> – Personalized support.</div></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div className="homeportfolio bg-[#34343C] py-20">
				<div className="container mx-auto px-4 text-center text-white pb-20">
					<div className="max-w-3xl mx-auto">
					<h2 className="maintitle">Our Work</h2>
					<div className="mt-4">
						<p className="text-xl text-white leading-relaxed">Check out our custom trade show booths, designed and built for our valued clients to make a lasting impression.</p>
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
        <div className="servicebg bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="maintitle text-gray-700 mb-6">Our Work Process</h2>
              <p className="text-gray-500 text-lg">From understanding your goals to delivering a standout trade show presence, we follow a seamless process:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4 mt-12">
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
                <h3 className="title text-4xl font-semibold mb-6">Consultation & Planning </h3>
                <p className="text-lg mb-0 pt-6 border-t border-gray-200">We understand your goals, brand, and booth requirements.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
                <h3 className="title text-4xl font-semibold mb-6">Research & Strategy</h3>
                <p className="text-lg mb-0 pt-6 border-t border-gray-200">We analyze your industry, audience, and competitors for a clear strategy.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
                <h3 className="title text-4xl font-semibold mb-6">Design & Concept </h3>
                <p className="text-lg mb-0 pt-6 border-t border-gray-200">Our team creates innovative, eye-catching booth designs tailored to your needs.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
                <h3 className="title text-4xl font-semibold mb-6">Material Selection </h3>
                <p className="text-lg mb-0 pt-6 border-t border-gray-200">We choose high-quality materials to ensure durability and impact.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
                <h3 className="title text-4xl font-semibold mb-6">Fabrication & Build </h3>
                <p className="text-lg mb-0 pt-6 border-t border-gray-200">High-quality materials and craftsmanship bring the design to life.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
                <h3 className="title text-4xl font-semibold mb-6">Installation & Support </h3>
                <p className="text-lg mb-0 pt-6 border-t border-gray-200">We handle setup and ensure everything runs smoothly at the event.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section>
        <div className="testimonial bg-[#EAEEF7] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12">
              <h2 className="maintitle mb-4">{data?.testimonialsIntro?.title || 'Client Testimonials'}</h2>
              <p className="text-xl text-[#9A3220] font-medium mb-4">Your expectation. Our obligation.</p>
              <p className="text-xl text-gray-500 leading-relaxed">{data?.testimonialsIntro?.description || 'Watch video testimonials to see how Triumfo exceeded client expectations in creating memorable trade show booths, expo booths, and exhibition stands.'}</p>
            </div>
            <div className="grid grid-cols-12 gap-8">
            <div className="video-card rounded-xl relative col-span-12 md:col-span-6 lg:col-span-4">
	                <div className="video-thumb relative overflow-hidden cursor-pointer shadow-lg bg-black rounded-xl" onClick={() => openModal('https://www.youtube.com/embed/osf1o6szw5Q')}>
	                    <div className="thumb-wrapper rounded-xl">
                    		<Image src="/images/video-banner4_1.webp"  width={768} height={531} alt="Testimonial Video 3" className="w-full h-[360px] md:h-[420px] object-cover rounded-xl"/>
                        <div className="small-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/65 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20">
                            <i className="fa fa-play text-red-700"></i>
                        </div>
	                      <div className="thumb-duration bg-[rgba(0,0,0,0.85)] absolute top-4 right-4 text-white rounded-md text-center py-1 px-3 z-20">0:17</div>
	                    </div>
	                </div>
	            	</div>
	            	<div className="video-card rounded-xl relative col-span-12 md:col-span-6 lg:col-span-4">
	                <div className="video-thumb relative overflow-hidden cursor-pointer shadow-lg bg-black rounded-xl" onClick={() => openModal('/video/1000020234.mp4')}>
	                    <div className="thumb-wrapper rounded-xl">
                    		<Image src="/images/video-banner5_1.webp"  width={768} height={531} alt="Testimonial Video 3" className="w-full h-[360px] md:h-[420px] object-cover rounded-xl"/>
                        <div className="small-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/65 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20">
                            <i className="fa fa-play text-red-700"></i>
                        </div>
	                      <div className="thumb-duration bg-[rgba(0,0,0,0.85)] absolute top-4 right-4 text-white rounded-md text-center py-1 px-3 z-20">0:39</div>
	                    </div>
	                </div>
	            	</div>
	            	<div className="video-card rounded-xl relative col-span-12 md:col-span-6 lg:col-span-4">
	                <div className="video-thumb relative overflow-hidden cursor-pointer shadow-lg bg-black rounded-xl" onClick={() => openModal('/video/1000020238.mp4')}>
	                    <div className="thumb-wrapper rounded-xl">
                    		<Image src="/images/video-banner6_2.webp"  width={768} height={531} alt="Testimonial Video 3" className="w-full h-[360px] md:h-[420px] object-cover rounded-xl"/>
                        <div className="small-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/65 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20">
                            <i className="fa fa-play text-red-700"></i>
                        </div>
	                      <div className="thumb-duration bg-[rgba(0,0,0,0.85)] absolute top-4 right-4 text-white rounded-md text-center py-1 px-3 z-20">0:20</div>
	                    </div>
	                </div>
	            	</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
              <Link href={data?.testimonialsIntro?.primaryCta?.href || "/testimonials/"} className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-white rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:text-white transition duration-300">
                {data?.testimonialsIntro?.primaryCta?.label || 'View More'}
              </Link>
              <Link href="https://www.trustpilot.com/review/triumfo.us" target="_blank" className="w-full sm:w-auto px-6 py-3 border-2 border-custom rounded-xl text-black text-center hover:bg-custom hover:text-white transition duration-300 flex gap-x-1 items-center">
                <img src="https://www.trustpilot.com/favicon.ico" width="32" height="32" alt="Trustpilot" className="h-6"/>Trustpilot
              </Link>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div
          id="videoModal"
          onClick={handleBackgroundClick}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
        >
          <div className="relative w-full max-w-6xl aspect-video mx-4">
            <button
              onClick={closeModal}
              className="absolute cursor-pointer -top-4 -right-4 text-white text-2xl font-bold bg-black bg-opacity-60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80"
            >
              &times;
            </button>
            <iframe
              id="youtubeIframe"
              className="w-full h-full rounded-md"
              src={videoUrl || null}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
		<section>
          <div className="contentbg py-20 bg-[#34343C]">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-white maintitle mb-4">Case Studies</h1>
            <p className="text-white text-lg mb-4">Explore real projects where our custom exhibition booths and trade show displays engaged audiences, boosted brand impact, and delivered measurable ROI.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/case-study/countr/">
          <div className="video-card rounded-xl">
                    <div className="video-thumb shadow-lg bg-black rounded-xl relative">
                        <div className="thumb-wrapper rounded-xl overflow-hidden aspect-[768/531]">
                            <Image src="/images/case1.avif" width="768" height="531" alt="IMAX" className="w-full h-full object-cover rounded-xl" />
                        </div>
                    <div className="absolute bottom-4 left-4 z-20">
                          <span className="rounded-md font-semibold py-1 px-2 text-sm bg-[#9A3220] text-white px-4 py-2">20×20 ft</span>
                        </div>
                    </div>
                    <div className="card-info pt-4 pb-2 text-center border-b border-gray-300 rounded-xl">
                        <h4 className="text-white font-semibold text-3xl">Case Study - CountR</h4>
                        <div className="flex items-center py-2 justify-center">
                            <span className="text-sm text-white">Amusement Expo</span>
                        </div>
                    </div>
                </div>
          </a>
          <a href="/case-study/tedial/">
                <div className="video-card rounded-xl">
                    <div className="video-thumb shadow-lg bg-black rounded-xl relative">
                        <div className="thumb-wrapper rounded-xl overflow-hidden aspect-[768/531]">
                            <Image src="/images/case2.avif" width="768" height="531" alt="" className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="absolute bottom-4 left-4 z-20">
                          <span className="rounded-md font-semibold py-1 px-2 text-sm bg-[#9A3220] text-white px-4 py-2">20×20 ft</span>
                        </div>
                    </div>
                    <div className="card-info pt-4 pb-2 text-center border-b border-gray-300 rounded-xl">
                        <h4 className="text-white font-semibold text-3xl">Case Study - Tedial</h4>
                        <div className="flex items-center py-2 justify-center">
                            <span className="text-sm text-white">Nab Show</span>
                        </div>
                    </div>
                </div>
          </a>
          <a href="/case-study/saier">
                  <div className="video-card rounded-xl">
                    <div className="video-thumb shadow-lg bg-black rounded-xl relative">
                        <div className="thumb-wrapper rounded-xl overflow-hidden aspect-[768/531]">
                            <Image src="/images/case4.avif" width="768" height="531" alt="" className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="absolute bottom-4 left-4 z-20">
                          <span className="rounded-md font-semibold py-1 px-2 text-sm bg-[#9A3220] text-white px-4 py-2">20×20 ft</span>
                        </div>
                    </div>
                    <div className="card-info pt-4 pb-2 text-center border-b border-gray-300 rounded-xl">
                        <h4 className="text-white font-semibold text-3xl">Case Study - Saier</h4>
                        <div className="flex items-center py-2 justify-center">
                            <span className="text-sm text-white">ISSA Show</span>
                        </div>
                    </div>
                </div>
          </a>
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