'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import $ from 'jquery';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

export default function TradeShowBoothDisplayRentals() {
	



	useEffect(() => {
		if (typeof window === 'undefined') return;
		
		const initFAQ = () => {
			if (window.$ && window.$.fn) {
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
			}
		};

		const interval = setInterval(() => {
			if (window.$ && window.$.fn) {
				clearInterval(interval);
				initFAQ();
			}
		}, 100);

		return () => clearInterval(interval);
	}, []);
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
	const boothSizes = ['10x10', '10x20', '10x30', '20x20', '20x30', '20x40', '30x30', '30x40', '40x40', '40x50'];

	const portfolioItems = [
		{ title: 'Tedial', subtitle: 'Promat 2025 | Chicago | 20x20', image: '/images/rpt1.webp' , alttag: '20x20 Trade Show Booth Rental for Tedial at Promat 2025 Designed and Built by Triumfo Inc. in Chicago, USA'},
		{ title: 'PRECIMETER', subtitle: 'Aluminum 2025 | Nashville, USA | 10x20', image: '/images/rpt2.webp', alttag: '10x20 Exhibit Booth Rental for PRECIMETER at Aluminum 2025 Designed and Built by Triumfo Inc. in Nashville'},
		{ title: 'CRYO Future', subtitle: 'ASRM 2025 | 20x20 | San Antonio', image: '/images/rpt3.webp', alttag: '20x20 Exhibition Booth Rental for CRYO Future at ASRM 2025 Designed and Built by Triumfo Inc. in San Antonio, Texas' },
		{ title: 'Alliance Plast', subtitle: 'Pack Expo 2025 | 30x40 | Las Vegas', image: '/images/rpt4.webp', alttag: '30x40 Trade Show Booth Rental for Alliance Plast at Pack Expo 2025 Designed and Built by Triumfo Inc. in Las Vegas' },
		{ title: 'Felix Schoeller', subtitle: 'Printing United 2025 | 10x30 | Orlando', image: '/images/rpt5.webp', alttag: '10x30 Custom Booth Rental for Felix Schoeller at Printing United 2025 Designed and Built by Triumfo Inc. in Orlando' },
		{ title: 'Business France', subtitle: 'Small Satellite Conference 2025 | 20x30 | Salt Lake City', image: '/images/rpt6.webp', alttag: '20x30 trade show booth rental for Business France at Small Satellite Conference 2025 Designed and Built by Triumfo Inc. in Salt Lake City, Utah' },
	];

	const faqs = [
		{
			q: 'How much customization is possible with your rental exhibit?',
			a: 'Rental booths can be fully customized according to your branding, graphics, colors, and layout needs. We can also add interactive elements that align with your exhibit goals while keeping the costs in control.',
			bg: 'bg-gray-100'
		},
		{
			q: 'Who is responsible for handling the installation, dismantling, and logistics?',
			a: 'We are a full-service provider for rental booths. We offer complete I&D (Installation and Dismantling) and logistics support through experienced teams of professionals. This saves you from coordinating multiple vendors.',
			bg: 'bg-white'
		},
		{
			q: 'What is the minimum time required to customize a rental booth?',
			a: 'This timeline depends on the complexity of graphics and features to be added. It’s best to start at least 2 to 5 weeks before the show. This allows ample time for design approval, graphic production, and logistics coordination.',
			bg: 'bg-white'
		},
		{
			q: 'If we have multiple shows throughout the year, is renting or buying more cost-effective?',
			a: 'This decision is mainly based on show frequency. Renting is ideal for 1 to 3 shows per year. Buying a booth becomes more cost-effective when you participate in 4 or more shows per year.',
			bg: 'bg-white'
		},
		{
			q: 'What’s included in your trade show booth rental package?',
			a: 'Our booth rental packages include the booth structure, graphics, furniture, lighting, and flooring. We also handle setup, dismantling, and logistics. Also, storage and on-site booth management are included in our booth rental services.',
			bg: 'bg-gray-100'
		},
		{
			q: 'What factors affect the cost of renting a trade show booth in the U.S.?',
			a: 'The cost of renting a trade show display depends on many factors. These factors are booth size, design complexity, materials, graphic production, and show location. Support service requirements, such as installation, shipping, and on-site labor, also impact the overall cost.',
			bg: 'bg-gray-100'
		},
	];
	const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.triumfo.us/#organization",
        name: "Triumfo Inc.",
        url: "https://www.triumfo.us/",
        logo:
          "https://www.triumfo.us/_next/image/?url=%2Fimages%2Flogo.webp&w=256&q=75",
        description:
          "Triumfo Inc. is a full-service trade show solutions company, offering design, fabrication, logistics, and in-house production.",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          email: "enquiry@triumfo.us",
          telephone: "+1 775-927-6412",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "5071 N. Rainbow Blvd, Suite 170",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89130",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.facebook.com/triumfoinc",
          "https://x.com/triumfoinc",
          "https://www.youtube.com/channel/UCJyqDSj6grpkbWbnGYWciNw",
          "https://www.linkedin.com/company/triumfoinc",
        ],
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: 260,
        },
      },
      {
        "@type": "WebPage",
        url: "https://www.triumfo.us/trade-show-booth-display-rentals/",
        name: "Trade Show Booth Display Rentals — Triumfo Inc.",
        description:
          "Explore Triumfo's wide range of trade show booth display rentals. Fully customizable and delivered ready for your event. Perfect for exhibitions, conventions, and trade shows.",
        mainEntity: {
          "@id": "https://www.triumfo.us/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.triumfo.us/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Trade Show Booth Display Rentals",
            item: "https://www.triumfo.us/trade-show-booth-display-rentals/",
          },
        ],
      },
    ],
  };
	return (
		<>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />

		<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          strategy="afterInteractive"
        />
			<section>
				<div className="bannerbg bg-[#34343C] py-16 lg:py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-4">Your Nationwide Trade Show Booth Rental Partner</h1>
								<p className="text-white text-xl">As your nationwide trade show booth rental partner, we deliver reliable, turnkey exhibit solutions in every major U.S. city—ensuring your brand is always show-ready, wherever you exhibit.</p>
							</div>
							<div className="mt-8 text-center"><Link href="/contact-us/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Get Free Quote</Link></div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="circlebg py-20 bg-white">
					<div className="container mx-auto px-4">
						
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
								<h2 className="text-4xl text-gray-700 font-semibold mb-4">Our Exhibit Rental Solutions</h2>
								<ul>
									<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> 500+ booth rental options across multiple sizes.</li>
									<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> Double-deck and large custom booth solutions.</li>
									<li className="flex  gap-x-2 text-gray-700 text-base mb-3 items-center"><i className="fa fa-angle-right"></i> End-to-end support: design to dismantling.</li>
								</ul>
							</div>
						</div>
						<div className="mt-12 text-center"><Link href="/trade-show-booth-ideas/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Explore Trade Show Booth Rentals</Link></div>
					</div>
				</div>
			</section>
			<section>
				<div className="homeportfolio bg-[#34343C] py-20">
					<div className="container mx-auto px-4 text-center text-white pb-20">
						<div className="max-w-3xl mx-auto">
						<h2 className="maintitle">Explore Trade Show Booth Rental Work</h2>
						<div className="mt-4">
							<p className="text-xl text-white leading-relaxed">Take a look at our exhibit booth rentals that have helped brands stand out on the show floor. Each design is crafted to attract attention, engage visitors, and leave a memorable impression at major trade shows across the USA.</p>
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
				<div className="contentbg py-36">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-24 items-center">
							<div className="mb-8 lg:mb-0">
								<div className="figure relative before:absolute before:content-[''] before:inset-0 before:left-[-10px] before:top-[-7px] before:bg-[#34343C] before:w-[calc(100%-50px)] before:h-[calc(100%+14px)] before:rounded-[8px]">
									<Image src="/images/build-rental-booth.webp" width={582} height={474} alt="" className="w-full h-auto rounded-xl relative z-10" />
								</div>
							</div>
							<div className="contents self-center">
								<div>
									<h2 className="maintitle text-gray-700 mb-4">Let’s Build Your Rental Booth</h2>
									<p className="text-xl text-gray-500 leading-relaxed">Need a unique design tailored to your brand and goals? Contact us — we’ll create one for free within 48 hours.</p>
									<div className="flex flex-col sm:flex-row gap-4 mt-12">
										<Link href="/contact-us/" className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-white rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:text-white transition duration-300">
											Claim Your Free Design
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="servicebg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center">
							<h1 className="maintitle text-white mb-6">Why Rent a Trade Show Booth?</h1>
							<p className="text-white text-lg">Renting a trade show booth offers many remarkable advantages. Let us elaborate on the major reasons why you should prefer it over purchasing a booth. </p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-4 mt-12">
							<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
								<h3 className="title text-4xl font-semibold mb-6">Our Expertise</h3>
								<p className="text-lg mb-0 pt-6 border-t border-gray-200">25+ years of trade show booth rental experience in the U.S.</p>
							</div>
							<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
								<h3 className="title text-4xl font-semibold mb-6">Turnkey Services</h3>
								<p className="text-lg mb-0 pt-6 border-t border-gray-200">End-to-end service: design, fabrication, logistics, I&D, and on-site support.</p>
							</div>
							<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
								<h3 className="title text-4xl font-semibold mb-6">We Are Local</h3>
								<p className="text-lg mb-0 pt-6 border-t border-gray-200">Local teams across major trade show cities for faster response and lower shipping costs.</p>
							</div>
							<div className="bg-white rounded-2xl px-6 py-12 transition-colors duration-500 ease-in-out hover:bg-gray-700 text-gray-700 hover:text-white">
								<h3 className="title text-4xl font-semibold mb-6">24x7 Full Support</h3>
								<p className="text-lg mb-0 pt-6 border-t border-gray-200">Dedicated project manager for each event.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			


			<section>
  <div className="bg-[#E9EEF7] py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="maintitle text-gray-700 mb-6">
         End-to-End Exhibit Rental Solutions In the USA
        </h2>
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



			
			<section>
				<div className="faqbg bg-white py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mb-12 text-center mx-auto">
							<h2 className="text-gray-700 text-6xl font-bold mb-4">FAQs</h2>
							<p className="text-gray-600 mb-6 text-base">Learn answers from experts to your queries you may have when renting trade show booths.</p>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2  md:gap-12">
							<div className="self-center">
								{faqs.map((faq, idx) => (
									<div key={idx} className={`borbg ${idx === 0 ? 'mb-4' : 'mb-2'} rounded-xl overflow-hidden ${faq.bg}`}>
										<div className="tab-button text-xl font-medium px-4 bg-[#943724] py-4 text-white cursor-pointer flex items-center gap-x-2">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="3">
												<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
											</svg>
											{faq.q}
										</div>
										<div className="tab-caption px-6 py-4 text-base text-gray-600">
											<p>{faq.a}</p>
										</div>
									</div>
								))}
							</div>
							<div className="self-center hidden lg:block">
								<Image src="/images/faq7.webp" width={602} height={650} alt="" className="w-full h-auto rounded-xl" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="ctaction bg-[#E9EEF7] py-10">
				<div className="container mx-auto px-4">
					<div className="bg-gray-900 text-white rounded-xl p-6 md:p-10 mx-4 md:mx-auto max-w-7xl my-10">
						<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
							<div>
								<h2 className="text-xl md:text-4xl font-semibold mb-3 barlofamilty">
									Ready to plan your next show?
								</h2>
								<p className="text-sm md:text-base text-gray-300">
									Tell us your goals — we'll recommend the ideal booth solution.
								</p>
							</div>
							<div className="flex flex-col sm:flex-row gap-3 shrink-0 text-center">
								<Link href="tel:+1 775 927 6412" className="px-5 py-4 rounded-md bg-white text-gray-900 text-l font-medium hover:bg-gray-100 transition">
                    Call Us
                  </Link>
								<Link href="/contact-us/" className="px-5 py-4 rounded-md bg-custom text-white text-l font-medium hover:bg-red-600 transition">
									Get a Quote
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				select option {
					background-color: #fff !important;
					color: #414141;
				}
				select option:hover {
					background-color: #000 !important;
					color: #fff !important;
				}
				.contentbg {
					display: block;
				}
				.contentbg .figure {
					display: block;
					width: 100%;
					position: relative;
				}
				.contentbg .figure::before {
					content: '';
					display: block;
					position: absolute;
					left: -10px;
					top: -7px;
					width: calc(100% - 50px);
					height: calc(100% + 14px);
					background: #34343C;
					border-radius: 8px;
				}
				.contentbg .figure img {
					position: relative;
					z-index: 1;
					width: 100%;
					height: auto;
				}
				.contentbg .contents {
					display: block;
					position: relative;
				}
				input::placeholder{
					color:#ffffff;
				}
			`}</style>
		</>
	);
}

