import { Poppins, Barlow_Condensed, Open_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./styles/menu.css";
import Script from "next/script";
import Navigation from '../components/navigation.js';
import Footer from '../components/footer.js';
import Providers from '../components/Providers';
import { resolveSiteUrl } from '../lib/config';
import { notFound } from 'next/navigation';

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "optional",
});

const opensans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "optional",
});

export async function generateMetadata() {
  const siteUrl = await resolveSiteUrl();
  return {
    metadataBase: new URL(siteUrl),
  };
}

export default function RootLayout({ children }) {
  const siteData = true;
  if (!siteData) {
    notFound();
  }

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/_next/static/media/5b0229109f6656bb-s.6c710ca8.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />

        {/* jQuery + Owl */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          strategy="afterInteractive"
        />

        {/* ⭐ GTM (Script) */}
        
      </head>

      <body className={`${barlowCondensed.variable} ${opensans.variable} antialiased`}>
        
        

        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
