import { buildMetadata, fetchPageSEO } from '../../lib/seo';
export async function generateMetadata() {
  return await buildMetadata({
    title: "Innovative Trade Show Booth Designs & Display Ideas",
    description:
      "Explore creative trade show booth designs, display ideas, and exhibit concepts. Get unique trade booth ideas and trade fair display ideas tailored for your brand.",
    pathname: "/trade-show-booth-ideas/",
    image: "https://www.triumfo.us/images/tradeshow-detail2.webp",
    openGraph: {
      type: "website",
    },
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}

