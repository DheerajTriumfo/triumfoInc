import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import parse, { domToReact } from 'html-react-parser';
import BoothGrid from './BoothGrid';
import { buildMetadata } from '../../lib/seo';

const fallbackBase = 'https://triumfous.mobel.us/api';
const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || fallbackBase;


export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params?.slug;
  if (!slug) return {};

  try {
    const res = await fetch(`${apiBase}/meta/${encodeURIComponent(slug)}`, { cache: 'no-store' });
    if (!res.ok) return {};
    const data = await res.json();
    const title = data?.meta_title || `${slug.toUpperCase()} Trade Show Booth`;
    const description = data?.meta_description || 'Explore our trade show displays';
    const rentalImg = data?.banner_img
      ? `https://triumfous.mobel.us/rentalexhibition/${data.banner_img}`
      : undefined;

    return await buildMetadata({
      title,
      description,
      image: rentalImg,
      pathname: `/${slug}/`,
      openGraph: rentalImg
        ? {
            images: [
              {
                url: rentalImg,
                width: 358,
                height: 443,
                alt: title,
              },
            ],
          }
        : undefined,
    });
  } catch (err) {
    return {};
  }
}

async function getPageData(slug) {
    if (slug.endsWith('-trade-show-booth')) {
        const boothSize = slug.replace('-trade-show-booth', '');
        const res = await fetch(`${apiBase}/viewboothbysize/${boothSize}/`, {
            cache: 'no-store',
        });
        if (!res.ok) return null;
        const data = await res.json();
        if (!data?.data?.length) return null;
        return { type: 'booth', boothSize, ...data };

    }
    
}

    // Location meta

export default async function LocationDetail({ params }) {
  // Await params if it might be a promise
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const boothSize = slug.replace('-trade-show-booth', '');
  const res = await fetch(`${apiBase}/viewboothbysize/${boothSize}/`, {
    cache: 'no-store',
  });

  if (!res.ok) return notFound();
  const data = await res.json();
  if (!data?.data?.length) return notFound();
  const boothdata = data.data;
  const pagendata = data.pagedata?.[0];
  const booth = data.data[0];
  
  //console.log(boothdata);
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
    return (
      <>
        <section>
          <div className="bannerbg bg-[#34343C] py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center">
                  <h1 className="text-white font-semibold text-7xl mb-6">{pagendata.banner_title}</h1>
                  <div className="text-white font-normal text-lg" dangerouslySetInnerHTML={{ __html: pagendata.banner_shrtdesc }} />
                  <div className="mt-8">
                    <Link href="/contact-us/" className="px-7 py-3 bg-custom rounded-md border-2 border-custom text-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white transition duration-300 text-xl"
                    >Get a Quote</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
        <BoothGrid booths={boothdata} apiBase={apiBase} parentSlug={slug} />
        </section>

        <section>
          <div className="clientsection pb-20">
            <div className="container mx-auto px-4">
              <div>{descritpionwithTailwind(pagendata.p_description)}</div>
            </div>
          </div>
        </section>
      </>
  
    );
}