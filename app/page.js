// app/page.js  (SERVER COMPONENT)
import Home from './components/Home.js';
export const metadata = {
  title: "Trade Show Exhibit Booth | Dream, Design, Dominate",
  description: "Designing and building trade show booths for national and international exhibitors across the USA. Choose from over 500 booth designs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trade Show Exhibit Booth | Dream, Design, Dominate",
    description: "Designing and building trade show booths for national and international exhibitors across the USA. Choose from over 500 booth designs.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Show Exhibit Booth | Dream, Design, Dominate",
    description: "Designing and building trade show booths for national and international exhibitors across the USA. Choose from over 500 booth designs..",
  },
};

export default function Page() {
  return <Home />; // <Home /> remains client component
}
