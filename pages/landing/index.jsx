import Header from '../landing/parts/Header.jsx'
import Main from '../landing/parts/Main.jsx'
import Footer from '../landing/parts/Footer.jsx'
import styles from '../landing/landing.module.css'

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
