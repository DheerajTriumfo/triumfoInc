import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import BoothGrid from './BoothGrid';

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
    const rentalimg = data?.banner_img
    return {
      title: data?.meta_title || `${slug.toUpperCase()} Trade Show Booth`,
      description: data?.meta_description || 'Explore our trade show displays',
      alternates: {
        canonical: `https://www.triumfo.us/${slug}/`,
      },
      openGraph: {
      title: data?.meta_title || `${slug.toUpperCase()} Trade Show Booth`,
      description: data?.meta_description || 'Explore our trade show displays',
      url: `https://www.triumfo.us/${slug}/`,
      siteName: "Triumfo Inc.",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `https://triumfous.mobel.us/rentalexhibition/${rentalimg}`,
          width: 358,
          height: 443,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@triumfoinc",
      creator: "@triumfoinc",
      title: data?.meta_title || `${slug.toUpperCase()} Trade Show Booth`,
      description: data?.meta_description || 'Explore our trade show displays',
      images: [
        `https://triumfous.mobel.us/rentalexhibition/${data?.banner_img}`,
      ],
    },
    };
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
        console.log(boothtitle);
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
      </>
  
    );
}