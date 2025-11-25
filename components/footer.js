'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";


export default function Footer(){
	
	return(
		<>
			<footer>
				<div className="footer">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap items-center justify-center gap-y-6 lg:gap-y-0 gap-x-8 mb-6">
							<Link href="/" className="text-white text-lg font-medium hover:text-red-700">Home</Link>
							<Link href="/about-us/" className="text-white text-lg font-medium hover:text-red-700">About Us</Link>
							<Link href="/trade-show-booth-display-rentals/" className="text-white text-lg font-medium hover:text-red-700">Exhibit Rental</Link>
							<Link href="/services/" className="text-white text-lg font-medium hover:text-red-700">Full Services</Link>
							<Link href="/portfolio/" className="text-white text-lg font-medium hover:text-red-700">Our Work</Link>
							<Link href="/testimonials/" className="text-white text-lg font-medium hover:text-red-700">Testimonials</Link>
							<Link href="/upcoming-trade-show/" className="text-white text-lg font-medium hover:text-red-700">Trade Shows</Link>
							<Link href="/blog/" className="text-white text-lg font-medium hover:text-red-700">Blog</Link>
							
						</div>
						<div className="footerinner">
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
								<div></div>
								<h4 className="text-white font-semibold text-2xl mb-4 border-b border-gray-400 pb-2 text-center">POPULAR BOOTH SIZES</h4>
								<div></div>
							</div>
							
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

								<div>
									<div className="footermenu text-center">
										<ul>
											<li><Link href="/10x20-trade-show-booth/">10×20 Trade Show Booth </Link></li>
											<li><Link href="/10x30-trade-show-booth/">10×30 Trade Show Booth </Link></li>
											<li><Link href="/20x20-trade-show-booth/">20×20 Trade Show Booth </Link></li>
											
											
										</ul>
									</div>
								</div>
								<div>
									<div className="footermenu text-center">
										<ul>
											<li><Link href="/20x30-trade-show-booth/">20×30 Trade Show Booth </Link></li>
											<li><Link href="/20x40-trade-show-booth/">20×40 Trade Show Booth </Link></li>
											<li><Link href="/30x30-trade-show-booth/">30×30 Trade Show Booth </Link></li>
											
										</ul>
									</div>
								</div>
								<div>
									<div className="footermenu text-center">
										<ul>
											<li><Link href="/30x40-trade-show-booth/">30×40 Trade Show Booth </Link></li>
											<li><Link href="/40x40-trade-show-booth/">40×40 Trade Show Booth </Link></li>
											<li><Link href="/40x50-trade-show-booth/">40×50 Trade Show Booth </Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="flex items-center justify-center gap-x-4 pt-8">
								<p className="text-white text-base mb-2 leading-[1.6]">5071 N. Rainbow Blvd, Suite 170, Las Vegas, NV 89130, United States</p>
							</div>
							<div className="flex-col md:flex-row flex items-center justify-center gap-x-4 pt-2">
								<div className="flex items-center flex-wrap gap-x-2 mb-4">
									<i className="fa fa-phone text-[#9A3220]"></i>
									<Link href="tel:+1 775 927 6412" className="text-white text-base hover:text-[#9A3220]">+1 775 927 6412</Link>
								</div>
								<div className="flex items-center flex-wrap gap-x-2 mb-4">
									<i className="fa fa-envelope text-[#9A3220]"></i>
									<Link href="mailto:enquiry@triumfo.us" className="text-white text-base hover:text-[#9A3220]">enquiry@triumfo.us</Link>
								</div>
							</div>
						</div>
						<div className="copyright text-center text-gray-500 text-base my-4">
							© Copyright 2025. <a href="/" className="text-white">Triumfo Inc.</a> All Right Reserved. <Link href="/privacy-policy/" className="text-white">Privacy Policy</Link>
						</div>
						<div className="social flex flex-wrap gap-4 items-center justify-center">
							<a href="https://www.facebook.com/triumfoinc" target="_blank" className="w-[36px] h-[36px] rounded-full border border-gray-400 text-lg  text-white flex items-center justify-center cursor-pointer">
								<i className="fa fa-facebook"></i>
							</a>
							<a href="https://www.twitter.com/triumfoinc" target="_blank" className="w-[36px] h-[36px] rounded-full border border-gray-400 text-lg  text-white flex items-center justify-center cursor-pointer">
								<i className="fa-brands fa-x-twitter"></i>
							</a>
							<a href="https://www.youtube.com/channel/UCJyqDSj6grpkbWbnGYWciNw" target="_blank" className="w-[36px] h-[36px] rounded-full border border-gray-400 text-lg  text-white flex items-center justify-center cursor-pointer">
								<i className="fa fa-youtube"></i>
							</a>
							<a href="https://www.linkedin.com/company/triumfoinc" target="_blank" className="w-[36px] h-[36px] rounded-full border border-gray-400 text-lg  text-white flex items-center justify-center cursor-pointer">
								<i className="fa fa-linkedin"></i>
							</a>
							<a href="https://www.pinterest.com/triumfoinc" target="_blank" className="w-[36px] h-[36px] rounded-full border border-gray-400 text-lg  text-white flex items-center justify-center cursor-pointer">
								<i className="fa fa-pinterest"></i>
							</a>
						</div>
					</div>
				</div>
			</footer>
			
		</>
		);
}