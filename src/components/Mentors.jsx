import { mentorCards } from './bootcampData'

function Mentors() {
  return (
    <section className="mentors" id="mentors">
      <div className="section-shell">
        <div className="section-heading">
          <span>Meet Your Mentors</span>
          <h2>
            Mentorship That Keeps
            <br />
            You <em>Steady</em>
          </h2>
          <p>
            Guided by Dr. Zainab Vora along with Dr. Ravi Sharma and Dr. Apurv
            Mehra, you stay consistent, focused and steady through every phase.
          </p>
        </div>

        {/* The accent CSS variable allows each mentor card to keep its own brand color. */}
        <div className="mentor-grid">
          {mentorCards.map((mentor) => (
            <article
              className="mentor-card"
              key={mentor.name}
              style={{ '--accent': mentor.color }}
            >
              <img src={mentor.image} alt={mentor.name} />
              <div>
                <span />
                <h3>{mentor.name}</h3>
                <p>{mentor.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mentors
