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
		    					<div className="mt-8"><a href="/get-booth-quotation" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Get Free Quote</a></div>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </section>
		    <section>
		    	<div className="servcbg py-12">
			    	<div className="container mx-auto px-4">
			    		<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv1.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">3D Design and Concept</div>
			    				<p className="text-gray-500 text-lg">We have a team of experienced and skillful designers that can easily comprehend your requirements and develop a 3D Design of your trade show booth as per your specifications.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv2.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Booth Production</div>
			    				<p className="text-gray-500 text-lg">We have an in-house manufacturing unit equipped with the latest and state-of-the-art equipment to carry out all the processes of your trade show booth production with ease.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv3.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Graphic Design & Printing</div>
			    				<p className="text-gray-500 text-lg">Our in-house graphic production unit and our team of proficient graphic designers can provide you with innovative and stunning custom graphics to enhance the look of your trade show booth.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv4.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Transportation & Logistics</div>
			    				<p className="text-gray-500 text-lg">Our Logistics Department resolves the stress of shipping your trade show booth and deliver it safely to the venue of your event from our manufacturing unit at your preferred time.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv5.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Installation & Dismantling</div>
			    				<p className="text-gray-500 text-lg">We own a team of expert mechanics that will swiftly handle the complexities related to the installation and dismantling of your trade show booth at the venue of the event.</p>
			    			</div>
			    			<div className="bg-[#E8EEF7] px-8 py-6 md:py-12 lg:py-20 rounded-md border border-gray-300 text-center">
			    				<h3 className="icon w-[75px] h-[75px] mx-auto"><Image src="/images/srv6.webp" width={75} height={75} alt="" className="w-full h-auto"/></h3>
			    				<div className="title text-gray-800 font-bold leading-tight my-2 text-2xl">Project Management</div>
			    				<p className="text-gray-500 text-lg">We offer comprehensive project management services including on-site supervision by our professionals to tackle any emergencies on the floor and ensure a smooth exhibiting experience for you.</p>
			    			</div>
			    		</div>
			    	</div>
			    </div>
		    </section>
		</>
		);
}