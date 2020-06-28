import React from "react";

import sectionStyles from "./page-section.module.css";
import styles from "./logo-section.module.css";

import logo from "../../static/img/logo.svg";

export default ({ section }) => {
  return (
    <section id="title" className={sectionStyles.sectionBlock}>
      <div className={styles.sectionContent}>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
    </section>
  );
};
