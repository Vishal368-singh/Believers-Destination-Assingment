function ParkingAndCta() {
  return (
    <>
      <section className="parking">
        <div className="parking-card">
          <span className="parking-icon" aria-hidden="true">
            !
          </span>
          <h3>Parking Information</h3>
          <h4>No On-Campus Parking</h4>
          <p>Parking facilities are not available within the Vidya Jeevan premises.</p>
          <h4>Parking at Your Own Risk</h4>
          <p>
            Vehicles parked outside the premises are solely the responsibility of
            their owners. Vidya Jeevan, its management and staff shall not be
            liable for any loss, theft, damage or other incidents.
          </p>
        </div>
      </section>

      <section className="cta" id="cta">
        <div>
          <span>Join the Bootcamp</span>
          <p>
            If you're ready to stop feeling lost and start seeing progress -
            this is where it begins.
          </p>
          <p>Start Your Transformation with CoreBTR Bootcamp</p>
          <a href="#top">Join the Bootcamp</a>
        </div>
      </section>
    </>
  )
}

export default ParkingAndCta
