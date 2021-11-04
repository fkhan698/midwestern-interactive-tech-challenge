import React from "react";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.brand}>
        <img
          className={styles.image}
          src="assets/Logo.png"
          alt="Midwest Logo"
        ></img>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <strong>Contact</strong>
        </li>
      </ul>
    </nav>
  );
}
