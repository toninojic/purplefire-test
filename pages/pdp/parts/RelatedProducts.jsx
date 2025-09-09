import { useEffect, useMemo, useRef, useState } from "react";
import { useFavorites } from "./src/utils/favorites.js";
import styles from "./releated.module.css";

// eslint-disable-next-line react/prop-types
export default function RelatedProducts({ items = [], money }) {
  const { isFav, toggle } = useFavorites();

  const getPerPage = () =>
    typeof window !== "undefined" && window.innerWidth >= 1024 ? 4 : 2;

  const [cur, setCur] = useState(0);
  const [perPage, setPerPage] = useState(getPerPage());

  useEffect(() => {
    const onResize = () => setPerPage(getPerPage());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => { setCur(0); }, [perPage]);

  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < items.length; i += perPage) {
      out.push(items.slice(i, i + perPage));
    }
    return out;
  }, [items, perPage]);

  const next = () => setCur((c) => Math.min(c + 1, pages.length - 1));
  const prev = () => setCur((c) => Math.max(c - 1, 0));

  const startX = useRef(0);
  const deltaX = useRef(0);
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchMove = (e) => { deltaX.current = e.touches[0].clientX - startX.current; };
  const onTouchEnd = () => {
    if (Math.abs(deltaX.current) > 40) {
      deltaX.current < 0 ? next() : prev();
    }
    deltaX.current = 0;
  };

  return (
    <section className={styles.related}>
      <h3 className={styles.relatedTitle}>Related Products</h3>

      <div
        className={styles.relViewport}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={styles.relTrack}
          style={{ transform: `translateX(-${cur * 100}%)` }}
        >
          {pages.map((group, idx) => (
            <div key={idx} className={styles.relPage}>
              <div className={styles.cards}>
                {group.map((r, i) => (
                  <article key={`${r.id}-${i}`} className={styles.card}>
                    <div className={styles.cardInfo}>
                        {r.badge && <span className={styles.badge}>{r.badge}</span>}
                        <button
                         className={`${styles.wish} ${isFav(r.id) ? styles.wishActive : ""}`}
                          aria-label={isFav(r.id) ? "Remove from wishlist" : "Add to wishlist"}
                          aria-pressed={isFav(r.id)}
                          onClick={() => toggle(r.id)}
                          title={isFav(r.id) ? "Remove from favorites" : "Add to favorites"}
                        >
                          {isFav(r.id) ? "♥" : "♡"}
                        </button>
                        <div className={styles.cardImg}><img src={r.img} alt={r.title} /></div>
                        <button className={styles.cardBtn}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="20" r="1.5" fill="currentColor"></circle><circle cx="17" cy="20" r="1.5" fill="currentColor"></circle><path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L22 8H7" stroke="currentColor" strokeWidth="1.6" fill="none"></path></svg>
                            Add to cart
                        </button>
                    </div>

                    <div className={styles.cardAtc}>
                        <h4 className={styles.cardTitle}>{r.title}</h4>
                        <div className={styles.cardPrice}>
                            <strong>{money(r.price)}</strong>
                            {r.old && <s>{money(r.old)}</s>}
                        </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Related products pages">
        {pages.map((_, i) => (
          <button
            key={i}
            className={styles.dot}
            role="tab"
            aria-current={i === cur}
            aria-label={`Go to page ${i + 1}`}
            onClick={() => setCur(i)}
          />
        ))}
      </div>
    </section>
  );
}
