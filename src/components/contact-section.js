import React from "react";
import styles from "./contact-section.module.css";
import PageSectionHeader from "./page-section-header";

export default ({ section }) => {
  return (
    <section id={section.anchor} className={styles.sectionBlock}>
      <div className={styles.sectionContent}>
        <PageSectionHeader>{section.title}</PageSectionHeader>
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
