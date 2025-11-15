import { buildMetadata } from '../../lib/seo';
import BlogLayoutClient from './LayoutClient';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Exhibitor’s Guide to Trade Shows | Booth Planning & Design Tips",
    description:"Master trade show success with our comprehensive exhibitor’s guide. Learn how to plan, design, and execute a standout booth for maximum impact.",
    alternates: {
      canonical: "/blog/",
    },

    openGraph: {
      title: "Exhibitor’s Guide to Trade Shows | Booth Planning & Design Tips",
      description:"Master trade show success with our comprehensive exhibitor’s guide. Learn how to plan, design, and execute a standout booth for maximum impact.",
      url: "/blog/",
      siteName: "Triumfo Inc.",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "http://192.168.0.86:3000/images/home-portfolio5.webp",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@triumfoinc",
      creator: "@triumfoinc",
      title: "Exhibitor’s Guide to Trade Shows | Booth Planning & Design Tips",
      description:"Master trade show success with our comprehensive exhibitor’s guide. Learn how to plan, design, and execute a standout booth for maximum impact.",
      images: [
        "http://192.168.0.86:3000/images/home-portfolio5.webp",
      ],
    },
  });
};


export default function Layout({ children }) {
  return <BlogLayoutClient>{children}</BlogLayoutClient>;
}
