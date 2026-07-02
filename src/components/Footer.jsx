const footerGroups = [
  {
    title: 'Explore',
    links: ['Home', 'Blogs', 'Reviews', 'Gallery'],
  },
  {
    title: 'Study Resources',
    links: ['Workbooks', 'CoreBTR Offline', 'CoreBTR Bootcamp'],
  },
  {
    title: 'Plans & Purchases',
    links: ['Solo Plans', 'Group Plans', 'Shipping & Delivery', 'Cancellation & Refund'],
  },
  {
    title: 'Support',
    links: ['Contact Us', "FAQ's", 'Device Policy'],
  },
  {
    title: 'Legal & Updates',
    links: ['Privacy Policy', 'Terms & Conditions', 'Fair Usage Policy', 'Newsletter'],
  },
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.8" cy="7.2" r="1" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.8 8.4c.2-1.2 1.1-2 2.3-2.2 2.9-.3 6.9-.3 9.8 0 1.2.2 2.1 1 2.3 2.2.3 2.1.3 5.1 0 7.2-.2 1.2-1.1 2-2.3 2.2-2.9.3-6.9.3-9.8 0-1.2-.2-2.1-1-2.3-2.2-.3-2.1-.3-5.1 0-7.2Z" />
      <path d="m10.5 9.4 4.2 2.6-4.2 2.6V9.4Z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M10.5 17.5h3" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 11.5a7.5 7.5 0 0 1-11.6 6.3L4 19l1.2-4.1A7.5 7.5 0 1 1 20 11.5Z" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand-panel">
          <a href="#top" className="footer-logo" aria-label="CoreBTR home">
            <img src="/company-logo.webp" alt="CoreBTR" />
          </a>

          <div className="footer-socials" aria-label="CoreBTR social links">
            <a href="#top" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#top" aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {footerGroups.map((group) => (
            <div className="footer-column" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <a href="#top" className="footer-app-button" aria-label="Get the app">
          <PhoneIcon />
          <span>Get The App</span>
          <span aria-hidden="true" className="footer-app-arrow">
            &lt;
          </span>
        </a>
      </div>

      <div className="footer-bottom">
        <a href="#cta" className="footer-interest">
          Interested in CoreBTR ?
        </a>
        <p>
          © 2026 CoreBTR, All rights reserved. |{' '}
          <span>Designed &amp; Managed By:</span> Believers Destination Pvt Ltd
        </p>
        <a href="#cta" className="footer-chat">
          <ChatIcon />
          <span>Ask Me Anything</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
