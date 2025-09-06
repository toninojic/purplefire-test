import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small>© {new Date().getFullYear()} Landing</small>
    </footer>
  )
}
