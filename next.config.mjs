/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirection /$ vers /
      {
        source: '/$',
        destination: '/',
        permanent: true,
      },
      // Redirection des www vers la version sans www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.hexagone-tours.com' }],
        destination: 'https://hexagone-tours.com/:path*',
        permanent: true,
      },
      // Redirection HTTP vers HTTPS (au cas où)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'hexagone-tours.com' }],
        destination: 'https://hexagone-tours.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
