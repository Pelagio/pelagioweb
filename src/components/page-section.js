import React from "react";

import styles from "./page-section.module.css";
import PeopleSection from "./people-section";

export default ({ section, people }) => {
  return (
    <section id={section.anchor} className={styles.sectionBlock}>
      {people ? (
        <div className={styles.sectionContent} style={{ padding: 0 }}>
          <h2>{section.title}</h2>
          <PeopleSection people={people} />
        </div>
      ) : (
        <div className={styles.sectionContent}>
          <h2>{section.title}</h2>
          <div
            className={styles.innerContent}
            dangerouslySetInnerHTML={{
              __html: section.content.content
            }}
          />
        </div>
      )}
    </section>
  );
};
