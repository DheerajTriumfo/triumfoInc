import { buildMetadata } from '../../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Case Study",
    description:
      "Description",
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
