'use client';
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from 'react';
import { useHomeQuery } from '../../hooks/useHomeQuery';
import { get } from '../../lib/apiClient';
import Faqtab from './../home/faq.js';




export default function Home() {
  const { data, isLoading } = useHomeQuery();
  const [hpPortfolio, setHpPortfolio] = useState([]);
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
  const banner = data?.banner || {};
  const stats = data?.stats || [];
  const locations = data?.locations || [
    { title: '3D Visualization', href: '' },
    { title: 'Custom Fabrication', href: '' },
   
    { title: 'Project Management', href: '' },
    { title: 'Installation,  Dismantling', href: '' },
    { title: 'Global Logistics', href: '' },
    { title: 'Graphic Production', href: '' },
    { title: 'Digital Integration', href: '' },
    { title: 'Post-Show Support', href: '' }
    ];

  const rentals = data?.rentals || [];
  console.log(rentals);
  const portfolio = data?.portfolio || [];
  const testimonials = data?.testimonials || [];

  return (
    <>
      <link
        rel="preload"
        href="/_next/static/css/app.css"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>
        <link rel="stylesheet" href="/_next/static/css/app.css" />
      </noscript>
      <section>
        <div className="bannerbg relative">
          <Image src={banner?.imageUrl || "/images/booth-design-banner.webp"}  width={1920} height={813} priority={true} 
          sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         1920px" alt="Dream. Build. Belong"
        />
          <div className="bg-[#34343C] md:bg-[rgba(0,0,0,0.4)] relative md:absolute top-0 left-0 z-20 w-full h-full">
            <div className="container mx-auto relative p-6 md:p-0 top:0 md:top-1/2 transform-0 md:transform-[translateY(-50%)]">
              <div className="grid grid-cols-1 justify-items-center ">
                <h1 className="text-white mb-4 font-bold leading-tight max-w-6xl text-4xl lg:text-[5.0rem] font-heading text-center">{banner?.title || 'Trade Show Exhibit Booth Experts Bringing Your Vision to Life'}</h1>
                <div className="font-semibold text-2xl text-white md:text-4xl leading-tight max-w-2xl mb-2 font-heading">{banner?.subtitle || '25+ Years of Building Trust.'}</div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-6">
                  <div><a href="/trade-show-booth-ideas/" className="block w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#8E2614] border-2 border-[#9A3220] rounded-xl text-base sm:text-xl text-white hover:bg-gray-700 hover:border-2 hover:border-gray-600 hover:text-white transition duration-300 text-center">Browse from over 500 Designs</a></div>
                </div> 
              </div>
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
        <div className="topsection py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="maintitle text-gray-700 mb-6">{data?.intro?.title || 'End-to-End Trade Show Exhibit Solutions'}</h2>
              <p className="text-xl text-gray-500">{data?.intro?.description || 'We have been crafting custom trade show booths that empower exhibitors to create memorable brand experiences since 1999. We simplify your trade show exhibit journey by eliminating last-minute hassles. We deliver turnkey trade show booth services with consistent quality, on time and on budget.'}</p>
            </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {(stats.length ? stats : [
                { icon: '/images/exhibit-service.webp',label: 'Large Exhibit', value1: '40x40 Exhibits',  url1: '/40x40-trade-show-booth/', value2: '40x50 Exhibits',  url2: '/40x50-trade-show-booth/',  },
                { icon: '/images/exhibit-service.webp',label: 'Island Exhibits', value1: '20x20 Exhibits',  url1: '/20x20-trade-show-booth/', value2: '20x30 Exhibits',  url2: '/20x30-trade-show-booth/', value3: '20x40 Exhibits',  url3: '/20x40-trade-show-booth/',value4: '30x30 Exhibits',  url4: '/30x30-trade-show-booth/', },
                { icon: '/images/exhibit-service.webp',label: 'Inline Exhibits', value1: '10x10 Exhibits',  url1: '/10x10-trade-show-booth/', value2: '10x20 Exhibits',  url2: '/10x20-trade-show-booth/', value3: '10x30 Exhibits',  url3: '/10x30-trade-show-booth/' },
                { icon: '/images/exhibit-service.webp',  label: 'Rental Exhibit', value1: 'Flexible rental booths designed for any show need.',  url1: '/30x40-trade-show-booth/' },
              ]).map((item, idx) => (
                <div key={idx} className="bg-white rounded-[14px] p-[28px] border border-gray-700 text-center hover:border-gray-900 hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-3xl text-gray-600 font-bold mt-4 barlofamilty group-hover:text-gray-900 transition-colors">
                    {item.label}
                  </h3> 

                  <div className="h-1 w-full bg-gray-200 my-4"></div>
                  <div className="mt-6 space-y-2">
                    {item.value1 && (
                      <Link href={item.url1 || '#'} className="block py-2 px-3 text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:translate-x-1 font-medium barlofamilty">
                        {item.value1}
                      </Link>
                    )}
                    {item.value2 && (
                      <Link href={item.url2 || '#'} className="block py-2 px-3 text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:translate-x-1 font-medium barlofamilty">
                        {item.value2}
                      </Link>
                    )}
                    {item.value3 && (
                      <Link href={item.url3 || '#'} className="block py-2 px-3 text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:translate-x-1 font-medium barlofamilty">
                        {item.value3}
                      </Link>
                    )}
                    {item.value4 && (
                      <Link href={item.url4 || '#'} className="block py-2 px-3 text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:translate-x-1 font-medium barlofamilty">
                        {item.value4}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                  <div className="w-full sm:w-auto"><a href={data?.cta?.primary?.href || "/contact-us/"} className="block w-full sm:w-auto px-6 py-3 bg-[#9A3220] border-2 border-[#9A3220] rounded-xl text-base sm:text-xl text-white hover:bg-gray-500 hover:border-2 hover:border-white hover:text-white transition duration-300 text-center">{data?.cta?.primary?.label || 'Get a Tailored Booth Design at No Cost'}</a></div>
                  <div className="w-full sm:w-auto"><a href={data?.cta?.secondary?.href || "/services/"} className="block w-full sm:w-auto px-6 py-3 border-2 border-[#9A3220] rounded-xl text-black text-base sm:text-xl hover:bg-custom hover:text-white transition duration-300 text-center">{data?.cta?.secondary?.label || 'Exhibit Services'}</a></div>
                </div>
          </div>
        </div>
      </section>
     <section>
  <div className="homeportfolio bg-[#34343C] py-20">
    <div className="container mx-auto px-4 text-center text-white pb-20">
      <h2 className="maintitle">Our Trade Show Booth Work</h2>
      <div className="max-w-3xl mx-auto mt-4">
        <p className="text-xl text-white leading-relaxed">Browse our recent trade show booth projects that we have delivered to our esteemed clients.</p>
      </div>
    </div>
    <div className="px-4 sm:px-2 py-2">
      <div className="grid grid-cols-12 gap-2">
        <div className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
          <img
            src="images/home-portfolio6.webp" width={767}  height={530}
            alt="Custom Trade Show Booth for Actus at NAB Show 2025"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         767px"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center w-full h-full text-center">
              <div className="">
                <h2 className="text-white font-semibold text-4xl mb-4">
                  Actus
                </h2>
                <p className="text-white text-base">
                  NAB Show 2025 Trade Show Booth
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
          <img
            src="images/pt2.webp" width={767}  height={530}
            alt="Custom Trade Show Booth for AutoStore at Promat 2019"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         767px"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center w-full h-full text-center">
              <div className="">
                <h2 className="text-white font-semibold text-4xl mb-4">
                  Auto Store
                </h2>
                <p className="text-white text-base">
                  Promat 2019 Custom Booth
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
          <img
            src="images/home-portfolio2.webp" width={767}  height={530}
            alt="Trade Show Booth for Dexon Systems at InfoComm 2018"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         767px"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center w-full h-full text-center">
              <div className="">
                <h2 className="text-white font-semibold text-4xl mb-4">
                  Dexon System
                </h2>
                <p className="text-white text-base">
                  InfoComm 2018 Exhibit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
          <img
            src="images/home-portfolio5.webp" width={767}  height={530}
            alt="Trade Show Booth for ION8 at IHS 2025"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         767px"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center w-full h-full text-center">
              <div className="">
                <h2 className="text-white font-semibold text-4xl mb-4">
                  ION8
                </h2>
                <p className="text-white text-base">
                  IHS 2025 Booth Design
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
          <img
            src="images/home-portfolio3.webp" width={767}  height={530}
            alt="Custom Wooden Trade Show Booth for ProtoChips at M&M 2025"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         767px"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center w-full h-full text-center">
              <div className="">
                <h2 className="text-white font-semibold text-4xl mb-4">
                  ProtoChips
                </h2>
                <p className="text-white text-base">
                  M&M 2025 Exhibit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="group grid col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
          <img
            src="images/home-portfolio4.webp" width={767}  height={530}
            alt="Trade Show Booth for FPC at IFAI 2018"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1200px) 100vw,
         767px"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center justify-center w-full h-full text-center">
              <div className="">
                <h2 className="text-white font-semibold text-4xl mb-4">
                  FPC
                </h2>
                <p className="text-white text-base">
                  IFAI 2018 Island Booth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
        <a
          href={data?.portfolioIntro?.primaryCta?.href || "/contact-us/"}
          className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-custom rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:text-white transition duration-300"
        >
          Get A Quote
        </a>
        <a
          href={data?.portfolioIntro?.secondaryCta?.href || "/portfolio/"}
          className="w-full sm:w-auto px-6 py-3 border-2 bg-white border-white rounded-xl text-black text-center hover:bg-custom hover:text-white transition duration-300"
        >
          View More
        </a>
      </div>
    </div>
  </div>
</section> 


      {/* <section>
        <div className="contentbg py-36">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-24">
              <div className="mb-8 m:mb-0">
                <div className="figure relative before:absolute before:content-[''] before:inset-0 before:left-[-10px] before:top-[-7px] before:bg-[#34343C] before:w-[calc(100%-50px)] before:h-[calc(100%+14px)] before:rounded-[8px]">
                  <Image src={(data?.contentBlock?.imageUrl) || "/images/custom-exhibit-for-your-booth.webp"} width={582} height={474} alt="Custom Trade Show Booth Work At Mine Expo 2024" className="w-full h-auto rounded-xl relative z-10"/>
                </div>
              </div>
              <div className="contents">
                <div>
                  <h2 className="maintitle text-gray-700 mb-4">{data?.contentBlock?.title || 'Get Your Free trade show exhibit Concept in Just 48 Hours.'}</h2>
                  <p className="text-xl text-gray-500 leading-relaxed">{data?.contentBlock?.description || 'Get a personalized trade show booth concept tailored to your brand—delivered in just 48 hours, completely free and without commitment.'}</p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a href={data?.contentBlock?.primaryCta?.href || '/contact-us/'} className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-white rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:text-white transition duration-300">
                      {data?.contentBlock?.primaryCta?.label || 'Claim Your Free Design'}
                    </a>
                    
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       */}


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
		                    <h4 className="text-gray-700 font-semibold text-3xl">Case Study - CountR</h4>
		                    <div className="flex items-center pt-2 justify-center">
		                        <span className="text-sm text-gray-500">Amusement Expo</span>
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
		                    <h4 className="text-gray-700 font-semibold text-3xl">Case Study - Tedial</h4>
		                    <div className="flex items-center pt-2 justify-center">
		                        <span className="text-sm text-gray-500">Nab Show</span>
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
		                    <h4 className="text-gray-700 font-semibold text-3xl">Case Study - Saier</h4>
		                    <div className="flex items-center pt-2 justify-center">
		                        <span className="text-sm text-gray-500">ISSA Show</span>
		                    </div>
		                </div>
		            </div>
					</a>
				</div>
				<div className="mt-12 text-center"><Link href="/case-study/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">View All Case Studies</Link></div>
	          </div>
	        </div>
	    </section>
      

      <section>
        <div className="testimonial bg-[#E9EEF7] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12">
              <h2 className="maintitle mb-4">{data?.testimonialsIntro?.title || 'Client Testimonials'}</h2>
              <p className="text-xl text-[#9A3220] font-medium mb-4">Your expectation. Our obligation.</p>
              <p className="text-xl text-gray-500 leading-relaxed">{data?.testimonialsIntro?.description || 'Watch short video testimonials to see how Triumfo Inc. has met or exceeded client expectations in creating memorable, high-performing trade show exhibit booths and impactful show experiences.'}</p>
            </div>
            <div className="grid grid-cols-12 gap-8">
            <div className="video-card rounded-xl relative col-span-12 md:col-span-6 lg:col-span-4">
				                <div className="video-thumb relative overflow-hidden cursor-pointer shadow-lg bg-black rounded-xl" onClick={() => openModal('https://www.youtube.com/embed/sOuKNnrLzb0')}>
				                    <div className="thumb-wrapper rounded-xl">
                          <Image src="/images/video-banner1_1.webp"  width={768} height={531} alt="Testimonial Video 1" className="w-full h-[360px] md:h-[420px] object-cover rounded-xl"/>
				                        <div className="small-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/95 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20">
				                            <i className="fa fa-play text-red-700"></i>
				                        </div>
				                        <div className="thumb-duration bg-[rgba(0,0,0,0.85)] absolute top-4 right-4 text-white rounded-md text-center py-1 px-3 z-20">0:17</div>
				                    </div>
				                </div>
              </div>
              <div className="video-card rounded-xl relative col-span-12 md:col-span-6 lg:col-span-4">
				                <div className="video-thumb relative overflow-hidden cursor-pointer shadow-lg bg-black rounded-xl" onClick={() => openModal('https://www.youtube.com/embed/fTs64_NWdUw')}>
				                    <div className="thumb-wrapper rounded-xl">
                          <Image src="/images/video-banner3_1.webp"  width={768} height={531} alt="Testimonial Video 2" className="w-full h-[360px] md:h-[420px] object-cover rounded-xl"/>
				                        <div className="small-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/95 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20">
				                            <i className="fa fa-play text-red-700"></i>
				                        </div>
				                        <div className="thumb-duration bg-[rgba(0,0,0,0.85)] absolute top-4 right-4 text-white rounded-md text-center py-1 px-3 z-20">0:20</div>
				                    </div>
				                </div>
              </div>
              <div className="video-card rounded-xl relative col-span-12 md:col-span-6 lg:col-span-4">
				                <div className="video-thumb relative overflow-hidden cursor-pointer shadow-lg bg-black rounded-xl" onClick={() => openModal('https://www.youtube.com/embed/U28Z9Kr90uE')}>
				                    <div className="thumb-wrapper rounded-xl">
                          <Image src="/images/video-banner2_1.webp"  width={768} height={531} alt="Testimonial Video 3" className="w-full h-[360px] md:h-[420px] object-cover rounded-xl"/>
				                        <div className="small-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/95 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20">
				                            <i className="fa fa-play text-red-700"></i>
				                        </div>
				                        <div className="thumb-duration bg-[rgba(0,0,0,0.85)] absolute top-4 right-4 text-white rounded-md text-center py-1 px-3 z-20">0:47</div>
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
      <section>
        <div className="seosection py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 leading-normal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
              <div className="mb-8 lg:mb-0 text-left lg:text-justify">
                <h2 className="maintitle mb-4 text-gray-700 text-center">For Exhibitors:</h2>
                <p className="text-xl text-[#9A3220] font-medium mb-4 text-center">Simplifying Your Exhibit Experience</p>
                <p className="text-gray-700 text-base mb-4 leading-[1.8rem]">Exhibiting at a trade show is never a simple task, whether it’s your first time or you exhibit frequently. You need the right trade show, booth partner, and booth type to meet your goals. All these can be overwhelming.</p>
                <p className="text-gray-600 text-base mb-4 leading-[1.8rem]">We simplify the entire exhibiting process. Our experts trade show booth designers and booth builders take every measure to ensure a smooth and successful show campaign. You can trust us whether you are a local, national, or international exhibitor.</p>
                <p className="text-gray-600 text-base mb-4 leading-[1.8rem]">As a proud member of <a className="text-blue-500 hover:text-blue-700" href="https://www.ifesnet.com/triumfo-international-gmbh/" target="_blank" rel="noopener noreferrer">IFES (International Federation of Exhibition & Event Services)</a>, Triumfo Inc. adheres to international quality standards, operates with ethical and responsible practices, and brings proven expertise in exhibitions and events. Our global association ensures reliability, consistency, and excellence in every project we deliver worldwide.</p>
              </div>
              <div className="text-left lg:text-justify">
                <h2 className="maintitle mb-4 text-gray-700 text-center">For Agencies:</h2>
                <p className="text-xl text-[#9A3220] font-medium mb-4 text-center">End-to-End Services, Under Your Name</p>
                <p className="text-gray-700 text-base mb-4 leading-[1.8rem]">You don’t have to look further if you are a trade show agency looking for a reliable exhibition stand builder. We provide end-to-end trade show booth solutions that you can confidently offer to your clients under your brand name. </p>
                <p className="text-gray-700 text-base mb-4 leading-[1.8rem]">We manage everything in-house with 30+ skilled 3D booth designers, 80+ expert booth builders, and 10+ creative graphic designers and printing specialists. Supported by a 40+ member I&D team and an 80,000+ sq. ft. production facility equipped with advanced technology, we deliver high-quality turnkey exhibit solutions with complete control and precision.</p>
                <p className="text-gray-700 text-base mb-4 leading-[1.8rem]">We currently partner with trade show agencies across 30+ countries, including the USA, Europe, UAE, India, South Korea, Japan, and China. We work for your clients, under your name, contributing to your reputation and success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faqtab/>
      <div className="ctaction bg-[#E9EEF7] py-6">
        <div className="container mx-auto px-4">
          <div className="text-gray-700 rounded-xl max-w-5xl mx-auto py-16">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-5xl md:text-5xl font-semibold mb-3 font-heading">
                    {data?.ctaBottom?.title || 'Let’s Plan Your Next Show'}
                  </h2>
                  <p className="text-lg text-gray-500">
                    {data?.ctaBottom?.subtitle || 'Share your trade show goals, and we will suggest the finest booth approach according to your budget and booth size. Let’s create a memorable brand experience for your next show.'}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0 text-center">
                  <Link href="https://wa.me/17029340798" target="_blank" rel="noopener noreferrer" className="px-5 py-4 rounded-md text-white text-l font-medium hover:opacity-90 transition flex items-center justify-center gap-2" style={{ backgroundColor: '#0CC143' }}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </Link>
                  <Link href={data?.ctaBottom?.secondary?.href || '/contact-us/'} className="px-5 py-4 rounded-md bg-custom text-white text-l font-medium hover:bg-red-600 transition">
                    {data?.ctaBottom?.secondary?.label || 'Get A Quote'}
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}