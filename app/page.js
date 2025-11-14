// app/page.js  (SERVER COMPONENT)
import Home from './components/Home.js';
export const metadata = {
    title: "Trade Show Exhibit Booth | Dream, Design, Dominate",
    description:"Designing and building trade show booths for national and international exhibitors across the USA. Choose from over 500 booth designs.",
    alternates: {
      canonical: "/",
    },

    openGraph: {
      title: "Trade Show Exhibit Booth | Dream, Design, Dominate",
      description:"Designing and building trade show booths for national and international exhibitors across the USA. Choose from over 500 booth designs.",
      url: "/",
      siteName: "Triumfo Inc.",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://www.triumfo.us/images/booth-design-banner.webp",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@triumfoinc",
      creator: "@triumfoinc",
      title: "Trade Show Exhibit Booth | Dream, Design, Dominate",
      description:"Designing and building trade show booths for national and international exhibitors across the USA. Choose from over 500 booth designs.",
      images: [
        "https://www.triumfo.us/images/booth-design-banner.webp",
      ],
    },
  };




export default function Page() {
  return <Home />; // <Home /> remains client component
}
