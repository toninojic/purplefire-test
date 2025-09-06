import styles from './main.module.css'
import Carousel from './Carousel.jsx'

const HERO_IMG = '/images/landing-hero.png'

// demo slike za carousel (stavi svoje putanje u /public/images/)
const CARDS = [
  { src: '/images/card-1.jpg', alt: 'Inspiration 1' },
  { src: '/images/card-2.jpg', alt: 'Inspiration 2' },
  { src: '/images/card-3.jpg', alt: 'Inspiration 3' },
  { src: '/images/card-4.jpg', alt: 'Inspiration 4' },
  { src: '/images/card-5.jpg', alt: 'Inspiration 5' },
  { src: '/images/card-6.jpg', alt: 'Inspiration 6' },
]

export default function Main() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.copy}>
          <span className={styles.kicker}>Home Design</span>
          <h1 className={styles.title}>
            Elegance for<br />Interiors &amp; Exteriors
          </h1>
          <p className={styles.lead}>
            We provide everyone with modern,<br />
            trendy, quality furniture
          </p>

          <button className={styles.scrollBtn} aria-label="Scroll">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" />
              <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <img src={HERO_IMG} alt="" />
        </div>
      </section>

      {/* SERVICES BAND */}
      <section className={styles.services}>
        <div className={styles.servicesLeft}>
          <h2 className={styles.servicesTitle}>We stay by your side to design your projects</h2>
          <a href="#" className={styles.linkMore}>Find out more ›</a>
        </div>

        <div className={styles.servicesRight}>
          <div className={styles.serviceItem}>
            <h3>Our Advices</h3>
            <p>Rethink your interior with tips to make your home feel good.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Click and Collect</h3>
            <p>Contactless pickup. Free from €200 in stores offering the service.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Conception Service</h3>
            <p>Personalized service with an expert advisor for your projects.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Installation Service</h3>
            <p>Flat packs for easy assembly—or let our partner handle it.</p>
          </div>
        </div>
      </section>

      {/* TRENDS / NEWSLETTER */}
      <section className={styles.trends}>
        <div className={styles.trendsLeft}>
          <h2>Be aware of the latest trends</h2>
          <p>Stay informed of new trends and various offers.</p>
          <a href="#" className={styles.linkMore}>Learn more ›</a>
        </div>

        <form className={styles.trendsForm} onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="email@address.com" aria-label="Email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* INSPIRATIONS + CAROUSEL */}
      <section className={styles.inspirations}>
        <h2 className={styles.inspTitle}>Inspirations</h2>

        <Carousel items={CARDS} />

        <p className={styles.inspNote}>
          Our experts share new inspirations for your interior and exterior every day.
          To inspire you we have to inspire ourselves—so we share that with you.
        </p>

        <div className={styles.inspPager}>
          <span>01 / 05</span>
        </div>
      </section>
    </main>
  )
}
