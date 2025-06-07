import '../globals.css'
import Header from '../../components/Header'

export function generateMetadata({ params }) {
  return {
    title: 'HEXAGONE',
  }
}

export default function LocaleLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
