/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  optimizeFonts: true,

  images: {
    domains: ['triumfous.mobel.us'],
    formats: ['image/avif', 'image/webp'], // ✅ serve modern formats automatically
    minimumCacheTTL: 31536000,
  },

  experimental: {
    optimizeCss: true, // ✅ reduce blocking CSS
    scrollRestoration: true,
  },

  async headers() {
    return [
      {
        // Cache static assets aggressively
        source: "/:all*(svg|jpg|jpeg|png|webp|ico|css|js|woff2|ttf|eot|otf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Security headers for all routes
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Real old → new path mappings only (keep these!)
      {
        source: "/custom-exhibit-rental/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-ideas/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-las-vegas/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-novi/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-palm-springs/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-ohio/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-omaha/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-orlando/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-philadelphia/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-phoenix/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-rosemont/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-riverside/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-sacramento/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-salt-lake-city/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-san-antonio/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-san-francisco/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-san-diego/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-san-jose/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-santa-clara/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-south-carolina/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-tennessee/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-tampa/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-st-louis/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-utah/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-washington-dc/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-charlotte/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-portland/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/exhibition-stand-germany/",
        destination: "https://www.triumfo.de/",
        permanent: true,
      },
      {
        source: "/exhibition-stand-spain/",
        destination: "https://www.triumfo.de/stand-design-and-booth-construction-company/barcelona/",
        permanent: true,
      },
      {
        source: "/exhibition-stand-france/",
        destination: "https://www.triumfo.de/stand-builders-france/",
        permanent: true,
      },
      {
        source: "/exhibition-stand-united-kingdom/",
        destination: "https://www.triumfo.de/stand-builders-uk/",
        permanent: true,
      },
      {
        source: "/exhibition-stand-netherlands/",
        destination: "https://www.triumfo.de/stand-design-and-booth-construction-company/amsterdam/",
        permanent: true,
      },
      {
        source: "/exhibition-stand-switzerland/",
        destination: "https://www.triumfo.de/stand-builders-switzerland/",
        permanent: true,
      },
      {
        source: "/exhibition-stand-italy/",
        destination: "https://www.triumfo.de/stand-builders-italy/",
        permanent: true,
      },
      {
        source: "/exhibition-stand-austria/",
        destination: "https://www.triumfo.de/stand-design-and-booth-construction-company/vienna/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-dubai/",
        destination: "https://www.triumfo.ae/",
        permanent: true,
      }

    ];
  },
};

export default nextConfig;
