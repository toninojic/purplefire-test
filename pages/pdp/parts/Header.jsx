import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

export default function Header() {
  const [cartCount] = useState(0)

  return (
    <header className={styles.header}>
      {/* TOPBAR (desktop) */}
      <div className={styles.topbar}>
        <div className={styles.topLeft}>Welcome to Needus &amp; Get the best product</div>
        <div className={styles.topRight}>
          <button className={styles.topBtn} aria-label="Language">ENG ▾</button>
          <span className={styles.pipe} />
          <button className={styles.topBtn} aria-label="Currency">USD ▾</button>
        </div>
      </div>

      {/* MIDBAR (desktop) */}
      <div className={styles.midbar}>
        <Link to="/pdp" className={styles.logo}>Needus<span className={styles.dot}>.</span></Link>

        <form className={styles.searchWrap} role="search" onSubmit={(e) => e.preventDefault()}>
          <input className={styles.searchInput} placeholder="Search Products" aria-label="Search products" />
          <button className={styles.searchBtn} aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button type="button" className={styles.catBtn} aria-haspopup="listbox" aria-expanded="false">
            All Categories ▾
          </button>

          <div className={styles.auth}>
            <a href="#">Login</a>
            <a href="#">Signup</a>
          </div>
        </form>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Wishlist">
            {/* heart */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 20s-8-5.2-8-10.1C4 7.1 5.9 5 8.3 5 9.9 5 11 6 12 7c1-1 2.1-2 3.7-2 2.4 0 4.3 2.1 4.3 4.9C20 14.8 12 20 12 20z"
                stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          </button>

          <button className={`${styles.iconBtn} ${styles.cartBtn}`} aria-label="Cart">
            {/* cart */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="9" cy="20" r="1.5" fill="currentColor"></circle>
              <circle cx="17" cy="20" r="1.5" fill="currentColor"></circle>
              <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L22 8H7" stroke="currentColor" strokeWidth="1.6" fill="none"/>
            </svg>
            <span className={styles.badge}>{cartCount}</span>
          </button>
        </div>
      </div>

      {/* NAVBAR (desktop) */}
      <div className={styles.navbar}>
        <button className={styles.allCats}>
          <span className={styles.burger} aria-hidden="true">
            <span /><span /><span />
          </span>
          <span>All Categories</span>
          <span className={styles.caret}>▾</span>
        </button>

        <nav className={styles.mainnav} aria-label="Main">
          <a href="#">Home <span className={styles.caretSmall}>▾</span></a>
          <a href="#">About <span className={styles.caretSmall}>▾</span></a>
          <a href="#" className={styles.active}>Product <span className={styles.caretSmall}>▾</span></a>
          <a href="#">Pages <span className={styles.caretSmall}>▾</span></a>
          <a href="#">Contact <span className={styles.caretSmall}>▾</span></a>
        </nav>

        <div className={styles.contact}>
          <span className={styles.headset} aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2" stroke="#e23b1f" strokeWidth="2"/>
              <path d="M4 12v5a2 2 0 0 0 2 2h2" stroke="#e23b1f" strokeWidth="2"/>
            </svg>
          </span>
          <div className={styles.contactText}>
            <small>CONTACT US 24/7</small>
            <a href="tel:+12012987481">+12012987481</a>
          </div>
        </div>
      </div>

      {/* MOBILE BAR */}
      <div className={styles.mobileBar}>
        <button className={styles.mobileHamburger} aria-label="Open menu">
          <span /><span /><span />
        </button>

        <Link to="/pdp" className={styles.mobileLogo}>Needus<span className={styles.dot}>.</span></Link>

        <div className={styles.mobileIcons}>
          <button className={styles.iconBtn} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button className={styles.iconBtn} aria-label="Account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
              <path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          <button className={styles.iconBtn} aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 20s-8-5.2-8-10.1C4 7.1 5.9 5 8.3 5 9.9 5 11 6 12 7c1-1 2.1-2 3.7-2 2.4 0 4.3 2.1 4.3 4.9C20 14.8 12 20 12 20z"
                stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          </button>
          <button className={`${styles.iconBtn} ${styles.cartBtn}`} aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="9" cy="20" r="1.5" fill="currentColor"></circle>
              <circle cx="17" cy="20" r="1.5" fill="currentColor"></circle>
              <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L22 8H7"
                stroke="currentColor" strokeWidth="1.6" fill="none"/>
            </svg>
            <span className={styles.badge}>{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
 