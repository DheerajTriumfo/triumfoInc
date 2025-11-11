/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['triumfous.mobel.us', 'triumfous.mobel.us'], // add your domain here
  },
  trailingSlash: true,
  async headers() {
    return [
      // ✅ Cache static assets aggressively (1 year, immutable)
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|ico|css|js|woff2|ttf|eot|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // ✅ Security headers (apply to all routes/pages)
      {
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
      // ✅ Update MIME types for font files
      {
        source: "/:all*(woff|woff2|ttf|eot|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
