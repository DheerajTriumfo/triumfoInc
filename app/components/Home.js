'use client';
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from 'react';
import { useHomeQuery } from '../../hooks/useHomeQuery';
import { get } from '../../lib/apiClient';
import Faqtab from './../home/faq.js';
import Boothlayout from './../home/Boothlayout.js';
import HomeportFolio from './../home/homeportfilio.js';


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

  useEffect(() => {
    // ensure jQuery is available
    if (typeof window === 'undefined' || !window.$) return;
    const $ = window.$;

    $(document).ready(function () {
      $('.moreless-button').off('click.moreless').on('click.moreless', function () {
        $('.moretext').slideDown();

        if ($(this).text().trim() === "Read more") {
          $(this).text("Load More");
        } else {
          $(this).html('<a href="/contact-us/" class="less-link" style="color:#fff;">Contact For Turnkey Services</a>');
        }
      });
    });

    // cleanup on unmount
    return () => {
      $('.moreless-button').off('click.moreless');
    };
  }, []);

  useEffect(() => {
    const texts = [
      "Impress", "Engage", "Convert"
    ];

    const typingSpeed = 200;   // typing speed (ms)
  const deletingSpeed = 50; // deleting speed (ms)
  const pauseAfterWord = 2000; // pause after full word (ms)

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const el = document.getElementById("fadeText");
  if (!el) return;

  let timeoutId;

  function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      // Typing
      el.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        timeoutId = setTimeout(() => (isDeleting = true), pauseAfterWord);
      }
    } else {
      // Deleting
      el.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    timeoutId = setTimeout(
      typeEffect,
      isDeleting ? deletingSpeed : typingSpeed
    );
  }

  typeEffect();

    // cleanup (important!)
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      
      <section className="relative w-full h-[500px] md:h-[813px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={banner?.imageUrl || "/images/booth-design-banner.webp"}
            alt="Dream. Build. Belong"
            fill
            className="object-cover object-center"
            priority
            fetchPriority="high"
            sizes="(max-width: 480px) 100vw,
                   (max-width: 768px) 100vw,
                   (max-width: 1200px) 100vw,
                   1920px"
          />
          {/* Overlay */}
          <div className="absolute inset-0  bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-0 text-center">
          <h1 className="text-white font-bold leading-tight max-w-6xl text-[2.8rem] sm:text-4xl lg:text-[7rem] font-heading mb-4">
            Crafting Trade Show Booths That  <span className="typewriter">
               <span id="fadeText" className="text-red-700"></span> <span className="cursor font-light text-5xl sm:text-4xl lg:text-8xl text-red-700">|</span>
            </span>
          </h1>
          <p className="text-white max-w-5xl text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            We specialize in designing, building, and managing high-quality custom and rental trade show booths for brands nationwide.
          </p>
          <a
            href="/trade-show-booth-ideas/"
            className="inline-block font-medium px-6 sm:px-8 py-3 sm:py-4 bg-[#8E2614] border-2 border-[#9A3220] rounded-xl text-white text-base sm:text-xl hover:bg-gray-700 hover:border-gray-600 transition duration-300"
          >
            Get Your Rental Booth Design in Just 48 Hours
          </a>
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
        <div className="topsection py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[3.5rem] md:text-6xl font-semibold text-gray-700 mb-6 leading-[1]">{data?.intro?.title || 'Choose Trade Show Exhibit Rentals by Booth Size'}</h2>
              <p className="text-xl text-gray-500">{data?.intro?.description || 'Find the perfect trade show booth to fit your space and needs. Browse over 500 exhibit rentals, organized by booth size, for a hassle-free selection.'}</p>
            </div>
            <Boothlayout/>
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
      <HomeportFolio/>
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
    <section>
        <div className="circlebg py-20 bg-[#EAEEF7]">
          <div className="container mx-auto px-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="box bg-[#34343C] py-12 px-6">
                <h2 className="text-4xl text-white font-semibold mb-4">Why Rent a Trade Show Booth Instead of Buying?</h2>
                <ul>
                  <li className="flex  gap-x-2 text-white text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Reduced upfront investment and lower total exhibiting costs.</li>
                  <li className="flex  gap-x-2 text-white text-base mb-3 items-center"><i className="fa fa-angle-right"></i> No storage, maintenance, or warehousing needed.</li>
                  <li className="flex  gap-x-2 text-white text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Flexibility to change booth size, design, and message for each show.</li>
                  <li className="flex  gap-x-2 text-white text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Quick installation and dismantling with pre-fabricated components.</li>
                </ul>
              </div>
              <div className="box bg-white hidden lg:block">
                <Image src="/images/build.webp" width={400} height={475} alt="" className="w-full h-auto"/>
              </div>
              <div className="box bg-[#34343C] py-12 px-6">
                <h2 className="text-4xl text-white font-semibold mb-4">Our Exhibit Rental Solutions</h2>
                <ul>
                  <li className="flex  gap-x-2 text-white text-base mb-3 items-center"><i className="fa fa-angle-right"></i> 500+ booth rental options across multiple sizes.</li>
                  <li className="flex  gap-x-2 text-white text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Large custom booth rental solutions.</li>
                  <li className="flex  gap-x-2 text-white text-base mb-3 items-center"><i className="fa fa-angle-right"></i> End-to-end support: design to dismantling.</li>
                  <li className="flex  gap-x-2 text-white text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Flexible rental packages to suit your budget.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
      
      
      <section>
        <div className="servicebg bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="maintitle text-gray-700 mb-6">Why Choose Triumfo Inc for Your Trade Show Booth Rentals</h2>
              <p className="text-gray-500 text-lg">With over 25 years of experience, Triumfo Inc delivers expert trade show booth rentals with full turnkey services, local teams for faster execution, and dedicated support to ensure every event is a success.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4 mt-12">
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
                <h3 className="title text-4xl font-semibold mb-6">Proud Member Of IFES</h3>
                <p className="text-lg mb-0 pt-6 border-t border-gray-200">Being an IFES member, we are committed to delivering top-quality, professional trade show exhibit solutions.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
                <h3 className="title text-4xl font-semibold mb-6">500+ Booth Options</h3>
                <p className="text-lg mb-0 pt-6 border-t border-gray-200">We offer 500+ exhibit rental options in a variety of sizes, ready to match your brand and space needs.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
                <h3 className="title text-4xl font-semibold mb-6">Free Custom Design</h3>
                <p className="text-lg mb-0 pt-6 border-t border-gray-200">We offer custom booth design concepts tailored to your brand, goals, and budget—free, and with no commitment.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
                <h3 className="title text-4xl font-semibold mb-6">Turnkey Booth Services</h3>
                <p className="text-lg mb-0 pt-6 border-t border-gray-200">We are a full-service trade show booth design and building company. From design to dismantling, we manage all.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
                <h3 className="title text-4xl font-semibold mb-6">In-House  Production</h3>
                <p className="text-lg mb-0 pt-6 border-t border-gray-200">In-house production in our 80,000+ sq. ft. facility ensures quality, speed, and complete control.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
                <h3 className="title text-4xl font-semibold mb-6">Transparent Pricing</h3>
                <p className="text-lg mb-0 pt-6 border-t border-gray-200">We provide detailed, itemized quotes so you can easily compare them with other exhibit companies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section>
        <div className="testimonial bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12">
              <h2 className="maintitle mb-4">{data?.testimonialsIntro?.title || 'Client Testimonials'}</h2>
              <p className="text-xl text-[#9A3220] font-medium mb-4">Your expectation. Our obligation.</p>
              <p className="text-xl text-gray-500 leading-relaxed">{data?.testimonialsIntro?.description || 'Watch video testimonials to see how Triumfo exceeded client expectations in creating memorable trade show booths, expo booths, and exhibition stands.'}</p>
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
  <div className="bg-[#E9EEF7] py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="maintitle text-gray-700 mb-6">End-to-End Exhibit Rental Solutions Across the USA</h2>
        <p className="text-xl text-gray-500">
         Triumfo Inc. is a trusted name in trade show booth rentals with 25+ years of experience. We deliver fully managed rental exhibits across major U.S. trade show cities—simple, seamless, and stress-free.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
    <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Las Vegas
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Chicago
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Orlando
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
             Anaheim
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              San Diego
            </h3>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Los Angeles
            </h3>
          </div>
        </div>
        <div className="flex flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
             Atlanta
            </h3>
          </div>
        </div>
        <div className="flex flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              New York
            </h3>
          </div>
        </div>
      </div>
      <div className="moretext hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
    
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Washington DC
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Seattle
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              San Francisco
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Miami
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Denever
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Utah
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              Baltimore
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0">
          <div className="bg-white rounded-[14px] p-16 lg:p-[68px] border border-gray-300 text-center block flex w-full">
            <h3 className="text-3xl text-gray-600  barlofamilty flex items-center justify-center w-full">
              South Carolina
            </h3>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center px-4">
    <button
      type="button"
      onClick={() => {}}
      className="moreless-button w-full sm:w-auto px-6 py-3 bg-custom border-2 border-white rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:text-white transition duration-300 cursor-pointer"
    >
      View More
    </button>
  </div>
  </div>
</section>
      <Faqtab/>
      <div className="ctaction bg-[#E9EEF7] py-6">
        <div className="container mx-auto px-4">
          <div className="text-gray-700 rounded-xl  py-16">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-5xl md:text-5xl font-semibold mb-3 font-heading">
                    {data?.ctaBottom?.title || 'Let’s Plan Your Next Show'}
                  </h2>
                  <p className="text-lg text-gray-500">
                    {data?.ctaBottom?.subtitle || 'Share your trade show booth needs of any size—rental, custom, double-deck, or pavilion—and we’ll provide a tailored proposal with a complete solution for your event.'}
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