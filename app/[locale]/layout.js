import '../globals.css';

export async function generateMetadata({ params }) {
  const { locale } = await params;
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
      icon: '/favicon.ico',
      apple: '/favicon.ico',
      shortcut: '/favicon.ico',
    },
    manifest: '/site.webmanifest',
  };
}

export default function LocaleLayout({ children }) {
  return <main>{children}</main>;
}
