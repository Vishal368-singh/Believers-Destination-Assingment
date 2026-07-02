import { useEffect, useState } from 'react'

const navItems = [
  { href: '#top', label: 'Home' },
  { href: '#mentors', label: 'About Dr. ZV' },
  { href: '#programs', label: 'CoreBTR Offline' },
  { href: '#programs', label: 'CoreBTR Bootcamp' },
  { href: '#programs', label: 'Workbooks' },
  { href: '#programs', label: 'Buy New Plans', hasChevron: true },
  { href: '#programs', label: 'Schedules', hasChevron: true },
  { href: '#highlights', label: 'Reviews' },
  { href: '#cta', label: 'Blogs' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    globalThis.addEventListener('keydown', handleKeyDown)

    return () => globalThis.removeEventListener('keydown', handleKeyDown)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${menuOpen ? 'is-open' : ''}`}>
      <div className="navbar-logo">
        <a href="#top" aria-label="CoreBTR bootcamp home">
          <img alt="CoreBTR logo" src="/company-logo.webp" />
        </a>
      </div>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            <span>{item.label}</span>
            {item.hasChevron ? <span className="nav-chevron" aria-hidden="true" /> : null}
          </a>
        ))}
        <a href="#cta" className="login-link">
          Login/Signup
        </a>
      </nav>

      <button
        className={`menu-button ${menuOpen ? 'is-active' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <button
        className={`menu-backdrop ${menuOpen ? 'is-visible' : ''}`}
        type="button"
        aria-label="Close mobile navigation"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} id="mobile-menu">
        <nav className="mobile-nav-links" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              <span>{item.label}</span>
              {item.hasChevron ? <span className="mobile-chevron" aria-hidden="true" /> : null}
            </a>
          ))}
          <a href="#cta" className="mobile-login" onClick={closeMenu}>
            Login/Signup
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
