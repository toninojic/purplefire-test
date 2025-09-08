import { useState, useEffect } from 'react'
import styles from './footer.module.css'

export default function Footer() {
   const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 1024)
      checkMobile()
      window.addEventListener("resize", checkMobile)
      return () => window.removeEventListener("resize", checkMobile)
    }, [])

  return (
    <footer className={styles.footer}>
      {/* NEWSLETTER BAR */}
      <section className={styles.newsletter}>
        <div className={styles.newsInner}>
          <div className={styles.newsText}>
            <h3>Join our newsletter and get offers</h3>
            <p>Sign up our newsletter</p>
          </div>
          <form className={styles.newsForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <section className={styles.main}>
        {isMobile ? (
          <>
            <div className={styles.colMobile}>
              <ul className={styles.linksMobile}>
                <li><a href="#">About</a></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className={styles.cols}>
              <div className={styles.col}>
                <h4 className={styles.title}>About us</h4>
                <p className={styles.about}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla at laoreet.
                  Quisque ultricies et tortor nec laoreet.
                </p>

                <div className={styles.social}>
                  <a href="#" aria-label="Facebook" className={styles.ic}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 10h3l-1 4h-2v8h-4v-8H7v-4h2V8a4 4 0 0 1 4-4h3v4h-3a1 1 0 0 0-1 1v1z"/></svg>
                  </a>
                  <a href="#" aria-label="WhatsApp" className={styles.ic}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.7 15l-1 4 4-1A10 10 0 1 0 12 2zm5.6 14.3c-.2.6-1.1 1-1.7 1.1-.5.1-1.2.1-1.9-.1a8.7 8.7 0 0 1-4.6-2.6c-1.3-1.4-2.2-3-2.5-4.7-.2-1 .3-2 1-2.2.4-.2.8-.2 1.1 0l.8.4c.2.1.5.5.6.8.1.3.1.6-.1.9l-.3.5c-.2.3-.2.5 0 .8.3.5.8 1.1 1.3 1.7.6.6 1.2 1.1 1.8 1.4.2.1.5.1.8-.1l.5-.3c.3-.2.6-.2.9-.1.3.1.6.4.8.6l.4.8c.2.4.3.8.1 1.1z"/></svg>
                  </a>
                  <a href="#" aria-label="Instagram" className={styles.ic}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm5.8-1.3a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                  </a>
                  <a href="#" aria-label="YouTube" className={styles.ic}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23 12s0-3.6-.5-5.2c-.3-1-1-1.7-2-2C18.9 4 12 4 12 4s-6.9 0-8.5.8c-1 .3-1.7 1-2 2C1 8.4 1 12 1 12s0 3.6.5 5.2c.3 1 1 1.7 2 2C5.1 20 12 20 12 20s6.9 0 8.5-.8c1-.3 1.7-1 2-2 .5-1.6.5-5.2.5-5.2zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
                  </a>
                </div>
              </div>

              <div className={styles.colSmaller}>
                <h4 className={styles.title}>Information</h4>
                <ul className={styles.links}>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Delivery information</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Sales</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">EMI Payment</a></li>
                </ul>
              </div>

              <div className={styles.colSmaller}>
                <h4 className={styles.title}>Account</h4>
                <ul className={styles.links}>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">My Orders</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">Account Details</a></li>
                </ul>
              </div>

              <div className={styles.colSmaller}>
                <h4 className={styles.title}>Store</h4>
                <ul className={styles.links}>
                  <li><a href="#">Affiliate</a></li>
                  <li><a href="#">Discounts</a></li>
                  <li><a href="#">Sale</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">All Collections</a></li>
                </ul>
              </div>

              <div className={styles.col}>
                <h4 className={styles.title}>Contact us</h4>
                <p className={styles.contactText}>
                  If you have any query, please contact us<br />
                  <a href="mailto:needus24@gmail.com" className={styles.mail}>needus24@gmail.com</a>
                </p>

                <div className={styles.contactItem}>
                  <span className={styles.iconCircle}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M3 9l9-6 9 6v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9z" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M3 9l9 6 9-6" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </span>
                  <span>California, USA</span>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.iconCircle}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l2-.9c.4-.2.9 0 1.1.3l1.8 2.7c.3.4.2.9-.2 1.2-1.1.8-2.5 1.3-3.9 1.3C8.6 21 3 15.4 3 8.9c0-1.4.5-2.8 1.3-3.9.3-.4.8-.5 1.2-.2l2.7 1.8c.3.2.5.7.3 1.1l-.9 2z" stroke="currentColor" strokeWidth="1.6"/>
                    </svg>
                  </span>
                  <a href="tel:+12012987481">+12012987481</a>
                </div>
              </div>
            </div>
          </>
        )}
        
        <div className={styles.bottom}>
          <p>Copyright. 2023 All Right Reserved</p>
        </div>
      </section>
    </footer>
  )
}
