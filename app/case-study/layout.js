import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Exhibit Booth Success Stories | Case Studies | Triumfo Inc.",
    description:
      "Explore case studies featuring custom exhibits, innovative designs, and successful builds across major global exhibitions. View our projects.",
    pathname: "/case-study/",
    image: "https://www.triumfo.us/images/happy-client.webp",
    openGraph: {
      type: "website",
    },
  });
}

export default function Layout({ children }) {
  
  return children;
}
