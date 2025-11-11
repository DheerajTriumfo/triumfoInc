import Link from 'next/link';
import OwlInit from '../../../components/OwlInit';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';
export const revalidate = 300;

function stripHtml(html) {
	if (!html) return '';
	return String(html).replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

export default async function CityDetail(props) {
	const params = await props.params;
	const slug = params?.slug;
	let city = null;
	let portfolios = [];
	try {
		const res = await fetch(`${apiBase}/cities/city/${encodeURIComponent(slug)}`, { next: { revalidate } });
		if (res.ok) {
			const json = await res.json();
			city = json?.data || null;
			console.log(city);
		}
	} catch {}

	try {
		const pres = await fetch(`${apiBase}/portfolios`, { next: { revalidate } });
		if (pres.ok) {
			const pjson = await pres.json();
			portfolios = Array.isArray(pjson?.data) ? pjson.data : [];
		}
	} catch {}

	const title = city?.toptitle || `${city?.display_name || 'City'} Trade Show Booths`;
	const subtitle = stripHtml(city?.topdesc) || 'Explore our impressive range of visually-stunning trade show displays to find the perfect one for your next event.';
	const aboutTitle = city?.whychoosetitle || `Some words about ${city?.display_name || 'the city'}`;
	const aboutDesc = stripHtml(city?.whychoosedesc) || 'For 25 years, Triumfo Inc. is offering comprehensive solutions from creative booth designing and robust booth building to stress-free delivery and dismantling of trade show booths and rentals.';

	return (
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-4">{title}</h1>
								<p className="text-white text-lg">{subtitle}</p>
								<div className="mt-8"><Link href="/get-booth-quotation/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">Get Free Quote</Link></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="rentalbg  relative bg-[#E7EEF7] py-16">
					<div className="container mx-auto px-4">
						<div className="owl-carousel owl-theme" id="rental">
							{['10x20','10x30','20x20','20x30','20x40'].map((size) => (
								<div className="column relative" key={size}>
									<div className="figure relative block"><img src={`/images/${size.replace('x','x')}.webp`} width="358" height="443" alt=""/></div>
									<div className="colloverlay block [background-image:linear-gradient(180deg,rgba(32,32,32,0)_75%,#0f0f0f_96%)] absolute w-full h-full top-0 left-0">
										<div className="absolute text-center bottom-[40px] left-1/2 -translate-x-1/2 inline-block">
											<a href="#">
												<div className="captitile text-white font-semibold text-4xl">{size}</div>
												<div className="eyeebrow text-white text-sm">Explore Booth Designs</div>
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="w-full py-3"></div>
						<div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
							<Link href="/portfolio/" className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-custom rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:border-gray-500 hover:text-white transition duration-300">View Portfolio</Link>
							<Link href="/portfolio/" className="w-full sm:w-auto px-6 py-3 border-2 bg-white border-white rounded-xl text-black text-center hover:bg-custom hover:text-white hover:border-custom transition duration-300">View Recent Work</Link>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="contentbg py-36">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-24 items-center">
							<div className="mb-8 m:mb-0">
								<div className="figure"><img src="/images/brign-design.webp" alt="" className="w-full h-auto rounded-xl"/></div>
							</div>
							<div className="contents self-center">
								<div>
									<h2 className="maintitle text-gray-700 mb-4">Custom Exhibits Built for Your Brand</h2>
									<p className="text-xl text-gray-500 leading-relaxed">Design your booth from the ground up — tailored layouts, finishes, and experiences for maximum impact at every show. Design your booth from the ground up — tailored layouts, finishes, and experiences for maximum impact at every show.</p>
									<div className="flex flex-col sm:flex-row gap-4 mt-12">
										<Link href="/services/" className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-white rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:text-white transition duration-300">Explore Services</Link>
										<Link href="/portfolio/" className="w-full sm:w-auto px-6 py-3 border-2 border-custom rounded-xl text-black text-center hover:bg-custom hover:text-white transition duration-300">View Recent Work</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="clientsection py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-2xl text-center mx-auto">
							<h2 className="maintitle text-gray-700">{aboutTitle}</h2>
							<p className="text-gray-500 text-lg mt-8">{aboutDesc}</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="homeportfolio bg-[#34343C] py-20">
					<div className="container mx-auto px-4 text-center text-white pb-20">
						<h2 className="maintitle">Our Portfolio</h2>
						<div className="max-w-3xl mx-auto mt-4">
							<p className="text-xl text-white leading-relaxed">Tell us what your brand stands for, and we’ll turn it into a booth that commands attention. Receive 3 free custom exhibit design options from Triumfo’s expert design team — made exclusively around your brand message and show requirements.</p>
						</div>
					</div>
					<div className="px-4 sm:px-2 py-2">
						<div className="grid grid-cols-12 gap-2">
							{(portfolios.slice(0,6)).map((p) => (
								<div key={p.id} className="group grid col-span-6 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
									<a href={p.image_url || `/images/pt1.webp`} className="block">
										<img src={p.image_url || `/images/pt1.webp`} alt={p.alttag || ''} className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"/>
										<div className="absolute top-0 left-0 w-full h-full bg-[rgba(57,65,81,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
											<div className="flex items-center justify-center w-full h-full text-center">
												<h2 className="text-white font-semibold text-4xl mb-4">{p.alttag || 'Portfolio'}</h2>
											</div>
										</div>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="bgtradelogo pt-20 pb-32 bg-[#E7EEF7]">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="maintitle text-gray-700 mb-6 max-w-2xl mx-auto">Exhibit Rental Solutions That Work</h2>
							<p className="text-xl text-gray-500">Design your booth from the ground up — tailored layouts, finishes, and experiences for maximum impact at every show.</p>
						</div>
						<div className="relative mt-12">
							<div className="owl-carousel owl-theme" id="topRow">
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd1.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd2.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd3.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd4.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd5.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd6.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd7.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd8.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd9.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd10.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd11.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd12.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd13.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd14.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd15.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
							</div>
							<div className="owl-carousel owl-theme mt-6" id="bottomRow">
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd11.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd12.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd13.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd14.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd15.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd1.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd2.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd3.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd4.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd5.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd6.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd7.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd8.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd9.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
								<div className="item border border-gray-200">
									<a href=""><img src="/images/trd10.webp" width="225" height="225" alt="" className="w-full h-auto"/></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<OwlInit />
		</>
	);
}
