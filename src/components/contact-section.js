import React from "react";
import styles from "./contact-section.module.css";

export default ({ section }) => {
  return (
    <section id={section.anchor} className={styles.sectionBlock}>
      <div className={styles.sectionContent}>
        <h2>{section.title}</h2>
        <div
          className={styles.innerContent}
          dangerouslySetInnerHTML={{
            __html: section.content.content
          }}
        />
      </div>
    </section>
  );
};
