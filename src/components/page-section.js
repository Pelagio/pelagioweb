import React from "react";

import styles from "./page-section.module.css";
import PeopleSection from "./people-section";

export default ({ section, people }) => {
  return (
    <section id={section.anchor} className={styles.sectionBlock}>
      <div
        className={styles.parallax}
        style={{
          backgroundImage: `url(${section.background.fluid.src})`
        }}
      />

      {people ? (
        <div>
          <h2>{section.title}</h2>
          <PeopleSection people={people} />
        </div>
      ) : (
        <div className={styles.sectionContent}>
          <h2>{section.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: section.content.content
            }}
          />
        </div>
      )}
    </section>
  );
};
