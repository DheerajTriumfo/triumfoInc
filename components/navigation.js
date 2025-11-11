import Link from "next/link";
import Image from "next/image";
import NavigationClient from './NavigationClient';

export default function Navigation()
{
	return(
		<>
			<div className="topheader">
				<div className="container mx-auto px-4">
					<div className="innerheader">
						<div className="logo"><Link href="/"><Image src="/images/logo.webp" width={135} height={71} alt="" loading="eager" /></Link></div>
						<div className="flex items-center gap-x-4 mr-12 lg:mr-0">
							<Link href="" className="flex text-white text-l items-center gap-x-1 hidden md:flex"><Image src="/images/mailicon.webp" width={36} height={17} alt="" /> enquiry@triumfo.us</Link>
							<div><Link href="/get-booth-quotation/" className="px-6 py-3 bg-[#A02C1C] rounded-xl border-2 border-[#A02C1C] text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300">Get A Quote</Link></div>
						</div>
					</div>
				</div>
			</div>
			<nav>
		        <div className="container mx-auto px-4">
		        	<div className="mobile_btn"><span></span></div>
		            <div className="flex items-center justify-center gap-x-4">
		                <div className="main_menu">
		                	
			                <ul>
			                    <li><Link href="/">HOME</Link></li>
			                    <li><Link href="/about-us/">ABOUT US</Link></li>
			                    <li><Link href="/trade-show-booth-display-rentals/">EXHIBIT RENTAL</Link></li>
			                    <li><Link href="/services/">FULL SERVICES</Link></li>
			                    <li><Link href="/portfolio/">OUR WORK</Link></li>
			                    <li><Link href="/contact-us/">CONTACT US</Link></li>
			                </ul>
		                </div>
		            </div>
		        </div>
		    </nav>
		    <NavigationClient/>
		</>
	);
}