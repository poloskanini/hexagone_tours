import '../globals.css'

export function generateMetadata({ params }) {
  return {
    title: 'Hexagone Tours - Agence de Voyage',
  }
}

export default function LocaleLayout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}