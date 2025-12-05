import { buildMetadata, fetchPageSEO } from '../../lib/seo';
export async function generateMetadata() {
  return await buildMetadata({
    title: "500+ Modern Trade Show Booth Ideas to Attract Crowed",
    description:
      "Looking for booth inspiration? Discover 500+ modern trade show booth ideas designed to attract crowds, boost visibility, and elevate your exhibition presence.",
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

