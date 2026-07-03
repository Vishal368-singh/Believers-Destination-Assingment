import { useEffect, useRef, useState } from 'react'

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

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 4.8v14.4L16.8 12 4.5 4.8Z" />
      <path d="M16.8 12 20 13.9a1 1 0 0 1 0 1.7l-3.2 1.9V12Z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.2 4.2c-.8.1-1.8.6-2.3 1.3-.5.6-.9 1.5-.7 2.4.9.1 1.8-.4 2.4-1 .6-.6 1-1.5.6-2.7Z" />
      <path d="M18.2 13.2c0-2 1.6-3 1.7-3.1-1-.7-2.5-1-3.5-1-.1 0-1.8 0-2.9.9-1.2.8-1.6 1.9-1.6 1.9s-.5-1.5-1.8-2.3c-.8-.5-1.8-.6-2.3-.6-.9 0-2.2.3-3.3 1.1 0 0 1.7 1.1 1.7 3.3 0 2.5-2.1 4.1-2.1 4.1.9 1.3 2.1 2.4 3.7 2.4 1.1 0 1.8-.6 2.9-.6 1.1 0 1.7.6 2.8.6 1.8 0 3-1.1 4-2.7-.1 0-2-.8-2-3.3Z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

function AppQrArt() {
  const cells = Array.from({ length: 21 }, (_, row) =>
    Array.from({ length: 21 }, (_, col) => {
      const inFinder =
        (row < 7 && col < 7) ||
        (row < 7 && col > 13) ||
        (row > 13 && col < 7)

      if (inFinder) {
        const ring = row === 0 || row === 6 || col === 0 || col === 6 || row === 14 || col === 14
        const center = row >= 2 && row <= 4 && col >= 2 && col <= 4
        return ring || center
      }

      return ((row * 7 + col * 11 + row + col) % 5 === 0) || (row % 3 === 0 && col % 4 === 0)
    }),
  )

  return (
    <div className="footer-qr" aria-hidden="true">
      {cells.flatMap((row, rowIndex) =>
        row.map((isDark, colIndex) => (
          <span
            key={`${rowIndex}-${colIndex}`}
            className={isDark ? 'is-dark' : ''}
            style={{ gridRow: rowIndex + 1, gridColumn: colIndex + 1 }}
          />
        )),
      )}
    </div>
  )
}

function Footer() {
  const [popupType, setPopupType] = useState(null)
  const [isPopupClosing, setIsPopupClosing] = useState(false)
  const closeTimerRef = useRef(null)

  const openPopup = (type) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }

    setPopupType(type)
    setIsPopupClosing(false)
  }

  const closePopup = () => {
    if (!popupType || isPopupClosing) {
      return
    }

    setIsPopupClosing(true)
    closeTimerRef.current = setTimeout(() => {
      setPopupType(null)
      setIsPopupClosing(false)
      closeTimerRef.current = null
    }, 220)
  }

  useEffect(() => {
    document.body.style.overflow = popupType ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [popupType])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closePopup()
      }
    }

    globalThis.addEventListener('keydown', handleKeyDown)

    return () => globalThis.removeEventListener('keydown', handleKeyDown)
  }, [popupType, isPopupClosing])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  const isPopupOpen = popupType !== null

  return (
    <footer className="footer" id="cta">
      {isPopupOpen ? (
        <dialog
          className={`footer-popup-backdrop is-${popupType} ${isPopupClosing ? 'is-closing' : 'is-open'}`}
          open
          aria-label={popupType === 'app' ? 'Get the app popup' : 'CoreBTR chat popup'}
          onCancel={(event) => {
            event.preventDefault()
            closePopup()
          }}
        >
          <section className={`footer-popup ${popupType === 'app' ? 'is-app' : 'is-chat'} ${isPopupClosing ? 'is-closing' : 'is-open'}`}>
            <button type="button" className="footer-popup-close" aria-label="Close popup" onClick={closePopup}>
              <CloseIcon />
            </button>

            {popupType === 'app' ? (
              <>
                <p className="footer-popup-kicker">Scan to get the</p>
                <h2>CoreBTR App</h2>
                <div className="footer-popup-qr-card">
                  <AppQrArt />
                </div>
                <p className="footer-popup-helper">Point your camera at the QR code</p>
                <div className="footer-popup-divider">
                  <span />
                  <strong>OR</strong>
                  <span />
                </div>
                <div className="footer-popup-stores">
                  <a href="#top" className="footer-store-button">
                    <AppleIcon />
                    <span>App Store</span>
                  </a>
                  <a href="#top" className="footer-store-button">
                    <PlayIcon />
                    <span>Google Play</span>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="footer-chat-header">
                  <div className="footer-chat-avatar" aria-hidden="true">
                    <span>?</span>
                  </div>
                  <div>
                    <p className="footer-popup-kicker">CoreBTR</p>
                    <h2>How can we help you?</h2>
                  </div>
                </div>
                <p className="footer-chat-note">Hi. Welcome to CoreBTR. Choose a topic or type your message below.</p>
                <div className="footer-chat-pills" aria-label="Common support topics">
                  {['New Enrolment', 'General Enquiry', 'Hardcopy Notes Enquiry', 'Audio & Video Issue', 'In App PDF Not Opening', 'Check Device Policy', 'GTs & Tests Issue'].map(
                    (item) => (
                      <button key={item} type="button" className="footer-chat-pill">
                        {item}
                      </button>
                    ),
                  )}
                </div>
                <label className="footer-chat-input">
                  <span className="sr-only">Type your message</span>
                  <input type="text" placeholder="Type your message..." />
                  <button type="button">Send</button>
                </label>
              </>
            )}
          </section>
        </dialog>
      ) : null}

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

        <button type="button" className="footer-app-button" aria-label="Get the app" onClick={() => openPopup('app')}>
          <PhoneIcon />
          <span>Get The App</span>
          <span aria-hidden="true" className="footer-app-arrow">
            &lt;
          </span>
        </button>
      </div>

      <div className="footer-bottom">
        <button type="button" className="footer-interest" onClick={() => openPopup('app')}>
          Interested in CoreBTR ?
        </button>
        <p>
          © 2026 CoreBTR, All rights reserved. |{' '}
          <span>Designed &amp; Managed By:</span> Believers Destination Pvt Ltd
        </p>
        <button type="button" className="footer-chat" onClick={() => openPopup('chat')}>
          <ChatIcon />
          <span>Ask Me Anything</span>
        </button>
      </div>
    </footer>
  )
}

export default Footer
