// src/pages/landing/parts/Carousel.jsx
import {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import styles from './carousel.module.css'

/* eslint-disable react/prop-types */
const Carousel = forwardRef(function Carousel(
  { items = [], onIndexChange },
  ref
) {
  const viewportRef = useRef(null)

  // responsive: desktop vs mobile
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(min-width: 1024px)').matches
      : false
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const handler = (e) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // render niz:
  // - mobile: dupliran (za CSS marquee)
  // - desktop: TRIPLICIRAN (…A B C | A B C | A B C…) za beskonačni ručni scroll
  const BLOCK = items.length
  const START_INDEX = BLOCK
  const renderItems = useMemo(() => {
    if (!BLOCK) return []
    return isDesktop ? [...items, ...items, ...items] : [...items, ...items]
  }, [items, isDesktop, BLOCK])

  // ---- Desktop: ručni scroll sa beskonačnim wrap-om
  const stepRef = useRef(0) // širina kartice + gap
  const blockPxRef = useRef(0)
  const initDoneRef = useRef(false)

  const calcStep = () => {
    const vp = viewportRef.current
    if (!vp) return 0
    const track = vp.firstElementChild // .track
    const card = vp.querySelector(`.${styles.card}`)
    const gap = parseFloat(getComputedStyle(track).gap || '16') || 16
    const w = card ? card.getBoundingClientRect().width : 260
    return w + gap
  }

  // inicijalno pozicioniranje + resize
  useEffect(() => {
    if (!isDesktop || !BLOCK) return
    const vp = viewportRef.current
    if (!vp) return

    const recalc = () => {
      stepRef.current = calcStep()
      blockPxRef.current = BLOCK * stepRef.current
      vp.scrollLeft = START_INDEX * stepRef.current // centriraj na srednji blok
      initDoneRef.current = true
      const idx = normalize(Math.round(vp.scrollLeft / stepRef.current), BLOCK)
      onIndexChange?.(idx)
    }

    const id = requestAnimationFrame(recalc)
    const onResize = () => recalc()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('resize', onResize)
    }
  }, [isDesktop, BLOCK, onIndexChange])

  // wrap + index na scroll
  useEffect(() => {
    if (!isDesktop || !BLOCK) return
    const vp = viewportRef.current
    if (!vp) return

    const onScroll = () => {
      if (!initDoneRef.current || !stepRef.current) return
      const step = stepRef.current
      const blockPx = blockPxRef.current
      const startPx = START_INDEX * step
      const endPx = (START_INDEX + BLOCK) * step

      if (vp.scrollLeft >= endPx) vp.scrollLeft = vp.scrollLeft - blockPx
      else if (vp.scrollLeft < startPx) vp.scrollLeft = vp.scrollLeft + blockPx

      const raw = Math.round(vp.scrollLeft / step)
      const idx = normalize(raw, BLOCK)
      onIndexChange?.(idx)
    }

    vp.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => vp.removeEventListener('scroll', onScroll)
  }, [isDesktop, BLOCK, onIndexChange])

  // ---- Mobile: CSS marquee + "sampler" (pager)
  useEffect(() => {
    if (isDesktop || !BLOCK) return
    let raf = 0
    const tick = () => {
      const vp = viewportRef.current
      if (!vp) {
        raf = requestAnimationFrame(tick)
        return
      }
      const cards = Array.from(vp.querySelectorAll(`.${styles.card}`))
      const vpLeft = vp.getBoundingClientRect().left
      let bestIdx = 0
      let bestDist = Infinity
      cards.forEach((el, i) => {
        const left = el.getBoundingClientRect().left - vpLeft
        const dist = Math.abs(left)
        if (dist < bestDist) {
          bestDist = dist
          bestIdx = i
        }
      })
      onIndexChange?.(normalize(bestIdx, BLOCK))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isDesktop, BLOCK, onIndexChange])

  // trajanje marquee-a na mobilnom
  const duration = Math.max(18, BLOCK * 6)

  // expose public API parentu (strelice iz parenta)
  const scrollByCards = (dir) => {
    if (!isDesktop || !BLOCK) return
    const vp = viewportRef.current
    if (!vp) return
    const step = stepRef.current || calcStep()
    const target = vp.scrollLeft + dir * step * 2 // pomeri po 2 kartice (promeni po želji)
    vp.scrollTo({ left: target, behavior: 'smooth' })

    // wrap nakon animacije
    window.setTimeout(() => {
      const blockPx = blockPxRef.current || BLOCK * step
      const startPx = START_INDEX * step
      const endPx = (START_INDEX + BLOCK) * step
      if (vp.scrollLeft >= endPx) vp.scrollLeft = vp.scrollLeft - blockPx
      else if (vp.scrollLeft < startPx) vp.scrollLeft = vp.scrollLeft + blockPx
    }, 420)
  }

  useImperativeHandle(ref, () => ({
    next: () => scrollByCards(1),
    prev: () => scrollByCards(-1),
    scrollByCards, // ako želiš ručno dir
  }))

  return (
    <div className={styles.wrap}>
      <div className={styles.viewport} ref={viewportRef}>
        <div
          className={`${styles.track} ${isDesktop ? styles.noAnim : ''}`}
          style={!isDesktop ? { '--duration': `${duration}s` } : undefined}
        >
          {renderItems.map((it, i) => (
            <figure key={`${it.src}-${i}`} className={styles.card}>
              <img src={it.src} alt={it.alt || ''} />
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Carousel

function normalize(i, len) {
  if (!len) return 0
  return ((i % len) + len) % len
}
