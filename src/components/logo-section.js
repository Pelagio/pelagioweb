import React from "react";

import styles from "./logo-section.module.css";

import logo from "../../static/img/logo-outset-white.svg";

export default ({ section }) => {
  return (
    <section id="title">
      <div className={styles.sectionContent}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Pelagio - Software Development Agency" />
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollArrow} />
        </div>
      </div>
    </section>
  );
};
