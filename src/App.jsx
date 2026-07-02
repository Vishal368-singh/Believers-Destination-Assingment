import './App.css'

const mentorCards = [
  {
    name: 'Dr. Zainab Vora',
    description:
      'Mentor who guides students with clear concepts, smart strategy, and constant support to help them stay focused and succeed.',
    image:
      'https://cdn.dribbble.com/userupload/47178187/file/97918da2ccaa81da8481b22b60b4d074.jpg?w=400&h=500&fit=crop&crop=faces',
    color: '#1767be',
  },
  {
    name: 'Dr. Ravi Sharma',
    description:
      'Bringing calm, discipline, and mental strength to keep you grounded under pressure.',
    image:
      'https://cdn.dribbble.com/userupload/47178186/file/69fa3c9175036c06e72074ba55f6e82d.jpg?w=400&h=500&fit=crop&crop=faces',
    color: '#1d204b',
  },
  {
    name: 'Dr. Apurv Mehra',
    description:
      "Guiding you with resilience, focus, and real-world perspective. Because preparation isn't just academic.",
    image:
      'https://cdn.dribbble.com/userupload/47177977/file/93930f214f7f5feffa36f87aa9d58bd2.jpg?w=400&h=700&fit=crop&crop=faces',
    color: '#c47d00',
  },
]

const programCards = [
  {
    title: 'Program 1',
    subtitle: 'Live Classes + Personal Cubicle with Desktop for CBT / self study',
    fee: 'Rs 37,000',
    points: [
      'Subject wise computer based test followed by live discussion',
      'Grand Tests every 15 days followed by live discussion',
      'Weekly doubt solving sessions',
      'Daily Mini Tests on CBT Desktop',
      'Personal Desktop access for self study',
    ],
  },
  {
    title: 'Program 2',
    subtitle: 'Relay Classes + Personal Cubicle for self study (No desktop)',
    fee: 'Rs 32,000',
    points: [
      'Subject wise computer based test on desktop followed by relay discussion',
      'GT every 15 days followed by discussion through relay',
      'Weekly doubt solving sessions through relay',
      'Daily Mini Tests on own device',
      'Personal cubicle space for self study (No desktop)',
    ],
  },
]

const differenceCards = [
  ['01', 'Not Just Lectures', 'A Complete System', 'Daily testing, analysis and revision keeps the preparation moving.'],
  ['02', 'Specific Focus', 'Exam-Specific Focus', 'Designed for NEET PG, INI-CET and FMGE, not a generic crash course.'],
  ['03', 'Day-by-Day Schedule', 'Accountability & Discipline', 'A structured routine keeps procrastination away and ensures completion.'],
  ['04', 'Mentorship Driven', 'Mental Conditioning', 'Strategy, consistency and mindset are treated as part of the program.'],
  ['05', 'End-to-End Prep', 'Concepts to Practice', 'Concepts, PYQs, GTs and rapid revision are covered under one roof.'],
]

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="CoreBTR home">
        <span className="brand-mark">C</span>
        <span>
          Core<span>BTR</span>
        </span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#about">Home</a>
        <a href="#programs">Courses</a>
        <a href="#mentors">About Dr. ZV</a>
        <a href="#programs">CoreBTR Bootcamp</a>
        <a href="#cta" className="login-link">
          Login/Signup
        </a>
      </nav>
      <button className="menu-button" type="button" aria-label="Open menu">
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="top" aria-label="CoreBTR Bootcamp hero">
      <div className="hero-bg" />
      <div className="hero-person">
        <img
          src="https://cdn.dribbble.com/userupload/47126326/file/a48085bc495e7b166b68b527cfcd1c4b.png"
          alt="Dr. Zainab Vora"
        />
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
      <p className="hero-tagline">Crack the exam. Own the rank.</p>
    </section>
  )
}

function Intro() {
  return (
    <section className="intro" id="about">
      <div className="section-shell center-copy">
        <h2>
          Core<span>BTR</span> Bootcamp
        </h2>
        <h3>Learn with Dr. Zainab Vora. Transform with the System.</h3>
        <p>
          This is where concepts finally make sense. Where revision becomes
          structured and where your preparation starts moving in the right
          direction. At CoreBTR Bootcamp, you learn directly under Dr. Zainab
          Vora with a system designed to help you stay consistent, focused, and
          exam-ready.
        </p>
      </div>
    </section>
  )
}

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

function Highlights() {
  return (
    <section className="highlights">
      <div className="section-shell highlight-grid">
        <div className="highlight-image">
          <img
            src="https://cdn.dribbble.com/userupload/47178593/file/1bfaa70f0c6507317a6cb8d3c9100c74.png"
            alt="CoreBTR bootcamp classroom"
          />
          <p>
            Learn The BTR Way: <span>19 Subjects | System-Wise | High-Yield</span>
          </p>
        </div>
        <div className="highlight-copy">
          <span className="eyebrow">Concepts. Clarity. Confidence.</span>
          <h2>This is the BTR approach.</h2>
          <p>
            With Dr. Zainab Vora, learning is not about memorizing more. It is
            about understanding better, simplifying complex topics and building
            recall for real exam pressure.
          </p>
          <ul>
            <li>High-yield focus for NEET PG, INI-CET & FMGE</li>
            <li>System-wise structured preparation</li>
            <li>Built for retention, recall and exam temperament</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

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
          {differenceCards.map(([number, tag, title, desc]) => (
            <article className="difference-card" key={number}>
              <strong>{number}</strong>
              <div>
                <span>{tag}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
          <div className="quote-banner">
            <p>
              At CoreBTR Bootcamp - <strong>We guide you all the way until you achieve your goal</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

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
          <p>If you're ready to stop feeling lost and start seeing progress - this is where it begins.</p>
          <p>Start Your Transformation with CoreBTR Bootcamp</p>
          <a href="#top">Join the Bootcamp</a>
        </div>
      </section>
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="brand footer-brand">
        <span className="brand-mark">C</span>
        <span>
          Core<span>BTR</span>
        </span>
      </div>
      <p>(c) 2026 CoreBTR, All rights reserved.</p>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Programs />
        <Highlights />
        <Mentors />
        <Difference />
        <ParkingAndCta />
      </main>
      <Footer />
    </>
  )
}

export default App
