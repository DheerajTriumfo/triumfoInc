"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from 'react';

export default function Testimonial()
{
	useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
        clearInterval(interval); // stop checking
        window.$('#testimonials').owlCarousel({
          lazyLoad: true,
          loop: true,
          margin: 30,
          autoplay: true,
          autoplayTimeout: 2000,
          smartSpeed: 1000,
          dots: true,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 2 },
          },
        });
      }
    }, 100); // check every 100ms

    return () => clearInterval(interval); // cleanup
  }, []);

	const [isModalOpen, setIsModalOpen] = useState(false);
  	const [videoUrl, setVideoUrl] = useState("");

	  const openModal = (url) => {
	    setVideoUrl(`${url}?autoplay=1`);
	    setIsModalOpen(true);
	  };

	  const closeModal = () => {
	    setIsModalOpen(false);
	    setVideoUrl(""); // stop video
	  };

  // Close modal when clicking the dark background
	  const handleBackgroundClick = (e) => {
	    if (e.target.id === "videoModal") closeModal();
	  };
  const reviews = [
    { img: "/images/newchef-logo.webp", name: "G. Lucien Salama.", role: "CEO – New Chef", text: "I want to thank Triumfo Inc. for making our National Restaurant Association Booth really stand out this year. The team worked great under pressure, never lost their focus and delivered beautiful designs for us. The floor you recommended made a statement, thank you for your help and such a beautiful visual result." },
    { img: "/images/hangcha-logo.webp", name: "Bob Wang", role: "Marketing Manager", text: "All in all, it was a huge success and I appreciate Triumfo’s professional work. The construction of the booth was really good." },
    { img: "/images/vidyaherb-logo.webp", name: "Arnaud ANANDANE.", role: "C.O.O", text: "We would like to express our thanks for all the stall construction services you have provided for SSW 2019. There are a few things that we would like to bring to your attention about the service and for any possible future cooperation with." },
  ];
	return(
		<>
			<Head>
		        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
		    </Head>
            
			<section>
		    	<div className="bannerbg bg-[#34343C] py-20">
		    		<div className="container mx-auto px-4">
		    			<div className="max-w-3xl mx-auto">
		    				<div className="text-center">
		    					<h1 className="text-white font-semibold text-7xl mb-6">Testimonials</h1>
		    					<p className="text-white font-noraml text-lg">Hear directly from our clients as they share their real experiences, project outcomes, and results in these video testimonials.</p>
		    					<div className="mt-8"><Link href="/contact-us/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Get Free Quote</Link></div>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </section>
		    <section>
		    	<div className="ourwork bg-white py-20">
		    		<div className="container mx-auto px-4">
		    			<div className="grid grid-cols-12 gap-8">
	            	<div className="video-card rounded-xl relative col-span-12 md:col-span-6 lg:col-span-4">
	                <div className="video-thumb relative overflow-hidden cursor-pointer shadow-lg bg-black rounded-xl" onClick={() => openModal('https://www.youtube.com/embed/sOuKNnrLzb0')}>
	                    <div className="thumb-wrapper rounded-xl">
                    		<Image src="/images/video-banner1_1.webp"  width={768} height={531} alt="Testimonial Video 1" className="w-full h-[360px] md:h-[420px] object-cover rounded-xl"/>
                        <div className="small-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/65 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20">
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
                        <div className="small-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/65 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20">
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
                        <div className="small-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/65 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out z-20">
                            <i className="fa fa-play text-red-700"></i>
                        </div>
	                      <div className="thumb-duration bg-[rgba(0,0,0,0.85)] absolute top-4 right-4 text-white rounded-md text-center py-1 px-3 z-20">0:47</div>
	                    </div>
	                </div>
	            	</div>
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
		    		</div>
		    	</div>
		    </section>
		<section>
		    	<div className="sliderbg bg-[#E9EEF7] py-20">
		    		<div className="container mx-auto px-4">
		    			<div className="grid grid-cols-1 gap-8">
					{/* Featured review (first) */}
					{reviews.map((review, index) => (
					<div className="bg-white rounded-[14px] border border-gray-200 shadow-sm overflow-hidden" key={index}>
				
						<div className="grid grid-cols-1 md:grid-cols-3" >
							{/* Left: avatar + name */}
							<div className="p-6 md:p-8 bg-gradient-to-b from-white to-gray-50 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-center text-center">
								<div className="w-[110px] h-[110px] rounded-full bg-[rgba(154,50,32,0.1)] flex justify-center items-center p-2 mb-4">
									<Image src={review.img} width={110} height={110} alt="Reviewer" className="w-full h-auto"/>
								</div>
								<h5 className="text-gray-800 font-semibold text-2xl barlofamilty">{review.name}</h5>
								<p className="text-sm text-gray-500 leading-relaxed">{review.role}</p>
							</div>
							{/* Right: content */}
							<div className="md:col-span-2 p-6 md:p-8">
							{review?.text && (
						<div className="relative flex items-center justify-center min-h-[200px] text-center px-4">
						<span className="absolute left-4 top-1 text-3xl text-[#9A3220]">“</span>
						
						<p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
						  {review.text}
						  <span className="text-3xl text-[#9A3220] ml-1 align-text-top">”</span>
						</p>
					  </div>
							)}
				</div>

						</div>
						
					</div>
						))}	
			
		    				{/* Scrollable list for the rest */}
		    				{/* <div className="overflow-x-auto">
		    					<div className="flex gap-6 pb-2 snap-x snap-mandatory">
		    						{reviews.slice(1).map((r, idx) => (
		    							<div key={idx} className="min-w-[320px] md:min-w-[420px] snap-start">
		    								<div className="bg-white rounded-[14px] py-[36px] px-[24px] border border-gray-700 h-full">
		    									<div className="flex items-center justify-center gap-x-6 mb-4">
		    										<div className="w-[90px] h-[90px] rounded-[50%] bg-[rgba(154,50,32,0.1)] flex justify-center items-center p-2"><Image src={r.img} width={110} height={110} alt="" className="w-full h-auto"/></div>
		    										<div>
		    											<h5 className="text-gray-700 font-semibold text-xl barlofamilty">{r.name}</h5>
		    											<p className="text-sm text-gray-500 leading-relaxed">{r.role}</p>
		    										</div>
		    									</div>
		    									<p className="text-l text-gray-500">{r.text}</p>
		    								</div>
		    							</div>
		    						))}
		    					</div>
		    				</div> */}
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

		</>
	);
}