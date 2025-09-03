// app/[locale]/layout.js
import '../globals.css';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }) {
  const { locale } = params;

  if (!['fr', 'en'].includes(locale)) {
    notFound();
  }

  const descriptions = {
    fr: "Hexagone Tours est une agence événementielle basée à Paris, spécialisée dans les séminaires, incentives et voyages d'affaires sur mesure.",
    en: "Hexagone Tours is an event agency based in Paris, specialized in seminars, incentives, and tailor-made business trips.",
  };

  const title =
    locale === 'en'
      ? 'Hexagone Tours - Travel Agency'
      : 'Hexagone Tours - Agence de Voyages';

  const description = descriptions[locale] || descriptions.fr;

  const base = 'https://www.hexagone-tours.com';
  const canonical = `${base}/${locale}`;
  const image = `${base}/imgs/poster_11zon.webp`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: `${base}/fr`,
        en: `${base}/en`,
        'x-default': `${base}/fr`, // optionnel : vers ta locale par défaut
      },
    },
    openGraph: {
      title,
      description,
      url: canonical, // <= une seule clé, localisée
      siteName: 'Hexagone Tours',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Hexagone Tours',
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    icons: {
      icon: [
        { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
        { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: '/favicon-192.png',
      shortcut: '/favicon-32.png',
    },
    manifest: '/site.webmanifest',
  };
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;

  if (!['fr', 'en'].includes(locale)) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        // ⚠️ tout en "www"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hexagone Tours",
            "url": "https://www.hexagone-tours.com",
            "logo": "https://www.hexagone-tours.com/favicon-512.png",
            "image": "https://www.hexagone-tours.com/imgs/poster_11zon.webp",
            "description":
              "Hexagone Tours est une agence événementielle basée à Paris, spécialisée dans les séminaires, incentives et voyages d'affaires sur mesure.",
            "telephone": "+33-1-42-50-42-50",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "86, boulevard de l'Hôpital",
              "addressLocality": "Paris",
              "postalCode": "75013",
              "addressCountry": "FR"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+33-1-42-50-42-50",
                "contactType": "customer service",
                "areaServed": ["FR", "EN"],
                "availableLanguage": ["French", "English"]
              }
            ]
          }),
        }}
      />
      <main>{children}</main>
    </>
  );
}
