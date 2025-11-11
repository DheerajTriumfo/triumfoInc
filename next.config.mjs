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
};

export default nextConfig;
