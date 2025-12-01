import Link from "next/link";
import Image from "next/image";


export default function About(){
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
        "@type": "AboutPage",
        url: "https://www.triumfo.us/about-us/",
        name: "About Us — Triumfo Inc.",
        description:
          "Since 1999, Triumfo Inc. has been a leader in the trade show industry, delivering over 20,900+ projects with an 80,000+ sq. ft. production facility.",
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
            name: "About Us",
            item: "https://www.triumfo.us/about-us/",
          },
        ],
      },
    ],
  };
	return(
		<>
			<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
			<section>
		    	<div className="bannerbg bg-[#34343C] py-32">
		    		<div className="container mx-auto px-4">
		    			<div className="max-w-3xl text-center mx-auto">
		    				<h1 className="text-white font-semibold text-7xl mb-4">Triumfo Inc.</h1>
		    				<p className="text-white text-lg">Since 1999</p>
		    			</div>
		    		</div>
		    	</div>
		    </section>
		    <section>
		    	<div className="contentsection py-20 bg-white">
		    		<div className="container mx-auto px-4">
		    			<div className="max-w-3xl text-center mx-auto">
		    				<h2 className="maintitle text-gray-700">Our Story of Growth, Expertise, and Industry Leadership</h2>
		    				<p className="text-gray-500 text-lg mt-8">Recognizing a gap in the trade show industry, we saw few companies offering complete services under one roof, with most relying on subcontractors and increasing costs for exhibitors. Founded in 1999, we are committed to delivering comprehensive, high-quality trade show solutions.</p>
		    			</div>
		    			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
							<div className="bg-[#fff] rounded-[14px] p-[28px] border border-gray-200 text-center">
								<div className="w-[64px] h-[64px] rounded-[12px] bg-[#fff] flex items-center justify-center text-[24px] mx-auto"><Image src="/images/industry.webp" width={50} height={50} alt="25+ Years in Industry" className="h-12 w-12"/></div>
								<h3 className="text-3xl text-gray-600 font-bold mt-0 barlofamilty">25+</h3>
								<p className="text-2xl text-gray-500 barlofamilty">Years in Industry</p>
							</div>
							<div className="bg-[#fff] rounded-[14px] p-[28px] border border-gray-200 text-center">
								<div className="w-[64px] h-[64px] rounded-[12px] bg-[#fff] flex items-center justify-center text-[24px] mx-auto"><Image src="/images/projects1.webp" width={50} height={50} alt="20,900+ Projects Delivered" className="h-12 w-12"/></div>
								<h3 className="text-3xl text-gray-600 font-bold mt-0 barlofamilty">20,900+</h3>
								<p className="text-2xl text-gray-500 barlofamilty">Projects Delivered</p>
							</div>
							<div className="bg-[#fff] rounded-[14px] p-[28px] border border-gray-200 text-center">
								<div className="w-[64px] h-[64px] rounded-[12px] bg-[#fff] flex items-center justify-center text-[24px] mx-auto"><Image src="/images/clients.webp" width={50} height={50} alt="5000+ Happy Clients" className="h-12 w-12"/></div>
								<h3 className="text-3xl text-gray-600 font-bold mt-0 barlofamilty">5,000+</h3>
								<p className="text-2xl text-gray-500 barlofamilty">Happy Clients</p>
							</div>
							<div className="bg-[#fff] rounded-[14px] p-[28px] border border-gray-200 text-center">
								<div className="w-[64px] h-[64px] rounded-[12px] bg-[#fff] flex items-center justify-center text-[24px] mx-auto"><Image src="/images/facility.webp" width={50} height={50} alt="80,000+ Sq. Ft. Production Facility" className="h-12 w-12"/></div>
								<h3 className="text-3xl text-gray-600 font-bold mt-0 barlofamilty">80,000+</h3>
								<p className="text-2xl text-gray-500 barlofamilty">Sq. Ft. Production Facility</p>
							</div>
							<div className="bg-[#fff] rounded-[14px] p-[28px] border border-gray-200 text-center">
								<div className="w-[64px] h-[64px] rounded-[12px] bg-[#fff] flex items-center justify-center text-[24px] mx-auto"><Image src="/images/repeat-client.webp" width={50} height={50} alt="89% Repeat clients" className="h-12 w-12"/></div>
								<h3 className="text-3xl text-gray-600 font-bold mt-0 barlofamilty">89%</h3>
								<p className="text-2xl text-gray-500 barlofamilty">Repeat clients</p>
							</div>
							<div className="bg-[#fff] rounded-[14px] p-[28px] border border-gray-200 text-center">
								<div className="w-[64px] h-[64px] rounded-[12px] bg-[#fff] flex items-center justify-center text-[24px] mx-auto"><Image src="/images/worldwide.webp" width={50} height={50} alt="30+ Countries Served" className="h-12 w-12"/></div>
								<h3 className="text-3xl text-gray-600 font-bold mt-0 barlofamilty">30+</h3>
								<p className="text-2xl text-gray-500 barlofamilty">Countries Served</p>
							</div>
							<div className="bg-[#fff] rounded-[14px] p-[28px] border border-gray-200 text-center">
								<div className="w-[64px] h-[64px] rounded-[12px] bg-[#fff] flex items-center justify-center text-[24px] mx-auto"><Image src="/images/quality.webp" width={50} height={50} alt="99% Quality Assurance" className="h-12 w-12"/></div>
								<h3 className="text-3xl text-gray-600 font-bold mt-0 barlofamilty">99%</h3>
								<p className="text-2xl text-gray-500 barlofamilty">Quality Assurance</p>
							</div>
							<div className="bg-[#fff] rounded-[14px] p-[28px] border border-gray-200 text-center">
								<div className="w-[64px] h-[64px] rounded-[12px] bg-[#fff] flex items-center justify-center text-[24px] mx-auto"><Image src="/images/professional.webp" width={50} height={50} alt="260+ Skilled In-House Professionals" className="h-12 w-12"/></div>
								<h3 className="text-3xl text-gray-600 font-bold mt-0 barlofamilty">260+</h3>
								<p className="text-2xl text-gray-500 barlofamilty">Skilled In-House Professionals</p>
							</div>
						</div>
		    		</div>
		    	</div>
		    </section>
		    <section>
		    	<div className="heppyclients bg-[#34343C]">
		    		<div className="grid grid-cols-1 xl:grid-cols-2">
		    			<div className="figure relative overflow-hidden transition-transform duration-500 group-hover:scale-105 group">
		    				<Image src="/images/happy-client.webp" width="1366" height="1025" alt="" className="w-full h-auto"/>
		    				<div className="absolute top-0 left-0 z-20 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-100 group-hover:opacity-0 transition-opacity duration-500">
						      <div className="flex items-center justify-center w-full h-full text-center">
						        <div className="px-4 md:px-12 lg:px-16">
						          <h2 className="text-white maintitle text-4xl mb-4">
						            Trusted By
						          </h2>
						          <h2 className="text-white font-bold text-6xl md:text-7xl lg:text-8xl">Global Brands</h2>
						        </div>
						      </div>
						    </div>
		    			</div>
		    			<div className="contentt items-center self-center px-4 py-12 xl:py-0 md:px-6 lg:px-12 xl:px-20">
		    				<div className="grid grid-cols-12 gap-4">
	    						<div className="col-span-6 md:col-span-4"><Image src="/images/client-logo/samsung1.webp" width={200} height={94} alt="samsung client logo" className="w-full h-auto p-2 border border-gray-500"/></div>
	    						<div className="col-span-6 md:col-span-4"><Image src="/images/client-logo/google.webp" width={200} height={94} alt="google client logo" className="w-full h-auto p-2 border border-gray-500"/></div>
	    						<div className="col-span-6 md:col-span-4"><Image src="/images/client-logo/lg.webp" width={200} height={94} alt="LG client logo" className="w-full h-auto p-2 border border-gray-500"/></div>
	    						<div className="col-span-6 md:col-span-4"><Image src="/images/client-logo/tata-motors1.webp" width={200} height={94} alt="Tata Motors client logo" className="w-full h-auto p-2  border border-gray-500"/></div>
	    						<div className="col-span-6 md:col-span-4"><Image src="/images/client-logo/etihad.webp" width={200} height={94} alt="etihad client logo" className="w-full h-auto p-2  border border-gray-500"/></div>
	    						<div className="col-span-6 md:col-span-4"><Image src="/images/client-logo/hangcha1.webp" width={200} height={94} alt="hangcha client logo" className="w-full h-auto p-2 border border-gray-500"/></div>
	    						<div className="col-span-6 md:col-span-4"><Image src="/images/client-logo/indian-oil1.webp" width={200} height={94} alt="Indian Oil client logo" className="w-full h-auto p-2 border border-gray-500"/></div>
	    						<div className="col-span-6 md:col-span-4"><Image src="/images/client-logo/byd.webp" width={200} height={94} alt="BYD client logo" className="w-full h-auto p-2 border border-gray-500"/></div>
	    						<div className="col-span-6 md:col-span-4"><Image src="/images/client-logo/proponent.webp" width={200} height={94} alt="Proponent client logo" className="w-full h-auto p-2 border border-gray-500"/></div>
	    					</div>
		    			</div>
		    		</div>
		    	</div>
		    </section>
		    
		    <section>
		    	<div className="rectentwork bg-white py-20">
		    		<div className="container mx-auto px-4">
		    			<div className="max-w-3xl text-center mx-auto mb-12">
		    				<h2 className="maintitle text-gray-700">Our Production Facility</h2>
		    				<p className="text-gray-500 text-lg mt-8">Our state-of-the-art 80,000+ sq. ft. production facility is fully equipped for in-house design, fabrication, printing, carpentry, and finishing.</p>
		    			</div>
		    			<div className="grid grid-cols-12 gap-2">
							<div className="grid col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl"><Image src="/images/custom-exhibition-stand-builder.webp" width={600} height={400} alt="" className="w-full h-auto rounded-xl"/></div>
							<div className="grid col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl"><Image src="/images/custom-exhibition-stand-builders.webp" width={600} height={400} alt="" className="w-full h-auto rounded-xl"/></div>
							<div className="grid col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl"><Image src="/images/custom-exhibition-stand-design.webp" width={600} height={400} alt="" className="w-full h-auto rounded-xl"/></div>
							<div className="grid col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl"><Image src="/images/custom-trade-show-booth-manufacturer.webp" width={600} height={400} alt="" className="w-full h-auto rounded-xl"/></div>
							<div className="grid col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl"><Image src="/images/custom-trade-show-booth-manufacturers.webp" width={600} height={400} alt="" className="w-full h-auto rounded-xl"/></div>
							<div className="grid col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl"><Image src="/images/custom-trade-show-display.webp" width={600} height={400} alt="" className="w-full h-auto rounded-xl"/></div>
							<div className="grid col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl"><Image src="/images/custom-trade-show-displays.webp" width={600} height={400} alt="" className="w-full h-auto rounded-xl"/></div>
							<div className="grid col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl"><Image src="/images/trade-booth-rental.webp" width={600} height={400} alt="" className="w-full h-auto rounded-xl"/></div>
							<div className="grid col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl"><Image src="/images/custom-trade-show-booth-manufacturer.webp" width={600} height={400} alt="" className="w-full h-auto rounded-xl"/></div>
						</div>
		    		</div>
		    	</div>
		    </section>
		    
		    
		    <div className="ctaction bg-[#E9EEF7] py-6">
		        <div className="container mx-auto px-4">
		          <div className="text-gray-700 rounded-xl max-w-5xl mx-auto py-16">
		              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
		                <div>
		                  <h2 className="text-5xl md:text-5xl font-semibold mb-3 font-heading">
		                    Ready to plan your next show?
		                  </h2>
		                  <p className="text-lg text-gray-500">
		                    Tell us your goals — we’ll recommend the ideal booth solution.
		                  </p>
		                </div>
		                <div className="flex flex-col sm:flex-row gap-3 shrink-0 text-center">
		                  <Link href="https://wa.me/17029340798" target="_blank" rel="noopener noreferrer" className="px-5 py-4 rounded-md text-white text-l font-medium hover:opacity-90 transition flex items-center justify-center gap-2" style={{ backgroundColor: '#0CC143' }}>
		                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
		                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
		                    </svg>
		                    <span>WhatsApp</span>
		                  </Link>
		                  <Link href="/contact-us/" className="px-5 py-4 rounded-md bg-custom text-white text-l font-medium hover:bg-red-600 transition">
		                    Get a Quote
		                  </Link>
		                </div>
		              </div>
		          </div>
		        </div>
		    </div>
		</>
		);
}