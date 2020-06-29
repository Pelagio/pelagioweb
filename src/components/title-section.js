import React from "react";

import sectionStyles from "./page-section.module.css";
import styles from "./title-section.module.css";

export default ({ section }) => {
  return (
    <>
      <section
        id="title"
        className={`${sectionStyles.sectionBlock} ${styles.root}`}
      >
        <div className={`${sectionStyles.sectionContent} ${styles.content}`}>
          <h1 className={styles.h1}>
            {section.title}
            <strong>.</strong>
          </h1>
        </div>
      </section>
      <div className={styles.pitchWave} />
    </>
  );
};
