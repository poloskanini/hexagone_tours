/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Forcer non-www -> www (géré déjà côté Vercel, mais on le garde pour cohérence)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'hexagone-tours.com' }],
        destination: 'https://www.hexagone-tours.com/:path*',
        permanent: true, // 301
      },
      // Forcer / -> /fr en 301 permanent
      {
        source: '/',
        destination: '/fr',
        permanent: true, // 301 permanent (au lieu de 307)
      },
    ];
  },
};

export default nextConfig;
