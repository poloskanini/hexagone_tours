import HeroOverlayText from '../../components/HeroOverlayText'
import HeroSection from '../../components/HeroSection'
import { VanishText } from '../../components/VanishText'
import { ImageTrailHero } from '../../components/ImageTrailHero'
import FullscreenCarousel from '../../components/FullScreenCarousel'

export default function HomePage() {

  return (
    <main>
      <HeroOverlayText />
      <HeroSection />
      <VanishText />
      <FullscreenCarousel />
      <ImageTrailHero />
    </main>
  )
}
