import { notFound } from 'next/navigation';
import Link from 'next/link';
import GetImageCarousel from './ImageCarousel.js';
//import parse from 'html-react-parser';
import parse, { domToReact } from 'html-react-parser';
import { buildMetadata } from '../../../lib/seo';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

export const revalidate = 60;

function stripHtml(html) {
	if (!html || typeof html !== 'string') return '';
	return html
		.replace(/<[^>]*>/g, ' ')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/\s+/g, ' ')
		.trim();
}
export async function generateMetadata({ params }) {
  params = await params;
  const slug = params.slug;

  try {
    const res = await fetch(`${apiBase}/upcoming-trade-shows/${encodeURIComponent(slug)}`);
    if (!res.ok) throw new Error("Failed to fetch metadata");

    const data = await res.json();
    const tradeshow = data?.data;
    const title = tradeshow?.meta_title || 'Trade Show Detail';
    const description =
      tradeshow?.meta_desc?.replace(/<[^>]*>/g, '').slice(0, 150) || 'Trade show details';
    const heroImage = tradeshow?.bannerimage
      ? `https://triumfous.mobel.us/api/images/uploads/tradeshow/${tradeshow.bannerimage}`
      : "https://www.triumfo.us/images/tradeshow-detail1.webp";

    return await buildMetadata({
      title,
      description,
      image: heroImage,
      pathname: `/upcoming-trade-show/${slug}/`,
      openGraph: {
        type: "article",
        images: [
          {
            url: heroImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
    });
  } catch (error) {
    return {
      title: 'Trade Show Detail',
      description: 'Unable to load trade show data',
    };
  }
}

export default async function TradeShowDetail(props) {
	const params = await props.params;
	const slug = params?.slug;
	if (!slug || typeof slug !== 'string') return notFound();

	let detail = null;
	let related = [];
	let portfolios = [];
	try {
		const res = await fetch(`${apiBase}/upcoming-trade-shows/${encodeURIComponent(slug)}`, { cache: 'no-store' });
		if (!res.ok) return notFound();
		const json = await res.json();
		detail = json?.data || null;
		related = Array.isArray(json?.related_shows) ? json.related_shows : [];
	} catch {
		return notFound();
	}
	if (!detail) return notFound();

	try {
		const pres = await fetch(`${apiBase}/portfolios`, { cache: 'no-store' });
		if (pres.ok) {
			const pjson = await pres.json();
			console.log(pjson);
			portfolios = Array.isArray(pjson?.data) ? pjson.data : [];
		}
	} catch {}

	const title = detail.tradshow_title || detail.event_name || slug;
	const city = detail.city || '';
	const country = detail.country || '';
	const location = [city, country].filter(Boolean).join(', ');
	const start = detail.start_date ? new Date(detail.start_date).toLocaleDateString() : '';
	const end = detail.end_date ? new Date(detail.end_date).toLocaleDateString() : '';
	const dateText = start ? (end ? `${start} - ${end}` : start) : '';
	const eventLogo = detail.event_logo ? `${apiBase}/images/uploads/tradeshow/${detail.event_logo}` : '/images/iacp-logo.png';
	const descriptionText = stripHtml(detail.description);
	const bottomDescText = stripHtml(detail.bottom_desc);
	const toptitle = stripHtml(detail.tradshow_title);
	const bottomtitle = stripHtml(detail.bottom_title);
	const descritpionwithTailwind = (html) =>
		parse(html || '', {
			replace: (domNode) => {
				if (domNode.name === 'p') {
					domNode.attribs = {
						...(domNode.attribs || {}),
						class: 'mb-4 text-gray-600 text-lg leading-7 text-justify',
					};
				}
				if (domNode.name === 'h2') {
					domNode.attribs = {
						...(domNode.attribs || {}),
						class: 'text-3xl lg:text-5xl font-semibold font-heading text-gray-700 mb-6',
					};
				}
				if (domNode.name === 'ul') {
					domNode.attribs = {
						...(domNode.attribs || {}),
						class: 'list-none space-y-2 mb-4',
					};
				}
				if (domNode.name === 'li') {
				return (
					<li className="flex  gap-2 text-gray-600 font-medium text-lg ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 flex-shrink-0"
							fill="none"
							viewBox="0 0 24 24"
							stroke="#9A3220"
							strokeWidth="3"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
						</svg>
						<span>{domToReact(domNode.children, { replace: () => null })}</span>
					</li>
				);
			}
				if (domNode.name === 'a') {
					domNode.attribs = {
						...(domNode.attribs || {}),
						class: 'text-blue-600  hover:text-blue-800',
						style: 'color: #2563eb;',
					};
				}
				return domNode;
			},
		});
	const bottomdescritpionwithTailwind = (html) =>
		parse(html || '', {
			replace: (domNode) => {
				if (domNode.name === 'p') {
					domNode.attribs = {
						...(domNode.attribs || {}),
						class: 'mb-4 text-gray-500 text-base leading-7 text-justify',
					};
				}
				if (domNode.name === 'a') {
					domNode.attribs = {
						...(domNode.attribs || {}),
						class: 'text-blue-600  hover:text-blue-800',
						style: 'color: #2563eb;',
					};
				}
				return domNode;
			},
		});
	return (
		<>
			<section>
				<div className="bannerbg bg-[#34343C] py-24 border-t border-gray-300">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<div className="text-center">
								<h1 className="text-white font-semibold text-7xl mb-4">{title}</h1>
								{dateText ? (
									<div className="flex items-center justify-center gap-x-2 py-2 text-2xl">
										<i className="fa fa-calendar text-[#de3831] text-2xl"></i>
										<span className="text-white text-xl font-bold">{dateText}</span>
									</div>
								) : null}
								{location ? (
									<div className="flex items-center justify-center gap-x-2 py-1 text-2xl mb-4">
										<i className="fa fa-map-marker text-[#de3831] text-2xl"></i>
										<span className="text-white text-base font-semibold">{location}</span>
									</div>
								) : null}
								{/*<p className="text-white text-lg leading-[1.8rem]">{descriptionText || 'Discover details about this upcoming trade show and plan your participation.'}</p>*/}
							</div>
						</div>
					</div>
				</div>
			</section>
			<GetImageCarousel/>
			<section>
		    	<div className="clientsection py-20">
		    		<div className="container mx-auto px-4">
		    			<h2 className="maintitle text-gray-700 mb-6 border-b border-gray-300 pb-4">{toptitle}</h2>
			    		<div>{descritpionwithTailwind(detail.description)}</div>
			    		<h2 className="text-3xl lg:text-5xl font-semibold font-heading text-gray-700 mb-6">{bottomtitle}</h2>
			    		<div>{descritpionwithTailwind(detail.bottom_desc)}</div>
		    		</div>
		    	</div>
		    </section>
			<section>
				<div className="ctaction bg-[#E7EEF7] py-10">
					<div className="container mx-auto px-4">
						<div className="bg-gray-900 text-white rounded-xl p-6 md:p-10 mx-4 md:mx-auto max-w-7xl my-10">
							<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
								<div>
									<h2 className="text-xl md:text-4xl font-semibold mb-3 barlofamilty">
										Ready to plan your next show?
									</h2>
									<p className="text-sm md:text-base text-gray-300">
										Tell us your goals — we'll recommend the ideal booth solution.
									</p>
								</div>
								<div className="flex flex-col sm:flex-row gap-3 shrink-0 text-center">
									<Link href="https://wa.me/17029340798" target="_blank" rel="noopener noreferrer" className="px-5 py-4 rounded-md text-white text-l font-medium hover:opacity-90 transition flex items-center justify-center gap-2" style={{ backgroundColor: '#0CC143' }}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </Link>
									<Link href="/contact-us/" className="px-5 py-4 rounded-md bg-custom text-white text-l font-medium hover:bg-red-600 transition">
										Get a Quote
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}