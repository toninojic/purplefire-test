import styles from './whishlist.module.css';

// eslint-disable-next-line react/prop-types
export default function WishlistPopover({ items = [] }) {
  const money = (v, c = "USD") =>
    new Intl.NumberFormat(undefined, { style: "currency", currency: c }).format(v);

  if (!items.length) {
    return <div className={styles.wEmpty}>Your wishlist is empty.</div>;
  }

  return (
    <div className={styles.wishList}>
      {items.map((it) => (
        <article key={it.id} className={styles.wItem}>
          <div className={styles.wThumb}>
            <img src={it.img || it.images?.[0]?.src} alt={it.title} />
          </div>
          <div className={styles.wMeta}>
            <div className={styles.wTitle}>{it.title}</div>
            {"price" in it
              ? <div className={styles.wPrice}>{money(it.price, it.currency || "USD")}</div>
              : it.price?.current
              ? <div className={styles.wPrice}>{money(it.price.current, it.price.currency || "USD")}</div>
              : null}
          </div>
        </article>
      ))}
    </div>
  );
}
