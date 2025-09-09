import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import {
  BurgerMenu,
  CaretDown,
  SearchIcon,
  WishlistIcon,
  CartIcon,
  AccountIcon,
  HeadsetIcon,
} from './components/Icons';

const NAV_ITEMS = [
  { label: 'Home' },
  { label: 'About' },
  { label: 'Product' },
  { label: 'Pages' },
  { label: 'Contact' },
].map((it) => ({
  ...it,
  sub: Array.from({ length: 5 }, (_, i) => ({ label: `Category ${i + 1}`, href: '#' })),
}));

export default function Header() {
  const [cartCount] = useState(0);

  // mobile menu state
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({}); // {Home:true, ...}

  // lock body scroll when menu is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  const toggleItem = (label) =>
    setExpanded((s) => ({ ...s, [label]: !s[label] }));

  return (
    <header className={styles.header}>
      {/* TOPBAR (desktop) */}
      <div className={styles.topbar}>
        <div className={styles.topLeft}>Welcome to Needus &amp; Get the best product</div>
        <div className={styles.topRight}>
          <button className={styles.topBtn} aria-label="Language">
            ENG <CaretDown />
          </button>
          <span className={styles.pipe} />
          <button className={styles.topBtn} aria-label="Currency">
            USD <CaretDown />
          </button>
        </div>
      </div>

      {/* MIDBAR (desktop) */}
      <div className={styles.midbar}>
        <Link to="/pdp" className={styles.logo}>Needus<span className={styles.dot}>.</span></Link>

        <form className={styles.searchWrap} role="search" onSubmit={(e) => e.preventDefault()}>
          <input className={styles.searchInput} placeholder="Search Products" aria-label="Search products" />
          <button className={styles.searchBtn} aria-label="Search">
            <SearchIcon />
          </button>
          <button type="button" className={styles.catBtn} aria-haspopup="listbox" aria-expanded="false">
            All Categories <CaretDown />
          </button>

          <div className={styles.auth}>
            <a href="#">Login</a>
            <a href="#">Signup</a>
          </div>
        </form>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Wishlist">
            <WishlistIcon />
          </button>

          <button className={`${styles.iconBtn} ${styles.cartBtn}`} aria-label="Cart">
            <CartIcon />
            <span className={styles.badge}>{cartCount}</span>
          </button>
        </div>
      </div>

      {/* NAVBAR (desktop) */}
      <div className={styles.navbar}>
        {/* All Categories + hover dropdown */}
        <div className={styles.allCatsWrap}>
          <button className={styles.allCats}>
            <span className={styles.burger} aria-hidden="true">
              <BurgerMenu />
            </span>
            <span>All Categories</span>
            <span className={styles.caret}>
              <CaretDown />
            </span>
          </button>

          {/* dropdown for All Categories (desktop hover) */}
          <div className={styles.catDropdown} role="menu">
            <ul>
              {Array.from({ length: 8 }, (_, i) => (
                <li key={`ac-${i}`}><a href="#">All Cat {i + 1}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* main nav with hover submenus */}
        <nav className={styles.mainnav} aria-label="Main">
          {NAV_ITEMS.map((it) => (
            <div key={it.label} className={styles.navItem}>
              <a href="#" className={it.active ? styles.active : undefined}>
                {it.label} <span className={styles.caretSmall}><CaretDown /></span>
              </a>

              {/* desktop hover submenu */}
              <div className={styles.dropdown} role="menu">
                <ul>
                  {it.sub.map((s) => (
                    <li key={s.label}><a href={s.href}>{s.label}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>

        <div className={styles.contact}>
          <span className={styles.headset} aria-hidden="true"><HeadsetIcon /></span>
          <div className={styles.contactText}>
            <small>CONTACT US 24/7</small>
            <a href="tel:+12012987481">+12012987481</a>
          </div>
        </div>
      </div>

      {/* MOBILE BAR */}
      <div className={styles.mobileBar}>
        <button
          className={styles.mobileHamburger}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen(true)}
        >
          <span /><span /><span />
        </button>

        <Link to="/pdp" className={styles.mobileLogo}>Needus<span className={styles.dot}>.</span></Link>

        <div className={styles.mobileIcons}>
          <button className={styles.iconBtn} aria-label="Search"><SearchIcon size={20} /></button>
          <button className={styles.iconBtn} aria-label="Account"><AccountIcon size={20} /></button>
          <button className={styles.iconBtn} aria-label="Wishlist"><WishlistIcon size={20} /></button>
          <button className={`${styles.iconBtn} ${styles.cartBtn}`} aria-label="Cart">
            <CartIcon size={20} />
            <span className={styles.badge}>{cartCount}</span>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        id="mobile-drawer"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerLogo}>Needus<span className={styles.dot}>.</span></span>
          <button className={styles.drawerClose} aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className={styles.drawerNav}>
          {NAV_ITEMS.map((it) => (
            <div key={it.label} className={styles.drawerGroup}>
              <button
                className={styles.drawerItem}
                aria-expanded={!!expanded[it.label]}
                onClick={() => toggleItem(it.label)}
              >
                <span className={styles.drawerItemLabel}>
                  {it.label}
                  {it.active && <span className={styles.activeDot} />}
                </span>
                <span className={styles.chevron} aria-hidden="true">▾</span>
              </button>
              <ul className={`${styles.submenu} ${expanded[it.label] ? styles.submenuOpen : ''}`}>
                {it.sub.map((s) => (
                  <li key={s.label}><a href={s.href}>{s.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* OVERLAY */}
      <button
        className={`${styles.overlay} ${open ? styles.overlayShow : ''}`}
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}
