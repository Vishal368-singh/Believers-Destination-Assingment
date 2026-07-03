const heroImage =
  'https://cdn.dribbble.com/userupload/47126326/file/a48085bc495e7b166b68b527cfcd1c4b.png'

function Hero() {
  return (
    <section className="hero-section" id="top" aria-label="CoreBTR Bootcamp hero">
      <div className="hero-bg" />

      {/* Layered hero content keeps the cinematic image, title, and CTA independently tunable. */}
      <div className="hero-person">
        <img src={heroImage} alt="Dr. Zainab Vora" />
      </div>

      <div className="hero-title">
        <span className="hero-main">
          CoreBTR
          <br />
          BOOTCAMP
        </span>
        <span className="hero-place">at Vidya Jeevan, Greater Noida</span>
      </div>

      <div className="hero-copy">
        <span className="hero-by">by</span>
        <h1>Dr. Zainab Vora</h1>
        <p>
          When concepts click
          <br />
          everything changes
        </p>
        <strong>
          Registration closed for
          <br />
          NEET PG Bootcamp
        </strong>
      </div>

    </section>
  )
}

export default Hero
