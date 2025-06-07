import '../globals.css'
import VideoBackground from '../../components/VideoBackground'

export function generateMetadata({ params }) {
  return {
    title: 'HEXAGONE',
  }
}

export default function LocaleLayout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
