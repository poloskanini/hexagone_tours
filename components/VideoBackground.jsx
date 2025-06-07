export default function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-[90vh] z-0 overflow-hidden rounded-br-[110px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/hero-hexagone-sm2.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
