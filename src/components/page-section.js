import React, { useEffect, useContext } from "react";

import styles from "./page-section.module.css";
import PeopleSection from "./people-section";

import { useIntersect } from "../helpers/use-intersect";
import { IntersectContext } from "../contexts/intersect-context";

export default ({ section, people }) => {
  const { handleIntersect } = useContext(IntersectContext);

  const [ref, entry] = useIntersect({
    threshold: 1
  });

  useEffect(() => {
    handleIntersect(entry);
  }, [entry]);

  return (
    <section ref={ref} id={section.anchor} className={styles.sectionBlock}>
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
