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
          url: "https://www.triumfo.us/images/home-portfolio5.webp",
          width: 767,
          height: 530,
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
        "https://www.triumfo.us/images/home-portfolio5.webp",
      ],
    },
  });
};


export default function Layout({ children }) {
  return <BlogLayoutClient>{children}</BlogLayoutClient>;
}
