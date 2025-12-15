import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from './QuoteForm';
import parse, { domToReact } from 'html-react-parser';
import { buildMetadata } from '../../../lib/seo';
import BoothDetailContent from './BoothDetailContent';
import OwlInit from './OwlInit';


const fallbackBase = 'https://triumfous.mobel.us/api';
const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || fallbackBase;


export async function generateMetadata(props) {
  const params = await props.params;
	const slug = params?.slug;
	const productId = params?.productId;
	const size = slug.replace('-trade-show-booth', '');
	//console.log(productId);
  const res = await fetch(`${apiBase}/rental/booth-size/${encodeURIComponent(size)}/${encodeURIComponent(productId)}`, {
		cache: 'no-store',
	});
    if (!res.ok) throw new Error("Failed to fetch metadata");
    const payload = await res.json();
		const list = Array.isArray(payload?.data?.rental_data) ? payload.data.rental_data : [];
		const images = Array.isArray(payload?.data?.imagedata) ? payload.data.imagedata : [];
		const selected = list.find(
		    r => (r.skucode || '').toLowerCase() === productId.toLowerCase()
		);
    const title = selected.metatitle || 'Triumfo Inc.';
    const description = selected.metadesc || 'Exhibit booth details and specifications';
    const imgSrc = selected.thumbnail ? `${apiBase}/images/uploads/rentalexhibition/${selected.thumbnail}` : '/images/10x20-1.jpg';
    //console.log(imgSrc);
    return await buildMetadata({
      title,
      description,
      image: imgSrc,
      pathname: `${slug}/${productId}/`,
      openGraph: {
        type: "article",
        images: [
          {
            url: imgSrc,
            width: 350,
            height: 300,
            alt: title,
          },
        ],
      },
    });
}	

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
	const rentalInclude = Array.isArray(payload?.data?.includedata) ? payload.data.includedata : [];
	const relateddata = Array.isArray(payload?.data?.relatedbooth) ? payload.data.relatedbooth : [];
	console.log(images);
	console.log(rentalInclude);

	const selected = list.find(
	    r => (r.skucode || '').toLowerCase() === productId.toLowerCase()
	);
	if (!selected) return notFound();

	const title = selected.skucode || 'Trade Show Booth';
	const subtitle = `Booth Size: ${selected.boothsize || size}`;
	const heroCtaHref = '/get-booth-quotation/';
	const imgSrc = selected.thumbnail ? `${apiBase}/images/uploads/rentalexhibition/${selected.thumbnail}` : '/images/10x20-1.jpg';
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
        if (domNode.name === 'h3') {
          domNode.attribs = {
            ...(domNode.attribs || {}),
            class: 'text-3xl lg:text-4xl font-semibold font-heading text-gray-700 mb-6',
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
						<div className="grid grid-cols-12 gap-y-6 gap-x-8">
							<div className="col-span-12 md:col-span-7 lg:col-span-7">
								<div className="block relative mb-4">
									<div className="owl-carousel owl-theme" id="boothdetailslider">
										{images.slice(1,7).map((im) => (
											<div key={im.id} className="item"><img src={`${apiBase}/images/uploads/multiexhibitrental/${im.rentalimg}`} alt={selected.alttag || title} className="w-full h-auto object-contain rounded-md bg-white"/></div>
										))}
									</div>
								</div>
								<BoothDetailContent defaultBoothSize={selected.boothsize || size} />
								
							</div>
							<div className="col-span-12 md:col-span-5 lg:col-span-5">
							<div className="w-full bg-white text-gray-700 mt-6 md:mt-0 p-4  flex flex-col space-y-4 rounded-md sticky top-[10px] z-50 min-h-[20px]">
									<h2 className="text-3xl text-gray-700 font-semibold mb-4">Rental Package Includes:</h2>
									<ul>
								    {rentalInclude.map((item, index) => (
								      <li
								        key={index}
								        className="flex items-center gap-2 text-gray-600 font-medium mb-3"
								      >
								        <svg
								          xmlns="http://www.w3.org/2000/svg"
								          className="h-5 w-5 flex-shrink-0 mt-1"
								          fill="none"
								          viewBox="0 0 24 24"
								          stroke="#9A3220"
								          strokeWidth="3"
								        >
								          <path
								            strokeLinecap="round"
								            strokeLinejoin="round"
								            d="M5 13l4 4L19 7"
								          />
								        </svg>

								        <span>{item.included}</span>
								      </li>
								    ))}
								  </ul>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
			<section>
				<div className="rentalbg  relative bg-white">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="maintitle text-gray-700 mb-6 max-w-2xl mx-auto">Similar Booth Designs</h2>
						</div>
						<div className="owl-carousel owl-theme mt-12" id="rental">
							{relateddata.map((item, index) => (
							<div key={item.id || index} className="column relative">
					      <div className="figure relative block">
					        <img
					          src={`${apiBase}/images/uploads/rentalexhibition/${item.thumbnail}`}
					          width={350}
					          height={300}
					          alt={item.alttag || item.skucode}
					          loading="lazy"
					          className="w-full h-auto rounded-md"
					        />
					      </div>
								<div className="colloverlay block [background-image:linear-gradient(180deg,rgba(32,32,32,0)_75%,#0f0f0f_96%)] absolute w-full h-full top-0 left-0">
									<div className="absolute text-center bottom-[40px] left-1/2 -translate-x-1/2 inline-block font-[Barlow_Condensed,sans-serif]">
										<a href={`/${item.boothsize}-trade-show-booth/${item.skucode}`}>
											<div className="captitile text-white font-semibold text-4xl">{item.skucode}</div>
											<div className="eyeebrow text-white text-sm">{item.boothsize}</div>
										</a>
									</div>
								</div>
							</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="contentsec py-10">
					<div className="container mx-auto px-4">
						<h1 className="text-5xl md:text-6xl  text-gray-700 font-semibold mb-6">{selected.title}</h1>
						{descritpionwithTailwind(selected.description)}
					</div>
				</div>
			</section>
			 <OwlInit />
		</>
	);
}