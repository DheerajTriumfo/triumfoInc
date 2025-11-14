import Link from "next/link";
import Image from "next/image";

export default function Service()
{
	return(
		<>
			<section>
		    	<div className="bannerbg bg-[#34343C] py-20">
		    		<div className="container mx-auto px-4">
		    			<div className="max-w-3xl mx-auto">
		    				<div className="text-center">
		    					<h1 className="text-white font-semibold text-7xl mb-6">Turnkey Trade Show Booth Services</h1>
		    					<p className="text-white font-normal text-lg">Backed by in-house production and experienced project teams, we manage every stage of your trade show booth—design, build, logistics, and on-site support.</p>
		    					<div className="mt-8"><a href="/contact-us/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Get Free Quote</a></div>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </section>
		    <section>
		    	<div className="servcbg py-12">
			    	<div className="container mx-auto px-4">
			    		<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch justify-center">
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv1.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">3D Design & Concept Development</div>
			    				<p className="text-gray-500 text-lg">Our experienced design team specialises in creating 3D booth concepts according to your booth needs. We have 30+ talented 3D booth designers. They ensure your brand vision is realized through accurate 3D designs before booth fabrication begins.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv2.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Booth Production</div>
			    				<p className="text-gray-500 text-lg">We own a booth fabrication facility that is equipped with the latest machinery. We manage every stage of booth production efficiently in this facility with our 80+ booth builders. These capabilities give us quality control on our booth production process.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv3.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Graphic Design & Printing</div>
			    				<p className="text-gray-500 text-lg">Our graphic production team has 10+ creative graphic design and printing experts. They smartly craft custom visuals to add a unique appeal to your trade show booth. We ensure your brand messaging is clear and visually stunning while being consistent.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv4.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Transportation & Logistics</div>
			    				<p className="text-gray-500 text-lg">Our logistics team handles the complete booth shipping process. We deliver your trade show booth on time and safely to the event venue. You can have a stress-free trade show journey while we manage your booth transportation needs.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv5.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Installation & Dismantling</div>
			    				<p className="text-gray-500 text-lg">Our experienced professionals install and dismantle your trade show booth without any hassle. We have 40+ trained and well-equipped professionals for I&D services. They ensure a smooth and accurate booth setup before the event. Then, they carefully dismantle it after the show. </p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv6.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Project Management</div>
			    				<p className="text-gray-500 text-lg">We provide end-to-end booth project management services. We quickly address any booth issues that arise during the event. Our team pays attention to every detail to deliver you a stress-free exhibiting experience.</p>
			    			</div>
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
	                    {'Let’s Plan Your Next Show'}
	                  </h2>
	                  <p className="text-lg text-gray-500">Share your trade show goals, and we will suggest the finest booth approach according to your budget and booth size. Let’s create a memorable brand experience for your next show.</p>
	                </div>
	                <div className="flex flex-col sm:flex-row gap-3 shrink-0 text-center">
	                  <Link href="tel:+1 775 927 6412" className="px-5 py-4 rounded-md bg-white text-gray-900 text-l font-medium hover:bg-gray-100 transition">
	                    Call Us
	                  </Link>
	                  <Link href={'/contact-us/'} className="px-5 py-4 rounded-md bg-custom text-white text-l font-medium hover:bg-red-600 transition">
	                    {'Get A Quote'}
	                  </Link>
	                </div>
	              </div>
	          </div>
	        </div>
	      </div>
		</>
		);
}