import '../globals.css';

export function generateMetadata({ params }) {
  const { locale } = params;
  const descriptions = {
    fr: "Hexagone Tours est une agence événementielle basée à Paris, spécialisée dans les séminaires, incentives et voyages d'affaires sur mesure.",
    en: "Hexagone Tours is an event agency based in Paris, specialized in seminars, incentives, and tailor-made business trips.",
  };

  return {
    title: locale === 'en'
      ? 'Hexagone Tours - Travel Agency'
      : 'Hexagone Tours - Agence de Voyage',
    description: descriptions[locale] || descriptions.fr,
  };
}

export default function LocaleLayout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
