import { Link } from 'react-router-dom'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Choose a page</h1>
      <nav className={styles.nav}>
        <Link to="/landing">Go to Landing Page</Link>
        <Link to="/pdp">Go to Product Detail Page</Link>
      </nav>
    </div>
  )
}
