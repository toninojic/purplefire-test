import styles from './main.module.css'

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.wrap}>
        <div className={styles.gallery}>[Gallery]</div>
        <aside className={styles.buybox}>[BuyBox]</aside>
      </section>

      <section className={styles.details}>
        <h2>Details / Tabs</h2>
        <p>Ovde ide opis/specifikacije iz Figma-e.</p>
      </section>
    </main>
  )
}
