import { buildMetadata } from '../../../lib/seo';
import { API_CONFIG } from '../../../lib/config';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://triumfous.mobel.us/api';

// Case study specific metadata
const caseStudyMetadata = {
  'countr': {
    title: 'Case Study — CountR Payment Systems Booth by Triumfo Inc.',
    description: 'Triumfo designed a sleek island booth for CountR with live demos, smart layout, and bold branding, boosting visibility and engagement at Amusement Expo.',
  },
  'securden': {
    title: 'Case Study – Securden Booth by Triumfo Inc.',
    description: 'See how Triumfo designed a 20×20 ft custom booth for Securden, delivering polished branding, system-ready layout and standout presence at RSAC.',
    ogDescription: 'Triumfo built a 20×20 ft custom booth for Securden, featuring clean branding, organized layout, and strong visibility at RSAC.',
    twitterDescription: 'Triumfo created a clean, branded 20×20 ft booth for Securden, enhancing visibility and visitor engagement at RSAC.',
  },
  'tedial': {
    title: 'Case Study – Tedial Booth by Triumfo Inc.',
    description: 'Discover Triumfo\'s custom 20×20 ft exhibit for Tedial at NAB Show — with smart design, clean aesthetics, and high visitor engagement.',
    ogDescription: 'Discover how Triumfo designed a sleek 20×20 ft booth for Tedial at NAB Show, combining clean aesthetics, tech ready layout, and high visitor engagement.',
    twitterDescription: 'Triumfo created a modern 20×20 ft booth for Tedial, enhancing brand visibility, visitor flow, and interactive engagement at NAB Show.',
  },
  'vahdam': {
    title: 'Case Study – VAHDAM Booth by Triumfo Inc.',
    description: 'Explore how Triumfo built a 10×20 ft booth for VAHDAM, combining efficient layout, strong branding and great expo-floor impact.',
    ogDescription: 'Explore how Triumfo built a 10×20 ft booth for VAHDAM, combining smart layout, bold branding, and strong expo floor impact.',
    twitterDescription: 'Triumfo created a modern 10×20 ft booth for VAHDAM, enhancing brand visibility, visitor flow, and interactive engagement at trade shows.',
  },
  'saier': {
    title: 'Case Study – Saier Booth by Triumfo Inc.',
    description: 'See Triumfo\'s design for Saier\'s 20×20 ft booth at ISSA Show — blending professional layout, brand clarity and visitor-friendly space.',
    ogDescription: 'See how Triumfo designed a 20×20 ft booth for Saier at ISSA Show, featuring professional layout, clear branding, and a visitor-friendly experience.',
    twitterDescription: 'Triumfo created a professional 20×20 ft booth for Saier, combining effective layout, clear branding, and high visitor engagement at ISSA Show.',
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  // Ensure canonical URL is exactly https://www.triumfo.us/case-study/{slug}/
  const canonicalUrl = `https://www.triumfo.us/case-study/${slug}/`;
  
  // Fetch case study data to get the banner image
  let bannerImage = "https://www.triumfo.us/images/happy-client.webp";
  try {
    const res = await fetch(`${apiBase}/casestudydetail/${encodeURIComponent(slug)}`, { 
      cache: 'no-store',
      next: { revalidate: 3600 } // Revalidate every hour
    });
    if (res.ok) {
      const json = await res.json();
      const casestudy = json?.data?.[0];
      if (casestudy?.bannerimage) {
        bannerImage = `https://triumfous.mobel.us/uploads/casestudy/${casestudy.bannerimage}`;
      }
    }
  } catch (error) {
    // Use default image if fetch fails
    console.error('Error fetching case study image:', error);
  }
  
  // Check if we have specific metadata for this slug
  const metadata = caseStudyMetadata[slug?.toLowerCase()];
  
  if (metadata) {
    // Use specific descriptions for Meta, OG and Twitter if available
    const metaDescription = metadata.description || metadata.ogDescription || '';
    const ogDescription = metadata.ogDescription || metadata.description || '';
    const twitterDescription = metadata.twitterDescription || metadata.description || ogDescription;
    
    const baseMetadata = await buildMetadata({
      title: metadata.title,
      description: metaDescription, // This is for the meta description tag
      pathname: `/case-study/${slug}/`,
      image: bannerImage,
      openGraph: {
        type: "article",
        url: canonicalUrl,
        description: ogDescription, // Override OG description
      },
      twitter: {
        title: metadata.title,
        description: twitterDescription, // Override Twitter description
        images: [bannerImage],
      },
    });
    
    // Override canonical URL and ensure OG description is correct
    return {
      ...baseMetadata,
      description: metaDescription, // Ensure meta description is correct
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        ...baseMetadata.openGraph,
        url: canonicalUrl,
        description: ogDescription, // Ensure OG description is correct
      },
      twitter: {
        ...baseMetadata.twitter,
        description: twitterDescription, // Ensure Twitter description is correct
      },
    };
  }
  
  // Default metadata if slug not found
  const defaultMetadata = await buildMetadata({
    title: "Case Study | Triumfo Inc.",
    description: "Explore our case studies featuring custom exhibits, innovative designs, and successful builds across major global exhibitions.",
    pathname: `/case-study/${slug}/`,
    image: bannerImage,
    openGraph: {
      type: "article",
      url: canonicalUrl,
    },
  });
  
  // Override canonical URL to ensure exact format
  return {
    ...defaultMetadata,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      url: canonicalUrl,
    },
  };
}

export default function Layout({ children }) {
  return <>{children}</>;
}


