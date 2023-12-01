import React, { useEffect, useContext } from "react";
import styles from "./page-section.module.css";
import PeopleSection from "./people-section";
import { useIntersect } from "../helpers/use-intersect";
import { IntersectContext } from "../contexts/intersect-context";
import PageSectionHeader from "./page-section-header";

export default ({ section, people }) => {
  const { handleIntersect } = useContext(IntersectContext);

  const [ref, entry] = useIntersect({
    threshold: 0.9
  });

  useEffect(() => {
    handleIntersect(entry);
  }, [entry]);

  return (
    <section ref={ref} id={section.anchor} className={styles.sectionBlock}>
      {people ? (
        <div className={styles.sectionContent} style={{ padding: 0 }}>
          <PageSectionHeader>{section.title}</PageSectionHeader>
          <PeopleSection people={people} />
        </div>
      ) : (
        <div className={styles.sectionContent}>
          <PageSectionHeader>{section.title}</PageSectionHeader>
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
