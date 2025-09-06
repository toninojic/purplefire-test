import { useState, useMemo } from 'react'
import styles from './carousel.module.css'

/* eslint-disable react/prop-types */
export default function Carousel({ items = [] }) {
  // dupliramo niz da bi @keyframes mogao da “marquee” bez prekida
  const renderItems = useMemo(() => [...items, ...items], [items])

  // smer animacije: 'forward' ili 'reverse'
  const [dir, setDir] = useState('forward')

  // dinamičko trajanje u zavisnosti od broja kartica (glatkije)
  const duration = Math.max(18, items.length * 6) // sekunde

  return (
    <div className={styles.wrap}>
     

      <div className={styles.viewport}>
        <div
          className={styles.track}
          data-dir={dir}
          style={{ '--duration': `${duration}s` }}
        >
          {renderItems.map((it, i) => (
            <figure key={`${it.src}-${i}`} className={styles.card}>
              <img src={it.src} alt={it.alt || ''} />
            </figure>
          ))}
        </div>
      </div>

 {/* strelice su vidljive samo na desktopu kroz CSS */}
      <button
        className={`${styles.ctrl} ${styles.prev}`}
        aria-label="Scroll left"
        onClick={() => setDir('reverse')}
      >
        ‹
      </button>
      <button
        className={`${styles.ctrl} ${styles.next}`}
        aria-label="Scroll right"
        onClick={() => setDir('forward')}
      >
        ›
      </button>
    </div>
  )
}
