import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Turnkey Services | Triumfo Inc.",
    description:
      "Learn more about our turnkey services available in the United States. Request a detailed quotation today.",
    pathname: "/services/",
    image: "https://www.triumfo.us/images/build-rental-booth.webp",
    openGraph: {
      type: "website",
    },
  });
}


export default function Layout({ children }) {
  return children;
}
