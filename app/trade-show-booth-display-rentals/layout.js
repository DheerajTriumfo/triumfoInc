import Script from 'next/script';
import { buildMetadata } from '../../lib/seo';


export async function generateMetadata() {
  return await buildMetadata({
    title: "Las Vegas Trade Show Booth Rentals | Turnkey Exhibit Services",
    description:
      "We offer creative trade show booth rentals in Las Vegas. Our exhibit rentals attract, engage, and convert at any event across the USA.",
    pathname: "/trade-show-booth-display-rentals/",
    image: "https://www.triumfo.us/images/build-rental-booth.webp",
    openGraph: {
      type: "website",
    },
  });
}


export default function Layout({ children }) {
  return (
    <>
      
      {children}
    </>
  );
}

