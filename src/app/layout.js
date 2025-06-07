import './globals.css'
import Header from '@/components/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />

        <main className='pt-50'>{children}</main>

      </body>
    </html>
  )
}
