import Header from './parts/Header.jsx'
import Main from './parts/Main.jsx'
import Footer from './parts/Footer.jsx'
import styles from './pdp.module.css'

export default function PDPPage() {
  return (
    <div className={styles.page}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
