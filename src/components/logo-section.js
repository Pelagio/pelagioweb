import React from "react";

import styles from "./logo-section.module.css";

import logo from "../../static/img/logo-outset-white.svg";

export default ({ section }) => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section id="title">
      <div className={styles.sectionContent}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Pelagio - Software Development Agency" />
        </div>
        <button
          className={styles.scrollIndicator}
          onClick={handleScrollDown}
          aria-label="Scroll to next section"
        >
          <span>Scroll</span>
          <div className={styles.scrollArrow} />
        </button>
      </div>
    </section>
  );
};
