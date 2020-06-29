import React from "react";

import sectionStyles from "./page-section.module.css";
import styles from "./logo-section.module.css";

import logo from "../../static/img/logo-outset-white.svg";

export default ({ section }) => {
  return (
    <section id="title" className={sectionStyles.sectionBlock}>
      <div className={styles.sectionContent}>
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </section>
  );
};
