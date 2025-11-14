import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Contact Us | Triumfo Inc.",
    description:"Contact us today about your upcoming project, and we’ll help you design and build your exhibit for the best results. Email us at enquiry@triumfo.us",
    alternates: {
      canonical: "/contact-us/",
    },

    openGraph: {
      title: "Contact Us | Triumfo Inc.",
      description:"Contact us today about your upcoming project, and we’ll help you design and build your exhibit for the best results. Email us at enquiry@triumfo.us",
      url: "/contact-us/",
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
      title: "Contact Us | Triumfo Inc.",
      description:"Contact us today about your upcoming project, and we’ll help you design and build your exhibit for the best results. Email us at enquiry@triumfo.us",
      images: [
        "https://triumfous.mobel.us/api/images/portfolio/1720080379.webp",
      ],
    },
  });
};


export default function Layout({ children }) {
  return children;
}
