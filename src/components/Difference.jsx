import { differenceCards } from './bootcampData'

function Difference() {
  return (
    <section className="difference">
      <div className="section-shell">
        <div className="section-heading compact">
          <span>What's Inside</span>
          <h2>
            What Makes It <em>Different</em>
            <br />
            From Other Offline Classes
          </h2>
        </div>

        <div className="difference-grid">
          {differenceCards.map(({ number, tag, title, description }) => (
            <article className="difference-card" key={number}>
              <strong>{number}</strong>
              <div>
                <span>{tag}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}

          <div className="quote-banner">
            <p>
              At CoreBTR Bootcamp -{' '}
              <strong>We guide you all the way until you achieve your goal</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Difference
