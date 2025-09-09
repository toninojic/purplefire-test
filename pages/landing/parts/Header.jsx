import { useState, useEffect } from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/landing" className={styles.logo}>antic</Link>

        {/* desktop nav */}
        <nav className={styles.navDesktop} aria-label="Primary">
          <a href="#">Products</a>
          <a href="#">Rooms</a>
          <a href="#">Services</a>
          <a href="#">Inspirations</a>
        </nav>

        {/* hamburger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}

      {/* mobile menu */}
      {open && (
        <div className={`${styles.mobileMenu} ${styles.mobileMenuOpen}`} role="dialog" aria-modal="true">
          <nav className={styles.navMobile}>
            <a href="#" onClick={() => setOpen(false)}>Products</a>
            <a href="#" onClick={() => setOpen(false)}>Rooms</a>
            <a href="#" onClick={() => setOpen(false)}>Services</a>
            <a href="#" onClick={() => setOpen(false)}>Inspirations</a>
          </nav>
        </div>
      )}
    </header>
  )
}
