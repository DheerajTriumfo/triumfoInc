import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "About Us | Triumfo Inc.",
    description:"Designing and building trade show booths for national and international exhibitors across the USA. Choose from over 500 booth designs.",
    alternates: {
      canonical: "/about-us/",
    },

    openGraph: {
      title: "About Us | Triumfo Inc.",
      description:"Learn how Triumfo Inc. helps exhibitors make their trade show participation easier and more cost-effective with solutions designed for better results.",
      url: "/about-us/",
      siteName: "Triumfo Inc.",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://www.triumfo.us/images/happy-client.webp",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@triumfoinc",
      creator: "@triumfoinc",
      title: "About Us | Triumfo Inc.",
      description:"Learn how Triumfo Inc. helps exhibitors make their trade show participation easier and more cost-effective with solutions designed for better results.",
      images: [
        "https://www.triumfo.us/images/happy-client.webp",
      ],
    },
  });
};

export default function Layout({ children }) {
  return children;
}
