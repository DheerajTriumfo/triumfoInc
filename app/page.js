// app/page.js  (SERVER COMPONENT)
import Home from './components/Home.js';
import { buildMetadata } from '../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Trade Show Booth Design & Exhibit Builders USA.",
    description:
      "Designing and building trade show booths for national and international exhibitors across the USA. Choose from over 500 booth designs.",
    pathname: "/",
    image: "https://www.triumfo.us/images/booth-design-banner.webp",
    openGraph: {
      type: "website",
    },
  });
}




export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Triumfo Inc.",
        "url": "https://www.triumfo.us/",
        "logo": "https://www.triumfo.us/images/logo.webp",
        "sameAs": [
          "https://www.facebook.com/TriumfoInc",
          "https://www.linkedin.com/company/triumfo-inc",
          "https://twitter.com/TriumfoInc"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-775-927-6412",
          "contactType": "Customer Service",
          "email": "enquiry@triumfo.us"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5071 N. Rainbow Blvd, Suite 170",
          "addressLocality": "Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89130",
          "addressCountry": "USA"
        },
        "description": "Triumfo Inc. is a leading trade show booth design and exhibit rental company in the USA, providing end-to-end custom booth solutions since 1999.",
        "areaServed": "USA",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Trade Show Booth Design",
                "description": "Fully customized trade show booths for exhibitions, ensuring brand impact."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Exhibit Booth Rental",
                "description": "Short-term rental solutions for trade show booths, tailored to your requirements."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full-Service Trade Show Management",
                "description": "Complete management from concept to installation and teardown."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you offer custom trade show booth designs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Triumfo Inc. provides fully customized trade show booth designs tailored to your brand and exhibition requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Can I rent a trade show booth instead of buying?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! We offer flexible exhibit booth rental solutions for short-term or long-term events."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle installation and teardown?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our team manages the complete setup and dismantling process for all trade show booths."
            }
          },
          {
            "@type": "Question",
            "name": "Which states in the USA do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Triumfo Inc. provides trade show booth design and rental services across all 50 states in the USA."
            }
          }
        ]
      },
     
    ]
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Home />
    </>
  );
}
