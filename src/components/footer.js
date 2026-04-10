import React from "react";
import { AnimateInView, Magnetic, fadeIn } from "@pelagio/motion";
import * as styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.root}>
      <AnimateInView variants={fadeIn}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={styles.brandName}>Pelagio</span>
            <span className={styles.brandTagline}>
              Software Development Partner
            </span>
          </div>
          <div className={styles.info}>
            <Magnetic strength={0.4}>
              <a href="mailto:hello@pelag.io" className={styles.link}>
                hello@pelag.io
              </a>
            </Magnetic>
            <span className={styles.separator}>|</span>
            <span>Gothenburg, Sweden</span>
          </div>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Pelagio Development AB
          </div>
        </div>
      </AnimateInView>
    </footer>
  );
}
