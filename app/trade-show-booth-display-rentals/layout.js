import Script from 'next/script';
import { buildMetadata } from '../../lib/seo';


export async function generateMetadata() {
  return await buildMetadata({
    title: "Rent Trade Show Booths Anywhere in the USA | Turnkey Services",
    description:
      "Rent high-quality trade show booths anywhere in the USA. Triumfo offers custom designs, fabrication, logistics, installation, and dismantling—end-to-end turnkey solutions.",
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

