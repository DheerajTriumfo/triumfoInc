import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactUs(){
	return(
		<>
			<section>
		    	<div className="bannerbg bg-[#34343C] py-20">
		    		<div className="container mx-auto px-4">
		    			<div className="max-w-3xl mx-auto">
		    				<div className="text-center">
		    					<h1 className="text-white font-semibold text-7xl mb-6">Contact Us</h1>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </section>
		    <section>
		    	<div className="rentallistbg py-10">
		    		<div className="container mx-auto px-4">
		    			<div className="grid grid-cols-12 gap-x-0 md:gap-x-12 lg:gap-x-8 items-center">
								<div className="col-span-12 lg:col-span-8 order-1 lg:order-2">
		    					<div className="bg-gray-100 rounded-[24px] border border-gray-300 my-8 px-4 lg:px-8 py-12">
		    						<ContactForm />
		    					</div>
		    				</div>
		    				<div className="col-span-12 lg:col-span-4 order-2 lg:order-1">
		    					<div className="bg-[#E9EEF7] p-4 rounded-xl text-gray-700 mb-2">
		    			    		<h3 className=" font-semibold text-4xl mb-4 text-gray-700">America</h3>
		    			    		<div className="flex gap-x-4 mb-2">
		    			    			<Image src="/images/addressmarker3.webp" width={20} height={20} alt="" className="w-[20px] h-[20px]"/>
		    			    			5071 N. Rainbow Blvd, Suite 170, Las Vegas, NV 89130, United States
		    			    		</div>
		    			    		<div className="flex gap-x-4 mb-2 items-center">
		    			    			<i className="fa fa-phone text-gray-700 text-xl w-5"></i>
		    			    			<Link href="tel:+17029920440" className="font-semibold">+1 702 992 0440</Link>
		    			    		</div>
		    			    		<div className="flex gap-x-4 mb-2 items-center">
		    			    			<i className="fa-brands fa-whatsapp text-gray-700 text-xl w-5"></i>
		    			    			<Link target="_blank" rel="noopener noreferrer" href="https://wa.me/17029340798" className="font-semibold">+1 702 9340798</Link>
		    			    		</div>
		    			    		<div className="flex items-center gap-x-4">
		    			    			<Image src="/images/emailn.png" width={20} height={20} alt="" className="w-[20px] h-[20px]"/>
		    			    			<Link href="mailto:enquiry@triumfo.us" className="font-semibold">enquiry@triumfo.us</Link>
		    			    		</div>
		    					</div>
		    					<div className="bg-[#E9EEF7] p-6 rounded-xl text-gray-700 mb-2">
		    						<h3 className=" font-semibold text-4xl mb-4 text-gray-700">Europe</h3>
		    						<div className="flex gap-x-4 mb-2">
		    							<Image src="/images/addressmarker3.webp" width={20} height={20} alt="" className="w-[20px] h-[20px]"/>
		    							Zum See 7 14542 Werder (Havel), Germany
		    						</div>
		    						<div className="flex gap-x-4 mb-2">
		    							<Image src="/images/tele.png" width={20} height={20} alt="" className="w-[20px] h-[20px]"/>
		    							<Link href="tel:+49 33 2774 99-100" className="text-gray-700 font-semibold">+49 (0) 33 2774 99-100</Link>
		    						</div>
		    						<div className="flex gap-x-4">
		    							<Image src="/images/emailn.png" width={20} height={20} alt="" className="w-[20px] h-[20px]"/>
		    							<Link href="mailto:enquiry@triumfo.de" className="font-semibold">enquiry@triumfo.de</Link>
		    						</div>
		    					</div>
		    					<div className="bg-[#E9EEF7] p-6 rounded-xl text-gray-700">
		    						<h3 className=" font-semibold text-4xl mb-4 text-cgray-700">Middle East</h3>
		    						<div className="flex gap-x-4 mb-2">
		    							<Image src="/images/addressmarker3.webp" width={20} height={20} alt="" className="w-[20px] h-[20px]"/>
		    							Office 201, Sheikha MHRA 2, Al Quesais 2, Dubai, United Arab Amirates
		    						</div>
		    						<div className="flex gap-x-4 mb-2">
		    							<Image src="/images/tele.png" width={20} height={20} alt="" className="w-[20px] h-[20px]"/>
		    							<Link href="tel:+971 588 040731" className="font-semibold">+971 (588) - 040731</Link>
		    						</div>
		    						<div className="flex gap-x-4">
		    							<Image src="/images/emailn.png" width={20} height={20} alt="" className="w-[20px] h-[20px]"/>
		    							<Link href="mailto:enquiry@triumfo.ae" className="font-semibold">enquiry@triumfo.ae</Link>
		    						</div>
		    					</div>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </section>
		</>
		);
}