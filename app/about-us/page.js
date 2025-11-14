import Link from "next/link";
import Image from "next/image";


export default function About(){
	return(
		<>
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
		</>
		);
}