import React from "react";

import styles from "./page-section.module.css";

export default ({ section }) => {
  return (
    <section id="title" className={styles.sectionBlock}>
      <div className={styles.sectionContent}>
        <h1 style={{ textAlign: "center", maxWidth: "600px" }}>
          {section.title}
        </h1>
      </div>
    </section>
  );
};
