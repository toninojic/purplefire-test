import styles from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <strong>Landing Header</strong>
        <nav className={styles.nav}>
          <Link to="/landing">Landing</Link>
          <Link to="/pdp">PDP</Link>
        </nav>
      </div>
    </header>
  )
}
