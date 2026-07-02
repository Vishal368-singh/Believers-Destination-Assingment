import { programCards } from './bootcampData'

function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="section-shell">
        <div className="program-heading">
          <h2>
            Core<span>BTR</span> NEET PG T&D Bootcamp at Vidya Jeevan
          </h2>
          <h3>Starts From 28th May till 30th Aug 2026</h3>
          <p>3 Months offline Test & Discussion Program</p>
        </div>

        {/* Program cards are data-driven so fees, titles, and bullet points can be checked in one place. */}
        <div className="program-grid">
          {programCards.map((program) => (
            <article className="program-card" key={program.title}>
              <h3>{program.title}</h3>
              <p className="program-subtitle">{program.subtitle}</p>
              <ul>
                {program.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="fee">
                Fees: <span>{program.fee}</span>
              </p>
              <a href="#cta">Registration Closed</a>
            </article>
          ))}
        </div>

        <div className="notice-strip">
          <h3>Registrations will be on First come-first serve basis</h3>
          <p>
            Registration may close anytime without prior notice. No refund / No
            transfer after registration.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Programs
