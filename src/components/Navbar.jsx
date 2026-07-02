function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="CoreBTR home">
        <span className="brand-mark">C</span>
        <span>
          Core<span>BTR</span>
        </span>
      </a>

      {/* Desktop navigation mirrors the reference page while mobile uses the compact menu icon. */}
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

export default Navbar
