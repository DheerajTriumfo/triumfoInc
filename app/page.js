// app/page.js  (SERVER COMPONENT)
import Home from './components/Home.js';
import { buildMetadata } from '../lib/seo';


export async function generateMetadata() {
  return await buildMetadata({
    title: "Triumfo Inc: Trade Show Booth Design & Build Company USA",
    description:"Triumfo Inc. provides custom and rental trade show exhibit booths & displays nationwide. Get end-to-end service from design to installation. Claim your free concept in 48 hours!",
    pathname: "/",
    image: "https://www.triumfo.us/images/booth-design-banner.webp",
    openGraph: {
      type: "website",
    },
  });
}




export default function Page() {
  
  return (
    <>
      
      <Home />
    </>
  );
}
