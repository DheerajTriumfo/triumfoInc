// app/page.js  (SERVER COMPONENT)
import Home from './components/Home.js';
import { buildMetadata } from '../lib/seo';

export async function generateMetadata() {
  return await buildMetadata({
    title: "Your Nationwide Trade Show Booth Rental Partner | Triumfo Inc",
    description:"Rent high-quality trade show booths anywhere in the USA. Triumfo offers custom designs, fabrication, logistics, installation, and dismantling—end-to-end turnkey solutions.",
    pathname: "/",
    
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
            "name": "How early should I start planning my trade show booth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend starting 3–6 months before your event. This allows time for booth design, approvals, fabrication, logistics, and any last-minute adjustments, ensuring a seamless experience.."
            }
          },
          {
            "@type": "Question",
            "name": " What size trade show booth should I choose?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Popular booth sizes include 10x10, 10x20, 20x20, 30x30, and larger island booths like 40x40 ft. The right size depends on your display needs, visitor engagement goals, and the type of event you’re attending."
            }
          },
          {
            "@type": "Question",
            "name": "Can I customize my trade show booth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Triumfo specializes in custom exhibits, providing personalized booth designs, graphics, lighting, and interactive elements to reflect your brand and create a memorable visitor experience."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to design and build a trade show exhibit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simple modular designs can take 2–3 weeks, while fully custom booths typically require 6–8 weeks. Triumfo manages the entire process, ensuring timely delivery and quality craftsmanship."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in Triumfo’s trade show booth services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our end-to-end services include concept and 3D booth design, custom fabrication, graphics and printing, logistics and transportation, on-site installation and dismantling, and storage services. All services are handled in-house for quality control."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a trade show booth cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pricing depends on size, materials, customization, and location."
            }
          },
          {
            "@type": "Question",
            "name": "How long has Triumfo been in business, and why choose you?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With over 25 years of expertise, Triumfo has delivered high-quality, creative trade show booths for global brands. Our end-to-end capabilities, attention to detail, and stress-free approach ensure your brand stands out at every event."
            }
          },
          {
            "@type": "Question",
            "name": "Can I reuse my booth for multiple shows?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Many of our modular and custom booths are designed for reuse. Durable materials and flexible layouts ensure your investment can be deployed across multiple events."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage everything on-site during the trade show?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide full on-site management, including supervision of installation, dismantling, technical adjustments, and coordination with show organizers, giving you a stress-free experience."
            }
          },
          {
            "@type": "Question",
            "name": "Can you support trade shows outside the U.S.?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Triumfo manages global trade show projects, delivering consistent quality and timely execution across Europe, Asia, UAE, and other international locations."
            }
          },
          {
            "@type": "Question",
            "name": "How can I make my booth more engaging for visitors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Engagement comes from interactive displays, digital demos, lighting, and well-placed branded elements. Triumfo’s designs are crafted to attract attention, encourage interaction, and leave a lasting impression."
            }
          },
          {
            "@type": "Question",
            "name": "How do I measure the ROI of a trade show booth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ROI is measured by tracking leads, conversions, visitor engagement, and overall brand exposure. Our booths are designed to maximize interaction and create measurable impact for your participation."
            }
          },
          {
            "@type": "Question",
            "name": "Are eco-friendly or sustainable booth options available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Triumfo offers sustainable solutions using recycled materials and energy-efficient components, allowing you to reduce environmental impact while maintaining high-quality design and presentation."
            }
          },
          {
            "@type": "Question",
            "name": "How do I transport my booth safely?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide secure packaging, custom crates, and logistics coordination to ensure your booth and displays arrive intact and ready for setup."
            }
          },
          {
            "@type": "Question",
            "name": "Can you store my booth for future shows?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Triumfo provides secure storage services, keeping your booths protected between events and ready for reuse"
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer booth rental options?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Triumfo provides cost-effective rental exhibits, ideal for temporary needs or multiple events. Rentals include setup, dismantling, and storage, offering flexibility without compromising quality."
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
