import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from './QuoteForm';

const fallbackBase = 'https://triumfous.mobel.us/api';
const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || fallbackBase;

export default  async function Viewboothdetail(props){
	const params = await props.params;
	const slug = params?.slug;
	const productId = params?.productId;
	if (!slug || !productId) return notFound();
	const size = slug.replace('-trade-show-booth', '');

	const res = await fetch(`${apiBase}/rental/booth-size/${encodeURIComponent(size)}/${encodeURIComponent(productId)}`, {
		cache: 'no-store',
	});
	if (!res.ok) return notFound();
	const payload = await res.json();
	const list = Array.isArray(payload?.data?.rental_data) ? payload.data.rental_data : [];
	const images = Array.isArray(payload?.data?.imagedata) ? payload.data.imagedata : [];
	const selected = list.find(r => (r.skucode || '').toLowerCase() === productId.toLowerCase()) || list[0];
	if (!selected) return notFound();

	const title = selected.skucode || 'Trade Show Booth';
	const subtitle = `Booth Size: ${selected.boothsize || size}`;
	const heroCtaHref = '/get-booth-quotation/';
	const imgSrc = selected.thumbnail ? `${apiBase}/images/uploads/rentalexhibition/${selected.thumbnail}` : '/images/10x20-1.jpg';

	return(
		<>
			<section>
				<div className="bannerbg bg-[#E8EEF7] py-5">
					<div className="flex flex-wrap gap-x-1 items-center justify-center"><Link href="/" className="hover:text-[#9A3220]">Home</Link><span className="text-custom">|</span><Link href={`/${size.toLowerCase()}-trade-show-booth`} className="hover:text-[#9A3220]">{size} Trade Show Booth</Link><span className="text-custom">|</span><span className="text-gray-800 font-medium">{title}</span></div>
	    		</div>
	    	</section>
			<section>
				<div className="detailbg py-8">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-12 gap-y-0 lg:gap-y-6 gap-x-8">
							<div className="col-span-12 md:col-span-8 lg:col-span-9">
								<div className="block relative mb-4">
					<div className="owl-carousel owl-theme" id="boothdetailslider">
						{images.slice(1,7).map((im) => (
							<div key={im.id} className="item"><img src={`${apiBase}/images/uploads/multiexhibitrental/${im.rentalimg}`} alt={selected.alttag || title} className="w-full h-auto object-contain rounded-md bg-white"/></div>
						))}
					</div>
								</div>
					<div id="quote-form" className="bg-[#E8EEF7] rounded-xl border border-gray-300 px-4 py-6 mt-3 relative scroll-mt-24">
						<QuoteForm defaultBoothSize={selected.boothsize || size} defaultEventName="" />
					</div>
							</div>
							<div className="col-span-12 md:col-span-4 lg:col-span-3">
					<div className="w-full bg-[#E8EEF7] text-gray-700 mt-6 md:mt-0 p-4 shadow-lg flex flex-col space-y-4 rounded-md sticky top-[10px] z-50 min-h-[20px]">
									<h2 className="text-2xl font-bold tracking-wide mb-2 border-b border-white/70 pb-2">Exhibit Rental</h2>
									<div className="flex flex-col space-y-2">
										{['10x10','10x20','10x30','20x20','20x30','20x40','30x30','30x40','40x40','40x50'].map(sz => (
											<Link key={sz} href={`/${sz.toLowerCase()}-trade-show-booth/`} className="flex items-center space-x-2 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="#943724"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18m-9 5h9" /></svg>
												<span className="text-lg font-medium">{sz} Booth Rental</span>
											</Link>
										))}
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