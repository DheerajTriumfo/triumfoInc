import { notFound } from 'next/navigation';
import Link from 'next/link';
import GetImageCarousel from './ImageCarousel.js';
//import parse from 'html-react-parser';
import parse, { domToReact } from 'html-react-parser';

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

    return {
      title: tradeshow?.meta_title || 'Trade Show Detail',
      description: tradeshow?.meta_desc?.replace(/<[^>]*>/g, '').slice(0, 150) || 'Trade show details',
      alternates: {
          canonical: `https://www.triumfo.us/upcoming-trade-show/${slug}/`,
      },
    };
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
									<Link href="/schedule-a-call/" className="px-5 py-4 rounded-md bg-white text-gray-900 text-l font-medium hover:bg-gray-100 transition">
										Schedule a Call
									</Link>
									<Link href="/get-booth-quotation/" className="px-5 py-4 rounded-md bg-custom text-white text-l font-medium hover:bg-red-600 transition">
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
