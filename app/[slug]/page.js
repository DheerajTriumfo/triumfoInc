import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import BoothGrid from './BoothGrid';
const fallbackBase = 'https://triumfous.mobel.us/api';

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



export async function generateMetadata(props) {
  // Await params if they are a Promise
  const params = await props.params;
  const slug = params?.slug;
  if (!slug) return {};

  try {
    const res = await fetch(`${apiBase}/meta/${encodeURIComponent(slug)}`, { cache: 'no-store' });
    if (!res.ok) return {};
    const data = await res.json();

    return {
      title: data?.meta_title || `${slug.toUpperCase()} Trade Show Booth`,
      description: data?.meta_description || 'Explore our trade show displays',
    };
  } catch (err) {
    return {};
  }
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