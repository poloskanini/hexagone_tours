import HeroOverlayText from '../../components/HeroOverlayText'
import HeroSection from '../../components/HeroSection'
import { VanishText } from '../../components/VanishText'
import { ImageTrailHero } from '../../components/ImageTrailHero'
import FullscreenCarousel from '../../components/FullScreenCarousel'
import OppoScroll from '../../components/OppositeScrollContent'

export default function HomePage() {

  return (
    <main>
      <HeroOverlayText />
      <HeroSection />
      <VanishText />
      <FullscreenCarousel />
      <ImageTrailHero />
      <OppoScroll />
      <div className='h-[50vh] flex justify-content items-center'>
        <p className='text-center mx-auto text-2xl italic'>🚧 Suite en construction...</p>
      </div>
    </main>
  )
}
