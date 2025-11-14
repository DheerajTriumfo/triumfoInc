import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Full Trade Show Services  By Triumfo Inc.",
    description:"From planning and design to installation, execution, and breakdown — everything under one roof for a seamless exhibiting experience.",
    alternates: {
      canonical: "/services/",
    },

    openGraph: {
      title: "Full Trade Show Services  By Triumfo Inc.",
      description:"From planning and design to installation, execution, and breakdown — everything under one roof for a seamless exhibiting experience.",
      url: "/services/",
      siteName: "Triumfo Inc.",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://www.triumfo.us/images/build-rental-booth.webp",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@triumfoinc",
      creator: "@triumfoinc",
      title: "Full Trade Show Services  By Triumfo Inc.",
      description:"From planning and design to installation, execution, and breakdown — everything under one roof for a seamless exhibiting experience.",
      images: [
        "https://www.triumfo.us/images/build-rental-booth.webp",
      ],
    },
  });
};


export default function Layout({ children }) {
  return children;
}
