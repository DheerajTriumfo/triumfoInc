import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Contact Us | Triumfo Inc.",
    description:
      "Contact us today about your upcoming project, and we’ll help you design and build your exhibit for the best results. Email us at enquiry@triumfo.us",
    pathname: "/contact-us/",
    image: "https://triumfous.mobel.us/api/images/portfolio/1720080379.webp",
    openGraph: {
      type: "website",
    },
  });
}


export default function Layout({ children }) {
  return children;
}
