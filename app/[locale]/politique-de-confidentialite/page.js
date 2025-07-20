import getTranslations from "../../../lib/getTranslations";
import HexagoneFooter from "../../../components/Footer";

export const metadata = {
  title: "Politique de confidentialité - Hexagone Tours",
  description: "Politique de confidentialité du site Hexagone Tours",
};

export default async function PolitiqueConfidentialitePage({ params }) {
  const { locale } = await params; // ✅ Attendre params
  const t = getTranslations(locale);

  // On supprime les ** éventuels
  const cleanContent = t.privacy.content.replace(/\*\*/g, "");

  return (
    <>
      <main className="bg-white text-secondary min-h-screen pt-32 pb-20">
        {/* Section titre */}
        <section className="relative py-20 px-6 sm:px-12 md:px-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-medium mb-10 leading-tight text-center text-primary">
            {t.privacy.title}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-16" />
        </section>

        {/* Section contenu */}
        <section className="px-6 sm:px-12 md:px-20 max-w-4xl mx-auto">
          <div className="prose whitespace-pre-line text-lg leading-relaxed font-light text-secondary">
            {cleanContent}
          </div>
        </section>
      </main>
      
      <HexagoneFooter />
    </>
  );
}
