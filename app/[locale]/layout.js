import '../globals.css';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { locale } = await params;

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
  const url = 'https://hexagone-tours.com';
  const image = `${url}/imgs/poster_11zon.webp`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
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

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!['fr', 'en'].includes(locale)) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hexagone Tours",
            "url": "https://hexagone-tours.com",
            "logo": "https://hexagone-tours.com/favicon-512.png",
            "image": "https://hexagone-tours.com/imgs/poster_11zon.webp",
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
            ],
          }),
        }}
      />
      <main>{children}</main>
    </>
  );
}
