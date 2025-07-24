import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-10">
      <h1 className="text-5xl font-bold text-primary mb-6">404 – Page non trouvée</h1>
      <p className="text-lg text-gray-600 mb-8">
        Désolé, la page que vous recherchez n`&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
      >
        Retour à l`&apos;accueil
      </Link>
    </main>
  );
}
