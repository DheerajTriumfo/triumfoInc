import { notFound } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from '../../../lib/seo';
import parse, { domToReact } from 'html-react-parser';
const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

export const revalidate = 60;


export default async function BlogDetail(props) {
  const params = await props.params; 
  const slug = params?.slug;
  if (!slug || typeof slug !== 'string') return notFound();

  let casestudy = null;

  try {
  const res = await fetch(`${apiBase}/casestudydetail/${encodeURIComponent(slug)}`, { cache: 'no-store' });
  if (!res.ok) return notFound();
  const json = await res.json();
  
  casestudy = json?.data?.[0];



} catch {
  return notFound();
}

   if (!casestudy) return notFound();

  const title = casestudy.title;
  const bannerdesc = casestudy.bannerdesc;
  const bannerImg = `https://triumfous.mobel.us/uploads/casestudy/${casestudy.bannerimage}`;
  const boothsize = casestudy.boothsize;
  const fairname = casestudy.fairname;
  const challengedesc = casestudy.challangedesc;
  const solutiondesc = casestudy.solutiondesc;
  const resultdesc = casestudy.resultdesc;
//for database content styling
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
const bannerdetailTailwind = (html) =>
		parse(html || '', {
			replace: (domNode) => {
				if (domNode.name === 'p') {
					domNode.attribs = {
						...(domNode.attribs || {}),
						class: 'text-gray-700 text-xl mb-12',
					};
				}
				
				return domNode;
			},
		});
	return (
		<>
			<section>
				<div className="bannerbg bg-[#EAEEF7] py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl mx-auto">
							<div className="text-center">
								<h1 className="text-gray-700 font-semibold text-7xl mb-4">{title}</h1>
								{bannerdetailTailwind(bannerdesc)}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
			<div className="contentbg  bg-white relative">
				<div className="container mx-auto px-4">
					<div className="relative" style={{ transform: "translatey(-80px)" }}>
						<div className="figure">
							<Image 
							    src={bannerImg}
							    width={800}
							    height={466}
							    alt={casestudy.alttag || ""}
							    className="w-full h-auto"
							/>
						</div>
						<h2 className="maintitle text-gray-700 my-6 border-b border-gray-300 pb-2">Challenges</h2>
						{descritpionwithTailwind(challengedesc)}
						<h2 className="maintitle text-gray-700 my-6 border-b border-gray-300 pb-2">Solution</h2>
						{descritpionwithTailwind(solutiondesc)}
						<h2 className="maintitle text-gray-700 my-6 border-b border-gray-300 pb-2">Result</h2>
						{descritpionwithTailwind(resultdesc)}
					</div>
				</div>
			</div>
		</section>
		</>
	);
}