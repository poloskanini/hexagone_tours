// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // non-www -> www (ne s'applique qu'en prod via le host)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'hexagone-tours.com' }],
        destination: 'https://www.hexagone-tours.com/:path*',
        permanent: true,
      },
      // / -> /fr : permanent en prod, temporaire (307) en dev
      {
        source: '/',
        destination: '/fr',
        permanent: isProd,       // 308/301 en prod
      },
    ];
  },
};

export default nextConfig;
