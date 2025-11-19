import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "About Us | Triumfo Inc.",
    description:
      "Learn how Triumfo Inc. helps exhibitors make their trade show participation easier and more cost-effective with solutions designed for better results.",
    pathname: "/about-us/",
    image: "https://www.triumfo.us/images/happy-client.webp",
    openGraph: {
      type: "website",
    },
  });
}

export default function Layout({ children }) {
  return children;
}
