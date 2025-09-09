import { useEffect, useState } from 'react'
import styles from './footer.module.css'

const COLS_MOBILE = {
  About: ['Our story', 'Our stores', 'Our partners'],
  Products: ['Furniture', 'Decoration', 'Storage', 'Baby and child', 'Connected home'],
  Services: ['Click and collect', 'Conception', 'Installation', 'Advices', 'Gift card'],
  Rooms: ['Living room', 'Dining room', 'Cooked', 'Bedroom', 'Bathroom', 'Office', 'Laundry', 'Garage'],
};

const COLS_DESKTOP = {
  Products: ['Furniture', 'Decoration', 'Storage', 'Baby and child', 'Connected home'],
  Rooms: ['Living room', 'Dining room', 'Cooked', 'Bedroom', 'Bathroom', 'Office', 'Laundry', 'Garage'],
  Services: ['Click and collect', 'Conception', 'Installation', 'Advices', 'Gift card'],
  About: ['Our story', 'Our stores', 'Our partners'],
};


export default function Footer() {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia('(min-width: 1024px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const COLS = isDesktop ? COLS_DESKTOP : COLS_MOBILE;

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>antic</div>

        <nav className={styles.columns} aria-label="Footer">
          {Object.entries(COLS).map(([title, items]) => (
            <div key={title} className={styles.col}>
              <h3 className={styles.colTitle}>{title}</h3>
              <ul className={styles.colList}>
                {items.map((t) => (
                  <li key={t}><a href="#">{t}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <aside className={styles.planet}>
          <h3 className={styles.colTitle}>We respect our planet</h3>
          <div className={styles.thumb}>
            <img src="/images/footer.png" alt="Sustainable interior" />
          </div>
          <p className={styles.note}>
            We’re taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly.
          </p>
          <a href="#" className={styles.more}>Learn more ›</a>
        </aside>
      </div>

      <div className={styles.bottom}>
        <div className={styles.social} aria-label="Social">
          <a href="#" aria-label="Facebook" className={styles.ic}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13 10h3l-1 4h-2v8h-4v-8H7v-4h2V8a4 4 0 0 1 4-4h3v4h-3a1 1 0 0 0-1 1v1z"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className={styles.ic}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2.1-.8.5-1.6.8-2.5 1A3.8 3.8 0 0 0 12 8.3c0 .3 0 .7.1 1C8.3 9.2 5 7.5 2.9 4.8a3.7 3.7 0 0 0-.5 1.9c0 1.3.7 2.5 1.8 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 2 2.6 3.7 2.6A7.6 7.6 0 0 1 2 18.4 10.7 10.7 0 0 0 7.8 20c7.2 0 11.2-6 11.2-11.2v-.5c.8-.5 1.4-1.1 2-1.8z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className={styles.ic}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 9H3v12h3V9zm.2-6.1A1.9 1.9 0 1 0 6 6.7a1.9 1.9 0 0 0 .2-3.8zM21 21h-3v-6.4c0-1.5-.6-2.6-2-2.6s-2 .9-2.3 1.7c-.1.2-.1.6-.1.9V21h-3V9h3v1.8c.4-.7 1.6-2 3.7-2 2.6 0 3.7 1.7 3.7 4.4V21z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className={styles.ic}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.8-3.3a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
          </a>
        </div>

        <div className={styles.legalContainer}>
          <ul className={styles.legal}>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Term of service</a></li>
            <li><a href="#">Language</a></li>
          </ul>
      
          <small className={styles.copy}>© 2021 Agence Dnd</small>
        </div>
      </div>
    </footer>
  )
}
