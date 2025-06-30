import HeroOverlayText from '../../components/HeroOverlayText'
import HeroSection from '../../components/HeroSection'
import { VanishText } from '../../components/VanishText'
import FullscreenCarousel from '../../components/FullScreenCarousel'
import { ImageTrailHero } from '../../components/ImageTrailHero'
import OppoScroll from '../../components/OppositeScrollContent'
import TeamSection from '../../components/TeamSection'
// import RibbonLogos from '../../components/RibbonLogos'
import PartnersGrid from '../../components/PartnersGrid'
import MagnetButtonExample from '../../components/MagnetButton'
import HexagoneFooter from '../../components/Footer'

export default function HomePage() {

  return (
    <main>
      <HeroOverlayText />
      <HeroSection />
      <VanishText />
      <FullscreenCarousel />
      <ImageTrailHero />
      <OppoScroll />
      <TeamSection />
      {/* <RibbonLogos /> */}
      <PartnersGrid />
      <MagnetButtonExample />
      <HexagoneFooter />
    </main>
  )
}
