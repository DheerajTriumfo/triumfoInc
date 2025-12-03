import Link from "next/link";
import Image from "next/image";
import parse, { domToReact } from 'html-react-parser';

const fallbackBase = 'https://triumfous.mobel.us/api';
const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || fallbackBase;



export default async function Casestudy(){
	const res = await fetch(`${apiBase}/casestudydata`, { cache: 'no-store', });

	if (!res.ok) return notFound();
	const data = await res.json();
	if (!data?.data?.length) return notFound();
	const boothdata = data.data;
	return(
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-4">Trade Show Booth Case Studies</h1>
								<p className="text-white text-lg">Explore our collection of trade show booth case studies showcasing custom exhibits, modular rentals, island displays, and turnkey booth builds delivered for global brands. Each case study highlights our design approach, fabrication quality, installation expertise, and overall project success.</p>
								<div className="mt-8"><Link href="/contact-us/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Get Free Quote</Link></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
	        	<div className="contentbg py-20">
	        		<div className="container mx-auto px-4">
		        		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{boothdata.map((item, index) => (
							<a href={item.url}>
					        <div key={index} className="video-card rounded-xl">
					            <div className="video-thumb shadow-lg bg-black rounded-xl relative">
					                <div className="thumb-wrapper rounded-xl">
					                    <Image 
					                        src={item.bannerimage ? `https://triumfous.mobel.us/uploads/casestudy/${item.bannerimage}` : "/images/no-image.png"} 
					                        width="768" 
					                        height="531" 
					                        className="w-full h-auto rounded-xl"
					                        alt={item.alttag}
					                    />
					                </div>

					                <div className="absolute bottom-4 left-4 z-20">
					                    <span className="rounded-md font-semibold py-1 px-2 text-sm bg-[#9A3220] text-white px-4 py-2">
					                        {item.boothsize}
					                    </span>
					                </div>
					            </div>

					            <div className="card-info pt-4 pb-2 text-center border-b border-gray-300 rounded-xl">
					                <h4 className="text-gray-700 font-semibold text-3xl">{item.title}</h4>
					                <div className="flex items-center pt-2 justify-center">
					                    <span className="text-sm text-gray-500">{item.fairname}</span>
					                </div>
					            </div>
					        </div>
					        </a>
					    ))}
			            </div>
			        </div>
	        	</div>
	        </section>
		</>
	);
}