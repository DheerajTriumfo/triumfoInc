import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import OwlInit from '../../components/OwlInit';
import BoothDesignCard from '../components/BoothDesignCard';
import BoothGrid from './BoothGrid';
const fallbackBase = 'https://triumfous.mobel.us/api';
const baseUrl = 'http://192.168.0.180:8020';
const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || fallbackBase;

function stripHtml(html) {
	if (!html) return '';
	return String(html).replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}


function extractHeadingAndBody(html) {
	if (!html) {
		return { heading: '', body: '' };
	}
	const headingMatch = html.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/i);
	if (!headingMatch) {
		return { heading: '', body: html };
	}
	const headingHtml = headingMatch[0];
	const headingText = stripHtml(headingHtml);
	const bodyHtml = html.replace(headingHtml, '').trim();
	return { heading: headingText, body: bodyHtml };
}

function appendClass(attribs = {}, classes = '') {
	const existing = attribs.class ? attribs.class.split(/\s+/).filter(Boolean) : [];
	const additions = classes.split(/\s+/).filter(Boolean);
	const merged = [...existing];
	for (const cls of additions) {
		if (!merged.includes(cls)) {
			merged.push(cls);
		}
	}
	attribs.class = merged.join(' ');
	return attribs;
}

function formatRichText(html, { variant = 'default' } = {}) {
	if (!html) return null;
	const isLight = variant === 'light';
	return parse(html, {
		replace: (domNode) => {
			if (!domNode || domNode.type !== 'tag') return;
			const attribs = domNode.attribs || {};
			switch (domNode.name) {
				case 'p':
					appendClass(attribs, `${isLight ? 'text-white' : 'text-gray-500'} ${isLight ? 'text-base' : 'text-lg'} leading-relaxed mt-4`);
					break;
				case 'h1':
				case 'h2':
				case 'h3':
				case 'h4':
				case 'h5':
				case 'h6':
					appendClass(attribs, `${isLight ? 'text-white' : 'text-gray-700'} font-semibold mt-6`);
					break;
				case 'ul':
					appendClass(attribs, 'list-disc pl-6 text-gray-500 text-lg leading-relaxed space-y-2');
					break;
				case 'ol':
					appendClass(attribs, 'list-decimal pl-6 text-gray-500 text-lg leading-relaxed space-y-2');
					break;
				case 'li':
					appendClass(attribs, 'mt-2');
					break;
				case 'a':
					appendClass(attribs, `${isLight ? 'text-white underline' : 'text-blue-600 hover:text-blue-800 underline'} transition-colors duration-200`);
					break;
				default:
					break;
			}
			domNode.attribs = attribs;
			return domNode;
		},
	});
}





export default async function Getlocation(props)
{
	const params = await props.params;
	const slug = params?.slug;
	if (!slug || typeof slug !== 'string') return notFound();
	
	let pageData = null;
	let pageType = null;
	
	// First, try the catch-all endpoint to determine page type
	try {
		const res = await fetch(`${apiBase}/${encodeURIComponent(slug)}`, {
			cache: 'no-store',
		});
		if (res.ok) {
			const json = await res.json();
			pageType = json?.type;
			pageData = json?.data || null;
		}
	} catch (e) {
		// swallow; fallback logic below
	}

	if (!pageData) {
		const rentalurl = slug.replace('-trade-show-booth', '');
		try {
			const res = await fetch(`${apiBase}/rental/booth-size/${encodeURIComponent(rentalurl)}`, {
				cache: 'no-store',
			});
			if (res.ok) {
				const json = await res.json();
				pageData = json?.data || null;
				pageType = json?.type || 'menu';
			}
		} catch (e2) {
			// ignore; handled below
		}
	}

	if (!pageData) {
		return notFound();
	}
	
	// Handle city pages (including Europe exhibition stands and America cities)
	if ((pageType === 'city' || pageType === 'Europe' || pageType === 'America') && pageData) { 
		console.log(pageData);
		let portfolios = [];
		try {
			const pres = await fetch(`${apiBase}/portfolios`, { cache: 'no-store' });
			if (pres.ok) {
				const pjson = await pres.json();
				portfolios = Array.isArray(pjson?.data) ? pjson.data : [];
			}
		} catch {}
		
		const title = pageData?.toptitle || `${pageData?.display_name || 'City'} Trade Show Booths`;
		const subtitle = stripHtml(pageData?.topdesc) || 'Explore our impressive range of visually-stunning trade show displays to find the perfect one for your next event.';
		const aboutTitle = pageData?.whychoosetitle || `Some words about ${pageData?.display_name || 'the city'}`;
		const aboutDesc = stripHtml(pageData?.whychoosedesc) || 'For 25 years, Triumfo Inc. is offering comprehensive solutions from creative booth designing and robust booth building to stress-free delivery and dismantling of trade show booths and rentals.';
		
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
												<a href={`/${size.toLowerCase()}-trade-show-booth/`}>
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
							<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-24 items-stretch">
								<div className="mb-8 lg:mb-0">
									<div className="figure h-full"><img src={pageData?.citybanner ? `${baseUrl}/uploads/majorcity/${pageData.citybanner}` : `/images/brign-design.webp`} alt="" className="w-full h-full object-cover rounded-xl"/></div>
								</div>
								<div className="contents flex flex-col">
									<div className="flex-grow">
										<h2 className="maintitle text-gray-700 mb-4">{aboutTitle}</h2>
										<p className="text-xl text-gray-500 leading-relaxed">{aboutDesc}</p>
									</div>
									<div className="flex flex-col sm:flex-row gap-4 mt-12">
										<Link href="/services/" className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-white rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:text-white transition duration-300">Explore Services</Link>
										<Link href="/portfolio/" className="w-full sm:w-auto px-6 py-3 border-2 border-custom rounded-xl text-black text-center hover:bg-custom hover:text-white transition duration-300">View Recent Work</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			
				<section>
					<div className="homeportfolio bg-[#34343C] py-20">
						<div className="container mx-auto px-4 text-center text-white pb-20">
							<h2 className="maintitle">Our Portfolio</h2>
							<div className="max-w-3xl mx-auto mt-4">
								<p className="text-xl text-white leading-relaxed">Tell us what your brand stands for, and we'll turn it into a booth that commands attention. Receive 3 free custom exhibit design options from Triumfo's expert design team — made exclusively around your brand message and show requirements.</p>
							</div>
						</div>
						<div className="px-4 sm:px-2 py-2">
							<div className="grid grid-cols-12 gap-2">
								{(portfolios.slice(0,6)).map((p) => (
									<div key={p.id} className="group grid col-span-6 sm:col-span-6 lg:col-span-4 relative overflow-hidden">
										<a href={p.image_url || `/images/pt1.webp`} data-fancybox="portfolio" className="block">
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
							<div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
								<Link href="/portfolio/" className="w-full sm:w-auto px-6 py-3 bg-custom border-2 border-custom rounded-xl text-xl text-white text-center hover:bg-gray-500 hover:border-gray-500 hover:text-white transition duration-300">
									View Portfolio
								</Link>
								<Link href="/portfolio/" className="w-full sm:w-auto px-6 py-3 border-2 bg-white border-white rounded-xl text-black text-center hover:bg-custom hover:text-white hover:border-custom transition duration-300">
									View Recent Work
								</Link>
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
										<img src="/images/trd1.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd2.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd3.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd4.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd5.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd6.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd7.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd8.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd9.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd10.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd11.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd12.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd13.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd14.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd15.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
								</div>
								<div className="owl-carousel owl-theme mt-6" id="bottomRow">
									<div className="item border border-gray-200">
										<img src="/images/trd11.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd12.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd13.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd14.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd15.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd1.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd2.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd3.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd4.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd5.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd6.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd7.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd8.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd9.webp" width="225" height="225" alt="" className="w-full h-auto"/>
									</div>
									<div className="item border border-gray-200">
										<img src="/images/trd10.webp" width="225" height="225" alt="" className="w-full h-auto"/>
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
        <h2 className="maintitle text-gray-700">
          Some words about the {`${pageData?.display_name || 'the city'}`} City
        </h2>
        <p className="text-gray-500 text-lg mt-8">
          For 25 years, Triumfo Inc. is offering comprehensive solutions from
          creative booth designing and robust booth building to stress-free
          delivery and dismantling of trade show booths and rentals.
        </p>
      </div>
      <div className="grid grid-cols-1 text-left">
        <div>
          <div className="bg-[#E7EEF7] p-8 rounded-md my-8">
            <h3 className="text-gray-700 text-3xl font-semibold mb-4">
              Our Exhibition Stand Work
            </h3>
            <p className="text-gray-500 text-lg mb-4">
              Triumfo Inc. has its corporate office and its manufacturing unit
              in Las Vegas which is spread across 70,000 sq. ft. including a
              65,000 sq. ft. warehouse and a production unit.
            </p>
            <p className="text-gray-500 text-lg mb-4">
              For 25 years, Triumfo Inc. is offering comprehensive solutions
              from creative booth designing and robust booth building to
              stress-free delivery and dismantling of trade show booths and
              rentals. Explore our impressive range of visually-stunning 10x20
              trade show displays to find the perfect one for your next event.
            </p>
            <p className="text-gray-500 text-lg mb-4">
              Triumfo Inc. offers an impressive range of trade show booth
              rentals in Atlanta. Browse our collection to select the best
              design by size according to your brand and trade show needs.
            </p>
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
	
	// Handle booth rental pages - moved outside if block
	if (!pageType || (pageType !== 'city' && pageType !== 'Europe' && pageType !== 'America')) {
		const rentalData = Array.isArray(pageData)
			? pageData
			: (Array.isArray(pageData?.rental_data) ? pageData.rental_data : []);
		const pageMeta = Array.isArray(pageData?.page_data) && pageData.page_data.length > 0 ? pageData.page_data[0] : {};
	const rentalurl = slug.replace('-trade-show-booth', '');

	const headingTitle = pageMeta?.meta_title || `${rentalurl.toUpperCase()} Trade Show Booth Built to Make an Impact`;
	const headingDesc = pageMeta?.meta_description || 'Explore our impressive range of visually-stunning trade show displays to find the perfect one for your next event.';
	const heroTitle = pageMeta?.banner_title || headingTitle;
	const heroDescriptionHtml = pageMeta?.banner_shrtdesc || '';
	const heroDescriptionContent = heroDescriptionHtml ? formatRichText(heroDescriptionHtml, { variant: 'light' }) : null;
	const { heading: dynamicSectionHeading, body: dynamicSectionBodyHtml } = extractHeadingAndBody(pageMeta?.p_description || '');
	const sectionHeading = dynamicSectionHeading || `Custom ${rentalurl.toUpperCase()} Trade Show Booth Designs for a Powerful Presence`;
	const sectionBodyContent = dynamicSectionBodyHtml ? formatRichText(dynamicSectionBodyHtml) : null;
	const is10x10 = slug === '10x10-trade-show-booth';
	
	// If no data, 404
	if (!pageData) return notFound();

	return(
		<>
			<section>
    		<div className="bannerbg bg-[#34343C] py-20">
    			<div className="container mx-auto px-4">
    				<div className="max-w-3xl mx-auto">
						<div className="text-center">
							<h1 className="text-white font-semibold text-7xl mb-6">{heroTitle}</h1>
							{heroDescriptionContent ? (
								<div className="flex flex-col items-center gap-2 text-white">
									{heroDescriptionContent}
								</div>
							) : (
								<p className="text-white font-normal text-base">{headingDesc}</p>
							)}
							<div className="mt-8"><Link href={is10x10 ? "/get-free-3d-design/" : "/get-booth-quotation/"} className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white  hover:text-white transition duration-300 text-xl">{is10x10 ? 'Claim Your Free Design' : 'Get a Quote'}</Link></div>

    					</div>
    				</div>
    			</div>
    		</div>
    	</section>
			<section>
  <BoothGrid booths={rentalData} apiBase={apiBase} parentSlug={slug} />
</section>
	    	<section>
	    		<div className="ctaction bg-[#E7EEF7] py-10 ">
					<div className="container mx-auto px-4">
						<div className="bg-gray-900 text-white rounded-xl p-6 md:p-10 mx-4 md:mx-auto max-w-7xl my-10">
		  					<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
						    <div>
						      <h2 className="text-xl md:text-4xl font-semibold mb-3 barlofamilty">
						        Looking for something different?
						      </h2>
						      <p className="text-sm md:text-base text-gray-300">
						        Contact us for a complimentary custom 3D stand design
						      </p>
						    </div>
						    <div className="flex flex-col sm:flex-row gap-3 shrink-0 text-center">
						      <a href="/schedule-a-call/" className="px-5 py-4 rounded-md bg-white text-gray-900 text-l font-medium hover:bg-gray-100 transition">
						        Schedule a Call
						      </a>
						      <a href="/get-free-3d-design/" className="px-5 py-4 rounded-md bg-custom text-white text-l font-medium hover:bg-red-600 transition">
						        Request for a Design
						      </a>
						    </div>
		  					</div>
						</div>
					</div>
				</div>
	    	</section>
	    	<section>
a 	    	<div className="clientsection py-20">
	    		<div className="container mx-auto px-4">
	    			<div className="max-w-4xl mx-auto">
	    				<h2 className="maintitle text-gray-700 text-center">{sectionHeading}</h2>
	    				{sectionBodyContent ? (
	    					<div className="mt-8 flex flex-col gap-2 text-left">
	    						{sectionBodyContent}
	    					</div>
	    				) : (
	    					<p className="text-gray-500 text-lg mt-8 text-center">For 25 years, Triumfo Inc. is offering comprehensive solutions from creative booth designing and robust booth building to stress-free delivery and dismantling of trade show booths and rentals.</p>
	    				)}
	    			</div>
	    		</div>
	    	</div>
	    	</section>
			</>
		);
	}
}