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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="true" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preconnect" href="https://triumfo.us" />
        <link rel="preconnect" href="https://triumfous.mobel.us" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/v4-shims.min.css" />

        {/* jQuery + Owl */}
        
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
          strategy="beforeInteractive"
        />
        {/* ⭐ GTM (Script) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-56H86N7');
          `}
        </Script>
          
        
      </head>

      <body className={`${barlowCondensed.variable} ${opensans.variable} antialiased`}>
        
        {/* ⭐ GTM (NoScript) Required */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-56H86N7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Providers>
          <Navigation />
          {children}
          <SpeedInsights url="https://www.triumfo.us/" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
