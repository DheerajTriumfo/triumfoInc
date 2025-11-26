import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Our Work | Triumfo",
    description:
      "Take a look at the projects we’ve completed and the spaces we’ve transformed. Discover the creativity and attention to detail in every project.",
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
