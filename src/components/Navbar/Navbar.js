import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ hamActive, setHamActive }) => {
  const logo =
    "/idown_logo.png";
  // const handleClick = () => {
  //   setHamActive(!hamActive);
  // };

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        
        <div className={`${styles.navLeft}`}>
          <img src={logo} alt="logo" className={styles.brand} />
          <h3>idown</h3>
        </div>
        <div className={`${styles.navRight} center`}>
          
          <div className={styles.navright}>
            <a href="/">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;