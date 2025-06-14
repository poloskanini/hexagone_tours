import HeroOverlayText from '../../components/HeroOverlayText'
import HeroSection from '../../components/HeroSection'
import { ImageTrailHero } from '../../components/ImageTrailHero'
import FullscreenCarousel from '../../components/FullScreenCarousel'

export default function HomePage() {
  return (
    <main>
      <HeroOverlayText />
      <HeroSection />
      <FullscreenCarousel />
      <ImageTrailHero />
    </main>
  )
}
