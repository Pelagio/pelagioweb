import React from "react";

import sectionStyles from "./page-section.module.css";
import styles from "./logo-section.module.css";

export default ({ section }) => {
  return (
    <section id="title" className={sectionStyles.sectionBlock}>
      <div className={styles.sectionContent}>
        <a className={styles.headerMenuCenter} href="/" />
        <div className={styles.spacer} />
      </div>
    </section>
  );
};
