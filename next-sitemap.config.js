/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.hexagone-tours.com', // Domaine principal
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false, // Désactive la création de sitemap.xml

  // URLs alternatives pour hreflang
  alternateRefs: [
    {
      href: 'https://www.hexagone-tours.com/fr',
      hreflang: 'fr',
    },
    {
      href: 'https://www.hexagone-tours.com/en',
      hreflang: 'en',
    },
  ],

  // Transformation des URLs
  transform: async (config, path) => {
    const priority = path === '/fr' || path === '/en' ? 1.0 : 0.7;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },

  // Pages spécifiques à inclure (indispensable pour App Router)
  additionalPaths: async (config) => [
    await config.transform(config, '/fr'),
    await config.transform(config, '/en'),
    await config.transform(config, '/fr/mentions-legales'),
    await config.transform(config, '/fr/politique-de-confidentialite'),
    await config.transform(config, '/en/mentions-legales'),
    await config.transform(config, '/en/politique-de-confidentialite'),
  ],

  // Pages à ignorer
  exclude: ['/404', '/500'],
};
