/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  base-uri 'self';
  object-src 'none';
  frame-ancestors 'none';
  form-action 'self';
  connect-src 'self' https://www.hotellanghemonferrato.com https://hotellanghemonferrato.com https://guida.hotellanghemonferrato.com https://challenges.cloudflare.com;
  script-src 'self' 'unsafe-inline' https://www.hotellanghemonferrato.com https://hotellanghemonferrato.com https://guida.hotellanghemonferrato.com https://cdnjs.cloudflare.com https://challenges.cloudflare.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com;
  img-src 'self' data: blob: https:;
  font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com;
  frame-src 'self' https://guida.hotellanghemonferrato.com https://challenges.cloudflare.com https://www.google.com;
  upgrade-insecure-requests;
`;

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'guida.hotellanghemonferrato.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 anno — immagini ottimizzate restano in cache CDN
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\n/g, '') },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
        ],
      },
      {
        // Cache aggressiva per font e immagini statiche (1 anno)
        source: '/foto/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache per i file Next.js ottimizzati
        source: '/_next/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
