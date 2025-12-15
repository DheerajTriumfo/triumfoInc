/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp'], // ✅ modern formats
    minimumCacheTTL: 31536000, // ✅ cache images for 1 year
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'triumfous.mobel.us',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'triumfo.us',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizeCss: true, // ✅ reduce blocking CSS
    esmExternals: true,
    forceSwcTransforms: false, // <-- ADD THIS (stops adding polyfills)
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
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com",
              "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://triumfous.mobel.us https://triumfo.us https://wa.me https://www.google.com",
              "frame-src 'self' https://www.youtube.com https://www.googletagmanager.com",
              "media-src 'self' https://www.youtube.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Real old → new path mappings only (keep these!)
      {
        source: '/index',
        destination: '/', // Redirect /index to root
        permanent: true,  // 301 redirect
      },
      {
        source: '/index/', // Also handle trailing slash
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php', // Also handle trailing slash
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php/', // Also handle trailing slash
        destination: '/',
        permanent: true,
      },
      {
        source: "/custom-exhibit-rental/",
        destination: "/custom-trade-show-displays/",
        permanent: true,
      },
      // {
      //   source: "/custom-trade-show-displays/",
      //   destination: "/",
      //   permanent: true,
      // },
      {
        source: "/trade-show-booth-rental-and-exhibits-las-vegas/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-atlanta/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-exhibits-booth-design-in-louisville/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-company-san-jose/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-austin/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-baltimore/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-anaheim/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-boston/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-chicago/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-denver/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-dallas/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-detroit/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-houston/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-indianapolis/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-los-angeles/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-miami/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-long-beach/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-new-orleans/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-new-york/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-kansas-city/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-minneapolis/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-milwaukee/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-nashville/",
        destination: "/trade-show-booth-display-rentals/",
        permanent: true,
      },
      {
        source: "/trade-show-booth-rental-and-exhibits-louisville/",
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
        source: "/trade-show-booth-rental-and-exhibits-seattle/",
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
      },
      {
        source: "/icma-conference/",
        destination: "/upcoming-trade-show/icma-conference/",
        permanent: true,
      },
      {
        source: "/iana-intermodal-expo/",
        destination: "/upcoming-trade-show/iana-intermodal-expo/",
        permanent: true,
      },
      {
        source: "/pack-expo/",
        destination: "/upcoming-trade-show/pack-expo/",
        permanent: true,
      },
      {
        source: "/m-d-m-east/",
        destination: "/upcoming-trade-show/m-d-m-east/",
        permanent: true,
      },
      {
        source: "/the-namm-show/",
        destination: "/upcoming-trade-show/the-namm-show/",
        permanent: true,
      },
      {
        source: "/nra-meetings-and-exhibits/",
        destination: "/upcoming-trade-show/nra-meetings-and-exhibits/",
        permanent: true,
      },
      {
        source: "/supply-side-east/",
        destination: "/upcoming-trade-show/supply-side-east/",
        permanent: true,
      },
      {
        source: "/npe/",
        destination: "/upcoming-trade-show/npe/",
        permanent: true,
      },
      {
        source: "/iwf/",
        destination: "/upcoming-trade-show/iwf/",
        permanent: true,
      },
      {
        source: "/imts/",
        destination: "/upcoming-trade-show/imts/",
        permanent: true,
      },
      {
        source: "/labelexpo-americas/",
        destination: "/upcoming-trade-show/labelexpo-americas/",
        permanent: true,
      },
      {
        source: "/military-aviation-logistics-and-maintenance-symposium/",
        destination: "/upcoming-trade-show/military-aviation-logistics-and-maintenance-symposium/",
        permanent: true,
      },
      {
        source: "/rsal-conference/",
        destination: "/upcoming-trade-show/rsal-conference/",
        permanent: true,
      },
      {
        source: "/ifpe/",
        destination: "/upcoming-trade-show/ifpe/",
        permanent: true,
      },
      {
        source: "/informex/",
        destination: "/upcoming-trade-show/informex/",
        permanent: true,
      },
      {
        source: "/interphex/",
        destination: "/upcoming-trade-show/interphex/",
        permanent: true,
      },
      {
        source: "/cast-expo-metalcasting-congress/",
        destination: "/upcoming-trade-show/cast-expo-metalcasting-congress/",
        permanent: true,
      },
      {
        source: "/pittcon/",
        destination: "/upcoming-trade-show/pittcon/",
        permanent: true,
      },
      {
        source: "/del-mar-electronics-and-manufacturing-show/",
        destination: "/upcoming-trade-show/del-mar-electronics-and-manufacturing-show/",
        permanent: true,
      },
      {
        source: "/promat/",
        destination: "/upcoming-trade-show/promat/",
        permanent: true,
      },
      {
        source: "/aua/",
        destination: "/upcoming-trade-show/aua/",
        permanent: true,
      },
      {
        source: "/pro-food-tech/",
        destination: "/upcoming-trade-show/pro-food-tech/",
        permanent: true,
      },
      {
        source: "/gdc/",
        destination: "/upcoming-trade-show/gdc/",
        permanent: true,
      },
      {
        source: "/market-winter/",
        destination: "/upcoming-trade-show/market-winter/",
        permanent: true,
      },
      {
        source: "/hd-expo-conference/",
        destination: "/upcoming-trade-show/hd-expo-conference/",
        permanent: true,
      },
      {
        source: "/shoptalk/",
        destination: "/upcoming-trade-show/shoptalk/",
        permanent: true,
      },
      {
        source: "/digestive-disease-week/",
        destination: "/upcoming-trade-show/digestive-disease-week/",
        permanent: true,
      },
      {
        source: "/international-pizza-expo/",
        destination: "/upcoming-trade-show/international-pizza-expo/",
        permanent: true,
      },
      {
        source: "/sial-america/",
        destination: "/upcoming-trade-show/sial-america/",
        permanent: true,
      },
      {
        source: "/border-security-expo/",
        destination: "/upcoming-trade-show/border-security-expo/",
        permanent: true,
      },
      {
        source: "/fintech-nexus/",
        destination: "/upcoming-trade-show/fintech-nexus/",
        permanent: true,
      },
      {
        source: "/sea-air-space/",
        destination: "/upcoming-trade-show/sea-air-space/",
        permanent: true,
      },
      {
        source: "/nama-one-show/",
        destination: "/upcoming-trade-show/nama-one-show/",
        permanent: true,
      },
      {
        source: "/vacuum-and-sewing-dealers-trade-association/",
        destination: "/upcoming-trade-show/vacuum-and-sewing-dealers-trade-association/",
        permanent: true,
      },
      {
        source: "/techtextil-north-america/",
        destination: "/upcoming-trade-show/techtextil-north-america/",
        permanent: true,
      },
      {
        source: "/eds-leadership-summit/",
        destination: "/upcoming-trade-show/eds-leadership-summit/",
        permanent: true,
      },
      {
        source: "/isa-sign-expo/",
        destination: "/upcoming-trade-show/isa-sign-expo/",
        permanent: true,
      },
      {
        source: "/national-restaurant-show/",
        destination: "/upcoming-trade-show/national-restaurant-show/",
        permanent: true,
      },
      {
        source: "/ipw/",
        destination: "/upcoming-trade-show/ipw/",
        permanent: true,
      },
      {
        source: "/tpe/",
        destination: "/upcoming-trade-show/tpe/",
        permanent: true,
      },
      {
        source: "/icsc-convention/",
        destination: "/upcoming-trade-show/icsc-convention/",
        permanent: true,
      },
      {
        source: "/cmaa/",
        destination: "/upcoming-trade-show/cmaa/",
        permanent: true,
      },
      {
        source: "/lightfair/",
        destination: "/upcoming-trade-show/lightfair/",
        permanent: true,
      },
      {
        source: "/licensing-international/",
        destination: "/upcoming-trade-show/licensing-international/",
        permanent: true,
      },
      {
        source: "/the-inspired-home-show/",
        destination: "/upcoming-trade-show/the-inspired-home-show/",
        permanent: true,
      },
      {
        source: "/uav-technology/",
        destination: "/upcoming-trade-show/uav-technology/",
        permanent: true,
      },
      {
        source: "/jck/",
        destination: "/upcoming-trade-show/jck/",
        permanent: true,
      },
      {
        source: "/ecti/",
        destination: "/upcoming-trade-show/ecti/",
        permanent: true,
      },
      {
        source: "/bio-international-convention/",
        destination: "/upcoming-trade-show/bio-international-convention/",
        permanent: true,
      },
      {
        source: "/hai-heli-expo/",
        destination: "/upcoming-trade-show/hai-heli-expo/",
        permanent: true,
      },
      {
        source: "/insurtech/",
        destination: "/upcoming-trade-show/insurtech/",
        permanent: true,
      },
      {
        source: "/natural-products-expo-wes/",
        destination: "/upcoming-trade-show/natural-products-expo-west/",
        permanent: true,
      },
      {
        source: "/international-restaurant-foodservice-show/",
        destination: "/upcoming-trade-show/international-restaurant-foodservice-show/",
        permanent: true,
      },
      {
        source: "/vinexpo/",
        destination: "/upcoming-trade-show/vinexpo/",
        permanent: true,
      },
      {
        source: "/national-apartment-association/",
        destination: "/upcoming-trade-show/national-apartment-association/",
        permanent: true,
      },
      {
        source: "/seafood-expo/",
        destination: "/upcoming-trade-show/seafood-expo/",
        permanent: true,
      },
      {
        source: "/shra-annual-conference/",
        destination: "/upcoming-trade-show/shra-annual-conference/",
        permanent: true,
      },
      {
        source: "/ims/",
        destination: "/upcoming-trade-show/ims/",
        permanent: true,
      },
      {
        source: "/winter-fancy-food-show/",
        destination: "/upcoming-trade-show/winter-fancy-food-show/",
        permanent: true,
      },
      {
        source: "/infocomm/",
        destination: "/upcoming-trade-show/infocomm/",
        permanent: true,
      },
      {
        source: "/nssf-shot-show/",
        destination: "/upcoming-trade-show/nssf-shot-show/",
        permanent: true,
      },
      {
        source: "/sports-licensing-and-tailgate-show/",
        destination: "/upcoming-trade-show/sports-licensing-and-tailgate-show/",
        permanent: true,
      },
      {
        source: "/nada-show/",
        destination: "/upcoming-trade-show/nada-show/",
        permanent: true,
      },
      {
        source: "/winter/",
        destination: "/upcoming-trade-show/winter/",
        permanent: true,
      },
      {
        source: "/kbis/",
        destination: "/upcoming-trade-show/kbis/",
        permanent: true,
      },
      {
        source: "/outdoor-retailer-summer-market/",
        destination: "/upcoming-trade-show/outdoor-retailer-summer-market/",
        permanent: true,
      },
      {
        source: "/ahr-expo/",
        destination: "/upcoming-trade-show/ahr-expo/",
        permanent: true,
      },
      {
        source: "/summer-fancy-food-show/",
        destination: "/upcoming-trade-show/summer-fancy-food-show/",
        permanent: true,
      },
      {
        source: "/pca/",
        destination: "/upcoming-trade-show/pca/",
        permanent: true,
      },
      {
        source: "/distributech/",
        destination: "/upcoming-trade-show/distributech/",
        permanent: true,
      },
      {
        source: "/texas-restaurant-association/",
        destination: "/upcoming-trade-show/texas-restaurant-association/",
        permanent: true,
      },
      {
        source: "/atlanta-market/",
        destination: "/upcoming-trade-show/atlanta-market/",
        permanent: true,
      },
      {
        source: "/energy-storage-north-america/",
        destination: "/upcoming-trade-show/energy-storage-north-america/",
        permanent: true,
      },
      {
        source: "/powergen/",
        destination: "/upcoming-trade-show/powergen/",
        permanent: true,
      },
      {
        source: "/ift-first-annual-expo/",
        destination: "/upcoming-trade-show/ift-first-annual-expo/",
        permanent: true,
      },
      {
        source: "/las-vegas-souvenir-resort-gift-show/",
        destination: "/upcoming-trade-show/las-vegas-souvenir-resort-gift-show/",
        permanent: true,
      },
      {
        source: "/aacc/",
        destination: "/upcoming-trade-show/aacc/",
        permanent: true,
      },
      {
        source: "/international-woodworking-fair/",
        destination: "/upcoming-trade-show/international-woodworking-fair/",
        permanent: true,
      },
      {
        source: "/the-asi-show/",
        destination: "/upcoming-trade-show/the-asi-show/",
        permanent: true,
      },
      {
        source: "/the-clean-show/",
        destination: "/upcoming-trade-show/the-clean-show/",
        permanent: true,
      },
      {
        source: "/water-environment-federation-technical-exhibition-and-conference/",
        destination: "/upcoming-trade-show/water-environment-federation-technical-exhibition-and-conference/",
        permanent: true,
      },
      {
        source: "/powertrain-expo/",
        destination: "/upcoming-trade-show/powertrain-expo/",
        permanent: true,
      },
      {
        source: "/ascrs-asoa-annual-meeting/",
        destination: "/upcoming-trade-show/ascrs-asoa-annual-meeting/",
        permanent: true,
      },
      {
        source: "/commercial-uav-expo/",
        destination: "/upcoming-trade-show/commercial-uav-expo/",
        permanent: true,
      },
      {
        source: "/conexpo/",
        destination: "/upcoming-trade-show/conexpo/",
        permanent: true,
      },
      {
        source: "/nahb-international-builders-show/",
        destination: "/upcoming-trade-show/nahb-international-builders-show/",
        permanent: true,
      },
      {
        source: "/spie-photonics-west/",
        destination: "/upcoming-trade-show/spie-photonics-west/",
        permanent: true,
      },
      {
        source: "/ppai-expo/",
        destination: "/upcoming-trade-show/ppai-expo/",
        permanent: true,
      },
      {
        source: "/asd-las-vegas/",
        destination: "/upcoming-trade-show/asd-las-vegas/",
        permanent: true,
      },
      {
        source: "/nrf-retails-big-show/",
        destination: "/upcoming-trade-show/nrf-retails-big-show/",
        permanent: true,
      },
      {
        source: "/world-of-concrete-las-vegas/",
        destination: "/upcoming-trade-show/world-of-concrete-las-vegas/",
        permanent: true,
      },
      {
        source: "/stylemax-expo/",
        destination: "/upcoming-trade-show/stylemax-expo/",
        permanent: true,
      },
      {
        source: "/ctia-super-mobility-week/",
        destination: "/upcoming-trade-show/ctia-super-mobility-week/",
        permanent: true,
      },
      {
        source: "/rsna-chicago/",
        destination: "/upcoming-trade-show/rsna-chicago/",
        permanent: true,
      },
      {
        source: "/west-pack-mdm/",
        destination: "/upcoming-trade-show/west-pack-mdm/",
        permanent: true,
      },
      {
        source: "/chicago-collective/",
        destination: "/upcoming-trade-show/chicago-collective/",
        permanent: true,
      },
      {
        source: "/aaos-trade-show/",
        destination: "/upcoming-trade-show/aaos-trade-show/",
        permanent: true,
      },
      {
        source: "/nacs-show/",
        destination: "/upcoming-trade-show/nacs-show/",
        permanent: true,
      },
      {
        source: "/international-beauty-show/",
        destination: "/upcoming-trade-show/international-beauty-show/",
        permanent: true,
      },
      {
        source: "/solar-power-international/",
        destination: "/upcoming-trade-show/solar-power-international/",
        permanent: true,
      },
      {
        source: "/fabtech/",
        destination: "/upcoming-trade-show/fabtech/",
        permanent: true,
      },
      {
        source: "/supplyside-west/",
        destination: "/upcoming-trade-show/supplyside-west/",
        permanent: true,
      },
      {
        source: "/mro-americas/",
        destination: "/upcoming-trade-show/mro-americas/",
        permanent: true,
      },
      {
        source: "/greenbuild-expo/",
        destination: "/upcoming-trade-show/greenbuild-expo/",
        permanent: true,
      },
      {
        source: "/aapex-expo/",
        destination: "/upcoming-trade-show/aapex-expo/",
        permanent: true,
      },
      {
        source: "/abc-kids-expo/",
        destination: "/upcoming-trade-show/abc-kids-expo/",
        permanent: true,
      },
      {
        source: "/vive/",
        destination: "/upcoming-trade-show/vive/",
        permanent: true,
      },
      {
        source: "/wbenc-conference/",
        destination: "/upcoming-trade-show/wbenc-conference/",
        permanent: true,
      },
      {
        source: "/fabtech-expo/",
        destination: "/upcoming-trade-show/fabtech-expo/",
        permanent: true,
      },
      {
        source: "/ada/",
        destination: "/upcoming-trade-show/ada/",
        permanent: true,
      },
      {
        source: "/g2e-show-las-vegas/",
        destination: "/upcoming-trade-show/g2e-show-las-vegas/",
        permanent: true,
      },
      {
        source: "/international-fastener-expo/",
        destination: "/upcoming-trade-show/international-fastener-expo/",
        permanent: true,
      },
      {
        source: "/himss-annual-conference-exhibition/",
        destination: "/upcoming-trade-show/himss-annual-conference-exhibition/",
        permanent: true,
      },
      {
        source: "/acep/",
        destination: "/upcoming-trade-show/acep/",
        permanent: true,
      },
      {
        source: "/magic-show-las-vegas/",
        destination: "/upcoming-trade-show/magic-show-las-vegas/",
        permanent: true,
      },
      {
        source: "/iacp/",
        destination: "/upcoming-trade-show/iacp/",
        permanent: true,
      },
      {
        source: "/medical-design-manufacturing/",
        destination: "/upcoming-trade-show/medical-design-manufacturing/",
        permanent: true,
      },
      {
        source: "/gie-expo/",
        destination: "/upcoming-trade-show/gie-expo/",
        permanent: true,
      },
      {
        source: "/nacs-show-las-vegas/",
        destination: "/upcoming-trade-show/nacs-show-las-vegas/",
        permanent: true,
      },
      {
        source: "/sema-trade-show/",
        destination: "/upcoming-trade-show/sema-trade-show/",
        permanent: true,
      },
      {
        source: "/printing-united/",
        destination: "/upcoming-trade-show/printing-united/",
        permanent: true,
      },
      {
        source: "/nbaa-trade-show/",
        destination: "/upcoming-trade-show/nbaa-trade-show/",
        permanent: true,
      },
      {
        source: "/air-cargo-americas/",
        destination: "/upcoming-trade-show/air-cargo-americas/",
        permanent: true,
      },
      {
        source: "/association-of-woodworking-and-furnishings-suppliers-awfs/",
        destination: "/upcoming-trade-show/association-of-woodworking-and-furnishings-suppliers-awfs/",
        permanent: true,
      },
      {
        source: "/ifai-expo/",
        destination: "/upcoming-trade-show/ifai-expo/",
        permanent: true,
      },
      {
        source: "/national-hardware-show-merchandising-ideas-and-solutions/",
        destination: "/upcoming-trade-show/national-hardware-show-merchandising-ideas-and-solutions/",
        permanent: true,
      },
      {
        source: "/aao/",
        destination: "/upcoming-trade-show/aao/",
        permanent: true,
      },
      {
        source: "/radiological-society-of-north-america-rsna/",
        destination: "/upcoming-trade-show/radiological-society-of-north-america-rsna/",
        permanent: true,
      },
      {
        source: "/ldi/",
        destination: "/upcoming-trade-show/ldi/",
        permanent: true,
      },
      {
        source: "/nab-show-las-vegas/",
        destination: "/upcoming-trade-show/nab-show-las-vegas/",
        permanent: true,
      },
      {
        source: "/world-of-concrete-immaculate-construction-machineries/",
        destination: "/upcoming-trade-show/world-of-concrete-immaculate-construction-machineries/",
        permanent: true,
      },
      {
        source: "/waste-expo/",
        destination: "/upcoming-trade-show/waste-expo/",
        permanent: true,
      },
      {
        source: "/iaapa-expos/",
        destination: "/upcoming-trade-show/iaapa-expos/",
        permanent: true,
      },
      {
        source: "/vison-expo/",
        destination: "/upcoming-trade-show/vison-expo/",
        permanent: true,
      },
      {
        source: "/gnydm/",
        destination: "/upcoming-trade-show/gnydm/",
        permanent: true,
      },
      {
        source: "/vision-expo-east/",
        destination: "/upcoming-trade-show/vision-expo-east/",
        permanent: true,
      },
      {
        source: "/automotive-aftermarket-industry-week/",
        destination: "/upcoming-trade-show/automotive-aftermarket-industry-week/",
        permanent: true,
      },
      {
        source: "/the-international-surface-event-las-vegas/",
        destination: "/upcoming-trade-show/the-international-surface-event-las-vegas/",
        permanent: true,
      },
      {
        source: "/nab-show/",
        destination: "/upcoming-trade-show/nab-show/",
        permanent: true,
      },
      {
        source: "/natural-products-expo-east/",
        destination: "/upcoming-trade-show/natural-products-expo-east/",
        permanent: true,
      },
      {
        source: "/dema-show/",
        destination: "/upcoming-trade-show/dema-show/",
        permanent: true,
      },
      {
        source: "/new-features-come-to-coverings/",
        destination: "/upcoming-trade-show/new-features-come-to-coverings/",
        permanent: true,
      },
      {
        source: "/international-work-boat-show/",
        destination: "/upcoming-trade-show/international-work-boat-show/",
        permanent: true,
      },
      {
        source: "/ny-now/",
        destination: "/upcoming-trade-show/ny-now/",
        permanent: true,
      },
      {
        source: "/offshore-technology-conference/",
        destination: "/upcoming-trade-show/offshore-technology-conference/",
        permanent: true,
      },
      {
        source: "/national-groundwater-expo-and-annual-meeting/",
        destination: "/upcoming-trade-show/national-groundwater-expo-and-annual-meeting/",
        permanent: true,
      },
      {
        source: "/pga-merchandise-show-orlando/",
        destination: "/upcoming-trade-show/pga-merchandise-show-orlando/",
        permanent: true,
      },
      {
        source: "/spi-new-orleans/",
        destination: "/upcoming-trade-show/spi-new-orleans/",
        permanent: true,
      },
      {
        source: "/super-zoo-west/",
        destination: "/upcoming-trade-show/super-zoo-west/",
        permanent: true,
      },
      {
        source: "/sweets-and-snacks-expo/",
        destination: "/upcoming-trade-show/sweets-and-snacks-expo/",
        permanent: true,
      },
      {
        source: "/the-atlanta-pet-expo/",
        destination: "/upcoming-trade-show/the-atlanta-pet-expo/",
        permanent: true,
      },
      {
        source: "/ace-hardware-fall-convention-and-exhibits/",
        destination: "/upcoming-trade-show/ace-hardware-fall-convention-and-exhibits/",
        permanent: true,
      },
      {
        source: "/modex/",
        destination: "/upcoming-trade-show/modex/",
        permanent: true,
      },
      {
        source: "/idea/",
        destination: "/upcoming-trade-show/idea/",
        permanent: true,
      },
      {
        source: "/craft-brewers-and-brew-expo-america/",
        destination: "/upcoming-trade-show/craft-brewers-and-brew-expo-america/",
        permanent: true,
      },
      {
        source: "/rapid-tct/",
        destination: "/upcoming-trade-show/rapid-tct/",
        permanent: true,
      },
      {
        source: "/dema-exhibition-show-in-orange/",
        destination: "/upcoming-trade-show/dema-exhibition-show-in-orange/",
        permanent: true,
      },
      {
        source: "/glassbuild-america/",
        destination: "/upcoming-trade-show/glassbuild-america/",
        permanent: true,
      },
      {
        source: "/imex-america-trade-show-las-vegas/",
        destination: "/upcoming-trade-show/imex-america-trade-show-las-vegas/",
        permanent: true,
      },
      {
        source: "/wvc-usa/",
        destination: "/upcoming-trade-show/wvc-usa/",
        permanent: true,
      },
      {
        source: "/ipc-apex-expo/",
        destination: "/upcoming-trade-show/ipc-apex-expo/",
        permanent: true,
      },
      {
        source: "/ippe/",
        destination: "/upcoming-trade-show/ippe/",
        permanent: true,
      },
      {
        source: "/iwce/",
        destination: "/upcoming-trade-show/iwce/",
        permanent: true,
      },
      {
        source: "/iaapa-attractions-expo/",
        destination: "/upcoming-trade-show/iaapa-attractions-expo/",
        permanent: true,
      },
      {
        source: "/issa-show/",
        destination: "/upcoming-trade-show/issa-show/",
        permanent: true,
      },
      {
        source: "/medical-design-manufacturing-west/",
        destination: "/upcoming-trade-show/medical-design-manufacturing-west/",
        permanent: true,
      },
      {
        source: "/palm-beach-boat-show/",
        destination: "/upcoming-trade-show/palm-beach-boat-show/",
        permanent: true,
      },
      {
        source: "/mine-expo-las-vegas/",
        destination: "/upcoming-trade-show/mine-expo-las-vegas/",
        permanent: true,
      },
      {
        source: "/toy-fai/",
        destination: "/upcoming-trade-show/toy-fair/",
        permanent: true,
      },
      {
        source: "/money-serving-financial-services/",
        destination: "/upcoming-trade-show/money-serving-financial-services/",
        permanent: true,
      },
      {
        source: "/cedia-expo-september/",
        destination: "/upcoming-trade-show/cedia-expo-september/",
        permanent: true,
      },
      {
        source: "/the-energy-expo/",
        destination: "/upcoming-trade-show/the-energy-expo/",
        permanent: true,
      },
      {
        source: "/ces-show-las-vegas-consumer-electronics-show/",
        destination: "/upcoming-trade-show/ces-show-las-vegas-consumer-electronics-show/",
        permanent: true,
      },
      {
        source: "/drinks-america/",
        destination: "/upcoming-trade-show/drinks-america/",
        permanent: true,
      },
      {
        source: "/cosmoprof-north-america/",
        destination: "/upcoming-trade-show/cosmoprof-north-america/",
        permanent: true,
      },
      {
        source: "/cphi-north-america/",
        destination: "/upcoming-trade-show/cphi-north-america/",
        permanent: true,
      },
      {
        source: "/seatrade-cruise-global/",
        destination: "/upcoming-trade-show/seatrade-cruise-global/",
        permanent: true,
      },
      {
        source: "/anime-expo/",
        destination: "/upcoming-trade-show/anime-expo/",
        permanent: true,
      },
      {
        source: "/idea-world/",
        destination: "/upcoming-trade-show/idea-world/",
        permanent: true,
      },
      {
        source: "/atx-west/",
        destination: "/upcoming-trade-show/atx-west/",
        permanent: true,
      },
      {
        source: "/plastec-west/",
        destination: "/upcoming-trade-show/plastec-west/",
        permanent: true,
      },
      {
        source: "/east-pack/",
        destination: "/upcoming-trade-show/east-pack/",
        permanent: true,
      },
      {
        source: "/atx-east/",
        destination: "/upcoming-trade-show/atx-east/",
        permanent: true,
      },
      {
        source: "/design-and-manufacturing-east/",
        destination: "/upcoming-trade-show/design-and-manufacturing-east/",
        permanent: true,
      },
      {
        source: "/electrify-expo/",
        destination: "/upcoming-trade-show/electrify-expo/",
        permanent: true,
      },
      {
        source: "/interwire/",
        destination: "/upcoming-trade-show/interwire/",
        permanent: true,
      },
      {
        source: "/process-expo/",
        destination: "/upcoming-trade-show/process-expo/",
        permanent: true,
      },
      {
        source: "/acc-expo/",
        destination: "/upcoming-trade-show/acc-expo/",
        permanent: true,
      },
      {
        source: "/isc-west/",
        destination: "/upcoming-trade-show/isc-west/",
        permanent: true,
      },
      {
        source: "/aaep-convention/",
        destination: "/upcoming-trade-show/aaep-convention/",
        permanent: true,
      },
      {
        source: "/nbaa-bace/",
        destination: "/upcoming-trade-show/nbaa-bace/",
        permanent: true,
      },
      {
        source: "/smilecon/",
        destination: "/upcoming-trade-show/smilecon/",
        permanent: true,
      },
      {
        source: "/international-baking-industry-exposition/",
        destination: "/upcoming-trade-show/international-baking-industry-exposition/",
        permanent: true,
      },
      {
        source: "/fastener-fair-usa/",
        destination: "/upcoming-trade-show/fastener-fair-usa/",
        permanent: true,
      },
      {
        source: "/mwc-las-vegas/",
        destination: "/upcoming-trade-show/mwc-las-vegas/",
        permanent: true,
      },
      {
        source: "/apartmentalize/",
        destination: "/upcoming-trade-show/apartmentalize/",
        permanent: true,
      },
      {
        source: "/hdaw/",
        destination: "/upcoming-trade-show/hdaw/",
        permanent: true,
      },
      {
        source: "/ispan/",
        destination: "/upcoming-trade-show/ispan/",
        permanent: true,
      },
      {
        source: "/move-conference/",
        destination: "/upcoming-trade-show/move-conference/",
        permanent: true,
      },
      {
        source: "/equip-exposition/",
        destination: "/upcoming-trade-show/equip-exposition/",
        permanent: true,
      },
      {
        source: "/money2020-vegas/",
        destination: "/upcoming-trade-show/money2020-vegas/",
        permanent: true,
      },
      {
        source: "/scte-cable-tec-expo/",
        destination: "/upcoming-trade-show/scte-cable-tec-expo/",
        permanent: true,
      },
      {
        source: "/atlanta-boat-show/",
        destination: "/upcoming-trade-show/atlanta-boat-show/",
        permanent: true,
      },
      {
        source: "/magic-new-york/",
        destination: "/upcoming-trade-show/magic-new-york/",
        permanent: true,
      },
      {
        source: "/raps-convergence/",
        destination: "/upcoming-trade-show/raps-convergence/",
        permanent: true,
      },
      {
        source: "/dsc-convention/",
        destination: "/upcoming-trade-show/dsc-convention/",
        permanent: true,
      },
      {
        source: "/avn-novelty-expo/",
        destination: "/upcoming-trade-show/avn-novelty-expo/",
        permanent: true,
      },
      {
        source: "/automate/",
        destination: "/upcoming-trade-show/automate/",
        permanent: true,
      },
      {
        source: "/semicon-west/",
        destination: "/upcoming-trade-show/semicon-west/",
        permanent: true,
      },
      {
        source: "/bar-and-restaurant-expo/",
        destination: "/upcoming-trade-show/bar-and-restaurant-expo/",
        permanent: true,
      },
      {
        source: "/uxdx/",
        destination: "/upcoming-trade-show/uxdx/",
        permanent: true,
      },
      {
        source: "/travel-and-adventure-show/",
        destination: "/upcoming-trade-show/travel-and-adventure-show/",
        permanent: true,
      },
      {
        source: "/woc/",
        destination: "/upcoming-trade-show/woc/",
        permanent: true,
      },
      {
        source: "/lmt-lab-day/",
        destination: "/upcoming-trade-show/lmt-lab-day/",
        permanent: true,
      },
      {
        source: "/american-coating-show/",
        destination: "/upcoming-trade-show/american-coating-show/",
        permanent: true,
      },
      {
        source: "/new-york-vet-show/",
        destination: "/upcoming-trade-show/new-york-vet-show/",
        permanent: true,
      },
      {
        source: "/jis-show/",
        destination: "/upcoming-trade-show/jis-show/",
        permanent: true,
      },
      {
        source: "/plma/",
        destination: "/upcoming-trade-show/plma/",
        permanent: true,
      },
      {
        source: "/aerospace-and-defense-supplier-summit/",
        destination: "/upcoming-trade-show/aerospace-and-defense-supplier-summit/",
        permanent: true,
      },
      {
        source: "/united-airlines-rock-n-roll/",
        destination: "/upcoming-trade-show/united-airlines-rock-n-roll/",
        permanent: true,
      },
      {
        source: "/satellite-conference-and-exhibition/",
        destination: "/upcoming-trade-show/satellite-conference-and-exhibition/",
        permanent: true,
      },
      {
        source: "/global-pet-expo/",
        destination: "/upcoming-trade-show/global-pet-expo/",
        permanent: true,
      },
      {
        source: "/specialty-coffee-expo/",
        destination: "/upcoming-trade-show/specialty-coffee-expo/",
        permanent: true,
      },
      {
        source: "/aiaa-defense-forum/",
        destination: "/upcoming-trade-show/aiaa-defense-forum/",
        permanent: true,
      },
      {
        source: "/fintech-meetup/",
        destination: "/upcoming-trade-show/fintech-meetup/",
        permanent: true,
      },
      {
        source: "/american-academy-of-audiology/",
        destination: "/upcoming-trade-show/american-academy-of-audiology/",
        permanent: true,
      },
      {
        source: "/spie-dss-defense/",
        destination: "/upcoming-trade-show/spie-dss-defense/",
        permanent: true,
      },
      {
        source: "/ace/",
        destination: "/upcoming-trade-show/ace/",
        permanent: true,
      },
      {
        source: "/acs-spring/",
        destination: "/upcoming-trade-show/acs-spring/",
        permanent: true,
      },
      {
        source: "/ancc-national-magnet-conference/",
        destination: "/upcoming-trade-show/ancc-national-magnet-conference/",
        permanent: true,
      },
      {
        source: "/impressions-expo/",
        destination: "/upcoming-trade-show/impressions-expo/",
        permanent: true,
      },
      {
        source: "/ofc-conference/",
        destination: "/upcoming-trade-show/ofc-conference/",
        permanent: true,
      },
      {
        source: "/asgct-annual-meeting/",
        destination: "/upcoming-trade-show/americas-food-and-beverage/",
        permanent: true,
      },
      {
        source: "/americas-food-and-beverage/",
        destination: "/upcoming-trade-show/americas-food-and-beverage/",
        permanent: true,
      },
      {
        source: "/fime/",
        destination: "/upcoming-trade-show/fime/",
        permanent: true,
      },
      {
        source: "/ieee/",
        destination: "/upcoming-trade-show/ieee/",
        permanent: true,
      },
      {
        source: "/et-seminar/",
        destination: "/upcoming-trade-show/et-seminar/",
        permanent: true,
      },
      {
        source: "/consensus/",
        destination: "/upcoming-trade-show/consensus/",
        permanent: true,
      },
      {
        source: "/vrma-spring/",
        destination: "/upcoming-trade-show/vrma-spring/",
        permanent: true,
      },
      {
        source: "/expo/",
        destination: "/upcoming-trade-show/expo/",
        permanent: true,
      },
      {
        source: "/atd/",
        destination: "/upcoming-trade-show/atd/",
        permanent: true,
      },
      {
        source: "/floriexpo/",
        destination: "/upcoming-trade-show/floriexpo/",
        permanent: true,
      },
      {
        source: "/aia-conference/",
        destination: "/upcoming-trade-show/aia-conference/",
        permanent: true,
      },
      {
        source: "/cine-gear-expo/",
        destination: "/upcoming-trade-show/cine-gear-expo/",
        permanent: true,
      },
      {
        source: "/ipmi-parking-mobility-conference-expo/",
        destination: "/upcoming-trade-show/ipmi-parking-mobility-conference-expo/",
        permanent: true,
      },
      {
        source: "/american-banker-digital-banking/",
        destination: "/upcoming-trade-show/american-banker-digital-banking/",
        permanent: true,
      },
      {
        source: "/comic-con/",
        destination: "/upcoming-trade-show/comic-con/",
        permanent: true,
      },
      {
        source: "/adha/",
        destination: "/upcoming-trade-show/adha/",
        permanent: true,
      },
      {
        source: "/adlm/",
        destination: "/upcoming-trade-show/adlm/",
        permanent: true,
      },
      {
        source: "/aaic/",
        destination: "/upcoming-trade-show/aaic/",
        permanent: true,
      },
      {
        source: "/texworld-usa/",
        destination: "/upcoming-trade-show/texworld-usa/",
        permanent: true,
      },
      {
        source: "/summer-market/",
        destination: "/upcoming-trade-show/summer-market/",
        permanent: true,
      },
      {
        source: "/iltacon/",
        destination: "/upcoming-trade-show/iltacon/",
        permanent: true,
      },
      {
        source: "/nacds-total-store-expo/",
        destination: "/upcoming-trade-show/nacds-total-store-expo/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/international-restaurant-foodservice-show/",
        destination: "/upcoming-trade-show/new-york-restaurant-show/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/the-atlanta-pet-expo/",
        destination: "/upcoming-trade-show/groomd/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/nab-show-las-vegas/",
        destination: "/upcoming-trade-show/nab-show/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/iaapa-attractions-expo/",
        destination: "/upcoming-trade-show/iaapa-expos/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/automotive-aftermarket-industry-week/",
        destination: "/upcoming-trade-show/aapex-expo/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/dema-exhibition-show-in-orange/",
        destination: "/upcoming-trade-show/dema-show/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/international-work-boat-show/",
        destination: "/upcoming-trade-show/international-workboat-show/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/world-of-concrete-immaculate-construction-machineries/",
        destination: "/upcoming-trade-show/woc/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/world-of-concrete-las-vegas/",
        destination: "/upcoming-trade-show/woc/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/radiological-society-of-north-america-rsna/",
        destination: "/upcoming-trade-show/rsna-chicago/",
        permanent: true,
      },
      {
        source: "/blog/how-to-find-the-best-exhibition-stand-builders-in-the-united-states/",
        destination: "/exhibition-stand-builders/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/gie-expo/",
        destination: "/upcoming-trade-show/equip-exposition/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/plastec-west/",
        destination: "/upcoming-trade-show/medical-design-manufacturing/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/atx-west/",
        destination: "/upcoming-trade-show/medical-design-manufacturing/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/west-pack-mdm/",
        destination: "/upcoming-trade-show/medical-design-manufacturing/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/east-pack/",
        destination: "/upcoming-trade-show/m-d-m-east/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/design-and-manufacturing-east/",
        destination: "/upcoming-trade-show/medical-design-manufacturing/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/ctia-super-mobility-week/",
        destination: "/upcoming-trade-show/mwc-las-vegas/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/fabtech-expo/",
        destination: "/upcoming-trade-show/fabtech/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/international-woodworking-fair/",
        destination: "/upcoming-trade-show/iwf/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/spi-new-orleans/",
        destination: "/upcoming-trade-show/solar-power-international/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/nbaa-trade-show/",
        destination: "/upcoming-trade-show/nbaa-bace/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/ada/",
        destination: "/upcoming-trade-show/smilecon/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/national-apartment-association/",
        destination: "/upcoming-trade-show/apartmentalize/",
        permanent: true,
      },
      {
        source: "/upcoming-trade-show/drinks-america/",
        destination: "/upcoming-trade-show/vinexpo/",
        permanent: true,
      },
      {
        source: "/blog/usa-top-trade-shows/",
        destination: "/blog/top-trade-shows-in-usa/",
        permanent: true,
      },
      {
        source: "/blog/upcoming-trade-shows-in-usa/",
        destination: "/blog/top-trade-shows-in-usa/",
        permanent: true,
      },
      {
        source: "/blog/top-5-upcoming-trade-show-in-usa/",
        destination: "/blog/top-trade-shows-in-usa/",
        permanent: true,
      },
      {
        source: "/blog/top-10-trade-shows-in-usa/",
        destination: "/blog/top-trade-shows-in-usa/",
        permanent: true,
      },
      {
        source: "/blog/top-5-upcoming-exhibitions-in-las-vegas/",
        destination: "/blog/biggest-trade-shows-las-vegas/",
        permanent: true,
      },
      {
        source: "/blog/top-5-trade-fairs-to-participate-in-las-vegas/",
        destination: "/blog/biggest-trade-shows-las-vegas/",
        permanent: true,
      },
      {
        source: "/exhibition-stand-builders/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/display-for-trade-shows/",
        destination: "/trade-show-booth-ideas/",
        permanent: true,
      },
      {
        source: "/undefined/",
        destination: "//",
        permanent: true,
      }

    ];
  },
};

export default nextConfig;
