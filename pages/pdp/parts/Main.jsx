import RelatedProducts from './RelatedProducts'
import { useEffect, useState } from 'react'
import styles from './main.module.css'

/** ===== Mock data (simulacija fetch-a) ===== */
const PRODUCT = {
  id: 'lg-g2-42',
  collection: 'TV COLLECTION',
  breadcrumb: ['Home', 'Product', 'TV Collection'],
  brand: 'LG',
  model: 'OLED42C29SA',
  availability: 'Only 2 in stock',
  title: 'LG G2 42 (106CM) 4K SMART OLED EVO TV | WEBOS | CINEMA HDR',
  rating: { value: 4.6, count: 212 },
  options: {
    sizes: [
      { code: '106', label: '106 cm (42")' },
      { code: '121', label: '121 cm (48")' },
      { code: '139', label: '139 cm (55")' },
      { code: '164', label: '164 cm (65")' },
      { code: '189', label: '189 cm (75")' },
      { code: '210', label: '210 cm (83")' },
    ],
  },
  price: { current: 600.72, old: 800.0, currency: 'USD' },
  bullets: [
    'α9 Gen5 AI Processor 4K • AI Pro • 20 AI & Upscaling',
    'HDR (Dolby Vision), Perfect Black, 100% Color Fidelity • Color Volume',
    'webOS & ThinQ AI • Magic Remote • AirPlay 2 • HomeKit',
    'Gaming features: 120Hz, VRR, G-SYNC, FreeSync • Dolby Atmos',
    'Eye Comfort Display • Low Blue Light • Flicker Free',
  ],
  images: [
    { src: '/images/pdp-p-1.png', alt: 'Front view' },
    { src: '/images/pdp-p-2.png', alt: 'Side view' },
    { src: '/images/pdp-p-3.png', alt: 'Wall mount' },
    { src: '/images/pdp-p-4.png', alt: 'Ports' },
  ],
  description:
    'The LG G2 42" OLED evo Smart QLED 4K TV is the best all-around OLED TV we’ve tested. Although all OLEDs deliver similar infinite contrast levels, the G2 stands out for HDR highlights and gaming features.',
  spec: [
    { k: 'Panel', v: 'OLED evo' },
    { k: 'Refresh rate', v: '120Hz' },
    { k: 'HDR', v: 'Dolby Vision / HDR10 / HLG' },
    { k: 'OS', v: 'webOS' },
    { k: 'Gaming', v: 'VRR / ALLM / G-SYNC / FreeSync' },
    { k: 'Audio', v: 'Dolby Atmos' },
  ],
  notes: [
    'G2 65" shown in the image for example.',
    '2022 or 2024 models feature eco-friendly packaging.',
    'G2 OLED stand is a minimum 38% lighter than the C1 series.',
  ],
}

const RELATED = [
  {
    id: 'sony-xr',
    title: 'Sony BRAVIA XR Android TV',
    price: 800,
    old: 899.0,
    img: '/images/pdp-rp-1.png',
    badge: 'NEW',
  },
  {
    id: 'mi-p1',
    title: 'Mi P1 Smart Android 4K TV',
    price: 400,
    old: 899.0,
    img: '/images/pdp-rp-2.png',
    badge: 'SALE',
  },
  {
    id: 'konka-oled',
    title: 'Konka OLED Android TV',
    price: 700,
    old: 899.0,
    img: '/images/pdp-rp-3.png',
    badge: 'HOT',
  },
  {
    id: 'tcl-hdr',
    title: 'TCL Roku Android TV',
    price: 500,
    old: 899.0,
    img: '/images/pdp-rp-4.png',
    badge: '-10%',
  },
  {
    id: 'sony-xr',
    title: 'Sony BRAVIA XR Android TV',
    price: 800,
    old: 899.0,
    img: '/images/pdp-rp-1.png',
    badge: 'NEW',
  },
  {
    id: 'mi-p1',
    title: 'Mi P1 Smart Android 4K TV',
    price: 400,
    old: 899.0,
    img: '/images/pdp-rp-2.png',
    badge: 'SALE',
  },
  {
    id: 'konka-oled',
    title: 'Konka OLED Android TV',
    price: 700,
    old: 899.0,
    img: '/images/pdp-rp-3.png',
    badge: 'HOT',
  },
  {
    id: 'tcl-hdr',
    title: 'TCL Roku Android TV',
    price: 500,
    old: 899.0,
    img: '/images/pdp-rp-4.png',
    badge: '-10%',
  },
]

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
          {/* thumbs sa strelicama */}
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
          {/* glavni stage */}
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
            {/* <span className={styles.ratingText}>
              {PRODUCT.rating.value.toFixed(1)} ({PRODUCT.rating.count})
            </span> */}
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
