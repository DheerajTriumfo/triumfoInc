import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Trade Show Booth Design Portfolio",
    description:"Explore our booth design portfolio featuring projects we’ve designed and built for clients worldwide. Real work for real clients.",
    alternates: {
      canonical: "/portfolio/",
    },

    openGraph: {
      title: "Trade Show Booth Design Portfolio",
      description:"Explore our booth design portfolio featuring projects we’ve designed and built for clients worldwide. Real work for real clients.",
      url: "/portfolio/",
      siteName: "Triumfo Inc.",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://triumfous.mobel.us/api/images/portfolio/1720080379.webp",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@triumfoinc",
      creator: "@triumfoinc",
      title: "Trade Show Booth Design Portfolio",
      description:"Explore our booth design portfolio featuring projects we’ve designed and built for clients worldwide. Real work for real clients.",
      images: [
        "https://triumfous.mobel.us/api/images/portfolio/1720080379.webp",
      ],
    },
  });
};


export default function PortfolioLayout({ children }) {
  return <>{children}</>;
}
