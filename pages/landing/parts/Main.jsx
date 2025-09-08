import { useState, useRef, useEffect } from 'react'
import styles from './main.module.css'
import Carousel from './Carousel.jsx'

const HERO_IMG = '/images/landing-hero.png'

const CARDS = [
  { src: '/images/card-1.jpg', alt: 'Inspiration 1' },
  { src: '/images/card-2.jpg', alt: 'Inspiration 2' },
  { src: '/images/card-3.jpg', alt: 'Inspiration 3' },
  { src: '/images/card-4.jpg', alt: 'Inspiration 4' },
  { src: '/images/card-5.jpg', alt: 'Inspiration 5' },
  { src: '/images/card-6.jpg', alt: 'Inspiration 6' },
]

export default function Main() {
  const carouselRef = useRef(null)
  const [cur, setCur] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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

          <button
            className={styles.scrollBtn}
            aria-label="Scroll"
            onClick={() => {
              const target = document.getElementById('band');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <svg
              className={styles.scrollIcon}
              width="40"
              height="40"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <img src={HERO_IMG} alt="" />
        </div>
      </section>

      {/* SERVICES BAND */}
      <section className={styles.services} id="band">
        <div className={styles.servicesLeft}>
          <h2 className={styles.servicesTitle}>We stay by your side to design your projects</h2>
          <a href="#" className={styles.linkMore}>Find out more ›</a>
        </div>

        <div className={styles.servicesRight}>
          <div className={styles.serviceItem}>
            <h3>Our Advices</h3>
            <p>What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Click and Collect</h3>
            <p>Adapted and contactless. Free from € 200 of purchases in stores offering the service.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Conception Service</h3>
            <p>Personalized service with an expert advisor for your interior and exterior decoration or layout projects.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Installation Service</h3>
            <p>Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.</p>
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
        {isMobile ? (
          <>
            <div className={styles.inspWrap}>
              <div className={styles.inspirationContainer}>
                <h2 className={styles.inspTitle}>Inspirations</h2>
                <p className={styles.inspNote}>
                  Our experts are keen to stay on top of trends in order to offer
                  you new inspirations for your interior and exterior every day.
                  Remember that to inspire you we have to inspire ourselves and we
                  want to share that with you.
                </p>
                <div className={styles.inspPager}>
                  <span>
                    {String(cur + 1).padStart(2, "0")} /{" "}
                    {String(CARDS.length).padStart(2, "0")}
                  </span>
                </div>
                <div className={styles.inspCtrls}>
                  <button
                    className={styles.ctrl}
                    onClick={() => carouselRef.current?.prev()}
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <button
                    className={styles.ctrl}
                    onClick={() => carouselRef.current?.next()}
                    aria-label="Next"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
            <Carousel ref={carouselRef} items={CARDS} onIndexChange={setCur} />
          </>
        ) : (
          <>
            <Carousel ref={carouselRef} items={CARDS} onIndexChange={setCur} />
            <div className={styles.inspWrap}>
              <div className={styles.inspirationContainer}>
                <h2 className={styles.inspTitle}>Inspirations</h2>
                <p className={styles.inspNote}>
                  Our experts are keen to stay on top of trends in order to offer
                  you new inspirations for your interior and exterior every day.
                  Remember that to inspire you we have to inspire ourselves and we
                  want to share that with you.
                </p>
                <div className={styles.inspPagerWrapper}>
                  <div className={styles.inspCtrls}>
                    <button
                      className={styles.ctrl}
                      onClick={() => carouselRef.current?.prev()}
                      aria-label="Previous"
                    >
                      ‹
                    </button>
                    <button
                      className={styles.ctrl}
                      onClick={() => carouselRef.current?.next()}
                      aria-label="Next"
                    >
                      ›
                    </button>
                  </div>
                  <div className={styles.inspPager}>
                    <span>
                      {String(cur + 1).padStart(2, "0")} /{" "}
                      {String(CARDS.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  )
}
