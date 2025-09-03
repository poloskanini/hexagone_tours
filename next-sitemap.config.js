/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.hexagone-tours.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,

  // hreflang
  alternateRefs: [
    { href: 'https://www.hexagone-tours.com/fr', hreflang: 'fr' },
    { href: 'https://www.hexagone-tours.com/en', hreflang: 'en' },
  ],

  // Génère EXACTEMENT le robots.txt voulu (pas de Host:)
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://www.hexagone-tours.com/sitemap.xml',
    ],
  },

  // URLs à inclure
  transform: async (config, path) => {
    const priority = path === '/fr' || path === '/en' ? 1.0 : 0.7;
    return {
      loc: path, // next-sitemap préfixe avec siteUrl
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/fr'),
    await config.transform(config, '/en'),
    await config.transform(config, '/fr/mentions-legales'),
    await config.transform(config, '/fr/politique-de-confidentialite'),
    await config.transform(config, '/en/mentions-legales'),
    await config.transform(config, '/en/politique-de-confidentialite'),
  ],

  exclude: ['/404', '/500'],
};
