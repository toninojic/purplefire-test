import RelatedProducts from './RelatedProducts'
import { useEffect, useState } from 'react'
import styles from './main.module.css'
import { PRODUCT, RELATED } from "./src/data/products.js";

/** ===== Mock data (simulacija fetch-a) ===== */

/** ===== Helper ===== */
const money = (v, c = 'USD') =>
  new Intl.NumberFormat(undefined, { style: 'currency', currency: c }).format(v)

/** ===== Component ===== */
export default function Main() {
  const [activeImg, setActiveImg] = useState(0)
  const [size, setSize] = useState(PRODUCT.options.sizes[0].code)
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState('desc') // desc | spec | reviews

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 1024px)').matches
    if (!isMobile) return

    const cta = document.getElementById('cta-block-sentiel')
    const ctaToUpdate = document.getElementById('cta-block')
    if (!cta && !ctaToUpdate) return

    let raf = 0
    const evaluate = () => {
      raf = 0
      const rect = cta.getBoundingClientRect()
      const shouldShow = rect.bottom <= 0
      ctaToUpdate.classList.toggle(styles.show, shouldShow)
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(evaluate)
    }

    evaluate()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <main className={styles.main}>
      {/* Breadcrumbs + collection */}
      <section className={styles.topbar}>
        <h2 className={styles.collection}>{PRODUCT.collection}</h2>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          {PRODUCT.breadcrumb.map((b, i) => (
            <span key={b} className={styles.bcItem}>
              {b}
              {i < PRODUCT.breadcrumb.length - 1 && <span className={styles.bcSep}> / </span>}
            </span>
          ))}
        </nav>
      </section>

      {/* Product panel */}
      <section className={styles.panel}>
        {/* Gallery */}
        <div className={styles.gallery}>
          <div className={styles.thumbsWrap}>
            <button
              className={`${styles.ctrl} ${styles.prev}`}
              aria-label="Scroll thumbs left"
              onClick={() => {
                const el = document.querySelector(`.${styles.thumbs}`)
                if (!el) return
                const w = el.firstElementChild?.getBoundingClientRect().width || 64
                el.scrollBy({ left: -w * 3, behavior: 'smooth' })
              }}
            >
              ‹
            </button>

            <div className={styles.thumbs} role="list">
              {PRODUCT.images.map((img, i) => (
                <button
                  key={img.src}
                  role="listitem"
                  className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ''}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={`Image ${i + 1}`}
                >
                  <img src={img.src} alt={img.alt || ''} />
                </button>
              ))}
            </div>

            <button
              className={`${styles.ctrl} ${styles.next}`}
              aria-label="Scroll thumbs right"
              onClick={() => {
                const el = document.querySelector(`.${styles.thumbs}`)
                if (!el) return
                const w = el.firstElementChild?.getBoundingClientRect().width || 64
                el.scrollBy({ left: w * 3, behavior: 'smooth' })
              }}
            >
              ›
            </button>
          </div>
          <div className={styles.stage}>
            <img
              src={PRODUCT.images[activeImg]?.src}
              alt={PRODUCT.images[activeImg]?.alt || ''}
            />
            <figcaption className={styles.caption}>
              {PRODUCT.title.split('|')[0].trim()}
            </figcaption>
          </div>
        </div>


        {/* Info / Buybox */}
        <aside className={styles.info}>
          <ul className={styles.meta}>
            <li><span>Brand:</span> {PRODUCT.brand}</li>
            <li><span>Model:</span> {PRODUCT.model}</li>
            <li><span>Availability:</span> {PRODUCT.availability}</li>
          </ul>

          <h1 className={styles.title}>{PRODUCT.title}</h1>

          <div className={styles.rating}>
            {renderStars(PRODUCT.rating.value)}
          </div>

          <ul className={styles.bullets}>
            {PRODUCT.bullets.map((t) => <li key={t}>{t}</li>)}
          </ul>

          {/* Size picker */}
          <div className={styles.sizes}>
            {PRODUCT.options.sizes.map((s) => (
              <button
                key={s.code}
                onClick={() => setSize(s.code)}
                className={`${styles.size} ${size === s.code ? styles.sizeActive : ''}`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Price + qty + CTAs */}
          <div id="cta-block-sentiel" className={styles.priceRow}>
            <span>USD(incl. of all taxes):</span>
            <div className={styles.price}>
              <strong>{money(PRODUCT.price.current, PRODUCT.price.currency)}</strong>
              <s>{money(PRODUCT.price.old, PRODUCT.price.currency)}</s>
            </div>           
          </div>

          <div className={styles.ctas}>
            <div className={styles.qty}>
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">−</button>
              <input value={qty} onChange={(e) => setQty(Math.max(1, +e.target.value || 1))} />
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">+</button>
            </div>
            <div className={styles.ctasBtns}>
              <button className={styles.buyNow}>Buy Now</button>
              <button className={styles.addCart}>Add to Cart</button>
            </div>
          </div>

          <div id="cta-block" className={styles.ctasSticky}>
            <div className={styles.priceRow}>
              <span>USD(incl. of all taxes):</span>
              <div className={styles.price}>
                <strong>{money(PRODUCT.price.current, PRODUCT.price.currency)}</strong>
                <s>{money(PRODUCT.price.old, PRODUCT.price.currency)}</s>
              </div>           
            </div>

            <div className={styles.ctas}>
              <div className={styles.qty}>
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">−</button>
                <input value={qty} onChange={(e) => setQty(Math.max(1, +e.target.value || 1))} />
                <button onClick={() => setQty((q) => q + 1)} aria-label="Increase">+</button>
              </div>
              <div>
                <button className={styles.buyNow}>Buy Now</button>
                <button className={styles.addCart}>Add to Cart</button>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Tabs */}
      <section className={styles.tabs}>
        <div className={styles.tabBar} role="tablist" aria-label="Product information">
          <button
            role="tab"
            className={`${styles.tab} ${tab === 'desc' ? styles.tabActive : ''}`}
            onClick={() => setTab('desc')}
          >
            Description
          </button>
          <button
            role="tab"
            className={`${styles.tab} ${tab === 'spec' ? styles.tabActive : ''}`}
            onClick={() => setTab('spec')}
          >
            Specification
          </button>
          <button
            role="tab"
            className={`${styles.tab} ${tab === 'rev' ? styles.tabActive : ''}`}
            onClick={() => setTab('rev')}
          >
            Reviews
          </button>
        </div>

        <div className={styles.tabPanel}>
          {tab === 'desc' && (
            <>
              <p>{PRODUCT.description}</p>
              <ul className={styles.notes}>
                {PRODUCT.notes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </>
          )}

          {tab === 'spec' && (
            <dl className={styles.specList}>
              {PRODUCT.spec.map((s) => (
                <div key={s.k} className={styles.specRow}>
                  <dt>{s.k}</dt>
                  <dd>{s.v}</dd>
                </div>
              ))}
            </dl>
          )}

          {tab === 'rev' && (
            <div className={styles.reviewsEmpty}>
              <p>Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam tincidunt eget. Nulla a mi non nulla fermentum molestie. Aenean magna massa, tempus quis risus nec, sollicitudin consectetur mi. Donec dictum nulla sed nulla semper elementum. Nulla dictum ultrices risus, id ornare arcu rutrum vel. Curabitur vestibulum id nisi at pellentesque. Aenean a lacinia tellus. Aliquam iaculis odio sit amet velit laoreet, non feugiat tellus elementum.</p>
            </div>
          )}
        </div>
      </section>

      {/* Related products */}
      <RelatedProducts items={RELATED} money={money} />
    </main>
  )
}

/** render star rating */
function renderStars(val) {
  const full = Math.floor(val)
  const half = val - full >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  // eslint-disable-next-line react/prop-types
  const Star = ({ fill = 'none' }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 17.3l-6.2 3.5 1.7-6.9L2 8.9l7-.6L12 2l3 6.3 7 .6-5.5 5 1.7 6.9z"
        fill={fill} stroke="#E73C17" strokeWidth="1.4"
      />
    </svg>
  )
  return (
    <span className={styles.stars} aria-label={`${val.toFixed(1)} out of 5`}>
      {Array.from({ length: full }).map((_, i) => <Star key={`f${i}`} fill="#E73C17" />)}
      {half && <Star key="h" fill="url(#half)" />}
      {Array.from({ length: empty }).map((_, i) => <Star key={`e${i}`} fill="none" />)}
    </span>
  )
}
