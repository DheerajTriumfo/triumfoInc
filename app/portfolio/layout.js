import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Trade Show Booth Design Portfolio",
    description:
      "Explore our booth design portfolio featuring projects we’ve designed and built for clients worldwide. Real work for real clients.",
    pathname: "/portfolio/",
    image: "https://triumfous.mobel.us/api/images/portfolio/1720080379.webp",
    openGraph: {
      type: "website",
    },
  });
}


export default function PortfolioLayout({ children }) {
  return <>{children}</>;
}
