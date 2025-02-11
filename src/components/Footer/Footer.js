// components/Footer/Footer.js

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarColumn} center`}>
        <div className={`${styles.navbarInner} center`}>
          <div className={`${styles.navLeft}`}>
            <a href="https://idown.in">idown</a>
          </div>
          <div className="center">
            <a href="/contact" className={`${styles.navLink}`}>
              Contact
            </a>
            <a href="/" className={`${styles.navLink}`}>
              Privacy Policy
            </a>
            <a href="/" className={`${styles.navLink}`}>
              Terms & Conditions
            </a>
          </div>
          <div>
            <span>
              <a href="#facebook" className="fab fa-facebook-square">
                {" "}
              </a>
            </span>
            <span>
              <a href="#linkedin" className="fab fa-twitter">
                {" "}
              </a>
            </span>
            <span>
              <a href="#instagram" className="fab fa-instagram" style={{ color: "black" }}>
                {" "}
              </a>
            </span>
            <span>
              <a href="#pinterest" className="fab fa-pinterest">
                {" "}
              </a>
            </span>
          </div>
        </div>
        <div className={`${styles.footerText} center`}>
          <p>© 2024-2025 idown. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
