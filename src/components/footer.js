import React from "react";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Pelagio</span>
          <span className={styles.brandTagline}>
            Software Development Agency
          </span>
        </div>
        <div className={styles.info}>
          <a href="mailto:hello@pelag.io" className={styles.link}>
            hello@pelag.io
          </a>
          <span className={styles.separator}>|</span>
          <span>Gothenburg, Sweden</span>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Pelagio Development AB
        </div>
      </div>
    </footer>
  );
}
