import './globals.css'
import VideoBackground from '../components/VideoBackground'
import Header from '../components/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <VideoBackground />
        {children}
      </body>
    </html>
  )
}
